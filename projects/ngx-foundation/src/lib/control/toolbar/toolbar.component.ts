import { Component, Input, OnInit } from '@angular/core';
import { MatColor } from '../../enum/enums';
import { ButtonParam } from '../../interface/interface';

@Component({
  selector: 'foundation-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() color: MatColor = MatColor.primary;
  @Input() titleIcon: string = '';
  @Input() title: string = '';
  @Input() rightButtons: ButtonParam[] = [];

  constructor() {}

  ngOnInit(): void {}
}
