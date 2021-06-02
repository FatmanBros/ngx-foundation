import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ListItem } from '../../constants/constants';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'foundation-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['../../css/styles.scss', './radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent extends BaseControlComponent {
  @Input() radioOptions: ListItem[] = [];

  constructor(injector: Injector) {
    super(injector);
  }
}
