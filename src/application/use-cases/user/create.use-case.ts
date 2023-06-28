import { Injectable } from '@nestjs/common'

import { Email } from '@application/entities/user/email'
import { User } from '@application/entities/user/user.entity'
import { UsersRepository } from '@application/repositories/users.repository'

interface CreateUserRequest {
  name: string
  email: string
  passwordEnabled: boolean
  avatarUrl?: string | null
  accountType?: string | null
}

interface CreateUserResponse {
  user: User
}

@Injectable()
export class CreateUser {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email, passwordEnabled, avatarUrl, accountType } = request

    const user = new User({
      name,
      email: new Email(email),
      passwordEnabled,
      avatarUrl,
      accountType,
    })

    await this.usersRepository.create(user)

    return {
      user,
    }
  }
}
