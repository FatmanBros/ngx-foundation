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
export class MaxDate extends BaseValidator {
  constructor(injector: Injector) {
    super(injector);
  }
  public validator = (dt: Date) => {
    return {
      [Validation.maxDate]: {
        func: this.func,
        args: dt,
      },
    };
  };

  public func = (validatorKey: any) => {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;
      const date: Date = control.args[validatorKey];

      if (Validations.isNullOrLengthZero(control.value)) {
        return null;
      }
      if (new Date(control.value).getTime() < date.getTime()) {
        return null;
      }

      return {
        [validatorKey]: Util.message(
          this.options.messages[Validation.maxLength],
          moment(date).format('l')
        ),
      };
    };
  };
}
