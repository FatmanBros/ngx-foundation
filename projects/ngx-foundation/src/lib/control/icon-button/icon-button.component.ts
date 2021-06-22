import { Component, Input, OnInit } from '@angular/core';
import { ColorType } from '../../types/types';


@Component({
  selector: 'foundation-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string = '';
  @Input() color: ColorType = 'gray';
  constructor() {}

  ngOnInit(): void {}
}
