import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { SignUpFormComponent } from './component/sign-up-form/sign-up-form.component';
import { AvatarComponent } from './control/avatar/avatar.component';
import { ButtonComponent } from './control/button/button.component';
import { CardComponent } from './control/card/card.component';
import { CheckboxComponent } from './control/checkbox/checkbox.component';
import { ContentsSliderComponent } from './control/contents-slider/contents-slider.component';
import { DatepickerComponent } from './control/datepicker/datepicker.component';
import {
  InfoDialogComponent,
  WarnDialogComponent,
} from './control/dialog/dialog.component';
import { DropdownComponent } from './control/dropdown/dropdown.component';
import { ImageSliderComponent } from './control/image-slider/image-slider.component';
import { ImageComponent } from './control/image/image.component';
import { LabelComponent } from './control/label/label.component';
import { NavbarComponent } from './control/navbar/navbar.component';
import { RadioComponent } from './control/radio/radio.component';
import { SelectComponent } from './control/select/select.component';
import { SidebarComponent } from './control/sidebar/sidebar.component';
import { TextareaComponent } from './control/textarea/textarea.component';
import { TextboxComponent } from './control/textbox/textbox.component';
import { ToolbarComponent } from './control/toolbar/toolbar.component';
import { Appearance } from './enum/enums';
import { MaterialModule } from './mat.module';
import { NgxFoundation } from './ngx-foundation-options';
import { NgxFoundationComponent } from './ngx-foundation.component';
import {
  ngxFoundationOptions,
  NGX_FOUNDATION_OPTIONS,
} from './ngx-foundation.options';
import { NumberWithCommasPipe } from './pipe/number-with-commas.pipe';
import { Validation } from './validate/validation';
import { SocialMediaButtonsComponent } from './control/social-media-buttons/social-media-buttons.component';
import { ImageChipComponent } from './control/image-chip/image-chip.component';
import { IconButtonComponent } from './control/icon-button/icon-button.component';
import { InfoCardComponent } from './control/info-card/info-card.component';
import { OverlayComponent } from './control/overlay/overlay.component';

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
    overlay: {
      main: 'Loading...',
      sub: 'This may take a few seconds, please don\'t close this page.',
    }
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
    NavbarComponent,
    SidebarComponent,
    AvatarComponent,
    DropdownComponent,
    WarnDialogComponent,
    InfoDialogComponent,
    SocialMediaButtonsComponent,
    ImageChipComponent,
    IconButtonComponent,
    InfoCardComponent,
    OverlayComponent,
  ],
  imports: [
    RouterModule,
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
    NavbarComponent,
    SidebarComponent,
    DropdownComponent,
    WarnDialogComponent,
    InfoDialogComponent,
    ImageChipComponent,
    IconButtonComponent,
    InfoCardComponent,
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
    if (options.option) {
      if(options.option.numberOfWords) {
        op.option.numberOfWords = options.option.numberOfWords;
      }
      if (options.option.overlay) {
        op.option.overlay = options.option.overlay;
      }
    }
    if (options.appearance) {
      op.appearance = options.appearance;
    }
    NgxFoundation.options = op;

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
      'dark_mode',
      'light_mode'
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
