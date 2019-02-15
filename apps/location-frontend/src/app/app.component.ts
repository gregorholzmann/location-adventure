import { Component } from '@angular/core';
import {Observable} from 'rxjs';

import {LocationServiceModule} from '@location-adventure/location-service';

@Component({
  selector: 'location-adventure-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private locationService: LocationServiceModule){}
  getPlace() {
    this.locationService.getPlace()
    // navigator.geolocation.getCurrentPosition((position) => {
    // })
  }
}
