import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { teamsName } from 'src/app/models/teamNames';
import { teamNamesService } from 'src/app/services/ApiService/teamsName.service';
import { PlayersService } from 'src/app/services/footballData/playersApi.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{
  sideNavStatus: boolean = false;
  constructor(private http: HttpClient, private router: Router, private playerService: PlayersService, private teamNamesService: teamNamesService){}
  
  // National Teams
  nationalTeamList: teamsName[] = [];

  //premier League
  premierLeagueList: teamsName[] = [];

  // Liga
  laligaList: teamsName[] = [];

  // Serie A
  seriaAList: teamsName[] = [];

  // Ligue 1
  ligue1List: teamsName[] = [];
  
  // Bundesliga
  bundesligaList: teamsName[] = [];


  selectedteamId!: number;

  gridReadyParams!: GridReadyEvent;


  rowData: any[] = [];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  }
  
  columnDefs: ColDef[] = [
    { headerName: 'Photo', field: 'combinedImage', cellRenderer: this.imageRenderer },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Position', field: 'position' },
  ];

  ngOnInit() {
    this.nationalTeamList = this.teamNamesService.getNationalCountries();
    this.premierLeagueList = this.teamNamesService.getPremierLeague();
    this.laligaList = this.teamNamesService.getLiga();
    this.ligue1List = this.teamNamesService.getLigue1();
    this.seriaAList = this.teamNamesService.getSerieA();
    this.bundesligaList = this.teamNamesService.getBundesliga();

    this.selectedteamId = this.nationalTeamList[1].id;
    this.getPlayers(this.selectedteamId);
  }

  onTeamSelected(team: number) {
    this.selectedteamId = team
    this.getPlayers(this.selectedteamId)
  }

  getPlayers(teamId: number) {
      this.playerService.GetPlayersFromApi(teamId).subscribe(data => {
        this.rowData = data.players;
        this.rowData.push(data.team);
        const lastItem = this.rowData.pop();
      this.rowData.unshift(lastItem);
        this.rowData = data.players.map(player => ({
          ...player,
          combinedImage: player.photo ? `<img src="${player.photo}" width="40" >` : `<img src="${data.team.logo}" width="40" >`
        }));
      });
  }

  imageRenderer(params: ICellRendererParams) {
    return params.value;
  }


  passGridReadyParams(params: GridReadyEvent) {
    this.gridReadyParams = params;
  }

}