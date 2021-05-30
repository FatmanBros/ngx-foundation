import { Injectable, Injector } from '@angular/core';
import { Required } from './custom-validators/required';

export interface CustomValidatorFn {
  func: Function;
  args: any;
}

@Injectable({
  providedIn: 'root',
})
export class CustomValidators {
  public required: () => { [key: string]: CustomValidatorFn };

  constructor(injector: Injector) {
    const required = injector.get(Required);
    this.required = required.validator;
  }
}
