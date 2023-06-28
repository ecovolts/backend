import { Module } from '@nestjs/common'

import { DatabaseModule } from '@infra/database/database.module'
import { UseCasesModule } from '@application/use-cases/use-case.module'
import { UsersController } from '@infra/http/controllers/users.controller'

@Module({
  imports: [DatabaseModule, UseCasesModule],
  controllers: [UsersController],
})
export class HttpModule {}
