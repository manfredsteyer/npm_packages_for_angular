import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from './flight-booking.component';
import { AuthGuard } from '../shared/auth/auth.guard';

const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    // canActivate: [AuthGuard],
    data: {
      roles: 'User',
      permissionLevel: 17
    },
    children: [
      {
        path: '', // flight-booking
        redirectTo: 'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search', // flight-booking/flight-search
        component: FlightSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      }

    ]
  },
];

export const FlightBookingRouterModule
              = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
