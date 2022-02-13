import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Input,
  ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Autocomplete } from '../../enum/enums';
import { Validation, Validations } from '../../validate/validation';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'foundation-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['../../css/styles.scss', './textbox.component.scss'],
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
  @Input() type: string = 'text';
  @Input() style: 'default' | 'custom' = 'default'
  isNumeric: boolean = false;
  hide: boolean = true;

  constructor(injector: Injector) {
    super(injector);
  }

  mainNgAfterViewInit() {
    // emailタイプの自動判定
    if (this.existValidation(Validation.email)) {
      this.type = 'email';
    }

    this.isNumeric = !!this.control.validators?.some((validator) =>
      Object.keys(validator).some((key) => key === Validation.numeric)
    );
  }

  focus() {
    this.elementRef.nativeElement.querySelector('input').focus()
  }
}
