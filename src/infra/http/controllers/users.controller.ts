import { Controller, Get, Post, Body, Param, Req, Query } from '@nestjs/common'
import { FastifyRequest } from 'fastify'

import { BASE_API_URL } from '@src/constants/api'
import { CreateUserBody } from '@infra/http/dtos/user.dto'

import { AuthUser } from '@application/use-cases/user/auth.use-case'
import { FindAllUsers } from '@application/use-cases/user/get-all.use-case'
import { CreateUser } from '@application/use-cases/user/create.use-case'
import { FindUserById } from '@application/use-cases/user/get-by-id.use-case'

@Controller(`${BASE_API_URL}/users`)
export class UsersController {
  constructor(
    private authUser: AuthUser,
    private findAllUsers: FindAllUsers,
    private findUserById: FindUserById,
    private createUser: CreateUser,
  ) {}

  @Get('/get')
  findAll(@Query('page') page: number) {
    return this.findAllUsers.execute(page)
  }

  @Get(`/get/:id`)
  async findById(@Param('id') id: string) {
    return this.findUserById.execute(id)
  }

  @Get(`/auth`)
  async auth(@Req() request: FastifyRequest) {
    return this.authUser.execute(request)
  }

  @Post('/create')
  async create(@Body() body: CreateUserBody) {
    const { name, email, passwordEnabled, avatarUrl, accountType } = body

    const { user } = await this.createUser.execute({
      name,
      email,
      passwordEnabled,
      avatarUrl,
      accountType,
    })

    return user
  }
}
