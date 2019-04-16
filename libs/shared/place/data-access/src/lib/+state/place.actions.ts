import { Action } from '@ngrx/store';

export enum PlaceActionTypes {
  LoadPlace = '[Place] Load Place',
  PlaceLoaded = '[Place] Place Loaded',
  PlaceLoadError = '[Place] Place Load Error'
}

export class LoadPlace implements Action {
  readonly type = PlaceActionTypes.LoadPlace;
  constructor(public position: Position) {}
}

export class PlaceLoadError implements Action {
  readonly type = PlaceActionTypes.PlaceLoadError;
  constructor(public payload: any) {}
}

export class PlaceLoaded implements Action {
  readonly type = PlaceActionTypes.PlaceLoaded;
  constructor(public place: any) {}
}

export type PlaceAction = LoadPlace | PlaceLoaded | PlaceLoadError;

export const fromPlaceActions = {
  LoadPlace,
  PlaceLoaded,
  PlaceLoadError
};
