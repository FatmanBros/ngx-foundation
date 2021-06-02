import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'foundation-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['../../css/styles.scss', './datepicker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent extends BaseControlComponent {
  constructor(injector: Injector) {
    super(injector);
  }
}
