import { PlayerService } from "./../player.service";
import { PLAYERS } from "../play-data";
import { Player } from "../player";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.css"]
})
export class PlayersComponent implements OnInit {
  players = PLAYERS;

  userPlayer: Player;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService
      .getPlayers()
      .subscribe(players => (this.players = players));
  }
  add(name: string): void {
    name = name.trim();

    this.playerService.addName({ name } as Player).subscribe(player => {
      this.players.push(player);
    });
  }
  delete(player): void {
    this.players = this.players.filter(h => h !== player);
    this.playerService.deleteName(player).subscribe();
  }
}
