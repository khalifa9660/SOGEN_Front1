import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { TeamModels } from "src/app/models/externalDataModels/team"; 
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class LeagueService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    GetLeaguesFromApi(leagueId:number): Observable<TeamModels[]> {
        let TeamsApi = `${environment.apiUrl}/FootBallApi/Teams/${leagueId}`;
        return this.http.get<TeamModels[]>(TeamsApi,{headers: this.GetHeaders() })
    }

}