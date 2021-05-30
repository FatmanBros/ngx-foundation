import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomFormControl } from '@ngx-foundation/ngx-foundation';
import { CustomValidators } from '@ngx-foundation/ngx-foundation';
import { Required } from 'projects/ngx-foundation/src/lib/validate/custom-validators/required';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
})
export class NormalComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    test: new CustomFormControl({
      label: 'テスト',
      value: '',
      validators: [this.required.validator()],
    }),
  });

  constructor(private fb: FormBuilder, private required: Required) {}

  ngOnInit() {}
}
