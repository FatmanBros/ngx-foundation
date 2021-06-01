import { Injectable, Injector, Type } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomFormControl } from '../control/custom-form-control';
import { BaseValidator } from './base-validator';
import { MaxDate } from './custom-validators/max-date';
import { MaxLength } from './custom-validators/max-length';
import { MinDate } from './custom-validators/min-date';
import { MinLength } from './custom-validators/min-length';
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
  public minLength: (ln: number) => { [key: string]: CustomValidatorFn };
  public maxLength: (ln: number) => { [key: string]: CustomValidatorFn };
  public minDate: (dt: Date) => { [key: string]: CustomValidatorFn };
  public maxDate: (dt: Date) => { [key: string]: CustomValidatorFn };

  constructor(private injector: Injector) {
    this.required = this.getValidator(Required);
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
