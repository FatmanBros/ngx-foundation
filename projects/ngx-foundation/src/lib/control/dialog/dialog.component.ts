import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  /**
   * ダイアログタイトル
   */
  title: string;

  /**
   * ダイアログの本文
   */
  content: string;

  /**
   * ボタンラベル
   */
  buttonLabels?: string[];
}

@Component({
  selector: 'info-dialog',
  templateUrl: './info-dialog.html',
  styleUrls: ['./dialog.component.scss'],
})
export class InfoDialogComponent implements OnInit {
  public title: string = '';
  public content: string = '';
  public buttonLabels: string[] = []

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.title = data.title;
    this.content = data.content;
    this.buttonLabels = data.buttonLabels ?? ['Accept', 'Cancel'];
  }

  ngOnInit(): void {}
}

@Component({
  selector: 'warn-dialog',
  templateUrl: './warn-dialog.html',
  styleUrls: ['./dialog.component.scss'],
})
export class WarnDialogComponent implements OnInit {
  public title: string = '';
  public content: string = '';
  public buttonLabels: string[] = []

  constructor(
    public dialogRef: MatDialogRef<WarnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.title = data.title;
    this.content = data.content;
    this.buttonLabels = data.buttonLabels ?? ['Deactivate', 'Cancel'];
  }

  ngOnInit(): void {}
}
