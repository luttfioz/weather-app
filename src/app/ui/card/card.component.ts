import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() city;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

  removeCity() {
    this.dataService.remove(this.city);
  }

}
