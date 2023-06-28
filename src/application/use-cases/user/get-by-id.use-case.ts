import { Injectable } from '@nestjs/common'

import { UsersRepository } from '@application/repositories/users.repository'
import { User } from '@application/entities/user/user.entity'

@Injectable()
export class FindUserById {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(userId: string): Promise<User | null> {
    const user = await this.usersRepository.findById(userId)
    return user
  }
}
