import { Injectable, Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as _moment from 'moment';
import { CustomFormControl } from '../../../control/custom-form-control';
import { Util } from '../../../util/utils';
import { BaseValidator } from '../../base-validator';
import { Validation, Validations } from '../../validation';

const moment = _moment;
export class MaxDate extends BaseValidator {
  public static validator(dt: Date) {
    return {
      [Validation.maxDate]: {
        func: MaxDate.func,
        args: dt,
      },
    };
  }

  public static func(validatorKey: any) {
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
          BaseValidator.options.messages[Validation.maxLength],
          moment(date).format('l')
        ),
      };
    };
  }
}
