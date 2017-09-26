import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from './flight.service';
import { Flight } from '../../entities/flight';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Observer} from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'flight-search',
  templateUrl: 'flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

  from: string;
  to: string;
  // flights: Array<Flight> = [];
  selectedFlight: Flight;

  // flights --> flights()
  get flights(): Flight[] {
    return this.flightService.flights;
  }

  get flights$(): Subject<Flight[]> {
    return this.flightService.flights$;
  }

  basket: any = {
    "3": true,
    "4": false,
    "5": true
  };
  //private http: Http;

  constructor(private flightService: FlightService) {
    // this.http = http;
  }

  search(): void {
      this.flightService.find(this.from, this.to);
  }

  delay(): void {
    this.flightService.delay();
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }

}
