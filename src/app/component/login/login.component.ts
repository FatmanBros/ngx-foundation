import { Component, OnInit } from '@angular/core';
import { LoginParameter } from '@ngx-foundation/ngx-foundation';

@Component({
  selector: 'foundation-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: LoginParameter) {
    console.log(event);
  }
}
