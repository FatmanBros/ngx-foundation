import { Component } from '@angular/core';
import { DropdownItem } from 'projects/ngx-foundation/src/lib/control/dropdown/dropdown.component';
import { Link } from 'projects/ngx-foundation/src/lib/control/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  public avatar =
    'https://images.generated.photos/Z5HfwR5L8Fez5uCqEcj3SbogJgJhBdfxJs73ZRGjWgE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzc4NzAuanBn.jpg';

  public links: Link[] = [
    { label: 'hoge', router: '' },
    { label: 'fuga', router: '' },
  ];

  public menuItems = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
    {
      path: '/table-list',
      title: 'Table List',
      icon: 'content_paste',
      class: '',
    },
    {
      path: '/typography',
      title: 'Typography',
      icon: 'library_books',
      class: '',
    },
    { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
    {
      path: '/notifications',
      title: 'Notifications',
      icon: 'notifications',
      class: '',
    },
    {
      path: '/upgrade',
      title: 'Upgrade to PRO',
      icon: 'unarchive',
      class: 'active-pro',
    },
  ];

  public userMenu: DropdownItem[][] = [
    [
      { title: 'test1', action: this.test },
      { title: 'test2', action: this.test },
    ],
    [
      { title: 'test3', action: this.test },
      { title: 'test4', action: this.test },
    ],
    [
      { title: 'test5', action: this.test },
      { title: 'test6', action: this.test },
    ],
    [{ title: 'ログアウト', action: this.test }],
  ];

  private test() {
    console.log(this)
  }
}
