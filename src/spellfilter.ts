import { Spell } from "./spell";

export class SpellFilter
{
    search: string

    //Standard Constructor, using all values
    constructor(search: string)
    {
        this.search = search
    }

    //Construct from URL parameters
    static fromURL(url: URLSearchParams): SpellFilter
    {
        let search: string = url.get("search")

        return new SpellFilter(search)
    }

    //Apply all filters
    public apply(raw_list: Spell[]): Spell[]
    {
        let filtered_list: Spell[] = []

        for(var spell of raw_list)
        {
            //Does name contain search string? (case insensitive)
            if(this.search){
                if(!spell.name.toLowerCase().includes(this.search.toLowerCase())){continue;}
            }

            filtered_list.push(spell)
        }

        return filtered_list
    }
}