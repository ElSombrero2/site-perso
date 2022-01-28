export interface Skill{
    name: string
    description: string
    logo: string
    level: number
}

export interface Skills{
    default: Array<Skill>
    main: Array<Skill>
}