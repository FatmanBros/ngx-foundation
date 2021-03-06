import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  ButtonType, CardButton, CustomFormControl,
  CustomValidators,
  FndTableColDef,
  FndTableRowData,
  FndTbColumnType,
  LabelDirection, MatColor, TableComponent, ToastService
} from '@ngx-foundation/ngx-foundation';
import { ButtonParam } from 'projects/ngx-foundation/src/lib/interface/interface';
import { DialogService } from 'projects/ngx-foundation/src/lib/service/dialog.service';
import { OverlayService } from 'projects/ngx-foundation/src/lib/service/overlay.service';
import { Authority } from '../constants';
import { DateUtils } from '../utils/date-utils';

@Component({
  selector: 'foundation-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
})
export class NormalComponent implements OnInit {

  images = [
    // 'data:image/jpeg;base64,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',
    // 'data:image/jpeg;base64,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',
    // 'data:image/jpeg;base64,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',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbZXYOuZhf-CjmXoMJrR3pL6QU_OxZ232Tg&usqp=CAU',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJE1RQM9BX0AUQndgovB_DCFpFn7wnxHctA&usqp=CAU',
  ]

  color = MatColor;
  buttons: ButtonParam[] = [
    {
      label: '?????????1',
      tooltip: 'button 1',
      color: MatColor.primary,
      onClick: () => {
        this;
      },
    },
    {
      label: '?????????2',
      icon: 'home',
      tooltip: 'button 2',
      color: MatColor.success,
      onClick: () => {
        this;
      },
    },
    {
      label: '?????????3',
      tooltip: 'button 3',
      color: MatColor.warn,
      onClick: () => {
        this;
      },
    },
    {
      label: '?????????4',
      tooltip: 'button 4',
      color: MatColor.accent,
      onClick: () => {
        this;
      },
    },
  ];
  labelDir = LabelDirection;

  public form: FormGroup = this.fb.group({
    test_textbox: new CustomFormControl({
      labelText: '????????? ????????????????????????',
      value: '',
      validators: [
        CustomValidators.required(),
        CustomValidators.minLength(5),
        CustomValidators.maxLength(10),
      ],
    }),
    test_numeric: new CustomFormControl({
      labelText: '????????? ??????',
      value: '',
      validators: [
        CustomValidators.required(),
        CustomValidators.numeric(),
        CustomValidators.maxValue(10000000),
        CustomValidators.minValue(100),
      ],
    }),
    test_textarea: new CustomFormControl({
      labelText: '????????? ?????????????????????',
      value: '',
      validators: [
        CustomValidators.required(),
        CustomValidators.maxLength(2000),
      ],
    }),
    test_check1: new CustomFormControl({
      labelText: '????????? ???????????????????????????',
      value: true,
    }),
    test_check2: new CustomFormControl({
      labelText: '????????? ???????????????????????????',
      value: false,
    }),
    test_radio: new CustomFormControl({
      labelText: '????????? ??????????????????',
      value: '3',
      listItems: Authority.getList(),
    }),
    test_date: new CustomFormControl({
      labelText: '????????? ??????',
      value: new Date(),
      validators: [CustomValidators.minDate(DateUtils.getToday()), CustomValidators.maxDate(new Date('2021/8/20')), CustomValidators.required()],
    }),
    test_select: new CustomFormControl({
      labelText: '????????? ????????????',
      value: Authority.general.code,
      listItems: Authority.getList(),
      options: {
        placeholder: '?????????????????????????????????'
      }
    }),
  });

  constructor(
    private fb: FormBuilder,
    private dialog: DialogService,
    private overlayService: OverlayService,
    private toastService: ToastService,
  ) { }

  ngOnInit() { }

  showWarnDialog() {
    this.dialog.showWarnDialog({
      data: {
        title: '?????????????????????',
        content: '???????????????????????????????????????????????????????????????????????????'
      }
    });
  }
  showInfoDialog() {
    this.dialog.showInfoDialog({
      data: {
        title: '?????????????????????',
        content: '???????????????????????????????????????????????????????????????????????????'
      }
    });
  }

  overlay() {
    this.overlayService.open('Loading...', 'Please wait a moment.');
    setTimeout(() => {
      this.overlayService.close();
    }, 3000);
  }

  showToast() {
    this.toastService.open('?????????????????????', 'test of toast!');
  }

  public accord: 'open' | 'close' = 'close';

  public scrollItems = Array.from({ length: 100000 }).map((_, i) => {
    return { icon: '', title: `test${i}`, 'color': 'purple', content: `$ ${i}.0 -` }
  });

  public cardButtons: CardButton[] = [
    {
      icon: 'chat_bubble_outline',
      classes: 'text-blue-500 dark:text-blue-600',
      handler: (button: CardButton) => {
        console.log('handler')
      }
    },
    {
      icon: 'favorite_border',
      activeIcon: 'favorite',
      classes: 'text-red-500 dark:text-pink-700',
      handler: (button: CardButton) => {
        button.active = !button.active;
      }
    }
  ]

  public tableColDefs: FndTableColDef[] = [
    {
      fieldId: 'field0', label: '', type: FndTbColumnType.button,
      width: 5,
      buttonOption: {
        label: '??????', clickEvents: (param: FndTableRowData) => {
          console.log('?????????')
        },
        styles: ''
      }
    },
    { fieldId: 'field1', label: '????????????', editable: true, type: FndTbColumnType.text, validators: [CustomValidators.required()] },
    { fieldId: 'field2', label: '????????????', editable: true, type: FndTbColumnType.date },
    { fieldId: 'field3', label: '????????????' },
    { fieldId: 'field4', label: '????????????' },
    { fieldId: 'field5', label: '????????????' },
  ]

  public rowData: FndTableRowData[] = [
    {
      field1: { value: '?????????????????????' },
      field2: { value: '?????????????????????' },
      field3: { value: '?????????????????????' },
      field4: { value: '?????????????????????' },
    },
    {
      field1: { value: '?????????????????????' },
      field2: { value: '?????????????????????' },
      field3: { value: '?????????????????????' },
      field5: { value: '?????????????????????' },
    },
    {
      field1: { value: '?????????????????????' },
      field2: { value: '?????????????????????' },
      field4: { value: '?????????????????????' },
      field5: { value: '?????????????????????' },
    },
    {
      field1: { value: '?????????????????????' },
      field3: { value: '?????????????????????' },
      field4: { value: '?????????????????????' },
      field5: { value: '?????????????????????' },
    },
    {
      field2: { value: '?????????????????????' },
      field3: { value: '?????????????????????' },
      field4: { value: '?????????????????????' },
      field5: { value: '?????????????????????' },
    },
  ]

  @ViewChild('fndTable')
  public fndTable!: TableComponent;

  public getTableData() {
    console.log(this.fndTable.value);
  }
  addRow() {
    this.fndTable.addRow();
  }
  removeRow() {
    this.fndTable.removeRow(0);
  }
  selectRow(row: FndTableRowData) {
    console.log(row);
  }
}
