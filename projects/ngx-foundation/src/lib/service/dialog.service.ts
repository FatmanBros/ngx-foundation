import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData, InfoDialogComponent, WarnDialogComponent } from '../control/dialog/dialog.component';

const DEFAULT_WIDTH = 400;

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  showWarnDialog(prm: DialogParam) {
    return this.dialog.open(WarnDialogComponent, {
      data: prm.data,
    });
  }

  showInfoDialog(prm:DialogParam) {
    return this.dialog.open(InfoDialogComponent, {
      data: prm.data,
    })
  }
}

export interface DialogParam {
  data: DialogData;
}
