import { SharpImage } from './SharpImage';

export interface ContentWithColumns {
  title: string;
  subtitle?: string;
  description?: string;
  columns: {
    title: string;
    text: string;
    icon: SharpImage;
  }[];
}
