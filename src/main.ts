enum SpellSchool{
    Abjuration, Arcanomancy, Astromancy, Conjuration, Chronurgy, Divination, 
    Enchantment, Evocation, Haemocraft, Illusion, Mythcraft,
    Necromancy, Technomancy, Transmutation
}
enum SpellList{
    Artificer, Bloodbound, Cleric, Paladin, Psycaster, SpellSword, Wizard
}
enum SpellComponent{
    F, Feq, V, S, S2, M, Mc
}
enum Concentration{
    None, Half, Full
}
class Spell
{
    level: number
    name: string
    school: SpellSchool
    description: string
    lists: SpellList[] = []
    castingtime: string
    components: SpellComponent[] = []
    concentration: Concentration
    range: string
    duration: string

    constructor(level: number, name: string, school: SpellSchool, description: string, 
        lists: SpellList[], castingtime: string, components: SpellComponent[],
        concentration: Concentration, range: string, duration: string)
    {
        this.level = level
        this.name = name
        this.school = school
        this.description = description
        this.lists = lists
        this.castingtime = castingtime
        this.components = components
        this.concentration = concentration
        this.range = range
        this.duration = duration
    }
}
function buttonclick()
{
    printToResult("Hello World!");
}
function printToResult(text: string)
{
    let result = document.getElementById("result")
    if(result){result.innerHTML=text}
}