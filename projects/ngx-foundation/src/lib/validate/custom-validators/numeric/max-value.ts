import { Injectable, Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { CustomFormControl } from '../../../control/custom-form-control';
import { Util } from '../../../util/utils';
import { BaseValidator } from '../../base-validator';
import { Validation, Validations } from '../../validation';

@Injectable({
  providedIn: 'root',
})
export class MaxValue extends BaseValidator {
  constructor(injector: Injector) {
    super(injector);
  }
  public validator = (vl: number) => {
    return {
      [Validation.maxValue]: {
        func: this.func,
        args: vl,
      },
    };
  };

  public func = (validatorKey: any) => {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;
      const maxValue: number = control.args[validatorKey];

      if (Validations.isNullOrLengthZero(control.value)) {
        return null;
      }
      const n = Number(control.value);
      if (isNaN(n)) {
        return null;
      }
      if (n <= maxValue) {
        return null;
      }

      return {
        [validatorKey]: Util.message(
          this.options.messages[Validation.maxValue],
          maxValue + ''
        ),
      };
    };
  };
}
