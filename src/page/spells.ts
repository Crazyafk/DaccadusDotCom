import { Spell } from '../spell';
import { addHeader } from '../common';

async function onLoad()
{
    const spells: Spell[] = await Spell.readAll()

    //temp display testing before list is implemented
    let display: HTMLDivElement = document.getElementById("display") as HTMLDivElement
    let spell = spells[0] as Spell
    spell.displayDetailsDHDHDH(display)
}

addHeader(document);
document.addEventListener("DOMContentLoaded", () => {onLoad();}) //'await' is not allowed in script root, so let's wait for the HTML content to fully load.