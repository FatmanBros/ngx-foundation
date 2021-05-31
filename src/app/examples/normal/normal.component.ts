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
    test: new CustomFormControl({
      labelText: 'テスト',
      value: '',
      validators: [this.customValidators.required()],
    }),
  });

  constructor(private fb: FormBuilder, private customValidators: CustomValidators) {}

  ngOnInit() {}
}
