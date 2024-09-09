import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridApi, ICellRendererParams, ValueGetterParams, ValueSetterParams } from 'ag-grid-community';
import { LocalLeagueService } from 'src/app/services/footballData/LocalData/localLeague.service';
import { LocalLeagueModel } from 'src/app/models/localDataModels/localLeague';

@Component({
  selector: 'app-local-leagues',
  templateUrl: './local-leagues.component.html',
  styleUrls: ['./local-leagues.component.scss']
})
export class LocalLeaguesComponent implements OnInit{
  sideNavStatus: boolean = false;
  isDataChanged: boolean = false;
  gridApi!: GridApi;
  errorMessage!: string;
  isCellValueChanged: boolean = false;
  rowToDelete!: any[];

    constructor(private http: HttpClient, private router: Router, private LeagueService: LocalLeagueService){}

    rowData: any[] = [];
    league = new LocalLeagueModel();
    @Input() data: any;
    @Output() selectionChanged = new EventEmitter<any[]>();

    public rowSelection: 'single' | 'multiple' = 'multiple';

    columnDefs: ColDef[] = [
      { headerName: 'Checkbox Cell', field: 'boolean', headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true,},

      { headerName: 'Photo', field: 'photo', cellRenderer: this.imageRenderer,
        valueGetter: (params: ValueGetterParams) => { this.league.photo = params.data.photo;
          return params.data.photo},    valueSetter: (params: ValueSetterParams) => {
          const newVal = params.newValue;
          const valueChanged = params.data.photo !== newVal;
          if (valueChanged) {
            params.data.photo = newVal;
            this.league.photo = newVal;
          } else {
            this.league.photo = params.data.photo
          }
          return valueChanged;
        },
        cellDataType: 'string',
      },

      { headerName: 'Name', field: 'name', 
      valueGetter: (params: ValueGetterParams) => { this.league.name = params.data.name;
        return params.data.name},    valueSetter: (params: ValueSetterParams) => {
        const newVal = params.newValue;
        const valueChanged = params.data.name !== newVal;
        if (valueChanged) {
          params.data.name = newVal;
          this.league.name = newVal;
        } else{
          this.league.name = params.data.name;
        }
        return valueChanged;
      },
      cellDataType: 'string',
    },
  
      { headerName: 'Country', field: 'country', 
      valueGetter: (params: ValueGetterParams) => { this.league.country = params.data.country;
        return params.data.country},    valueSetter: (params: ValueSetterParams) => {
        const newVal = params.newValue;
        const valueChanged = params.data.country !== newVal;
        if (valueChanged) {
          params.data.country = newVal;
          this.league.country = newVal;
        } else {
          this.league.country = params.data.Country
        }
        return valueChanged;
      },
      cellDataType: 'string',
    },
    ];
  
    defaultColDef: ColDef = {
        filter: true,
        floatingFilter: true,
        editable: true,
        flex: 1,
      }

  ngOnInit(): void {
    this.LeagueService.GetAllLeaguesWithoutUserId().subscribe(data =>{
      this.rowData = data
    })
  }

  addLeague() {
    this.router.navigate(['/AddLeague'])
  }

  OnDataChanged( data: any) {
    this.league.id = data.id
    }

    updateLeague(event: LocalLeagueModel) {
      this.OnDataChanged(event);  
      const leagueToUpdate = this.rowData.find(data => data.id === event.id);
    
      if (leagueToUpdate) {
        leagueToUpdate.id = event.id
        leagueToUpdate.name = event.name;
        leagueToUpdate.country = event.country;
        leagueToUpdate.photo = event.photo;
    
        this.LeagueService.EditLeague(leagueToUpdate).subscribe({
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
        console.log("League non trouvé !");
      }
    }

    receiveSelectedRow(selectedRow: any) {
      this.rowToDelete = selectedRow
    }

    deleteSelectedRow(selectedRow: any) {
      if (selectedRow && selectedRow[0].id) {
        const leagueToDelete = selectedRow[0].id;
        
        this.LeagueService.DeleteLeague(leagueToDelete).subscribe({
          next: (response) => {
            console.log("Success Delete", response);
            this.errorMessage = "Success delete";
            window.location.reload();
          },
          error: (error) => {
            console.log("Failed to delete!", error);
            this.errorMessage = "Failed to delete!";
          }
        });
      } else {
        console.error("selectedRow or selectedRow[0].id is undefined.");
      }
    }

    imageRenderer(params: any) {
      const imageElement = document.createElement('img');
      imageElement.src = params.value;
      imageElement.width = 50;
      imageElement.height = 50; 
      return imageElement;
    }

}
