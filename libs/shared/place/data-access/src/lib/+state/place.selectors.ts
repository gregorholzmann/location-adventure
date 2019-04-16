import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PLACE_FEATURE_KEY, PlaceState } from './place.reducer';

// Lookup the 'Place' feature state managed by NgRx
const getPlaceState = createFeatureSelector<PlaceState>(PLACE_FEATURE_KEY);

const getLoaded = createSelector(
  getPlaceState,
  (state: PlaceState) => state.loaded
);

const getNearestPlace = createSelector(
  getPlaceState,
  getLoaded,
  (state: PlaceState, isLoaded) => {
    return isLoaded ? state.nearestPlace : [];
  }
);

export const placeQuery = {
  getLoaded,
  getPlaceState,
  getNearestPlace
};
