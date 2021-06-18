import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'foundation-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() src: string = '';
  constructor() {}

  ngOnInit(): void {}
}
