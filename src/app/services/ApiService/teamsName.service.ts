// my-object.service.ts
import { Injectable } from '@angular/core';
import { teamsName } from 'src/app/models/externalDataModels/teamNames';

@Injectable({
  providedIn: 'root'
})
export class teamNamesService {

  getNationalCountries(): teamsName[] {
    return [
      { id: 1, name: 'Belgium' },
      { id: 2, name: 'France' },
      { id: 3, name: 'Croatia' },
      { id: 4, name: 'Russia' },
      { id: 5, name: 'Sweden' },
      { id: 6, name: 'Brazil' },
      { id: 7, name: 'Uruguay' },
      { id: 8, name: 'Colombia' },
      { id: 9, name: 'Spain' },
      { id: 10, name: 'England' },
      { id: 11, name: 'Panama' },
      { id: 12, name: 'Japan' },
      { id: 13, name: 'Senegal' },
      { id: 14, name: 'Serbia' },
      { id: 15, name: 'Switzerland' },
      { id: 16, name: 'Mexico' },
      { id: 17, name: 'South Korea' },
      { id: 18, name: 'Iceland' },
      { id: 19, name: 'Nigeria' },
      { id: 20, name: 'Australia' },
      { id: 21, name: 'Denmark' },
      { id: 22, name: 'Iran' },
      { id: 23, name: 'Saudi Arabia' },
      { id: 24, name: 'Poland' },
      { id: 25, name: 'Germany' },
      { id: 26, name: 'Argentina' },
      { id: 27, name: 'Portugal' },
      { id: 28, name: 'Tunisia' },
      { id: 29, name: 'Costa Rica' },
      { id: 30, name: 'Peru' },
      { id: 31, name: 'Morocco' },
      { id: 32, name: 'Egypt' },
    ];
  }

  getPremierLeague(): teamsName[] {
    return [
      { id: 33, name: 'Manchester United' },
      { id: 34, name: 'Newcastle' },
      { id: 35, name: 'Bournemouth' },
      { id: 36, name: 'Fulham' },
      { id: 37, name: 'Huddersfield' },
      { id: 38, name: 'Watford' },
      { id: 39, name: 'Wolves' },
      { id: 40, name: 'Liverpool' },
      { id: 41, name: 'Southampton' },
      { id: 42, name: 'Arsenal' },
      { id: 43, name: 'Cardiff' },
      { id: 44, name: 'Burnley' },
      { id: 45, name: 'Everton' },
      { id: 46, name: 'Leicester' },
      { id: 47, name: 'Tottenham' },
      { id: 48, name: 'West Ham' },
      { id: 49, name: 'Chelsea' },
      { id: 50, name: 'Manchester City' },
      { id: 51, name: 'Brighton' },
      { id: 52, name: 'Crystal Palace' },
    ]
  }

  getLigue1(): teamsName[] {
    return [
      { id: 77, name: 'Angers' },
      { id: 78, name: 'Bordeaux' },
      { id: 79, name: 'Lille' },
      { id: 80, name: 'Lyon' },
      { id: 81, name: 'Marseille' },
      { id: 82, name: 'Montpellier' },
      { id: 83, name: 'Nantes' },
      { id: 84, name: 'Nice' },
      { id: 85, name: 'Paris Saint Germain' },
      { id: 88, name: 'Caen' },
      { id: 89, name: 'Dijon' },
      { id: 90, name: 'Guingamp' },
      { id: 91, name: 'Monaco' },
      { id: 92, name: 'Nimes' },
      { id: 93, name: 'Reims' },
      { id: 94, name: 'Rennes' },
      { id: 95, name: 'Strasbourg' },
      { id: 96, name: 'Toulouse' },
      { id: 97, name: 'Lorient' },
    ]
  }

  getLiga(): teamsName[] {
    return [
      { id: 529, name: 'Barcelona' },
      { id: 530, name: 'Atletico Madrid' },
      { id: 531, name: 'Athletic Club' },
      { id: 532, name: 'Valencia' },
      { id: 533, name: 'Villarreal' },
      { id: 534, name: 'Las Palmas' },
      { id: 536, name: 'Sevilla' },
      { id: 537, name: 'Leganes' },
      { id: 538, name: 'Celta Vigo' },
      { id: 539, name: 'Levante' },
      { id: 540, name: 'Espanyol' },
      { id: 541, name: 'Real Madrid' },
      { id: 542, name: 'Alaves' },
      { id: 543, name: 'Real Betis' },
      { id: 545, name: 'Eibar' },
      { id: 546, name: 'Getafe' },
      { id: 547, name: 'Girona' },
      { id: 548, name: 'Real Sociedad' },

    ]
  }

  getBundesliga(): teamsName[] {
    return [
      { id: 157, name: 'Bayern Munich' },
      { id: 158, name: 'Fortuna Dusseldorf' },
      { id: 159, name: 'Hertha Berlin' },
      { id: 160, name: 'SC Freiburg' },
      { id: 161, name: 'Wolfburg' },
      { id: 162, name: 'Werder Bremen' },
      { id: 163, name: 'Borussia Monchengladbach' },
      { id: 164, name: 'FSV Maintz 05' },
      { id: 165, name: 'Borussia Dortmund' },
      { id: 166, name: 'Hannover 96' },
      { id: 167, name: '1899 Hoffeheim' },
      { id: 168, name: 'Bayern Leverkusen' },
      { id: 169, name: 'Eintracht Frankfurt' },
      { id: 170, name: 'FC Augsburg' },
      { id: 171, name: 'FC Nurnberg' },
      { id: 172, name: 'Vbf Stuttgart' },
      { id: 173, name: 'RB Leipzig' },
    ]
  }

  getSerieA(): teamsName[] {
    return [
      { id: 487, name: 'Lazio' },
      { id: 488, name: 'Sassuolo' },
      { id: 489, name: 'AC MIlan' },
      { id: 490, name: 'Cagliari' },
      { id: 491, name: 'Chievo' },
      { id: 492, name: 'Napoli' },
      { id: 493, name: 'Spal' },
      { id: 494, name: 'Udinese' },
      { id: 495, name: 'Genoa' },
      { id: 496, name: 'Juventus' },
      { id: 497, name: 'AS Roma' },
      { id: 498, name: 'Samporia' },
      { id: 499, name: 'Atalanta' },
      { id: 500, name: 'Bolona' },
      { id: 501, name: 'Crotone' },
      { id: 502, name: 'Fiorentina'},
      { id: 503, name: 'Torino' },
      { id: 504, name: 'Verona' },
      { id: 505, name: 'Inter' },
      { id: 501, name: 'Benevento' },
    ]
  }
  
}
