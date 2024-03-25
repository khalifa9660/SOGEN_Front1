import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, ModuleRegistry, ICellRendererParams, GridApi, GridOptions, IsRowSelectable, IRowNode, CellValueChangedEvent, SelectionChangedEvent  } from 'ag-grid-community'; // Column Definition Type Interface
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlayerModel } from '../models/player';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule], // Add AG Grid component
  styleUrls: ['./data-grid.component.scss'],
  template: `<!-- The AG Grid component -->
  <ag-grid-angular
    #agGrid
    (gridReady)="onGridReady($event)"
    class="ag-theme-quartz"
    [rowSelection]="rowSelection"
    [suppressRowClickSelection]="true"
    (cellValueChanged)="onCellValueChanged($event)"
    (selectionChanged)="handleSelectionChanged($event)"
    (dataChanged)="createComponent.data = $event"
    (selectedRows)="createComponent.data = $event"
    style="height: 680px;"
    [class]="themeClass"
    [rowData]="rowData"
    [pagination]="true"
    [defaultColDef]="defaultColDef"
    [columnDefs]="columnDefs">
  </ag-grid-angular>`
})




export class DataGridModule {
createComponent: any;
  constructor(private http: HttpClient, private router: Router ){}
 
  themeClass = "ag-theme-quartz";

  @Input() gridReadyParams!: GridReadyEvent<any, any>;
  @Input() rowData: any[] = [];
  @Input() columnDefs: ColDef[] = [];
  @Input() defaultColDef: ColDef ={};
  @Output() dataChanged = new EventEmitter<any>();
  @Output() selectionChanged = new EventEmitter<any[]>();

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  private gridApi!: any;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  selectedRowData!: any[];
  valueChanged: boolean = false

  public isRowSelectable: IsRowSelectable = (
    params: IRowNode<PlayerModel>
  ) => {
    return !!params.data && params.data.age == 10;
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api
  }

  handleSelectionChanged(event: SelectionChangedEvent<any, any>) {
    const selectedRowData = event.api.getSelectedNodes().map(node => node.data);
    this.selectionChanged.emit(selectedRowData);
  }

  onCellValueChanged(event: CellValueChangedEvent) {
    this.dataChanged.emit(event.data);
  }

  ngAfterViewInit(): void {
    this.gridApi = this.agGrid.api;
    this.autoSizeColumns();
  }

  autoSizeColumns() {
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit();
    }
  }
}