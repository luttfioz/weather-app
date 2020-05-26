import { Component, OnInit } from '@angular/core';
import { CoreService } from './services/core.service';
import { EventBusService, EmitEvent, Events } from './services/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  darkModeActive: boolean;

  constructor(public coreService: CoreService, private eventBusService: EventBusService) {
  }

  ngOnInit(): void {
    // this.coreService.darkModeState.subscribe((value) => {
    //   this.darkModeActive = value;
    // });
    this.eventBusService.on(Events.DarkModeSelected, (value) => {
      this.darkModeActive = value;
    });
  }

  modeToggleSwitch() {
    // this.coreService.darkModeState.next(!this.darkModeActive);
    this.eventBusService.emit(new EmitEvent(Events.DarkModeSelected, !this.darkModeActive));
  }
}
