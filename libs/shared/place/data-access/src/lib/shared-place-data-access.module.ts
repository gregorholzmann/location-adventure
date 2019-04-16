import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  PLACE_FEATURE_KEY,
  initialState as placeInitialState,
  placeReducer
} from './+state/place.reducer';
import { PlaceEffects } from './+state/place.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PLACE_FEATURE_KEY, placeReducer, {
      initialState: placeInitialState
    }),
    EffectsModule.forFeature([PlaceEffects])
  ],
  providers: [SharedPlaceDataAccessService]
})
export class SharedPlaceDataAccessModule {}
