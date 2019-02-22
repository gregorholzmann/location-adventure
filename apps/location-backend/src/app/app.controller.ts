import { Controller, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

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
          if(firstResponse.photos && firstResponse.photos[0].photo_reference) {
            return this.appService.getPlacesPhotoData(firstResponse.photos[0].photo_reference)
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
                photosData: secondResponse
              }))
            )
          } else {
            return of({
              placesData: firstResponse,
              photosData: null
            })
          }
        })
      );
  }
}
