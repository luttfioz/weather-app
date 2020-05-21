import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-card',
  templateUrl: 'add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {
  cities;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.cities = this.dataService.getCities();
  }

  addCity() {
    this.dataService.add({ id: 3, name: 'Istanbul' });
  }
}
