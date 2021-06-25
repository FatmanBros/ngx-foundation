import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { toastTime } from '../../service/toast.service';

const fadeTime = 0.1;
@Component({
  selector: 'foundation-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      state('fadeIn', style({ opacity: 1 })),
      state('fadeOut', style({ opacity: 0 })),
      transition('* <=> *', animate((toastTime * fadeTime) + 'ms ease-in-out')),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  @Input()
  public title: string = '';

  @Input()
  public content: string = '';

  public fade: 'fadeIn' | 'fadeOut' = 'fadeIn';

  constructor() {}

  ngOnInit(): void { 
    setTimeout(() => {
      this.fade = 'fadeOut';
    }, toastTime - toastTime * fadeTime * 2);
  }
}
