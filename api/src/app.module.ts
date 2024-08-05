import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';

const natsHost = process.env.NATS_HOST || 'nats';
const natsPort = process.env.NATS_PORT || '4222';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FRUITS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [`nats://${natsHost}:${natsPort}`],
          queue: 'fruits_queue',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
