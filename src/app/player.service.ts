import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { PLAYERS } from "./play-data";
import { Player } from "./player";

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  //apiurl = "api/PLAYERS";

  constructor() {}

  getPlayers(): Observable<Player[]> {
    return of(PLAYERS);
  }
}
