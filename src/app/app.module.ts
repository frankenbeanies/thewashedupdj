import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavModule } from './nav/nav.module';

import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    BrowserModule,

    NavModule
  ],
  providers: [],
  bootstrap: [
    BaseComponent
  ]
})
export class AppModule { }
