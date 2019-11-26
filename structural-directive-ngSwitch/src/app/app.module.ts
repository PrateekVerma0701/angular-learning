import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StructuralDirectiveNgSwitchTestComponent } from './structural-directive-ng-switch-test/structural-directive-ng-switch-test.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectiveNgSwitchTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
