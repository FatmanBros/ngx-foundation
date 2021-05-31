import {
  AfterViewInit,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  ValidationErrors
} from '@angular/forms';
import { Util } from '../util/utils';
import { BaseComponent } from './base-component';
import { CustomFormControl } from './custom-form-control';

@Component({
  template: '',
})
export abstract class BaseControlComponent
  extends BaseComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @Input() label!: string;

  @Input() formControlName!: string;

  @Output() focus = new EventEmitter<CustomFormControl>();
  @Output() blur = new EventEmitter<CustomFormControl>();
  @Output() change = new EventEmitter<CustomFormControl>();

  public ngControl!: NgControl;

  public control!: CustomFormControl;

  public get maxLength() {
    return this.control?.maxLength;
  }

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
    this.ctlName = (this.formControlName ?? '') + Util.random();
  }

  ngAfterViewInit(): void {
    this.control = this.ngControl.control as CustomFormControl;

    // ビュー更新
    this.subscriptions.push(
      this.control.viewUpdate$.subscribe(() => {
        this.detectorRef.markForCheck();
      })
    );
  }

  public value: string = '';

  public get ctlValue() {
    return this.value;
  }

  public set ctlValue(val: any) {
    this.value = val;
    this._onChangeCallback(val);
  }

  protected _onChangeCallback = (_: any) => {};
  protected _onTouchedCallback = (_: any) => {};
  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  writeValue(v: any): void {
    if (v !== this.value) {
      // 各プロパティに値を格納する
      this.value = v;
    }
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  onFocus() {
    this.focus.emit(this.control);
  }

  onBlur() {
    this.blur.emit(this.control);
  }

  onChange() {
    this.change.emit(this.control);
  }

  public get errorMessage(): string {
    if (!this.control) {
      return '';
    }

    if (!this.control.errors) {
      return '';
    }

    return Object.keys(this.control.errors)
      .map((key) => (this.control.errors as ValidationErrors)[key])
      .join('\r\n');
  }
}
