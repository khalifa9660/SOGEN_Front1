export interface ILocalPlayerModel {
    id?: number;
    name: string;
    age: number;
    number: number;
    position: string;
    nationality: string;
    photo: string;
    userId?: number | null;
    teamId?: number | null;
}

export class LocalPlayerModel {
    id?: number = 0
    name: string = "";
    age : number = 0;
    number: number = 0;
    position: string = "";
    photo: string = "";
    nationality: string = "";
    userId?: number | null;
    teamId?: number | null;
}

