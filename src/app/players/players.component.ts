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

  ngOnInit() {}

  onClick(player: Player) {
    this.userPlayer = player;
  }
  // getPlayers(): void {
  //   this.playerService
  //     .getPlayers()
  //     .subscribe(players => (this.players = players));
  // }
}
