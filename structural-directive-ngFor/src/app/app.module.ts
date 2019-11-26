import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StructuralDirectiveNgForTestComponent } from './structural-directive-ng-for-test/structural-directive-ng-for-test.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectiveNgForTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
