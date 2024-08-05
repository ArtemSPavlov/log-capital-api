import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Fruit } from './database/fruit.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('FRUIT_REPOSITORY')
    private fruitsRepository: Repository<Fruit>,
  ) {}

  async getFruits(): Promise<Fruit[]> {
    return this.fruitsRepository.find();
  }
}
