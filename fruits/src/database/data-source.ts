import { ConfigModule } from '@nestjs/config';

import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import InitSeeder from './seeds/index';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const port = parseInt(String(process.env.DATABASE_PORT), 10) || 5432;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const database = process.env.POSTGRES_DATABASE;

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'postgres',
  port,
  username,
  password,
  database,
  entities: [__dirname + '/*.entity{.ts,.js}'],
  synchronize: true,
  seeds: [InitSeeder],
};

export const source = new DataSource(dataSourceOptions);
