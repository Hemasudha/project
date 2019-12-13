import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PlayersComponent } from "./players/players.component";
import { PlayerListComponent } from "./player-list/player-list.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AppRoutingModule } from ".//app-routing.module";
import { CoursesModule } from "./courses/courses.module";

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerListComponent,
    RegistrationComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, CoursesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
