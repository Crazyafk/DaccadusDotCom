/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFormListener: () => (/* binding */ addFormListener),
/* harmony export */   addHeader: () => (/* binding */ addHeader),
/* harmony export */   downloadObjectAsJson: () => (/* binding */ downloadObjectAsJson),
/* harmony export */   getRootURL: () => (/* binding */ getRootURL)
/* harmony export */ });
// This File contains common functions used for All types of applications on the site.
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
// Find the Root Project URL for the current environment. Returns URL, ending with '/'.
function getRootURL() {
    var full_url = window.location.href;
    var possible_roots = [
        'http://127.0.0.1:5500/',
        'https://crazyafk.github.io/DaccadusDotCom/'
    ];
    for (var _i = 0, possible_roots_1 = possible_roots; _i < possible_roots_1.length; _i++) {
        var root = possible_roots_1[_i];
        if (full_url.indexOf(root) !== -1) //Slightly more verbose, older solution for greater compatability
         {
            return (root);
        }
    }
    throw Error("Root URL not found. If you have changed the site URL or are using a different test environment," +
        " you will need to update the list of possible roots in common.ts.getRootURL()");
}
// Gets header from header.html and adds it to id #addheader div in the given document.
function addHeader(document) {
    return __awaiter(this, void 0, void 0, function () {
        var root, headerdocstring, headerdoc, header, urls, i, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    root = getRootURL();
                    return [4 /*yield*/, fetch(root + 'header.html')];
                case 1: return [4 /*yield*/, ((_a.sent()).text())];
                case 2:
                    headerdocstring = _a.sent();
                    headerdoc = new DOMParser().parseFromString(headerdocstring, "text/html");
                    header = headerdoc.getElementById('header');
                    urls = header.getElementsByClassName("replace-root-url");
                    for (i = 0; i < urls.length; i++) {
                        url = urls[i];
                        url.setAttribute("href", url.getAttribute("href").replace("root", root));
                    }
                    document.getElementById('addheader').appendChild(header);
                    return [2 /*return*/];
            }
        });
    });
}
// Creates FormData object when Form Submitted. (using Listeners)
// Passes it to the Callback function for page-specific processing.
function addFormListener(document, callback) {
    document.addEventListener("DOMContentLoaded", function () {
        var form = document.querySelector("#form");
        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                var formData = new FormData(form);
                console.log(formData);
                callback(formData);
            });
        }
    });
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


/***/ }),
/* 2 */,
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Concentration: () => (/* binding */ Concentration),
/* harmony export */   Spell: () => (/* binding */ Spell),
/* harmony export */   SpellComponent: () => (/* binding */ SpellComponent),
/* harmony export */   SpellList: () => (/* binding */ SpellList),
/* harmony export */   SpellSchool: () => (/* binding */ SpellSchool)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
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

var SpellSchool;
(function (SpellSchool) {
    SpellSchool["Abjuration"] = "Abjuration";
    SpellSchool["Arcanomancy"] = "Arcanomancy";
    SpellSchool["Astromancy"] = "Astromancy";
    SpellSchool["Conjuration"] = "Conjuration";
    SpellSchool["Chronurgy"] = "Chronurgy";
    SpellSchool["Divination"] = "Divination";
    SpellSchool["Enchantment"] = "Enchantment";
    SpellSchool["Evocation"] = "Evocation";
    SpellSchool["Haemocraft"] = "Haemocraft";
    SpellSchool["Illusion"] = "Illusion";
    SpellSchool["Mythcraft"] = "Mythcraft";
    SpellSchool["Necromancy"] = "Necromancy";
    SpellSchool["Technomancy"] = "Technomancy";
    SpellSchool["Transmutation"] = "Transmutation";
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
    // Standard Constructor, using all Parameters. all optional to make empty object creation possible.
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
    // FormData -> Spell Conversion Function
    Spell.fromFormData = function (data) {
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
        var spell = new Spell(level, name, schools, description, lists, castingtime, components, concentration, range, duration, componentdesc);
        console.log(spell);
        return spell;
    };
    // Reads All Spells in /data/spells/ directory. 
    // This is done using an index of files automatically generated by a github workflow activated whenever a .json file is pushed.
    Spell.readAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dir, output, index, file_list, _i, file_list_1, file_raw, file, spell_response, spell, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        dir = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getRootURL)() + 'data/spells/';
                        output = [];
                        return [4 /*yield*/, fetch(dir + 'index.html')];
                    case 1: return [4 /*yield*/, (_c.sent()).text()];
                    case 2:
                        index = _c.sent();
                        file_list = index.split('\n');
                        _i = 0, file_list_1 = file_list;
                        _c.label = 3;
                    case 3:
                        if (!(_i < file_list_1.length)) return [3 /*break*/, 7];
                        file_raw = file_list_1[_i];
                        file = file_raw.replace(/[\r\n]+/gm, "");
                        if (file == "index.html" || file == "") {
                            return [3 /*break*/, 7];
                        } //Remove invalid entries from list
                        return [4 /*yield*/, fetch(dir + file)]; //Fetch
                    case 4:
                        spell_response = _c.sent() //Fetch
                        ;
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, spell_response.text()];
                    case 5:
                        spell = _b.apply(_a, [_c.sent()]);
                        spell = Object.assign(new Spell(), spell); //Reform object, to get around issue where deserialized json objects have no methods
                        output.push(spell);
                        _c.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 3];
                    case 7:
                        console.log("read spells");
                        console.log(output);
                        return [2 /*return*/, output];
                }
            });
        });
    };
    // Insert a spell's details into the #display div given. the div must have certain child elements for this to work.
    Spell.prototype.display = function (displayElement) {
        //Simple Properties without complex logic
        displayElement.querySelector("#name").innerHTML = this.name;
        displayElement.querySelector("#castingtime").innerHTML = this.castingtime;
        displayElement.querySelector("#range").innerHTML = this.range;
        displayElement.querySelector("#duration").innerHTML = this.duration;
        displayElement.querySelector("#description").innerHTML = this.description;
        //Tag
        var schoolstext = "";
        for (var i = 0; i < this.schools.length; i++) {
            var isLast = i == this.schools.length - 1;
            schoolstext += this.schools[i];
            if (!isLast) {
                schoolstext += ", ";
            }
        }
        var tag = "";
        if (this.level == 0) {
            tag = schoolstext + " Cantrip";
            console.log("cantrip");
        }
        else if (this.level == 1) {
            tag = "1st level " + schoolstext;
        }
        else if (this.level == 2) {
            tag = "2nd level " + schoolstext;
        }
        else if (this.level == 3) {
            tag = "3rd level " + schoolstext;
        }
        else {
            tag = this.level + "th level " + schoolstext;
        }
        displayElement.querySelector("#tag").innerHTML = tag;
    };
    return Spell;
}());



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
/* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


// The Callback used below - unique to Spells.
function spellCallback(data) {
    var spell = _spell__WEBPACK_IMPORTED_MODULE_0__.Spell.fromFormData(data);
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.downloadObjectAsJson)(spell, spell.name);
}
// Add Submit logic to Form
(0,_common__WEBPACK_IMPORTED_MODULE_1__.addFormListener)(document, spellCallback);

})();

/******/ })()
;