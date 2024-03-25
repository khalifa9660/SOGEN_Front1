import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmedSignUpComponent } from './confirmed-sign-up.component';

describe('ConfirmedSignUpComponent', () => {
  let component: ConfirmedSignUpComponent;
  let fixture: ComponentFixture<ConfirmedSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ConfirmedSignUpComponent]
    });
    fixture = TestBed.createComponent(ConfirmedSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
