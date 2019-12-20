import { Player } from "./player";
import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const PLAYERS = [
      { id: 1, name: "WG Grace", runs: "2739" },
      { id: 2, name: "Donald Bradman", runs: "2839" },
      { id: 3, name: "Gary Sobers", runs: "2939" },
      { id: 4, name: "Sachin Tendulkar", runs: "3039" },
      { id: 5, name: "Shane Warne", runs: "2739" },
      { id: 6, name: "Jaques Kallis", runs: "1739" },
      { id: 7, name: "Jack Hobbs", runs: "2799" },
      { id: 8, name: "Sydney Barnes", runs: "2539" },
      { id: 9, name: "VV Richards", runs: "2749" }
    ];
    return { PLAYERS };
  }
  generateId(players: Player[]): number {
    return players.length > 0
      ? Math.max(...players.map(player => player.id)) + 1
      : 10;
  }
}
