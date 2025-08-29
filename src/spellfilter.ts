import { Spell } from "./spell";

export class SpellFilter
{
    search: string
    level: number | null

    //Standard Constructor, using all values
    constructor(search: string, level: number | null)
    {
        this.search = search
        this.level = level
    }

    //Construct from URL parameters
    static fromURL(url: URLSearchParams): SpellFilter
    {
        let search: string = url.get("search")

        let level: number | null
        let level_raw: string = url.get("level")
        if(level_raw == "All"){level = null}
        else{level = Number.parseInt(level_raw)}

        return new SpellFilter(search, level)
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
            //Does level match?
            if(this.level != null){
                if(!(spell.level == this.level)){continue;}
            }

            filtered_list.push(spell)
        }

        return filtered_list
    }
}