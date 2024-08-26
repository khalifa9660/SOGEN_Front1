import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../models/authentificationModels/register';
import { AuthenticationService } from '../services/account-manager/authentification.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerDto = new Register();
  submitted!: boolean;
  constructor(private Router: Router, private authService: AuthenticationService, private formBuilder: FormBuilder){}

  registerForm!: FormGroup
  errorMessage: string = '';

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)]],
      confirmPassword: ['', Validators.required],
    },{
      validators: this.MustMatch('password', 'confirmPassword')
    })
  }

  register(registerDto: Register) {
    this.authService.register(registerDto).subscribe({
      next: (response) => {
        if(response){
          this.Router.navigate(['registerConfirmation']);
        }
      },
      error: (error) => {
        console.error('Erreur lors de l\'inscription :', error);
        this.errorMessage = "Invalid registration";
      }
    });
  }
  
  get nameControl() {
    return this.registerForm.get('name');
  }

  get emailControl() {
    return this.registerForm.get('email');
  }
  
  get passwordControl() {
    return this.registerForm.get('password');
  }

  get confirmPasswordControl() {
    return this.registerForm.get('confirmPassword');
  }

  MustMatch(controlName: string, matchingControlName: string){
    return(formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName]
      const matchingControl = formGroup.controls[matchingControlName];

      if(matchingControl.errors && !matchingControl.errors['MustMatch']){
        return 
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch: true})
      } else {
        matchingControl.setErrors(null)
      }

    }
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log("Form submitted successfully!");
      
      this.registerForm.reset();
    } else {
      console.log("Form submission failed. Please check the fields.");
      
      this.registerForm.markAllAsTouched();
    }
  }
}
