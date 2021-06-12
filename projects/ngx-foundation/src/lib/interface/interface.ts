import { ButtonType, MatColor } from '../enum/enums';

export interface ButtonParam {
  label?: string;
  type: ButtonType;
  tooltip?: string;
  color?: MatColor;
  icon?: string;
  routerLink?: string;
  onClick?: () => void;
}

export const defaultParam: ButtonParam = {
  type: ButtonType.basic,
};

export interface NgxFoundationImage {
  image: string;
  thumbImage: string;
  alt?: string;
  title?: string;
  order?: number;
}

export interface NgxFoundationVideo {
  video: string,
  posterImage?: string;
  alt?: string;
  title?: string;
}
