import { Component, OnInit } from '@angular/core';
import { CoreService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  darkModeActive: boolean;

  constructor(public coreService: CoreService) {
  }

  ngOnInit(): void {
    this.coreService.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
  }

  modeToggleSwitch() {
    this.coreService.darkModeState.next(!this.darkModeActive);
  }
}
