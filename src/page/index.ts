import {Spell} from '../spell'
import { addHeader } from '../common';

// The Contents of this page are currently for testing purposes only. Documentation will not be present.
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
addHeader(document);
document.querySelector("#testbutton")?.addEventListener('click', buttonclick);