import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'foundation-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, OnDestroy {
  @Input() items: DropdownItem[][] = [];
  public toggle: boolean = false;
  private button: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  private clickButton = () => {
    this.toggle = !this.toggle;
  };

  private includes(target: any, current: any): boolean {
    if (target === current) {
      return true;
    }
    if (current.children) {
      return Object.keys(current.children).some((elm) =>
        this.includes(target, current.children[elm])
      );
    }
    return false;
  }

  private hidden = (event: MouseEvent | KeyboardEvent) => {
    if (event instanceof MouseEvent) {
      if (this.includes(event.target, this.elementRef.nativeElement)) {
        return;
      }
    }
    if (event instanceof KeyboardEvent) {
      if (event.code !== 'Escape') {
        return;
      }
    }
    this.toggle = false;
  };

  ngAfterViewInit() {
    this.button = this.elementRef.nativeElement.querySelector('button');
    this.button.addEventListener('click', this.clickButton);
    window.addEventListener('click', this.hidden);
    window.addEventListener('keydown', this.hidden);
  }

  ngOnDestroy() {
    this.button.removeEventListener('click', this.clickButton);
    window.removeEventListener('click', this.hidden);
    window.removeEventListener('keydown', this.hidden);
  }
}
export interface DropdownItem {
  title: string;
  action: Function;
  icon?: string;
}
