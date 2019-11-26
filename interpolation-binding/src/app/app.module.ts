import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolationTestComponent } from './interpolation-test/interpolation-test.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
