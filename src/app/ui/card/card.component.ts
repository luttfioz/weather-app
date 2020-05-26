import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './../../services/data.service';
import { ObservableDataService } from '../../services/observable-data.service';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit, OnDestroy {
  darkMode: boolean;
  sub1: Subscription;
  cityImg;

  @Input() city;

  constructor(public dataService: DataService, public observableDataService: ObservableDataService) {
  }

  ngOnInit() {
    this.sub1 = this.observableDataService.darkModeState$.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.cityImg = this.dataService.getCityImage(this.city.name.toLowerCase());
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  removeCity() {
    this.dataService.remove(this.city);
  }

}
