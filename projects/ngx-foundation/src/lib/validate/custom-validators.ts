import { Injectable, Injector } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomFormControl } from '../control/custom-form-control';
import { BaseValidator } from './base-validator';
import { MaxDate } from './custom-validators/date/max-date';
import { MinDate } from './custom-validators/date/min-date';
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

@Injectable({
  providedIn: 'root',
})
export class CustomValidators {
  public required: (arg?: null) => { [key: string]: CustomValidatorFn };
  public numeric: (arg?: null) => { [key: string]: CustomValidatorFn };
  public maxValue: (vl: number) => { [key: string]: CustomValidatorFn };
  public minValue: (vl: number) => { [key: string]: CustomValidatorFn };
  public minLength: (ln: number) => { [key: string]: CustomValidatorFn };
  public maxLength: (ln: number) => { [key: string]: CustomValidatorFn };
  public minDate: (dt: Date) => { [key: string]: CustomValidatorFn };
  public maxDate: (dt: Date) => { [key: string]: CustomValidatorFn };

  constructor(private injector: Injector) {
    this.required = this.getValidator(Required);
    this.numeric = this.getValidator(Numeric);
    this.maxValue = this.getValidator(MaxValue);
    this.minValue = this.getValidator(MinValue);
    this.minLength = this.getValidator(MinLength);
    this.maxLength = this.getValidator(MaxLength);
    this.minDate = this.getValidator(MinDate);
    this.maxDate = this.getValidator(MaxDate);
  }

  getValidator(validator: typeof BaseValidator) {
    const _validator = this.injector.get(validator);
    return _validator.validator;
  }
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
