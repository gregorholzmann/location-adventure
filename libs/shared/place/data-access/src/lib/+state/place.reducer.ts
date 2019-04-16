import { PlaceAction, PlaceActionTypes } from './place.actions';
import { Place } from '@location-adventure/shared/util-models';
export const PLACE_FEATURE_KEY = 'place';

export interface PlaceState {
  nearestPlace: Place,
  loaded: boolean;
}

export const initialState: PlaceState = {
  nearestPlace: null,
  loaded: false
};

export function placeReducer(
  state: PlaceState = initialState,
  action: PlaceAction
): PlaceState {
  switch (action.type) {
    case PlaceActionTypes.PlaceLoaded: {
      state = {
        ...state,
        nearestPlace: action.place,
        loaded: true
      };
      break;
    }
  }
  return state;
}
