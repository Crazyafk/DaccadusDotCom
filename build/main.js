"use strict";
var SpellSchool;
(function (SpellSchool) {
    SpellSchool[SpellSchool["Abjuration"] = 0] = "Abjuration";
    SpellSchool[SpellSchool["Arcanomancy"] = 1] = "Arcanomancy";
    SpellSchool[SpellSchool["Astromancy"] = 2] = "Astromancy";
    SpellSchool[SpellSchool["Conjuration"] = 3] = "Conjuration";
    SpellSchool[SpellSchool["Chronurgy"] = 4] = "Chronurgy";
    SpellSchool[SpellSchool["Divination"] = 5] = "Divination";
    SpellSchool[SpellSchool["Enchantment"] = 6] = "Enchantment";
    SpellSchool[SpellSchool["Evocation"] = 7] = "Evocation";
    SpellSchool[SpellSchool["Haemocraft"] = 8] = "Haemocraft";
    SpellSchool[SpellSchool["Illusion"] = 9] = "Illusion";
    SpellSchool[SpellSchool["Mythcraft"] = 10] = "Mythcraft";
    SpellSchool[SpellSchool["Necromancy"] = 11] = "Necromancy";
    SpellSchool[SpellSchool["Technomancy"] = 12] = "Technomancy";
    SpellSchool[SpellSchool["Transmutation"] = 13] = "Transmutation";
})(SpellSchool || (SpellSchool = {}));
var SpellList;
(function (SpellList) {
    SpellList[SpellList["Artificer"] = 0] = "Artificer";
    SpellList[SpellList["Bloodbound"] = 1] = "Bloodbound";
    SpellList[SpellList["Cleric"] = 2] = "Cleric";
    SpellList[SpellList["Paladin"] = 3] = "Paladin";
    SpellList[SpellList["Psycaster"] = 4] = "Psycaster";
    SpellList[SpellList["SpellSword"] = 5] = "SpellSword";
    SpellList[SpellList["Wizard"] = 6] = "Wizard";
})(SpellList || (SpellList = {}));
var SpellComponent;
(function (SpellComponent) {
    SpellComponent[SpellComponent["F"] = 0] = "F";
    SpellComponent[SpellComponent["Feq"] = 1] = "Feq";
    SpellComponent[SpellComponent["V"] = 2] = "V";
    SpellComponent[SpellComponent["S"] = 3] = "S";
    SpellComponent[SpellComponent["S2"] = 4] = "S2";
    SpellComponent[SpellComponent["M"] = 5] = "M";
    SpellComponent[SpellComponent["Mc"] = 6] = "Mc";
})(SpellComponent || (SpellComponent = {}));
var Concentration;
(function (Concentration) {
    Concentration[Concentration["None"] = 0] = "None";
    Concentration[Concentration["Half"] = 1] = "Half";
    Concentration[Concentration["Full"] = 2] = "Full";
})(Concentration || (Concentration = {}));
class Spell {
    constructor(level, name, school, description, lists, castingtime, components, concentration, range, duration, componentdesc) {
        this.schools = [];
        this.lists = [];
        this.components = [];
        this.level = level;
        this.name = name;
        this.schools = school;
        this.description = description;
        this.lists = lists;
        this.castingtime = castingtime;
        this.components = components;
        this.concentration = concentration;
        this.range = range;
        this.duration = duration;
        this.componentdesc = componentdesc;
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
