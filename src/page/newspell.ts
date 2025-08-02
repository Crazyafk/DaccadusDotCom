import { Spell } from '../spell';
import { addFormListener, downloadObjectAsJson } from '../common';

// The Callback used below - unique to Spells.
function spellCallback(data: FormData)
{
    let spell: Spell = Spell.fromFormData(data);
    downloadObjectAsJson(spell, spell.name);
}

// Add Submit logic to Form
addFormListener(document, spellCallback);