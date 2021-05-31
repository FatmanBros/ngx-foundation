import { Injector } from '@angular/core';
import {
  ngxFoundationOptions,
  NGX_FOUNDATION_OPTIONS
} from '../ngx-foundation.module';

export abstract class BaseValidator {
  protected options: ngxFoundationOptions;

  constructor(injector: Injector) {
    this.options = injector.get(NGX_FOUNDATION_OPTIONS);
  }
}
