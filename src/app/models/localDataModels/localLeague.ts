export interface ILocalLeagueModel
{
    Id: number
    Name: string
    Country: string
    UserId?: number
}

export class LocalLeagueModel
{
    Id: number = 0
    Name: string = ""
    Country: string = ""
    UserId?: number
}