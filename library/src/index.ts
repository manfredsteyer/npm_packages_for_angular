import { LOGGER_DEBUG } from './token';
import { DefaultFormatterService } from './default-formatter.service';
import { AbstractFormatterService } from './abstract-formatter.service';
import { LoggerService } from './logger.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

export * from './abstract-formatter.service';
export * from './default-formatter.service';
export * from './logger.service';
export * from './token';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class SampleModule {
  static forRoot(debug: boolean = false): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [
        SampleService,
        LoggerService,
        { provide: AbstractFormatterService, useClass: DefaultFormatterService },
        { provide: LOGGER_DEBUG, useValue: debug}
      ]
    };
  }
}
