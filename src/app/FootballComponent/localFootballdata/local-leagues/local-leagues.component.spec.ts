import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalLeaguesComponent } from './local-leagues.component';

describe('LocalLeaguesComponent', () => {
  let component: LocalLeaguesComponent;
  let fixture: ComponentFixture<LocalLeaguesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalLeaguesComponent]
    });
    fixture = TestBed.createComponent(LocalLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
