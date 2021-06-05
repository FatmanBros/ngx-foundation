import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { NgImageSliderModule } from 'ng-image-slider';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatDividerModule,
  MatCardModule,
  NgImageSliderModule,
];

@NgModule({
  exports: [...modules],
})
export class MaterialModule {}
