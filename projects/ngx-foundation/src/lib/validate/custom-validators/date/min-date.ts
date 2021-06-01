import { Injectable, Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as _moment from 'moment';
import { CustomFormControl } from '../../../control/custom-form-control';
import { Util } from '../../../util/utils';
import { BaseValidator } from '../../base-validator';
import { Validation, Validations } from '../../validation';

const moment = _moment;

@Injectable({
  providedIn: 'root',
})
export class MinDate extends BaseValidator {
  constructor(injector: Injector) {
    super(injector);
  }
  public validator = (date: Date) => {
    return {
      [Validation.minDate]: {
        func: this.func,
        args: date,
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
      if (new Date(control.value).getTime() > date.getTime()) {
        return null;
      }

      return {
        [validatorKey]: Util.message(
          this.options.messages[Validation.minDate],
          moment(date).format('l')
        ),
      };
    };
  };
}
