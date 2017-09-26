
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { AuthService } from "app/shared/auth/auth.service";
import { DelayResolver } from "app/shared/tools/delay.resolver";
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe
  ],
  providers: [
    DelayResolver,
    AuthGuard
  ],
  exports: [
    CityPipe
  ]
})
export class SharedModule {

}
