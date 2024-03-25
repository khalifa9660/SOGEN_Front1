import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmed-sign-up',
  templateUrl: './confirmed-sign-up.component.html',
  styleUrls: ['./confirmed-sign-up.component.scss']
})
export class ConfirmedSignUpComponent {

  constructor(private router:Router){}
}
