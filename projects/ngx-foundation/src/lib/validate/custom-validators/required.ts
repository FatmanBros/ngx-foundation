import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../control/custom-form-control';
import { NgxFoundationModule } from '../../ngx-foundation.module';
import { Util } from '../../util/utils';
import { Validation, Validations } from '../validation';

export class Required  {
  public static validator() {
    return {
      [Validation.required]: {
        func: Required.func,
        args: null,
      },
    };
  }

  public static func(validatorKey: any) {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;
      if (!control.labelText) {
        throw new Error(
          'Unable to generate validation message because labelText item of CustomFormControl is not set.'
        );
      }
      if (Validations.isBlank(control.value)) {
        return {
          [validatorKey]: Util.message(
            NgxFoundationModule.options.messages[Validation.required],
            control.labelText
          ),
        };
      } else {
        return null;
      }
    };
  }
}
