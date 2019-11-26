import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StructuralDirectiveNgIfTestComponent } from './structural-directive-ng-if-test/structural-directive-ng-if-test.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectiveNgIfTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
