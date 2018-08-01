import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AdminModule } from './admin/admin.module';
import { NavModule } from './nav/nav.module';

import { BaseComponent } from './base/base.component';

import { routes } from './app.routes';


@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    AdminModule,
    NavModule
  ],
  providers: [
    
  ],
  bootstrap: [
    BaseComponent
  ]
})
export class AppModule { }
