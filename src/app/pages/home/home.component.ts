import { Component, OnInit } from '@angular/core';
import { CoreService } from './../../services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cities;

  constructor(public coreService: CoreService) {
  }

  ngOnInit() {
    this.coreService.citiesState.subscribe((value) => {
      this.cities = value;
    });
  }
}
