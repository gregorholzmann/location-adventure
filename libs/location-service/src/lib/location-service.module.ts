import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class LocationServiceModule {
  constructor(private http: HttpClient) {}
  getPlace() {
    return this.http.get('http://localhost:3333/location');
  }
}
