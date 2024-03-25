import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { PlayerModel, TeamPlayerModel } from "src/app/models/player";
import { TeamModels } from "src/app/models/team";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class PlayersService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    GetPlayersFromApi(teamId: number): Observable<{ team: TeamPlayerModel, players: PlayerModel[] }> {
        let PlayersApi = `${environment.apiUrl}/FootBallApi/Players/${teamId}`;
        return this.http.get<{ team: TeamPlayerModel, players: PlayerModel[] }>(PlayersApi,{headers: this.GetHeaders() })
    }

}