import { ComponentRef, Injectable } from '@angular/core';
import {
  ToastComponent,
  ToastFrameComponent,
} from '../control/toast/toast.component';
import { DomService } from './dom.service';

export const toastTime = 3000;

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private frameComponent: ComponentRef<ToastFrameComponent>;

  constructor(private domService: DomService) {
    this.frameComponent = domService.createComponent(ToastFrameComponent);
    this.domService.attachComponent(this.frameComponent);
  }

  public open(title: string, content: string) {
    const component: ComponentRef<ToastComponent> =
      this.domService.createComponent(ToastComponent, {
        title: title,
        content: content,
      });
    this.domService.attachComponent(
      component,
      this.frameComponent.location.nativeElement
    );

    component.instance.onDone.subscribe((_) => {
      this.domService.detachComponent(
        component,
        this.frameComponent.location.nativeElement
      );
    });
  }
}
