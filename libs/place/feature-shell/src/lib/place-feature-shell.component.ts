import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'location-adventure-home-feature-shell',
  template: `
  <div>
    <h1>
      Some Info About Nearby Places
    </h1>
    <div *ngIf="(nearbyPlace | async); let place;">
      <h2>
        Welcome to the magical land of {{place.placesData.name}}
      </h2>
      <ul>
        <li>
          Latitude: {{place.placesData.geometry.location.lat}}
        </li>
        <li>
          Longitude: {{place.placesData.geometry.location.lng}}
        </li>
      </ul>
      <h4>Color Array:</h4>
      <ul>
        <li *ngFor="let color of place.photosData">{{color}}</li>
      </ul>
    </div>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceFeatureShellComponent {
  constructor() {}
  nearbyPlace: Observable<any>

  getPlace() {

    navigator.geolocation.getCurrentPosition((position: Position) => {
      // this.nearbyPlace = this.locationService.getPlace(position);
    })
  }
}
