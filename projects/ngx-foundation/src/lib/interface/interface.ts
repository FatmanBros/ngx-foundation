import { MatColor } from '../enum/enums';

export interface ButtonParam {
  label?: string;
  tooltip?: string;
  color?: MatColor;
  icon?: string;
  routerLink?: string;
  onClick?: () => void;
}

export interface NgxFoundationImage {
  image: string;
  thumbImage: string;
  alt?: string;
  title?: string;
  order?: number;
}

export interface NgxFoundationVideo {
  video: string;
  posterImage?: string;
  alt?: string;
  title?: string;
}
