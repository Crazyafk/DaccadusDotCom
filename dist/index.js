/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Concentration: () => (/* binding */ Concentration),
/* harmony export */   Spell: () => (/* binding */ Spell),
/* harmony export */   SpellComponent: () => (/* binding */ SpellComponent),
/* harmony export */   SpellList: () => (/* binding */ SpellList),
/* harmony export */   SpellSchool: () => (/* binding */ SpellSchool),
/* harmony export */   buttonclick: () => (/* binding */ buttonclick)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    Spell.readAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dir, example_spell, output, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        dir = './data/spells';
                        return [4 /*yield*/, fetch("../data/spells/A Fresh Point of View.json")];
                    case 1:
                        example_spell = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, example_spell.text()];
                    case 2:
                        output = _b.apply(_a, [_c.sent()]);
                        console.log("read spells");
                        console.log(output);
                        return [2 /*return*/, output];
                }
            });
        });
    };
    // Adapted from https://stackoverflow.com/a/77835274 
    Spell.getDirectory = function (dirname) {
        return __awaiter(this, void 0, void 0, function () {
            var response, str, el, list, arr, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(dirname)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        str = _a.sent();
                        el = document.createElement('html');
                        el.innerHTML = str;
                        list = el.getElementsByTagName("table")[0].getElementsByTagName("a");
                        arr = [];
                        for (i = 0; i < list.length; i++) {
                            arr[i] = list[i].innerHTML;
                        }
                        arr.shift(); // get rid of first result which is the "../" directory reference
                        console.log(arr); // this is your list of files (or directories ending in "/")
                        return [2 /*return*/, (arr)];
                }
            });
        });
    };
    return Spell;
}());

function buttonclick() {
    printToResult("Hello World!");
    Spell.readAll();
}
function printToResult(text) {
    var result = document.getElementById("result");
    if (result) {
        result.innerHTML = text;
    }
}
(_a = document.querySelector("#testbutton")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', buttonclick);

/******/ })()
;