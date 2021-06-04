import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../../control/custom-form-control';
import { NgxFoundationModule } from '../../../ngx-foundation.module';
import { Util } from '../../../util/utils';
import { Validation, Validations } from '../../validation';

export class MinValue {
  public static validator(vl: number) {
    return {
      [Validation.minValue]: {
        func: MinValue.func,
        args: vl,
      },
    };
  }

  public static func(validatorKey: any) {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;
      const minValue: number = control.args[validatorKey];

      if (Validations.isNullOrLengthZero(control.value)) {
        return null;
      }
      const n = Number(control.value);
      if (isNaN(n)) {
        return null;
      }
      if (n >= minValue) {
        return null;
      }

      return {
        [validatorKey]: Util.message(
          NgxFoundationModule.options.messages[Validation.minValue],
          minValue + ''
        ),
      };
    };
  }
}
