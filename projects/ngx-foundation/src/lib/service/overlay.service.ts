import { ComponentRef, ElementRef, Injectable } from '@angular/core';
import { OverlayComponent } from '../control/overlay/overlay.component';
import { NgxFoundation } from '../ngx-foundation-options';
import { DomService } from './dom.service';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private component?: ComponentRef<OverlayComponent>;

  constructor(private domService: DomService) {}

  public open(main?: string, sub?: string) {
    this.component = this.domService.createComponent(
      OverlayComponent,
      main ? { main: main, sub: sub } : NgxFoundation.options.option.overlay
    );
    this.domService.attachComponent(this.component, document.body);
  }

  public close() {
    this.domService.detachComponent(this.component!, document.body);
  }
}
