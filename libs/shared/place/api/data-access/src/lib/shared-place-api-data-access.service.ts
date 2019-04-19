import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {
  GOOGLE_NEARBY_URL,
  GOOGLE_PHOTO_URL
} from '@location-adventure/shared/util-constants';
import { googlePlacesAPIKey } from '../../../../../../../secrets';

@Injectable()
export class SharedPlaceApiDataAccessService {
  constructor(private readonly httpService: HttpService) {}
  getPlacesData(coordinates: Coordinates): Observable<any> {
    return this.httpService
      .get(GOOGLE_NEARBY_URL, {
        params: {
          key: googlePlacesAPIKey,
          location: `${coordinates.latitude}, ${coordinates.longitude}`,
          radius: 500
        }
      })
      .pipe(
        map(response => {
          let index: number =
            Math.floor(Math.random() * (response.data.results.length - 0)) + 0;
          return response.data.results[index];
        })
      );
  }

  getPlacesPhotoData(photoRef: string): Observable<any> {
    if (photoRef) {
      return this.httpService
        .get(GOOGLE_PHOTO_URL, {
          params: {
            key: googlePlacesAPIKey,
            photoreference: photoRef,
            maxwidth: 500
          },
          responseType: 'arraybuffer'
        })
        .pipe(
          map(response => {
            return response.data;
          }),
          catchError(err => throwError(new NotFoundException()))
        );
    } else {
      of({
        type: null,
        data: null
      });
    }
  }
}
