import { Injectable } from '@angular/core';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EventBusService {

  private subject = new Subject<any>();

  constructor() { }

  emit(event: EmitEvent) {
    this.subject.next(event);
  }

  on(event: Events, action: any): Subscription {
    return this.subject.pipe(
      filter((e: EmitEvent) => {
        return e.name === event;
      }),
      map((e: EmitEvent) => {
        return e.value;
      })
    ).subscribe(action);
  }
}

export class EmitEvent {
  constructor(public name: Events, public value?: any) { }
}

export enum Events {
  DarkModeSelected
}
