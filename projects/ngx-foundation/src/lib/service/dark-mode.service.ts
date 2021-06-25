import { Injectable } from '@angular/core';
import { DomService } from './dom.service';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }

  light() {
    document.body.classList.remove('dark');
  }
  dark() {
    document.body.classList.add('dark');
  }
}
