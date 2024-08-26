import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { FlagTeam } from "src/app/models/externalDataModels/flag"; 
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
  })

export class CountriesService {
    countriesUrl = "FootBallApi/Countries"
    errorMessage!: string;
    errorHandl:any

    

    constructor(private http: HttpClient, private router: Router){}

    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    GetCountriesFromApi(): Observable<FlagTeam[]> {
        let CountriesApi = `${environment.apiUrl}/${this.countriesUrl}`
        return this.http.get<FlagTeam[]>(CountriesApi,{headers: this.GetHeaders() })
    }
}