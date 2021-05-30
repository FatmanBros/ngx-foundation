import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFoundationComponent } from './ngx-foundation.component';

describe('NgxFoundationComponent', () => {
  let component: NgxFoundationComponent;
  let fixture: ComponentFixture<NgxFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFoundationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
