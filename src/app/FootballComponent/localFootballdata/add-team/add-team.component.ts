import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalLeagueModel } from 'src/app/models/localDataModels/localLeague';
import { LocalTeamModel } from 'src/app/models/localDataModels/localTeam';
import { LocalLeagueService } from 'src/app/services/footballData/LocalData/localLeague.service';
import { LocalTeamService } from 'src/app/services/footballData/LocalData/localTeam.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  sideNavStatus: boolean = false;
  errorMessage: string='';
  team= new LocalTeamModel();
  imageUrl: string | ArrayBuffer | null = null;
  addTeamForm!:FormGroup;
  leagueSelection!: LocalLeagueModel[];

  constructor(private http: HttpClient, private router: Router, private FormBuilder: FormBuilder, private localTeamService: LocalTeamService, private leagueService: LocalLeagueService){}

  ngOnInit(): void {
    this.addTeamForm = this.FormBuilder.group({
      name: ['', Validators.required],
      photo: ['', Validators.required],
      championshipId: ['', Validators.required],
    });

    this.leagueService.GetAllLeagues().subscribe(data =>{
      this.leagueSelection = data
    })
  }


  saveTeam() {
    debugger
    // Mettez ici votre logique pour enregistrer l'équipe  
    if (this.addTeamForm.valid) {
      const team = this.addTeamForm.value; // Récupérer les données du formulaire
      this.localTeamService.AddTeam(team).subscribe({
        next: (value: LocalTeamModel) => {
          this.router.navigate(['/teams']);
        },
        error: (error: any) => {
          console.error('Error while adding player:', error);
          this.errorMessage = 'Failed to save Team. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Invalid form data. Please check the fields.';
    }
  }
}
