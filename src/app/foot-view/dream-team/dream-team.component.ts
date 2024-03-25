import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent, ICellRendererParams, ValueGetterParams, ValueSetterParams, IRowNode, GridApi } from 'ag-grid-community';
import { CreatePlayerClass } from 'src/app/models/createPlayer'; 
import { CreatePlayerService } from 'src/app/services/footballData/createPlayer.service';

@Component({
  selector: 'app-dreamTeam',
  templateUrl: './dream-team.component.html',
  styleUrls: ['./dream-team.component.scss']
})
export class DreamTeamComponent {

  sideNavStatus: boolean = false;
  isDataChanged: boolean =false
  gridApi!: GridApi;
  errorMessage!: string;
  isCellValueChanged: boolean = false;
  rowToDelete!: any[];
  
  constructor(private http: HttpClient, private router: Router, private createPlayerService: CreatePlayerService ){
  }

  rowData: any[] = [];
  player = new CreatePlayerClass();
  @Input() data: any;
  @Output() selectionChanged = new EventEmitter<any[]>();
  
  public rowSelection: 'single' | 'multiple' = 'multiple';

  
  columnDefs: ColDef[] = [
    { headerName: 'Checkbox Cell', field: 'boolean', headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true,},
    { headerName: 'Photo', field: 'photo', cellRenderer: this.imageRenderer, 
    valueGetter: (params: ValueGetterParams) => { this.player.photo = params.data.photo;
    return params.data.photo},
    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.photo !== newVal;
      if (valueChanged) {
        params.data.photo = newVal;
      } else {
        this.player.photo = params.data.photo;
      }
      return valueChanged;
    },
    cellDataType: 'string',
  }, 

    { headerName: 'Name', field: 'name', 
    valueGetter: (params: ValueGetterParams) => { this.player.name = params.data.name;
      return params.data.name},    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.name !== newVal;
      if (valueChanged) {
        params.data.name = newVal;
        this.player.name = newVal;
      } else{
        this.player.name = params.data.name;
      }
      return valueChanged;
    },
    cellDataType: 'string',
  },

    { headerName: 'Age', field: 'age', 
    valueGetter: (params: ValueGetterParams) => { this.player.age = params.data.age;
      return params.data.age},    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.age !== newVal;
      if (valueChanged) {
        params.data.age = newVal;
        this.player.age = newVal;
      } else {
        this.player.age = params.data.age
      }
      return valueChanged;
    },
    cellDataType: 'number',
  },

    { headerName: 'Position', field: 'position', 
    valueGetter: (params: ValueGetterParams) => { this.player.position = params.data.position;
      return params.data.position},
    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.position !== newVal;
      if (valueChanged) {
        params.data.position = newVal;
        this.player.position = newVal;
      } else {
        this.player.position = params.data.position;
      }
      return valueChanged;
    },
    cellDataType: 'string',
  },

    { headerName: 'Number', field: 'number', 
    valueGetter: (params: ValueGetterParams) => { this.player.number = params.data.number;
      return params.data.number},    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.number !== newVal;
      if (valueChanged) {
        params.data.number = newVal;
        this.player.number = newVal;
      } else {
        this.player.number = params.data.number;
      }
      return valueChanged;
    },
    cellDataType: 'number',
  },
  ];

  defaultColDef: ColDef = {
      filter: true,
      floatingFilter: true,
      editable: true,
      flex: 1,
    }

  ngOnInit() {
    this.createPlayerService.GetAllPlayerFromApi().subscribe(data =>{
      this.rowData = data
    })
  }

  addPlayer() {
    this.router.navigate(['/AddPlayer'])
  }

  OnDataChanged( data: any) {
    this.player.id = data.id
    }
  
  updatePlayer(event: CreatePlayerClass) {
    this.OnDataChanged(event);  
    const playerToUpdate = this.rowData.find(data => data.id === event.id);
  
    if (playerToUpdate) {
      playerToUpdate.age = event.age;
      playerToUpdate.name = event.name;
      playerToUpdate.number = event.number;
      playerToUpdate.photo = event.photo;
  
      this.createPlayerService.EditPlayer(playerToUpdate).subscribe({
        next: (response) => {
          if (response) {
            console.log("Success Saved !");
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
      console.log("Joueur non trouvé !");
    }
  }

  receiveSelectedRows(selectedRows: any[]) {
    this.rowToDelete = selectedRows
  }


  deleteSelectedRows(selectedRows: any[]) {
    const ids = selectedRows.filter(row => row.id != null).map(row => row.id);
  
    if (ids.length > 0) {
      this.createPlayerService.DeletePlayers(ids).subscribe({
        next: (response) => {
          console.log("Success Delete");
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
  

  imageRenderer(params: ICellRendererParams) {
    return '<img src="' + params.value + '" style="width:60px">';
  }

  passGridReadyParams(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  onGridDataChange(event: any[]) {
    // Gérer les données modifiées du composant de grille
    this.data = event;
  }
}