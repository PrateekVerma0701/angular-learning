import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateReferenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
