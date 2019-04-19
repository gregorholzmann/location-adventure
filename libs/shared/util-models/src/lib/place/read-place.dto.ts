import { Place } from './index';

export class ReadPlaceDto {
  html_attributions: string[];
  results: Place[];
  status: string;
}
