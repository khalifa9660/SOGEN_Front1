import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaguesComponent } from './add-leagues.component';

describe('AddLeaguesComponent', () => {
  let component: AddLeaguesComponent;
  let fixture: ComponentFixture<AddLeaguesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLeaguesComponent]
    });
    fixture = TestBed.createComponent(AddLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
