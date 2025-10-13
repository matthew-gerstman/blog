export interface ImageSizes {
  thumbnail: string;
  medium: string;
  large: string;
  full: string;
}

export interface ImageManifestEntry {
  original: string;
  sizes: ImageSizes;
}

export interface ImageManifest {
  [key: string]: ImageManifestEntry;
}
