import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthActionService } from "../services/AuthService/authService";
import { TokenStorageService } from "../services/token/token.service";
import { teamsName } from "../models/externalDataModels/teamNames";
import { ILocalTeamModel } from "../models/localDataModels/localTeam";
import { ILocalLeagueModel } from "../models/localDataModels/localLeague";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  
  constructor(private router: Router, private authActionService: AuthActionService, private tokenService: TokenStorageService ) {}

  // Seasons
  @Input() selectedSeasonId!: number;
  @Input() seasonsList: number[] = [];
  @Output() seasonSelected = new EventEmitter<number>();

  // Leagues
  @Input() selectedLeagueId!: number;
  @Input() leaguesList: teamsName[] = [];
  @Output() leagueSelected = new EventEmitter<number>();

  // localLeagues
  @Input() selectedLocalLeagueId!: number;
  @Input() localLeaguesList: ILocalLeagueModel[] = [];
  @Output() localLeagueSelected = new EventEmitter<number>();

  // National Teams
  @Input() selectedTeamId!: number;
  @Input() nationalTeamList: teamsName[] = [];

  // premier league
  @Input() premierLeagueList: teamsName[] = [];

  // ligue 1
  @Input() ligue1List: teamsName[] = [];

  // Liga
  @Input() laligaList: teamsName[] = [];

  // Serie A
  @Input() seriaAList: teamsName[] = [];

  // Bundesliga
  @Input() bundesligaList: teamsName[] = []; 

  @Output() teamSelected = new EventEmitter<number>();


  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  
  selectedSeason(event: any) {
    const season = event.target.value;
    this.seasonSelected.emit(season); // Émet l'événement avec la saison sélectionnée
  }

  selectedLeague(event: any){
    const league = event.target.value;
    this.leagueSelected.emit(league);
  }

  selectedLocalLeague(event: any){
    const league = event.target.value;
    this.localLeagueSelected.emit(league);
    console.log(league)
  }
  
  selectedTeam(event: any){
    const team = event.target.value;
    this.teamSelected.emit(team);
  }

  logout(){
    const confirmation = confirm('Do you want to log out ?')

    if(confirmation){
      this.tokenService.deleteToken();
      this.router.navigate(['login']);
    }
    this.authActionService.logout();
    
  }
}
