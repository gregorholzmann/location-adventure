import { NgModule } from '@angular/core';
import { SharedPlaceDataAccessModule } from '@location-adventure/shared/place/data-access';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    SharedPlaceDataAccessModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([])
  ],
})
export class SharedDataAccessModule {}
