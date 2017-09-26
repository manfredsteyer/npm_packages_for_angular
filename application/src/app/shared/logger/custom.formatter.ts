import { AbstractFormatterService } from 'my-lib';

export class CustomFormatterService implements AbstractFormatterService {

  format(message: string): string {
    let date = new Date();
    let dateString = date.toLocaleString();
    return `[${dateString}] ${message}`;
  }

}