import { Spell } from '../spell';
import { addHeader, getRootURL } from '../common';
import { SpellFilter } from '../spellfilter';

let all_spells: Spell[] = []
let filtered_spells: Spell[] = []
let filter: SpellFilter

async function onLoad()
{
    all_spells = await Spell.readAll()

    //Get URL Parameters
    const paramsString: string = window.location.search;
    const searchParams: URLSearchParams = new URLSearchParams(paramsString);
    const selectedSpellString: string = searchParams.get("spell")
    filter = SpellFilter.fromURL(searchParams)
    console.log(filter)

    //Apply Filters
    filtered_spells = filter.apply(all_spells)

    //Select Initial Spell
    if(selectedSpellString)
    {
        let spell: Spell | null = all_spells.find((element) => element.name == selectedSpellString)
        if(spell)
        {
            updateSelected(spell)
        }else{ //Default, url param invalid.
            console.error("URL Spell Parameter Invalid, Defaulting...")
            updateSelected(all_spells[0])
        }
        
    }else{ //Default, no url param given
        updateSelected(all_spells[0])
    }

    //list
    let spelllist: HTMLTableElement = document.getElementById("listtable") as HTMLTableElement
    for(let i = 0; i < filtered_spells.length; i++)
    {
        let spell: Spell = filtered_spells[i]
        spell.listEntry(document, spelllist.querySelector("tbody"), i)
    }

    //add selection event
    $(spelllist).on('click', 'tbody tr', function(event: unknown) {
        if($(this).is('[data-index]'))    //Is Data Row, Not header
        {
            $(this).addClass('table-active').siblings().removeClass('table-active');
            updateSelected(filtered_spells[getSelected()])
        }
    });
}

// Return the index of the spell row with the "table-active" class
function getSelected(): number
{
    let selectedRow: HTMLTableRowElement = document.querySelector(".table-active") as HTMLTableRowElement
    let index: number = parseInt(selectedRow.dataset.index)
    return index
}

// Select the given spell, displaying it.
function updateSelected(spell: Spell)
{
    // Display
    let display: HTMLDivElement = document.getElementById("display") as HTMLDivElement
    spell.display(display)

    // Update URL
    const url = new URL((getRootURL() + "spells.html") as string);
    url.searchParams.set("spell", spell.name);
    history.pushState({}, "", url);
}

addHeader(document);
document.addEventListener("DOMContentLoaded", () => {onLoad();}) //'await' is not allowed in script root, so let's wait for the HTML content to fully load.