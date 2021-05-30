import {
  Component,
  EventEmitter,
  Injector,
  Input,
  Output,
} from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Util } from '../util/utils';
import { BaseComponent } from './base-component';
import { CustomFormControl } from './custom-form-control';

@Component({
  template: '',
})
export abstract class BaseControlComponent extends BaseComponent {
  @Input() label!: string;

  @Input() formControlName!: string;

  @Output() focus = new EventEmitter<CustomFormControl>();
  @Output() blur = new EventEmitter<CustomFormControl>();
  @Output() change = new EventEmitter<CustomFormControl>();

  public ngControl!: NgControl;

  public control!: CustomFormControl;

  public get maxLength() {
    return this.control.maxLength;
  }

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
    this.ctlName = (this.formControlName ?? '') + Util.random();
  }

  ngAfterContaintInit() {
    this.control = this.ngControl.control as CustomFormControl;

    // ビュー更新
    this.subscriptions.push(
      this.control.viewUpdate$.subscribe(() => {
        this.detectorRef.markForCheck();
      })
    );
  }

  public get value() {
    return this.control.value;
  }

  public set value(val: any) {
    this.control.setValue(val);
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
      .map((key) => (this.control.errors as ValidationErrors)[key].message)
      .join('\r\n');
  }
}
