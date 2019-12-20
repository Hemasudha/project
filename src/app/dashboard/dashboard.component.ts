import { PlayerService } from "./../player.service";
import { Player } from "./../player";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }
  getPlayers() {
    this.playerService
      .getPlayers()
      .subscribe(players => (this.players = players.slice(1, 3)));
  }
}
