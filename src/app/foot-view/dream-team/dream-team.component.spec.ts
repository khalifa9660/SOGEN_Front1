import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DreamTeamComponent } from './dream-team.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DreamTeamComponent', () => {
  let component: DreamTeamComponent;
  let fixture: ComponentFixture<DreamTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [DreamTeamComponent, HeaderComponent, SidenavComponent],
      schemas: [ NO_ERRORS_SCHEMA ] 
    });
    fixture = TestBed.createComponent(DreamTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
