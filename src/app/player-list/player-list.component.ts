import { Component, OnInit, Input } from "@angular/core";
import { Player } from "../player";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.css"]
})
export class PlayerListComponent implements OnInit {
  @Input() player: Player;
  constructor() {}

  ngOnInit() {}
  addButton() {}
}
