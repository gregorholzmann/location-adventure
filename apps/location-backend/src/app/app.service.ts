import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import  {googlePlacesAPIKey } from '../../../../secrets';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getPlacesData(position: {lat: number, lng: number}): Observable<any> {
    return this.httpService.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      {
        params: {
          key:googlePlacesAPIKey,
          location:`${position.lat}, ${position.lng}`,
          radius: 500
        }
      }).pipe(
        map(response => {
          let index: number = Math.floor(Math.random() * (response.data.results.length - 0)) + 0;
          return response.data.results[index]
        })
      );
  }

  getPlacesPhotoData(photoRef: string): Observable<any> {
    return this.httpService.get('https://maps.googleapis.com/maps/api/place/photo',
      {
        params: {
          key:googlePlacesAPIKey,
          photoreference:photoRef,
          maxwidth: 500
        }
      }).pipe(
        map(response => {
          return response.data
        })
      );
  }
}
