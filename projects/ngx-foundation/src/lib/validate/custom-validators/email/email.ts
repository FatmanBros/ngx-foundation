import { AbstractControl } from '@angular/forms';
import * as _moment from 'moment';
import { emailRegex } from '../../../constants/constants';
import { CustomFormControl } from '../../../control/custom-form-control';
import { NgxFoundationModule } from '../../../ngx-foundation.module';
import { Validation, Validations } from '../../validation';

export class FoundationEmailValidator {
  public static validator() {
    return {
      [Validation.email]: {
        func: FoundationEmailValidator.func,
        args: null,
      },
    };
  }

  public static func(validatorKey: any) {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;

      if (Validations.isNullOrLengthZero(control.value)) {
        return null;
      }

      const value = control.value + '';
      if (value.match(emailRegex)) {
        return null;
      }

      return {
        [validatorKey]: NgxFoundationModule.options.messages[Validation.email],
      };
    };
  }
}
