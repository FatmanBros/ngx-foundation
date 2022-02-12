import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, PipeTransform } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isDate } from 'moment';
import { ListItem } from '../../constants/constants';
import { CustomValidatorFn } from '../../validate/custom-validators';
import { CustomFormControl } from '../custom-form-control';

@Component({
  selector: 'foundation-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public readonly dateFormat = "yyyy/MM/dd";

  public tblType = FndTbColumnType;

  @Input()
  public colDefs: FndTableColDef[] = [];

  @Input()
  public rowData: FndTableRowData[] = [];

  constructor(
    private _fb: FormBuilder,
    private detectorRef: ChangeDetectorRef,
    private datePipe: DatePipe) { }

  public esc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.editingCell = null;
      this.detectorRef.detectChanges();
    }
  }
  public dispCellValue(row: { [key: string]: any }, def: FndTableColDef) {
    switch (def.type) {
      case FndTbColumnType.date:
        if (isDate(row[def.fieldId]?.value)) {
          return this.datePipe.transform(row[def.fieldId]?.value, this.dateFormat);
        } else {
          return '';
        }
      case FndTbColumnType.dropdown:
        return
      default:
        return row[def.fieldId]?.value;
    }
  }
  ngOnInit(): void {
    document.addEventListener('keydown', this.esc)
  }
  ngOnDestroy() {
    document.removeEventListener('keydown', this.esc)
  }

  getWidth(def: FndTableColDef) {
    if (!def.width) {
      return null;
    }
    return {
      'width': `${def.width}px`,
    }
  }

  private control = new CustomFormControl({ labelText: ' ' });
  public editForm = this._fb.group({
    edit: this.control
  })
  public editingCell: { col: string, row: number } | null = null;
  edit(def: FndTableColDef, row: number) {
    if (!def.editable) {
      this.editingCell = null;
      this.detectorRef.detectChanges();
      return;
    }
    this.editingCell = {
      col: def.fieldId,
      row: row
    }

    this.control.setValue(this.rowData[row][def.fieldId]?.value);
    this.control.setListItems(def.listItems);
    this.control.setCustomValidators(def.validators);
    this.control.focus();

    this.detectorRef.detectChanges();
  }

  isEditing(def: FndTableColDef, row: number): boolean {
    return this.editingCell?.col === def.fieldId && this.editingCell?.row === row;
  }

  @Output('onChange')
  public onChange$: EventEmitter<FndTableRowData> = new EventEmitter<FndTableRowData>();

  _onChange(value: any, def: FndTableColDef, row: number) {
    setTimeout(() => {
      if (this.control.invalid) {
        return;
      }
      if (this.rowData[row][def.fieldId]) {
        this.rowData[row][def.fieldId].value = value;
      } else {
        this.rowData[row][def.fieldId] = { value: value };
      }
      this.editingCell = null;
      this.detectorRef.detectChanges();
    })
    this.onChange$.emit(this.rowData[row]);
  }

  _onClick(value: any, def: FndTableColDef, row: number) {
    if (def.buttonOption?.clickEvents) {
      def.buttonOption.clickEvents(this.rowData[row]);
    }
  }

  public selectedRowIndex?: number;
  @Output('selectRow')
  public selectRow$: EventEmitter<FndTableRowData> = new EventEmitter<FndTableRowData>();
  public selectRow(row: FndTableRowData, i: number) {
    this.selectedRowIndex = i;
    this.selectRow$.emit(row);
    this.detectorRef.detectChanges();
  }

  public addRow() {
    let newRow = {};
    this.colDefs.forEach(def => {
      Object.assign(newRow, { [def.fieldId]: { value: '' } })
    });

    this.rowData.splice(this.rowData.length, 0, newRow);
  }

  public removeRow(i: number) {
    if (this.rowData.length - 1 > i) {
      this.rowData.splice(i, 1)
    }
  }

  public get value(): { [key: string]: string }[] {
    return this.rowData.map(row => {
      let result = {};
      this.colDefs.forEach(def => {
        Object.assign(result, { [def.fieldId]: row[def.fieldId]?.value ?? '' });
      })
      return result;
    })
  }
}

export enum FndTbColumnType {
  text,
  dropdown,
  checkbox,
  date,
  button,
}

export interface FndTableColDef {
  fieldId: string;
  label: string;
  editable?: boolean;
  type?: FndTbColumnType;
  listItems?: ListItem[];
  validators?: { [key: string]: CustomValidatorFn }[]
  pipe?: PipeTransform;
  width?: number;
  changeEvents?: (param: FndTableRowData) => {}
  buttonOption?: {
    label: string,
    clickEvents: (param: FndTableRowData) => void
    styles?: string,
  }
}

export interface FndTableRowData {
  [key: string]: {
    value: string;
  }
}