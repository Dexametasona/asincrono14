import { CompAsinc14Module } from './comp-asinc14/comp-asinc14.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompAsinc14Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
