import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPlayersComponent } from './local-players.component';

describe('LocalPlayersComponent', () => {
  let component: LocalPlayersComponent;
  let fixture: ComponentFixture<LocalPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalPlayersComponent]
    });
    fixture = TestBed.createComponent(LocalPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
