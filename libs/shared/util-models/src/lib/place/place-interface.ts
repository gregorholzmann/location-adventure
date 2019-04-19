import { Photo } from './place-photo-interface';

export interface Place {
  geometry: {
    lat: number;
    lng: number;
  }
  viewport: {
    northeast: {
      lat: number;
      lng: number;
    }
    southwest: {
      lat: number;
      lng: number;
    }
  }
  icon: string;
  id: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  }
  photos: Photo[];
  plus_code: {
    compound_code: string;
    global_code: string;
  }
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
}
