export enum SpellSchool{
    Abjuration, Arcanomancy, Astromancy, Conjuration, Chronurgy, Divination, 
    Enchantment, Evocation, Haemocraft, Illusion, Mythcraft,
    Necromancy, Technomancy, Transmutation
}
export enum SpellList{
    Artificer, Bloodbound, Cleric, Paladin, Psycaster, SpellSword, Wizard
}
export enum SpellComponent{
    F, Feq, V, S, S2, M, Mc
}
export enum Concentration{
    None, Half, Full
}
export class Spell
{
    level: number
    name: string
    schools: SpellSchool[] = []
    description: string
    lists: SpellList[] = []
    castingtime: string
    components: SpellComponent[] = []
    componentdesc: string
    concentration: Concentration
    range: string
    duration: string

    constructor(level: number, name: string, schools: SpellSchool[], description: string, 
        lists: SpellList[], castingtime: string, components: SpellComponent[],
        concentration: Concentration, range: string, duration: string, componentdesc: string)
    {
        this.level = level
        this.name = name
        this.schools = schools
        this.description = description
        this.lists = lists
        this.castingtime = castingtime
        this.components = components
        this.concentration = concentration
        this.range = range
        this.duration = duration
        this.componentdesc = componentdesc
    }

    static async readAll(): Promise<Spell[]>
    {
        const dir = '../data/spells/'
        let index = await (await fetch(dir+'index.html')).text();
        let file_list = index.split('\n');
        let output: Spell[] = []

        for(var file_raw of file_list){
            let file = file_raw.replace(/[\r\n]+/gm, ""); //Trim \r
            if(file == "index.html" || file == ""){break;} //Remove invalid entries from list
            let spell_result = await fetch(dir+file)
            let spell = JSON.parse(await spell_result.text()) as Spell;
            output.push(spell);
        }

        console.log("read spells");
        console.log(output);

        return output;
    }
}