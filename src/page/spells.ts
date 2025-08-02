import { Spell } from '../spell';
import { addHeader } from '../common';

async function onLoad()
{
    const spells: Spell[] = await Spell.readAll()
}

addHeader(document);
document.addEventListener("DOMContentLoaded", () => {onLoad();}) //'await' is not allowed in script root, so let's wait for the HTML content to fully load.