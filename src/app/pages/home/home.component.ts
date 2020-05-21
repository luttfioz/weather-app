import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cities;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.cities = this.dataService.getCities();
  }
}
