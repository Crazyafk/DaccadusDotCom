import {Spell} from './spell'

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