export interface INationalPlayerModel {
    number: Number;
    player:string;
}

export interface IPlayerModel {
    id: number;
    nom: string;
    age : number;
    number: number;
    position: string;
    photo: string;
    TeamPlayerModels: ITeamPlayerModel[]
}

export class PlayerModel {
    id: number = 0
    name: string = '';
    age: number = 0;
    position: string = '';
    number: number= 0;
    photo: string= ''
  }


export interface ITeamPlayerModel {
    map(arg0: (player: any) => any): any[];
    id:number
    name: string
    logo:string
}

export interface Coachs {
    name: string

}