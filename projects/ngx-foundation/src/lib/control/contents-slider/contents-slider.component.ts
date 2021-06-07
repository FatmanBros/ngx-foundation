import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-contents-slider',
  templateUrl: './contents-slider.component.html',
  styleUrls: ['./contents-slider.component.scss'],
})
export class ContentsSliderComponent implements OnInit {
  @Input() contentSize: { width: string; height?: string } = { width: '100%' };

  constructor() {}

  ngOnInit(): void {}
}
