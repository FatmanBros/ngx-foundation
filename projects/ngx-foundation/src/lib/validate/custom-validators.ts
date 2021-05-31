import { Injectable, Injector } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomFormControl } from '../control/custom-form-control';
import { Required } from './custom-validators/required';

export interface CustomValidatorFn {
  func: Function;
  args: any;
}

@Injectable({
  providedIn: 'root',
})
export class CustomValidators {
  public required: () => { [key: string]: CustomValidatorFn };

  constructor(injector: Injector) {
    const required = injector.get(Required);
    this.required = required.validator;
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
