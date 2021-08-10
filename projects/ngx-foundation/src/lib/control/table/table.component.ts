import { Component, Input, OnInit, PipeTransform } from '@angular/core';

@Component({
  selector: 'foundation-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  public colDefs: FndTableColDef[] = [];

  @Input()
  public rowData: FndTableRowData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getWidth(def: FndTableColDef) {
    if (!def.width) {
      return null;
    }
    return {
      'width' : `${def.width}px`,
    }
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
  listItems?: string[];
  pipe?: PipeTransform;
  width?: number;
  changeEvents?: (param: FndTableRowData) => {}
}

export interface FndTableRowData {
  [key: string]: {
    value: string;
  }
}