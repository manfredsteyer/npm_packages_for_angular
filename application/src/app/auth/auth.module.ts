
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/auth/auth.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [], // keine Provider/ keine Services
  exports: []
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    }
  }
}
