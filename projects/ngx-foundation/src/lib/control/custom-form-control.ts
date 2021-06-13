import {
  AsyncValidatorFn,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { ListItem } from '../constants/constants';
import { CustomValidatorFn } from '../validate/custom-validators';
import { Validation } from '../validate/validation';

export class CustomFormControl<T = any> extends FormControl {
  public validators?: { [key: string]: CustomValidatorFn }[];
  public viewUpdate$ = new Subject();
  public args: { [key: string]: any } = {};

  public labelText!: string;
  public required!: boolean;
  public maxLength!: number;
  public decimalDigitLength?: number;
  public listItems?: ListItem[];
  public options?: CustomFormOptions;

  constructor(customForm: CustomForm<T>) {
    super(customForm.formState);
    this.setValue(customForm.value);
    this.labelText = customForm.labelText;
    this.validators = customForm.validators;
    this.listItems = customForm.listItems;
    this.options = customForm.options;

    const customValidators = this.createCustomValidatorFns(
      customForm.validators
    );
    this.setValidators(Validators.compose(customValidators));
  }

  /**
   * transform custom validators
   *
   * @param validators
   * @returns
   */
  private createCustomValidatorFns(
    validators: { [key: string]: CustomValidatorFn }[] = []
  ): ValidatorFn[] {
    const fns = validators.map((fn, i) => {
      const key: string = Object.keys(fn)[0];
      const define: CustomValidatorFn = fn[key] as CustomValidatorFn;
      switch (key) {
        case Validation.required:
          this.required = true;
          break;
        case Validation.maxLength:
          this.maxLength = define.args;
          break;
        default:
          break;
      }

      const validatorKey: string = `${key}_${i}`;
      this.args[validatorKey] = define.args;
      return define.func(validatorKey);
    });

    return fns;
  }

  setValue(value: any, options?: Object): void {
    super.setValue(value);
    this.viewUpdate();
  }
  patchValue(value: any, options?: Object): void {
    super.patchValue(value);
    this.viewUpdate();
  }
  reset(value?: any, options?: Object): void {
    super.reset(value);
    this.viewUpdate();
  }

  public viewUpdate(): CustomFormControl {
    this.viewUpdate$.next(null);
    return this;
  }
}

export interface CustomForm<T = any> {
  labelText: string;
  value: T;
  formState?: any;
  listItems?: ListItem[];
  validators?: { [key: string]: CustomValidatorFn }[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[] | null;
  options?: CustomFormOptions;
}
export interface CustomFormOptions {
  placeholder: string;
}
