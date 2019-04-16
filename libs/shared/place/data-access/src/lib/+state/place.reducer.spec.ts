import { PlaceLoaded } from './place.actions';
import {
  PlaceState,
  Entity,
  initialState,
  placeReducer
} from './place.reducer';

describe('Place Reducer', () => {
  const getPlaceId = it => it['id'];
  let createPlace;

  beforeEach(() => {
    createPlace = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Place actions ', () => {
    it('should return set the list of known Place', () => {
      const places = [createPlace('PRODUCT-AAA'), createPlace('PRODUCT-zzz')];
      const action = new PlaceLoaded(places);
      const result: PlaceState = placeReducer(initialState, action);
      const selId: string = getPlaceId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = placeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
