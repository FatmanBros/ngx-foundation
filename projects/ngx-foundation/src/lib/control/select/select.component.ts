import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'foundation-select',
  templateUrl: './select.component.html',
  styleUrls: ['../../css/styles.scss', './select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends BaseControlComponent {
  public set value(val: any) {
    this.control.setValue(val);
  }

  public get value() {
    return this.control.value;
  }

  constructor(injector: Injector) {
    super(injector);
  }
}
