import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  CustomFormControl,
  CustomValidators,
} from '@ngx-foundation/ngx-foundation';
import { LabelDirection } from 'projects/ngx-foundation/src/lib/enum/enums';

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
  });

  constructor(
    private fb: FormBuilder,
    private customValidators: CustomValidators
  ) {}

  ngOnInit() {}
}
