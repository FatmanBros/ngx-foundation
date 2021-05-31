import { Inject } from '@angular/core';
import { ValidatorOptions, VALIDATOR_OPTIONS } from '../ngx-foundation.module';

export abstract class BaseValidator {
  constructor(@Inject(VALIDATOR_OPTIONS) protected options: ValidatorOptions) {
  }

}
