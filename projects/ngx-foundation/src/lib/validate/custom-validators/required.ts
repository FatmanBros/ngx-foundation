import { Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../control/custom-form-control';
import { Util } from '../../util/utils';
import { BaseValidator } from '../base-validator';
import { CustomValidatorFn } from '../custom-validators';
import { Validation, Validations } from '../validation';

export class Required extends BaseValidator {
  constructor(injector: Injector) {
    super(injector);
  }
  public validator: () => { [key: string]: CustomValidatorFn } = () => {
    return {
      [Validation.required]: {
        func: this.func,
        args: null,
      },
    };
  };

  public func = (validatorKey: any) => {
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
            this.options.messages[Validation.required],
            control.labelText
          ),
        };
      } else {
        return null;
      }
    };
  };
}
