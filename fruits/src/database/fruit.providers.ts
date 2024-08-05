import { DataSource } from 'typeorm';
import { Fruit } from './fruit.entity';

export const fruitProviders = [
  {
    provide: 'FRUIT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Fruit),
    inject: ['DATA_SOURCE'],
  },
];
