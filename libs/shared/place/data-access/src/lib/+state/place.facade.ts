import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as PlaceActions from './place.actions';
@Injectable({
  providedIn: 'root',
})
export class PlaceFacade {

  constructor(private store: Store<any>) {}

  loadPlace(position: Position) {
    this.store.dispatch(
      new PlaceActions.LoadPlace(position),
    );
  }
}
