import { InjectionToken } from '@angular/core';
import { Appearance } from './enum/enums';
import { Validation } from './validate/validation';

export const NGX_FOUNDATION_OPTIONS = new InjectionToken<ngxFoundationOptions>(
  'ngx.foundation.options'
);

export interface ngxFoundationOptions {
  messages: {
    [Validation.required]: string;
    [Validation.maxLength]: string;
    [Validation.minLength]: string;
    [Validation.maxDate]: string;
    [Validation.minDate]: string;
    [Validation.maxValue]: string;
    [Validation.minValue]: string;
    [Validation.numeric]: string;
  };

  option: {
    numberOfWords: string;
  };
  appearance?: Appearance;
}
