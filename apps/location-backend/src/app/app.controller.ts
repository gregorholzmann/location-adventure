import { Controller, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { PhotoProcessingService } from './photo-processing.service';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private appService: AppService, private photoService: PhotoProcessingService) {}

  @Post('location')
  getData(@Body() position: {lat: number, lng: number}): Observable<{placesData: any, photosData: any}> {
    return this.appService.getPlacesData(position)
      .pipe(
        catchError(err => {
          console.warn('Something went wrong with the Places API call. ¯\\_(ツ)_/¯');
          return of({
            placesData: null,
            photosData: null
          })
        }),
        switchMap(firstResponse => {
          let photoRef = firstResponse.photos && firstResponse.photos[0].photo_reference ? firstResponse.photos[0].photo_reference : null;
          return this.appService.getPlacesPhotoData(photoRef)
            .pipe(
              catchError(err => {
                console.warn('Something went wrong with the Photos API call. ¯\\_(ツ)_/¯');
                return of({
                  placesData: firstResponse,
                  photosData: null
                })
              }),
              map(secondResponse => ({
                placesData: firstResponse,
                photosData: this.photoService.getColorPalette(secondResponse)
              }))
            )
        })
      );
  }
}
