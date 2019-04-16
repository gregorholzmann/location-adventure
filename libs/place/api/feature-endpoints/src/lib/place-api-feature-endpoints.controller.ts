import { Controller, Post, Body } from '@nestjs/common';

import { SharedPlaceApiDataAccessService } from '@location-adventure/shared/place/api/data-access';
import { SharedPlaceApiFeaturePhotoProcessingService } from '@location-adventure/shared/place/api/feature-photo-processing';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Controller('api/v1/place')
export class PlaceApiFeatureEndpointsController {
  constructor(
    private placeService: SharedPlaceApiDataAccessService,
    private photoService: SharedPlaceApiFeaturePhotoProcessingService
  ) {}

  @Post()
  getData(@Body() position: { lat: number; lng: number }): Observable<{
    placesData: any;
    photosData: any;
  }> {
    return this.placeService.getPlacesData(position).pipe(
      catchError(err => {
        console.warn(
          'Something went wrong with the Places API call. ¯\\_(ツ)_/¯'
        );
        return of({
          placesData: null,
          photosData: null
        });
      }),
      switchMap(firstResponse => {
        let photoRef =
          firstResponse.photos && firstResponse.photos[0].photo_reference
            ? firstResponse.photos[0].photo_reference
            : null;
        return this.placeService.getPlacesPhotoData(photoRef).pipe(
          catchError(err => {
            console.warn(
              'Something went wrong with the Photos API call. ¯\\_(ツ)_/¯'
            );
            return of({
              placesData: firstResponse,
              photosData: null
            });
          }),
          map(secondResponse => ({
            placesData: firstResponse,
            photosData: this.photoService.getColorPalette(secondResponse)
          }))
        );
      })
    );
  }
}
