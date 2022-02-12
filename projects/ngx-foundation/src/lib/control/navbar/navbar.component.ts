import { Component, Input, OnInit } from '@angular/core';
import { DropdownItem } from '../dropdown/dropdown.component';

export declare interface Link {
  label: string;
  router: string;
}

@Component({
  selector: 'foundation-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() links: Link[] = [];
  @Input() avatar: string = '';
  @Input() userMenu: DropdownItem[][] = [];

  constructor() {}
  ngOnInit() {}
}
