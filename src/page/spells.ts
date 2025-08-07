import { Spell } from '../spell';
import { addHeader } from '../common';

async function onLoad()
{
    const spells: Spell[] = await Spell.readAll()

    //temp display testing before list is implemented
    let spell = spells[7] as Spell
    updateSelected(spell)

    //list
    let spelllist: HTMLTableElement = document.getElementById("listtable") as HTMLTableElement
    for(let i = 0; i < spells.length; i++)
    {
        let spell: Spell = spells[i]
        spell.listEntry(document, spelllist.querySelector("tbody"), i)
    }

    //add selection event
    $(spelllist).on('click', 'tbody tr', function(event: unknown) {
        if($(this).is('[data-index]'))    //Is Data Row, Not header
        {
            $(this).addClass('table-active').siblings().removeClass('table-active');
            updateSelected(spells[getSelected()])
        }
    });
}

function getSelected(): number
{
    let selectedRow: HTMLTableRowElement = document.querySelector(".table-active") as HTMLTableRowElement
    let index: number = parseInt(selectedRow.dataset.index)
    return index
}

function updateSelected(spell: Spell)
{
    let display: HTMLDivElement = document.getElementById("display") as HTMLDivElement
    spell.display(display)
}

addHeader(document);
document.addEventListener("DOMContentLoaded", () => {onLoad();}) //'await' is not allowed in script root, so let's wait for the HTML content to fully load.