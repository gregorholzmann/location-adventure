import { PlaceAction, PlaceActionTypes } from './place.actions';

export const PLACE_FEATURE_KEY = 'place';


export interface PlaceState {
  nearestPlace: null,
  loaded: boolean; // has the Place list been loaded
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
