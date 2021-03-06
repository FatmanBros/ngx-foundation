import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../../control/custom-form-control';
import { NgxFoundation } from '../../../ngx-foundation-options';
import { Util } from '../../../util/utils';
import { Validation, Validations } from '../../validation';

export class Numeric  {
  public static validator = () => {
    return {
      [Validation.numeric]: {
        func: Numeric.func,
        args: null,
      },
    };
  };

  public static func(validatorKey: any) {
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
          NgxFoundation.options.messages[Validation.numeric]
        ),
      };
    };
  }
}
