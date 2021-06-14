import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injector,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonType } from '../enum/enums';

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy {
  public buttonType = ButtonType;
  protected detectorRef: ChangeDetectorRef;

  public ctlName!: string;

  protected elementRef: ElementRef;

  protected subscriptions: Subscription[] = [];

  constructor(injector: Injector) {
    this.elementRef = injector.get(ElementRef);
    this.detectorRef = injector.get(ChangeDetectorRef);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
