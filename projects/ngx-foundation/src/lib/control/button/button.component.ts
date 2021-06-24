import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonParam } from '../../interface/interface';
import { ButtonType, TailwindColorType } from '../../types/types';

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
  @Input() color: TailwindColorType = 'white';
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
    const list = [
      'w-full',
      'inline-flex',
      'justify-center',
      `mt-3`,
      `rounded-md`,
      `border`,
      `shadow-sm`,
      `px-4`,
      `py-2`,
      'text-base',
      'font-medium',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'sm:mt-0',
      `border-gray-300`,
      `dark:border-gray-500`,
    ];

    return list.concat(this.getColorClass());
  }

  /**
   * get button class
   *
   * ...Avoid tailwind purge.
   *
   * bg-gray-600 bg-blue-600 bg-green-600 bg-yellow-600 bg-red-600 bg-purple-600 bg-pink-600
   * text-gray-100 text-blue-100 text-green-100 text-yellow-100 text-red-100 text-purple-100 text-pink-100
   * dark:bg-gray-600 dark:bg-blue-600 dark:bg-green-600 dark:bg-yellow-600 dark:bg-red-600 dark:bg-purple-600 dark:bg-pink-600
   * text-gray-100 text-blue-100 text-green-100 text-yellow-100 text-red-100 text-purple-100 text-pink-100
   * hover:bg-gray-500 hover:bg-blue-500 hover:bg-green-500 hover:bg-yellow-500 hover:bg-red-500 hover:bg-purple-500 hover:bg-pink-500
   * focus:ring-gray-500 focus:ring-blue-500 focus:ring-green-500 focus:ring-yellow-500 focus:ring-red-500 focus:ring-purple-500 focus:ring-pink-500
   */
  getColorClass(): string[] {
    switch (this.color) {
      case 'white':
        return [
          'bg-white',
          'text-gray-700',
          'hover:bg-gray-50',
          'focus:ring-gray-500',
        ];
      default:
        const bgBase = 500;
        const textBase = 100;
        const dark = -100;
        const hover = 100;
        return [
          `bg-${this.color}-${bgBase}`,
          `text-${this.color}-${textBase}`,
          `dark:bg-${this.color}-${bgBase + dark}`,
          `dark:text-${this.color}-${textBase + dark}`,
          `hover:bg-${this.color}-${bgBase + hover}`,
          `dark:hover:bg-${this.color}-${bgBase + hover + dark}`,
          `focus:ring-${this.color}-500`,
        ];
    }
  }
}
