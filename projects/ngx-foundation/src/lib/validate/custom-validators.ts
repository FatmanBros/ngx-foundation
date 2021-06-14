import { FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomFormControl } from '../control/custom-form-control';
import { MaxDate } from './custom-validators/date/max-date';
import { MinDate } from './custom-validators/date/min-date';
import { FoundationEmailValidator } from './custom-validators/email/email';
import { MaxLength } from './custom-validators/length/max-length';
import { MinLength } from './custom-validators/length/min-length';
import { MaxValue } from './custom-validators/numeric/max-value';
import { MinValue } from './custom-validators/numeric/min-value';
import { Numeric } from './custom-validators/numeric/numeric';
import { Required } from './custom-validators/required';

export interface CustomValidatorFn {
  func: Function;
  args: any;
}

export class CustomValidators {
  public static required = Required.validator;
  public static numeric = Numeric.validator;
  public static maxValue = MaxValue.validator;
  public static minValue = MinValue.validator;
  public static minLength = MinLength.validator;
  public static maxLength = MaxLength.validator;
  public static minDate = MinDate.validator;
  public static maxDate = MaxDate.validator;
  public static email = FoundationEmailValidator.validator;
}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: CustomFormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    if (!control) {
      return false;
    }
    if (!control.invalid) {
      return false;
    }
    if (control.dirty || control.touched || isSubmitted) {
      return true;
    } else {
      return false;
    }
  }
}
