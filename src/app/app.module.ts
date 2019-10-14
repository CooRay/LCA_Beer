import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BeerService } from "./services/beer.service";
import { BeerListComponent } from "./beer-list/beer-list.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BeerComponent } from "./beer/beer.component";

@NgModule({
  declarations: [AppComponent, BeerListComponent, BeerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatCardModule,
    NgbModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
