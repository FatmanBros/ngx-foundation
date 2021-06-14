import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'foundation-label',
  templateUrl: './label.component.html',
  styleUrls: ['../../css/styles.scss', './label.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabelComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent extends BaseControlComponent {
  constructor(injector: Injector) {
    super(injector);
  }
}
