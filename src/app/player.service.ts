import { InMemoryDataService } from "./in-memory-data.service";
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
  apiurl = "api/PLAYERS";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiurl);
  }
  getName(id: number): Observable<Player> {
    return of(PLAYERS.find(player => player.id === id));
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
  addName(player: Player): Observable<Player> {
    return this.http
      .post<Player>(this.apiurl, player, this.httpOptions)
      .pipe(catchError(this.handleError<Player>("addPlayer")));
  }
  updateHero(player: Player): Observable<Player> {
    return this.http
      .put(this.apiurl, player, this.httpOptions)
      .pipe(catchError(this.handleError<any>("update")));
  }
  deleteName(player: Player | number): Observable<Player> {
    const id = typeof player === "number" ? player : player.id;
    const url = `${this.apiurl}/${id}`;

    return this.http
      .delete<Player>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Player>("delete")));
  }
}
