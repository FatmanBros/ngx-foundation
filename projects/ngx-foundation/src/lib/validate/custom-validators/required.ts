import { Inject, Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../control/custom-form-control';
import {
  ValidatorOptions,
  VALIDATOR_OPTIONS
} from '../../ngx-foundation.module';
import { Util } from '../../util/utils';
import { BaseValidator } from '../base-validator';
import { CustomValidatorFn } from '../custom-validators';
import { Validation, Validations } from '../validation';

@Injectable({
  providedIn: 'root',
})
export class Required extends BaseValidator {
  constructor(@Inject(VALIDATOR_OPTIONS) options: ValidatorOptions) {
    super(options);
  }
  public validator(): { [key: string]: CustomValidatorFn } {
    return {
      [Validation.required]: {
        func: this.func,
        args: null,
      },
    };
  }

  public func = (validatorKey: any) => {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;
      if (!control.labelText) {
        throw new Error('Unable to generate validation message because labelText item of CustomFormControl is not set.');
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

  // public func(validatorKey: any): ValidatorFn {
  //   return (c: AbstractControl) => {
  //     const control: CustomFormControl = c as CustomFormControl;
  //     if (Validations.isBlank(control.value)) {
  //       return {
  //         [validatorKey]: Util.message(
  //           this.message(validatorKey),
  //           control.labelText
  //         ),
  //       };
  //     } else {
  //       return null;
  //     }
  //   };
  // }
}
