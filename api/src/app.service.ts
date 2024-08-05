import { Observable } from 'rxjs';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Fruit } from './app.interfaces';

@Injectable()
export class AppService {
  constructor(@Inject('FRUITS_SERVICE') private natsClient: ClientProxy) {}

  getFruits(): Observable<Fruit[]> {
    return this.natsClient.send('get_fruits', {});
  }
}
