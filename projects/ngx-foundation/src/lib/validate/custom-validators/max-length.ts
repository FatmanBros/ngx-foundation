import { Injectable, Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../control/custom-form-control';
import { Util } from '../../util/utils';
import { BaseValidator } from '../base-validator';
import { CustomValidatorFn } from '../custom-validators';
import { Validation, Validations } from '../validation';

@Injectable({
  providedIn: 'root',
})
export class MaxLength extends BaseValidator {
  constructor(injector: Injector) {
    super(injector);
  }
  public validator = (len: number) => {
    return {
      [Validation.maxLength]: {
        func: this.func,
        args: len,
      },
    };
  };

  public func = (validatorKey: any) => {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;
      const maxLength: number = control.args[validatorKey];
      if (control.value?.length > maxLength) {
        return {
          [validatorKey]: Util.message(
            this.options.messages[Validation.maxLength],
            maxLength + ''
          ),
        };
      } else {
        return null;
      }
    };
  };
}
