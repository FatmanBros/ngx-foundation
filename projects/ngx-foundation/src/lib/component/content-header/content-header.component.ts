import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'foundation-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  @Input()
  public title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
