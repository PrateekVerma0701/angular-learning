import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentInteractionTestComponent } from './component-interaction-test/component-interaction-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
