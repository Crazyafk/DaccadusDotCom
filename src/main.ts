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

    static async readAll()
    {
        const dir = './data/spells'
        let example_spell = await fetch("../data/spells/A Fresh Point of View.json")
        let output = JSON.parse(await example_spell.text()) as Spell;

        console.log("read spells");
        console.log(output);

        return output;
    }
    // Adapted from https://stackoverflow.com/a/77835274 
    static async getDirectory(dirname: string) {
        let response = await fetch(dirname);
        let str = await response.text();
        let el = document.createElement('html');
        el.innerHTML = str;

        // this parse will work for http-server and may have to be modified for other
        // servers. Inspect the returned string to determine the proper parsing method
        let list = el.getElementsByTagName("table")[0].getElementsByTagName("a");
        let arr = [];
        for (let i = 0; i < list.length; i++) {
            arr[i] = list[i].innerHTML;
        }
        arr.shift(); // get rid of first result which is the "../" directory reference
        console.log(arr); // this is your list of files (or directories ending in "/")
        return(arr);
    }
}
export function buttonclick()
{
    printToResult("Hello World!");
    Spell.readAll();
}
function printToResult(text: string)
{
    let result = document.getElementById("result")
    if(result){result.innerHTML=text}
}
document.querySelector("#testbutton")?.addEventListener('click', buttonclick);