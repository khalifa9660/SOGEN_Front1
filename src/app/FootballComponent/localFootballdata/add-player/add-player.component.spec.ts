import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerComponent } from './add-player.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from 'src/app/header/header.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { AgGridAngular } from 'ag-grid-angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddPlayerComponent', () => {
  let component: AddPlayerComponent;
  let fixture: ComponentFixture<AddPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AddPlayerComponent, HeaderComponent, SidenavComponent],
      schemas: [ NO_ERRORS_SCHEMA ] 
    });
    fixture = TestBed.createComponent(AddPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
