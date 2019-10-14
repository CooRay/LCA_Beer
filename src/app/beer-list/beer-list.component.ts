import { Component, OnInit } from "@angular/core";
import { IBeer } from "../interfaces/ibeer";
import { BeerService } from "../services/beer.service";

@Component({
  selector: "app-beer-list",
  templateUrl: "./beer-list.component.html",
  styleUrls: ["./beer-list.component.scss"]
})
export class BeerListComponent implements OnInit {
  beers: IBeer[];
  constructor(private beerService: BeerService) {}

  ngOnInit() {
    this.beerService.getAll().subscribe(data => (this.beers = data));
  }
}
