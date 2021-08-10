import { ChangeDetectorRef, Component, Input, OnInit, PipeTransform } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListItem } from '../../constants/constants';
import { CustomValidatorFn } from '../../validate/custom-validators';
import { CustomFormControl } from '../custom-form-control';

@Component({
  selector: 'foundation-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public tblType = FndTbColumnType;

  @Input()
  public colDefs: FndTableColDef[] = [];

  @Input()
  public rowData: FndTableRowData[] = [];

  constructor(private _fb: FormBuilder, private detectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
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
    
    this.detectorRef.detectChanges();
  }
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.editingCell = null;
      this.detectorRef.detectChanges();
    }
  }

  isEditing(def: FndTableColDef, row: number): boolean {
    return this.editingCell?.col === def.fieldId && this.editingCell?.row === row;
  }

  onChange(value: any, def: FndTableColDef, row: number) {
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
  }
}

export enum FndTbColumnType {
  text,
  dropdown,
  checkbox,
  date,
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
}

export interface FndTableRowData {
  [key: string]: {
    value: string;
  }
}