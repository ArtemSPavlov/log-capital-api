import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { Fruit } from './database/fruit.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_fruits')
  async getFruits(
    @Payload() data: string,
    @Ctx() context: NatsContext,
  ): Promise<Fruit[]> {
    return this.appService.getFruits();
  }
}
