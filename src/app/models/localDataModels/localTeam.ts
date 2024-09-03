export interface ILocalTeamModel
{
    id: number
    name: string
    photo: string
    championshipId?: number
}

export class LocalTeamModel
{
    id: number = 0
    name: string = ""
    photo: string = ""
    championshipId?: number
}