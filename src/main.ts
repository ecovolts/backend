import { NestFactory } from '@nestjs/core'
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify'
import { AppModule } from '@src/app.module'
import { clerkPlugin } from '@clerk/fastify'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )

  app.register(clerkPlugin)

  await app.listen(process.env.PORT ?? 0)
  console.log(`~ Application is running on: ${await app.getUrl()}`)
}
bootstrap()
