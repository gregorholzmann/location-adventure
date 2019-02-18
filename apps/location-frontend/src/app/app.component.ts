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
  nearbyPlace: string[] = []

  constructor(private locationService: LocationServiceModule){}

  getPlace() {

    navigator.geolocation.getCurrentPosition((position: Position) => {
      console.log('position', position)
      this.locationService.getPlace(position).subscribe(res => {
        console.log('places API response', res.results)
        this.nearbyPlace = res.results
      });
    })
  }
}
