import { Inject } from '@angular/core';
import { ValidatorOptoins, VALIDATOR_OPTIONS } from '../ngx-foundation.module';
import { Validation } from './validation';

export class BaseValidator {
  constructor(@Inject(VALIDATOR_OPTIONS) protected options: ValidatorOptoins) {};

  protected message(key: Validation.required | Validation.maxLength | Validation.minLength): string {
    return this.options.messages[key];
  }
}
