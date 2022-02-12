import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

const accordionTime = 200;

@Component({
  selector: 'foundation-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('accordion', [
      state('open', style({ opacity: 1, height: '100%' })),
      state('close', style({ opacity: 0, height: '0px' })),
      transition('* <=> *', animate(accordionTime + 'ms ease-in-out')),
    ]),
  ],
})
export class AccordionComponent implements OnInit {
  @Input()
  public title: string = '';

  @Input()
  public accordion: 'open' | 'close' = 'close';

  constructor() {}

  ngOnInit(): void {}

  done(event: any) {}

  toggle() {
    this.accordion = this.accordion === 'open' ? 'close' : 'open';
  }
}
