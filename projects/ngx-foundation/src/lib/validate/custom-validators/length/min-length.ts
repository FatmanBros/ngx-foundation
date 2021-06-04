import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../../control/custom-form-control';
import { NgxFoundationModule } from '../../../ngx-foundation.module';
import { Util } from '../../../util/utils';
import { Validation, Validations } from '../../validation';

export class MinLength {
  public static validator(len: number) {
    return {
      [Validation.minLength]: {
        func: MinLength.func,
        args: len,
      },
    };
  }

  public static func(validatorKey: any) {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;
      const minLength: number = control.args[validatorKey];
      if (Validations.isNullOrLengthZero(control.value)) {
        return null;
      }
      if (control.value?.length >= minLength) {
        return null;
      }

      return {
        [validatorKey]: Util.message(
          NgxFoundationModule.options.messages[Validation.minLength],
          minLength + ''
        ),
      };
    };
  }
}
