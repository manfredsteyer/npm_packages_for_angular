import {Component} from '@angular/core';
import {AuthService} from 'app/shared/auth/auth.service';
import {LoggerService, SampleService} from 'my-lib';

@Component({
  selector: 'home',
  template: `
    <h1 *ngIf="userName">Willkommen, {{userName}}</h1>
    <h1 *ngIf="!userName">Willkommen!</h1>

    <sample-component></sample-component>

    <button class="btn btn-default" (click)="login()">Login</button>
    <button class="btn btn-default" (click)="logout()">Logout</button>
  `
})
export class HomeComponent {

  constructor(
    private authService: AuthService,
    private sampleService: SampleService,
    private loggerService: LoggerService
  ) {
      
    let result = sampleService.add(7, 4);
    console.debug('result', result);

    loggerService.log('log message from home');
    loggerService.debug('debug message from home');
  }

  get userName() {
    return this.authService.userName;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
