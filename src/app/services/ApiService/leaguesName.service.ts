// my-object.service.ts
import { Injectable } from '@angular/core';
import { teamsName } from 'src/app/models/externalDataModels/teamNames'; 

@Injectable({
  providedIn: 'root'
})
export class leaguesNameService {

  getLeagues(): teamsName[] {
    return [
        { id: 1, name: 'National Team' },
        { id: 2, name: 'Premier League' },
        { id: 3, name: 'Championship' },
        { id: 4, name: 'Ligue 1' },
        { id: 6, name: 'Brazil' },
        { id: 8, name: 'Bundesliga' },
        { id: 10, name: 'Eredivisie' },
        { id: 13, name: 'Japon League' },
        { id: 15, name: 'Norvège League' },
        { id: 16, name: 'Pologne League' },
        { id: 20, name: 'Danemark League' },
        { id: 26, name: 'Argentina League' },
        { id: 30, name: 'Liga' },
        { id: 34, name: 'Belgian Pro League' }
      ]      
  }

}