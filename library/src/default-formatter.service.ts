import { AbstractFormatterService } from './abstract-formatter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DefaultFormatterService implements AbstractFormatterService {
    constructor() { }

    public format(message: string): string {
        return message;
    }
}