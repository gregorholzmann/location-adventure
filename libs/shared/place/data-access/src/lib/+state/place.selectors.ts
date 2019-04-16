import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PLACE_FEATURE_KEY, PlaceState } from './place.reducer';

// Lookup the 'Place' feature state managed by NgRx
const getPlaceState = createFeatureSelector<PlaceState>(PLACE_FEATURE_KEY);

const getLoaded = createSelector(
  getPlaceState,
  (state: PlaceState) => state.loaded
);
const getError = createSelector(
  getPlaceState,
  (state: PlaceState) => state.error
);

const getAllPlace = createSelector(
  getPlaceState,
  getLoaded,
  (state: PlaceState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getPlaceState,
  (state: PlaceState) => state.selectedId
);
const getSelectedPlace = createSelector(
  getAllPlace,
  getSelectedId,
  (place, id) => {
    const result = place.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const placeQuery = {
  getLoaded,
  getError,
  getAllPlace,
  getSelectedPlace
};
