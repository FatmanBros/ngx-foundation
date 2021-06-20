import { Component, Input, OnInit } from '@angular/core';
import { ButtonColorType } from '../button/button.component';

@Component({
  selector: 'foundation-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() color: ButtonColorType = 'blue';
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() content: string = '';

  constructor() {}

  ngOnInit(): void {}
}
