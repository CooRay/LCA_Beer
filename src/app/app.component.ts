import { Component, OnInit } from "@angular/core";
import { BeerService } from "../app/services/beer.service";
import { IBeer } from "./interfaces/ibeer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private BeerService: BeerService) {}
  beers: IBeer[];
  displayedColumns: string[] = ["name", "tagline", "first_brewed"];

  ngOnInit() {
    this.BeerService.getAll().subscribe(
      data =>
        (this.beers = data.sort((a, b) =>
          a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        ))
    );
  }
}
