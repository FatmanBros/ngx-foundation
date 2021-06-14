import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomFormControl } from '../../control/custom-form-control';
import { FormGroupUtils } from '../../util/form-group-utils';
import { CustomValidators } from '../../validate/custom-validators';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'foundation-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent extends CommonFormComponent {
  @Input() title: string = '';
  @Input() buttonLabel: string = '';

  @Output() onSubmit = new EventEmitter<LoginParameter>();

  public form = this.fb.group({
    id: new CustomFormControl({
      value: '',
      labelText: 'ID',
      validators: [CustomValidators.required()],
    }),
    password: new CustomFormControl({
      value: '',
      labelText: 'PASSWORD',
      validators: [CustomValidators.required()],
    }),
  });

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {}

  submit() {
    FormGroupUtils.markTouched(this.form);
    if (this.form.invalid) {
      return;
    }
    this.onSubmit.emit(this.form.value);
  }
}

export interface LoginParameter {
  id: string;
  password: string;
}
