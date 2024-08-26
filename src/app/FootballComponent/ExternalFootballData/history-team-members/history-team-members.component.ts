import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Coachs } from 'src/app/models/externalDataModels/player';
import { teamsName } from 'src/app/models/externalDataModels/teamNames';
import { HistoryTeamMembersService } from 'src/app/services/footballData/ExternalData/historyTeamMembersApi.service';
import { teamNamesService } from 'src/app/services/ApiService/teamsName.service'; 

@Component({
  selector: 'app-history-team-members',
  templateUrl: './history-team-members.component.html',
  styleUrls: ['./history-team-members.component.scss']
})
export class HistoryTeamMembersComponent implements OnInit {

  sideNavStatus: boolean = false;
  constructor(private http: HttpClient, private router: Router, private historyTeamMembers: HistoryTeamMembersService, private teamNamesService: teamNamesService){}

  seasons: number[] = Array.from({length: 2022 - 2009 + 1}, (_, index) => index + 2009);
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

  selectedTeamId!: number;
  selectedSeason!: number;
  gridReadyParams!: GridReadyEvent;

  rowData: any[] = [];
  
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'combinedName' },
    { headerName: 'Number', field: 'number' },
  ];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  }

  ngOnInit() {
    this.selectedSeason = this.seasons[1];
    this.selectedTeamId
    this.nationalTeamList = this.teamNamesService.getNationalCountries();
    this.premierLeagueList = this.teamNamesService.getPremierLeague();
    this.laligaList = this.teamNamesService.getLiga();
    this.ligue1List = this.teamNamesService.getLigue1();
    this.seriaAList = this.teamNamesService.getSerieA();

    this.selectedTeamId = this.nationalTeamList[1].id;

    this.getPlayers(this.selectedSeason, this.selectedTeamId);
  }

  onSeasonSelected(season: number) {
    this.selectedSeason = season
    this.selectedTeamId
    this.getPlayers(this.selectedSeason, this.selectedTeamId)
  }

  onTeamSelected(league: number) {
    this.selectedSeason
    this.selectedTeamId = league;
    this.getPlayers(this.selectedSeason, this.selectedTeamId)
  }

  getPlayers(season: number, league: number) {
      this.historyTeamMembers.GetHistoryTeamMembersFromApi(season, league).subscribe(data => {
        const coachs: Coachs[] = data.coachs;

        this.rowData = data.players;
        this.rowData.push(...coachs);

        this.rowData.forEach(row => {
          if (row.name == undefined) {
            row.combinedName = `${row.player}`;
          } else {
            if(row.players == undefined){
              row.combinedName = `${row.name}`
            }
          }

        });
    
      });
    
  }


  passGridReadyParams(params: GridReadyEvent) {
    this.gridReadyParams = params;
  }
}
