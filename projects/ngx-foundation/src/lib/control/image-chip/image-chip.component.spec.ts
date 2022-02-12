import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageChipComponent } from './image-chip.component';

describe('ImageChipComponent', () => {
  let component: ImageChipComponent;
  let fixture: ComponentFixture<ImageChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
