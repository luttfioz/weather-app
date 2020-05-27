import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, filter, take, tap, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OldEventBusService {
  private _store: Map<string, EventBusAction> = new Map();
  private store$: BehaviorSubject<Map<string, EventBusAction>> = new BehaviorSubject(this._store);

  constructor() { }

  // emit
  dispatch(action: EventBusAction) {
    this._store.set(action.type, action);
    this.updateStore();
  }

  // on
  selectPayload(eventType: string) {
    return this.select(eventType).pipe(
      map(action => action.payload)
    );
  }

  selectPayloadAndDelete(eventType: string) {
    return this.selectPayload(eventType).pipe(
      tap(_ => this.removeAction(eventType)),
      take(1)
    );
  }

  select(eventType: string) {
    return this.store$.asObservable().pipe(
      map(localStore => localStore.get(eventType)),
      filter(action => this.shouldEmit(action)),
      distinctUntilChanged()
    );
  }

  // helpers
  updateStore(updatedStore = this._store) {
    this.store$.next(updatedStore);
  }

  shouldEmit(action: any) {
    return action;
  }

  removeAction(eventType: string) {
    const retVal = this._store.get(eventType);
    this._store.delete(eventType);
    this.updateStore();
    return retVal;
  }

}


export interface EventBusAction {
  type: string;
  payload?: any;
}

export const DARK_MODE = 'DARK_MODE';

export class DarkModeAction implements EventBusAction {
  readonly type = DARK_MODE;
  constructor(public payload: any) { }
}


// Usage
/*******************************
  Set:
  this.eventBusService.dispatch(new DarkModeAction(!this.darkModeActive));

  Get:
  this.eventBusSubscription = this.eventBusService.selectPayload(DARK_MODE).subscribe((value) => {
    this.darkModeActive = value;
  });
 *
 */
