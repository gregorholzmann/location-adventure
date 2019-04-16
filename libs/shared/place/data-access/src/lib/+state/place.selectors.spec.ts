import { Entity, PlaceState } from './place.reducer';
import { placeQuery } from './place.selectors';

describe('Place Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPlaceId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createPlace = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      place: {
        list: [
          createPlace('PRODUCT-AAA'),
          createPlace('PRODUCT-BBB'),
          createPlace('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Place Selectors', () => {
    it('getAllPlace() should return the list of Place', () => {
      const results = placeQuery.getAllPlace(storeState);
      const selId = getPlaceId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedPlace() should return the selected Entity', () => {
      const result = placeQuery.getSelectedPlace(storeState);
      const selId = getPlaceId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = placeQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = placeQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
