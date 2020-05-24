import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  cities: any[];

  constructor() {
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
