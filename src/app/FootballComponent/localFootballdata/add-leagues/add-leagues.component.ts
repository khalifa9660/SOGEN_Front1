import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalLeagueModel } from 'src/app/models/localDataModels/localLeague';
import { LocalLeagueService } from 'src/app/services/footballData/LocalData/localLeague.service';

@Component({
  selector: 'app-add-leagues',
  templateUrl: './add-leagues.component.html',
  styleUrls: ['./add-leagues.component.scss']
})
export class AddLeaguesComponent implements OnInit {
  sideNavStatus: boolean = false;
  errorMessage: string='';
  league= new LocalLeagueModel();
  imageUrl: string | ArrayBuffer | null = null;
  addLeagueForm!:FormGroup

  constructor(private http: HttpClient, private router: Router, private FormBuilder: FormBuilder, private localLeagueService: LocalLeagueService){}

  ngOnInit(): void {
    this.addLeagueForm = this.FormBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      photo: ['', Validators.required],
    });
  }

  saveLeague() {
    // Mettez ici votre logique pour enregistrer la league  
    if (this.addLeagueForm.valid) {
      const league = this.addLeagueForm.value; // Récupérer les données du formulaire
      this.localLeagueService.AddLeague(league).subscribe({
        next: (value: LocalLeagueModel) => {
          this.router.navigate(['/leagues']);
        },
        error: (error: any) => {
          console.error('Error while adding league:', error);
          this.errorMessage = 'Failed to save league. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Invalid form data. Please check the fields.';
    }
  }
}
