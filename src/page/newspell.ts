import { Spell } from '../spell';
import { addFormListener, downloadObjectAsJson } from '../formhandler';

function spellCallback(data: FormData)
{
    let spell: Spell = Spell.fromFormData(data);
    downloadObjectAsJson(spell, spell.name);
}

addFormListener(document, spellCallback);