import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HistoryTeamMembersComponent } from './history-team-members.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HistoryTeamMembersComponent', () => {
  let component: HistoryTeamMembersComponent;
  let fixture: ComponentFixture<HistoryTeamMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [HistoryTeamMembersComponent, HeaderComponent, SidenavComponent],
      schemas: [ NO_ERRORS_SCHEMA ] 
    });
    fixture = TestBed.createComponent(HistoryTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
