import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class LocationServiceModule {
  constructor(private http: HttpClient) {}
  getPlace(position: Position): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:3333/location', { lat: position.coords.latitude, lng: position.coords.longitude }, httpOptions);
  }
}
