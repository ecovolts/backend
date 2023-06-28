import { Injectable } from '@nestjs/common'

import { FastifyRequest } from 'fastify'
import { UsersRepository } from '@application/repositories/users.repository'

@Injectable()
export class AuthUser {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(request: FastifyRequest): Promise<void> {
    const userSession = await this.usersRepository.auth(request)
    return userSession
  }
}
