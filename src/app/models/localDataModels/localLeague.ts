export interface ILocalLeagueModel
{
    id: number
    name: string
    country: string
    photo: string
    userId?: number
}

export class LocalLeagueModel
{
    id: number = 0
    name: string = ""
    country: string = ""
    photo: string = ""
    userId?: number
}