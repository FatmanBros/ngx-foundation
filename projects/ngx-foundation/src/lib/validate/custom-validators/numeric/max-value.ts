import { Injectable, Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CustomFormControl } from '../../../control/custom-form-control';
import { Util } from '../../../util/utils';
import { BaseValidator } from '../../base-validator';
import { Validation, Validations } from '../../validation';

export class MaxValue extends BaseValidator {
  public static validator(vl: number) {
    return {
      [Validation.maxValue]: {
        func: MaxValue.func,
        args: vl,
      },
    };
  }

  public static func(validatorKey: any) {
    return (c: AbstractControl) => {
      const control: CustomFormControl = c as CustomFormControl;
      const maxValue: number = control.args[validatorKey];

      if (Validations.isNullOrLengthZero(control.value)) {
        return null;
      }
      const n = Number(control.value);
      if (isNaN(n)) {
        return null;
      }
      if (n <= maxValue) {
        return null;
      }

      return {
        [validatorKey]: Util.message(
          BaseValidator.options.messages[Validation.maxValue],
          maxValue + ''
        ),
      };
    };
  }
}
