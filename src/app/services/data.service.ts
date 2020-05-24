import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreService } from './core.service';

@Injectable({ providedIn: 'root' })
export class DataService {
  cities: any[];
  private readonly baseURL = 'https://restcountries.eu/rest/v2/all';

  constructor(public http: HttpClient, public coreService: CoreService) {
    // 671ac7a5d543c9935d09d1a2e6ebfb5b
    // this._commit([{ id: 1, name: 'Berlin' }, { id: 2, name: 'London' }]);
    const cities: any[] = JSON.parse(localStorage.getItem('cities')) || [];
    this.cities = cities.filter(city => city !== null).map(city => new Object(city));
  }

  getCities() {
    return this.cities;
  }

  getCitiesAll(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  add(city: any) {
    this.cities.push(new Object(city));
    this._commit(this.cities);
    this.coreService.citiesState.next(this.cities);
  }

  remove(city: any) {
    this.cities = this.cities.filter(_city => _city.id !== city.id);
    this._commit(this.cities);
    this.coreService.citiesState.next(this.cities);
  }

  _commit(cities: any[]) {
    localStorage.setItem('cities', JSON.stringify(cities));
  }

}
