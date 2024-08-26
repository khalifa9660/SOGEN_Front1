import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridApi, ValueGetterParams, ValueSetterParams } from 'ag-grid-community';
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
      { headerName: 'Name', field: 'name', 
      valueGetter: (params: ValueGetterParams) => { this.league.Name = params.data.Name;
        return params.data.name},    valueSetter: (params: ValueSetterParams) => {
        const newVal = params.newValue;
        const valueChanged = params.data.Name !== newVal;
        if (valueChanged) {
          params.data.Name = newVal;
          this.league.Name = newVal;
        } else{
          this.league.Name = params.data.name;
        }
        return valueChanged;
      },
      cellDataType: 'string',
    },
  
      { headerName: 'Country', field: 'country', 
      valueGetter: (params: ValueGetterParams) => { this.league.Country = params.data.Country;
        return params.data.Country},    valueSetter: (params: ValueSetterParams) => {
        const newVal = params.newValue;
        const valueChanged = params.data.Country !== newVal;
        if (valueChanged) {
          params.data.Country = newVal;
          this.league.Country = newVal;
        } else {
          this.league.Country = params.data.Country
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
    this.LeagueService.GetAllLeagues().subscribe(data =>{
      this.rowData = data
    })
  }

  addLeague() {
    this.router.navigate(['/AddLeague'])
  }

  OnDataChanged( data: any) {
    this.league.Id = data.Id
    }

    updateLeague(event: LocalLeagueModel) {
      this.OnDataChanged(event);  
      const leagueToUpdate = this.rowData.find(data => data.id === event.Id);
    
      if (leagueToUpdate) {
        leagueToUpdate.id = event.Id
        leagueToUpdate.Name = event.Name;
        leagueToUpdate.Country = event.Country;
    
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
      const id = selectedRow.filter((row: { id: any; }) => row.id === selectedRow.id )
    
      if (id != null) {
        this.LeagueService.DeleteLeague(id).subscribe({
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

}
