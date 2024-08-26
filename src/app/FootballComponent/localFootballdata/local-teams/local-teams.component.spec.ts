import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTeamsComponent } from './local-teams.component';

describe('LocalTeamComponent', () => {
  let component: LocalTeamsComponent;
  let fixture: ComponentFixture<LocalTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalTeamsComponent]
    });
    fixture = TestBed.createComponent(LocalTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
