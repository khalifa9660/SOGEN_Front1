import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { LocalLeagueModel } from "src/app/models/localDataModels/localLeague";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class LocalLeagueService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    AddLeague(league: LocalLeagueModel): Observable<LocalLeagueModel> {
        let AddLeagueApi = `${environment.apiUrl}/Championship/AddChampionship`;
        return this.http.post<LocalLeagueModel>(AddLeagueApi, league, {headers: this.GetHeaders() })
    }

    GetAllLeaguesWithoutUserId(): Observable<LocalLeagueModel[]> {
        let LeaguesApi = `${environment.apiUrl}/Championship/GetAllChampionshipsWithoutUserId`;
        return this.http.get<LocalLeagueModel[]>(LeaguesApi,{headers: this.GetHeaders() })
    }

    GetAllLeagues(): Observable<LocalLeagueModel[]> {
        let LeaguesApi = `${environment.apiUrl}/Championship/GetAllChampionships`;
        return this.http.get<LocalLeagueModel[]>(LeaguesApi,{headers: this.GetHeaders() })
    }

    GetLeagueById(id: number): Observable<LocalLeagueModel> {
        let leagueById = `${environment.apiUrl}/Championship/GetChampionshipById/${id}`;
        return this.http.get<LocalLeagueModel>(leagueById,{headers: this.GetHeaders() })
    }

    GetLeagueByUserId(id: number): Observable<LocalLeagueModel[]> {
        let leagueByUserId = `${environment.apiUrl}/Championship/GetChampionshipByUserId/${id}`;
        return this.http.get<LocalLeagueModel[]>(leagueByUserId,{headers: this.GetHeaders() })
    }

    EditLeague(league: LocalLeagueModel): Observable<LocalLeagueModel> {
        let UpdateLeagueApi = `${environment.apiUrl}/Championship/EditChampionship`;
        return this.http.put<LocalLeagueModel>(UpdateLeagueApi, league, {headers: this.GetHeaders() })
    }

    DeleteLeague(league: LocalLeagueModel): Observable<any> {
        const deleteLeagueApi = `${environment.apiUrl}/Championship/DeleteChampionship/${league.id}`;
        return this.http.delete<any>(deleteLeagueApi, { headers: this.GetHeaders() });
      }            

}