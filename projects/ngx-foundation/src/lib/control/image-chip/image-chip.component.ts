import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'foundation-image-chip',
  templateUrl: './image-chip.component.html',
  styleUrls: ['./image-chip.component.scss'],
})
export class ImageChipComponent implements OnInit {
  @Input() label: string = '';
  @Input() avatarSrc: string = '';

  get style() {
    return { width: 4 + this.label.length + 'em' };
  }
  constructor() {}

  ngOnInit(): void {}
}
