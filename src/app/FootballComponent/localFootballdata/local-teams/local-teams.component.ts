import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridApi, ValueGetterParams, ValueSetterParams } from 'ag-grid-community';
import { LocalTeamService } from 'src/app/services/footballData/LocalData/localTeam.service';
import { LocalTeamModel } from 'src/app/models/localDataModels/localTeam';
import { LocalLeagueService } from 'src/app/services/footballData/LocalData/localLeague.service';

@Component({
  selector: 'app-local-team',
  templateUrl: './local-teams.component.html',
  styleUrls: ['./local-teams.component.scss']
})
export class LocalTeamsComponent implements OnInit {
  sideNavStatus: boolean = false;
  isDataChanged: boolean = false;
  gridApi!: GridApi;
  errorMessage!: string;
  isCellValueChanged: boolean = false;
  rowToDelete!: any[];

  constructor(private http: HttpClient, private router: Router, private TeamService: LocalTeamService, private LeagueService: LocalLeagueService){}

  rowData: any[] = [];
  team = new LocalTeamModel();
  @Input() data: any;
  @Output() selectionChanged = new EventEmitter<any[]>();

  public rowSelection: 'single' | 'multiple' = 'multiple';


  columnDefs: ColDef[] = [
    { headerName: 'Checkbox Cell', field: 'boolean', headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true,},
    { headerName: 'Photo', field: 'photo', cellRenderer: this.imageRenderer, 
    valueGetter: (params: ValueGetterParams) => { this.team.photo = params.data.photo;
    return params.data.photo},
    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.Photo !== newVal;
      if (valueChanged) {
        params.data.photo = newVal;
      } else {
        this.team.photo = params.data.Photo;
      }
      return valueChanged;
    },
    cellDataType: 'string',
  }, 

    { headerName: 'Name', field: 'name', 
    valueGetter: (params: ValueGetterParams) => { this.team.name = params.data.name;
      return params.data.name},    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.Name !== newVal;
      if (valueChanged) {
        params.data.name = newVal;
        this.team.name = newVal;
      } else{
        this.team.name = params.data.navigateame;
      }
      return valueChanged;
    },
    cellDataType: 'string',
  },

  {
    headerName: 'League',
    field: 'championship',
      cellRenderer: (params: any) => {
        const element = document.createElement('span');
        if (params.data.championshipId != null) {
          this.LeagueService.GetLeagueById(params.data.championshipId).subscribe(league => {
            element.innerText = league.name || '';
          });
        }
        return element;
      },
    },
  ];

  defaultColDef: ColDef = {
      filter: true,
      floatingFilter: true,
      editable: true,
      flex: 1,
    }

  ngOnInit(): void {
    this.TeamService.GetAllTeamsWithoutUserId().subscribe(data =>{
      this.rowData = data
    })
  }

  addTeam() {
    this.router.navigate(['/AddTeam'])
  }

  updateTeam(event: LocalTeamModel) {
    debugger
    this.OnDataChanged(event);  
    const teamToUpdate = this.rowData.find(data => data.id === event.id);
  
    if (teamToUpdate) {
      teamToUpdate.id = event.id;
      teamToUpdate.name = event.name
      teamToUpdate.photo = event.photo
  
      this.TeamService.EditTeam(teamToUpdate).subscribe({
        next: (response) => {
          if (response) {
            console.log("Success Saved !", response);
            this.errorMessage = "Save success !";
          }
        },
        error: (error) => {
          if (error) {
            console.log("Invalid Saved !" + error);
            this.errorMessage = "Failed to save !";
          }
        }
      });
    } else {
      console.log("Team not found !");
    }
  }

  OnDataChanged( data: any) {
    this.team.id = data.id
    }

    deleteSelectedRow(selectedRow: any) {
      const id = selectedRow.filter((row: { id: any; }) => row.id === selectedRow.id )
    
      if (id != null) {
        this.TeamService.DeleteTeam(id).subscribe({
          next: (response) => {
            console.log("Success Delete", response );
            this.errorMessage = "Success delete";
            // Rafraîchir la grille après la suppression des lignes
            window.location.reload();
          },
          error: (error) => {
            console.log("Failed to delete!" + error);
            this.errorMessage = "Failed to delete!";
          }
        });
      }
    }

  receiveSelectedRow(selectedRow: any) {
    this.rowToDelete = selectedRow
  }

  imageRenderer(params: any) {
    const imageElement = document.createElement('img');
    imageElement.src = params.value; // Utilise la valeur du champ comme source de l'image
    imageElement.width = 50; // Optionnel: définir la largeur de l'image
    imageElement.height = 50; // Optionnel: définir la hauteur de l'image
    return imageElement;
  }
}
