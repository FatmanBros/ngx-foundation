import { Component, Input, OnInit } from '@angular/core';
import { TailwindColorType } from '../../types/types';

@Component({
  selector: 'foundation-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string = '';
  @Input() color: TailwindColorType = 'gray';
  constructor() {}

  ngOnInit(): void {}
}
