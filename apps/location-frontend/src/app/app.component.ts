import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {LocationServiceModule} from '@location-adventure/location-service';

@Component({
  selector: 'location-adventure-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nearbyPlace: Observable<any>

  constructor(private locationService: LocationServiceModule){}

  getPlace() {

    navigator.geolocation.getCurrentPosition((position: Position) => {
      this.nearbyPlace = this.locationService.getPlace(position);
    })
  }
}
