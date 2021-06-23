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
      `border-gray-300`,
      `shadow-sm`,
      `px-4`,
      `py-2`,
      'text-base',
      'font-medium',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'sm:mt-0',
    ];

    return list.concat(this.getColorClass());
  }

  /**
   * get button class
   * 
   * ...Avoid tailwind purge.
   * 
   * bg-gray-600 bg-blue-600 bg-green-600 bg-yellow-600 bg-red-600 bg-purple-600 bg-pink-600
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
        return [
          `bg-${this.color}-600`,
          `hover:bg-${this.color}-500`,
          `focus:ring-${this.color}-500`,
        ];
    }
  }
}
