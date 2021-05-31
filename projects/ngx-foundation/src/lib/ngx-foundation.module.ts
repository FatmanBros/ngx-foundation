import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ButtonComponent } from './control/button/button.component';
import { CheckboxComponent } from './control/checkbox/checkbox.component';
import { LabelComponent } from './control/label/label.component';
import { RadioComponent } from './control/radio/radio.component';
import { SelectComponent } from './control/select/select.component';
import { TextareaComponent } from './control/textarea/textarea.component';
import { TextboxComponent } from './control/textbox/textbox.component';
import { Appearance } from './enum/enums';
import { UiModule } from './mat.module';
import { NgxFoundationComponent } from './ngx-foundation.component';
import { Validation } from './validate/validation';
import { DatepickerComponent } from './control/datepicker/datepicker.component';

export const NGX_FOUNDATION_OPTIONS = new InjectionToken<ngxFoundationOptions>(
  'ngx.foundation.options'
);
export const defaultOptions: ngxFoundationOptions = {
  messages: {
    [Validation.required]: '$0 is required',
    [Validation.maxLength]: 'up to $1 characters for $0',
    [Validation.minLength]: 'at least $1 characters for $0',
  },
  option: {
    numberOfWords: '$0 / $1',
  },
  appearance: Appearance.standard,
};

export interface ngxFoundationOptions {
  messages: {
    [Validation.required]: string;
    [Validation.maxLength]: string;
    [Validation.minLength]: string;
  };

  option: {
    numberOfWords: string;
  };
  appearance?: Appearance;
}

@NgModule({
  declarations: [
    NgxFoundationComponent,
    TextboxComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    ButtonComponent,
    LabelComponent,
    DatepickerComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UiModule],
  exports: [
    NgxFoundationComponent,
    TextboxComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    ButtonComponent,
    LabelComponent,
    DatepickerComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class NgxFoundationModule {
  static init(
    options: ngxFoundationOptions
  ): ModuleWithProviders<NgxFoundationModule> {
    let op = defaultOptions;
    if (options.messages) {
      op.messages = options.messages;
    }
    if (options.appearance) {
      op.appearance = options.appearance;
    }
    return {
      ngModule: NgxFoundationModule,
      providers: [{ provide: NGX_FOUNDATION_OPTIONS, useValue: options }],
    };
  }
}
