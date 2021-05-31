import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomFormControl, CustomValidators } from '@ngx-foundation/ngx-foundation';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
})
export class NormalComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    test_textbox: new CustomFormControl({
      labelText: 'テスト テキストボックス',
      value: '',
      validators: [this.customValidators.required(), this.customValidators.maxLength(10)],
    }),
    test_textarea: new CustomFormControl({
      labelText: 'テスト テキストエリア',
      value: '',
      validators: [this.customValidators.required(), this.customValidators.maxLength(2000)],
    }),
  });

  constructor(private fb: FormBuilder, private customValidators: CustomValidators) {}

  ngOnInit() {}
}
