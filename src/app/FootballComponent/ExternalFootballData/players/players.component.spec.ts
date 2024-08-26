import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayersComponent } from './players.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PlayersComponent, HeaderComponent, SidenavComponent],
      schemas: [ NO_ERRORS_SCHEMA ] 
    });
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
