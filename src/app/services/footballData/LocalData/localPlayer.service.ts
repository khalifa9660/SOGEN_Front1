import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { LocalPlayerModel } from "src/app/models/localDataModels/localPlayer";
import { PlayerModel } from "src/app/models/externalDataModels/player";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class LocalPlayerService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    
    AddPlayer(player: PlayerModel): Observable<PlayerModel> {
        let AddPlayerApi = `${environment.apiUrl}/Player/AddPlayer`;
        return this.http.post<PlayerModel>(AddPlayerApi, player, {headers: this.GetHeaders() })
    }
    
    GetAllPlayers(): Observable<PlayerModel[]> {
        let PlayersApi = `${environment.apiUrl}/Player/GetAllPlayers`;
        return this.http.get<PlayerModel[]>(PlayersApi,{headers: this.GetHeaders() })
    }

    GetPlayersByUserId(userId: number): Observable<PlayerModel[]> {
        let PlayersByUserId = `${environment.apiUrl}/Player/GetPlayersByUserId/${userId}`;
        return this.http.get<PlayerModel[]>(PlayersByUserId,{headers: this.GetHeaders() })
    }

    GetPlayersById(playerId: number): Observable<PlayerModel> {
        let PlayersById = `${environment.apiUrl}/Player/GetPlayerById/${playerId}`;
        return this.http.get<PlayerModel>(PlayersById,{headers: this.GetHeaders() })
    }

    GetPlayersByTeamId(teamId: number): Observable<PlayerModel[]> {
        let PlayersByTeamId = `${environment.apiUrl}/Player/GetPlayerById/${teamId}`;
        return this.http.get<PlayerModel[]>(PlayersByTeamId,{headers: this.GetHeaders() })
    }

    EditPlayer(player: LocalPlayerModel): Observable<LocalPlayerModel> {
        let UpdatePlayerApi = `${environment.apiUrl}/Player/EditPlayer`;
        return this.http.put<LocalPlayerModel>(UpdatePlayerApi, player, {headers: this.GetHeaders() })
    }

    DeletePlayers(ids: string[]): Observable<any> {
        const deletePlayersApi = `${environment.apiUrl}/Player/Delete/${ids.join(',')}`;
        return this.http.delete<any>(deletePlayersApi, { headers: this.GetHeaders() });
      }      
      
      
      

}