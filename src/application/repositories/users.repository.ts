import { FastifyRequest } from 'fastify'

// import { UserInterface } from '@infra/http/dtos/user.dto'
import { User } from '@application/entities/user/user.entity'

export abstract class UsersRepository {
  abstract findAll(page: number): Promise<User[]>
  abstract findById(userId: string): Promise<User | null>
  abstract auth(req: FastifyRequest): Promise<void>
  abstract create(user: User): Promise<void>
}
