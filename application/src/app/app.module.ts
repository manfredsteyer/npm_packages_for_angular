import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {OAuthModule} from 'angular-oauth2-oidc';
import {AbstractFormatterService, SampleModule} from 'my-lib';

import {AppComponent} from './app.component';
import {AppRouterModule} from './app.routes';
import {BASE_URL} from './app.tokens';
import {AuthModule} from './auth/auth.module';
import {BasketComponent} from './basket/basket.component';
import {EventService} from './event.service';
import {FlightSearchComponent} from './flight-booking/flight-search/flight-search.component';
import {FlightService} from './flight-booking/flight-search/flight.service';
import {HomeComponent} from './home/home.component';
import {CustomFormatterService} from './shared/logger/custom.formatter';
import {CityPipe} from './shared/pipes/city.pipe';
import {SharedModule} from './shared/shared.module';


export function createLoader(http: Http) {
    return new TranslateHttpLoader (http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    
    SampleModule.forRoot(true),


    // FlightBookingModule,
    AppRouterModule,
    SharedModule,
    AuthModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createLoader,
            deps: [Http]
        }
    }),
    OAuthModule.forRoot()
  ],
  declarations: [
    AppComponent,
    BasketComponent,
    HomeComponent
  ],
  providers: [
    EventService,
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'},
    { provide: AbstractFormatterService, useClass: CustomFormatterService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
