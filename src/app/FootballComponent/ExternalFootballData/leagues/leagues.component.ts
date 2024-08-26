import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { teamsName } from 'src/app/models/externalDataModels/teamNames'; 
import { leaguesNameService } from 'src/app/services/ApiService/leaguesName.service';
import { LeagueService } from 'src/app/services/footballData/ExternalData/leaguesApi.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent {
  sideNavStatus: boolean = false;
  gridReadyParams!: GridReadyEvent;


  constructor(private LeagueService: LeagueService, private http :HttpClient, private router: Router, private leagueNameService: leaguesNameService){}

  rowData: any[] = [];

  columnDefs: ColDef[] = [
    { headerName: 'Logo', field: 'logo', cellRenderer: this.imageRenderer},
    { headerName: 'Nom', field: 'name' },
    { headerName: 'Date de création', field: 'founded' },
    { headerName: "Nom d'avenue", field: 'venue_name' },
    { headerName: 'Capacité', field: 'venue_capacity' },
  ];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  }

 
 leagueList: teamsName[] = []
 selectedLeague!: number;


  ngOnInit(){
    this.leagueList = this.leagueNameService.getLeagues();
    this.selectedLeague = this.leagueList[0].id
    this.getTeams(this.selectedLeague);
  }

  onLeagueSelected(league: number) {
    this.getTeams(league);
  }
  

  getTeams(league: number){
    this.LeagueService.GetLeaguesFromApi(league).subscribe(data=>{
      this.rowData = data;
    })
  }

  imageRenderer(params: ICellRendererParams) {
    return '<img src="' + params.value + '" style="width:38px">';
  }


  passGridReadyParams(params: GridReadyEvent) {
    this.gridReadyParams = params;
  }
}
