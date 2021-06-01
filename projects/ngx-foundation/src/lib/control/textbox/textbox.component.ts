import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Autocomplete } from '../../enum/enums';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'foundation-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextboxComponent extends BaseControlComponent {
  @Input() autocomplete: Autocomplete = Autocomplete.newPassword;
  @Input() hint: string = '';

  constructor(injector: Injector) {
    super(injector);
  }
}
