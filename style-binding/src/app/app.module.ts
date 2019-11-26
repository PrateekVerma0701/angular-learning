import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleBindingTestComponent } from './style-binding-test/style-binding-test.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleBindingTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
