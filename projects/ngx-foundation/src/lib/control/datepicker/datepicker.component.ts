import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlComponent } from '../base-control.component';

const MONTH_NAMES = [
  "1月",
  "2月",
  "3月",
  "3月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];
const MONTH_SHORT_NAMES = [
  "1月",
  "2月",
  "3月",
  "3月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];
const DAYS = ["日", "月", "火", "水", "木", "金", "土"];

const today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);

@Component({
  selector: 'foundation-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['../../css/styles.scss', './datepicker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent extends BaseControlComponent<Date> {
  /** 表示用定数 */
  public readonly monthNames = MONTH_NAMES;
  public readonly days = DAYS;
  public readonly dateFormat = "yyyy/MM/dd";

  /** カレンダー表示用 */
  public year: number = today.getFullYear();
  public month: number = today.getMonth();
  public date: number = today.getDate();

  public showDatepicker: boolean = false;
  public datepickerValue = "";
  @Input() public noOfDates: number[] = [];
  @Input() public blankDays: number[] = [];

  @ViewChild('dtInput') public dtInput!: ElementRef;

  private inside: boolean = false;
  @HostListener("click")
  clicked() {
    this.inside = true;
  }
  @HostListener("document:click")
  clickedOut() {
    if (!this.inside) {
      this.toggleDatepicker('close');
    }
    this.inside = false;
  }

  constructor(injector: Injector) {
    super(injector);
  }

  ngAfterViewInit() {
    this.getCalendar();
  }

  onClick() {
    setTimeout(() => {
      this.dtInput.nativeElement.focus();
    });
    this.toggleDatepicker('open');
    if (this.value) {
      this.dtInput.nativeElement.value = this.value.getFullYear() + '/' + (this.value.getMonth() + 1) + '/' + this.value.getDate();
    } else {
      this.dtInput.nativeElement.value = '';
    }
  }

  setValue(date: Date | undefined) {
    if (date && !isNaN(date.getDate())) {
      this.control.setValue(date);
      this.year = date.getFullYear();
      this.month = date.getMonth();
      this.date = date.getDate();
    } else {
      this.control.setValue(undefined);
    }
    this.control.markAsDirty();
  }
  
  onChange() {
    const changeDate = new Date(this.dtInput.nativeElement.value);
    this.setValue(changeDate);

    this.toggleDatepicker('close');
  }

  toggleDatepicker(toggle: 'open' | 'close') {
    this.showDatepicker = toggle === 'open';
    setTimeout(() => {
      this.detectorRef.detectChanges();
    }, 10);
  }

  formatDateForDisplay(date: Date): string {
    return '';
  }
  isSelectedDate(date: number): boolean {
    return this.value?.getTime() === new Date(this.year, this.month, date).getTime();
  }
  isToday(date: number): boolean {
    const d = new Date(this.year, this.month, date);
    return today.getTime() === d.getTime();
  }
  selectDate(date: number) {
    this.setValue(new Date(
      this.year,
      this.month,
      date
    ));

    setTimeout(() => {
      this.showDatepicker = false;
      this.detectorRef.detectChanges();
    });    
  }

  getClass(date: number): {} {
    return {
      'bg-indigo-100': this.isToday(date),
      'hover:bg-gray-100': !this.isSelectedDate(date),
      'bg-indigo-300 text-gray-900': this.isSelectedDate(date)
    }
  }

  getCalendar() {
    let daysInMonth = new Date(
      this.year,
      this.month,
      0
    ).getDate();
    // find where to start calendar day of week
    let dayOfWeek = new Date(
      this.year,
      this.month
    ).getDay();
    this.blankDays = new Array(dayOfWeek);
    this.noOfDates = [...Array(daysInMonth)].map((_, i) => i + 1);

    this.detectorRef.detectChanges();
  }

  onPrev() {
    if (this.month === 0) {
      this.year--;
      this.month = 12;
    }
    this.month--;
    this.getCalendar()
  }

  onNext() {
    if (this.month == 11) {
      this.month = -1;
      this.year++;
    }
    this.month++;
    this.getCalendar()
  }

  focus() {
    this.elementRef.nativeElement.querySelector('input').focus()
  }
}
