import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { fruitProviders } from './database/fruit.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [...fruitProviders, AppService],
})
export class AppModule {}
