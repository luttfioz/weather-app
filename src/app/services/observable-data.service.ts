import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class ObservableDataService {
  darkModeState$: BehaviorSubject<boolean>;
  citiesState$: BehaviorSubject<any[]>;

  constructor(public storageService: StorageService) {
    this.darkModeState$ = new BehaviorSubject<boolean>(false);
    this.citiesState$ = new BehaviorSubject<any[]>(storageService.getCities());
  }

}
