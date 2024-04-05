import { Component, OnInit } from "@angular/core";
import { Login } from "../models/login";
import { Register } from "../models/register";
import { JwtAuth } from "../models/jwtAuth";
import { AuthenticationService } from "../services/account-manager/authentification.service";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Drivers.App'
  loginDto = new Login();
  jwtDto = new JwtAuth();
  submitted!: boolean;

  constructor(private authService: AuthenticationService, private router: Router, private FormBuilder: FormBuilder) { }

  loginForm!:FormGroup
  errorMessage: string = '';



  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)]]
    })
  }

  login(loginDto: Login) {
    this.authService.login(loginDto).subscribe({
      next: (jwtDto) => {
        sessionStorage.setItem('jwtToken', jwtDto.token);
        this.router.navigate(['players']);
      },
      error: (error) => {
        console.error('Erreur lors de la connexion :', error);
        this.errorMessage = "Invalid authentication";
      }
    });
  }

  get emailControl() {
    return this.loginForm.get('email');
  }
  
  get passwordControl() {
    return this.loginForm.get('password');
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      ("Form submitted successfully!");
      
      this.loginForm.reset();
    } else {
      console.log("Form submission failed. Please check the fields.");
      
      this.loginForm.markAllAsTouched();
    }
  }
  

}
