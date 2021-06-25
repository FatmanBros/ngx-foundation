import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toastTime } from '../../service/toast.service';

const fadeTime = 0.1;
@Component({
  selector: 'foundation-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      state('fadeIn', style({ opacity: 1 })),
      state('fadeOut', style({ opacity: 0 })),
      transition('* <=> *', animate(toastTime * fadeTime + 'ms ease-in-out')),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  @Input()
  public title: string = '';

  @Input()
  public content: string = '';

  @Output()
  public onDone: EventEmitter<null> = new EventEmitter();

  public fade: 'fadeIn' | 'fadeOut' = 'fadeIn';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.fade = 'fadeOut';
    }, toastTime - toastTime * fadeTime * 2);
  }

  close() {
    this.fade = 'fadeOut';
  }

  done(event: any) {
    if (event.toState === 'fadeOut') {
      this.onDone.emit();
    }
  }
}

@Component({
  selector: 'foundation-toast-frame',
  templateUrl: './toast-frame.component.html',
  styleUrls: ['./toast-frame.component.scss'],
})
export class ToastFrameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
