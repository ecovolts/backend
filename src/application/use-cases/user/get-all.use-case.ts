import { Injectable } from '@nestjs/common'

// import { UserInterface } from '@infra/http/dtos/user.dto'
import { UsersRepository } from '@application/repositories/users.repository'
import { User } from '@application/entities/user/user.entity'

@Injectable()
export class FindAllUsers {
  constructor(private readonly usersRepository: UsersRepository) {}
  async execute(page: number): Promise<User[]> {
    return await this.usersRepository.findAll(page)
  }
}
