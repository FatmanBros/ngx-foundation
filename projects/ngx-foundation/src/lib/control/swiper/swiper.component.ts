import { Component, Input, OnInit } from '@angular/core';
import {
  Swiper,
  SwiperOptions,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Pagination,
  Navigation,
} from 'swiper';

// オートプレイの開始
Swiper.use([
  Autoplay,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Pagination,
  Navigation,
]);

@Component({
  selector: 'foundation-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  @Input() images: string[] = [];

  public swiperOptions: SwiperOptions = {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 5,
    updateOnWindowResize: true,
    autoplay: {
      delay: 1000 * 6,
    },
    pagination: true,
    navigation: true,
  };

  constructor() {}

  ngOnInit(): void {}

  onSwiper(swiper: Swiper) {}
  onSlideChange() {}
}
