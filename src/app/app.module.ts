import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFoundationModule } from '@ngx-foundation/ngx-foundation';
import { Appearance } from 'projects/ngx-foundation/src/lib/enum/enums';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalComponent } from './examples/normal/normal.component';

@NgModule({
  declarations: [AppComponent, NormalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFoundationModule.init({
      messages: {
        required: '必須です。',
        maxLength: '$0文字以内で入力してください。',
        minLength: '$0文字以上で入力してください。',
        minDate: '$0日以降の日付を入力してください。',
        maxDate: '$0日以前の日付を入力してください。',
      },
      option: {
        numberOfWords: '残り$0文字',
      },
      appearance: Appearance.outline,
    }),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
