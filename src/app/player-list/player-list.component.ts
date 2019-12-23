import { PlayerService } from "./../player.service";
import { Component, OnInit, Input } from "@angular/core";
import { Player } from "../player";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { InMemoryDataService } from "../in-memory-data.service";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.css"]
})
export class PlayerListComponent implements OnInit {
  @Input() player: Player;
  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getName();
  }

  getName() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.playerService.getName(id).subscribe(player => (this.player = player));
  }
  goBack() {
    this.location.back();
  }
  save() {
    this.playerService.updateHero(this.player).subscribe(() => this.goBack());
  }
}
