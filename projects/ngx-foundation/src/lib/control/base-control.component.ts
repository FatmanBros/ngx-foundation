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
import { Appearance } from '../enum/enums';
import {
  ngxFoundationOptions,
  NGX_FOUNDATION_OPTIONS,
} from '../ngx-foundation.module';
import { Util } from '../util/utils';
import { CustomErrorStateMatcher } from '../validate/custom-validators';
import { BaseComponent } from './base-component';
import { CustomFormControl } from './custom-form-control';

@Component({
  template: '',
})
export abstract class BaseControlComponent
  extends BaseComponent
  implements OnInit, AfterViewInit ,ControlValueAccessor
{
  @Input() labelText: string = '';
  @Input() appearance: Appearance = Appearance.standard;

  @Output() focus = new EventEmitter<CustomFormControl>();
  @Output() blur = new EventEmitter<CustomFormControl>();
  @Output() change = new EventEmitter<CustomFormControl>();

  public ngControl!: NgControl;
  public control!: CustomFormControl;

  public matcher = new CustomErrorStateMatcher();

  public get maxLength() {
    return this.control?.maxLength;
  }

  protected ngxFoundationOptions: ngxFoundationOptions;

  constructor(private injector: Injector) {
    super(injector);

    this.ngxFoundationOptions = injector.get(NGX_FOUNDATION_OPTIONS);
    this.appearance = this.ngxFoundationOptions.appearance ?? Appearance.standard;

    const name =  this.elementRef.nativeElement.getAttribute('formControlName');
    this.ctlName = (name ?? '') + Util.random();
  }

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
  }

  ngAfterContentInit(): void {
    this.control = this.ngControl.control as CustomFormControl;
    this.labelText = this.control.labelText;
  }

  ngAfterViewInit() {
    // ビュー更新
    this.subscriptions.push(
      this.control.viewUpdate$.subscribe(() => {
        this.detectorRef.markForCheck();
      })
    );
  }

  protected _onChangeCallback = (_: any) => {};
  protected _onTouchedCallback = () => {};
  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  writeValue(v: any): void {
  }

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

    if (!this.control.errors) {
      return [];
    }

    const msg = Object.keys(this.control.errors).map(
      (key) => (this.control.errors as ValidationErrors)[key]
    );
    return msg;
  }
}
