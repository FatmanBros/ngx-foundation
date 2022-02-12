import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomFormControl } from '../../control/custom-form-control';
import { FormGroupUtils } from '../../util/form-group-utils';
import { CustomValidators } from '../../validate/custom-validators';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'foundation-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignUpFormComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpFormComponent extends CommonFormComponent {
  @Input() title: string = '';
  @Input() buttonLabel: string = '';

  @Output() onSubmit = new EventEmitter<SignUpParameter>();

  public form = this.fb.group({
    userName: new CustomFormControl({
      value: '',
      labelText: 'ユーザー名',
      validators: [CustomValidators.required(), CustomValidators.maxLength(50)],
    }),
    email: new CustomFormControl({
      value: '',
      labelText: 'メールアドレス',
      validators: [CustomValidators.required(), CustomValidators.email()],
    }),
    id: new CustomFormControl({
      value: '',
      labelText: 'ID',
      validators: [CustomValidators.required()],
    }),
    password: new CustomFormControl({
      value: '',
      labelText: 'パスワード',
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

export interface SignUpParameter {
  userName: string;
  email: string;
  id: string;
  password: string;
}
