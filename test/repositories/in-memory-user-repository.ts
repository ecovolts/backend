import { FastifyRequest } from 'fastify'
import { User as UserClerk, clerkClient } from '@clerk/clerk-sdk-node'
import { getAuth } from '@clerk/fastify'

import { User } from '@application/entities/user/user.entity'
import { UsersRepository } from '@application/repositories/users.repository'

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = []

  async auth(req: FastifyRequest) {
    const { userId } = getAuth(req)
    const userClerk: UserClerk = await clerkClient.users.getUser(userId ?? '')

    const user = this.users.find((user) => user.id === userClerk.id)

    if (user) {
      console.log('usuario autenticado.')
    }
  }

  async create(user: User) {
    this.users.push(user)
  }

  async findAll(page: number): Promise<any> {
    const users = this.users
    const currentPage = page

    return users.map((user) => {
      return {
        user,
        meta: {
          page: currentPage,
        },
      }
    })
  }

  async findById(userId: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === userId)

    if (!user) {
      return null
    }

    return user
  }
}
