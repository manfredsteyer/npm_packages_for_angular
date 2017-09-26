import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  add(a: number, b: number): number {
    return a + b;
  }

}
