import { LOGGER_DEBUG } from './token';
import { AbstractFormatterService } from './abstract-formatter.service';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor(
        @Inject(LOGGER_DEBUG) private showDebug: boolean,
        private formatterService: AbstractFormatterService) { 
    }

    log(message: string): void {
        let fmtMessage = this.formatterService.format(message);
        console.info(fmtMessage);
    }

    debug(message: string): void {
        let fmtMessage = this.formatterService.format(message);
        if (this.showDebug) {
            console.debug(fmtMessage);
        }
    }
}