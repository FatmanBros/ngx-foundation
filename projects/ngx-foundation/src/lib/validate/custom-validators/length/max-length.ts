import { Injectable, Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../../control/custom-form-control';
import { Util } from '../../../util/utils';
import { BaseValidator } from '../../base-validator';
import { Validation, Validations } from '../../validation';

export class MaxLength extends BaseValidator {
  public static validator(len: number) {
    return {
      [Validation.maxLength]: {
        func: MaxLength.func,
        args: len,
      },
    };
  }

  public static func(validatorKey: any) {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;
      const maxLength: number = control.args[validatorKey];

      if (Validations.isNullOrLengthZero(control.value)) {
        return null;
      }
      if (control.value?.length < maxLength) {
        return null;
      }

      return {
        [validatorKey]: Util.message(
          BaseValidator.options.messages[Validation.maxLength],
          maxLength + ''
        ),
      };
    };
  }
}
