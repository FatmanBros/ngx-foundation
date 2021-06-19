import { Component, Input, OnInit } from '@angular/core';
import { ButtonColorType } from '../button/button.component';

@Component({
  selector: 'foundation-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string = '';
  @Input() color: ButtonColorType = 'gray';
  constructor() {}

  ngOnInit(): void {}
}
