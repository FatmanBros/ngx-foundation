import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgxFoundationModule,
  MaterialModule,
} from '@ngx-foundation/ngx-foundation';
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
    MaterialModule,
    FlexLayoutModule,
    MatFormFieldModule,
    NgxFoundationModule.init({
      messages: {
        required: '必須です。',
        maxLength: '$0文字以内で入力してください。',
        minLength: '$0文字以上で入力してください。',
        minDate: '$0日以降の日付を入力してください。',
        maxDate: '$0日以前の日付を入力してください。',
        maxValue: '$0以下の値を入力してください。',
        minValue: '$0以上の値を入力してください。',
        numeric: '数値を入力してください。',
      },
      option: {
        numberOfWords: '残り$0文字',
      },
    }),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: Appearance.outline },
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
