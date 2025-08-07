import { Spell } from '../spell';
import { addHeader } from '../common';

async function onLoad()
{
    const spells: Spell[] = await Spell.readAll()

    //temp display testing before list is implemented
    let display: HTMLDivElement = document.getElementById("display") as HTMLDivElement
    let spell = spells[7] as Spell
    spell.display(display)

    //list
    let spelllist: HTMLTableElement = document.getElementById("listtable") as HTMLTableElement
    for(let i = 0; i < spells.length; i++)
    {
        let spell: Spell = spells[i]
        spell.listEntry(document, spelllist.querySelector("tbody"))
    }

    $(spelllist).on('click', 'tbody tr', function(event: unknown) {
        $(this).addClass('table-active').siblings().removeClass('table-active');
    });
}

addHeader(document);
document.addEventListener("DOMContentLoaded", () => {onLoad();}) //'await' is not allowed in script root, so let's wait for the HTML content to fully load.