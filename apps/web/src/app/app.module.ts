import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedDataAccessModule } from '@location-adventure/shared/data-access';
import { PlaceFeatureShellModule } from '@location-adventure/place/feature-shell';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlaceFeatureShellModule,
    SharedDataAccessModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren:
            '@location-adventure/place/feature-shell#PlaceFeatureShellModule'
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
