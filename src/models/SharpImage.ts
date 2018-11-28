export interface SharpImage {
  id: string;
  title: string;
  description: string;
  file: {
    url: string;
    fileName: string;
    contentType: string;
  };
  sizes: any;
}
