import { ConfigModule } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

ConfigModule.forRoot({
  envFilePath: '.env',
});

async function bootstrap() {
  const natsHost = process.env.NATS_HOST || 'nats';
  const natsPort = process.env.NATS_PORT || '4222';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: [`nats://${natsHost}:${natsPort}`],
        queue: 'fruits_queue',
      },
    },
  );
  app.listen();
}
bootstrap();
