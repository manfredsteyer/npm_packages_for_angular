

import { Injectable } from '@angular/core';

@Injectable()
export abstract class AbstractFormatterService {
    abstract format(message: string): string;
}