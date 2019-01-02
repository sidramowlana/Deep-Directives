import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { basicHighLightDirectives } from './basic-highlights/basic-highlights.directives';

@NgModule({
  declarations: [
    AppComponent,
    basicHighLightDirectives
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
