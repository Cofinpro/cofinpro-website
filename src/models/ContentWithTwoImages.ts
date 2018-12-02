import { SharpImage } from './SharpImage';

export interface ContentWithTwoImages {
  title: string;
  subtitle?: string;
  text: string;
  imageLeft: SharpImage;
  imageRight: SharpImage;
}
