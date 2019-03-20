import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

import  { GOOGLE_NEARBY_URL, GOOGLE_PHOTO_URL } from '../../../../constants';
import  {googlePlacesAPIKey } from '../../../../secrets';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getPlacesData(position: {lat: number, lng: number}): Observable<any> {
    return this.httpService.get(GOOGLE_NEARBY_URL,
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
    if(photoRef) {
      return this.httpService.get(GOOGLE_PHOTO_URL,
        {
          params: {
            key:googlePlacesAPIKey,
            photoreference:photoRef,
            maxwidth: 500
          },
          responseType: 'arraybuffer'
        }).pipe(
          map(response => {
            return response.data;
          }),
          catchError(err => throwError(new NotFoundException()))
        );
    } else {
      of({
        type: null,
        data: null
      })
    }
  }
}
