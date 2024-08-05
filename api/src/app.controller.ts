import { Observable } from 'rxjs';
import { Controller, Get, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Fruit } from './app.interfaces';

@UseGuards(JwtAuthGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('fruits')
  getFruits(): Observable<Fruit[]> {
    return this.appService.getFruits();
  }
}
