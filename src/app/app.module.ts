import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    BaseComponent
  ]
})
export class AppModule { }
