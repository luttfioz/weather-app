import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { CardComponent } from './ui/card/card.component';

export function createWindowObj() {
  return window;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [{
        provide: 'Window', useFactory: createWindowObj
      }]
    };
  }
}
