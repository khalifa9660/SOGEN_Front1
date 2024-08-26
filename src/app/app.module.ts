import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutModule } from "@angular/cdk/layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { PlayersComponent } from "./FootballComponent/ExternalFootballData/players/players.component"; 
import { CountriesComponent } from "./FootballComponent/ExternalFootballData/countries/countries.component";
import { RegisterComponent } from "./register/register.component";
import { ConfirmedSignUpComponent } from "./confirmed-sign-up/confirmed-sign-up.component";
import { HistoryTeamMembersComponent } from "./FootballComponent/ExternalFootballData/history-team-members/history-team-members.component";
import { AddPlayerComponent } from "./FootballComponent/localFootballdata/add-player/add-player.component";
import { LeaguesComponent } from "./FootballComponent/ExternalFootballData/leagues/leagues.component";
import { DataGridModule } from "./data-grid/data-grid.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationInterceptor } from "./services/interceptor";
import { LocalTeamsComponent } from "./FootballComponent/localFootballdata/local-teams/local-teams.component"; 
import { LocalLeaguesComponent } from './FootballComponent/localFootballdata/local-leagues/local-leagues.component';
import { AddTeamComponent } from './FootballComponent/localFootballdata/add-team/add-team.component';
import { AddLeaguesComponent } from './FootballComponent/localFootballdata/add-leagues/add-leagues.component';
import { LocalPlayersComponent } from "./FootballComponent/localFootballdata/local-players/local-players.component";


@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent, SidenavComponent, PlayersComponent, CountriesComponent, RegisterComponent, ConfirmedSignUpComponent, HistoryTeamMembersComponent, AddPlayerComponent, LeaguesComponent, LocalTeamsComponent, LocalLeaguesComponent, AddTeamComponent, AddLeaguesComponent, LocalPlayersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    DataGridModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true //Able to have many request
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
