import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import  {googlePlacesAPIKey } from '../../../../secrets';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getData() {
    return this.httpService.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      {
        params: {
          key:googlePlacesAPIKey,
          location:'0,0',
          radius: 500
        }
      })
  }
}
