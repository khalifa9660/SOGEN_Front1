import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LeaguesComponent } from './leagues.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LeaguesComponent', () => {
  let component: LeaguesComponent;
  let fixture: ComponentFixture<LeaguesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LeaguesComponent, HeaderComponent, SidenavComponent],
      schemas: [ NO_ERRORS_SCHEMA ] 
    });
    fixture = TestBed.createComponent(LeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
