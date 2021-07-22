import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  NgxFoundationImage,
  NgxFoundationVideo
} from '../../interface/interface';

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
  @Input() topImg: string = '';
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() auth: Auth = '';

  constructor(injector: Injector) {}
}

export interface Auth {}

export interface CardValues {
  title: string;
  subtitle?: string;
  content: string;
  imgUrls?: (NgxFoundationImage | NgxFoundationVideo)[];
  authorImgUrl?: string;
  author?: string;
}
