import { Component, Input, OnInit } from '@angular/core';
import { ImageVideoContentType } from '../../enum/enums';
import {
  NgxFoundationImage,
  NgxFoundationVideo,
} from '../../interface/interface';

@Component({
  selector: 'foundation-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  @Input() content?: NgxFoundationImage | NgxFoundationVideo;

  public contentType = ImageVideoContentType;

  public getContentType() {
    if (!this.content) {
      return ImageVideoContentType.other;
    }
    if ('image' in this.content) {
      return ImageVideoContentType.image
    }
    if ('video' in this.content) {
      return ImageVideoContentType.video
    }
    return ImageVideoContentType.other;
  }
  
  public get imgContent(): NgxFoundationImage {
    return this.content as NgxFoundationImage;
  }
  public get videoContent(): NgxFoundationVideo {
    return this.content as NgxFoundationVideo;
  }

  constructor() {}

  ngOnInit(): void {}
}
