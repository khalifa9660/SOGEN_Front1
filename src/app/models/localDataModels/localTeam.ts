export interface ILocalTeamModel
{
    Id: number
    Name: string
    Photo: string
    ChampionshipId?: number
}

export class LocalTeamModel
{
    Id: number = 0
    Name: string = ""
    Photo: string = ""
    ChampionshipId?: number
}