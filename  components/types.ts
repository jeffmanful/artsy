export interface Artist {
  id: string,
  name: string,
  blurb: string,
  image?: {
    url: string
  },
  nationality: string;
  years: string;
}

export interface Image {
  id: string,
  image_url?: string,
  aspect_ratio?: number,
  tile_base_url: string,
}
