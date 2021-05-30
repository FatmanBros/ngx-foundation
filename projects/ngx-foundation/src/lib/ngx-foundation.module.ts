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
import { UiModule } from './mat.module';
import { NgxFoundationComponent } from './ngx-foundation.component';
import { Validation } from './validate/validation';

export const VALIDATOR_OPTIONS = new InjectionToken<ValidatorOptoins>(
  'ngx.foundation.validator.options'
);
export const defaultMessages: ValidatorOptoins = {
  messages: {
    [Validation.required]: '$0 is required',
    [Validation.maxLength]: 'up to $1 characters for $0',
    [Validation.minLength]: 'at least $1 characters for $0',
  },
};

export interface ValidatorOptoins {
  messages: {
    [Validation.required]: string;
    [Validation.maxLength]: string;
    [Validation.minLength]: string;
  };
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
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
  ],
  exports: [
    NgxFoundationComponent,
    TextboxComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    ButtonComponent,
    LabelComponent,
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
    options: ValidatorOptoins
  ): ModuleWithProviders<NgxFoundationModule> {
    return {
      ngModule: NgxFoundationModule,
      providers: [{ provide: VALIDATOR_OPTIONS, useValue: options }],
    };
  }
}
