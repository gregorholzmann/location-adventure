import { Controller, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('location')
  getData(@Body() position: {lat: number, lng: number}): Observable<{placesData: any, photosData: any}> {
    return this.appService.getPlacesData(position)
      .pipe(
        switchMap(firstResponse => this.appService.getPlacesPhotoData(firstResponse.photos[0].photo_reference)
        .pipe(
          map(secondResponse => ({
            placesData: firstResponse,
            photosData: secondResponse
          }))
        ))
      );
  }
}
