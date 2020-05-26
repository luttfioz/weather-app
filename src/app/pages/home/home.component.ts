import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from '../../services/observable-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cities;

  constructor(public observableDataService: ObservableDataService) {
  }

  ngOnInit() {
    this.observableDataService.citiesState$.subscribe((value) => {
      this.cities = value;
    });
  }
}
