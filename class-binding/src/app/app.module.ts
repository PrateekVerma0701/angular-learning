import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassBindingTestComponent } from './class-binding-test/class-binding-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
