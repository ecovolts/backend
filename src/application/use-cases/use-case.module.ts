import { Module } from '@nestjs/common'

import { DatabaseModule } from '@infra/database/database.module'
import { FindAllUsers } from './user/get-all.use-case'
import { FindUserById } from './user/get-by-id.use-case'
import { CreateUser } from './user/create.use-case'
import { AuthUser } from './user/auth.use-case'

@Module({
  imports: [DatabaseModule],
  providers: [AuthUser, FindAllUsers, CreateUser, FindUserById],
  exports: [AuthUser, FindAllUsers, CreateUser, FindUserById],
})
export class UseCasesModule {}
