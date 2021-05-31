import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Util } from '../../util/utils';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'foundation-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent extends BaseControlComponent {
  @Input() rows: number = 10;
  // @Input() cols: number = 80;
  @Input() isAutoSize: boolean = false;

  public get numberOfWords(): string {
    if (!this.maxLength) {
      return '';
    }

    const remaining = this.maxLength - this.control.value?.length;
    if (isNaN(remaining)) {
      return '';
    }
    return Util.message(
      this.options.option.numberOfWords,
      remaining + '',
      this.maxLength + ''
    );
  }

  constructor(injector: Injector) {
    super(injector);
  }
}
