/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Concentration: () => (/* binding */ Concentration),
/* harmony export */   Spell: () => (/* binding */ Spell),
/* harmony export */   SpellComponent: () => (/* binding */ SpellComponent),
/* harmony export */   SpellList: () => (/* binding */ SpellList),
/* harmony export */   SpellSchool: () => (/* binding */ SpellSchool),
/* harmony export */   buttonclick: () => (/* binding */ buttonclick)
/* harmony export */ });
var _a;
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
var Spell = /** @class */ (function () {
    function Spell(level, name, schools, description, lists, castingtime, components, concentration, range, duration, componentdesc) {
        this.schools = [];
        this.lists = [];
        this.components = [];
        this.level = level;
        this.name = name;
        this.schools = schools;
        this.description = description;
        this.lists = lists;
        this.castingtime = castingtime;
        this.components = components;
        this.concentration = concentration;
        this.range = range;
        this.duration = duration;
        this.componentdesc = componentdesc;
    }
    return Spell;
}());

function buttonclick() {
    printToResult("Hello World!");
}
function printToResult(text) {
    var result = document.getElementById("result");
    if (result) {
        result.innerHTML = text;
    }
}
(_a = document.querySelector("#testbutton")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', buttonclick);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

function onLoad() {
    console.log("getformdata onLoad called");
    document.addEventListener("DOMContentLoaded", function () {
        var form = document.querySelector("#form");
        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                var formData = new FormData(form);
                console.log(formData);
                var spell = getSpell(formData);
                downloadObjectAsJson(spell, spell.name);
            });
        }
    });
}
function getSpell(data) {
    var name = data.get("name");
    var level = data.get("level");
    var schools = data.getAll("school");
    var castingtime = data.get("castingtime");
    var range = data.get("range");
    var duration = data.get("duration");
    var concentration = data.get("concentration");
    var components = data.getAll("components");
    var componentdesc = data.get("componentdesc");
    var description = data.get("description");
    var lists = data.getAll("lists");
    var spell = new _main__WEBPACK_IMPORTED_MODULE_0__.Spell(level, name, schools, description, lists, castingtime, components, concentration, range, duration, componentdesc);
    console.log(spell);
    return spell;
}
// Initiates download of given object as a JSON in the client's browser.
// Courtesy of mlimper on StackOverflow: https://stackoverflow.com/a/30800715
function downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
onLoad();

})();

/******/ })()
;