import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatColor,
  CustomFormControl,
  CustomValidators,
  LabelDirection,
  ButtonType,
} from '@ngx-foundation/ngx-foundation';
import { CardValues } from 'projects/ngx-foundation/src/lib/control/card/card.component';
import { ButtonParam } from 'projects/ngx-foundation/src/lib/interface/interface';
import { DateUtils } from '../utils/date-utils';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
})
export class NormalComponent implements OnInit {
  color = MatColor;
  buttons: ButtonParam[] = [
    {
      label: 'ボタン1',
      type: ButtonType.basic,
      tooltip: 'button 1',
      color: MatColor.primary,
      onClick: () => {
        this;
      },
    },
    {
      label: 'ボタン2',
      type: ButtonType.icon,
      icon: 'home',
      tooltip: 'button 2',
      color: MatColor.success,
      onClick: () => {
        this;
      },
    },
    {
      label: 'ボタン3',
      type: ButtonType.flat,
      tooltip: 'button 3',
      color: MatColor.warn,
      onClick: () => {
        this;
      },
    },
    {
      label: 'ボタン4',
      type: ButtonType.raised,
      tooltip: 'button 4',
      color: MatColor.accent,
      onClick: () => {
        this;
      },
    },
  ];
  labelDir = LabelDirection;

  radioOptions = [
    { label: 'test1', value: '0' },
    { label: 'test2', value: '1' },
    { label: 'test3', value: '2' },
    { label: 'test4', value: '3' },
  ];

  public form: FormGroup = this.fb.group({
    test_card: new CustomFormControl<CardValues>({
      labelText: '',
      value: {
        title: 'テストカード　タイトル',
        subtitle: 'テストカード　サブタイトル',
        content: 'カードのコンテンツを表示します。',
        imgUrls: [
          {
            image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            thumbImage:
              'https://material.angular.io/assets/img/examples/shiba2.jpg',
          },
          {
            image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            thumbImage:
              'https://material.angular.io/assets/img/examples/shiba2.jpg',
          },
          {
            video: 'https://www.youtube.com/watch?v=GJkLmB1y4Do',
          },
        ],
      },
    }),
    test_textbox: new CustomFormControl({
      labelText: 'テスト テキストボックス',
      value: '',
      validators: [
        CustomValidators.required(),
        CustomValidators.minLength(5),
        CustomValidators.maxLength(10),
      ],
    }),
    test_numeric: new CustomFormControl({
      labelText: 'テスト 数値',
      value: '',
      validators: [
        CustomValidators.required(),
        CustomValidators.numeric(),
        CustomValidators.maxValue(10000000),
        CustomValidators.minValue(100),
      ],
    }),
    test_textarea: new CustomFormControl({
      labelText: 'テスト テキストエリア',
      value: '',
      validators: [
        CustomValidators.required(),
        CustomValidators.maxLength(2000),
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
      validators: [CustomValidators.minDate(DateUtils.getToday())],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
