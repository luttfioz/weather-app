import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoreService } from './services/core.service';
import { EventBusService, EmitEvent, Events } from './services/event-bus.service';
import { OldEventBusService, DarkModeAction, DARK_MODE } from './services/old-event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  darkModeActive: boolean;
  eventBusSubscription: Subscription;

  constructor(public coreService: CoreService, private eventBusService: OldEventBusService) {
  }

  ngOnInit(): void {
    // this.coreService.darkModeState.subscribe((value) => {
    //   this.darkModeActive = value;
    // });
    // this.eventBusSubscription = this.eventBusService.on(Events.DarkModeSelected, (value) => {
    //   this.darkModeActive = value;
    // });
    this.eventBusSubscription = this.eventBusService.selectPayload(DARK_MODE).subscribe((value) => {
      this.darkModeActive = value;
    });
  }

  ngOnDestroy() {
    if (this.eventBusSubscription) {
      this.eventBusSubscription.unsubscribe();
    }
  }

  modeToggleSwitch() {
    // this.coreService.darkModeState.next(!this.darkModeActive);
    // this.eventBusService.emit(new EmitEvent(Events.DarkModeSelected, !this.darkModeActive));
    this.eventBusService.dispatch(new DarkModeAction(!this.darkModeActive));
  }
}
