import { Component, OnInit, Input } from "@angular/core";
import { IBeer } from "../interfaces/ibeer";

@Component({
  selector: "app-beer",
  templateUrl: "./beer.component.html",
  styleUrls: ["./beer.component.scss"]
})
export class BeerComponent implements OnInit {
  @Input() beer: IBeer;
  constructor() {}

  ngOnInit() {}
}
