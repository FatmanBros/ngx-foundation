import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  @Input()
  public main: string = '';
  @Input()
  public sub: string = '';

  constructor() {}

  ngOnInit(): void {}
}
