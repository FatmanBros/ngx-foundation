import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatColor } from '../../enum/enums';
import {
  NgImageSliderImage,
  NgImageSliderVideo,
} from '../../interface/interface';
import { BaseControlComponent } from '../base-control.component';

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
export class CardComponent extends BaseControlComponent<CardValues> {
  @Input() width: string = '30em';

  constructor(injector: Injector) {
    super(injector);
  }

  public get style() {
    return {
      width: this.width,
    };
  }
}

export interface CardValues {
  title: string;
  subtitle?: string;
  content: string;
  imgUrls?: (NgImageSliderImage | NgImageSliderVideo)[];
  authorImgUrl?: string;
  author?: string;
}
