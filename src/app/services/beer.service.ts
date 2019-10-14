import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IBeer } from "../interfaces/ibeer";

@Injectable({
  providedIn: "root"
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IBeer[]> {
    return this.http.get<IBeer[]>("https://api.punkapi.com/v2/beers");
  }
}
