import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './FootballComponent/ExternalFootballData/countries/countries.component'; 
import { PlayersComponent } from './FootballComponent/ExternalFootballData/players/players.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/guards.component'; 
import { ConfirmedSignUpComponent } from './confirmed-sign-up/confirmed-sign-up.component';
import { HistoryTeamMembersComponent } from './FootballComponent/ExternalFootballData/history-team-members/history-team-members.component'; 
import { AddPlayerComponent } from './FootballComponent/localFootballdata/add-player/add-player.component'; 
import { LeaguesComponent } from './FootballComponent/ExternalFootballData/leagues/leagues.component'; 
import { AddTeamComponent } from './FootballComponent/localFootballdata/add-team/add-team.component';
import { AddLeaguesComponent } from './FootballComponent/localFootballdata/add-leagues/add-leagues.component';
import { LocalPlayersComponent } from './FootballComponent/localFootballdata/local-players/local-players.component';
import { LocalTeamsComponent } from './FootballComponent/localFootballdata/local-teams/local-teams.component';
import { LocalLeaguesComponent } from './FootballComponent/localFootballdata/local-leagues/local-leagues.component';

 const routes: Routes = [

  // Authentification page
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'registerConfirmation', component: ConfirmedSignUpComponent },

  // Local data
  { path: 'players', component: LocalPlayersComponent, canActivate: [AuthGuard] },
  { path: 'teams', component: LocalTeamsComponent, canActivate: [AuthGuard] },
  { path: 'leagues', component: LocalLeaguesComponent, canActivate: [AuthGuard] },

  { path: 'AddPlayer', component: AddPlayerComponent, canActivate: [AuthGuard] },
  { path: 'AddTeam', component: AddTeamComponent, canActivate: [AuthGuard] },
  { path: 'AddLeague', component: AddLeaguesComponent, canActivate: [AuthGuard] },

  // External data
  { path: 'history of teams', component: HistoryTeamMembersComponent, canActivate: [AuthGuard] },
  { path: 'get players', component: PlayersComponent, canActivate: [AuthGuard] },
  { path: 'get leagues', component: LeaguesComponent, canActivate: [AuthGuard] },
  { path: 'get nations', component: CountriesComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
