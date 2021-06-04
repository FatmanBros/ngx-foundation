import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as _moment from 'moment';
import { CustomFormControl } from '../../../control/custom-form-control';
import { NgxFoundationModule } from '../../../ngx-foundation.module';
import { Util } from '../../../util/utils';
import { Validation, Validations } from '../../validation';

const moment = _moment;

@Injectable({
  providedIn: 'root',
})
export class MinDate {
  public static validator(date: Date) {
    return {
      [Validation.minDate]: {
        func: MinDate.func,
        args: date,
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
      if (new Date(control.value).getTime() > date.getTime()) {
        return null;
      }

      return {
        [validatorKey]: Util.message(
          NgxFoundationModule.options.messages[Validation.minDate],
          moment(date).format('l')
        ),
      };
    };
  }
}
