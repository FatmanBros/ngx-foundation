# Angular NgxFoundation - ngx-foundation is a package that packs the foundation for accelerating Angular development

See [Demo]() page.

---

## Versions

| Angular | ngx-foundation |
| v12.0.0 | v0.0.2 |

---

## Getting started

### Step 1: Install `ngx-foundation`:

#### NPM

```shell
npm install --save ngx-foundation
```

### Step 2: Import the NgSelectModule and angular FormsModule module:

```js
import {
  NgxFoundationModule,
  NgxFoundationOptions,
} from "@ngx-foundation/ngx-foundation";
import { FormsModule } from "@angular/forms";

const options: NgxFoundationOptions = {
  // Optional Configuration
  messages: {
    required: "$0を入力してください。",
    maxLength: "$0文字以内で入力してください。",
    minLength: "$0文字以上で入力してください。",
    minDate: "$0日以降の日付を入力してください。",
    maxDate: "$0日以前の日付を入力してください。",
    maxValue: "$0以下の値を入力してください。",
    minValue: "$0以上の値を入力してください。",
    numeric: "数値を入力してください。",
    email: "メールアドレスの形式で入力してください",
  },
  option: {
    numberOfWords: "残り$0文字",
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [NgxFoundationModule.init(options), FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Step 3: Install `tailwindcss`:

#### NPM

```shell
npm install --save-dev tailwindcss @tailwindcss/forms @tailwindcss/typography
```

#### Create tailwind config

```shell
npx tailwindcss init
```

#### edit `tailwind.config.js`

```js
module.exports = {
  purge: {
    enabled: true,
    mode: "all",
    preserveHtmlElements: false,
    content: [
      "./node_modules/ngx-foundation/**/*.{html,ts,js}", // added
      "./src/**/*.{html,ts}",
    ],
    options: {
      safelist: ["dark"], // added
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
```

## Components

| name | tag | class |
| --- | --- | --- |
| Textbox    | foundation-textbox    |  FoundationTextboxComponent   |
| TextArea    | foundation-textarea    | FoundationTextAreaComponent    |
| CheckBox    | foundation-checkbox    | FoundationCheckboxComponent    |
| SmallCard    | foundation-info-card    | FoundationInfoCardComponent    |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

## 
## API
### Inputs

## Code scaffolding

Run `ng generate component component-name --project ngx-foundation` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-foundation`.

> Note: Don't forget to add `--project ngx-foundation` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build ngx-foundation` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-foundation`, go to the dist folder `cd dist/ngx-foundation` and run `npm publish`.

## Running unit tests

Run `ng test ngx-foundation` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
