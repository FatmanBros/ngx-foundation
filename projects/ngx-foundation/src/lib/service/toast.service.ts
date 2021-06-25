import { ComponentRef, Injectable } from '@angular/core';
import { ToastComponent } from '../control/toast/toast.component';
import { DomService } from './dom.service';

export const toastTime = 3000;

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private isShow: boolean = false;
  private component?: ComponentRef<ToastComponent>;

  constructor(private domService: DomService) {}

  public open(title: string, content: string) {
    if (this.isShow) {
      return;
    }
    this.component = this.domService.createComponent(ToastComponent, {
      title: title,
      content: content,
    });
    this.domService.attachComponent(this.component);
    this.isShow = true;
    // 削除時間
    setTimeout(() => {
      this.domService.detachComponent(this.component!);
      this.isShow = false;
    }, toastTime);
  }
}
