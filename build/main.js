"use strict";
var SpellSchools;
(function (SpellSchools) {
})(SpellSchools || (SpellSchools = {}));
class Spell {
    constructor(level, name) {
        this.level = level;
        this.name = name;
    }
}
function buttonclick() {
    printToResult("Hello World!");
}
function printToResult(text) {
    let result = document.getElementById("result");
    if (result) {
        result.innerHTML = text;
    }
}
