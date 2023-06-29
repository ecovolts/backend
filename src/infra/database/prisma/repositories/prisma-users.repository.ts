import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { User as UserClerk, clerkClient } from '@clerk/clerk-sdk-node'
import { getAuth } from '@clerk/fastify'

import { paginator } from '@src/utils/paginator'
import { OAUTH, OWNERSHIP_AUTH } from '@src/constants/variables'

import { PaginatedResult } from '@core/dtos/paginated-result'

import { UserInterface } from '@infra/http/dtos/user.dto'
import { PostgreSqlService } from '@infra/database/prisma/postgresql.service'

import { UsersRepository } from '@application/repositories/users.repository'
import { User } from '@application/entities/user/user.entity'
import { Email } from '@application/entities/user/email'
import { FastifyRequest } from 'fastify'

const paginate = paginator({ perPage: 2 })

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly postgresql: PostgreSqlService) {}

  async findAll(page: number): Promise<any> {
    const request: PaginatedResult<UserInterface> = await paginate(
      this.postgresql.user,
      {
        page,
      },
    )
    const { data, meta } = request
    const users = data.map((user: any) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        avatarUrl: user?.avatarUrl ?? '',
        accessLevel: user.accessLevel,
        blocked: user.blocked,
        accountType: user.accountType,
        createdAt: user.created_at,
      }
    })
    return {
      users,
      meta,
    }
  }

  async findById(userId: string): Promise<any> {
    const user = await this.postgresql.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.')
    }

    return {
      id: user?.id ?? '',
      name: user?.name ?? '',
      email: new Email(user?.email ?? ''),
      avatarUrl: user?.avatarUrl ?? '',
      passwordEnabled: user?.passwordEnabled,
      accountType: user.accountType,
      createdAt: user.created_at,
    }
  }

  async create(user: User): Promise<void> {
    const userExists = await this.postgresql.user.findFirst({
      where: {
        email: String(user.email),
      },
    })

    if (!userExists) {
      await this.postgresql.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email.value,
          avatarUrl: user?.avatarUrl,
          passwordEnabled: user.passwordEnabled,
          accountType: OWNERSHIP_AUTH.type,
        },
      })
    } else {
      throw new BadRequestException('Usuário já cadastrado.')
    }
  }

  async auth(request: FastifyRequest): Promise<void> {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    const { userId, sessionClaims } = getAuth(request)

    const userClerk: UserClerk = await clerkClient.users.getUser(userId ?? '')

    let user = await this.postgresql.user.findUnique({
      where: {
        id: userClerk.id,
      },
    })

    if (userClerk.id !== user?.id) {
      user = await this.postgresql.user.create({
        data: {
          id: userClerk.id,
          name:
            userClerk?.firstName || userClerk?.lastName
              ? userClerk.firstName!.concat(' ').concat(userClerk.lastName!)
              : '',
          email: userClerk.emailAddresses[0].emailAddress,
          avatarUrl: userClerk?.imageUrl,
          passwordEnabled: userClerk.passwordEnabled,
          accountType: userClerk.passwordEnabled
            ? OWNERSHIP_AUTH.type
            : OAUTH.type,
        },
      })
    }

    if (user) {
      let account = await this.postgresql.account.findFirst({
        where: {
          user_id: user?.id,
        },
      })

      if (!account) {
        account = await this.postgresql.account.create({
          data: {
            user_id: user?.id ?? null,
            type: userClerk.emailAddresses[0].verification?.strategy ?? '',
            provider:
              userClerk.externalAccounts.length > 0
                ? userClerk.externalAccounts[0].provider
                : '',
            provider_account_id:
              userClerk.externalAccounts.length > 0
                ? userClerk.externalAccounts[0].id
                : '',
            scope:
              userClerk.externalAccounts.length > 0
                ? userClerk.externalAccounts[0].approvedScopes
                : null,
            token_type: type,
            access_token: String(token),
            session_state: sessionClaims?.sid ? 'active' : 'inactive',
          },
        })
      } else {
        account = await this.postgresql.account.update({
          where: {
            id: account?.id,
          },
          data: {
            access_token: String(token),
          },
        })
      }
    }
  }

  // essa rota deve existir? (quero atualizar o session_state para inativo no logout)
  async logout(request: FastifyRequest): Promise<void> {
    const { userId } = getAuth(request)

    const userClerk: UserClerk = await clerkClient.users.getUser(userId ?? '')

    const user = await this.postgresql.user.findUnique({
      where: {
        id: userClerk.id,
      },
    })

    if (user) {
      let account = await this.postgresql.account.findFirst({
        where: {
          user_id: user?.id,
        },
      })

      if (account) {
        account = await this.postgresql.account.update({
          where: {
            id: account?.id,
          },
          data: {
            session_state: 'inactive',
          },
        })
      }
    }
  }
}
