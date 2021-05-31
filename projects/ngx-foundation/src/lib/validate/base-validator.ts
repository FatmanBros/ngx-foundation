import { Injector } from '@angular/core';
import {
  ngxFoundationOptions,
  NGX_FOUNDATION_OPTIONS,
} from '../ngx-foundation.module';
import { CustomValidatorFn } from './custom-validators';

export abstract class BaseValidator {
  protected options: ngxFoundationOptions;

  abstract validator: (arg: any) => { [key: string]: CustomValidatorFn };
  abstract func: (validatorKey: any) => {};

  constructor(injector: Injector) {
    this.options = injector.get(NGX_FOUNDATION_OPTIONS);
  }
}
