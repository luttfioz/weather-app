import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from './services/observable-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  darkModeActive: boolean;

  constructor(public observableDataService: ObservableDataService) {
  }

  ngOnInit(): void {
    this.observableDataService.darkModeState$.subscribe((value) => {
      this.darkModeActive = value;
    });
  }

  modeToggleSwitch() {
    this.observableDataService.darkModeState$.next(!this.darkModeActive);
  }
}
