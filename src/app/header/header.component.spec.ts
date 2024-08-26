import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { PlayersComponent } from '../FootballComponent/ExternalFootballData/players/players.component';
import { HistoryTeamMembersComponent } from '../FootballComponent/ExternalFootballData/history-team-members/history-team-members.component';
import { LeaguesComponent } from '../FootballComponent/ExternalFootballData/leagues/leagues.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [HeaderComponent, PlayersComponent, HistoryTeamMembersComponent, LeaguesComponent],
      schemas: [ NO_ERRORS_SCHEMA ] 
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
