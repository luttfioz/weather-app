import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './../../services/data.service';
import { CoreService } from './../../services/core.service';

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

  constructor(public dataService: DataService, public coreService: CoreService) {
  }

  ngOnInit() {
    this.sub1 = this.coreService.darkModeState.subscribe((isDark) => {
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
