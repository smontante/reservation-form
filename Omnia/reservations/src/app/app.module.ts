import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottleServiceFormComponent } from './bottle-service-form/bottle-service-form.component';

import { HttpClientModule } from  '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BottleServiceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
