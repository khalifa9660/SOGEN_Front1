import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './foot-view/countries/countries.component'; 
import { PlayersComponent } from './foot-view/players/players.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/guards.component'; 
import { ConfirmedSignUpComponent } from './confirmed-sign-up/confirmed-sign-up.component';
import { HistoryTeamMembersComponent } from './foot-view/history-team-members/history-team-members.component'; 
import { DreamTeamComponent } from './foot-view/dream-team/dream-team.component'; 
import { AddPlayerComponent } from './foot-view/add-player/add-player.component'; 
import { LeaguesComponent } from './foot-view/leagues/leagues.component'; 

 const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'registerConfirmation', component: ConfirmedSignUpComponent },
  { path: 'history of teams', component: HistoryTeamMembersComponent, canActivate: [AuthGuard] },
  { path: 'players', component: PlayersComponent, canActivate: [AuthGuard] },
  { path: 'leagues', component: LeaguesComponent, canActivate: [AuthGuard] },
  { path: 'countries', component: CountriesComponent, canActivate: [AuthGuard] },
  { path: 'dream team', component: DreamTeamComponent, canActivate: [AuthGuard] },
  { path: 'AddPlayer', component: AddPlayerComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
