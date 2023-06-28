import {
  INestApplication,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PostgreSqlService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  public readonly prisma: PrismaClient
  constructor() {
    super({
      log: ['query'],
    })
    this.prisma = new PrismaClient()
  }

  async onModuleInit() {
    await this.$connect()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }

  get user() {
    return this.prisma.user
  }
}
