import { Injectable, Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../../control/custom-form-control';
import { Util } from '../../../util/utils';
import { BaseValidator } from '../../base-validator';
import { Validation, Validations } from '../../validation';

@Injectable({
  providedIn: 'root',
})
export class Numeric extends BaseValidator {
  constructor(injector: Injector) {
    super(injector);
  }
  public validator = () => {
    return {
      [Validation.maxDate]: {
        func: this.func,
        args: null,
      },
    };
  };

  public func = (validatorKey: any) => {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;

      if (Validations.isNullOrLengthZero(control.value)) {
        return null;
      }
      const n = Number(control.value);
      if (!isNaN(n)) {
        return null;
      }

      return {
        [validatorKey]: Util.message(
          this.options.messages[Validation.numeric]
        ),
      };
    };
  };
}
