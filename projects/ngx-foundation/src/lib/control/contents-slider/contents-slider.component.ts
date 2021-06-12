import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ButtonType } from '../../enum/enums';

@Component({
  selector: 'foundation-contents-slider',
  templateUrl: './contents-slider.component.html',
  styleUrls: ['./contents-slider.component.scss'],
})
export class ContentsSliderComponent implements OnInit {
  @Input() width: string | number = '100%';
  @Input() height: string | number = '30em';
  @Input() contentWidth: number = 480;

  private isDragging: boolean = false;
  private contentX: number = 0;
  private startX: number = 0;
  private moveX: number = 0;
  private contentCnt: number = 0;

  private currentNo: number = 0;

  public buttonType = ButtonType;

  constructor(private elementRef: ElementRef) {
    window.addEventListener('mouseup', (event) => this.dragEnd(event));
    window.addEventListener('mousemove', (event) => this.drag(event));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    window.removeEventListener('mouseup', (event) => this.dragEnd(event));
    window.removeEventListener('mousemove', (event) => this.drag(event));
  }

  ngAfterViewInit() {
    const div: Element =
      this.elementRef.nativeElement.querySelector('div.inner');
    this.contentCnt = div.children.length;
    this.contentX = this.elementRef.nativeElement.offsetLeft;
  }

  public get outerStyles() {
    return {
      width: this.width,
      height: this.height,
    };
  }

  public get innerStyles() {
    return {
      'transition-duration': this.isDragging ? '0s' : '.5s',
    };
  }

  public dragStart(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.screenX;
  }

  public dragEnd(event: MouseEvent) {
    this.isDragging = false;
    // calc current no
    const diff = Math.round(-this.moveX / this.contentWidth);
    this.currentNo += diff;
    if (this.currentNo < 0) {
      this.currentNo = 0;
    }
    if (this.currentNo > this.contentCnt - 1) {
      this.currentNo = this.contentCnt - 1;
    }
    this.moveX = 0;
  }

  public drag(event: MouseEvent) {
    if (!this.isDragging) {
      return;
    }
    this.moveX = event.screenX - this.startX;
  }

  public get left() {
    if (this.isDragging) {
      return -(this.currentNo * this.contentWidth) + this.moveX + 'px';
    } else {
      return -(this.currentNo * this.contentWidth) + 'px';
    }
  }

  onLeft() {
    this.currentNo--;
    if (this.currentNo - 1 < 0) {
      this.currentNo = 0;
    }
  }

  onRight() {
    this.currentNo++;
    if (this.currentNo >= this.contentCnt - 1) {
      this.currentNo = this.contentCnt - 1;
    }
  }
}
