import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonType } from '../../enum/enums';
import { ButtonParam, defaultParam } from '../../interface/interface';

@Component({
  selector: 'foundation-button',
  templateUrl: './button.component.html',
  styleUrls: ['../../css/styles.scss', './button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  buttonType = ButtonType;
  @Input() buttonParam: ButtonParam = defaultParam;

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.addEventListener('click', () => {
      if (this.buttonParam.onClick) {
        this.buttonParam.onClick();
      }
    });
  }
  ngOnInit(): void {}
}
