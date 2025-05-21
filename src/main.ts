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
}
export function buttonclick()
{
    printToResult("Hello World!");
}
function printToResult(text: string)
{
    let result = document.getElementById("result")
    if(result){result.innerHTML=text}
}
document.querySelector("#testbutton")?.addEventListener('click', buttonclick);