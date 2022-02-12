import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LabelDirection } from '../../enum/enums';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'foundation-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['../../css/styles.scss', './checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends BaseControlComponent {
  @Input() labelDir: LabelDirection = LabelDirection.left;
  labelDirection = LabelDirection;

  constructor(injector: Injector) {
    super(injector);
  }
}
