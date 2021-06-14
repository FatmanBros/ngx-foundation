import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { SignUpFormComponent } from './component/sign-up-form/sign-up-form.component';
import { ButtonComponent } from './control/button/button.component';
import { CardComponent } from './control/card/card.component';
import { CheckboxComponent } from './control/checkbox/checkbox.component';
import { ContentsSliderComponent } from './control/contents-slider/contents-slider.component';
import { DatepickerComponent } from './control/datepicker/datepicker.component';
import { ImageSliderComponent } from './control/image-slider/image-slider.component';
import { ImageComponent } from './control/image/image.component';
import { LabelComponent } from './control/label/label.component';
import { RadioComponent } from './control/radio/radio.component';
import { SelectComponent } from './control/select/select.component';
import { TextareaComponent } from './control/textarea/textarea.component';
import { TextboxComponent } from './control/textbox/textbox.component';
import { ToolbarComponent } from './control/toolbar/toolbar.component';
import { Appearance } from './enum/enums';
import { MaterialModule } from './mat.module';
import { NgxFoundationComponent } from './ngx-foundation.component';
import {
  ngxFoundationOptions,
  NGX_FOUNDATION_OPTIONS
} from './ngx-foundation.options';
import { NumberWithCommasPipe } from './pipe/number-with-commas.pipe';
import { Validation } from './validate/validation';

export const defaultOptions: ngxFoundationOptions = {
  messages: {
    [Validation.required]: '$0 is required',
    [Validation.maxLength]: 'up to $1 characters for $0',
    [Validation.minLength]: 'at least $1 characters for $0',
    [Validation.maxDate]: 'date prior to $0',
    [Validation.minDate]: 'date after $0',
    [Validation.maxValue]: 'less than or equal to $0',
    [Validation.minValue]: ' greater than or equal to $0',
    [Validation.numeric]: 'please enter a number',
    [Validation.email]: 'please enter in email format',
  },
  option: {
    numberOfWords: '$0 / $1',
  },
  appearance: Appearance.standard,
};

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
    NumberWithCommasPipe,
    ToolbarComponent,
    CardComponent,
    ImageSliderComponent,
    ContentsSliderComponent,
    ImageComponent,
    LoginFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgSelectModule,
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
    DatepickerComponent,
    NumberWithCommasPipe,
    ToolbarComponent,
    CardComponent,
    ImageSliderComponent,
    ContentsSliderComponent,
    LoginFormComponent,
    SignUpFormComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class NgxFoundationModule {
  public static options: ngxFoundationOptions;
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
    this.options = op;

    return {
      ngModule: NgxFoundationModule,
      providers: [{ provide: NGX_FOUNDATION_OPTIONS, useValue: options }],
    };
  }

  constructor(domSanitizer: DomSanitizer, iconRegistry: MatIconRegistry) {
    const icons = [
      'arrow_back_ios',
      'arrow_forward_ios',
      'chevron_left',
      'chevron_right',
    ];

    icons.forEach((icon) => {
      iconRegistry.addSvgIcon(
        icon,
        domSanitizer.bypassSecurityTrustResourceUrl(
          '/assets/icon/' + icon + '.svg'
        )
      );
    });
  }
}
