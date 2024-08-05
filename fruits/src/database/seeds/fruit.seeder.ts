import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Fruit } from '../fruit.entity';
import defaultFruits from './default-fruits';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    console.log('seeding fruits...');
    await dataSource.query('TRUNCATE "fruits" RESTART IDENTITY;');
    await dataSource.getRepository(Fruit).insert(defaultFruits);
  }
}
