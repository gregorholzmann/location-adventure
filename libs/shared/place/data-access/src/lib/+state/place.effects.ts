import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { SharedPlaceDataAccessService } from '../shared-place-data-access.service';
import { map } from 'rxjs/operators';

import { PlaceState } from './place.reducer';
import {
  LoadPlace,
  PlaceLoaded,
  PlaceLoadError,
  PlaceActionTypes
} from './place.actions';

@Injectable()
export class PlaceEffects {
  @Effect() loadPlace$ = this.dataPersistence.fetch(
    PlaceActionTypes.LoadPlace,
    {
      run: (action: LoadPlace, state: PlaceState) => {
        this.placeDataAccessService
          .getPlace(action.position)
          .pipe(map(s => new PlaceLoaded(s))
        )
      },

      onError: (action: LoadPlace, error) => {
        console.error('Error', error);
        return new PlaceLoadError(error);
      }
    }
  );

  constructor(
    private placeDataAccessService: SharedPlaceDataAccessService,
    private dataPersistence: DataPersistence<PlaceState>
  ) {}
}
