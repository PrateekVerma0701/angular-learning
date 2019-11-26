import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventBindingTestComponent } from './event-binding-test/event-binding-test.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
