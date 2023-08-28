
export interface ICharacter{
    id:number,
    name:string,
    status?:string,
    species?:string,
    type?:string,
    gender?:string,
    origin?:object,
    location?:object,
    image?:string,
    episode?:string[],
    url?:string,
    created?:string
}
export interface IEpisode{
    id:number,
    name: string,
    air_date?: string,
    episode?: string,
    characters?: string[],
    url?:string,
    created?:string
}
export interface IInfo{
    count?: number,
    pages?: number,
    next?: string,
    prev?: string
}

export interface IRMRes{
    info:IInfo,
    results: {
        episodes: IEpisode[],
        characters: ICharacter[]
    }
}
