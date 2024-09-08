import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { LocalTeamModel } from "src/app/models/localDataModels/localTeam";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class LocalTeamService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    AddTeam(team: LocalTeamModel): Observable<LocalTeamModel> {
        let AddPTeam = `${environment.apiUrl}/Team/AddTeam`;
        return this.http.post<LocalTeamModel>(AddPTeam, team, {headers: this.GetHeaders() })
    }

    GetAllTeamsWithoutUserId(): Observable<LocalTeamModel[]> {
        let AllTeams = `${environment.apiUrl}/Team/GetAllTeamsWithoutUserId`;
        return this.http.get<LocalTeamModel[]>(AllTeams,{headers: this.GetHeaders() })
    }

    GetAllTeams(): Observable<LocalTeamModel[]> {
        let AllTeams = `${environment.apiUrl}/Team/GetAllTeams`;
        return this.http.get<LocalTeamModel[]>(AllTeams,{headers: this.GetHeaders() })
    }

    GetTeamsByUserId(userId: number): Observable<LocalTeamModel[]> {
        let teamsByUserId = `${environment.apiUrl}/Team/GetTeamsByUserId/${userId}`;
        return this.http.get<LocalTeamModel[]>(teamsByUserId, {headers: this.GetHeaders() })
    }

    GetTeamById(Id: number): Observable<LocalTeamModel> {
        let teamById = `${environment.apiUrl}/Team/GetTeamById/${Id}`;
        return this.http.get<LocalTeamModel>(teamById, {headers: this.GetHeaders() })
    }

    GetTeamsByChampionshipId(ChampionshipId: number): Observable<LocalTeamModel[]> {
        let teamById = `${environment.apiUrl}/Team/GetTeamsByChampionshipId/${ChampionshipId}`;
        return this.http.get<LocalTeamModel[]>(teamById, {headers: this.GetHeaders() })
    }

    EditTeam(Team: LocalTeamModel): Observable<LocalTeamModel> {
        let UpdateTeamApi = `${environment.apiUrl}/Team/EditTeam`;
        return this.http.put<LocalTeamModel>(UpdateTeamApi, Team, {headers: this.GetHeaders() })
    }

    DeleteTeam(team: LocalTeamModel): Observable<any> {
        const deleteTeamUrl = `${environment.apiUrl}/Team/DeleteTeam/${team.id}`;
        return this.http.delete<any>(deleteTeamUrl, { headers: this.GetHeaders() });
    } 
      
      

}