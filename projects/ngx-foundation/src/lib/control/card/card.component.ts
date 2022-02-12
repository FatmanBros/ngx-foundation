import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'foundation-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CardComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() subContent: string = '';
  @Input() leftButtons: CardButton[] = [];
  @Input() rightButtons: CardButton[] = [];

  constructor(injector: Injector) {}

  onClick() {
    console.log('click')
  }
}

export interface CardButton {
  icon: string;
  handler: Function;
  activeIcon?: string;
  active?: boolean;
  classes?: string;
  tooltip?: string;
}
