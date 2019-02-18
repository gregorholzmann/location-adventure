import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import  {googlePlacesAPIKey } from '../../../../secrets';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getData(position: {lat: number, lng: number}): Observable<AxiosResponse<any>> {
    return this.httpService.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      {
        params: {
          key:googlePlacesAPIKey,
          location:`${position.lat}, ${position.lng}`,
          radius: 500
        }
      }).pipe(
        map(response => response.data)
      );
  }
}
