import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'foundation-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input()
  public accordion: 'open' | 'close' = 'close';

  constructor() {}

  ngOnInit(): void {}

  done(event: any) {}
}
