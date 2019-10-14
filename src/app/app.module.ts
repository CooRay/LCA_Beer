import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClient } from "selenium-webdriver/http";
import { BeerComponent } from './beer/beer.component';

@NgModule({
  declarations: [AppComponent, BeerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClient],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
