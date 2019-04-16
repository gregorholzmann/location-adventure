import { Component } from '@angular/core';

@Component({
  selector: 'location-adventure-root',
  template: `
    <h1>Location Adventure</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
