import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
        required: '$0は必須です。',
        maxLength: '$0は$1文字以内で入力してください。',
        minLength: '$0は$1文字以上で入力してください。',
      },
      appearance: Appearance.outline,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
