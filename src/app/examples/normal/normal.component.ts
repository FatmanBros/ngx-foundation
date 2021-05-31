import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  CustomFormControl,
  CustomValidators,
  LabelDirection,
} from '@ngx-foundation/ngx-foundation';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
})
export class NormalComponent implements OnInit {
  labelDir = LabelDirection;

  radioOptions = [
    { label: 'test1', value: '0' },
    { label: 'test2', value: '1' },
    { label: 'test3', value: '2' },
    { label: 'test4', value: '3' },
  ];

  public form: FormGroup = this.fb.group({
    test_textbox: new CustomFormControl({
      labelText: 'テスト テキストボックス',
      value: '',
      validators: [
        this.customValidators.required(),
        this.customValidators.minLength(5),
        this.customValidators.maxLength(10),
      ],
    }),
    test_textarea: new CustomFormControl({
      labelText: 'テスト テキストエリア',
      value: '',
      validators: [
        this.customValidators.required(),
        this.customValidators.maxLength(2000),
      ],
    }),
    test_check1: new CustomFormControl({
      labelText: 'テスト チェックボックス１',
      value: true,
    }),
    test_check2: new CustomFormControl({
      labelText: 'テスト チェックボックス２',
      value: false,
    }),
    test_radio: new CustomFormControl({
      labelText: 'テスト ラジオボタン',
      value: '3',
    }),
    test_date: new CustomFormControl({
      labelText: 'テスト 日付',
      value: new Date(),
    }),
  });

  constructor(
    private fb: FormBuilder,
    private customValidators: CustomValidators
  ) {}

  ngOnInit() {}
}
