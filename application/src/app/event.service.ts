
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Flight } from './entities/flight';

@Injectable()
export class EventService {
  public flightSelected = new ReplaySubject<Flight>(2);
}
