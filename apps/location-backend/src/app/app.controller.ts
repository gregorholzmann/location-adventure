import { Controller, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Post('location')
  getData(@Body() position: {lat: number, lng: number}): Observable<AxiosResponse<any>> {
    console.log('lat lng', position)
    return this.appService.getData(position);
  }
}
