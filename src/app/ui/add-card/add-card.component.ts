import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-card',
  templateUrl: 'add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {
  cities;
  allCities;
  cityIndex;
  city;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.cities = this.dataService.getCities();
    this.dataService.getCitiesAll().subscribe((cities) => {
      this.allCities = cities;
      this.suffleCities();
    });
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
