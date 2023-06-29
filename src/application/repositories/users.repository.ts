import { FastifyRequest } from 'fastify'

import { User } from '@application/entities/user/user.entity'

export abstract class UsersRepository {
  abstract findAll(page: number): Promise<User[]>
  abstract findById(userId: string): Promise<User | null>
  abstract auth(request: FastifyRequest): Promise<void>
  abstract create(user: User): Promise<void>
}
