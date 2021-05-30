import { Component, Injector } from '@angular/core';
import { BaseControlComponent } from '../base-control.component';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseControlComponent {

  constructor(injector: Injector) {
    super(injector);
  }


  ngOnInit(): void {
  }

}
