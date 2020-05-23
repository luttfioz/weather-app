import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './../../services/data.service';
import { CoreService } from './../../services/core.service';

@Component({
  selector: 'app-add-card',
  templateUrl: 'add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit, OnDestroy {
  cities;
  allCities;
  cityIndex;
  city;
  darkMode: boolean;
  sub1: Subscription;

  constructor(public dataService: DataService, public coreService: CoreService) {
  }

  ngOnInit() {
    this.cities = this.dataService.getCities();
    this.dataService.getCitiesAll().subscribe((cities) => {
      this.allCities = cities;
      this.suffleCities();
    });
    this.sub1 = this.coreService.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  addCity() {
    this.dataService.add({ id: this.cityIndex, name: this.city.capital });
    this.suffleCities();
  }

  suffleCities() {
    this.cityIndex = Math.floor(Math.random() * (this.allCities.length + 1));
    this.city = this.allCities[this.cityIndex - 1];
  }
}
