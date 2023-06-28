import { Module } from '@nestjs/common'
import { PostgreSqlService } from '@infra/database/prisma/postgresql.service'
import { PrismaUsersRepository } from '@infra/database/prisma/repositories/prisma-users.repository'
import { UsersRepository } from '@application/repositories/users.repository'

@Module({
  providers: [
    PostgreSqlService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [UsersRepository],
})
export class DatabaseModule {}
