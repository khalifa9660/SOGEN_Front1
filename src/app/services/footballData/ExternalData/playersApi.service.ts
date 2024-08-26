import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { PlayerModel, ITeamPlayerModel } from "src/app/models/externalDataModels/player";
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

    GetPlayersFromApi(teamId: number): Observable<{ team: ITeamPlayerModel, players: PlayerModel[] }> {
        let PlayersApi = `${environment.apiUrl}/FootBallApi/Players/${teamId}`;
        return this.http.get<{ team: ITeamPlayerModel, players: PlayerModel[] }>(PlayersApi,{headers: this.GetHeaders() })
    }

}