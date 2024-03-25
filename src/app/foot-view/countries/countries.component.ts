import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { CountriesService } from 'src/app/services/footballData/countriesApi.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent {
  sideNavStatus: boolean = false;
  gridReadyParams!: GridReadyEvent;
  constructor(private http: HttpClient, private router: Router, private CountriesServcie: CountriesService){}

  columnDefs: ColDef[] = [
    { headerName: 'Flag', field: 'flag', cellRenderer: this.imageRenderer },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Code', field: 'code' }
  ];

  rowData: any[] = [];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  }

  ngOnInit(){
    this.CountriesServcie.GetCountriesFromApi().subscribe(response =>{
      this.rowData = response;
    })
  }

  imageRenderer(params: ICellRendererParams) {
      return '<img src="' + params.value + '" style="width:50px;">';
    }

    passGridReadyParams(params: GridReadyEvent) {
      this.gridReadyParams = params;
    }

}
