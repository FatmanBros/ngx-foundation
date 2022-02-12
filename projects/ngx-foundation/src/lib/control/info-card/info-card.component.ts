import { Component, Input, OnInit } from '@angular/core';
import { TailwindColorType } from '../../types/types';


@Component({
  selector: 'foundation-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() color: TailwindColorType = 'blue';
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() content: string = '';

  constructor() {}

  ngOnInit(): void {}
}
