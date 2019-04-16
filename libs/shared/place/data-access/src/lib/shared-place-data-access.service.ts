import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '@location-adventure/shared/util-models';

@Injectable({
  providedIn: 'root'
})
export class SharedPlaceDataAccessService {
  constructor(private http: HttpClient) {}

  getPlace(position: Position): Observable<Place> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Place>(
      'http://localhost:3333/location',
      { lat: position.coords.latitude, lng: position.coords.longitude },
      httpOptions
    );
  }
}
