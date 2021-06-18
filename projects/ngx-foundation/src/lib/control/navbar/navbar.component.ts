import { Component, Input, OnInit } from '@angular/core';

export declare interface Link {
  label: string;
  router: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() links: Link[] = [];
  @Input() avatar: string = '';

  constructor() {}
  ngOnInit() {}
}
