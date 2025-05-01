enum SpellSchools{
        
}
class Spell
{
    level: number
    name: string

    constructor(level: number, name: string)
    {
        this.level = level
        this.name = name
    }
}
function buttonclick()
{
    printToResult("Hello World!");
}
function printToResult(text: string)
{
    let result = document.getElementById("result")
    if(result){result.innerHTML=text}
}