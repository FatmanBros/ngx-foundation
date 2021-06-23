import { Component, Input, OnInit } from '@angular/core';
import { TailwindColorType } from '../../types/types';

@Component({
  selector: 'foundation-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string = '';
  @Input() color: TailwindColorType = 'gray';
  constructor() {}

  ngOnInit(): void {}

  /**
   * get class
   * 
   * ...Avoid tailwind purge.
   * text-gray-700 text-blue-700 text-green-700 text-yellow-700 text-red-700 text-purple-700 text-pink-700
   * dark:text-gray-300 dark:text-blue-300 dark:text-green-300 dark:text-yellow-300 dark:text-red-300 dark:text-purple-300 dark:text-pink-300
   * 
   * @returns 
   */
  getClass() {
    return [`text-${this.color}-700`, `dark:text-${this.color}-300`];
  }
}
