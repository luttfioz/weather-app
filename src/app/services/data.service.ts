import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  cities: any[];

  constructor() {
    // 671ac7a5d543c9935d09d1a2e6ebfb5b
    this._commit([{ id: 1, name: 'Berlin' }, { id: 2, name: 'London' }]);
    const cities: any[] = JSON.parse(localStorage.getItem('cities')) || [];
    this.cities = cities.filter(city => city !== null).map(city => new Object(city));
  }

  getCities() {
    return this.cities;
  }


  _commit(cities: any[]) {
    localStorage.setItem('cities', JSON.stringify(cities));
  }

}
