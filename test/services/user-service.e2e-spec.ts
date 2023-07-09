import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'

import { AppModule } from '@src/app.module'
import { BASE_API_URL } from '@src/constants/api'
import { PrismaUsersRepository } from '@infra/database/prisma/repositories/prisma-users.repository'
import { PostgreSqlService } from '@infra/database/prisma/postgresql.service'

describe('UserRepository (e2e)', () => {
  let app: INestApplication
  let postgreSqlService: PostgreSqlService
  let prismaUserRepository: PrismaUsersRepository

  beforeAll(async () => {
    postgreSqlService = new PostgreSqlService()
    prismaUserRepository = new PrismaUsersRepository(postgreSqlService)

    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  it('/get (GET)', async () => {
    return request(app.getHttpServer())
      .get(`${BASE_API_URL}/users/get/?page=1`)
      .expect(200)
      .expect(await prismaUserRepository.findAll(1))
  })

  afterAll(async () => {
    await app.close()
  })
})
