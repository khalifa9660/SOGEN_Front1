export interface NationalPlayerModel {
    number: Number;
    player:string;
}

export interface PlayerModel {
    id: number;
    nom: string;
    age : number;
    number: number;
    position: string;
    photo: string;
    TeamPlayerModels: TeamPlayerModel[]
}

export class CreatePlayerModel {
    id: number = 0
    name: string = '';
    age: number = 0;
    position: string = '';
    number: number= 0;
    photo: string= ''
  }


export interface TeamPlayerModel {
    map(arg0: (player: any) => any): any[];
    id:number
    name: string
    logo:string
}

export interface Coachs {
    name: string

}