import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonParam } from '../../interface/interface';
import { ButtonType, ColorType } from '../../types/types';

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
  @Input() type: ButtonType = 'button';
  @Input() color: ColorType = 'white';
  @Input() label: string = 'Button';
  @Input() buttonParam: ButtonParam = {};
  @Input() tabindex?: number;
  @Input() routerLink: string = '';

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.addEventListener('click', () => {
      if (this.buttonParam.onClick) {
        this.buttonParam.onClick();
      }
    });
  }
  ngOnInit(): void {}

  ngAfterViewInit() {}

  getClass() {
    if (this.color === 'white') {
      return [
        `mt-3`,
        `w-full`,
        `inline-flex`,
        `justify-center`,
        `rounded-md`,
        `border`,
        `border-gray-300`,
        `shadow-sm`,
        `px-4`,
        `py-2`,
        `bg-white`,
        `text-base`,
        `font-medium`,
        `text-gray-700`,
        `hover:bg-gray-50`,
        `focus:outline-none`,
        `focus:ring-2`,
        `focus:ring-offset-2`,
        `focus:ring-gray-500`,
        `sm:mt-0`,
      ];
    } else {
      return [
        `w-full`,
        `inline-flex`,
        `justify-center`,
        `rounded-md`,
        `border`,
        `border-transparent`,
        `shadow-sm`,
        `px-4`,
        `py-2`,
        `bg-${this.color}-600`,
        `text-base`,
        `font-medium`,
        `text-white`,
        `hover:bg-${this.color}-500`,
        `focus:outline-none`,
        `focus:ring-2`,
        `focus:ring-offset-2`,
        `focus:ring-${this.color}-500`,
      ];
    }
  }
}
