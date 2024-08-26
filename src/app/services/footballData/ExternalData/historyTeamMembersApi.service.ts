import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { Coachs, INationalPlayerModel, PlayerModel } from "src/app/models/externalDataModels/player";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class HistoryTeamMembersService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    GetHistoryTeamMembersFromApi(season:number, leagueId:number): Observable<{ players: INationalPlayerModel[], coachs: Coachs[] }> {
        let PlayersApi = `${environment.apiUrl}/FootBallApi/HistoryTeamMembers/${season}/${leagueId}`;
        return this.http.get<{ players: INationalPlayerModel[], coachs: Coachs[] }>(PlayersApi,{headers: this.GetHeaders() })
    }

}