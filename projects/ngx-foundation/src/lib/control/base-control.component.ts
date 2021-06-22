import {
  AfterViewInit,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ValidationErrors,
} from '@angular/forms';
import { ListItem } from '../constants/constants';
import { Appearance, MatColor } from '../enum/enums';
import {
  ngxFoundationOptions,
  NGX_FOUNDATION_OPTIONS,
} from '../ngx-foundation.options';
import { Util } from '../util/utils';
import { CustomErrorStateMatcher } from '../validate/custom-validators';
import { Validation } from '../validate/validation';
import { BaseComponent } from './base-component';
import { CustomFormControl } from './custom-form-control';

@Component({
  template: '',
})
export abstract class BaseControlComponent<T = any>
  extends BaseComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @Input() labelText: string = '';
  @Input() appearance: Appearance = Appearance.standard;
  @Input() color?: MatColor;

  @Output() focus = new EventEmitter<CustomFormControl<T>>();
  @Output() blur = new EventEmitter<CustomFormControl<T>>();
  @Output() change = new EventEmitter<CustomFormControl<T>>();

  public ngControl!: NgControl;
  public control!: CustomFormControl<T>;

  get value(): T {
    return this.control.value as T;
  }

  get listItems(): ListItem[] {
    if (this.control.listItems) {
      return this.control.listItems;
    } else {
      return [];
    }
  }

  public matcher = new CustomErrorStateMatcher();

  public get maxLength() {
    return this.control?.maxLength;
  }

  protected ngxFoundationOptions: ngxFoundationOptions;

  constructor(private injector: Injector) {
    super(injector);

    this.ngxFoundationOptions = injector.get(NGX_FOUNDATION_OPTIONS);
    this.appearance =
      this.ngxFoundationOptions.appearance ?? Appearance.standard;

    const name = this.elementRef.nativeElement.getAttribute('formControlName');
    this.ctlName = (name ?? '') + Util.random();
  }

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
  }

  ngAfterContentInit(): void {
    this.control = this.ngControl.control as CustomFormControl<T>;
    this.labelText = this.control.labelText;
  }

  protected mainNgAfterViewInit() {}

  ngAfterViewInit() {
    // ビュー更新
    this.subscriptions.push(
      this.control.viewUpdate$.subscribe(() => {
        this.detectorRef.markForCheck();
      })
    );
    this.mainNgAfterViewInit();
  }

  protected _onChangeCallback = (_: any) => {};
  protected _onTouchedCallback = () => {};
  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  writeValue(v: any): void {}

  onFocus() {
    this.focus.emit(this.control);
  }

  onBlur() {
    this._onTouchedCallback();
    this.blur.emit(this.control);
  }

  onChange() {
    this.change.emit(this.control);
  }

  public get errorMessage(): string[] {
    if (!this.control) {
      return [];
    }

    if (!this.control.dirty && !this.control.touched) {
      return [];
    }

    if (!this.control.errors) {
      return [];
    }

    const msg = Object.keys(this.control.errors).map(
      (key) => (this.control.errors as ValidationErrors)[key]
    );
    return msg;
  }

  public get ngClass() {
    return {
      [`mat-${this.color}`]: true,
    };
  }

  public get placeholder() {
    if (!this.control.options) {
      return '';
    } else {
      return this.control.options.placeholder;
    }
  }

  protected existValidation(key: string): boolean {
    return !!this.control.validators?.some((validator) =>
      Object.keys(validator).some((k) => k === key)
    );
  }
}
