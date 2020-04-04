(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-root\">\n  <app-back-img></app-back-img>\n  <app-header></app-header>\n  <div class=\"container cards-container\">\n    <app-person-card></app-person-card>\n    <app-resume-summary></app-resume-summary>\n    <app-skills-card></app-skills-card>\n    <app-timeline></app-timeline>\n    <app-demos></app-demos>\n    <app-interests-card></app-interests-card>\n    <app-page-card></app-page-card>\n  </div>\n  <app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/back-img/back-img.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/back-img/back-img.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-back-img\" [ngClass]=\"'app-back-img--'+bgNo\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/demo-cards/demo-cards.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/demo-cards/demo-cards.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"demos-container\" appScrollSection=\"demos\">\n  <div class=\"demos__title\">{{ 'Demos_Title' | translate }}</div>\n  <div class=\"demo-cards-container\">\n    <div class=\"demo-card-container\" *ngFor=\"let item of demoItems;\">\n      <a [href]=\"item.url\" target=\"_blank\">\n        <div class=\"demo-card\">\n          <div class=\"demo-card-image\" [ngStyle]=\"{'background-image': 'url(./assets/images/'+item.image+'.png)'}\"></div>\n          <div class=\"demo-card-description\">{{ item.descriptionTranslationKey | translate }}</div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/interests-card/interests-card.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/interests-card/interests-card.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"interests-card-container\" appScrollSection=\"interests\">\n  <div class=\"interests-card__title\">{{ 'Interests_Title' | translate }}</div>\n  <div class=\"interests-card\">\n    <div class=\"interests-card__interests\">\n      <div class=\"interests-card__interest\" [class.interests-card__interest--active]=\"activeItem === item\" *ngFor=\"let item of interestItems; let index = index\" (click)=\"toggle(item, index)\">\n        <div class=\"interests-card__interest-icon\">\n          <i class=\"{{item.iconPrefix}} {{item.iconPrefix}}-{{item.iconName}}\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"interests-card__interest-description interests-card__interest-description--{{activeIndex}}\" *ngIf=\"activeItem\">\n      {{ activeItem.description | translate }}\n      <span class=\"interests-card__interest-description-close\" (click)=\"toggle(null, null)\"><i class=\"fa fa-close\"></i></span>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/page-card/page-card.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/page-card/page-card.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-card-container\" appScrollSection=\"page\">\n  <div class=\"page-card__title\">{{ 'AboutPage_Title' | translate }}</div>\n  <div class=\"page-card\">\n    <div class=\"page-card__description\">{{ 'AboutPage_Description' | translate }}</div>\n  </div>\n  <div class=\"page-card__icons\">\n    <a class=\"page-card__icon-link\" *ngFor=\"let item of brandItems;\" target=\"_blank\" [href]=\"item.url\" [title]=\"item.title\">\n      <div class=\"page-card__icon\" [style.background-image]=\"'url(/assets/logos/'+item.iconName+'.svg)'\"></div>\n    </a>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/person-card/person-card.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/person-card/person-card.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"person-card-container\" appScrollSection=\"about\">\n  <div class=\"person-card\">\n    <div class=\"row person-card__content\">\n      <div class=\"col-sm-4\">\n        <div class=\"person-card__photo hidden-xs\"></div>\n        <div class=\"person-card__photo person-card__photo--large visible-xs-block\"></div>\n      </div>\n      <div class=\"col-sm-8\">\n          <div class=\"person-card__info-header\">\n            <div class=\"person-card__greeting\">{{ 'PersonInfo_Hello' | translate }}!</div>\n            <div class=\"person-card__name\">\n              <span class=\"light\">{{ 'PersonInfo_IAm' | translate }}</span>\n              <strong class=\"stronger\">Olof Landahl</strong></div>\n            <div class=\"person-card__title\">{{ 'PersonInfo_Developer' | translate }}</div>\n          </div>\n          <ul class=\"person-card__info-items\">\n            <li class=\"row person-card__info-item\" *ngFor=\"let item of infoItems;\">\n              <div class=\"col-sm-4 person-card__info-item-left\">{{ item.key | translate }}</div>\n              <div class=\"col-sm-8 person-card__info-item-right\">{{item.value}}</div>\n            </li>\n          </ul>\n      </div>\n    </div>\n    <div class=\"person-card__footer\">\n      <app-social-links [theme]=\"'color'\"></app-social-links>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/skills-card/skills-card.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/skills-card/skills-card.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"skills-card-container\" appScrollSection=\"skills\">\n\t<div class=\"skills-card__title\">{{ 'Skills_Title' | translate }}</div>\n  \n\t<div class=\"skills-card\">\n\t  <div class=\"row skills-card__skills\">\n\t    <div class=\"col-md-6 skill\" *ngFor=\"let item of skillItems\">\n\t      <div class=\"skill__title\">{{item.key}}</div>\n\t      <div class=\"skill__bar-container\">\n\t        <div class=\"skill__bar skill__bar--full\"></div>\n\t        <div class=\"skill__bar skill__bar--fill\" [style.width]=\"item.value+'%'\"></div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/timeline/timeline.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/timeline/timeline.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"timeline\" appScrollSection=\"experience\">\n  <div class=\"timeline__title\">{{ 'Experience_Title' | translate }}</div>\n  <div class=\"timeline-cards-container\">\n    <div class=\"timeline-card-container\" *ngFor=\"let item of timelineItems; let odd = odd; let even = even;\" [ngClass]=\"{ 'timeline-card-container--left': even, 'timeline-card-container--right': odd }\">\n      <span class=\"timeline__dot\"></span>\n      <a [href]=\"item.url\" target=\"_blank\">\n        <div class=\"timeline-card\">\n          <span class=\"timeline-card__arrow\"></span>\n          <div class=\"timeline-card__years\">\n            <span>{{item.startYear}}</span>\n            <span [hidden]=\"!item.endYear || item.startYear === item.endYear\">- {{item.endYear}}</span>\n          </div>\n          <div class=\"timeline-card__logo timeline-card__logo--{{item.logo}}\" ></div>\n          <div class=\"timeline-card__city\">{{item.city}}</div>\n          <div class=\"timeline-card__title\">{{item.title}}</div>\n          <div class=\"timeline-card__subtitle\">{{item.subTitleTranslationKey | translate}}</div>\n          <div class=\"timeline-card__description\">{{item.descriptionTranslationKey | translate}}</div>\n          <div class=\"timeline-card__technologies\">\n            <span class=\"timeline-card__technology\" *ngFor=\"let t of item.technologies;\" [ngClass]=\"{ 'timeline-card__technology--selected': selectedTech === t }\" (click)=\"toggleTechnology(t)\">{{t}}</span>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n  <app-social-links></app-social-links>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-header\" [class.app-header--init]=\"isInit\" [class.app-header--sticky]=\"isSticky\" [class.app-header--hide-sticky]=\"stickyIsHidden\" (appClickOutside)=\"closeMenu()\">\n  <div class=\"app-header__title hidden-sm\">oloflandahl.com</div>\n  <nav class=\"app-header__navbar\">\n    <div class=\"app-header__navbar-icon\" (click)=\"openMenu()\">\n      <i class=\"fa fa-bars\"></i>\n    </div>\n    <ul class=\"navbar\" [class.navbar--open]=\"isMenuOpen\">\n      <li class=\"navbar__item navbar__item--close-icon\" (click)=\"closeMenu()\"><i class=\"fa fa-close\"></i></li>\n      <li class=\"navbar__item\" [class.navbar__item--active]=\"item.isActive\" *ngFor=\"let item of items;\" pageScroll [href]=\"'#'+item.id\" (click)=\"select(item)\">\n        <span>{{ item.translationKey | translate }}</span>\n      </li>\n      <li class=\"navbar__item navbar__item--box\" (click)=\"switchLanguage()\">\n        <span title=\"{{ 'SwitchLanguage_Tooltip' | translate }}\"><img src=\"assets/logos/{{currentLang}}.png\" /></span>\n      </li>\n    </ul>\n  </nav>\n</div>\n<div class=\"app-header-sticky-placeholder\" [class.app-header-sticky-placeholder--visible]=\"isSticky && !stickyIsHidden\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume-summary/resume-summary.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume-summary/resume-summary.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"resume-summary\">\n  <a class=\"resume-summary__link\" href=\"./assets/{{'ResumeSummary_Filename' | translate}}\" target=\"_blank\">{{'ResumeSummary_ButtonLabel' | translate}}</a>\n  <div class=\"resume-summary__text\">{{'ResumeSummary_Text' | translate}}</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social-links/social-links.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social-links/social-links.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"social-links social-links--{{theme}}\">\n  <li *ngFor=\"let item of socialLinkItems;\" class=\"social-links__link\">\n    <a href=\"{{item.url}}\" (click)=\"item.onClick($event)\" [target]=\"item.openOnPage ? '_self' : '_blank'\" title=\"{{ item.title | translate }}\">\n      <i class=\"fa fa-{{item.iconName}}\"></i>\n    </a>\n  </li>\n</ul>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 300;\n  font-style: normal;\n  src: url('OpenSans-Light.eot');\n  src: url('OpenSans-Light.eot?#iefix') format('embedded-opentype'), url('OpenSans-Light.woff2') format('woff2'), url('OpenSans-Light.woff') format('woff'), url('OpenSans-Light.ttf') format('truetype'), url('OpenSans-Light.svg#OpenSansLight') format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 300;\n  font-style: italic;\n  src: url('OpenSans-LightItalic.eot');\n  src: url('OpenSans-LightItalic.eot?#iefix') format('embedded-opentype'), url('OpenSans-LightItalic.woff2') format('woff2'), url('OpenSans-LightItalic.woff') format('woff'), url('OpenSans-LightItalic.ttf') format('truetype'), url('OpenSans-LightItalic.svg#OpenSansLightItalic') format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: normal;\n  font-style: normal;\n  src: url('OpenSans-Regular.eot');\n  src: url('OpenSans-Regular.eot?#iefix') format('embedded-opentype'), url('OpenSans-Regular.woff2') format('woff2'), url('OpenSans-Regular.woff') format('woff'), url('OpenSans-Regular.ttf') format('truetype'), url('OpenSans-Regular.svg#OpenSansRegular') format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: normal;\n  font-style: italic;\n  src: url('OpenSans-Italic.eot');\n  src: url('OpenSans-Italic.eot?#iefix') format('embedded-opentype'), url('OpenSans-Italic.woff2') format('woff2'), url('OpenSans-Italic.woff') format('woff'), url('OpenSans-Italic.ttf') format('truetype'), url('OpenSans-Italic.svg#OpenSansItalic') format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 600;\n  font-style: normal;\n  src: url('OpenSans-Semibold.eot');\n  src: url('OpenSans-Semibold.eot?#iefix') format('embedded-opentype'), url('OpenSans-Semibold.woff2') format('woff2'), url('OpenSans-Semibold.woff') format('woff'), url('OpenSans-Semibold.ttf') format('truetype'), url('OpenSans-Semibold.svg#OpenSansSemibold') format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 600;\n  font-style: italic;\n  src: url('OpenSans-SemiboldItalic.eot');\n  src: url('OpenSans-SemiboldItalic.eot?#iefix') format('embedded-opentype'), url('OpenSans-SemiboldItalic.woff2') format('woff2'), url('OpenSans-SemiboldItalic.woff') format('woff'), url('OpenSans-SemiboldItalic.ttf') format('truetype'), url('OpenSans-SemiboldItalic.svg#OpenSansSemiboldItalic') format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: bold;\n  font-style: normal;\n  src: url('OpenSans-Bold.eot');\n  src: url('OpenSans-Bold.eot?#iefix') format('embedded-opentype'), url('OpenSans-Bold.woff2') format('woff2'), url('OpenSans-Bold.woff') format('woff'), url('OpenSans-Bold.ttf') format('truetype'), url('OpenSans-Bold.svg#OpenSansBold') format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: bold;\n  font-style: italic;\n  src: url('OpenSans-BoldItalic.eot');\n  src: url('OpenSans-BoldItalic.eot?#iefix') format('embedded-opentype'), url('OpenSans-BoldItalic.woff2') format('woff2'), url('OpenSans-BoldItalic.woff') format('woff'), url('OpenSans-BoldItalic.ttf') format('truetype'), url('OpenSans-BoldItalic.svg#OpenSansBoldItalic') format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 800;\n  font-style: normal;\n  src: url('OpenSans-ExtraBold.eot');\n  src: url('OpenSans-ExtraBold.eot?#iefix') format('embedded-opentype'), url('OpenSans-ExtraBold.woff2') format('woff2'), url('OpenSans-ExtraBold.woff') format('woff'), url('OpenSans-ExtraBold.ttf') format('truetype'), url('OpenSans-ExtraBold.svg#OpenSansExtrabold') format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 800;\n  font-style: italic;\n  src: url('OpenSans-ExtraBoldItalic.eot');\n  src: url('OpenSans-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'), url('OpenSans-ExtraBoldItalic.woff2') format('woff2'), url('OpenSans-ExtraBoldItalic.woff') format('woff'), url('OpenSans-ExtraBoldItalic.ttf') format('truetype'), url('OpenSans-ExtraBoldItalic.svg#OpenSansExtraboldItalic') format('svg');\n}\n.cards-container {\n  max-width: 970px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1hbmltYXRpb24ubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL29wZW4tc2Fucy5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsU0FBUztBQUNULFlBQVk7QUFDWixlQUFlO0FBQ2YsZUFBZTtBQ2dCZjtFQUNFOztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURiRjtFQ2dCQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEYkY7RUNnQkE7OztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURaRjtFQ2VBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURaRjtBQUNGO0FDSEE7RUFDRTs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEYkY7RUNnQkE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRGJGO0VDZ0JBOzs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEWkY7RUNlQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEWkY7QUFDRjtBQ2VBO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VEYkY7RUNnQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEZEY7QUFDRjtBQ09BO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VEYkY7RUNnQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEZEY7QUFDRjtBQ2lCQTtFQUNFO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGZGO0VDa0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGhCRjtBQUNGO0FDU0E7RUFDRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURmRjtFQ2tCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURoQkY7QUFDRjtBRXRDQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOFBBQUE7QUZ3Q0Y7QUVqQ0E7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtTQUFBO0FGbUNGO0FFNUJBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwUUFBQTtBRjhCRjtBRXZCQTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb1FBQUE7QUZ5QkY7QUVsQkE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdSQUFBO0FGb0JGO0FFYkE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG9UQUFBO0FGZUY7QUVSQTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd1BBQUE7QUZVRjtBRUhBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0UkFBQTtBRktGO0FFRUE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNSQUFBO0FGQUY7QUVPQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMFRBQUE7QUZMRjtBRzNHQTtFQUNFLGdCQUFBO0FINkdGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2l6ZSAqL1xuLyogQ29sb3JzICovXG4vKiBUZXh0ICovXG4vKiBTcGFjaW5nICovXG4vKiBaIHBvc2l0aW9uICovXG4vKiBUcmFuc2l0aW9uICovXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLFxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgMjAlLFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuICAzMCUsXG4gIDUwJSxcbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG4gIDQwJSxcbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0xpZ2h0L09wZW5TYW5zLUxpZ2h0LmVvdCcpO1xuICBzcmM6IHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9MaWdodC9PcGVuU2Fucy1MaWdodC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvTGlnaHQvT3BlblNhbnMtTGlnaHQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9MaWdodC9PcGVuU2Fucy1MaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9MaWdodC9PcGVuU2Fucy1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9MaWdodC9PcGVuU2Fucy1MaWdodC5zdmcjT3BlblNhbnNMaWdodCcpIGZvcm1hdCgnc3ZnJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHNyYzogdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0xpZ2h0SXRhbGljL09wZW5TYW5zLUxpZ2h0SXRhbGljLmVvdCcpO1xuICBzcmM6IHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9MaWdodEl0YWxpYy9PcGVuU2Fucy1MaWdodEl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvTGlnaHRJdGFsaWMvT3BlblNhbnMtTGlnaHRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9MaWdodEl0YWxpYy9PcGVuU2Fucy1MaWdodEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9MaWdodEl0YWxpYy9PcGVuU2Fucy1MaWdodEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9MaWdodEl0YWxpYy9PcGVuU2Fucy1MaWdodEl0YWxpYy5zdmcjT3BlblNhbnNMaWdodEl0YWxpYycpIGZvcm1hdCgnc3ZnJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL1JlZ3VsYXIvT3BlblNhbnMtUmVndWxhci5lb3QnKTtcbiAgc3JjOiB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvUmVndWxhci9PcGVuU2Fucy1SZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9SZWd1bGFyL09wZW5TYW5zLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9SZWd1bGFyL09wZW5TYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvUmVndWxhci9PcGVuU2Fucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL1JlZ3VsYXIvT3BlblNhbnMtUmVndWxhci5zdmcjT3BlblNhbnNSZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgc3JjOiB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvSXRhbGljL09wZW5TYW5zLUl0YWxpYy5lb3QnKTtcbiAgc3JjOiB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvSXRhbGljL09wZW5TYW5zLUl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvSXRhbGljL09wZW5TYW5zLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0l0YWxpYy9PcGVuU2Fucy1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvSXRhbGljL09wZW5TYW5zLUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9JdGFsaWMvT3BlblNhbnMtSXRhbGljLnN2ZyNPcGVuU2Fuc0l0YWxpYycpIGZvcm1hdCgnc3ZnJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL1NlbWlib2xkL09wZW5TYW5zLVNlbWlib2xkLmVvdCcpO1xuICBzcmM6IHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9TZW1pYm9sZC9PcGVuU2Fucy1TZW1pYm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvU2VtaWJvbGQvT3BlblNhbnMtU2VtaWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9TZW1pYm9sZC9PcGVuU2Fucy1TZW1pYm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9TZW1pYm9sZC9PcGVuU2Fucy1TZW1pYm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9TZW1pYm9sZC9PcGVuU2Fucy1TZW1pYm9sZC5zdmcjT3BlblNhbnNTZW1pYm9sZCcpIGZvcm1hdCgnc3ZnJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHNyYzogdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL1NlbWlib2xkSXRhbGljL09wZW5TYW5zLVNlbWlib2xkSXRhbGljLmVvdCcpO1xuICBzcmM6IHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9TZW1pYm9sZEl0YWxpYy9PcGVuU2Fucy1TZW1pYm9sZEl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvU2VtaWJvbGRJdGFsaWMvT3BlblNhbnMtU2VtaWJvbGRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9TZW1pYm9sZEl0YWxpYy9PcGVuU2Fucy1TZW1pYm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9TZW1pYm9sZEl0YWxpYy9PcGVuU2Fucy1TZW1pYm9sZEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9TZW1pYm9sZEl0YWxpYy9PcGVuU2Fucy1TZW1pYm9sZEl0YWxpYy5zdmcjT3BlblNhbnNTZW1pYm9sZEl0YWxpYycpIGZvcm1hdCgnc3ZnJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9Cb2xkL09wZW5TYW5zLUJvbGQuZW90Jyk7XG4gIHNyYzogdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0JvbGQvT3BlblNhbnMtQm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvQm9sZC9PcGVuU2Fucy1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvQm9sZC9PcGVuU2Fucy1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0JvbGQvT3BlblNhbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9Cb2xkL09wZW5TYW5zLUJvbGQuc3ZnI09wZW5TYW5zQm9sZCcpIGZvcm1hdCgnc3ZnJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBzcmM6IHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9Cb2xkSXRhbGljL09wZW5TYW5zLUJvbGRJdGFsaWMuZW90Jyk7XG4gIHNyYzogdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0JvbGRJdGFsaWMvT3BlblNhbnMtQm9sZEl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvQm9sZEl0YWxpYy9PcGVuU2Fucy1Cb2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvQm9sZEl0YWxpYy9PcGVuU2Fucy1Cb2xkSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0JvbGRJdGFsaWMvT3BlblNhbnMtQm9sZEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9Cb2xkSXRhbGljL09wZW5TYW5zLUJvbGRJdGFsaWMuc3ZnI09wZW5TYW5zQm9sZEl0YWxpYycpIGZvcm1hdCgnc3ZnJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0V4dHJhQm9sZC9PcGVuU2Fucy1FeHRyYUJvbGQuZW90Jyk7XG4gIHNyYzogdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0V4dHJhQm9sZC9PcGVuU2Fucy1FeHRyYUJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0V4dHJhQm9sZC9PcGVuU2Fucy1FeHRyYUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9FeHRyYUJvbGQvT3BlblNhbnMtRXh0cmFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0V4dHJhQm9sZC9PcGVuU2Fucy1FeHRyYUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvRXh0cmFCb2xkL09wZW5TYW5zLUV4dHJhQm9sZC5zdmcjT3BlblNhbnNFeHRyYWJvbGQnKSBmb3JtYXQoJ3N2ZycpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBzcmM6IHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9FeHRyYUJvbGRJdGFsaWMvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLmVvdCcpO1xuICBzcmM6IHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9FeHRyYUJvbGRJdGFsaWMvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9FeHRyYUJvbGRJdGFsaWMvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy4uLy4uL25vZGVfbW9kdWxlcy9ucG0tZm9udC1vcGVuLXNhbnMvZm9udHMvRXh0cmFCb2xkSXRhbGljL09wZW5TYW5zLUV4dHJhQm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnLi4vLi4vbm9kZV9tb2R1bGVzL25wbS1mb250LW9wZW4tc2Fucy9mb250cy9FeHRyYUJvbGRJdGFsaWMvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcuLi8uLi9ub2RlX21vZHVsZXMvbnBtLWZvbnQtb3Blbi1zYW5zL2ZvbnRzL0V4dHJhQm9sZEl0YWxpYy9PcGVuU2Fucy1FeHRyYUJvbGRJdGFsaWMuc3ZnI09wZW5TYW5zRXh0cmFib2xkSXRhbGljJykgZm9ybWF0KCdzdmcnKTtcbn1cbi5jYXJkcy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk3MHB4O1xufVxuIiwiXG4uc2hha2UtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IHNoYWtlIDFzIGN1YmljLWJlemllciguMzYsLjA3LC4xOSwuOTcpIGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuQG1vdmUtYW5pbWF0aW9uLXN0YXJ0OiAyMDAlO1xuQG1vdmUtYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcblxuLmZyb20tbGVmdC1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogZnJvbUxlZnQgQG1vdmUtYW5pbWF0aW9uLWR1cmF0aW9uIGVhc2Utb3V0IGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLUBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG59XG5cbi5mcm9tLXJpZ2h0LWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBmcm9tUmlnaHQgQG1vdmUtYW5pbWF0aW9uLWR1cmF0aW9uIGVhc2Utb3V0IGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDEwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICB9XG4gIFxuICAyMCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG5cbiAgMzAlLCA1MCUsIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcbiAgfVxuXG4gIDQwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC1AbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZyb21SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59IiwiQEZvbnRQYXRoT3BlblNhbnM6IFwiLi9mb250c1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0xpZ2h0L09wZW5TYW5zLUxpZ2h0LmVvdCcpO1xuICBzcmM6IHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9MaWdodC9PcGVuU2Fucy1MaWdodC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9MaWdodC9PcGVuU2Fucy1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vTGlnaHQvT3BlblNhbnMtTGlnaHQud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9MaWdodC9PcGVuU2Fucy1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0xpZ2h0L09wZW5TYW5zLUxpZ2h0LnN2ZyNPcGVuU2Fuc0xpZ2h0JykgZm9ybWF0KCdzdmcnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBzcmM6IHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9MaWdodEl0YWxpYy9PcGVuU2Fucy1MaWdodEl0YWxpYy5lb3QnKTtcbiAgc3JjOiB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vTGlnaHRJdGFsaWMvT3BlblNhbnMtTGlnaHRJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vTGlnaHRJdGFsaWMvT3BlblNhbnMtTGlnaHRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0xpZ2h0SXRhbGljL09wZW5TYW5zLUxpZ2h0SXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vTGlnaHRJdGFsaWMvT3BlblNhbnMtTGlnaHRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9MaWdodEl0YWxpYy9PcGVuU2Fucy1MaWdodEl0YWxpYy5zdmcjT3BlblNhbnNMaWdodEl0YWxpYycpIGZvcm1hdCgnc3ZnJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vUmVndWxhci9PcGVuU2Fucy1SZWd1bGFyLmVvdCcpO1xuICBzcmM6IHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9SZWd1bGFyL09wZW5TYW5zLVJlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vUmVndWxhci9PcGVuU2Fucy1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9SZWd1bGFyL09wZW5TYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9SZWd1bGFyL09wZW5TYW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9SZWd1bGFyL09wZW5TYW5zLVJlZ3VsYXIuc3ZnI09wZW5TYW5zUmVndWxhcicpIGZvcm1hdCgnc3ZnJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgc3JjOiB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vSXRhbGljL09wZW5TYW5zLUl0YWxpYy5lb3QnKTtcbiAgc3JjOiB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vSXRhbGljL09wZW5TYW5zLUl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9JdGFsaWMvT3BlblNhbnMtSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9JdGFsaWMvT3BlblNhbnMtSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vSXRhbGljL09wZW5TYW5zLUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0l0YWxpYy9PcGVuU2Fucy1JdGFsaWMuc3ZnI09wZW5TYW5zSXRhbGljJykgZm9ybWF0KCdzdmcnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9TZW1pYm9sZC9PcGVuU2Fucy1TZW1pYm9sZC5lb3QnKTtcbiAgc3JjOiB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vU2VtaWJvbGQvT3BlblNhbnMtU2VtaWJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vU2VtaWJvbGQvT3BlblNhbnMtU2VtaWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L1NlbWlib2xkL09wZW5TYW5zLVNlbWlib2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vU2VtaWJvbGQvT3BlblNhbnMtU2VtaWJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9TZW1pYm9sZC9PcGVuU2Fucy1TZW1pYm9sZC5zdmcjT3BlblNhbnNTZW1pYm9sZCcpIGZvcm1hdCgnc3ZnJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgc3JjOiB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vU2VtaWJvbGRJdGFsaWMvT3BlblNhbnMtU2VtaWJvbGRJdGFsaWMuZW90Jyk7XG4gIHNyYzogdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L1NlbWlib2xkSXRhbGljL09wZW5TYW5zLVNlbWlib2xkSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L1NlbWlib2xkSXRhbGljL09wZW5TYW5zLVNlbWlib2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9TZW1pYm9sZEl0YWxpYy9PcGVuU2Fucy1TZW1pYm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L1NlbWlib2xkSXRhbGljL09wZW5TYW5zLVNlbWlib2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vU2VtaWJvbGRJdGFsaWMvT3BlblNhbnMtU2VtaWJvbGRJdGFsaWMuc3ZnI09wZW5TYW5zU2VtaWJvbGRJdGFsaWMnKSBmb3JtYXQoJ3N2ZycpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBzcmM6IHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9Cb2xkL09wZW5TYW5zLUJvbGQuZW90Jyk7XG4gIHNyYzogdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0JvbGQvT3BlblNhbnMtQm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9Cb2xkL09wZW5TYW5zLUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0JvbGQvT3BlblNhbnMtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0JvbGQvT3BlblNhbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0JvbGQvT3BlblNhbnMtQm9sZC5zdmcjT3BlblNhbnNCb2xkJykgZm9ybWF0KCdzdmcnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgc3JjOiB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vQm9sZEl0YWxpYy9PcGVuU2Fucy1Cb2xkSXRhbGljLmVvdCcpO1xuICBzcmM6IHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9Cb2xkSXRhbGljL09wZW5TYW5zLUJvbGRJdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vQm9sZEl0YWxpYy9PcGVuU2Fucy1Cb2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9Cb2xkSXRhbGljL09wZW5TYW5zLUJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9Cb2xkSXRhbGljL09wZW5TYW5zLUJvbGRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9Cb2xkSXRhbGljL09wZW5TYW5zLUJvbGRJdGFsaWMuc3ZnI09wZW5TYW5zQm9sZEl0YWxpYycpIGZvcm1hdCgnc3ZnJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vRXh0cmFCb2xkL09wZW5TYW5zLUV4dHJhQm9sZC5lb3QnKTtcbiAgc3JjOiB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vRXh0cmFCb2xkL09wZW5TYW5zLUV4dHJhQm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9FeHRyYUJvbGQvT3BlblNhbnMtRXh0cmFCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9FeHRyYUJvbGQvT3BlblNhbnMtRXh0cmFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vRXh0cmFCb2xkL09wZW5TYW5zLUV4dHJhQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0V4dHJhQm9sZC9PcGVuU2Fucy1FeHRyYUJvbGQuc3ZnI09wZW5TYW5zRXh0cmFib2xkJykgZm9ybWF0KCdzdmcnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBzcmM6IHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9FeHRyYUJvbGRJdGFsaWMvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLmVvdCcpO1xuICBzcmM6IHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9FeHRyYUJvbGRJdGFsaWMvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0V4dHJhQm9sZEl0YWxpYy9PcGVuU2Fucy1FeHRyYUJvbGRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgdXJsKCdAe0ZvbnRQYXRoT3BlblNhbnN9L0V4dHJhQm9sZEl0YWxpYy9PcGVuU2Fucy1FeHRyYUJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybCgnQHtGb250UGF0aE9wZW5TYW5zfS9FeHRyYUJvbGRJdGFsaWMvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICB1cmwoJ0B7Rm9udFBhdGhPcGVuU2Fuc30vRXh0cmFCb2xkSXRhbGljL09wZW5TYW5zLUV4dHJhQm9sZEl0YWxpYy5zdmcjT3BlblNhbnNFeHRyYWJvbGRJdGFsaWMnKSBmb3JtYXQoJ3N2ZycpO1xufVxuIiwiQGltcG9ydCAnbGVzcy1saWJyYXJ5L21peGlucy5sZXNzJztcbkBpbXBvcnQgJ2xlc3MtbGlicmFyeS9mb250cy5sZXNzJztcblxuLmNhcmRzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogQG1heENhcmRXaWR0aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.js");



let AppComponent = class AppComponent {
    constructor(translate) {
        this.initLanguage(translate);
    }
    initLanguage(translate) {
        const defaultLang = 'en';
        translate.addLangs([defaultLang, 'sv']);
        translate.setDefaultLang(defaultLang);
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|sv/) ? browserLang : defaultLang);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/fesm2015/ngx-page-scroll.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var _services_scroll_section_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/scroll-section.service */ "./src/app/services/scroll-section.service.ts");
/* harmony import */ var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/click-outside.directive */ "./src/app/directives/click-outside.directive.ts");
/* harmony import */ var _directives_scroll_section_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/scroll-section.directive */ "./src/app/directives/scroll-section.directive.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_back_img_back_img_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/back-img/back-img.component */ "./src/app/components/back-img/back-img.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/social-links/social-links.component */ "./src/app/components/social-links/social-links.component.ts");
/* harmony import */ var _components_cards_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cards/person-card/person-card.component */ "./src/app/components/cards/person-card/person-card.component.ts");
/* harmony import */ var _components_resume_summary_resume_summary_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/resume-summary/resume-summary.component */ "./src/app/components/resume-summary/resume-summary.component.ts");
/* harmony import */ var _components_cards_skills_card_skills_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cards/skills-card/skills-card.component */ "./src/app/components/cards/skills-card/skills-card.component.ts");
/* harmony import */ var _components_cards_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cards/timeline/timeline.component */ "./src/app/components/cards/timeline/timeline.component.ts");
/* harmony import */ var _components_cards_demo_cards_demo_cards_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/cards/demo-cards/demo-cards.component */ "./src/app/components/cards/demo-cards/demo-cards.component.ts");
/* harmony import */ var _components_cards_interests_card_interests_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cards/interests-card/interests-card.component */ "./src/app/components/cards/interests-card/interests-card.component.ts");
/* harmony import */ var _components_cards_page_card_page_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cards/page-card/page-card.component */ "./src/app/components/cards/page-card/page-card.component.ts");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
























// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                }
            }),
            ngx_page_scroll__WEBPACK_IMPORTED_MODULE_5__["NgxPageScrollModule"],
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_23__["NgxPageScrollCoreModule"].forRoot({ duration: 500, scrollOffset: 100 }),
        ],
        providers: [
            _services_scroll_service__WEBPACK_IMPORTED_MODULE_7__["ScrollService"],
            _services_scroll_section_service__WEBPACK_IMPORTED_MODULE_8__["ScrollSectionService"],
            { provide: Window, useValue: window }
        ],
        declarations: [
            _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideDirective"],
            _directives_scroll_section_directive__WEBPACK_IMPORTED_MODULE_10__["ScrollSectionDirective"],
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _components_back_img_back_img_component__WEBPACK_IMPORTED_MODULE_13__["BackImgComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_15__["SocialLinksComponent"],
            _components_cards_person_card_person_card_component__WEBPACK_IMPORTED_MODULE_16__["PersonCardComponent"],
            _components_resume_summary_resume_summary_component__WEBPACK_IMPORTED_MODULE_17__["ResumeSummaryComponent"],
            _components_cards_skills_card_skills_card_component__WEBPACK_IMPORTED_MODULE_18__["SkillsCardComponent"],
            _components_cards_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_19__["TimelineComponent"],
            _components_cards_demo_cards_demo_cards_component__WEBPACK_IMPORTED_MODULE_20__["DemosComponent"],
            _components_cards_interests_card_interests_card_component__WEBPACK_IMPORTED_MODULE_21__["InterestsCardComponent"],
            _components_cards_page_card_page_card_component__WEBPACK_IMPORTED_MODULE_22__["PageCardComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/back-img/back-img.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/back-img/back-img.component.less ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n.app-back-img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 500px;\n  z-index: -1;\n  background-color: #000;\n}\n.app-back-img:after {\n  content: '';\n  display: block;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.5;\n}\n.app-back-img.app-back-img--1:after {\n  background-image: url('bg1.jpg');\n}\n@media screen and (max-width: 800px) {\n  .app-back-img.app-back-img--1:after {\n    background-image: url('bg1_small.jpg');\n  }\n}\n.app-back-img.app-back-img--2:after {\n  background-image: url('bg2.jpg');\n}\n@media screen and (max-width: 800px) {\n  .app-back-img.app-back-img--2:after {\n    background-image: url('bg2_small.jpg');\n  }\n}\n.app-back-img.app-back-img--3:after {\n  background-image: url('bg3.jpg');\n}\n@media screen and (max-width: 800px) {\n  .app-back-img.app-back-img--3:after {\n    background-image: url('bg3_small.jpg');\n  }\n}\n.app-back-img.app-back-img--4:after {\n  background-image: url('bg4.jpg');\n}\n@media screen and (max-width: 800px) {\n  .app-back-img.app-back-img--4:after {\n    background-image: url('bg4_small.jpg');\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYWNrLWltZy9iYWNrLWltZy5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2NvbXBvbmVudHMvYmFjay1pbWcvYmFjay1pbWcuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvdmFyaWFibGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNULFdBQVc7QUFDWCxTQUFTO0FBQ1QsWUFBWTtBQUNaLGVBQWU7QUFDZixlQUFlO0FDSGY7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7QURJRjtBQ0ZFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBREdKO0FFdEJBO0VEK0JNLGdDQUFBO0FETk47QUNPTTtFQUFBO0lBQ0Usc0NBQUE7RURKTjtBQUNGO0FFOUJBO0VEK0JNLGdDQUFBO0FERU47QUNETTtFQUFBO0lBQ0Usc0NBQUE7RURJTjtBQUNGO0FFdENBO0VEK0JNLGdDQUFBO0FEVU47QUNUTTtFQUFBO0lBQ0Usc0NBQUE7RURZTjtBQUNGO0FFOUNBO0VEK0JNLGdDQUFBO0FEa0JOO0FDakJNO0VBQUE7SUFDRSxzQ0FBQTtFRG9CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYWNrLWltZy9iYWNrLWltZy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNpemUgKi9cbi8qIENvbG9ycyAqL1xuLyogVGV4dCAqL1xuLyogU3BhY2luZyAqL1xuLyogWiBwb3NpdGlvbiAqL1xuLyogVHJhbnNpdGlvbiAqL1xuLmFwcC1iYWNrLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4uYXBwLWJhY2staW1nOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3BhY2l0eTogMC41O1xufVxuLmFwcC1iYWNrLWltZy5hcHAtYmFjay1pbWctLTE6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltZy9iZzEuanBnXCIpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmFwcC1iYWNrLWltZy5hcHAtYmFjay1pbWctLTE6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vaW1nL2JnMV9zbWFsbC5qcGdcIik7XG4gIH1cbn1cbi5hcHAtYmFjay1pbWcuYXBwLWJhY2staW1nLS0yOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWcvYmcyLmpwZ1wiKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5hcHAtYmFjay1pbWcuYXBwLWJhY2staW1nLS0yOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltZy9iZzJfc21hbGwuanBnXCIpO1xuICB9XG59XG4uYXBwLWJhY2staW1nLmFwcC1iYWNrLWltZy0tMzphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vaW1nL2JnMy5qcGdcIik7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYXBwLWJhY2staW1nLmFwcC1iYWNrLWltZy0tMzphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWcvYmczX3NtYWxsLmpwZ1wiKTtcbiAgfVxufVxuLmFwcC1iYWNrLWltZy5hcHAtYmFjay1pbWctLTQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltZy9iZzQuanBnXCIpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmFwcC1iYWNrLWltZy5hcHAtYmFjay1pbWctLTQ6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vaW1nL2JnNF9zbWFsbC5qcGdcIik7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uL2xlc3MtbGlicmFyeS92YXJpYWJsZXMnO1xuXG4uYXBwLWJhY2staW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB6LWluZGV4OiBAei1iYWNrO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IEBibGFjaztcblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIC5iZy1oZWxwZXIoMSk7XG4gIC5iZy1oZWxwZXIoMik7XG4gIC5iZy1oZWxwZXIoMyk7XG4gIC5iZy1oZWxwZXIoNCk7XG5cbiAgLmJnLWhlbHBlcihAYmdObykge1xuICAgICYuYXBwLWJhY2staW1nLS1Ae2JnTm99OmFmdGVyIHtcbiAgICAgIEBiZ0ZpbGVuYW1lOiBcIi4vaW1nL2JnQHtiZ05vfS5qcGdcIjtcbiAgICAgIEBiZ1NtYWxsRmlsZW5hbWU6IFwiLi9pbWcvYmdAe2JnTm99X3NtYWxsLmpwZ1wiO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEBiZ0ZpbGVuYW1lKTtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChAYmdTbWFsbEZpbGVuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJcbi8qIFNpemUgKi9cblxuQG1xLW1kLW1pbjogOTkycHg7XG5AbXEtc20tbWF4OiAoQG1xLW1kLW1pbiAtIDFweCk7XG5AbXEtc20tbWluOiA3NjhweDtcbkBtcS14cy1tYXg6IChAbXEtc20tbWluIC0gMXB4KTtcbkBtcS14cy1taW46IDY0MHB4O1xuQG1xLXh4cy1tYXg6IChAbXEteHMtbWluIC0gMXB4KTtcblxuXG5AbWluV2lkdGg6IDMyMHB4O1xuQG1heENhcmRXaWR0aDogOTcwcHg7XG5cbkBsaW5lV2lkdGgtdGhpbjogMXB4O1xuQGxpbmVXaWR0aDogM3B4O1xuQGxpbmVXaWR0aC10aGljazogNXB4O1xuXG5cbi8qIENvbG9ycyAqL1xuXG5AYmxhY2s6ICMwMDA7XG5AZ3JleTogIzlkYTBhNztcbkBncmV5LWxpZ2h0OiAjZDFkMWQxO1xuQGdyZXktbGlnaHRlcjogI2Q4ZGFkYztcbkBncmV5LWxpZ2h0ZXN0OiAjZWZlZmVmO1xuQHdoaXRlOiAjZmZmO1xuXG5AZ3JleS1ibHVlLWRhcms6ICMzZDQ0NTE7XG5cbkByZWQtbGlnaHQ6ICNlODY3Njc7XG5cblxuQGNvbG9yLXByaW1hcnk6IEByZWQtbGlnaHQ7XG5cbkBiZ0NvbG9yLXByaW1hcnk6IEBncmV5LWxpZ2h0ZXN0O1xuQGJnQ29sb3Itc2Vjb25kYXJ5OiBAd2hpdGU7XG5AYmdDb2xvci1jYXJkOiBAYmdDb2xvci1zZWNvbmRhcnk7XG5cbkB0ZXh0Q29sb3ItcHJpbWFyeTogQGdyZXktYmx1ZS1kYXJrO1xuQHRleHRDb2xvci1saWdodDogQGdyZXk7XG5AdGV4dENvbG9yLWxpZ2h0ZXI6IEBncmV5LWxpZ2h0O1xuQHRleHRDb2xvci1jb2xvcjogQGNvbG9yLXByaW1hcnk7XG5AdGV4dENvbG9yLW9uRGFyazogQHdoaXRlO1xuXG5AYm9yZGVyQ29sb3ItcHJpbWFyeTogQGdyZXktbGlnaHQ7XG5AYm9yZGVyQ29sb3Itc2Vjb25kYXJ5OiBAZ3JleS1saWdodGVyO1xuQGJvcmRlckNvbG9yLWNvbG9yOiBAcmVkLWxpZ2h0O1xuXG5cbi8qIFRleHQgKi9cblxuQGZvbnQtcHJpbWFyeTogXCJPcGVuIFNhbnNcIiwgXCJzYW5zLXNlcmlmXCI7XG5cbkB0ZXh0U2l6ZTogMTZweDtcbkB0ZXh0U2l6ZS1zbWFsbDogMTNweDtcbkB0ZXh0U2l6ZS1sYXJnZTogMThweDtcblxuQHRleHRTaXplLWgxOiAzNnB4O1xuQHRleHRTaXplLWgyOiAzNHB4O1xuQHRleHRTaXplLWgzOiAyMnB4O1xuQHRleHRTaXplLWg0OiAyMHB4O1xuXG5AdGV4dFNpemUtaWNvbjogMjJweDtcbkB0ZXh0U2l6ZS1sZy1pY29uOiAzMHB4O1xuQHRleHRTaXplLXhsLWljb246IDUwcHg7XG5cbkB0ZXh0V2VpZ2h0LWxpZ2h0OiAyMDA7XG5AdGV4dFdlaWdodC1ub3JtYWw6IDQwMDtcbkB0ZXh0V2VpZ2h0LWJvbGQ6IDYwMDtcbkB0ZXh0V2VpZ2h0LWJvbGRlcjogNzAwO1xuXG5cbi8qIFNwYWNpbmcgKi9cblxuQHBhZGRpbmc6IDIwcHg7XG5AcGFkZGluZy1xdWFydGVyOiBAcGFkZGluZyAvIDQ7XG5AcGFkZGluZy1oYWxmOiBAcGFkZGluZyAvIDI7XG5AcGFkZGluZy10aHJlZS1xdWFydGVyOiAzICogQHBhZGRpbmcgLyA0O1xuQHBhZGRpbmctb25lLWFuZC1oYWxmOiBAcGFkZGluZyArIEBwYWRkaW5nLWhhbGY7XG5AcGFkZGluZy1kb3VibGU6IEBwYWRkaW5nICogMjtcbkBwYWRkaW5nLXF1YWQ6IEBwYWRkaW5nICogNDtcblxuQGNhcmQtcGFkZGluZzogQHBhZGRpbmctZG91YmxlO1xuQGNhcmQtcGFkZGluZy1oYWxmOiBAcGFkZGluZztcbkBjYXJkLWNvbnRhaW5lci1oYWxmLXNwYWNpbmctdjogQHBhZGRpbmc7XG5AY2FyZC1jb250YWluZXItaGFsZi1zcGFjaW5nLWg6IEBwYWRkaW5nLW9uZS1hbmQtaGFsZjtcbkBjYXJkLW1hcmdpbjogQHBhZGRpbmctcXVhZDtcbkBjYXJkLXRpdGxlLW1hcmdpbjogQHBhZGRpbmctZG91YmxlO1xuXG5cbi8qIFogcG9zaXRpb24gKi9cbkB6LWJhY2s6IC0xO1xuQHotMTogMTA7XG5Aei0yOiAyMDtcbkB6LTM6IDMwO1xuQHotZnJvbnQ6IDEwMDtcblxuXG4vKiBUcmFuc2l0aW9uICovXG5AdHJhbnNpdGlvblRpbWluZzogZWFzZS1vdXQ7IFxuQHRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydDogMC4ycztcbkB0cmFuc2l0aW9uRHVyYXRpb24tbm9ybWFsOiAwLjVzO1xuQHRyYW5zaXRpb25EdXJhdGlvbi1sb25nOiAxcztcbkB0cmFuc2l0aW9uRHVyYXRpb24tZXh0cmEtbG9uZzogMnM7Il19 */");

/***/ }),

/***/ "./src/app/components/back-img/back-img.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/back-img/back-img.component.ts ***!
  \***********************************************************/
/*! exports provided: BackImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackImgComponent", function() { return BackImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackImgComponent = class BackImgComponent {
    constructor() {
        this.bgNo = 1;
    }
    ngOnInit() {
        this.bgNo = getRandomInt(1, 4);
    }
};
BackImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-back-img',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./back-img.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/back-img/back-img.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./back-img.component.less */ "./src/app/components/back-img/back-img.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BackImgComponent);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/***/ }),

/***/ "./src/app/components/cards/demo-cards/demo-cards.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/cards/demo-cards/demo-cards.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.demos-container {\n  margin-top: 80px;\n}\n.demos-container .demos__title {\n  font-size: 34px;\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n}\n.demos-container .demo-card-container {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  padding: 20px 0;\n}\n@media (min-width: 992px) {\n  .demos-container .demo-card-container {\n    width: 50%;\n    padding-right: 30px;\n  }\n  .demos-container .demo-card-container:nth-child(even) {\n    padding-left: 30px;\n    padding-right: 0;\n  }\n}\n.demos-container .demo-card-container .demo-card {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n  -webkit-transition: box-shadow ease-out 0.2s;\n  transition: box-shadow ease-out 0.2s;\n}\n.demos-container .demo-card-container .demo-card:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n}\n.demos-container .demo-card-container .demo-card .demo-card-image {\n  position: relative;\n  width: 100%;\n  padding-top: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.demos-container .demo-card-container .demo-card .demo-card-description {\n  padding: 40px;\n  border-top: 5px solid #e86767;\n  font-size: 16px;\n  line-height: 16px;\n  color: #3d4451;\n  font-family: \"Open Sans\", \"sans-serif\";\n  line-height: 24px;\n}\n@media (max-width: 639px) {\n  .demos-container .demo-card-container .demo-card .demo-card-description {\n    padding: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9kZW1vLWNhcmRzL2RlbW8tY2FyZHMuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWFuaW1hdGlvbi5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9kZW1vLWNhcmRzL2RlbW8tY2FyZHMuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWNhcmQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtdGV4dC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1nZW5lcmFsLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWJvcmRlci5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy10cmFuc2l0aW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNULFdBQVc7QUFDWCxTQUFTO0FBQ1QsWUFBWTtBQUNaLGVBQWU7QUFDZixlQUFlO0FDZ0JmO0VBQ0U7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGJGO0VDZ0JBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURiRjtFQ2dCQTs7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRFpGO0VDZUE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRFpGO0FBQ0Y7QUNIQTtFQUNFOztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURiRjtFQ2dCQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEYkY7RUNnQkE7OztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURaRjtFQ2VBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURaRjtBQUNGO0FDZUE7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7RURiRjtFQ2dCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURkRjtBQUNGO0FDT0E7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7RURiRjtFQ2dCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURkRjtBQUNGO0FDaUJBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEZkY7RUNrQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEaEJGO0FBQ0Y7QUNTQTtFQUNFO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGZGO0VDa0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGhCRjtBQUNGO0FFckNBO0VDQ0UsZ0JBQUE7QUh1Q0Y7QUV4Q0E7RUVBRSxlQUFBO0VBQ0EsaUJBQUE7RURzQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FITUY7QUUvQ0E7RUdTRSxxQkFBQTtFRkhBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUg2Q0Y7QUczQ0U7RUFBQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFSDhDRjtFRzdDRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7RUgrQ0o7QUFDRjtBRS9EQTtFSWdCRSx3RUFBQTtFSE1BLGdCQUFBO0VJdEJBLDRDQUFBO0VBQUEsb0NBQUE7QVBvRUY7QU12Q0U7RUFUQSwyRUFBQTtBTm1ERjtBRXZFQTtFQWVRLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FGMkRSO0FFL0VBO0VDMEJFLGFBQUE7RUdnQkEsNkJBQUE7RUYxQ0EsZUFBQTtFQUNBLGlCQUFBO0VBTUEsY0FBQTtFQUNBLHNDQUFBO0VBS0EsaUJBQUE7QUoyRUY7QUc1REU7RUFBQTtJQUNFLGFBQUE7RUgrREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMvZGVtby1jYXJkcy9kZW1vLWNhcmRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2l6ZSAqL1xuLyogQ29sb3JzICovXG4vKiBUZXh0ICovXG4vKiBTcGFjaW5nICovXG4vKiBaIHBvc2l0aW9uICovXG4vKiBUcmFuc2l0aW9uICovXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLFxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgMjAlLFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuICAzMCUsXG4gIDUwJSxcbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG4gIDQwJSxcbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uZGVtb3MtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5kZW1vcy1jb250YWluZXIgLmRlbW9zX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZGVtb3MtY29udGFpbmVyIC5kZW1vLWNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmRlbW9zLWNvbnRhaW5lciAuZGVtby1jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIC5kZW1vcy1jb250YWluZXIgLmRlbW8tY2FyZC1jb250YWluZXI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuLmRlbW9zLWNvbnRhaW5lciAuZGVtby1jYXJkLWNvbnRhaW5lciAuZGVtby1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IGVhc2Utb3V0IDAuMnM7XG59XG4uZGVtb3MtY29udGFpbmVyIC5kZW1vLWNhcmQtY29udGFpbmVyIC5kZW1vLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG4uZGVtb3MtY29udGFpbmVyIC5kZW1vLWNhcmQtY29udGFpbmVyIC5kZW1vLWNhcmQgLmRlbW8tY2FyZC1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5kZW1vcy1jb250YWluZXIgLmRlbW8tY2FyZC1jb250YWluZXIgLmRlbW8tY2FyZCAuZGVtby1jYXJkLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogNDBweDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNlODY3Njc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjM2Q0NDUxO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJzYW5zLXNlcmlmXCI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIC5kZW1vcy1jb250YWluZXIgLmRlbW8tY2FyZC1jb250YWluZXIgLmRlbW8tY2FyZCAuZGVtby1jYXJkLWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4iLCJcbi5zaGFrZS1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogc2hha2UgMXMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45NykgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG5AbW92ZS1hbmltYXRpb24tc3RhcnQ6IDIwMCU7XG5AbW92ZS1hbmltYXRpb24tZHVyYXRpb246IDYwMG1zO1xuXG4uZnJvbS1sZWZ0LWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBmcm9tTGVmdCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbn1cblxuLmZyb20tcmlnaHQtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IGZyb21SaWdodCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLCA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgXG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cblxuICAzMCUsIDUwJSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG5cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZyb21MZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLUBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZnJvbVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9sZXNzLWxpYnJhcnkvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uLy4uL2xlc3MtbGlicmFyeS9taXhpbnMnO1xuXG4uZGVtb3MtY29udGFpbmVyIHtcbiAgLmNhcmQtY29udGFpbmVyO1xuXG4gIC5kZW1vc19fdGl0bGUge1xuICAgIC5jYXJkLXRpdGxlO1xuICB9XG5cbiAgLmRlbW8tY2FyZC1jb250YWluZXIge1xuICAgIC5jYXJkLWNvbnRhaW5lci1oYWxmO1xuXG4gICAgLmRlbW8tY2FyZCB7XG4gICAgICAuY2FyZDtcbiAgICAgIC5jYXJkLWFjdGlvbjtcblxuICAgICAgLmRlbW8tY2FyZC1pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmRlbW8tY2FyZC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIC5jYXJkLXBhZGRpbmc7XG4gICAgICAgIC5ib3JkZXItdG9wLWJhcjtcbiAgICAgICAgLnRleHQtYm9keTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuICBcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zLWJvcmRlcic7XG5cbi5jYXJkLWNvbnRhaW5lcigpIHtcbiAgbWFyZ2luLXRvcDogQGNhcmQtbWFyZ2luO1xufVxuXG4uY2FyZC1jb250YWluZXItaGFsZigpIHtcbiAgLmRpc3BsYXktaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiBAY2FyZC1jb250YWluZXItaGFsZi1zcGFjaW5nLXYgMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogQG1xLW1kLW1pbikge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1yaWdodDogQHBhZGRpbmctb25lLWFuZC1oYWxmO1xuICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIHBhZGRpbmctbGVmdDogQHBhZGRpbmctb25lLWFuZC1oYWxmO1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQoKSB7XG4gIC5ib3JkZXJTaGFkb3c7XG4gIGJhY2tncm91bmQ6IEBiZ0NvbG9yLWNhcmQ7XG59XG5cbi5jYXJkLXBhZGRpbmcoKSB7XG4gIHBhZGRpbmc6IEBjYXJkLXBhZGRpbmc7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IEBtcS14eHMtbWF4KSB7XG4gICAgcGFkZGluZzogQGNhcmQtcGFkZGluZy1oYWxmO1xuICB9XG59XG5cbi5jYXJkLWFjdGlvbigpIHtcbiAgLmJvcmRlclNoYWRvdy1vbi1ob3Zlcjtcbn1cblxuLmNhcmQtdGl0bGUoKSB7XG4gIC5oMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiBAY2FyZC10aXRsZS1tYXJnaW47XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5mb250LXNpemUoQHNpemUsIEBsaW5lSGVpZ2h0OiBAc2l6ZSkge1xuICBmb250LXNpemU6IEBzaXplO1xuICBsaW5lLWhlaWdodDogQGxpbmVIZWlnaHQ7XG59XG5cblxuLnRleHQtcHJpbWFyeSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUpO1xuICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xuICBmb250LWZhbWlseTogQGZvbnQtcHJpbWFyeTtcbn1cblxuLnRleHQtYm9keSgpIHtcbiAgLnRleHQtcHJpbWFyeTtcbiAgbGluZS1oZWlnaHQ6IEB0ZXh0U2l6ZSArIDhweDtcbn1cblxuLnRleHQtZGFyaygpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbn1cblxuLnRleHQtZ3JleSgpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItbGlnaHQ7XG59XG5cbi50ZXh0LWxpZ2h0LWdyZXkoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLWxpZ2h0ZXI7XG59XG5cbi50ZXh0LWNvbG9yKCkge1xuICBjb2xvcjogQHRleHRDb2xvci1jb2xvcjtcbn1cblxuLnRleHQtb24tZGFyaygpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3Itb25EYXJrO1xufVxuXG5cbi50ZXh0LWxpZ2h0KCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtbGlnaHQ7XG59XG5cbi50ZXh0LWJvbGQoKSB7XG4gIGZvbnQtd2VpZ2h0OiBAdGV4dFdlaWdodC1ib2xkO1xufVxuXG4udGV4dC1ib2xkZXIoKSB7XG4gIGZvbnQtd2VpZ2h0OiBAdGV4dFdlaWdodC1ib2xkZXI7XG59XG5cblxuLmgxKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oMSk7XG59XG5cbi5oMigpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDIpO1xufVxuXG4uaDMoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWgzKTtcbn1cblxuLmg0KCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oNCk7XG59XG5cbi50ZXh0LXNtYWxsKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1zbWFsbCk7XG59XG5cbi50ZXh0LWxhcmdlKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1sYXJnZSk7XG59XG5cbi50ZXh0LXVwcGVyY2FzZSgpIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuXG4ubGluaygpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xuICB9XG59XG5cbi50ZXh0LWJ1YmJsZShAYXJyb3dEb3duOiB0cnVlLCBAYmdDb2xvcjogQHJlZC1saWdodCkge1xuICBAYXJyb3dTaXplOiA4cHg7XG4gIEBhcnJvd09mZnNldDogNXB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogQGFycm93U2l6ZTtcbiAgcGFkZGluZzogQHBhZGRpbmctcXVhcnRlciBAcGFkZGluZy1oYWxmO1xuICBiYWNrZ3JvdW5kOiBAYmdDb2xvcjtcblxuICAuZGlzcGxheS1pbmxpbmUtYmxvY2s7XG4gIC50ZXh0LW9uLWRhcms7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogQGJnQ29sb3I7XG4gICAgLmRpc3BsYXktYmxvY2s7XG4gICAgLnNpemUoMCwgMCk7XG5cbiAgICBib3JkZXItd2lkdGg6IDAgMCBAYXJyb3dTaXplIEBhcnJvd1NpemU7XG4gICAgLnBvc2l0aW9uKGFic29sdXRlLCAxMDAlLCBhdXRvLCBhdXRvLCBAYXJyb3dPZmZzZXQpO1xuXG4gICAgJiB3aGVuIChAYXJyb3dEb3duID0gZmFsc2UpIHtcbiAgICAgIGJvcmRlci13aWR0aDogQGFycm93U2l6ZSAwIDAgQGFycm93U2l6ZTtcbiAgICAgIC5wb3NpdGlvbihhYnNvbHV0ZSwgYXV0bywgYXV0bywgMTAwJSwgQGFycm93T2Zmc2V0KTtcbiAgICB9XG4gIH1cbn0iLCJcbi8vIFZpc2liaWxpdHlcblxuLmhpZGRlbigpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRpc3BsYXktYmxvY2soKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGlzcGxheS1pbmxpbmUtYmxvY2soKSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4uY2xlYXJmaXgoKSB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLnNpemUoQHdpZHRoOiBhdXRvLCBAaGVpZ2h0OiBhdXRvKSB7XG5cdHdpZHRoOiBAd2lkdGg7XG5cdGhlaWdodDogQGhlaWdodDtcbn1cblxuLnBvc2l0aW9uKEBwb3NpdGlvbjogcmVsYXRpdmUsIEB0b3A6IGF1dG8sIEByaWdodDogYXV0bywgQGJvdHRvbTogYXV0bywgQGxlZnQ6IGF1dG8pIHtcbiAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgdG9wOiBAdG9wO1xuICByaWdodDogQHJpZ2h0O1xuICBib3R0b206IEBib3R0b207XG4gIGxlZnQ6IEBsZWZ0O1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5ib3JkZXItcHJpbWFyeSgpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlckNvbG9yLXByaW1hcnk7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5KCkge1xuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyQ29sb3Itc2Vjb25kYXJ5O1xufVxuXG4uYm9yZGVyLWNvbG9yKCkge1xuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyQ29sb3ItY29sb3I7XG59XG5cbi5ib3JkZXItY2lyY3VsYXIoKSB7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJvcmRlclNoYWRvdygpIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4uYm9yZGVyU2hhZG93LXN0cm9uZyhAb2Zmc2V0OiAxMHB4KSB7XG4gIGJveC1zaGFkb3c6IDAgQG9mZnNldCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cblxuLmJvcmRlclNoYWRvdy1pbnNldChAb2Zmc2V0OiAxMHB4KSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLmJvcmRlclNoYWRvdy1vbi1ob3ZlcigpIHtcblx0LnRyYW5zaXRpb24tc2hvcnQoYm94LXNoYWRvdyk7XG4gICY6aG92ZXIge1xuICBcdC5ib3JkZXJTaGFkb3ctc3Ryb25nO1xuICB9XG59XG5cbi5pbm5lclNoYWRvdy1vbi1hY3RpdmUoKSB7XG4gIC50cmFuc2l0aW9uLXNob3J0KGJveC1zaGFkb3cpO1xuICAmOmFjdGl2ZSB7XG4gICAgLmJvcmRlclNoYWRvdy1pbnNldDtcbiAgfVxufVxuXG4uYm9yZGVyLXRvcC1iYXIoKSB7XG4gIGJvcmRlci10b3A6IEBsaW5lV2lkdGgtdGhpY2sgc29saWQgQGNvbG9yLXByaW1hcnk7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLnRyYW5zaXRpb24oQHByb3A6YWxsLCBAdGltZTpAdHJhbnNpdGlvbkR1cmF0aW9uLW5vcm1hbCkge1xuICB0cmFuc2l0aW9uOiBAcHJvcCBAdHJhbnNpdGlvblRpbWluZyBAdGltZTtcbn1cblxuLnRyYW5zaXRpb24tc2hvcnQoQHByb3A6YWxsKSB7XG4gIC50cmFuc2l0aW9uKEBwcm9wLCBAdHJhbnNpdGlvbkR1cmF0aW9uLXNob3J0KTtcbn1cblxuLnRyYW5zaXRpb24tbG9uZyhAcHJvcDphbGwpIHtcbiAgLnRyYW5zaXRpb24oQHByb3AsIEB0cmFuc2l0aW9uRHVyYXRpb24tbG9uZyk7XG59XG5cbi50cmFuc2l0aW9uLWV4dHJhLWxvbmcoQHByb3A6YWxsKSB7XG4gIC50cmFuc2l0aW9uKEBwcm9wLCBAdHJhbnNpdGlvbkR1cmF0aW9uLWV4dHJhLWxvbmcpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cards/demo-cards/demo-cards.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/demo-cards/demo-cards.component.ts ***!
  \*********************************************************************/
/*! exports provided: DemosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemosComponent", function() { return DemosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_demo_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/demo-items */ "./src/app/data/demo-items.ts");



let DemosComponent = class DemosComponent {
    constructor() {
        this.demoItems = _data_demo_items__WEBPACK_IMPORTED_MODULE_2__["DEMO_ITEMS"];
    }
};
DemosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/demo-cards/demo-cards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo-cards.component.less */ "./src/app/components/cards/demo-cards/demo-cards.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DemosComponent);



/***/ }),

/***/ "./src/app/components/cards/interests-card/interests-card.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cards/interests-card/interests-card.component.less ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.interests-card-container {\n  margin-top: 80px;\n}\n.interests-card-container .interests-card__title {\n  font-size: 34px;\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n}\n.interests-card-container .interests-card {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n  padding: 40px;\n}\n@media (max-width: 639px) {\n  .interests-card-container .interests-card {\n    padding: 20px;\n  }\n}\n.interests-card-container .interests-card .interests-card__interests:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest {\n  float: left;\n  width: 14.28571429%;\n  padding: 15px;\n  text-align: center;\n  cursor: pointer;\n  color: #9da0a7;\n}\n@media (max-width: 639px) {\n  .interests-card-container .interests-card .interests-card__interests .interests-card__interest {\n    padding: 15px 5px;\n  }\n}\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest:hover,\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest.interests-card__interest--active {\n  color: #e86767;\n}\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest .interests-card__interest-title {\n  font-size: 13px;\n  line-height: 13px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest .interests-card__interest-icon {\n  font-size: 50px;\n  line-height: 50px;\n}\n@media (max-width: 639px) {\n  .interests-card-container .interests-card .interests-card__interests .interests-card__interest .interests-card__interest-icon {\n    font-size: 30px;\n    line-height: 30px;\n  }\n}\n.interests-card-container .interests-card .interests-card__interest-description {\n  width: 100%;\n  font-size: 16px;\n  line-height: 16px;\n  color: #3d4451;\n  font-family: \"Open Sans\", \"sans-serif\";\n  line-height: 24px;\n  position: relative;\n  margin-bottom: 8px;\n  padding: 5px 10px;\n  background: #e86767;\n  display: inline-block;\n  color: #fff;\n  padding: 10px 40px 10px 20px;\n}\n.interests-card-container .interests-card .interests-card__interest-description:before {\n  content: '';\n  border-style: solid;\n  border-color: transparent;\n  border-left-color: #e86767;\n  display: block;\n  width: 0;\n  height: 0;\n  border-width: 0 0 8px 8px;\n  top: 100%;\n  bottom: auto;\n  border-width: 8px 0 0 8px;\n  position: absolute;\n  top: auto;\n  right: auto;\n  bottom: 100%;\n  left: 5px;\n}\n.interests-card-container .interests-card .interests-card__interest-description .interests-card__interest-description-close {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  bottom: auto;\n  left: auto;\n}\n.interests-card-container .interests-card .interests-card__interest-description .interests-card__interest-description-close:hover {\n  color: #d1d1d1;\n  cursor: pointer;\n}\n.interests-card-container .interests-card .interests-card__interest-description:before {\n  -webkit-transition: left ease-out 0.2s;\n  transition: left ease-out 0.2s;\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--0:before {\n  left: calc(7.14285714% + 0 * 14.28571429%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--1:before {\n  left: calc(7.14285714% + 1 * 14.28571429%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--2:before {\n  left: calc(7.14285714% + 2 * 14.28571429%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--3:before {\n  left: calc(7.14285714% + 3 * 14.28571429%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--4:before {\n  left: calc(7.14285714% + 4 * 14.28571429%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--5:before {\n  left: calc(7.14285714% + 5 * 14.28571429%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--6:before {\n  left: calc(7.14285714% + 6 * 14.28571429%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9pbnRlcmVzdHMtY2FyZC9pbnRlcmVzdHMtY2FyZC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtYW5pbWF0aW9uLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9jb21wb25lbnRzL2NhcmRzL2ludGVyZXN0cy1jYXJkL2ludGVyZXN0cy1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1jYXJkLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLXRleHQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtYm9yZGVyLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWdlbmVyYWwubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtdHJhbnNpdGlvbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsU0FBUztBQUNULFlBQVk7QUFDWixlQUFlO0FBQ2YsZUFBZTtBQ2dCZjtFQUNFOztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURiRjtFQ2dCQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEYkY7RUNnQkE7OztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURaRjtFQ2VBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURaRjtBQUNGO0FDSEE7RUFDRTs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEYkY7RUNnQkE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRGJGO0VDZ0JBOzs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEWkY7RUNlQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEWkY7QUFDRjtBQ2VBO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VEYkY7RUNnQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEZEY7QUFDRjtBQ09BO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VEYkY7RUNnQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEZEY7QUFDRjtBQ2lCQTtFQUNFO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGZGO0VDa0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGhCRjtBQUNGO0FDU0E7RUFDRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURmRjtFQ2tCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURoQkY7QUFDRjtBRXJDQTtFQ0NFLGdCQUFBO0FIdUNGO0FFeENBO0VFQUUsZUFBQTtFQUNBLGlCQUFBO0VEc0NBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBSE1GO0FFL0NBO0VHZ0JFLHdFQUFBO0VGTUEsZ0JBQUE7RUFJQSxhQUFBO0FIMEJGO0FHeEJFO0VBQUE7SUFDRSxhQUFBO0VIMkJGO0FBQ0Y7QU0zQ0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QU42Q0o7QUU5REE7RUFpQlEsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFRUFOLGNBQUE7QUppREY7QUU5Q1E7RUFBQTtJQUNFLGlCQUFBO0VGaURSO0FBQ0Y7QUUvQ1E7O0VFQ04sY0FBQTtBSmtERjtBRS9FQTtFRUFFLGVBQUE7RUFDQSxpQkFBQTtFQTBFQSx5QkFBQTtFRnZDUSxtQkFBQTtBRmlEVjtBRXJGQTtFRUFFLGVBQUE7RUFDQSxpQkFBQTtBSndGRjtBRS9DVTtFQUFBO0lFMUNSLGVBQUE7SUFDQSxpQkFBQTtFSjZGQTtBQUNGO0FFL0ZBO0VBbURNLFdBQUE7RUVuREosZUFBQTtFQUNBLGlCQUFBO0VBTUEsY0FBQTtFQUNBLHNDQUFBO0VBS0EsaUJBQUE7RUFnRkEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUV2RkEscUJBQUE7RUZ3QkEsV0FBQTtFRnFCSSw0QkFBQTtBRndETjtBSVRFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFRXBHRixjQUFBO0VBaUJELFFBQUE7RUFDQSxTQUFBO0VGc0ZHLHlCQUFBO0VFakZGLFNBQUE7RUFFQSxZQUFBO0VGbUZJLHlCQUFBO0VFdEZKLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBTmlHRjtBRWhJQTtFSTJCRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QU53R0Y7QUU1RVE7RUVsQ04sY0FBQTtFRm9DUSxlQUFBO0FGOEVWO0FFMUVNO0VLakVKLHNDQUFBO0VBQUEsOEJBQUE7QVA4SUY7QUU1RFE7RUFDRSwwQ0FBQTtBRjhEVjtBRS9EUTtFQUNFLDBDQUFBO0FGaUVWO0FFbEVRO0VBQ0UsMENBQUE7QUZvRVY7QUVyRVE7RUFDRSwwQ0FBQTtBRnVFVjtBRXhFUTtFQUNFLDBDQUFBO0FGMEVWO0FFM0VRO0VBQ0UsMENBQUE7QUY2RVY7QUU5RVE7RUFDRSwwQ0FBQTtBRmdGViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMvaW50ZXJlc3RzLWNhcmQvaW50ZXJlc3RzLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTaXplICovXG4vKiBDb2xvcnMgKi9cbi8qIFRleHQgKi9cbi8qIFNwYWNpbmcgKi9cbi8qIFogcG9zaXRpb24gKi9cbi8qIFRyYW5zaXRpb24gKi9cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICAyMCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG4gIDMwJSxcbiAgNTAlLFxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cbiAgNDAlLFxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZyb21SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuLmludGVyZXN0cy1jYXJkLWNvbnRhaW5lciAuaW50ZXJlc3RzLWNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIC5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4uaW50ZXJlc3RzLWNhcmQtY29udGFpbmVyIC5pbnRlcmVzdHMtY2FyZCAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0czphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3RzIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3Qge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE0LjI4NTcxNDI5JTtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjOWRhMGE3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIC5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3RzIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3Qge1xuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xuICB9XG59XG4uaW50ZXJlc3RzLWNhcmQtY29udGFpbmVyIC5pbnRlcmVzdHMtY2FyZCAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0cyAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0OmhvdmVyLFxuLmludGVyZXN0cy1jYXJkLWNvbnRhaW5lciAuaW50ZXJlc3RzLWNhcmQgLmludGVyZXN0cy1jYXJkX19pbnRlcmVzdHMgLmludGVyZXN0cy1jYXJkX19pbnRlcmVzdC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZTg2NzY3O1xufVxuLmludGVyZXN0cy1jYXJkLWNvbnRhaW5lciAuaW50ZXJlc3RzLWNhcmQgLmludGVyZXN0cy1jYXJkX19pbnRlcmVzdHMgLmludGVyZXN0cy1jYXJkX19pbnRlcmVzdCAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3RzIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QgLmludGVyZXN0cy1jYXJkX19pbnRlcmVzdC1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICAuaW50ZXJlc3RzLWNhcmQtY29udGFpbmVyIC5pbnRlcmVzdHMtY2FyZCAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0cyAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0IC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG59XG4uaW50ZXJlc3RzLWNhcmQtY29udGFpbmVyIC5pbnRlcmVzdHMtY2FyZCAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjM2Q0NDUxO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJzYW5zLXNlcmlmXCI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlODY3Njc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDIwcHg7XG59XG4uaW50ZXJlc3RzLWNhcmQtY29udGFpbmVyIC5pbnRlcmVzdHMtY2FyZCAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogI2U4Njc2NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDhweCA4cHg7XG4gIHRvcDogMTAwJTtcbiAgYm90dG9tOiBhdXRvO1xuICBib3JkZXItd2lkdGg6IDhweCAwIDAgOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNXB4O1xufVxuLmludGVyZXN0cy1jYXJkLWNvbnRhaW5lciAuaW50ZXJlc3RzLWNhcmQgLmludGVyZXN0cy1jYXJkX19pbnRlcmVzdC1kZXNjcmlwdGlvbiAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogYXV0bztcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtZGVzY3JpcHRpb24gLmludGVyZXN0cy1jYXJkX19pbnRlcmVzdC1kZXNjcmlwdGlvbi1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjZDFkMWQxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW50ZXJlc3RzLWNhcmQtY29udGFpbmVyIC5pbnRlcmVzdHMtY2FyZCAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGxlZnQgZWFzZS1vdXQgMC4ycztcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtZGVzY3JpcHRpb24uaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uLS0wOmJlZm9yZSB7XG4gIGxlZnQ6IGNhbGMoNy4xNDI4NTcxNCUgKyAwICogMTQuMjg1NzE0MjklKTtcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtZGVzY3JpcHRpb24uaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uLS0xOmJlZm9yZSB7XG4gIGxlZnQ6IGNhbGMoNy4xNDI4NTcxNCUgKyAxICogMTQuMjg1NzE0MjklKTtcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtZGVzY3JpcHRpb24uaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uLS0yOmJlZm9yZSB7XG4gIGxlZnQ6IGNhbGMoNy4xNDI4NTcxNCUgKyAyICogMTQuMjg1NzE0MjklKTtcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtZGVzY3JpcHRpb24uaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uLS0zOmJlZm9yZSB7XG4gIGxlZnQ6IGNhbGMoNy4xNDI4NTcxNCUgKyAzICogMTQuMjg1NzE0MjklKTtcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtZGVzY3JpcHRpb24uaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uLS00OmJlZm9yZSB7XG4gIGxlZnQ6IGNhbGMoNy4xNDI4NTcxNCUgKyA0ICogMTQuMjg1NzE0MjklKTtcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtZGVzY3JpcHRpb24uaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uLS01OmJlZm9yZSB7XG4gIGxlZnQ6IGNhbGMoNy4xNDI4NTcxNCUgKyA1ICogMTQuMjg1NzE0MjklKTtcbn1cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIgLmludGVyZXN0cy1jYXJkIC5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtZGVzY3JpcHRpb24uaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uLS02OmJlZm9yZSB7XG4gIGxlZnQ6IGNhbGMoNy4xNDI4NTcxNCUgKyA2ICogMTQuMjg1NzE0MjklKTtcbn1cbiIsIlxuLnNoYWtlLWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAxcyBjdWJpYy1iZXppZXIoLjM2LC4wNywuMTksLjk3KSBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbkBtb3ZlLWFuaW1hdGlvbi1zdGFydDogMjAwJTtcbkBtb3ZlLWFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG5cbi5mcm9tLWxlZnQtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IGZyb21MZWZ0IEBtb3ZlLWFuaW1hdGlvbi1kdXJhdGlvbiBlYXNlLW91dCBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC1AbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xufVxuXG4uZnJvbS1yaWdodC1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogZnJvbVJpZ2h0IEBtb3ZlLWFuaW1hdGlvbi1kdXJhdGlvbiBlYXNlLW91dCBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICBcbiAgMjAlLCA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuXG4gIDMwJSwgNTAlLCA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cblxuICA0MCUsIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmcm9tUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2xlc3MtbGlicmFyeS92YXJpYWJsZXMnO1xuQGltcG9ydCAnLi4vLi4vLi4vbGVzcy1saWJyYXJ5L21peGlucyc7XG5cbi5pbnRlcmVzdHMtY2FyZC1jb250YWluZXIge1xuICAuY2FyZC1jb250YWluZXI7XG5cbiAgLmludGVyZXN0cy1jYXJkX190aXRsZSB7XG4gICAgLmNhcmQtdGl0bGU7XG4gIH1cblxuICAuaW50ZXJlc3RzLWNhcmQge1xuICAgIC5jYXJkO1xuICAgIC5jYXJkLXBhZGRpbmc7XG5cbiAgICBAaW50ZXJlc3Qtd2lkdGg6IDEwMCUgLyA3O1xuXG4gICAgLmludGVyZXN0cy1jYXJkX19pbnRlcmVzdHMge1xuICAgICAgLmNsZWFyZml4O1xuXG4gICAgICAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiBAaW50ZXJlc3Qtd2lkdGg7XG4gICAgICAgIHBhZGRpbmc6IEBwYWRkaW5nLXRocmVlLXF1YXJ0ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAudGV4dC1ncmV5O1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiBAbXEteHhzLW1heCkge1xuICAgICAgICAgIHBhZGRpbmc6IEBwYWRkaW5nLXRocmVlLXF1YXJ0ZXIgQHBhZGRpbmctcXVhcnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICYuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LS1hY3RpdmUge1xuICAgICAgICAgIC50ZXh0LWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLmludGVyZXN0cy1jYXJkX19pbnRlcmVzdC10aXRsZSB7XG4gICAgICAgICAgLnRleHQtc21hbGw7XG4gICAgICAgICAgLnRleHQtdXBwZXJjYXNlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IEBwYWRkaW5nLWhhbGY7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWljb24ge1xuICAgICAgICAgIC5mb250LXNpemUoQHRleHRTaXplLXhsLWljb24pO1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IEBtcS14eHMtbWF4KSB7XG4gICAgICAgICAgICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1sZy1pY29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLnRleHQtYm9keTtcbiAgICAgIC50ZXh0LWJ1YmJsZShmYWxzZSk7XG4gICAgICBwYWRkaW5nOiBAcGFkZGluZy1oYWxmIEBwYWRkaW5nLWRvdWJsZSBAcGFkZGluZy1oYWxmIEBwYWRkaW5nO1xuXG4gICAgICAuaW50ZXJlc3RzLWNhcmRfX2ludGVyZXN0LWRlc2NyaXB0aW9uLWNsb3NlIHtcbiAgICAgICAgLnBvc2l0aW9uKGFic29sdXRlLCBAcGFkZGluZy1xdWFydGVyLCBAcGFkZGluZy1oYWxmKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAudGV4dC1saWdodC1ncmV5O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIC50cmFuc2l0aW9uLXNob3J0KGxlZnQpO1xuICAgICAgfVxuXG4gICAgICBAYXJyb3ctb2Zmc2V0OiBAaW50ZXJlc3Qtd2lkdGggLyAyO1xuXG4gICAgICAuYXJyb3ctaGVscGVyKDApO1xuICAgICAgLmFycm93LWhlbHBlcigxKTtcbiAgICAgIC5hcnJvdy1oZWxwZXIoMik7XG4gICAgICAuYXJyb3ctaGVscGVyKDMpO1xuICAgICAgLmFycm93LWhlbHBlcig0KTtcbiAgICAgIC5hcnJvdy1oZWxwZXIoNSk7XG4gICAgICAuYXJyb3ctaGVscGVyKDYpO1xuICAgIH1cblxuICAgIC5hcnJvdy1oZWxwZXIoQG50aCkge1xuICAgICAgJi5pbnRlcmVzdHMtY2FyZF9faW50ZXJlc3QtZGVzY3JpcHRpb24tLUB7bnRofSB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBsZWZ0OiBjYWxjKEBhcnJvdy1vZmZzZXQgKyBAbnRoICogQGludGVyZXN0LXdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucy1ib3JkZXInO1xuXG4uY2FyZC1jb250YWluZXIoKSB7XG4gIG1hcmdpbi10b3A6IEBjYXJkLW1hcmdpbjtcbn1cblxuLmNhcmQtY29udGFpbmVyLWhhbGYoKSB7XG4gIC5kaXNwbGF5LWlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogQGNhcmQtY29udGFpbmVyLWhhbGYtc3BhY2luZy12IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IEBtcS1tZC1taW4pIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IEBwYWRkaW5nLW9uZS1hbmQtaGFsZjtcbiAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IEBwYWRkaW5nLW9uZS1hbmQtaGFsZjtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkKCkge1xuICAuYm9yZGVyU2hhZG93O1xuICBiYWNrZ3JvdW5kOiBAYmdDb2xvci1jYXJkO1xufVxuXG4uY2FyZC1wYWRkaW5nKCkge1xuICBwYWRkaW5nOiBAY2FyZC1wYWRkaW5nO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBAbXEteHhzLW1heCkge1xuICAgIHBhZGRpbmc6IEBjYXJkLXBhZGRpbmctaGFsZjtcbiAgfVxufVxuXG4uY2FyZC1hY3Rpb24oKSB7XG4gIC5ib3JkZXJTaGFkb3ctb24taG92ZXI7XG59XG5cbi5jYXJkLXRpdGxlKCkge1xuICAuaDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogQGNhcmQtdGl0bGUtbWFyZ2luO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uZm9udC1zaXplKEBzaXplLCBAbGluZUhlaWdodDogQHNpemUpIHtcbiAgZm9udC1zaXplOiBAc2l6ZTtcbiAgbGluZS1oZWlnaHQ6IEBsaW5lSGVpZ2h0O1xufVxuXG5cbi50ZXh0LXByaW1hcnkoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplKTtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgZm9udC1mYW1pbHk6IEBmb250LXByaW1hcnk7XG59XG5cbi50ZXh0LWJvZHkoKSB7XG4gIC50ZXh0LXByaW1hcnk7XG4gIGxpbmUtaGVpZ2h0OiBAdGV4dFNpemUgKyA4cHg7XG59XG5cbi50ZXh0LWRhcmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG59XG5cbi50ZXh0LWdyZXkoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLWxpZ2h0O1xufVxuXG4udGV4dC1saWdodC1ncmV5KCkge1xuICBjb2xvcjogQHRleHRDb2xvci1saWdodGVyO1xufVxuXG4udGV4dC1jb2xvcigpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItY29sb3I7XG59XG5cbi50ZXh0LW9uLWRhcmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLW9uRGFyaztcbn1cblxuXG4udGV4dC1saWdodCgpIHtcbiAgZm9udC13ZWlnaHQ6IEB0ZXh0V2VpZ2h0LWxpZ2h0O1xufVxuXG4udGV4dC1ib2xkKCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtYm9sZDtcbn1cblxuLnRleHQtYm9sZGVyKCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtYm9sZGVyO1xufVxuXG5cbi5oMSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDEpO1xufVxuXG4uaDIoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWgyKTtcbn1cblxuLmgzKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oMyk7XG59XG5cbi5oNCgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDQpO1xufVxuXG4udGV4dC1zbWFsbCgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtc21hbGwpO1xufVxuXG4udGV4dC1sYXJnZSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtbGFyZ2UpO1xufVxuXG4udGV4dC11cHBlcmNhc2UoKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLmxpbmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciwgJjphY3RpdmUsICY6dmlzaXRlZCB7XG4gICAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgfVxufVxuXG4udGV4dC1idWJibGUoQGFycm93RG93bjogdHJ1ZSwgQGJnQ29sb3I6IEByZWQtbGlnaHQpIHtcbiAgQGFycm93U2l6ZTogOHB4O1xuICBAYXJyb3dPZmZzZXQ6IDVweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IEBhcnJvd1NpemU7XG4gIHBhZGRpbmc6IEBwYWRkaW5nLXF1YXJ0ZXIgQHBhZGRpbmctaGFsZjtcbiAgYmFja2dyb3VuZDogQGJnQ29sb3I7XG5cbiAgLmRpc3BsYXktaW5saW5lLWJsb2NrO1xuICAudGV4dC1vbi1kYXJrO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IEBiZ0NvbG9yO1xuICAgIC5kaXNwbGF5LWJsb2NrO1xuICAgIC5zaXplKDAsIDApO1xuXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgQGFycm93U2l6ZSBAYXJyb3dTaXplO1xuICAgIC5wb3NpdGlvbihhYnNvbHV0ZSwgMTAwJSwgYXV0bywgYXV0bywgQGFycm93T2Zmc2V0KTtcblxuICAgICYgd2hlbiAoQGFycm93RG93biA9IGZhbHNlKSB7XG4gICAgICBib3JkZXItd2lkdGg6IEBhcnJvd1NpemUgMCAwIEBhcnJvd1NpemU7XG4gICAgICAucG9zaXRpb24oYWJzb2x1dGUsIGF1dG8sIGF1dG8sIDEwMCUsIEBhcnJvd09mZnNldCk7XG4gICAgfVxuICB9XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmJvcmRlci1wcmltYXJ5KCkge1xuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyQ29sb3ItcHJpbWFyeTtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1zZWNvbmRhcnk7XG59XG5cbi5ib3JkZXItY29sb3IoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1jb2xvcjtcbn1cblxuLmJvcmRlci1jaXJjdWxhcigpIHtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYm9yZGVyU2hhZG93KCkge1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5ib3JkZXJTaGFkb3ctc3Ryb25nKEBvZmZzZXQ6IDEwcHgpIHtcbiAgYm94LXNoYWRvdzogMCBAb2Zmc2V0IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4uYm9yZGVyU2hhZG93LWluc2V0KEBvZmZzZXQ6IDEwcHgpIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4uYm9yZGVyU2hhZG93LW9uLWhvdmVyKCkge1xuXHQudHJhbnNpdGlvbi1zaG9ydChib3gtc2hhZG93KTtcbiAgJjpob3ZlciB7XG4gIFx0LmJvcmRlclNoYWRvdy1zdHJvbmc7XG4gIH1cbn1cblxuLmlubmVyU2hhZG93LW9uLWFjdGl2ZSgpIHtcbiAgLnRyYW5zaXRpb24tc2hvcnQoYm94LXNoYWRvdyk7XG4gICY6YWN0aXZlIHtcbiAgICAuYm9yZGVyU2hhZG93LWluc2V0O1xuICB9XG59XG5cbi5ib3JkZXItdG9wLWJhcigpIHtcbiAgYm9yZGVyLXRvcDogQGxpbmVXaWR0aC10aGljayBzb2xpZCBAY29sb3ItcHJpbWFyeTtcbn0iLCJcbi8vIFZpc2liaWxpdHlcblxuLmhpZGRlbigpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRpc3BsYXktYmxvY2soKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGlzcGxheS1pbmxpbmUtYmxvY2soKSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4uY2xlYXJmaXgoKSB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLnNpemUoQHdpZHRoOiBhdXRvLCBAaGVpZ2h0OiBhdXRvKSB7XG5cdHdpZHRoOiBAd2lkdGg7XG5cdGhlaWdodDogQGhlaWdodDtcbn1cblxuLnBvc2l0aW9uKEBwb3NpdGlvbjogcmVsYXRpdmUsIEB0b3A6IGF1dG8sIEByaWdodDogYXV0bywgQGJvdHRvbTogYXV0bywgQGxlZnQ6IGF1dG8pIHtcbiAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgdG9wOiBAdG9wO1xuICByaWdodDogQHJpZ2h0O1xuICBib3R0b206IEBib3R0b207XG4gIGxlZnQ6IEBsZWZ0O1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi50cmFuc2l0aW9uKEBwcm9wOmFsbCwgQHRpbWU6QHRyYW5zaXRpb25EdXJhdGlvbi1ub3JtYWwpIHtcbiAgdHJhbnNpdGlvbjogQHByb3AgQHRyYW5zaXRpb25UaW1pbmcgQHRpbWU7XG59XG5cbi50cmFuc2l0aW9uLXNob3J0KEBwcm9wOmFsbCkge1xuICAudHJhbnNpdGlvbihAcHJvcCwgQHRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydCk7XG59XG5cbi50cmFuc2l0aW9uLWxvbmcoQHByb3A6YWxsKSB7XG4gIC50cmFuc2l0aW9uKEBwcm9wLCBAdHJhbnNpdGlvbkR1cmF0aW9uLWxvbmcpO1xufVxuXG4udHJhbnNpdGlvbi1leHRyYS1sb25nKEBwcm9wOmFsbCkge1xuICAudHJhbnNpdGlvbihAcHJvcCwgQHRyYW5zaXRpb25EdXJhdGlvbi1leHRyYS1sb25nKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/cards/interests-card/interests-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards/interests-card/interests-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InterestsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsCardComponent", function() { return InterestsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_interest_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/interest-items */ "./src/app/data/interest-items.ts");



let InterestsCardComponent = class InterestsCardComponent {
    constructor() {
        this.interestItems = _data_interest_items__WEBPACK_IMPORTED_MODULE_2__["INTEREST_ITEMS"];
    }
    toggle(item, index) {
        if (this.activeItem === item) {
            this.activeItem = null;
            this.activeIndex = null;
        }
        else {
            this.activeItem = item;
            this.activeIndex = index;
        }
    }
};
InterestsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-interests-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./interests-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/interests-card/interests-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./interests-card.component.less */ "./src/app/components/cards/interests-card/interests-card.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InterestsCardComponent);



/***/ }),

/***/ "./src/app/components/cards/page-card/page-card.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/page-card/page-card.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.page-card-container {\n  margin-top: 80px;\n}\n.page-card-container .page-card__title {\n  font-size: 34px;\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n}\n.page-card-container .page-card {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n  padding: 40px;\n}\n@media (max-width: 639px) {\n  .page-card-container .page-card {\n    padding: 20px;\n  }\n}\n.page-card-container .page-card .page-card__description {\n  font-size: 16px;\n  line-height: 16px;\n  color: #3d4451;\n  font-family: \"Open Sans\", \"sans-serif\";\n  line-height: 24px;\n}\n.page-card-container .page-card__icons {\n  margin-top: 20px;\n  text-align: center;\n}\n.page-card-container .page-card__icons .page-card__icon-link {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  margin: 20px;\n  padding: 20px;\n  border: 1px solid #d1d1d1;\n  font-size: 13px;\n  line-height: 13px;\n  text-transform: uppercase;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: box-shadow ease-out 0.2s;\n  transition: box-shadow ease-out 0.2s;\n}\n.page-card-container .page-card__icons .page-card__icon-link:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n}\n.page-card-container .page-card__icons .page-card__icon-link:active {\n  box-shadow: inset 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n}\n.page-card-container .page-card__icons .page-card__icon-link:hover .page-card__icon {\n  opacity: 1;\n}\n.page-card-container .page-card__icons .page-card__icon-link .page-card__icon {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  background-origin: center;\n  opacity: 0.6;\n  -webkit-transition: opacity ease-out 0.2s;\n  transition: opacity ease-out 0.2s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9wYWdlLWNhcmQvcGFnZS1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1hbmltYXRpb24ubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMvcGFnZS1jYXJkL3BhZ2UtY2FyZC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtY2FyZC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy10ZXh0Lmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWJvcmRlci5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1nZW5lcmFsLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWJ1dHRvbi5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy10cmFuc2l0aW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNULFdBQVc7QUFDWCxTQUFTO0FBQ1QsWUFBWTtBQUNaLGVBQWU7QUFDZixlQUFlO0FDZ0JmO0VBQ0U7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGJGO0VDZ0JBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURiRjtFQ2dCQTs7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRFpGO0VDZUE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRFpGO0FBQ0Y7QUNIQTtFQUNFOztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURiRjtFQ2dCQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEYkY7RUNnQkE7OztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURaRjtFQ2VBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURaRjtBQUNGO0FDZUE7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7RURiRjtFQ2dCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURkRjtBQUNGO0FDT0E7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7RURiRjtFQ2dCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURkRjtBQUNGO0FDaUJBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEZkY7RUNrQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEaEJGO0FBQ0Y7QUNTQTtFQUNFO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGZGO0VDa0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGhCRjtBQUNGO0FFckNBO0VDQ0UsZ0JBQUE7QUh1Q0Y7QUV4Q0E7RUVBRSxlQUFBO0VBQ0EsaUJBQUE7RURzQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FITUY7QUUvQ0E7RUdnQkUsd0VBQUE7RUZNQSxnQkFBQTtFQUlBLGFBQUE7QUgwQkY7QUd4QkU7RUFBQTtJQUNFLGFBQUE7RUgyQkY7QUFDRjtBRXpEQTtFRUFFLGVBQUE7RUFDQSxpQkFBQTtFQU1BLGNBQUE7RUFDQSxzQ0FBQTtFQUtBLGlCQUFBO0FKbURGO0FFaEVBO0VBaUJJLGdCQUFBO0VBQ0Esa0JBQUE7QUZrREo7QUVwRUE7RUlTRSxxQkFBQTtFQWFELFlBQUE7RUFDQSxhQUFBO0VKQ0ssWUFBQTtFS3ZCSixhQUFBO0VGREEseUJBQUE7RURBQSxlQUFBO0VBQ0EsaUJBQUE7RUEwRUEseUJBQUE7RUd0RUEscUJBQUE7RUFDQSxlQUFBO0VDTkEsNENBQUE7RUFBQSxvQ0FBQTtBUmtGRjtBS3JERTtFQVRBLDJFQUFBO0FMaUVGO0FLakRFO0VBWkEsOEVBQUE7QUxnRUY7QUU1RE07RUFDRSxVQUFBO0FGOERSO0FFM0ZBO0VJc0JDLFdBQUE7RUFDQSxZQUFBO0VKV08sNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VNdENOLHlDQUFBO0VBQUEsaUNBQUE7QVJxR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzL3BhZ2UtY2FyZC9wYWdlLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTaXplICovXG4vKiBDb2xvcnMgKi9cbi8qIFRleHQgKi9cbi8qIFNwYWNpbmcgKi9cbi8qIFogcG9zaXRpb24gKi9cbi8qIFRyYW5zaXRpb24gKi9cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICAyMCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG4gIDMwJSxcbiAgNTAlLFxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cbiAgNDAlLFxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZyb21SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5wYWdlLWNhcmQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5wYWdlLWNhcmQtY29udGFpbmVyIC5wYWdlLWNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5wYWdlLWNhcmQtY29udGFpbmVyIC5wYWdlLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgLnBhZ2UtY2FyZC1jb250YWluZXIgLnBhZ2UtY2FyZCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuLnBhZ2UtY2FyZC1jb250YWluZXIgLnBhZ2UtY2FyZCAucGFnZS1jYXJkX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjM2Q0NDUxO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJzYW5zLXNlcmlmXCI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLnBhZ2UtY2FyZC1jb250YWluZXIgLnBhZ2UtY2FyZF9faWNvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGFnZS1jYXJkLWNvbnRhaW5lciAucGFnZS1jYXJkX19pY29ucyAucGFnZS1jYXJkX19pY29uLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyBlYXNlLW91dCAwLjJzO1xufVxuLnBhZ2UtY2FyZC1jb250YWluZXIgLnBhZ2UtY2FyZF9faWNvbnMgLnBhZ2UtY2FyZF9faWNvbi1saW5rOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuLnBhZ2UtY2FyZC1jb250YWluZXIgLnBhZ2UtY2FyZF9faWNvbnMgLnBhZ2UtY2FyZF9faWNvbi1saW5rOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbi5wYWdlLWNhcmQtY29udGFpbmVyIC5wYWdlLWNhcmRfX2ljb25zIC5wYWdlLWNhcmRfX2ljb24tbGluazpob3ZlciAucGFnZS1jYXJkX19pY29uIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wYWdlLWNhcmQtY29udGFpbmVyIC5wYWdlLWNhcmRfX2ljb25zIC5wYWdlLWNhcmRfX2ljb24tbGluayAucGFnZS1jYXJkX19pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtb3JpZ2luOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLW91dCAwLjJzO1xufVxuIiwiXG4uc2hha2UtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IHNoYWtlIDFzIGN1YmljLWJlemllciguMzYsLjA3LC4xOSwuOTcpIGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuQG1vdmUtYW5pbWF0aW9uLXN0YXJ0OiAyMDAlO1xuQG1vdmUtYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcblxuLmZyb20tbGVmdC1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogZnJvbUxlZnQgQG1vdmUtYW5pbWF0aW9uLWR1cmF0aW9uIGVhc2Utb3V0IGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLUBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG59XG5cbi5mcm9tLXJpZ2h0LWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBmcm9tUmlnaHQgQG1vdmUtYW5pbWF0aW9uLWR1cmF0aW9uIGVhc2Utb3V0IGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDEwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICB9XG4gIFxuICAyMCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG5cbiAgMzAlLCA1MCUsIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcbiAgfVxuXG4gIDQwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC1AbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZyb21SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vbGVzcy1saWJyYXJ5L3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi9sZXNzLWxpYnJhcnkvbWl4aW5zJztcblxuLnBhZ2UtY2FyZC1jb250YWluZXIge1xuICAuY2FyZC1jb250YWluZXI7XG5cbiAgLnBhZ2UtY2FyZF9fdGl0bGUge1xuICAgIC5jYXJkLXRpdGxlO1xuICB9XG5cbiAgLnBhZ2UtY2FyZCB7XG4gICAgLmNhcmQ7XG4gICAgLmNhcmQtcGFkZGluZztcblxuICAgIC5wYWdlLWNhcmRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgIC50ZXh0LWJvZHk7XG4gICAgfVxuICB9XG5cbiAgLnBhZ2UtY2FyZF9faWNvbnMge1xuICAgIG1hcmdpbi10b3A6IEBwYWRkaW5nO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5wYWdlLWNhcmRfX2ljb24tbGluayB7XG4gICAgICBAaWNvblNpemU6IDEwMHB4O1xuICAgICAgLmRpc3BsYXktaW5saW5lLWJsb2NrO1xuICAgICAgLnNpemUoQGljb25TaXplLCBAaWNvblNpemUpO1xuICAgICAgbWFyZ2luOiBAcGFkZGluZztcbiAgICAgIHBhZGRpbmc6IEBwYWRkaW5nO1xuICAgICAgLmJ0bjtcbiAgICAgIFxuICAgICAgJjpob3ZlciAucGFnZS1jYXJkX19pY29uIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgLnBhZ2UtY2FyZF9faWNvbiB7XG4gICAgICAgIC5zaXplKDEwMCUsIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAudHJhbnNpdGlvbi1zaG9ydChvcGFjaXR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zLWJvcmRlcic7XG5cbi5jYXJkLWNvbnRhaW5lcigpIHtcbiAgbWFyZ2luLXRvcDogQGNhcmQtbWFyZ2luO1xufVxuXG4uY2FyZC1jb250YWluZXItaGFsZigpIHtcbiAgLmRpc3BsYXktaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiBAY2FyZC1jb250YWluZXItaGFsZi1zcGFjaW5nLXYgMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogQG1xLW1kLW1pbikge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1yaWdodDogQHBhZGRpbmctb25lLWFuZC1oYWxmO1xuICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIHBhZGRpbmctbGVmdDogQHBhZGRpbmctb25lLWFuZC1oYWxmO1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQoKSB7XG4gIC5ib3JkZXJTaGFkb3c7XG4gIGJhY2tncm91bmQ6IEBiZ0NvbG9yLWNhcmQ7XG59XG5cbi5jYXJkLXBhZGRpbmcoKSB7XG4gIHBhZGRpbmc6IEBjYXJkLXBhZGRpbmc7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IEBtcS14eHMtbWF4KSB7XG4gICAgcGFkZGluZzogQGNhcmQtcGFkZGluZy1oYWxmO1xuICB9XG59XG5cbi5jYXJkLWFjdGlvbigpIHtcbiAgLmJvcmRlclNoYWRvdy1vbi1ob3Zlcjtcbn1cblxuLmNhcmQtdGl0bGUoKSB7XG4gIC5oMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiBAY2FyZC10aXRsZS1tYXJnaW47XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5mb250LXNpemUoQHNpemUsIEBsaW5lSGVpZ2h0OiBAc2l6ZSkge1xuICBmb250LXNpemU6IEBzaXplO1xuICBsaW5lLWhlaWdodDogQGxpbmVIZWlnaHQ7XG59XG5cblxuLnRleHQtcHJpbWFyeSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUpO1xuICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xuICBmb250LWZhbWlseTogQGZvbnQtcHJpbWFyeTtcbn1cblxuLnRleHQtYm9keSgpIHtcbiAgLnRleHQtcHJpbWFyeTtcbiAgbGluZS1oZWlnaHQ6IEB0ZXh0U2l6ZSArIDhweDtcbn1cblxuLnRleHQtZGFyaygpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbn1cblxuLnRleHQtZ3JleSgpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItbGlnaHQ7XG59XG5cbi50ZXh0LWxpZ2h0LWdyZXkoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLWxpZ2h0ZXI7XG59XG5cbi50ZXh0LWNvbG9yKCkge1xuICBjb2xvcjogQHRleHRDb2xvci1jb2xvcjtcbn1cblxuLnRleHQtb24tZGFyaygpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3Itb25EYXJrO1xufVxuXG5cbi50ZXh0LWxpZ2h0KCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtbGlnaHQ7XG59XG5cbi50ZXh0LWJvbGQoKSB7XG4gIGZvbnQtd2VpZ2h0OiBAdGV4dFdlaWdodC1ib2xkO1xufVxuXG4udGV4dC1ib2xkZXIoKSB7XG4gIGZvbnQtd2VpZ2h0OiBAdGV4dFdlaWdodC1ib2xkZXI7XG59XG5cblxuLmgxKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oMSk7XG59XG5cbi5oMigpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDIpO1xufVxuXG4uaDMoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWgzKTtcbn1cblxuLmg0KCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oNCk7XG59XG5cbi50ZXh0LXNtYWxsKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1zbWFsbCk7XG59XG5cbi50ZXh0LWxhcmdlKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1sYXJnZSk7XG59XG5cbi50ZXh0LXVwcGVyY2FzZSgpIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuXG4ubGluaygpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xuICB9XG59XG5cbi50ZXh0LWJ1YmJsZShAYXJyb3dEb3duOiB0cnVlLCBAYmdDb2xvcjogQHJlZC1saWdodCkge1xuICBAYXJyb3dTaXplOiA4cHg7XG4gIEBhcnJvd09mZnNldDogNXB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogQGFycm93U2l6ZTtcbiAgcGFkZGluZzogQHBhZGRpbmctcXVhcnRlciBAcGFkZGluZy1oYWxmO1xuICBiYWNrZ3JvdW5kOiBAYmdDb2xvcjtcblxuICAuZGlzcGxheS1pbmxpbmUtYmxvY2s7XG4gIC50ZXh0LW9uLWRhcms7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogQGJnQ29sb3I7XG4gICAgLmRpc3BsYXktYmxvY2s7XG4gICAgLnNpemUoMCwgMCk7XG5cbiAgICBib3JkZXItd2lkdGg6IDAgMCBAYXJyb3dTaXplIEBhcnJvd1NpemU7XG4gICAgLnBvc2l0aW9uKGFic29sdXRlLCAxMDAlLCBhdXRvLCBhdXRvLCBAYXJyb3dPZmZzZXQpO1xuXG4gICAgJiB3aGVuIChAYXJyb3dEb3duID0gZmFsc2UpIHtcbiAgICAgIGJvcmRlci13aWR0aDogQGFycm93U2l6ZSAwIDAgQGFycm93U2l6ZTtcbiAgICAgIC5wb3NpdGlvbihhYnNvbHV0ZSwgYXV0bywgYXV0bywgMTAwJSwgQGFycm93T2Zmc2V0KTtcbiAgICB9XG4gIH1cbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uYm9yZGVyLXByaW1hcnkoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1wcmltYXJ5O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeSgpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlckNvbG9yLXNlY29uZGFyeTtcbn1cblxuLmJvcmRlci1jb2xvcigpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlckNvbG9yLWNvbG9yO1xufVxuXG4uYm9yZGVyLWNpcmN1bGFyKCkge1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ib3JkZXJTaGFkb3coKSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLmJvcmRlclNoYWRvdy1zdHJvbmcoQG9mZnNldDogMTBweCkge1xuICBib3gtc2hhZG93OiAwIEBvZmZzZXQgMzBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5ib3JkZXJTaGFkb3ctaW5zZXQoQG9mZnNldDogMTBweCkge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5ib3JkZXJTaGFkb3ctb24taG92ZXIoKSB7XG5cdC50cmFuc2l0aW9uLXNob3J0KGJveC1zaGFkb3cpO1xuICAmOmhvdmVyIHtcbiAgXHQuYm9yZGVyU2hhZG93LXN0cm9uZztcbiAgfVxufVxuXG4uaW5uZXJTaGFkb3ctb24tYWN0aXZlKCkge1xuICAudHJhbnNpdGlvbi1zaG9ydChib3gtc2hhZG93KTtcbiAgJjphY3RpdmUge1xuICAgIC5ib3JkZXJTaGFkb3ctaW5zZXQ7XG4gIH1cbn1cblxuLmJvcmRlci10b3AtYmFyKCkge1xuICBib3JkZXItdG9wOiBAbGluZVdpZHRoLXRoaWNrIHNvbGlkIEBjb2xvci1wcmltYXJ5O1xufSIsIlxuLy8gVmlzaWJpbGl0eVxuXG4uaGlkZGVuKCkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzcGxheS1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kaXNwbGF5LWlubGluZS1ibG9jaygpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbi5jbGVhcmZpeCgpIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG4uc2l6ZShAd2lkdGg6IGF1dG8sIEBoZWlnaHQ6IGF1dG8pIHtcblx0d2lkdGg6IEB3aWR0aDtcblx0aGVpZ2h0OiBAaGVpZ2h0O1xufVxuXG4ucG9zaXRpb24oQHBvc2l0aW9uOiByZWxhdGl2ZSwgQHRvcDogYXV0bywgQHJpZ2h0OiBhdXRvLCBAYm90dG9tOiBhdXRvLCBAbGVmdDogYXV0bykge1xuICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICB0b3A6IEB0b3A7XG4gIHJpZ2h0OiBAcmlnaHQ7XG4gIGJvdHRvbTogQGJvdHRvbTtcbiAgbGVmdDogQGxlZnQ7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucy1ib3JkZXInO1xuXG4uYnRuKCkge1xuICBwYWRkaW5nOiBAcGFkZGluZztcbiAgLmJvcmRlci1wcmltYXJ5O1xuICAudGV4dC1zbWFsbDtcbiAgLnRleHQtdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLmJvcmRlclNoYWRvdy1vbi1ob3ZlcjtcbiAgLmlubmVyU2hhZG93LW9uLWFjdGl2ZTtcbn1cblxuLmJ0bi1zbSgpIHtcbiAgcGFkZGluZzogQHBhZGRpbmctaGFsZjtcbiAgLnRleHQtc21hbGw7XG59XG5cbi5idG4tbGcoKSB7XG4gIHBhZGRpbmc6IEBwYWRkaW5nIEBwYWRkaW5nLWRvdWJsZTtcbiAgLnRleHQtbGFyZ2U7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLnRyYW5zaXRpb24oQHByb3A6YWxsLCBAdGltZTpAdHJhbnNpdGlvbkR1cmF0aW9uLW5vcm1hbCkge1xuICB0cmFuc2l0aW9uOiBAcHJvcCBAdHJhbnNpdGlvblRpbWluZyBAdGltZTtcbn1cblxuLnRyYW5zaXRpb24tc2hvcnQoQHByb3A6YWxsKSB7XG4gIC50cmFuc2l0aW9uKEBwcm9wLCBAdHJhbnNpdGlvbkR1cmF0aW9uLXNob3J0KTtcbn1cblxuLnRyYW5zaXRpb24tbG9uZyhAcHJvcDphbGwpIHtcbiAgLnRyYW5zaXRpb24oQHByb3AsIEB0cmFuc2l0aW9uRHVyYXRpb24tbG9uZyk7XG59XG5cbi50cmFuc2l0aW9uLWV4dHJhLWxvbmcoQHByb3A6YWxsKSB7XG4gIC50cmFuc2l0aW9uKEBwcm9wLCBAdHJhbnNpdGlvbkR1cmF0aW9uLWV4dHJhLWxvbmcpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cards/page-card/page-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/cards/page-card/page-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCardComponent", function() { return PageCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_brand_link_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/brand-link-items */ "./src/app/data/brand-link-items.ts");



let PageCardComponent = class PageCardComponent {
    constructor() {
        this.brandItems = _data_brand_link_items__WEBPACK_IMPORTED_MODULE_2__["BRAND_LINK_ITEMS"];
    }
};
PageCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/page-card/page-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-card.component.less */ "./src/app/components/cards/page-card/page-card.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageCardComponent);



/***/ }),

/***/ "./src/app/components/cards/person-card/person-card.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/cards/person-card/person-card.component.less ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.person-card-container {\n  margin-top: 80px;\n}\n.person-card-container .person-card {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n}\n.person-card-container .person-card .person-card__content {\n  padding: 40px;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header {\n  margin-bottom: 20px;\n  border-bottom: 1px solid #d8dadc;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header .person-card__greeting {\n  position: relative;\n  margin-bottom: 8px;\n  padding: 5px 10px;\n  background: #e86767;\n  display: inline-block;\n  color: #fff;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header .person-card__greeting:before {\n  content: '';\n  border-style: solid;\n  border-color: transparent;\n  border-left-color: #e86767;\n  display: block;\n  width: 0;\n  height: 0;\n  border-width: 0 0 8px 8px;\n  position: absolute;\n  top: 100%;\n  right: auto;\n  bottom: auto;\n  left: 5px;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header .person-card__name {\n  font-size: 36px;\n  line-height: 36px;\n  font-weight: 200;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header .person-card__title {\n  font-size: 20px;\n  line-height: 20px;\n  margin-bottom: 40px;\n}\n.person-card-container .person-card .person-card__content .person-card__info-items .person-card__info-item {\n  padding: 5px 0;\n}\n.person-card-container .person-card .person-card__content .person-card__info-items .person-card__info-item .person-card__info-item-left {\n  padding-bottom: 5px;\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 600;\n}\n.person-card-container .person-card .person-card__content .person-card__info-items .person-card__info-item .person-card__info-item-right {\n  color: #9da0a7;\n  font-weight: 200;\n}\n.person-card-container .person-card .person-card__content .person-card__photo {\n  height: 350px;\n  background-image: url('me.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.person-card-container .person-card .person-card__content .person-card__photo.person-card__photo--large {\n  height: 500px;\n  margin-bottom: 20px;\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9wZXJzb24tY2FyZC9wZXJzb24tY2FyZC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtYW5pbWF0aW9uLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9jb21wb25lbnRzL2NhcmRzL3BlcnNvbi1jYXJkL3BlcnNvbi1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1jYXJkLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWJvcmRlci5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy10ZXh0Lmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWdlbmVyYWwubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1QsV0FBVztBQUNYLFNBQVM7QUFDVCxZQUFZO0FBQ1osZUFBZTtBQUNmLGVBQWU7QUNnQmY7RUFDRTs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEYkY7RUNnQkE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRGJGO0VDZ0JBOzs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEWkY7RUNlQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEWkY7QUFDRjtBQ0hBO0VBQ0U7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGJGO0VDZ0JBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURiRjtFQ2dCQTs7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRFpGO0VDZUE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRFpGO0FBQ0Y7QUNlQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRGJGO0VDZ0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGRGO0FBQ0Y7QUNPQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRGJGO0VDZ0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGRGO0FBQ0Y7QUNpQkE7RUFDRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURmRjtFQ2tCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURoQkY7QUFDRjtBQ1NBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEZkY7RUNrQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEaEJGO0FBQ0Y7QUVyQ0E7RUNDRSxnQkFBQTtBSHVDRjtBRXhDQTtFRWdCRSx3RUFBQTtFRE1BLGdCQUFBO0FIc0JGO0FFNUNBO0VBT00sYUFBQTtBRndDTjtBRS9DQTtFQVVRLG1CQUFBO0VBQ0EsZ0NBQUE7QUZ3Q1I7QUVuREE7RUc2RkUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUN2RkEscUJBQUE7RUR3QkEsV0FBQTtBTDBCRjtBSzBDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUNwR0YsY0FBQTtFQWlCRCxRQUFBO0VBQ0EsU0FBQTtFRHNGRyx5QkFBQTtFQ2xGRixrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QU4yQ0Y7QUUxRUE7RUdBRSxlQUFBO0VBQ0EsaUJBQUE7RUFxQ0EsZ0JBQUE7RUhsQlEsZ0JBQUE7RUFDQSxtQkFBQTtBRjREVjtBRWpGQTtFR0FFLGVBQUE7RUFDQSxpQkFBQTtFSHlCUSxtQkFBQTtBRjREVjtBRXRGQTtFQWdDVSxjQUFBO0FGeURWO0FFekZBO0VBbUNZLG1CQUFBO0VHd0NWLHlCQUFBO0VBM0VBLGVBQUE7RUFDQSxpQkFBQTtFQXlDQSxnQkFBQTtBTHNERjtBRWhHQTtFR3FCRSxjQUFBO0VBaUJBLGdCQUFBO0FMOERGO0FFcEdBO0VBaURRLGFBQUE7RUFFQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUZxRFI7QUVuRFE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRnFEViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMvcGVyc29uLWNhcmQvcGVyc29uLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTaXplICovXG4vKiBDb2xvcnMgKi9cbi8qIFRleHQgKi9cbi8qIFNwYWNpbmcgKi9cbi8qIFogcG9zaXRpb24gKi9cbi8qIFRyYW5zaXRpb24gKi9cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICAyMCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG4gIDMwJSxcbiAgNTAlLFxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cbiAgNDAlLFxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZyb21SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5wZXJzb24tY2FyZC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuLnBlcnNvbi1jYXJkLWNvbnRhaW5lciAucGVyc29uLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ucGVyc29uLWNhcmQtY29udGFpbmVyIC5wZXJzb24tY2FyZCAucGVyc29uLWNhcmRfX2NvbnRlbnQge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuLnBlcnNvbi1jYXJkLWNvbnRhaW5lciAucGVyc29uLWNhcmQgLnBlcnNvbi1jYXJkX19jb250ZW50IC5wZXJzb24tY2FyZF9faW5mby1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZGFkYztcbn1cbi5wZXJzb24tY2FyZC1jb250YWluZXIgLnBlcnNvbi1jYXJkIC5wZXJzb24tY2FyZF9fY29udGVudCAucGVyc29uLWNhcmRfX2luZm8taGVhZGVyIC5wZXJzb24tY2FyZF9fZ3JlZXRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlODY3Njc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNmZmY7XG59XG4ucGVyc29uLWNhcmQtY29udGFpbmVyIC5wZXJzb24tY2FyZCAucGVyc29uLWNhcmRfX2NvbnRlbnQgLnBlcnNvbi1jYXJkX19pbmZvLWhlYWRlciAucGVyc29uLWNhcmRfX2dyZWV0aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogI2U4Njc2NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDhweCA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiA1cHg7XG59XG4ucGVyc29uLWNhcmQtY29udGFpbmVyIC5wZXJzb24tY2FyZCAucGVyc29uLWNhcmRfX2NvbnRlbnQgLnBlcnNvbi1jYXJkX19pbmZvLWhlYWRlciAucGVyc29uLWNhcmRfX25hbWUge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBlcnNvbi1jYXJkLWNvbnRhaW5lciAucGVyc29uLWNhcmQgLnBlcnNvbi1jYXJkX19jb250ZW50IC5wZXJzb24tY2FyZF9faW5mby1oZWFkZXIgLnBlcnNvbi1jYXJkX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucGVyc29uLWNhcmQtY29udGFpbmVyIC5wZXJzb24tY2FyZCAucGVyc29uLWNhcmRfX2NvbnRlbnQgLnBlcnNvbi1jYXJkX19pbmZvLWl0ZW1zIC5wZXJzb24tY2FyZF9faW5mby1pdGVtIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4ucGVyc29uLWNhcmQtY29udGFpbmVyIC5wZXJzb24tY2FyZCAucGVyc29uLWNhcmRfX2NvbnRlbnQgLnBlcnNvbi1jYXJkX19pbmZvLWl0ZW1zIC5wZXJzb24tY2FyZF9faW5mby1pdGVtIC5wZXJzb24tY2FyZF9faW5mby1pdGVtLWxlZnQge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnBlcnNvbi1jYXJkLWNvbnRhaW5lciAucGVyc29uLWNhcmQgLnBlcnNvbi1jYXJkX19jb250ZW50IC5wZXJzb24tY2FyZF9faW5mby1pdGVtcyAucGVyc29uLWNhcmRfX2luZm8taXRlbSAucGVyc29uLWNhcmRfX2luZm8taXRlbS1yaWdodCB7XG4gIGNvbG9yOiAjOWRhMGE3O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuLnBlcnNvbi1jYXJkLWNvbnRhaW5lciAucGVyc29uLWNhcmQgLnBlcnNvbi1jYXJkX19jb250ZW50IC5wZXJzb24tY2FyZF9fcGhvdG8ge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ21lLmpwZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucGVyc29uLWNhcmQtY29udGFpbmVyIC5wZXJzb24tY2FyZCAucGVyc29uLWNhcmRfX2NvbnRlbnQgLnBlcnNvbi1jYXJkX19waG90by5wZXJzb24tY2FyZF9fcGhvdG8tLWxhcmdlIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiIsIlxuLnNoYWtlLWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAxcyBjdWJpYy1iZXppZXIoLjM2LC4wNywuMTksLjk3KSBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbkBtb3ZlLWFuaW1hdGlvbi1zdGFydDogMjAwJTtcbkBtb3ZlLWFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG5cbi5mcm9tLWxlZnQtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IGZyb21MZWZ0IEBtb3ZlLWFuaW1hdGlvbi1kdXJhdGlvbiBlYXNlLW91dCBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC1AbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xufVxuXG4uZnJvbS1yaWdodC1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogZnJvbVJpZ2h0IEBtb3ZlLWFuaW1hdGlvbi1kdXJhdGlvbiBlYXNlLW91dCBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICBcbiAgMjAlLCA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuXG4gIDMwJSwgNTAlLCA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cblxuICA0MCUsIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmcm9tUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2xlc3MtbGlicmFyeS92YXJpYWJsZXMnO1xuQGltcG9ydCAnLi4vLi4vLi4vbGVzcy1saWJyYXJ5L21peGlucyc7XG5cbi5wZXJzb24tY2FyZC1jb250YWluZXIge1xuICAuY2FyZC1jb250YWluZXI7XG5cbiAgLnBlcnNvbi1jYXJkIHtcbiAgICAuY2FyZDtcblxuICAgIC5wZXJzb24tY2FyZF9fY29udGVudCB7XG4gICAgICBwYWRkaW5nOiBAcGFkZGluZy1kb3VibGU7XG5cbiAgICAgIC5wZXJzb24tY2FyZF9faW5mby1oZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAcGFkZGluZztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1zZWNvbmRhcnk7XG5cbiAgICAgICAgLnBlcnNvbi1jYXJkX19ncmVldGluZyB7XG4gICAgICAgICAgLnRleHQtYnViYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBlcnNvbi1jYXJkX19uYW1lIHtcbiAgICAgICAgICAuaDE7XG4gICAgICAgICAgLnRleHQtbGlnaHQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogQHBhZGRpbmc7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogQHBhZGRpbmctaGFsZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wZXJzb24tY2FyZF9fdGl0bGUge1xuICAgICAgICAgIC5oNDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBAcGFkZGluZy1kb3VibGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBlcnNvbi1jYXJkX19pbmZvLWl0ZW1zIHtcbiAgICAgICAgLnBlcnNvbi1jYXJkX19pbmZvLWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IEBwYWRkaW5nLXF1YXJ0ZXIgMDtcblxuICAgICAgICAgIC5wZXJzb24tY2FyZF9faW5mby1pdGVtLWxlZnQge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IEBwYWRkaW5nLXF1YXJ0ZXI7XG4gICAgICAgICAgICAudGV4dC11cHBlcmNhc2U7XG4gICAgICAgICAgICAudGV4dC1zbWFsbDtcbiAgICAgICAgICAgIC50ZXh0LWJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBlcnNvbi1jYXJkX19pbmZvLWl0ZW0tcmlnaHQge1xuICAgICAgICAgICAgLnRleHQtZ3JleTtcbiAgICAgICAgICAgIC50ZXh0LWxpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGVyc29uLWNhcmRfX3Bob3RvIHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgLy8gVE9ETyBVc2UgcG5nIGluc3RlYWRcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdtZS5qcGcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG4gICAgICAgICYucGVyc29uLWNhcmRfX3Bob3RvLS1sYXJnZSB7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBAcGFkZGluZztcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucy1ib3JkZXInO1xuXG4uY2FyZC1jb250YWluZXIoKSB7XG4gIG1hcmdpbi10b3A6IEBjYXJkLW1hcmdpbjtcbn1cblxuLmNhcmQtY29udGFpbmVyLWhhbGYoKSB7XG4gIC5kaXNwbGF5LWlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogQGNhcmQtY29udGFpbmVyLWhhbGYtc3BhY2luZy12IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IEBtcS1tZC1taW4pIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IEBwYWRkaW5nLW9uZS1hbmQtaGFsZjtcbiAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IEBwYWRkaW5nLW9uZS1hbmQtaGFsZjtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkKCkge1xuICAuYm9yZGVyU2hhZG93O1xuICBiYWNrZ3JvdW5kOiBAYmdDb2xvci1jYXJkO1xufVxuXG4uY2FyZC1wYWRkaW5nKCkge1xuICBwYWRkaW5nOiBAY2FyZC1wYWRkaW5nO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBAbXEteHhzLW1heCkge1xuICAgIHBhZGRpbmc6IEBjYXJkLXBhZGRpbmctaGFsZjtcbiAgfVxufVxuXG4uY2FyZC1hY3Rpb24oKSB7XG4gIC5ib3JkZXJTaGFkb3ctb24taG92ZXI7XG59XG5cbi5jYXJkLXRpdGxlKCkge1xuICAuaDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogQGNhcmQtdGl0bGUtbWFyZ2luO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uYm9yZGVyLXByaW1hcnkoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1wcmltYXJ5O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeSgpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlckNvbG9yLXNlY29uZGFyeTtcbn1cblxuLmJvcmRlci1jb2xvcigpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlckNvbG9yLWNvbG9yO1xufVxuXG4uYm9yZGVyLWNpcmN1bGFyKCkge1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ib3JkZXJTaGFkb3coKSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLmJvcmRlclNoYWRvdy1zdHJvbmcoQG9mZnNldDogMTBweCkge1xuICBib3gtc2hhZG93OiAwIEBvZmZzZXQgMzBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5ib3JkZXJTaGFkb3ctaW5zZXQoQG9mZnNldDogMTBweCkge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5ib3JkZXJTaGFkb3ctb24taG92ZXIoKSB7XG5cdC50cmFuc2l0aW9uLXNob3J0KGJveC1zaGFkb3cpO1xuICAmOmhvdmVyIHtcbiAgXHQuYm9yZGVyU2hhZG93LXN0cm9uZztcbiAgfVxufVxuXG4uaW5uZXJTaGFkb3ctb24tYWN0aXZlKCkge1xuICAudHJhbnNpdGlvbi1zaG9ydChib3gtc2hhZG93KTtcbiAgJjphY3RpdmUge1xuICAgIC5ib3JkZXJTaGFkb3ctaW5zZXQ7XG4gIH1cbn1cblxuLmJvcmRlci10b3AtYmFyKCkge1xuICBib3JkZXItdG9wOiBAbGluZVdpZHRoLXRoaWNrIHNvbGlkIEBjb2xvci1wcmltYXJ5O1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5mb250LXNpemUoQHNpemUsIEBsaW5lSGVpZ2h0OiBAc2l6ZSkge1xuICBmb250LXNpemU6IEBzaXplO1xuICBsaW5lLWhlaWdodDogQGxpbmVIZWlnaHQ7XG59XG5cblxuLnRleHQtcHJpbWFyeSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUpO1xuICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xuICBmb250LWZhbWlseTogQGZvbnQtcHJpbWFyeTtcbn1cblxuLnRleHQtYm9keSgpIHtcbiAgLnRleHQtcHJpbWFyeTtcbiAgbGluZS1oZWlnaHQ6IEB0ZXh0U2l6ZSArIDhweDtcbn1cblxuLnRleHQtZGFyaygpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbn1cblxuLnRleHQtZ3JleSgpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItbGlnaHQ7XG59XG5cbi50ZXh0LWxpZ2h0LWdyZXkoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLWxpZ2h0ZXI7XG59XG5cbi50ZXh0LWNvbG9yKCkge1xuICBjb2xvcjogQHRleHRDb2xvci1jb2xvcjtcbn1cblxuLnRleHQtb24tZGFyaygpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3Itb25EYXJrO1xufVxuXG5cbi50ZXh0LWxpZ2h0KCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtbGlnaHQ7XG59XG5cbi50ZXh0LWJvbGQoKSB7XG4gIGZvbnQtd2VpZ2h0OiBAdGV4dFdlaWdodC1ib2xkO1xufVxuXG4udGV4dC1ib2xkZXIoKSB7XG4gIGZvbnQtd2VpZ2h0OiBAdGV4dFdlaWdodC1ib2xkZXI7XG59XG5cblxuLmgxKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oMSk7XG59XG5cbi5oMigpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDIpO1xufVxuXG4uaDMoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWgzKTtcbn1cblxuLmg0KCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oNCk7XG59XG5cbi50ZXh0LXNtYWxsKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1zbWFsbCk7XG59XG5cbi50ZXh0LWxhcmdlKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1sYXJnZSk7XG59XG5cbi50ZXh0LXVwcGVyY2FzZSgpIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuXG4ubGluaygpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xuICB9XG59XG5cbi50ZXh0LWJ1YmJsZShAYXJyb3dEb3duOiB0cnVlLCBAYmdDb2xvcjogQHJlZC1saWdodCkge1xuICBAYXJyb3dTaXplOiA4cHg7XG4gIEBhcnJvd09mZnNldDogNXB4O1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogQGFycm93U2l6ZTtcbiAgcGFkZGluZzogQHBhZGRpbmctcXVhcnRlciBAcGFkZGluZy1oYWxmO1xuICBiYWNrZ3JvdW5kOiBAYmdDb2xvcjtcblxuICAuZGlzcGxheS1pbmxpbmUtYmxvY2s7XG4gIC50ZXh0LW9uLWRhcms7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogQGJnQ29sb3I7XG4gICAgLmRpc3BsYXktYmxvY2s7XG4gICAgLnNpemUoMCwgMCk7XG5cbiAgICBib3JkZXItd2lkdGg6IDAgMCBAYXJyb3dTaXplIEBhcnJvd1NpemU7XG4gICAgLnBvc2l0aW9uKGFic29sdXRlLCAxMDAlLCBhdXRvLCBhdXRvLCBAYXJyb3dPZmZzZXQpO1xuXG4gICAgJiB3aGVuIChAYXJyb3dEb3duID0gZmFsc2UpIHtcbiAgICAgIGJvcmRlci13aWR0aDogQGFycm93U2l6ZSAwIDAgQGFycm93U2l6ZTtcbiAgICAgIC5wb3NpdGlvbihhYnNvbHV0ZSwgYXV0bywgYXV0bywgMTAwJSwgQGFycm93T2Zmc2V0KTtcbiAgICB9XG4gIH1cbn0iLCJcbi8vIFZpc2liaWxpdHlcblxuLmhpZGRlbigpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRpc3BsYXktYmxvY2soKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGlzcGxheS1pbmxpbmUtYmxvY2soKSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4uY2xlYXJmaXgoKSB7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLnNpemUoQHdpZHRoOiBhdXRvLCBAaGVpZ2h0OiBhdXRvKSB7XG5cdHdpZHRoOiBAd2lkdGg7XG5cdGhlaWdodDogQGhlaWdodDtcbn1cblxuLnBvc2l0aW9uKEBwb3NpdGlvbjogcmVsYXRpdmUsIEB0b3A6IGF1dG8sIEByaWdodDogYXV0bywgQGJvdHRvbTogYXV0bywgQGxlZnQ6IGF1dG8pIHtcbiAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgdG9wOiBAdG9wO1xuICByaWdodDogQHJpZ2h0O1xuICBib3R0b206IEBib3R0b207XG4gIGxlZnQ6IEBsZWZ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cards/person-card/person-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/cards/person-card/person-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: PersonCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonCardComponent", function() { return PersonCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_person_info_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/person-info-items */ "./src/app/data/person-info-items.ts");



let PersonCardComponent = class PersonCardComponent {
    constructor() {
        this.infoItems = _data_person_info_items__WEBPACK_IMPORTED_MODULE_2__["INFO_ITEMS"];
    }
};
PersonCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-person-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./person-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/person-card/person-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./person-card.component.less */ "./src/app/components/cards/person-card/person-card.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PersonCardComponent);



/***/ }),

/***/ "./src/app/components/cards/skills-card/skills-card.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/cards/skills-card/skills-card.component.less ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.skills-card-container {\n  margin-top: 80px;\n}\n.skills-card-container .skills-card__title {\n  font-size: 34px;\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n}\n.skills-card-container .skills-card {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n  padding: 40px;\n}\n@media (max-width: 639px) {\n  .skills-card-container .skills-card {\n    padding: 20px;\n  }\n}\n.skills-card-container .skills-card .skills-card__skills .skill {\n  padding: 20px;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__title {\n  margin-bottom: 10px;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__bar-container {\n  position: relative;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__bar-container .skill__bar {\n  position: absolute;\n  height: 5px;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__bar-container .skill__bar.skill__bar--full {\n  width: 100%;\n  background-color: #e86767;\n  opacity: 0.3;\n  z-index: 10;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__bar-container .skill__bar.skill__bar--fill {\n  z-index: 20;\n  background-color: #e86767;\n  -webkit-transition: width ease-out 2s;\n  transition: width ease-out 2s;\n}\n.skills-card-container.not-activated .skill__bar.skill__bar--fill {\n  width: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9za2lsbHMtY2FyZC9za2lsbHMtY2FyZC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtYW5pbWF0aW9uLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9jb21wb25lbnRzL2NhcmRzL3NraWxscy1jYXJkL3NraWxscy1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1jYXJkLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLXRleHQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtYm9yZGVyLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWNvbG9yLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLXRyYW5zaXRpb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1QsV0FBVztBQUNYLFNBQVM7QUFDVCxZQUFZO0FBQ1osZUFBZTtBQUNmLGVBQWU7QUNnQmY7RUFDRTs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEYkY7RUNnQkE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRGJGO0VDZ0JBOzs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEWkY7RUNlQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEWkY7QUFDRjtBQ0hBO0VBQ0U7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGJGO0VDZ0JBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURiRjtFQ2dCQTs7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRFpGO0VDZUE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRFpGO0FBQ0Y7QUNlQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRGJGO0VDZ0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGRGO0FBQ0Y7QUNPQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRGJGO0VDZ0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGRGO0FBQ0Y7QUNpQkE7RUFDRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURmRjtFQ2tCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURoQkY7QUFDRjtBQ1NBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEZkY7RUNrQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEaEJGO0FBQ0Y7QUVyQ0E7RUNDRSxnQkFBQTtBSHVDRjtBRXhDQTtFRUFFLGVBQUE7RUFDQSxpQkFBQTtFRHNDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUhNRjtBRS9DQTtFR2dCRSx3RUFBQTtFRk1BLGdCQUFBO0VBSUEsYUFBQTtBSDBCRjtBR3hCRTtFQUFBO0lBQ0UsYUFBQTtFSDJCRjtBQUNGO0FFekRBO0VBY1EsYUFBQTtBRjhDUjtBRTVEQTtFQWlCVSxtQkFBQTtBRjhDVjtBRS9EQTtFQXFCVSxrQkFBQTtBRjZDVjtBRWxFQTtFQXdCWSxrQkFBQTtFQUNBLFdBQUE7QUY2Q1o7QUUzQ1k7RUFDRSxXQUFBO0VJcEJaLHlCQUFBO0VBS0EsWUFBQTtFSmlCWSxXQUFBO0FGOENkO0FFM0NZO0VBQ0UsV0FBQTtFSTFCWix5QkFBQTtFQ1JBLHFDQUFBO0VBQUEsNkJBQUE7QVBpRkY7QUVyQ0U7RUFFSSxtQkFBQTtBRnNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMvc2tpbGxzLWNhcmQvc2tpbGxzLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTaXplICovXG4vKiBDb2xvcnMgKi9cbi8qIFRleHQgKi9cbi8qIFNwYWNpbmcgKi9cbi8qIFogcG9zaXRpb24gKi9cbi8qIFRyYW5zaXRpb24gKi9cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICAyMCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG4gIDMwJSxcbiAgNTAlLFxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cbiAgNDAlLFxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZyb21SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5za2lsbHMtY2FyZC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuLnNraWxscy1jYXJkLWNvbnRhaW5lciAuc2tpbGxzLWNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5za2lsbHMtY2FyZC1jb250YWluZXIgLnNraWxscy1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIC5za2lsbHMtY2FyZC1jb250YWluZXIgLnNraWxscy1jYXJkIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4uc2tpbGxzLWNhcmQtY29udGFpbmVyIC5za2lsbHMtY2FyZCAuc2tpbGxzLWNhcmRfX3NraWxscyAuc2tpbGwge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnNraWxscy1jYXJkLWNvbnRhaW5lciAuc2tpbGxzLWNhcmQgLnNraWxscy1jYXJkX19za2lsbHMgLnNraWxsIC5za2lsbF9fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNraWxscy1jYXJkLWNvbnRhaW5lciAuc2tpbGxzLWNhcmQgLnNraWxscy1jYXJkX19za2lsbHMgLnNraWxsIC5za2lsbF9fYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5za2lsbHMtY2FyZC1jb250YWluZXIgLnNraWxscy1jYXJkIC5za2lsbHMtY2FyZF9fc2tpbGxzIC5za2lsbCAuc2tpbGxfX2Jhci1jb250YWluZXIgLnNraWxsX19iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNXB4O1xufVxuLnNraWxscy1jYXJkLWNvbnRhaW5lciAuc2tpbGxzLWNhcmQgLnNraWxscy1jYXJkX19za2lsbHMgLnNraWxsIC5za2lsbF9fYmFyLWNvbnRhaW5lciAuc2tpbGxfX2Jhci5za2lsbF9fYmFyLS1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODY3Njc7XG4gIG9wYWNpdHk6IDAuMztcbiAgei1pbmRleDogMTA7XG59XG4uc2tpbGxzLWNhcmQtY29udGFpbmVyIC5za2lsbHMtY2FyZCAuc2tpbGxzLWNhcmRfX3NraWxscyAuc2tpbGwgLnNraWxsX19iYXItY29udGFpbmVyIC5za2lsbF9fYmFyLnNraWxsX19iYXItLWZpbGwge1xuICB6LWluZGV4OiAyMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4Njc2NztcbiAgdHJhbnNpdGlvbjogd2lkdGggZWFzZS1vdXQgMnM7XG59XG4uc2tpbGxzLWNhcmQtY29udGFpbmVyLm5vdC1hY3RpdmF0ZWQgLnNraWxsX19iYXIuc2tpbGxfX2Jhci0tZmlsbCB7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG4iLCJcbi5zaGFrZS1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogc2hha2UgMXMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45NykgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG5AbW92ZS1hbmltYXRpb24tc3RhcnQ6IDIwMCU7XG5AbW92ZS1hbmltYXRpb24tZHVyYXRpb246IDYwMG1zO1xuXG4uZnJvbS1sZWZ0LWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBmcm9tTGVmdCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbn1cblxuLmZyb20tcmlnaHQtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IGZyb21SaWdodCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLCA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgXG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cblxuICAzMCUsIDUwJSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG5cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZyb21MZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLUBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZnJvbVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9sZXNzLWxpYnJhcnkvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uLy4uL2xlc3MtbGlicmFyeS9taXhpbnMnO1xuXG4uc2tpbGxzLWNhcmQtY29udGFpbmVyIHtcbiAgLmNhcmQtY29udGFpbmVyO1xuICBcbiAgLnNraWxscy1jYXJkX190aXRsZSB7XG4gICAgLmNhcmQtdGl0bGU7XG4gIH1cblxuICAuc2tpbGxzLWNhcmQge1xuICAgIC5jYXJkO1xuICAgIC5jYXJkLXBhZGRpbmc7XG5cbiAgICAuc2tpbGxzLWNhcmRfX3NraWxscyB7XG4gICAgICBcbiAgICAgIC5za2lsbCB7XG4gICAgICAgIHBhZGRpbmc6IEBwYWRkaW5nO1xuXG4gICAgICAgIC5za2lsbF9fdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IEBwYWRkaW5nLWhhbGY7XG4gICAgICAgIH1cblxuICAgICAgICAuc2tpbGxfX2Jhci1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIC5za2lsbF9fYmFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogQGxpbmVXaWR0aC10aGljaztcblxuICAgICAgICAgICAgJi5za2lsbF9fYmFyLS1mdWxsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIC5iZy1iYXI7XG4gICAgICAgICAgICAgIHotaW5kZXg6IEB6LTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2tpbGxfX2Jhci0tZmlsbCB7XG4gICAgICAgICAgICAgIHotaW5kZXg6IEB6LTI7XG4gICAgICAgICAgICAgIC5iYXI7XG4gICAgICAgICAgICAgIC50cmFuc2l0aW9uLWV4dHJhLWxvbmcod2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYubm90LWFjdGl2YXRlZCB7XG4gICAgLnNraWxsX19iYXIuc2tpbGxfX2Jhci0tZmlsbCB7XG4gICAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMtYm9yZGVyJztcblxuLmNhcmQtY29udGFpbmVyKCkge1xuICBtYXJnaW4tdG9wOiBAY2FyZC1tYXJnaW47XG59XG5cbi5jYXJkLWNvbnRhaW5lci1oYWxmKCkge1xuICAuZGlzcGxheS1pbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IEBjYXJkLWNvbnRhaW5lci1oYWxmLXNwYWNpbmctdiAwO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiBAbXEtbWQtbWluKSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBAcGFkZGluZy1vbmUtYW5kLWhhbGY7XG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgcGFkZGluZy1sZWZ0OiBAcGFkZGluZy1vbmUtYW5kLWhhbGY7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCgpIHtcbiAgLmJvcmRlclNoYWRvdztcbiAgYmFja2dyb3VuZDogQGJnQ29sb3ItY2FyZDtcbn1cblxuLmNhcmQtcGFkZGluZygpIHtcbiAgcGFkZGluZzogQGNhcmQtcGFkZGluZztcblxuICBAbWVkaWEgKG1heC13aWR0aDogQG1xLXh4cy1tYXgpIHtcbiAgICBwYWRkaW5nOiBAY2FyZC1wYWRkaW5nLWhhbGY7XG4gIH1cbn1cblxuLmNhcmQtYWN0aW9uKCkge1xuICAuYm9yZGVyU2hhZG93LW9uLWhvdmVyO1xufVxuXG4uY2FyZC10aXRsZSgpIHtcbiAgLmgyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IEBjYXJkLXRpdGxlLW1hcmdpbjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmZvbnQtc2l6ZShAc2l6ZSwgQGxpbmVIZWlnaHQ6IEBzaXplKSB7XG4gIGZvbnQtc2l6ZTogQHNpemU7XG4gIGxpbmUtaGVpZ2h0OiBAbGluZUhlaWdodDtcbn1cblxuXG4udGV4dC1wcmltYXJ5KCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZSk7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1wcmltYXJ5O1xufVxuXG4udGV4dC1ib2R5KCkge1xuICAudGV4dC1wcmltYXJ5O1xuICBsaW5lLWhlaWdodDogQHRleHRTaXplICsgOHB4O1xufVxuXG4udGV4dC1kYXJrKCkge1xuICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xufVxuXG4udGV4dC1ncmV5KCkge1xuICBjb2xvcjogQHRleHRDb2xvci1saWdodDtcbn1cblxuLnRleHQtbGlnaHQtZ3JleSgpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItbGlnaHRlcjtcbn1cblxuLnRleHQtY29sb3IoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLWNvbG9yO1xufVxuXG4udGV4dC1vbi1kYXJrKCkge1xuICBjb2xvcjogQHRleHRDb2xvci1vbkRhcms7XG59XG5cblxuLnRleHQtbGlnaHQoKSB7XG4gIGZvbnQtd2VpZ2h0OiBAdGV4dFdlaWdodC1saWdodDtcbn1cblxuLnRleHQtYm9sZCgpIHtcbiAgZm9udC13ZWlnaHQ6IEB0ZXh0V2VpZ2h0LWJvbGQ7XG59XG5cbi50ZXh0LWJvbGRlcigpIHtcbiAgZm9udC13ZWlnaHQ6IEB0ZXh0V2VpZ2h0LWJvbGRlcjtcbn1cblxuXG4uaDEoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWgxKTtcbn1cblxuLmgyKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oMik7XG59XG5cbi5oMygpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDMpO1xufVxuXG4uaDQoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWg0KTtcbn1cblxuLnRleHQtc21hbGwoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLXNtYWxsKTtcbn1cblxuLnRleHQtbGFyZ2UoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWxhcmdlKTtcbn1cblxuLnRleHQtdXBwZXJjYXNlKCkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi5saW5rKCkge1xuICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIsICY6YWN0aXZlLCAmOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG4gIH1cbn1cblxuLnRleHQtYnViYmxlKEBhcnJvd0Rvd246IHRydWUsIEBiZ0NvbG9yOiBAcmVkLWxpZ2h0KSB7XG4gIEBhcnJvd1NpemU6IDhweDtcbiAgQGFycm93T2Zmc2V0OiA1cHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiBAYXJyb3dTaXplO1xuICBwYWRkaW5nOiBAcGFkZGluZy1xdWFydGVyIEBwYWRkaW5nLWhhbGY7XG4gIGJhY2tncm91bmQ6IEBiZ0NvbG9yO1xuXG4gIC5kaXNwbGF5LWlubGluZS1ibG9jaztcbiAgLnRleHQtb24tZGFyaztcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBAYmdDb2xvcjtcbiAgICAuZGlzcGxheS1ibG9jaztcbiAgICAuc2l6ZSgwLCAwKTtcblxuICAgIGJvcmRlci13aWR0aDogMCAwIEBhcnJvd1NpemUgQGFycm93U2l6ZTtcbiAgICAucG9zaXRpb24oYWJzb2x1dGUsIDEwMCUsIGF1dG8sIGF1dG8sIEBhcnJvd09mZnNldCk7XG5cbiAgICAmIHdoZW4gKEBhcnJvd0Rvd24gPSBmYWxzZSkge1xuICAgICAgYm9yZGVyLXdpZHRoOiBAYXJyb3dTaXplIDAgMCBAYXJyb3dTaXplO1xuICAgICAgLnBvc2l0aW9uKGFic29sdXRlLCBhdXRvLCBhdXRvLCAxMDAlLCBAYXJyb3dPZmZzZXQpO1xuICAgIH1cbiAgfVxufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5ib3JkZXItcHJpbWFyeSgpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlckNvbG9yLXByaW1hcnk7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5KCkge1xuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyQ29sb3Itc2Vjb25kYXJ5O1xufVxuXG4uYm9yZGVyLWNvbG9yKCkge1xuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyQ29sb3ItY29sb3I7XG59XG5cbi5ib3JkZXItY2lyY3VsYXIoKSB7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJvcmRlclNoYWRvdygpIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4uYm9yZGVyU2hhZG93LXN0cm9uZyhAb2Zmc2V0OiAxMHB4KSB7XG4gIGJveC1zaGFkb3c6IDAgQG9mZnNldCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cblxuLmJvcmRlclNoYWRvdy1pbnNldChAb2Zmc2V0OiAxMHB4KSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLmJvcmRlclNoYWRvdy1vbi1ob3ZlcigpIHtcblx0LnRyYW5zaXRpb24tc2hvcnQoYm94LXNoYWRvdyk7XG4gICY6aG92ZXIge1xuICBcdC5ib3JkZXJTaGFkb3ctc3Ryb25nO1xuICB9XG59XG5cbi5pbm5lclNoYWRvdy1vbi1hY3RpdmUoKSB7XG4gIC50cmFuc2l0aW9uLXNob3J0KGJveC1zaGFkb3cpO1xuICAmOmFjdGl2ZSB7XG4gICAgLmJvcmRlclNoYWRvdy1pbnNldDtcbiAgfVxufVxuXG4uYm9yZGVyLXRvcC1iYXIoKSB7XG4gIGJvcmRlci10b3A6IEBsaW5lV2lkdGgtdGhpY2sgc29saWQgQGNvbG9yLXByaW1hcnk7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmJnLXByaW1hcnkoKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBiZ0NvbG9yLXByaW1hcnk7XG59XG5cbi5iZy1zZWNvbmRhcnkoKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBiZ0NvbG9yLXNlY29uZGFyeTtcbn1cblxuLmJnLWNvbG9yKCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAY29sb3ItcHJpbWFyeTtcbn1cblxuLmJnLWJhcigpIHtcbiAgLmJnLWNvbG9yO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5iYXIoKSB7XG4gIC5iZy1jb2xvcjtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4udHJhbnNpdGlvbihAcHJvcDphbGwsIEB0aW1lOkB0cmFuc2l0aW9uRHVyYXRpb24tbm9ybWFsKSB7XG4gIHRyYW5zaXRpb246IEBwcm9wIEB0cmFuc2l0aW9uVGltaW5nIEB0aW1lO1xufVxuXG4udHJhbnNpdGlvbi1zaG9ydChAcHJvcDphbGwpIHtcbiAgLnRyYW5zaXRpb24oQHByb3AsIEB0cmFuc2l0aW9uRHVyYXRpb24tc2hvcnQpO1xufVxuXG4udHJhbnNpdGlvbi1sb25nKEBwcm9wOmFsbCkge1xuICAudHJhbnNpdGlvbihAcHJvcCwgQHRyYW5zaXRpb25EdXJhdGlvbi1sb25nKTtcbn1cblxuLnRyYW5zaXRpb24tZXh0cmEtbG9uZyhAcHJvcDphbGwpIHtcbiAgLnRyYW5zaXRpb24oQHByb3AsIEB0cmFuc2l0aW9uRHVyYXRpb24tZXh0cmEtbG9uZyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/cards/skills-card/skills-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/cards/skills-card/skills-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: SkillsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsCardComponent", function() { return SkillsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_skill_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/skill-items */ "./src/app/data/skill-items.ts");



let SkillsCardComponent = class SkillsCardComponent {
    constructor() {
        this.skillItems = _data_skill_items__WEBPACK_IMPORTED_MODULE_2__["SKILL_ITEMS"];
    }
};
SkillsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/skills-card/skills-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills-card.component.less */ "./src/app/components/cards/skills-card/skills-card.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SkillsCardComponent);



/***/ }),

/***/ "./src/app/components/cards/timeline/timeline.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/components/cards/timeline/timeline.component.less ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.timeline {\n  margin-top: 80px;\n}\n.timeline .timeline__title {\n  font-size: 34px;\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n  margin-bottom: 20px;\n}\n.timeline .timeline-cards-container {\n  position: relative;\n}\n.timeline .timeline-cards-container:before {\n  content: '';\n  position: absolute;\n  top: 70px;\n  right: calc( 50% -  2px );\n  bottom: 20px;\n  left: auto;\n  z-index: -1;\n  width: 5px;\n  background-color: #e86767;\n  opacity: 0.3;\n  -webkit-transition: opacity ease-out 2s;\n  transition: opacity ease-out 2s;\n}\n.timeline .timeline-cards-container .timeline-card-container {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  padding: 20px 0;\n}\n@media (min-width: 992px) {\n  .timeline .timeline-cards-container .timeline-card-container {\n    width: 50%;\n    padding-right: 30px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(even) {\n    padding-left: 30px;\n    padding-right: 0;\n  }\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card {\n  position: relative;\n  min-height: 200px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n  -webkit-transition: box-shadow ease-out 0.2s;\n  transition: box-shadow ease-out 0.2s;\n  padding: 40px;\n  border-top: 5px solid #e86767;\n  padding-top: 20px;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n}\n@media (max-width: 639px) {\n  .timeline .timeline-cards-container .timeline-card-container .timeline-card {\n    padding: 20px;\n  }\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__years {\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 700;\n  color: #e86767;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 30px;\n  height: 30px;\n  background-size: cover;\n  opacity: 0.5;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  -webkit-transition: all ease-out 0.5s;\n  transition: all ease-out 0.5s;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--pbolaget {\n  background-image: url('pbolaget.png');\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--securitas {\n  background-image: url('securitas.png');\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--tunstall {\n  background-image: url('tunstall.png');\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--telia {\n  background-image: url('telia.png');\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--hiq {\n  background-image: url('hiq.png');\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--vodafone {\n  background-image: url('vodafone.png');\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--spotfire {\n  background-image: url('spotfire.png');\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--carmenta {\n  background-image: url('carmenta.png');\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--liu {\n  background-image: url('liu.png');\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__city {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-weight: 600;\n  color: #9da0a7;\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 13px;\n}\n@media (max-width: 639px) {\n  .timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__city {\n    position: relative;\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__title {\n  margin-bottom: 10px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 22px;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__subtitle {\n  margin-bottom: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 13px;\n  color: #9da0a7;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__description {\n  margin-bottom: 20px;\n  font-size: 16px;\n  line-height: 16px;\n  color: #3d4451;\n  font-family: \"Open Sans\", \"sans-serif\";\n  line-height: 24px;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies {\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 13px;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies .timeline-card__technology {\n  float: left;\n  padding: 5px;\n  opacity: 0.5;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies .timeline-card__technology:hover {\n  opacity: 1;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies .timeline-card__technology.timeline-card__technology--selected {\n  color: #e86767;\n  opacity: 1;\n}\n.timeline .timeline-cards-container .timeline-card-container:hover .timeline-card {\n  cursor: pointer;\n}\n.timeline .timeline-cards-container .timeline-card-container:hover .timeline-card .timeline-card__logo {\n  opacity: 1;\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n}\n.timeline .timeline-cards-container .timeline-card-container:hover .timeline__dot {\n  opacity: 1;\n}\n.timeline .timeline-cards-container .timeline-card-container:hover .timeline__dot:before {\n  opacity: 1;\n}\n@media (min-width: 992px) {\n  .timeline .timeline-cards-container .timeline-card-container .timeline-card__arrow {\n    position: absolute;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 20px 10px;\n    background-image: url('arrows.png');\n    background-repeat: no-repeat;\n    background-position-y: -20px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container .timeline__dot {\n    content: '';\n    position: absolute;\n    width: 11px;\n    height: 11px;\n    border-radius: 50%;\n    background-color: #e86767;\n    opacity: 0.5;\n    -webkit-transition: opacity ease-out 2s;\n    transition: opacity ease-out 2s;\n  }\n  .timeline .timeline-cards-container .timeline-card-container .timeline__dot:before {\n    content: '';\n    position: absolute;\n    margin: -5px;\n    width: 21px;\n    height: 21px;\n    border-radius: 50%;\n    border: 3px solid #e86767;\n    opacity: 0;\n    -webkit-transition: opacity ease-out 0.5s;\n    transition: opacity ease-out 0.5s;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--left {\n    -webkit-animation: fromLeft 600ms ease-out both;\n            animation: fromLeft 600ms ease-out both;\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--left .timeline__dot {\n    top: 70px;\n    right: -5px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--left .timeline-card__arrow {\n    top: 30px;\n    right: -20px;\n    border-left-color: #fff;\n    background-position-x: -28px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right {\n    -webkit-animation: fromRight 600ms ease-out both;\n            animation: fromRight 600ms ease-out both;\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right .timeline__dot {\n    bottom: 70px;\n    left: -6px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right .timeline-card .timeline-card__arrow {\n    bottom: 35px;\n    left: -20px;\n    border-right-color: #fff;\n    background-position-x: -2px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right .timeline-card .timeline-card__logo {\n    right: 10px;\n    left: auto;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right .timeline-card .timeline-card__city {\n    left: 20px;\n    right: auto;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(2) {\n    -webkit-animation-delay: 200ms;\n            animation-delay: 200ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(3) {\n    -webkit-animation-delay: 180ms;\n            animation-delay: 180ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(4) {\n    -webkit-animation-delay: 400ms;\n            animation-delay: 400ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(5) {\n    -webkit-animation-delay: 380ms;\n            animation-delay: 380ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(6) {\n    -webkit-animation-delay: 600ms;\n            animation-delay: 600ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(7) {\n    -webkit-animation-delay: 580ms;\n            animation-delay: 580ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(8) {\n    -webkit-animation-delay: 800ms;\n            animation-delay: 800ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(9) {\n    -webkit-animation-delay: 780ms;\n            animation-delay: 780ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(10) {\n    -webkit-animation-delay: 1000ms;\n            animation-delay: 1000ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(11) {\n    -webkit-animation-delay: 980ms;\n            animation-delay: 980ms;\n  }\n}\n.timeline.not-activated .timeline-cards-container:before,\n.timeline.not-activated .timeline__dot {\n  opacity: 0 !important;\n}\n.timeline.not-activated .timeline-card-container--left {\n  -webkit-animation: none !important;\n          animation: none !important;\n}\n.timeline.not-activated .timeline-card-container--right {\n  -webkit-animation: none !important;\n          animation: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtYW5pbWF0aW9uLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9jb21wb25lbnRzL2NhcmRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1jYXJkLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLXRleHQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtZ2VuZXJhbC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1jb2xvci5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy10cmFuc2l0aW9uLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWJvcmRlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsU0FBUztBQUNULFlBQVk7QUFDWixlQUFlO0FBQ2YsZUFBZTtBQ2dCZjtFQUNFOztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURiRjtFQ2dCQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEYkY7RUNnQkE7OztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURaRjtFQ2VBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURaRjtBQUNGO0FDSEE7RUFDRTs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEYkY7RUNnQkE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRGJGO0VDZ0JBOzs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEWkY7RUNlQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEWkY7QUFDRjtBQ2VBO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VEYkY7RUNnQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEZEY7QUFDRjtBQ09BO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VEYkY7RUNnQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEZEY7QUFDRjtBQ2lCQTtFQUNFO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGZGO0VDa0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGhCRjtBQUNGO0FDU0E7RUFDRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURmRjtFQ2tCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURoQkY7QUFDRjtBRWpCQTtFQ25CRSxnQkFBQTtBSHVDRjtBRXBCQTtFRXBCRSxlQUFBO0VBQ0EsaUJBQUE7RURzQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VEaEJFLG1CQUFBO0FGdUJKO0FFNUJBO0VBU0ksa0JBQUE7QUZzQko7QUVuQkk7RUFDRSxXQUFBO0VHTkosa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFSElJLFdBQUE7RUFDQSxVQUFBO0VJNUJKLHlCQUFBO0VBS0EsWUFBQTtFQ2JBLHVDQUFBO0VBQUEsK0JBQUE7QVBnRUY7QUU1Q0E7RUdYRSxxQkFBQTtFRkhBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUg4REY7QUc1REU7RUFBQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFSCtERjtFRzlERTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7RUhnRUo7QUFDRjtBRTVEQTtFQXlCUSxrQkFBQTtFQUNBLGlCQUFBO0VNOUJOLHdFQUFBO0VMTUEsZ0JBQUE7RUl0QkEsNENBQUE7RUFBQSxvQ0FBQTtFSjBCQSxhQUFBO0VLZ0JBLDZCQUFBO0VOU00saUJBQUE7QUZ1Q1I7QVE3REU7RUFUQSwyRUFBQTtBUnlFRjtBR2pFRTtFQUFBO0lBQ0UsYUFBQTtFSG9FRjtBQUNGO0FFOUVBO0VBa0NVLG1CQUFBO0VBQ0Esa0JBQUE7RUVUUixnQkFBQTtFQWpCQSxjQUFBO0FKMkVGO0FFcEZBO0VBeUNVLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUd6Q1QsV0FBQTtFQUNBLFlBQUE7RUgwQ1Msc0JBQUE7RUFFQSxZQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFS3BFUixxQ0FBQTtFQUFBLDZCQUFBO0FQbUhGO0FDckhBO0VDZ1NNLHFDQUFBO0FGeEtOO0FDeEhBO0VDZ1NNLHNDQUFBO0FGcktOO0FDM0hBO0VDZ1NNLHFDQUFBO0FGbEtOO0FDOUhBO0VDZ1NNLGtDQUFBO0FGL0pOO0FDaklBO0VDZ1NNLGdDQUFBO0FGNUpOO0FDcElBO0VDZ1NNLHFDQUFBO0FGekpOO0FDdklBO0VDZ1NNLHFDQUFBO0FGdEpOO0FDMUlBO0VDZ1NNLHFDQUFBO0FGbkpOO0FDN0lBO0VDZ1NNLGdDQUFBO0FGaEpOO0FFMUhBO0VBK0RVLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUUzQ1IsZ0JBQUE7RUFyQkEsY0FBQTtFQXNEQSx5QkFBQTtFQTNFQSxlQUFBO0VBQ0EsaUJBQUE7QUp1SkY7QUU3RFU7RUFBQTtJR2hFUixrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUg4RFUsa0JBQUE7SUFDQSxtQkFBQTtFRm9FVjtBQUNGO0FFL0lBO0VBK0VVLG1CQUFBO0VBQ0Esa0JBQUE7RUUxRFIsZ0JBQUE7RUExQ0EsZUFBQTtFQUNBLGlCQUFBO0FKeUtGO0FFdEpBO0VBc0ZVLG1CQUFBO0VBQ0Esa0JBQUE7RUVoQ1IseUJBQUE7RUEzRUEsZUFBQTtFQUNBLGlCQUFBO0VBb0JBLGNBQUE7QUo2SkY7QUU5SkE7RUE4RlUsbUJBQUE7RUVsSFIsZUFBQTtFQUNBLGlCQUFBO0VBTUEsY0FBQTtFQUNBLHNDQUFBO0VBS0EsaUJBQUE7QUo2S0Y7QUV0S0E7RUV1REUseUJBQUE7RUEzRUEsZUFBQTtFQUNBLGlCQUFBO0FKOExGO0FLakxFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FMbUxKO0FFaExBO0VBd0dZLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRjJFWjtBRXpFWTtFQUNFLFVBQUE7QUYyRWQ7QUV4RVk7RUV2R1YsY0FBQTtFRnlHWSxVQUFBO0FGMEVkO0FFcEVNO0VBRUksZUFBQTtBRnFFVjtBRXZFTTtFQUtNLFVBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FGcUVaO0FFM0VNO0VBV0ksVUFBQTtBRm1FVjtBRWpFVTtFQUNFLFVBQUE7QUZtRVo7QUU5RE07RUFBQTtJQUlJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLHVCQUFBO0lBRUEsbUNBQUE7SUFDQSw0QkFBQTtJQUNBLDRCQUFBO0VGNkRSO0VFeEVJO0lBZ0JJLFdBQUE7SUFDQSxrQkFBQTtJRzFKVCxXQUFBO0lBQ0EsWUFBQTtJR1hBLGtCQUFBO0lGSkMseUJBQUE7SUo2S1EsWUFBQTtJS3JMUix1Q0FBQTtJQUFBLCtCQUFBO0VQaVBBO0VFeERRO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJR3RLWCxXQUFBO0lBQ0EsWUFBQTtJR1hBLGtCQUFBO0lObUxXLHlCQUFBO0lBRUEsVUFBQTtJS2pNVix5Q0FBQTtJQUFBLGlDQUFBO0VQNFBBO0VFdERNO0lEN0xOLCtDQUFBO1lBQUEsdUNBQUE7SUFDQSwyQ0FBQTtZQUFBLG1DQUFBO0VEc1BBO0VFMURNO0lBS0ksU0FBQTtJQUNBLFdBQUE7RUZ3RFY7RUU5RE07SUFXSSxTQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0EsNEJBQUE7RUZzRFY7RUVsRE07SUQxTU4sZ0RBQUE7WUFBQSx3Q0FBQTtJQUNBLDBDQUFBO1lBQUEsa0NBQUE7RUQrUEE7RUV0RE07SUFLSSxZQUFBO0lBQ0EsVUFBQTtFRm9EVjtFRTFETTtJQVlNLFlBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSwyQkFBQTtFRmlEWjtFRWhFTTtJQW1CTSxXQUFBO0lBQ0EsVUFBQTtFRmdEWjtFRXBFTTtJQXdCTSxVQUFBO0lBQ0EsV0FBQTtFRitDWjtFRWJFO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtFRmVKO0VFYkU7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0VGZUo7RUVuQkU7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0VGcUJKO0VFbkJFO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtFRnFCSjtFRXpCRTtJQUNFLDhCQUFBO1lBQUEsc0JBQUE7RUYyQko7RUV6QkU7SUFDRSw4QkFBQTtZQUFBLHNCQUFBO0VGMkJKO0VFL0JFO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtFRmlDSjtFRS9CRTtJQUNFLDhCQUFBO1lBQUEsc0JBQUE7RUZpQ0o7RUVyQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VGdUNKO0VFckNFO0lBQ0UsOEJBQUE7WUFBQSxzQkFBQTtFRnVDSjtBQUNGO0FFOURFOztFQUdJLHFCQUFBO0FGK0ROO0FFbEVFO0VBT0ksa0NBQUE7VUFBQSwwQkFBQTtBRjhETjtBRXJFRTtFQVdJLGtDQUFBO1VBQUEsMEJBQUE7QUY2RE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2l6ZSAqL1xuLyogQ29sb3JzICovXG4vKiBUZXh0ICovXG4vKiBTcGFjaW5nICovXG4vKiBaIHBvc2l0aW9uICovXG4vKiBUcmFuc2l0aW9uICovXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLFxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgMjAlLFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuICAzMCUsXG4gIDUwJSxcbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG4gIDQwJSxcbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4udGltZWxpbmUge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZV9fdGl0bGUge1xuICBmb250LXNpemU6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwcHg7XG4gIHJpZ2h0OiBjYWxjKCA1MCUgLSAgMnB4ICk7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogYXV0bztcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODY3Njc7XG4gIG9wYWNpdHk6IDAuMztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLW91dCAycztcbn1cbi50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lcjpudGgtY2hpbGQoZXZlbikge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgZWFzZS1vdXQgMC4ycztcbiAgcGFkZGluZzogNDBweDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNlODY3Njc7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX195ZWFycyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNlODY3Njc7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQgLnRpbWVsaW5lLWNhcmRfX2xvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMC41O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IDAuNXM7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQgLnRpbWVsaW5lLWNhcmRfX2xvZ28udGltZWxpbmUtY2FyZF9fbG9nby0tcGJvbGFnZXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltZy9wYm9sYWdldC5wbmdcIik7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQgLnRpbWVsaW5lLWNhcmRfX2xvZ28udGltZWxpbmUtY2FyZF9fbG9nby0tc2VjdXJpdGFzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWcvc2VjdXJpdGFzLnBuZ1wiKTtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZCAudGltZWxpbmUtY2FyZF9fbG9nby50aW1lbGluZS1jYXJkX19sb2dvLS10dW5zdGFsbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vaW1nL3R1bnN0YWxsLnBuZ1wiKTtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZCAudGltZWxpbmUtY2FyZF9fbG9nby50aW1lbGluZS1jYXJkX19sb2dvLS10ZWxpYSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vaW1nL3RlbGlhLnBuZ1wiKTtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZCAudGltZWxpbmUtY2FyZF9fbG9nby50aW1lbGluZS1jYXJkX19sb2dvLS1oaXEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2ltZy9oaXEucG5nXCIpO1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX19sb2dvLnRpbWVsaW5lLWNhcmRfX2xvZ28tLXZvZGFmb25lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWcvdm9kYWZvbmUucG5nXCIpO1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX19sb2dvLnRpbWVsaW5lLWNhcmRfX2xvZ28tLXNwb3RmaXJlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWcvc3BvdGZpcmUucG5nXCIpO1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX19sb2dvLnRpbWVsaW5lLWNhcmRfX2xvZ28tLWNhcm1lbnRhIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWcvY2FybWVudGEucG5nXCIpO1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX19sb2dvLnRpbWVsaW5lLWNhcmRfX2xvZ28tLWxpdSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vaW1nL2xpdS5wbmdcIik7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQgLnRpbWVsaW5lLWNhcmRfX2NpdHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOWRhMGE3O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZCAudGltZWxpbmUtY2FyZF9fY2l0eSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgICBib3R0b206IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZCAudGltZWxpbmUtY2FyZF9fc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjOWRhMGE3O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjM2Q0NDUxO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJzYW5zLXNlcmlmXCI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX190ZWNobm9sb2dpZXMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX190ZWNobm9sb2dpZXM6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQgLnRpbWVsaW5lLWNhcmRfX3RlY2hub2xvZ2llcyAudGltZWxpbmUtY2FyZF9fdGVjaG5vbG9neSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA1cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZCAudGltZWxpbmUtY2FyZF9fdGVjaG5vbG9naWVzIC50aW1lbGluZS1jYXJkX190ZWNobm9sb2d5OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZCAudGltZWxpbmUtY2FyZF9fdGVjaG5vbG9naWVzIC50aW1lbGluZS1jYXJkX190ZWNobm9sb2d5LnRpbWVsaW5lLWNhcmRfX3RlY2hub2xvZ3ktLXNlbGVjdGVkIHtcbiAgY29sb3I6ICNlODY3Njc7XG4gIG9wYWNpdHk6IDE7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXI6aG92ZXIgLnRpbWVsaW5lLWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXI6aG92ZXIgLnRpbWVsaW5lLWNhcmQgLnRpbWVsaW5lLWNhcmRfX2xvZ28ge1xuICBvcGFjaXR5OiAxO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG59XG4udGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXI6aG92ZXIgLnRpbWVsaW5lX19kb3Qge1xuICBvcGFjaXR5OiAxO1xufVxuLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyOmhvdmVyIC50aW1lbGluZV9fZG90OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIC50aW1lbGluZS1jYXJkX19hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItd2lkdGg6IDIwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvYXJyb3dzLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yMHB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lciAudGltZWxpbmVfX2RvdCB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4Njc2NztcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLW91dCAycztcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIgLnRpbWVsaW5lX19kb3Q6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiAtNXB4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2U4Njc2NztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1vdXQgMC41cztcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIudGltZWxpbmUtY2FyZC1jb250YWluZXItLWxlZnQge1xuICAgIGFuaW1hdGlvbjogZnJvbUxlZnQgNjAwbXMgZWFzZS1vdXQgYm90aDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAlLCAwLCAwKTtcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIudGltZWxpbmUtY2FyZC1jb250YWluZXItLWxlZnQgLnRpbWVsaW5lX19kb3Qge1xuICAgIHRvcDogNzBweDtcbiAgICByaWdodDogLTVweDtcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIudGltZWxpbmUtY2FyZC1jb250YWluZXItLWxlZnQgLnRpbWVsaW5lLWNhcmRfX2Fycm93IHtcbiAgICB0b3A6IDMwcHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTI4cHg7XG4gIH1cbiAgLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyLS1yaWdodCB7XG4gICAgYW5pbWF0aW9uOiBmcm9tUmlnaHQgNjAwbXMgZWFzZS1vdXQgYm90aDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApO1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lci50aW1lbGluZS1jYXJkLWNvbnRhaW5lci0tcmlnaHQgLnRpbWVsaW5lX19kb3Qge1xuICAgIGJvdHRvbTogNzBweDtcbiAgICBsZWZ0OiAtNnB4O1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lci50aW1lbGluZS1jYXJkLWNvbnRhaW5lci0tcmlnaHQgLnRpbWVsaW5lLWNhcmQgLnRpbWVsaW5lLWNhcmRfX2Fycm93IHtcbiAgICBib3R0b206IDM1cHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTJweDtcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXIudGltZWxpbmUtY2FyZC1jb250YWluZXItLXJpZ2h0IC50aW1lbGluZS1jYXJkIC50aW1lbGluZS1jYXJkX19sb2dvIHtcbiAgICByaWdodDogMTBweDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lci50aW1lbGluZS1jYXJkLWNvbnRhaW5lci0tcmlnaHQgLnRpbWVsaW5lLWNhcmQgLnRpbWVsaW5lLWNhcmRfX2NpdHkge1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgcmlnaHQ6IGF1dG87XG4gIH1cbiAgLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXI6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDE4MG1zO1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lcjpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XG4gIH1cbiAgLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyOm50aC1jaGlsZCg1KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzODBtcztcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXI6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDYwMG1zO1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lcjpudGgtY2hpbGQoNykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogNTgwbXM7XG4gIH1cbiAgLnRpbWVsaW5lIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyOm50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA4MDBtcztcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXI6bnRoLWNoaWxkKDkpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDc4MG1zO1xuICB9XG4gIC50aW1lbGluZSAudGltZWxpbmUtY2FyZHMtY29udGFpbmVyIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lcjpudGgtY2hpbGQoMTApIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwMDBtcztcbiAgfVxuICAudGltZWxpbmUgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lciAudGltZWxpbmUtY2FyZC1jb250YWluZXI6bnRoLWNoaWxkKDExKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA5ODBtcztcbiAgfVxufVxuLnRpbWVsaW5lLm5vdC1hY3RpdmF0ZWQgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lcjpiZWZvcmUsXG4udGltZWxpbmUubm90LWFjdGl2YXRlZCAudGltZWxpbmVfX2RvdCB7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZS5ub3QtYWN0aXZhdGVkIC50aW1lbGluZS1jYXJkLWNvbnRhaW5lci0tbGVmdCB7XG4gIGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lLm5vdC1hY3RpdmF0ZWQgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyLS1yaWdodCB7XG4gIGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiXG4uc2hha2UtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IHNoYWtlIDFzIGN1YmljLWJlemllciguMzYsLjA3LC4xOSwuOTcpIGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuQG1vdmUtYW5pbWF0aW9uLXN0YXJ0OiAyMDAlO1xuQG1vdmUtYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcblxuLmZyb20tbGVmdC1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogZnJvbUxlZnQgQG1vdmUtYW5pbWF0aW9uLWR1cmF0aW9uIGVhc2Utb3V0IGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLUBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG59XG5cbi5mcm9tLXJpZ2h0LWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBmcm9tUmlnaHQgQG1vdmUtYW5pbWF0aW9uLWR1cmF0aW9uIGVhc2Utb3V0IGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDEwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICB9XG4gIFxuICAyMCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG5cbiAgMzAlLCA1MCUsIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcbiAgfVxuXG4gIDQwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC1AbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZyb21SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vbGVzcy1saWJyYXJ5L3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi9sZXNzLWxpYnJhcnkvbWl4aW5zJztcblxuQHRpbWVsaW5lV2lkdGg6IEBsaW5lV2lkdGgtdGhpY2s7XG5AdGltZWxpbmVPZmZzZXRYOiBmbG9vcihAdGltZWxpbmVXaWR0aCAvIDIpO1xuQHRpbWVsaW5lUG9zWDogflwiY2FsYyggNTAlIC0gXCIgQHRpbWVsaW5lT2Zmc2V0WCB+XCIpXCI7XG5cbkBjYXJkTWluSGVpZ2h0OiAyMDBweDtcblxuQGFycm93V2lkdGg6IDEwcHg7XG5AYXJyb3dIZWlnaHQ6IDIwcHg7XG5AYXJyb3dPZmZzZXQ6IEBwYWRkaW5nLW9uZS1hbmQtaGFsZjtcblxuQGRvdFNpemU6IDIgKiBAdGltZWxpbmVXaWR0aCArIDE7XG5AZG90T2Zmc2V0WTogQGFycm93T2Zmc2V0ICsgQGFycm93SGVpZ2h0ICsgQGNhcmQtY29udGFpbmVyLWhhbGYtc3BhY2luZy12O1xuQG91dGVyRG90U2l6ZTogNCAqIEB0aW1lbGluZVdpZHRoICsgMTtcbkBvdXRlckRvdFJlbE9mZnNldDogKEBkb3RTaXplIC0gQG91dGVyRG90U2l6ZSkgLyAyO1xuXG5AdGltZWxpbmVQb3NZOiBAZG90T2Zmc2V0WTtcblxuQGxvZ29TcGFjaW5nOiBAcGFkZGluZy1oYWxmO1xuQGNpdHlTcGFjaW5nOiBAcGFkZGluZztcblxuLnRpbWVsaW5lIHtcbiAgLmNhcmQtY29udGFpbmVyO1xuXG4gIC50aW1lbGluZV9fdGl0bGUge1xuICAgIC5jYXJkLXRpdGxlO1xuICAgIG1hcmdpbi1ib3R0b206IEBwYWRkaW5nLWRvdWJsZSAtIEBjYXJkLWNvbnRhaW5lci1oYWxmLXNwYWNpbmctdjtcbiAgfVxuXG4gIC50aW1lbGluZS1jYXJkcy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC8vIFRpbWVsaW5lXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICAucG9zaXRpb24oYWJzb2x1dGUsIEB0aW1lbGluZVBvc1ksIEB0aW1lbGluZVBvc1gsIEBjYXJkLWNvbnRhaW5lci1oYWxmLXNwYWNpbmctdik7XG4gICAgICB6LWluZGV4OiBAei1iYWNrO1xuICAgICAgd2lkdGg6IEB0aW1lbGluZVdpZHRoO1xuICAgICAgLmJnLWJhcjtcbiAgICAgIC50cmFuc2l0aW9uLWV4dHJhLWxvbmcob3BhY2l0eSk7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyIHtcbiAgICAgIC5jYXJkLWNvbnRhaW5lci1oYWxmO1xuXG4gICAgICAudGltZWxpbmUtY2FyZCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogQGNhcmRNaW5IZWlnaHQ7XG4gICAgICAgIC5jYXJkO1xuICAgICAgICAuY2FyZC1hY3Rpb247XG4gICAgICAgIC5jYXJkLXBhZGRpbmc7XG4gICAgICAgIC5ib3JkZXItdG9wLWJhcjtcbiAgICAgICAgcGFkZGluZy10b3A6IEBwYWRkaW5nO1xuXG4gICAgICAgIC50aW1lbGluZS1jYXJkX195ZWFycyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogQHBhZGRpbmctdGhyZWUtcXVhcnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLnRleHQtYm9sZGVyO1xuICAgICAgICAgIC50ZXh0LWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWVsaW5lLWNhcmRfX2xvZ28ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IEBsb2dvU3BhY2luZztcbiAgICAgICAgICBsZWZ0OiBAbG9nb1NwYWNpbmc7XG4gICAgICAgICAgLnNpemUoMzBweCwgMzBweCk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAgICAgICAudHJhbnNpdGlvbihhbGwpO1xuXG4gICAgICAgICAgLmxvZ28taGVscGVyKHBib2xhZ2V0KTtcbiAgICAgICAgICAubG9nby1oZWxwZXIoc2VjdXJpdGFzKTtcbiAgICAgICAgICAubG9nby1oZWxwZXIodHVuc3RhbGwpO1xuICAgICAgICAgIC5sb2dvLWhlbHBlcih0ZWxpYSk7XG4gICAgICAgICAgLmxvZ28taGVscGVyKGhpcSk7XG4gICAgICAgICAgLmxvZ28taGVscGVyKHZvZGFmb25lKTtcbiAgICAgICAgICAubG9nby1oZWxwZXIoc3BvdGZpcmUpO1xuICAgICAgICAgIC5sb2dvLWhlbHBlcihjYXJtZW50YSk7XG4gICAgICAgICAgLmxvZ28taGVscGVyKGxpdSk7XG4gICAgICAgIH1cblxuICAgICAgICAudGltZWxpbmUtY2FyZF9fY2l0eSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogQGNpdHlTcGFjaW5nO1xuICAgICAgICAgIHJpZ2h0OiBAY2l0eVNwYWNpbmc7XG4gICAgICAgICAgLnRleHQtYm9sZDtcbiAgICAgICAgICAudGV4dC1ncmV5O1xuICAgICAgICAgIC50ZXh0LXVwcGVyY2FzZTtcbiAgICAgICAgICAudGV4dC1zbWFsbDtcblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiBAbXEteHhzLW1heCkge1xuICAgICAgICAgICAgLnBvc2l0aW9uKHJlbGF0aXZlLCBhdXRvLCBhdXRvLCBhdXRvLCBhdXRvKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IEBwYWRkaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lbGluZS1jYXJkX190aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogQHBhZGRpbmctaGFsZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLnRleHQtYm9sZDtcbiAgICAgICAgICAuaDNcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lbGluZS1jYXJkX19zdWJ0aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogQHBhZGRpbmc7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC50ZXh0LXVwcGVyY2FzZTtcbiAgICAgICAgICAudGV4dC1zbWFsbDtcbiAgICAgICAgICAudGV4dC1ncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWVsaW5lLWNhcmRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBAcGFkZGluZztcbiAgICAgICAgICAudGV4dC1ib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWVsaW5lLWNhcmRfX3RlY2hub2xvZ2llcyB7XG4gICAgICAgICAgLmNsZWFyZml4O1xuICAgICAgICAgIC50ZXh0LXVwcGVyY2FzZTtcbiAgICAgICAgICAudGV4dC1zbWFsbDtcblxuICAgICAgICAgIC50aW1lbGluZS1jYXJkX190ZWNobm9sb2d5IHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZzogQHBhZGRpbmctcXVhcnRlcjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGltZWxpbmUtY2FyZF9fdGVjaG5vbG9neS0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAudGV4dC1jb2xvcjtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC50aW1lbGluZS1jYXJkIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAudGltZWxpbmUtY2FyZF9fbG9nbyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lbGluZV9fZG90IHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IEBtcS1tZC1taW4pIHtcblxuICAgICAgICAvLyBBcnJvd1xuICAgICAgICAudGltZWxpbmUtY2FyZF9fYXJyb3cge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiBAYXJyb3dIZWlnaHQgQGFycm93V2lkdGg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvYXJyb3dzLnBuZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC1AYXJyb3dIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb3RcbiAgICAgICAgLnRpbWVsaW5lX19kb3Qge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAuc2l6ZShAZG90U2l6ZSwgQGRvdFNpemUpO1xuICAgICAgICAgIC5ib3JkZXItY2lyY3VsYXI7XG4gICAgICAgICAgLmJnLWNvbG9yO1xuXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIC50cmFuc2l0aW9uLWV4dHJhLWxvbmcob3BhY2l0eSk7XG5cbiAgICAgICAgICAvLyBPdXRlciBkb3RcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogQG91dGVyRG90UmVsT2Zmc2V0O1xuICAgICAgICAgICAgLnNpemUoQG91dGVyRG90U2l6ZSwgQG91dGVyRG90U2l6ZSk7XG4gICAgICAgICAgICAuYm9yZGVyLWNpcmN1bGFyO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgQGNvbG9yLXByaW1hcnk7XG5cbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAudHJhbnNpdGlvbihvcGFjaXR5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyLS1sZWZ0IHtcbiAgICAgICAgICAuZnJvbS1sZWZ0LWFuaW1hdGlvbjtcblxuICAgICAgICAgIC8vIERvdCAobGVmdClcbiAgICAgICAgICAudGltZWxpbmVfX2RvdCB7XG4gICAgICAgICAgICB0b3A6IEBkb3RPZmZzZXRZO1xuICAgICAgICAgICAgcmlnaHQ6IC1AdGltZWxpbmVXaWR0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBcnJvdyAobGVmdClcbiAgICAgICAgICAudGltZWxpbmUtY2FyZF9fYXJyb3cge1xuICAgICAgICAgICAgdG9wOiBAYXJyb3dPZmZzZXQ7XG4gICAgICAgICAgICByaWdodDogLTIgKiBAYXJyb3dXaWR0aDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBAYmdDb2xvci1jYXJkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyLS1yaWdodCB7XG4gICAgICAgICAgLmZyb20tcmlnaHQtYW5pbWF0aW9uO1xuXG4gICAgICAgICAgLy8gRG90IChyaWdodClcbiAgICAgICAgICAudGltZWxpbmVfX2RvdCB7XG4gICAgICAgICAgICBib3R0b206IEBkb3RPZmZzZXRZO1xuICAgICAgICAgICAgbGVmdDogLUB0aW1lbGluZVdpZHRoIC0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGltZWxpbmUtY2FyZCB7XG4gICAgICAgICAgICAvLyBBcnJvdyAocmlnaHQpXG4gICAgICAgICAgICAudGltZWxpbmUtY2FyZF9fYXJyb3cge1xuICAgICAgICAgICAgICBib3R0b206IEBhcnJvd09mZnNldCArIEBsaW5lV2lkdGgtdGhpY2s7XG4gICAgICAgICAgICAgIGxlZnQ6IC0yICogQGFycm93V2lkdGg7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogQGJnQ29sb3ItY2FyZDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGltZWxpbmUtY2FyZF9fbG9nbyB7XG4gICAgICAgICAgICAgIHJpZ2h0OiBAbG9nb1NwYWNpbmc7XG4gICAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aW1lbGluZS1jYXJkX19jaXR5IHtcbiAgICAgICAgICAgICAgbGVmdDogQGNpdHlTcGFjaW5nO1xuICAgICAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC5hbmltYXRpb24tZGVsYXktaGVscGVyKDEpO1xuICAgICAgICAuYW5pbWF0aW9uLWRlbGF5LWhlbHBlcigyKTtcbiAgICAgICAgLmFuaW1hdGlvbi1kZWxheS1oZWxwZXIoMyk7XG4gICAgICAgIC5hbmltYXRpb24tZGVsYXktaGVscGVyKDQpO1xuICAgICAgICAuYW5pbWF0aW9uLWRlbGF5LWhlbHBlcig1KTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gICYubm90LWFjdGl2YXRlZCB7XG4gICAgLnRpbWVsaW5lLWNhcmRzLWNvbnRhaW5lcjpiZWZvcmUsIFxuICAgIC50aW1lbGluZV9fZG90IHtcbiAgICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudGltZWxpbmUtY2FyZC1jb250YWluZXItLWxlZnQge1xuICAgICAgYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWNhcmQtY29udGFpbmVyLS1yaWdodCB7XG4gICAgICBhbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuYW5pbWF0aW9uLWRlbGF5LWhlbHBlcihAbikge1xuICAgIEBudGgxOiAyICogQG47XG4gICAgQG50aDI6IEBudGgxICsgMTtcbiAgICAmOm50aC1jaGlsZChAe250aDF9KSB7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IEBuICogMjAwbXM7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKEB7bnRoMn0pIHtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogQG4gKiAyMDBtcyAtIDIwbXM7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28taGVscGVyKEBsb2dvKSB7XG4gICAgJi50aW1lbGluZS1jYXJkX19sb2dvLS1Ae2xvZ299IHtcbiAgICAgIEBsb2dvRmlsZW5hbWU6IFwiLi9pbWcvQHtsb2dvfS5wbmdcIjtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChAbG9nb0ZpbGVuYW1lKTtcbiAgICB9XG4gIH1cbiAgXG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucy1ib3JkZXInO1xuXG4uY2FyZC1jb250YWluZXIoKSB7XG4gIG1hcmdpbi10b3A6IEBjYXJkLW1hcmdpbjtcbn1cblxuLmNhcmQtY29udGFpbmVyLWhhbGYoKSB7XG4gIC5kaXNwbGF5LWlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogQGNhcmQtY29udGFpbmVyLWhhbGYtc3BhY2luZy12IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IEBtcS1tZC1taW4pIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IEBwYWRkaW5nLW9uZS1hbmQtaGFsZjtcbiAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IEBwYWRkaW5nLW9uZS1hbmQtaGFsZjtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi5jYXJkKCkge1xuICAuYm9yZGVyU2hhZG93O1xuICBiYWNrZ3JvdW5kOiBAYmdDb2xvci1jYXJkO1xufVxuXG4uY2FyZC1wYWRkaW5nKCkge1xuICBwYWRkaW5nOiBAY2FyZC1wYWRkaW5nO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBAbXEteHhzLW1heCkge1xuICAgIHBhZGRpbmc6IEBjYXJkLXBhZGRpbmctaGFsZjtcbiAgfVxufVxuXG4uY2FyZC1hY3Rpb24oKSB7XG4gIC5ib3JkZXJTaGFkb3ctb24taG92ZXI7XG59XG5cbi5jYXJkLXRpdGxlKCkge1xuICAuaDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogQGNhcmQtdGl0bGUtbWFyZ2luO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uZm9udC1zaXplKEBzaXplLCBAbGluZUhlaWdodDogQHNpemUpIHtcbiAgZm9udC1zaXplOiBAc2l6ZTtcbiAgbGluZS1oZWlnaHQ6IEBsaW5lSGVpZ2h0O1xufVxuXG5cbi50ZXh0LXByaW1hcnkoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplKTtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgZm9udC1mYW1pbHk6IEBmb250LXByaW1hcnk7XG59XG5cbi50ZXh0LWJvZHkoKSB7XG4gIC50ZXh0LXByaW1hcnk7XG4gIGxpbmUtaGVpZ2h0OiBAdGV4dFNpemUgKyA4cHg7XG59XG5cbi50ZXh0LWRhcmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG59XG5cbi50ZXh0LWdyZXkoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLWxpZ2h0O1xufVxuXG4udGV4dC1saWdodC1ncmV5KCkge1xuICBjb2xvcjogQHRleHRDb2xvci1saWdodGVyO1xufVxuXG4udGV4dC1jb2xvcigpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItY29sb3I7XG59XG5cbi50ZXh0LW9uLWRhcmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLW9uRGFyaztcbn1cblxuXG4udGV4dC1saWdodCgpIHtcbiAgZm9udC13ZWlnaHQ6IEB0ZXh0V2VpZ2h0LWxpZ2h0O1xufVxuXG4udGV4dC1ib2xkKCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtYm9sZDtcbn1cblxuLnRleHQtYm9sZGVyKCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtYm9sZGVyO1xufVxuXG5cbi5oMSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDEpO1xufVxuXG4uaDIoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWgyKTtcbn1cblxuLmgzKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oMyk7XG59XG5cbi5oNCgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDQpO1xufVxuXG4udGV4dC1zbWFsbCgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtc21hbGwpO1xufVxuXG4udGV4dC1sYXJnZSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtbGFyZ2UpO1xufVxuXG4udGV4dC11cHBlcmNhc2UoKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLmxpbmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciwgJjphY3RpdmUsICY6dmlzaXRlZCB7XG4gICAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgfVxufVxuXG4udGV4dC1idWJibGUoQGFycm93RG93bjogdHJ1ZSwgQGJnQ29sb3I6IEByZWQtbGlnaHQpIHtcbiAgQGFycm93U2l6ZTogOHB4O1xuICBAYXJyb3dPZmZzZXQ6IDVweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IEBhcnJvd1NpemU7XG4gIHBhZGRpbmc6IEBwYWRkaW5nLXF1YXJ0ZXIgQHBhZGRpbmctaGFsZjtcbiAgYmFja2dyb3VuZDogQGJnQ29sb3I7XG5cbiAgLmRpc3BsYXktaW5saW5lLWJsb2NrO1xuICAudGV4dC1vbi1kYXJrO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IEBiZ0NvbG9yO1xuICAgIC5kaXNwbGF5LWJsb2NrO1xuICAgIC5zaXplKDAsIDApO1xuXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgQGFycm93U2l6ZSBAYXJyb3dTaXplO1xuICAgIC5wb3NpdGlvbihhYnNvbHV0ZSwgMTAwJSwgYXV0bywgYXV0bywgQGFycm93T2Zmc2V0KTtcblxuICAgICYgd2hlbiAoQGFycm93RG93biA9IGZhbHNlKSB7XG4gICAgICBib3JkZXItd2lkdGg6IEBhcnJvd1NpemUgMCAwIEBhcnJvd1NpemU7XG4gICAgICAucG9zaXRpb24oYWJzb2x1dGUsIGF1dG8sIGF1dG8sIDEwMCUsIEBhcnJvd09mZnNldCk7XG4gICAgfVxuICB9XG59IiwiXG4vLyBWaXNpYmlsaXR5XG5cbi5oaWRkZW4oKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kaXNwbGF5LWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpc3BsYXktaW5saW5lLWJsb2NrKCkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cblxuLmNsZWFyZml4KCkge1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbi5zaXplKEB3aWR0aDogYXV0bywgQGhlaWdodDogYXV0bykge1xuXHR3aWR0aDogQHdpZHRoO1xuXHRoZWlnaHQ6IEBoZWlnaHQ7XG59XG5cbi5wb3NpdGlvbihAcG9zaXRpb246IHJlbGF0aXZlLCBAdG9wOiBhdXRvLCBAcmlnaHQ6IGF1dG8sIEBib3R0b206IGF1dG8sIEBsZWZ0OiBhdXRvKSB7XG4gIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gIHRvcDogQHRvcDtcbiAgcmlnaHQ6IEByaWdodDtcbiAgYm90dG9tOiBAYm90dG9tO1xuICBsZWZ0OiBAbGVmdDtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uYmctcHJpbWFyeSgpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnQ29sb3ItcHJpbWFyeTtcbn1cblxuLmJnLXNlY29uZGFyeSgpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnQ29sb3Itc2Vjb25kYXJ5O1xufVxuXG4uYmctY29sb3IoKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBjb2xvci1wcmltYXJ5O1xufVxuXG4uYmctYmFyKCkge1xuICAuYmctY29sb3I7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmJhcigpIHtcbiAgLmJnLWNvbG9yO1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi50cmFuc2l0aW9uKEBwcm9wOmFsbCwgQHRpbWU6QHRyYW5zaXRpb25EdXJhdGlvbi1ub3JtYWwpIHtcbiAgdHJhbnNpdGlvbjogQHByb3AgQHRyYW5zaXRpb25UaW1pbmcgQHRpbWU7XG59XG5cbi50cmFuc2l0aW9uLXNob3J0KEBwcm9wOmFsbCkge1xuICAudHJhbnNpdGlvbihAcHJvcCwgQHRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydCk7XG59XG5cbi50cmFuc2l0aW9uLWxvbmcoQHByb3A6YWxsKSB7XG4gIC50cmFuc2l0aW9uKEBwcm9wLCBAdHJhbnNpdGlvbkR1cmF0aW9uLWxvbmcpO1xufVxuXG4udHJhbnNpdGlvbi1leHRyYS1sb25nKEBwcm9wOmFsbCkge1xuICAudHJhbnNpdGlvbihAcHJvcCwgQHRyYW5zaXRpb25EdXJhdGlvbi1leHRyYS1sb25nKTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uYm9yZGVyLXByaW1hcnkoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1wcmltYXJ5O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeSgpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlckNvbG9yLXNlY29uZGFyeTtcbn1cblxuLmJvcmRlci1jb2xvcigpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlckNvbG9yLWNvbG9yO1xufVxuXG4uYm9yZGVyLWNpcmN1bGFyKCkge1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ib3JkZXJTaGFkb3coKSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLmJvcmRlclNoYWRvdy1zdHJvbmcoQG9mZnNldDogMTBweCkge1xuICBib3gtc2hhZG93OiAwIEBvZmZzZXQgMzBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5ib3JkZXJTaGFkb3ctaW5zZXQoQG9mZnNldDogMTBweCkge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5ib3JkZXJTaGFkb3ctb24taG92ZXIoKSB7XG5cdC50cmFuc2l0aW9uLXNob3J0KGJveC1zaGFkb3cpO1xuICAmOmhvdmVyIHtcbiAgXHQuYm9yZGVyU2hhZG93LXN0cm9uZztcbiAgfVxufVxuXG4uaW5uZXJTaGFkb3ctb24tYWN0aXZlKCkge1xuICAudHJhbnNpdGlvbi1zaG9ydChib3gtc2hhZG93KTtcbiAgJjphY3RpdmUge1xuICAgIC5ib3JkZXJTaGFkb3ctaW5zZXQ7XG4gIH1cbn1cblxuLmJvcmRlci10b3AtYmFyKCkge1xuICBib3JkZXItdG9wOiBAbGluZVdpZHRoLXRoaWNrIHNvbGlkIEBjb2xvci1wcmltYXJ5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/cards/timeline/timeline.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/cards/timeline/timeline.component.ts ***!
  \*****************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_timeline_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/timeline-items */ "./src/app/data/timeline-items.ts");



let TimelineComponent = class TimelineComponent {
    constructor() {
        this.timelineItems = _data_timeline_items__WEBPACK_IMPORTED_MODULE_2__["TIMELINE_ITEMS"].sort((a, b) => {
            if (a.startYear === b.startYear) {
                return b.endYear - a.endYear;
            }
            return b.startYear - a.startYear;
        });
    }
    toggleTechnology(t) {
        this.selectedTech = this.selectedTech === t ? null : t;
        return false;
    }
};
TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/timeline/timeline.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timeline.component.less */ "./src/app/components/cards/timeline/timeline.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TimelineComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.less ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.footer {\n  margin-top: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1hbmltYXRpb24ubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1QsV0FBVztBQUNYLFNBQVM7QUFDVCxZQUFZO0FBQ1osZUFBZTtBQUNmLGVBQWU7QUNnQmY7RUFDRTs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEYkY7RUNnQkE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRGJGO0VDZ0JBOzs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEWkY7RUNlQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEWkY7QUFDRjtBQ0hBO0VBQ0U7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGJGO0VDZ0JBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURiRjtFQ2dCQTs7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRFpGO0VDZUE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRFpGO0FBQ0Y7QUNlQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRGJGO0VDZ0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGRGO0FBQ0Y7QUNPQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRGJGO0VDZ0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGRGO0FBQ0Y7QUNpQkE7RUFDRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURmRjtFQ2tCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURoQkY7QUFDRjtBQ1NBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEZkY7RUNrQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEaEJGO0FBQ0Y7QUVyQ0E7RUFDRSxnQkFBQTtBRnVDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNpemUgKi9cbi8qIENvbG9ycyAqL1xuLyogVGV4dCAqL1xuLyogU3BhY2luZyAqL1xuLyogWiBwb3NpdGlvbiAqL1xuLyogVHJhbnNpdGlvbiAqL1xuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDEwJSxcbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICB9XG4gIDIwJSxcbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcbiAgfVxuICA0MCUsXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZyb21MZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZnJvbVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4iLCJcbi5zaGFrZS1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogc2hha2UgMXMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45NykgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG5AbW92ZS1hbmltYXRpb24tc3RhcnQ6IDIwMCU7XG5AbW92ZS1hbmltYXRpb24tZHVyYXRpb246IDYwMG1zO1xuXG4uZnJvbS1sZWZ0LWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBmcm9tTGVmdCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbn1cblxuLmZyb20tcmlnaHQtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IGZyb21SaWdodCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLCA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgXG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cblxuICAzMCUsIDUwJSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG5cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZyb21MZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLUBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZnJvbVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi9sZXNzLWxpYnJhcnkvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL2xlc3MtbGlicmFyeS9taXhpbnMnO1xuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogQHBhZGRpbmctZG91YmxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.less */ "./src/app/components/footer/footer.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.less ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.app-header {\n  position: relative;\n  z-index: 100;\n  margin-top: -88px;\n  padding: 20px 20px 108px 20px;\n  -webkit-transition: margin-top ease-out 1s, padding ease-out 1s, background ease-out 0.5s;\n  transition: margin-top ease-out 1s, padding ease-out 1s, background ease-out 0.5s;\n}\n.app-header:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.app-header.app-header--init {\n  margin-top: 0;\n  padding: 20px;\n}\n.app-header .app-header__title {\n  float: left;\n  padding: 15px;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: color ease-out 1s;\n  transition: color ease-out 1s;\n}\n.app-header .app-header__navbar {\n  float: right;\n}\n.app-header .app-header__navbar-icon {\n  display: none;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: color ease-out 1s;\n  transition: color ease-out 1s;\n  font-size: 48px;\n  line-height: 48px;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .app-header .app-header__navbar-icon {\n    display: block;\n    float: right;\n  }\n}\n.app-header .navbar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n@media (max-width: 767px) {\n  .app-header .navbar {\n    position: fixed;\n    top: 0;\n    right: -80%;\n    bottom: 0;\n    left: auto;\n    -webkit-transition: all ease-out 0.5s;\n    transition: all ease-out 0.5s;\n    background-color: #fff;\n    width: 80%;\n    box-shadow: none;\n    text-align: center;\n  }\n  .app-header .navbar.navbar--open {\n    right: 0;\n    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n  }\n}\n.app-header .navbar__item {\n  float: left;\n  padding: 15px;\n  margin-left: 20px;\n}\n@media (max-width: 767px) {\n  .app-header .navbar__item {\n    float: none;\n    margin-left: 0;\n    padding: 30px;\n  }\n}\n.app-header .navbar__item span {\n  padding: 2px 0;\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-transition: color ease-out 1s;\n  transition: color ease-out 1s;\n}\n@media (max-width: 767px) {\n  .app-header .navbar__item span {\n    color: #3d4451;\n  }\n}\n@media (max-width: 767px) {\n  .app-header .navbar__item.navbar__item--active {\n    background-color: #efefef;\n  }\n}\n.app-header .navbar__item.navbar__item--active span {\n  border-bottom: 3px solid #e86767;\n}\n@media (max-width: 767px) {\n  .app-header .navbar__item.navbar__item--box {\n    margin-top: 30px;\n    padding: 20px;\n  }\n}\n.app-header .navbar__item.navbar__item--close-icon {\n  display: none;\n  font-size: 22px;\n  line-height: 22px;\n  padding: 20px 40px;\n  text-align: right;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .app-header .navbar__item.navbar__item--close-icon {\n    display: block;\n  }\n}\n.app-header .navbar__item:hover {\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .app-header .navbar__item:hover {\n    background-color: #efefef;\n  }\n}\n.app-header .navbar__item:hover span {\n  border-bottom: 3px solid #e86767;\n}\n.app-header.app-header--sticky {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: 0;\n  padding: 10px 20px;\n  background-color: #fff;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n}\n.app-header.app-header--sticky .app-header__title,\n.app-header.app-header--sticky .app-header__navbar-icon,\n.app-header.app-header--sticky .navbar__item span {\n  color: #3d4451;\n}\n.app-header.app-header--sticky.app-header--hide-sticky {\n  -webkit-transition: all ease-out 0.5s;\n  transition: all ease-out 0.5s;\n  top: -88px;\n  box-shadow: none;\n}\n.app-header-sticky-placeholder {\n  display: none;\n  height: 68px;\n}\n.app-header-sticky-placeholder.app-header-sticky-placeholder--visible {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1hbmltYXRpb24ubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtZ2VuZXJhbC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy10ZXh0Lmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLXRyYW5zaXRpb24ubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtY29sb3IubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtYm9yZGVyLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNULFdBQVc7QUFDWCxTQUFTO0FBQ1QsWUFBWTtBQUNaLGVBQWU7QUFDZixlQUFlO0FDZ0JmO0VBQ0U7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGJGO0VDZ0JBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURiRjtFQ2dCQTs7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRFpGO0VDZUE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRFpGO0FBQ0Y7QUNIQTtFQUNFOztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURiRjtFQ2dCQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEYkY7RUNnQkE7OztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURaRjtFQ2VBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURaRjtBQUNGO0FDZUE7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7RURiRjtFQ2dCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURkRjtBQUNGO0FDT0E7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7RURiRjtFQ2dCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURkRjtBQUNGO0FDaUJBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEZkY7RUNrQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEaEJGO0FBQ0Y7QUNTQTtFQUNFO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGZGO0VDa0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGhCRjtBQUNGO0FFRkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUZBQUE7RUFBQSxpRkFBQTtBRklGO0FHOUJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FIZ0NKO0FFSEU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBRktKO0FFbEJBO0VBaUJJLFdBQUE7RUFDQSxhQUFBO0VBNUJGLFdBQUE7RUVrREEseUJBQUE7RUMzRUEscUNBQUE7RUFBQSw2QkFBQTtBTDRERjtBRXpCQTtFQXVCSSxZQUFBO0FGS0o7QUU1QkE7RUNsQ0UsYUFBQTtFRHdCQSxXQUFBO0VFa0RBLHlCQUFBO0VDM0VBLHFDQUFBO0VBQUEsNkJBQUE7RURBQSxlQUFBO0VBQ0EsaUJBQUE7RUZnRUUsZUFBQTtBRk9KO0FFTEk7RUFBQTtJQzlERixjQUFBO0lEZ0VJLFlBQUE7RUZRSjtBQUNGO0FHaEVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FIa0VKO0FFUEk7RUFBQTtJQ2pERixlQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJRS9CQSxxQ0FBQTtJQUFBLDZCQUFBO0lDSUEsc0JBQUE7SUo2RUksVUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUZhSjtFRVhJO0lBQ0UsUUFBQTtJS2xFTiwyRUFBQTtFUGdGQTtBQUNGO0FFbEVBO0VBMERJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUZXSjtBRVRJO0VBQUE7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RUZZSjtBQUNGO0FFOUVBO0VBcUVNLGNBQUE7RUV4R0osZUFBQTtFQUNBLGlCQUFBO0VGeUdJLGdCQUFBO0VBakZKLFdBQUE7RUVrREEseUJBQUE7RUMzRUEscUNBQUE7RUFBQSw2QkFBQTtBTDBIRjtBRWJNO0VBQUE7SUE5RUosY0FBQTtFRitGQTtBQUNGO0FFaEhFO0VBQUE7SUFDRSx5QkFBQTtFRm1IRjtBQUNGO0FFakJJO0VBL0ZBLGdDQUFBO0FGbUhKO0FFZk07RUFBQTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtFRmtCTjtBQUNGO0FFZkk7RUM3SEYsYUFBQTtFQ0RBLGVBQUE7RUFDQSxpQkFBQTtFRmdJSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRmtCTjtBRWhCTTtFQUFBO0lDaElKLGNBQUE7RUhvSkE7QUFDRjtBRWhCSTtFQUNFLGVBQUE7QUZrQk47QUU5SUU7RUFBQTtJQUNFLHlCQUFBO0VGaUpGO0FBQ0Y7QUV4Qkk7RUF0SEEsZ0NBQUE7QUZpSko7QUVyQkU7RUNySEEsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RURtSEUsa0JBQUE7RUk5SUYsc0JBQUE7RUNnQkEsMkVBQUE7QVAySkY7QUUvQkU7OztFQWpIQSxjQUFBO0FGcUpGO0FFeEJJO0VHNUpGLHFDQUFBO0VBQUEsNkJBQUE7RUg4SkksVUFBQTtFQUNBLGdCQUFBO0FGMEJOO0FFckJBO0VDbktFLGFBQUE7RURxS0EsWUFBQTtBRnVCRjtBRXJCRTtFQ25LQSxjQUFBO0FIMkxGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2l6ZSAqL1xuLyogQ29sb3JzICovXG4vKiBUZXh0ICovXG4vKiBTcGFjaW5nICovXG4vKiBaIHBvc2l0aW9uICovXG4vKiBUcmFuc2l0aW9uICovXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLFxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgMjAlLFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuICAzMCUsXG4gIDUwJSxcbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG4gIDQwJSxcbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICBtYXJnaW4tdG9wOiAtODhweDtcbiAgcGFkZGluZzogMjBweCAyMHB4IDEwOHB4IDIwcHg7XG4gIHRyYW5zaXRpb246IG1hcmdpbi10b3AgZWFzZS1vdXQgMXMsIHBhZGRpbmcgZWFzZS1vdXQgMXMsIGJhY2tncm91bmQgZWFzZS1vdXQgMC41cztcbn1cbi5hcHAtaGVhZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuLmFwcC1oZWFkZXIuYXBwLWhlYWRlci0taW5pdCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uYXBwLWhlYWRlciAuYXBwLWhlYWRlcl9fdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2Utb3V0IDFzO1xufVxuLmFwcC1oZWFkZXIgLmFwcC1oZWFkZXJfX25hdmJhciB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5hcHAtaGVhZGVyIC5hcHAtaGVhZGVyX19uYXZiYXItaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLW91dCAxcztcbiAgZm9udC1zaXplOiA0OHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hcHAtaGVhZGVyIC5hcHAtaGVhZGVyX19uYXZiYXItaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG4uYXBwLWhlYWRlciAubmF2YmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hcHAtaGVhZGVyIC5uYXZiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IC04MCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IDAuNXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogODAlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5hcHAtaGVhZGVyIC5uYXZiYXIubmF2YmFyLS1vcGVuIHtcbiAgICByaWdodDogMDtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gIH1cbn1cbi5hcHAtaGVhZGVyIC5uYXZiYXJfX2l0ZW0ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFwcC1oZWFkZXIgLm5hdmJhcl9faXRlbSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxufVxuLmFwcC1oZWFkZXIgLm5hdmJhcl9faXRlbSBzcGFuIHtcbiAgcGFkZGluZzogMnB4IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlLW91dCAxcztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYXBwLWhlYWRlciAubmF2YmFyX19pdGVtIHNwYW4ge1xuICAgIGNvbG9yOiAjM2Q0NDUxO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFwcC1oZWFkZXIgLm5hdmJhcl9faXRlbS5uYXZiYXJfX2l0ZW0tLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgfVxufVxuLmFwcC1oZWFkZXIgLm5hdmJhcl9faXRlbS5uYXZiYXJfX2l0ZW0tLWFjdGl2ZSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlODY3Njc7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFwcC1oZWFkZXIgLm5hdmJhcl9faXRlbS5uYXZiYXJfX2l0ZW0tLWJveCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4uYXBwLWhlYWRlciAubmF2YmFyX19pdGVtLm5hdmJhcl9faXRlbS0tY2xvc2UtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYXBwLWhlYWRlciAubmF2YmFyX19pdGVtLm5hdmJhcl9faXRlbS0tY2xvc2UtaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5hcHAtaGVhZGVyIC5uYXZiYXJfX2l0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFwcC1oZWFkZXIgLm5hdmJhcl9faXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgfVxufVxuLmFwcC1oZWFkZXIgLm5hdmJhcl9faXRlbTpob3ZlciBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlODY3Njc7XG59XG4uYXBwLWhlYWRlci5hcHAtaGVhZGVyLS1zdGlja3kge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG4uYXBwLWhlYWRlci5hcHAtaGVhZGVyLS1zdGlja3kgLmFwcC1oZWFkZXJfX3RpdGxlLFxuLmFwcC1oZWFkZXIuYXBwLWhlYWRlci0tc3RpY2t5IC5hcHAtaGVhZGVyX19uYXZiYXItaWNvbixcbi5hcHAtaGVhZGVyLmFwcC1oZWFkZXItLXN0aWNreSAubmF2YmFyX19pdGVtIHNwYW4ge1xuICBjb2xvcjogIzNkNDQ1MTtcbn1cbi5hcHAtaGVhZGVyLmFwcC1oZWFkZXItLXN0aWNreS5hcHAtaGVhZGVyLS1oaWRlLXN0aWNreSB7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAwLjVzO1xuICB0b3A6IC04OHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmFwcC1oZWFkZXItc3RpY2t5LXBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiA2OHB4O1xufVxuLmFwcC1oZWFkZXItc3RpY2t5LXBsYWNlaG9sZGVyLmFwcC1oZWFkZXItc3RpY2t5LXBsYWNlaG9sZGVyLS12aXNpYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iLCJcbi5zaGFrZS1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogc2hha2UgMXMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45NykgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG5AbW92ZS1hbmltYXRpb24tc3RhcnQ6IDIwMCU7XG5AbW92ZS1hbmltYXRpb24tZHVyYXRpb246IDYwMG1zO1xuXG4uZnJvbS1sZWZ0LWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBmcm9tTGVmdCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbn1cblxuLmZyb20tcmlnaHQtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IGZyb21SaWdodCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLCA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgXG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cblxuICAzMCUsIDUwJSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG5cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZyb21MZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLUBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZnJvbVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi9sZXNzLWxpYnJhcnkvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL2xlc3MtbGlicmFyeS9taXhpbnMnO1xuXG5AdGhpcy1wYWQ6ICAgICAgICAgICAgICAgIEBwYWRkaW5nO1xuQHRoaXMtc3RpY2t5LXBhZC12OiAgICAgICBAcGFkZGluZy1oYWxmO1xuQHRoaXMtc3RpY2t5LXBhZC1oOiAgICAgICBAcGFkZGluZztcblxuQHRoaXMtaXRlbS1wYWQ6ICAgICAgICAgICBAcGFkZGluZy10aHJlZS1xdWFydGVyO1xuXG5AdGhpcy1hY3RpdmVMaW5rLWJvcmRlcjogIDNweDtcblxuQHRoaXMtaXRlbUxpbmstdW5rbm93blNwYWNlOiAgMnB4O1xuXG5AdGhpcy1pbm5lci1oZWlnaHQ6IDIgKiAoQHRoaXMtaXRlbS1wYWQpICsgQHRleHRTaXplLXNtYWxsICsgQHRoaXMtYWN0aXZlTGluay1ib3JkZXIgKyBAdGhpcy1pdGVtTGluay11bmtub3duU3BhY2U7XG5AdGhpcy1oZWlnaHQ6IDIgKiBAdGhpcy1wYWQgKyBAdGhpcy1pbm5lci1oZWlnaHQ7XG5AdGhpcy1zdGlja3ktaGVpZ2h0OiAyICogQHRoaXMtc3RpY2t5LXBhZC12ICsgQHRoaXMtaW5uZXItaGVpZ2h0O1xuXG4uYWN0aXZlLWl0ZW0oKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiBAbXEteHMtbWF4KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGdyZXktbGlnaHRlc3Q7XG4gIH1cblxuICBzcGFuIHtcbiAgICBib3JkZXItYm90dG9tOiBAdGhpcy1hY3RpdmVMaW5rLWJvcmRlciBzb2xpZCBAY29sb3ItcHJpbWFyeTtcbiAgfVxufVxuXG4uaGVhZGVyLXRleHQoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLW9uRGFyaztcbiAgLnRleHQtdXBwZXJjYXNlO1xuICAudHJhbnNpdGlvbi1sb25nKGNvbG9yKTtcbn1cblxuLmhlYWRlci10ZXh0LS1vbi13aGl0ZSgpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbn1cblxuXG4uYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogQHotZnJvbnQ7XG4gIG1hcmdpbi10b3A6IC0xICogQHRoaXMtaGVpZ2h0O1xuICBwYWRkaW5nOiBAdGhpcy1wYWQgQHRoaXMtcGFkIEB0aGlzLXBhZCtAdGhpcy1oZWlnaHQgQHRoaXMtcGFkO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIEB0cmFuc2l0aW9uVGltaW5nIEB0cmFuc2l0aW9uRHVyYXRpb24tbG9uZywgXG4gICAgcGFkZGluZyBAdHJhbnNpdGlvblRpbWluZyBAdHJhbnNpdGlvbkR1cmF0aW9uLWxvbmcsIFxuICAgIGJhY2tncm91bmQgQHRyYW5zaXRpb25UaW1pbmcgQHRyYW5zaXRpb25EdXJhdGlvbi1ub3JtYWw7XG5cbiAgLmNsZWFyZml4O1xuXG4gICYuYXBwLWhlYWRlci0taW5pdCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwYWRkaW5nOiBAdGhpcy1wYWQ7XG4gIH1cblxuICAuYXBwLWhlYWRlcl9fdGl0bGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IEB0aGlzLWl0ZW0tcGFkO1xuICAgIC5oZWFkZXItdGV4dDtcbiAgfVxuXG4gIC5hcHAtaGVhZGVyX19uYXZiYXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIC5hcHAtaGVhZGVyX19uYXZiYXItaWNvbiB7XG4gICAgLmhpZGRlbjtcbiAgICAuaGVhZGVyLXRleHQ7XG4gICAgLmZvbnQtc2l6ZShAdGhpcy1pbm5lci1oZWlnaHQsIEB0aGlzLWlubmVyLWhlaWdodCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IEBtcS14cy1tYXgpIHtcbiAgICAgLmRpc3BsYXktYmxvY2s7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhciB7XG4gICAgLmNsZWFyZml4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IEBtcS14cy1tYXgpIHtcbiAgICAgIC5wb3NpdGlvbihmaXhlZCwgMCwgLTgwJSwgMCk7XG4gICAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgICAgLmJnLXNlY29uZGFyeTtcblxuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICYubmF2YmFyLS1vcGVuIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIC5ib3JkZXJTaGFkb3ctc3Ryb25nKDIwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXJfX2l0ZW0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IEB0aGlzLWl0ZW0tcGFkO1xuICAgIG1hcmdpbi1sZWZ0OiBAcGFkZGluZztcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBAbXEteHMtbWF4KSB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgcGFkZGluZzogQHBhZGRpbmctb25lLWFuZC1oYWxmO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZzogMnB4IDA7XG4gICAgICAudGV4dC1zbWFsbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBAdGV4dFdlaWdodC1ib2xkO1xuICAgICAgLmhlYWRlci10ZXh0O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogQG1xLXhzLW1heCkge1xuICAgICAgICAuaGVhZGVyLXRleHQtLW9uLXdoaXRlO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgJi5uYXZiYXJfX2l0ZW0tLWFjdGl2ZSB7XG4gICAgICAuYWN0aXZlLWl0ZW07XG4gICAgfVxuXG4gICAgJi5uYXZiYXJfX2l0ZW0tLWJveCB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogQG1xLXhzLW1heCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAcGFkZGluZy1vbmUtYW5kLWhhbGY7XG4gICAgICAgIHBhZGRpbmc6IEBwYWRkaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubmF2YmFyX19pdGVtLS1jbG9zZS1pY29uIHtcbiAgICAgIC5oaWRkZW47XG4gICAgICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1pY29uKTtcbiAgICAgIHBhZGRpbmc6IEBwYWRkaW5nIEBwYWRkaW5nLWRvdWJsZTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogQG1xLXhzLW1heCkge1xuICAgICAgICAuZGlzcGxheS1ibG9jaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC5hY3RpdmUtaXRlbTtcbiAgICB9XG4gIH1cblxuICAmLmFwcC1oZWFkZXItLXN0aWNreSB7XG4gICAgLnBvc2l0aW9uKGZpeGVkLCAwLCAwLCBhdXRvLCAwKTtcbiAgICBwYWRkaW5nOiBAdGhpcy1zdGlja3ktcGFkLXYgQHRoaXMtc3RpY2t5LXBhZC1oO1xuICAgIC5iZy1zZWNvbmRhcnk7XG4gICAgLmJvcmRlclNoYWRvdy1zdHJvbmc7XG5cbiAgICAuYXBwLWhlYWRlcl9fdGl0bGUsIFxuICAgIC5hcHAtaGVhZGVyX19uYXZiYXItaWNvbixcbiAgICAubmF2YmFyX19pdGVtIHNwYW4ge1xuICAgICAgLmhlYWRlci10ZXh0LS1vbi13aGl0ZTtcbiAgICB9XG5cbiAgICAmLmFwcC1oZWFkZXItLWhpZGUtc3RpY2t5IHtcbiAgICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgICB0b3A6IC0oQHRoaXMtc3RpY2t5LWhlaWdodCArIEBwYWRkaW5nKTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5hcHAtaGVhZGVyLXN0aWNreS1wbGFjZWhvbGRlciB7XG4gIC5oaWRkZW47XG4gIGhlaWdodDogQHRoaXMtc3RpY2t5LWhlaWdodDtcblxuICAmLmFwcC1oZWFkZXItc3RpY2t5LXBsYWNlaG9sZGVyLS12aXNpYmxlIHtcbiAgICAuZGlzcGxheS1ibG9jaztcbiAgfVxufSIsIlxuLy8gVmlzaWJpbGl0eVxuXG4uaGlkZGVuKCkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzcGxheS1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kaXNwbGF5LWlubGluZS1ibG9jaygpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbi5jbGVhcmZpeCgpIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG4uc2l6ZShAd2lkdGg6IGF1dG8sIEBoZWlnaHQ6IGF1dG8pIHtcblx0d2lkdGg6IEB3aWR0aDtcblx0aGVpZ2h0OiBAaGVpZ2h0O1xufVxuXG4ucG9zaXRpb24oQHBvc2l0aW9uOiByZWxhdGl2ZSwgQHRvcDogYXV0bywgQHJpZ2h0OiBhdXRvLCBAYm90dG9tOiBhdXRvLCBAbGVmdDogYXV0bykge1xuICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICB0b3A6IEB0b3A7XG4gIHJpZ2h0OiBAcmlnaHQ7XG4gIGJvdHRvbTogQGJvdHRvbTtcbiAgbGVmdDogQGxlZnQ7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmZvbnQtc2l6ZShAc2l6ZSwgQGxpbmVIZWlnaHQ6IEBzaXplKSB7XG4gIGZvbnQtc2l6ZTogQHNpemU7XG4gIGxpbmUtaGVpZ2h0OiBAbGluZUhlaWdodDtcbn1cblxuXG4udGV4dC1wcmltYXJ5KCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZSk7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1wcmltYXJ5O1xufVxuXG4udGV4dC1ib2R5KCkge1xuICAudGV4dC1wcmltYXJ5O1xuICBsaW5lLWhlaWdodDogQHRleHRTaXplICsgOHB4O1xufVxuXG4udGV4dC1kYXJrKCkge1xuICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xufVxuXG4udGV4dC1ncmV5KCkge1xuICBjb2xvcjogQHRleHRDb2xvci1saWdodDtcbn1cblxuLnRleHQtbGlnaHQtZ3JleSgpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItbGlnaHRlcjtcbn1cblxuLnRleHQtY29sb3IoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLWNvbG9yO1xufVxuXG4udGV4dC1vbi1kYXJrKCkge1xuICBjb2xvcjogQHRleHRDb2xvci1vbkRhcms7XG59XG5cblxuLnRleHQtbGlnaHQoKSB7XG4gIGZvbnQtd2VpZ2h0OiBAdGV4dFdlaWdodC1saWdodDtcbn1cblxuLnRleHQtYm9sZCgpIHtcbiAgZm9udC13ZWlnaHQ6IEB0ZXh0V2VpZ2h0LWJvbGQ7XG59XG5cbi50ZXh0LWJvbGRlcigpIHtcbiAgZm9udC13ZWlnaHQ6IEB0ZXh0V2VpZ2h0LWJvbGRlcjtcbn1cblxuXG4uaDEoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWgxKTtcbn1cblxuLmgyKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oMik7XG59XG5cbi5oMygpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDMpO1xufVxuXG4uaDQoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWg0KTtcbn1cblxuLnRleHQtc21hbGwoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLXNtYWxsKTtcbn1cblxuLnRleHQtbGFyZ2UoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWxhcmdlKTtcbn1cblxuLnRleHQtdXBwZXJjYXNlKCkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi5saW5rKCkge1xuICBjb2xvcjogQHRleHRDb2xvci1wcmltYXJ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIsICY6YWN0aXZlLCAmOnZpc2l0ZWQge1xuICAgIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG4gIH1cbn1cblxuLnRleHQtYnViYmxlKEBhcnJvd0Rvd246IHRydWUsIEBiZ0NvbG9yOiBAcmVkLWxpZ2h0KSB7XG4gIEBhcnJvd1NpemU6IDhweDtcbiAgQGFycm93T2Zmc2V0OiA1cHg7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiBAYXJyb3dTaXplO1xuICBwYWRkaW5nOiBAcGFkZGluZy1xdWFydGVyIEBwYWRkaW5nLWhhbGY7XG4gIGJhY2tncm91bmQ6IEBiZ0NvbG9yO1xuXG4gIC5kaXNwbGF5LWlubGluZS1ibG9jaztcbiAgLnRleHQtb24tZGFyaztcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBAYmdDb2xvcjtcbiAgICAuZGlzcGxheS1ibG9jaztcbiAgICAuc2l6ZSgwLCAwKTtcblxuICAgIGJvcmRlci13aWR0aDogMCAwIEBhcnJvd1NpemUgQGFycm93U2l6ZTtcbiAgICAucG9zaXRpb24oYWJzb2x1dGUsIDEwMCUsIGF1dG8sIGF1dG8sIEBhcnJvd09mZnNldCk7XG5cbiAgICAmIHdoZW4gKEBhcnJvd0Rvd24gPSBmYWxzZSkge1xuICAgICAgYm9yZGVyLXdpZHRoOiBAYXJyb3dTaXplIDAgMCBAYXJyb3dTaXplO1xuICAgICAgLnBvc2l0aW9uKGFic29sdXRlLCBhdXRvLCBhdXRvLCAxMDAlLCBAYXJyb3dPZmZzZXQpO1xuICAgIH1cbiAgfVxufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi50cmFuc2l0aW9uKEBwcm9wOmFsbCwgQHRpbWU6QHRyYW5zaXRpb25EdXJhdGlvbi1ub3JtYWwpIHtcbiAgdHJhbnNpdGlvbjogQHByb3AgQHRyYW5zaXRpb25UaW1pbmcgQHRpbWU7XG59XG5cbi50cmFuc2l0aW9uLXNob3J0KEBwcm9wOmFsbCkge1xuICAudHJhbnNpdGlvbihAcHJvcCwgQHRyYW5zaXRpb25EdXJhdGlvbi1zaG9ydCk7XG59XG5cbi50cmFuc2l0aW9uLWxvbmcoQHByb3A6YWxsKSB7XG4gIC50cmFuc2l0aW9uKEBwcm9wLCBAdHJhbnNpdGlvbkR1cmF0aW9uLWxvbmcpO1xufVxuXG4udHJhbnNpdGlvbi1leHRyYS1sb25nKEBwcm9wOmFsbCkge1xuICAudHJhbnNpdGlvbihAcHJvcCwgQHRyYW5zaXRpb25EdXJhdGlvbi1leHRyYS1sb25nKTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uYmctcHJpbWFyeSgpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnQ29sb3ItcHJpbWFyeTtcbn1cblxuLmJnLXNlY29uZGFyeSgpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogQGJnQ29sb3Itc2Vjb25kYXJ5O1xufVxuXG4uYmctY29sb3IoKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBjb2xvci1wcmltYXJ5O1xufVxuXG4uYmctYmFyKCkge1xuICAuYmctY29sb3I7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmJhcigpIHtcbiAgLmJnLWNvbG9yO1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5ib3JkZXItcHJpbWFyeSgpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgQGJvcmRlckNvbG9yLXByaW1hcnk7XG59XG5cbi5ib3JkZXItc2Vjb25kYXJ5KCkge1xuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyQ29sb3Itc2Vjb25kYXJ5O1xufVxuXG4uYm9yZGVyLWNvbG9yKCkge1xuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyQ29sb3ItY29sb3I7XG59XG5cbi5ib3JkZXItY2lyY3VsYXIoKSB7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJvcmRlclNoYWRvdygpIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4uYm9yZGVyU2hhZG93LXN0cm9uZyhAb2Zmc2V0OiAxMHB4KSB7XG4gIGJveC1zaGFkb3c6IDAgQG9mZnNldCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cblxuLmJvcmRlclNoYWRvdy1pbnNldChAb2Zmc2V0OiAxMHB4KSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLmJvcmRlclNoYWRvdy1vbi1ob3ZlcigpIHtcblx0LnRyYW5zaXRpb24tc2hvcnQoYm94LXNoYWRvdyk7XG4gICY6aG92ZXIge1xuICBcdC5ib3JkZXJTaGFkb3ctc3Ryb25nO1xuICB9XG59XG5cbi5pbm5lclNoYWRvdy1vbi1hY3RpdmUoKSB7XG4gIC50cmFuc2l0aW9uLXNob3J0KGJveC1zaGFkb3cpO1xuICAmOmFjdGl2ZSB7XG4gICAgLmJvcmRlclNoYWRvdy1pbnNldDtcbiAgfVxufVxuXG4uYm9yZGVyLXRvcC1iYXIoKSB7XG4gIGJvcmRlci10b3A6IEBsaW5lV2lkdGgtdGhpY2sgc29saWQgQGNvbG9yLXByaW1hcnk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.js");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var _services_scroll_section_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/scroll-section.service */ "./src/app/services/scroll-section.service.ts");
/* harmony import */ var _data_menu_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/menu-items */ "./src/app/data/menu-items.ts");






let HeaderComponent = class HeaderComponent {
    constructor(_window, translate, scrollService, scrollSectionService) {
        this._window = _window;
        this.translate = translate;
        this.scrollService = scrollService;
        this.scrollSectionService = scrollSectionService;
        this.isInit = false;
        this.isSticky = false;
        this.stickyIsHidden = false;
        this.isMenuOpen = false;
        this.currentLang = this.translate.currentLang;
        this.items = _data_menu_items__WEBPACK_IMPORTED_MODULE_5__["MENU_ITEMS"];
    }
    ngOnInit() {
        const self = this;
        this._window.setTimeout(function () {
            self.isInit = true;
        }, 0);
    }
    openMenu() {
        this.isMenuOpen = true;
    }
    closeMenu() {
        this.isMenuOpen = false;
    }
    hideSticky() {
        this.closeMenu();
        this.stickyIsHidden = true;
    }
    select(item) {
        this.closeMenu();
        this.items.filter(i => i.isActive)[0].isActive = false;
        item.isActive = true;
    }
    switchLanguage() {
        const allLangs = this.translate.getLangs();
        let currentIndex = allLangs.indexOf(this.currentLang);
        currentIndex = currentIndex < allLangs.length - 1 ? currentIndex + 1 : 0;
        this.currentLang = allLangs[currentIndex];
        this.translate.use(this.currentLang);
        return false;
    }
    onWindowScroll() {
        const scrollTop = this.scrollService.getScrollTop();
        this.isSticky = scrollTop > 0;
        this.scrollSectionService.onWindowScroll();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Window,] }] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _services_scroll_service__WEBPACK_IMPORTED_MODULE_3__["ScrollService"] },
    { type: _services_scroll_section_service__WEBPACK_IMPORTED_MODULE_4__["ScrollSectionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HeaderComponent.prototype, "onWindowScroll", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.less */ "./src/app/components/header/header.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Window)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Window,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        _services_scroll_service__WEBPACK_IMPORTED_MODULE_3__["ScrollService"],
        _services_scroll_section_service__WEBPACK_IMPORTED_MODULE_4__["ScrollSectionService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/resume-summary/resume-summary.component.less":
/*!*************************************************************************!*\
  !*** ./src/app/components/resume-summary/resume-summary.component.less ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.resume-summary {\n  margin-top: 80px;\n  text-align: center;\n}\n.resume-summary .resume-summary__link {\n  display: inline-block;\n  padding: 20px;\n  border: 1px solid #d1d1d1;\n  font-size: 13px;\n  line-height: 13px;\n  text-transform: uppercase;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-transition: box-shadow ease-out 0.2s;\n  transition: box-shadow ease-out 0.2s;\n  padding: 20px 40px;\n  font-size: 18px;\n  line-height: 18px;\n  font-weight: 600;\n  margin-bottom: 40px;\n}\n.resume-summary .resume-summary__link:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n}\n.resume-summary .resume-summary__link:active {\n  box-shadow: inset 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n}\n.resume-summary .resume-summary__text {\n  font-size: 22px;\n  line-height: 44px;\n  font-weight: 200;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtc3VtbWFyeS9yZXN1bWUtc3VtbWFyeS5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtYW5pbWF0aW9uLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VtZS1zdW1tYXJ5L3Jlc3VtZS1zdW1tYXJ5LmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1jYXJkLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWdlbmVyYWwubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtYnV0dG9uLmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLWJvcmRlci5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy10ZXh0Lmxlc3MiLCIvVXNlcnMvb2xvZmxhbmRhaGwvaG9tZTIvc3JjL2FwcC9sZXNzLWxpYnJhcnkvbWl4aW5zLXRyYW5zaXRpb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1QsV0FBVztBQUNYLFNBQVM7QUFDVCxZQUFZO0FBQ1osZUFBZTtBQUNmLGVBQWU7QUNnQmY7RUFDRTs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEYkY7RUNnQkE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRGJGO0VDZ0JBOzs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEWkY7RUNlQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEWkY7QUFDRjtBQ0hBO0VBQ0U7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGJGO0VDZ0JBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURiRjtFQ2dCQTs7O0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRFpGO0VDZUE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRFpGO0FBQ0Y7QUNlQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRGJGO0VDZ0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGRGO0FBQ0Y7QUNPQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFRGJGO0VDZ0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGRGO0FBQ0Y7QUNpQkE7RUFDRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURmRjtFQ2tCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURoQkY7QUFDRjtBQ1NBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEZkY7RUNrQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEaEJGO0FBQ0Y7QUVyQ0E7RUNDRSxnQkFBQTtFRENBLGtCQUFBO0FGdUNGO0FFekNBO0VFU0UscUJBQUE7RUNSQSxhQUFBO0VDREEseUJBQUE7RUNBQSxlQUFBO0VBQ0EsaUJBQUE7RUEwRUEseUJBQUE7RUZ0RUEscUJBQUE7RUFDQSxlQUFBO0VHTkEsNENBQUE7RUFBQSxvQ0FBQTtFSGlCQSxrQkFBQTtFRWpCQSxlQUFBO0VBQ0EsaUJBQUE7RUF5Q0EsZ0JBQUE7RUxqQ0UsbUJBQUE7QUZnREo7QU01QkU7RUFUQSwyRUFBQTtBTndDRjtBTXhCRTtFQVpBLDhFQUFBO0FOdUNGO0FFL0RBO0VLQUUsZUFBQTtFQUNBLGlCQUFBO0VBcUNBLGdCQUFBO0FQOEJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtc3VtbWFyeS9yZXN1bWUtc3VtbWFyeS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNpemUgKi9cbi8qIENvbG9ycyAqL1xuLyogVGV4dCAqL1xuLyogU3BhY2luZyAqL1xuLyogWiBwb3NpdGlvbiAqL1xuLyogVHJhbnNpdGlvbiAqL1xuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDEwJSxcbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICB9XG4gIDIwJSxcbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcbiAgfVxuICA0MCUsXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZyb21MZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZnJvbVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLnJlc3VtZS1zdW1tYXJ5IHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlc3VtZS1zdW1tYXJ5IC5yZXN1bWUtc3VtbWFyeV9fbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgZWFzZS1vdXQgMC4ycztcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnJlc3VtZS1zdW1tYXJ5IC5yZXN1bWUtc3VtbWFyeV9fbGluazpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cbi5yZXN1bWUtc3VtbWFyeSAucmVzdW1lLXN1bW1hcnlfX2xpbms6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuLnJlc3VtZS1zdW1tYXJ5IC5yZXN1bWUtc3VtbWFyeV9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG4iLCJcbi5zaGFrZS1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogc2hha2UgMXMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45NykgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG5AbW92ZS1hbmltYXRpb24tc3RhcnQ6IDIwMCU7XG5AbW92ZS1hbmltYXRpb24tZHVyYXRpb246IDYwMG1zO1xuXG4uZnJvbS1sZWZ0LWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBmcm9tTGVmdCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbn1cblxuLmZyb20tcmlnaHQtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IGZyb21SaWdodCBAbW92ZS1hbmltYXRpb24tZHVyYXRpb24gZWFzZS1vdXQgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMTAlLCA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gIH1cbiAgXG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cblxuICAzMCUsIDUwJSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG5cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZyb21MZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLUBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZnJvbVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi9sZXNzLWxpYnJhcnkvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL2xlc3MtbGlicmFyeS9taXhpbnMnO1xuXG4ucmVzdW1lLXN1bW1hcnkge1xuICAuY2FyZC1jb250YWluZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAucmVzdW1lLXN1bW1hcnlfX2xpbmsge1xuICAgIC5kaXNwbGF5LWlubGluZS1ibG9jaztcbiAgICAuYnRuO1xuICAgIC5idG4tbGc7XG4gICAgLnRleHQtYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiBAcGFkZGluZy1kb3VibGU7XG4gIH1cblxuICAucmVzdW1lLXN1bW1hcnlfX3RleHQge1xuICAgIC5mb250LXNpemUoQHRleHRTaXplLWgzLCAyKkB0ZXh0U2l6ZS1oMyk7XG4gICAgLnRleHQtbGlnaHQ7XG4gIH1cbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zLWJvcmRlcic7XG5cbi5jYXJkLWNvbnRhaW5lcigpIHtcbiAgbWFyZ2luLXRvcDogQGNhcmQtbWFyZ2luO1xufVxuXG4uY2FyZC1jb250YWluZXItaGFsZigpIHtcbiAgLmRpc3BsYXktaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiBAY2FyZC1jb250YWluZXItaGFsZi1zcGFjaW5nLXYgMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogQG1xLW1kLW1pbikge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1yaWdodDogQHBhZGRpbmctb25lLWFuZC1oYWxmO1xuICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIHBhZGRpbmctbGVmdDogQHBhZGRpbmctb25lLWFuZC1oYWxmO1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQoKSB7XG4gIC5ib3JkZXJTaGFkb3c7XG4gIGJhY2tncm91bmQ6IEBiZ0NvbG9yLWNhcmQ7XG59XG5cbi5jYXJkLXBhZGRpbmcoKSB7XG4gIHBhZGRpbmc6IEBjYXJkLXBhZGRpbmc7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IEBtcS14eHMtbWF4KSB7XG4gICAgcGFkZGluZzogQGNhcmQtcGFkZGluZy1oYWxmO1xuICB9XG59XG5cbi5jYXJkLWFjdGlvbigpIHtcbiAgLmJvcmRlclNoYWRvdy1vbi1ob3Zlcjtcbn1cblxuLmNhcmQtdGl0bGUoKSB7XG4gIC5oMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiBAY2FyZC10aXRsZS1tYXJnaW47XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSIsIlxuLy8gVmlzaWJpbGl0eVxuXG4uaGlkZGVuKCkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzcGxheS1ibG9jaygpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kaXNwbGF5LWlubGluZS1ibG9jaygpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbi5jbGVhcmZpeCgpIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG4uc2l6ZShAd2lkdGg6IGF1dG8sIEBoZWlnaHQ6IGF1dG8pIHtcblx0d2lkdGg6IEB3aWR0aDtcblx0aGVpZ2h0OiBAaGVpZ2h0O1xufVxuXG4ucG9zaXRpb24oQHBvc2l0aW9uOiByZWxhdGl2ZSwgQHRvcDogYXV0bywgQHJpZ2h0OiBhdXRvLCBAYm90dG9tOiBhdXRvLCBAbGVmdDogYXV0bykge1xuICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICB0b3A6IEB0b3A7XG4gIHJpZ2h0OiBAcmlnaHQ7XG4gIGJvdHRvbTogQGJvdHRvbTtcbiAgbGVmdDogQGxlZnQ7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucy1ib3JkZXInO1xuXG4uYnRuKCkge1xuICBwYWRkaW5nOiBAcGFkZGluZztcbiAgLmJvcmRlci1wcmltYXJ5O1xuICAudGV4dC1zbWFsbDtcbiAgLnRleHQtdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLmJvcmRlclNoYWRvdy1vbi1ob3ZlcjtcbiAgLmlubmVyU2hhZG93LW9uLWFjdGl2ZTtcbn1cblxuLmJ0bi1zbSgpIHtcbiAgcGFkZGluZzogQHBhZGRpbmctaGFsZjtcbiAgLnRleHQtc21hbGw7XG59XG5cbi5idG4tbGcoKSB7XG4gIHBhZGRpbmc6IEBwYWRkaW5nIEBwYWRkaW5nLWRvdWJsZTtcbiAgLnRleHQtbGFyZ2U7XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmJvcmRlci1wcmltYXJ5KCkge1xuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyQ29sb3ItcHJpbWFyeTtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1zZWNvbmRhcnk7XG59XG5cbi5ib3JkZXItY29sb3IoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1jb2xvcjtcbn1cblxuLmJvcmRlci1jaXJjdWxhcigpIHtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYm9yZGVyU2hhZG93KCkge1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5ib3JkZXJTaGFkb3ctc3Ryb25nKEBvZmZzZXQ6IDEwcHgpIHtcbiAgYm94LXNoYWRvdzogMCBAb2Zmc2V0IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4uYm9yZGVyU2hhZG93LWluc2V0KEBvZmZzZXQ6IDEwcHgpIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4uYm9yZGVyU2hhZG93LW9uLWhvdmVyKCkge1xuXHQudHJhbnNpdGlvbi1zaG9ydChib3gtc2hhZG93KTtcbiAgJjpob3ZlciB7XG4gIFx0LmJvcmRlclNoYWRvdy1zdHJvbmc7XG4gIH1cbn1cblxuLmlubmVyU2hhZG93LW9uLWFjdGl2ZSgpIHtcbiAgLnRyYW5zaXRpb24tc2hvcnQoYm94LXNoYWRvdyk7XG4gICY6YWN0aXZlIHtcbiAgICAuYm9yZGVyU2hhZG93LWluc2V0O1xuICB9XG59XG5cbi5ib3JkZXItdG9wLWJhcigpIHtcbiAgYm9yZGVyLXRvcDogQGxpbmVXaWR0aC10aGljayBzb2xpZCBAY29sb3ItcHJpbWFyeTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uZm9udC1zaXplKEBzaXplLCBAbGluZUhlaWdodDogQHNpemUpIHtcbiAgZm9udC1zaXplOiBAc2l6ZTtcbiAgbGluZS1oZWlnaHQ6IEBsaW5lSGVpZ2h0O1xufVxuXG5cbi50ZXh0LXByaW1hcnkoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplKTtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgZm9udC1mYW1pbHk6IEBmb250LXByaW1hcnk7XG59XG5cbi50ZXh0LWJvZHkoKSB7XG4gIC50ZXh0LXByaW1hcnk7XG4gIGxpbmUtaGVpZ2h0OiBAdGV4dFNpemUgKyA4cHg7XG59XG5cbi50ZXh0LWRhcmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG59XG5cbi50ZXh0LWdyZXkoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLWxpZ2h0O1xufVxuXG4udGV4dC1saWdodC1ncmV5KCkge1xuICBjb2xvcjogQHRleHRDb2xvci1saWdodGVyO1xufVxuXG4udGV4dC1jb2xvcigpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItY29sb3I7XG59XG5cbi50ZXh0LW9uLWRhcmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLW9uRGFyaztcbn1cblxuXG4udGV4dC1saWdodCgpIHtcbiAgZm9udC13ZWlnaHQ6IEB0ZXh0V2VpZ2h0LWxpZ2h0O1xufVxuXG4udGV4dC1ib2xkKCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtYm9sZDtcbn1cblxuLnRleHQtYm9sZGVyKCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtYm9sZGVyO1xufVxuXG5cbi5oMSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDEpO1xufVxuXG4uaDIoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWgyKTtcbn1cblxuLmgzKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oMyk7XG59XG5cbi5oNCgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDQpO1xufVxuXG4udGV4dC1zbWFsbCgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtc21hbGwpO1xufVxuXG4udGV4dC1sYXJnZSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtbGFyZ2UpO1xufVxuXG4udGV4dC11cHBlcmNhc2UoKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLmxpbmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciwgJjphY3RpdmUsICY6dmlzaXRlZCB7XG4gICAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgfVxufVxuXG4udGV4dC1idWJibGUoQGFycm93RG93bjogdHJ1ZSwgQGJnQ29sb3I6IEByZWQtbGlnaHQpIHtcbiAgQGFycm93U2l6ZTogOHB4O1xuICBAYXJyb3dPZmZzZXQ6IDVweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IEBhcnJvd1NpemU7XG4gIHBhZGRpbmc6IEBwYWRkaW5nLXF1YXJ0ZXIgQHBhZGRpbmctaGFsZjtcbiAgYmFja2dyb3VuZDogQGJnQ29sb3I7XG5cbiAgLmRpc3BsYXktaW5saW5lLWJsb2NrO1xuICAudGV4dC1vbi1kYXJrO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IEBiZ0NvbG9yO1xuICAgIC5kaXNwbGF5LWJsb2NrO1xuICAgIC5zaXplKDAsIDApO1xuXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgQGFycm93U2l6ZSBAYXJyb3dTaXplO1xuICAgIC5wb3NpdGlvbihhYnNvbHV0ZSwgMTAwJSwgYXV0bywgYXV0bywgQGFycm93T2Zmc2V0KTtcblxuICAgICYgd2hlbiAoQGFycm93RG93biA9IGZhbHNlKSB7XG4gICAgICBib3JkZXItd2lkdGg6IEBhcnJvd1NpemUgMCAwIEBhcnJvd1NpemU7XG4gICAgICAucG9zaXRpb24oYWJzb2x1dGUsIGF1dG8sIGF1dG8sIDEwMCUsIEBhcnJvd09mZnNldCk7XG4gICAgfVxuICB9XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLnRyYW5zaXRpb24oQHByb3A6YWxsLCBAdGltZTpAdHJhbnNpdGlvbkR1cmF0aW9uLW5vcm1hbCkge1xuICB0cmFuc2l0aW9uOiBAcHJvcCBAdHJhbnNpdGlvblRpbWluZyBAdGltZTtcbn1cblxuLnRyYW5zaXRpb24tc2hvcnQoQHByb3A6YWxsKSB7XG4gIC50cmFuc2l0aW9uKEBwcm9wLCBAdHJhbnNpdGlvbkR1cmF0aW9uLXNob3J0KTtcbn1cblxuLnRyYW5zaXRpb24tbG9uZyhAcHJvcDphbGwpIHtcbiAgLnRyYW5zaXRpb24oQHByb3AsIEB0cmFuc2l0aW9uRHVyYXRpb24tbG9uZyk7XG59XG5cbi50cmFuc2l0aW9uLWV4dHJhLWxvbmcoQHByb3A6YWxsKSB7XG4gIC50cmFuc2l0aW9uKEBwcm9wLCBAdHJhbnNpdGlvbkR1cmF0aW9uLWV4dHJhLWxvbmcpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/resume-summary/resume-summary.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/resume-summary/resume-summary.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResumeSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeSummaryComponent", function() { return ResumeSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResumeSummaryComponent = class ResumeSummaryComponent {
};
ResumeSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume-summary/resume-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume-summary.component.less */ "./src/app/components/resume-summary/resume-summary.component.less")).default]
    })
], ResumeSummaryComponent);



/***/ }),

/***/ "./src/app/components/social-links/social-links.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/social-links/social-links.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.social-links {\n  padding: 20px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .social-links {\n    padding: 20px 10px;\n  }\n}\n.social-links.social-links--color {\n  background: #e86767;\n}\n.social-links .social-links__link {\n  display: inline-block;\n  width: 42px;\n  height: 42px;\n  padding: 10px;\n  margin: 0 10px;\n  font-size: 22px;\n  line-height: 22px;\n  border-radius: 50%;\n  background: transparent;\n  -webkit-transition: background ease-out 0.2s;\n  transition: background ease-out 0.2s;\n}\n@media (max-width: 767px) {\n  .social-links .social-links__link {\n    margin: 0;\n  }\n}\n.social-links .social-links__link a {\n  color: #d1d1d1;\n}\n.social-links .social-links__link:hover {\n  background: rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.social-links .social-links__link:hover a {\n  color: #3d4451;\n}\n.social-links.social-links--color .social-links__link a,\n.social-links.social-links--color .social-links__link a:hover {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwtbGlua3Mvc29jaWFsLWxpbmtzLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1hbmltYXRpb24ubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsLWxpbmtzL3NvY2lhbC1saW5rcy5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtdGV4dC5sZXNzIiwiL1VzZXJzL29sb2ZsYW5kYWhsL2hvbWUyL3NyYy9hcHAvbGVzcy1saWJyYXJ5L21peGlucy1ib3JkZXIubGVzcyIsIi9Vc2Vycy9vbG9mbGFuZGFobC9ob21lMi9zcmMvYXBwL2xlc3MtbGlicmFyeS9taXhpbnMtdHJhbnNpdGlvbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVM7QUFDVCxXQUFXO0FBQ1gsU0FBUztBQUNULFlBQVk7QUFDWixlQUFlO0FBQ2YsZUFBZTtBQ2dCZjtFQUNFOztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURiRjtFQ2dCQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEYkY7RUNnQkE7OztJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURaRjtFQ2VBOztJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RURaRjtBQUNGO0FDSEE7RUFDRTs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEYkY7RUNnQkE7O0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFRGJGO0VDZ0JBOzs7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VEWkY7RUNlQTs7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VEWkY7QUFDRjtBQ2VBO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VEYkY7RUNnQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEZEY7QUFDRjtBQ09BO0VBQ0U7SUFDRSwyQ0FBQTtZQUFBLG1DQUFBO0VEYkY7RUNnQkE7SUFDRSx1Q0FBQTtZQUFBLCtCQUFBO0VEZEY7QUFDRjtBQ2lCQTtFQUNFO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFRGZGO0VDa0JBO0lBQ0UsdUNBQUE7WUFBQSwrQkFBQTtFRGhCRjtBQUNGO0FDU0E7RUFDRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RURmRjtFQ2tCQTtJQUNFLHVDQUFBO1lBQUEsK0JBQUE7RURoQkY7QUFDRjtBRXJDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBRnVDRjtBRXJDRTtFQUFBO0lBQ0Usa0JBQUE7RUZ3Q0Y7QUFDRjtBRXRDRTtFQUNFLG1CQUFBO0FGd0NKO0FFakRBO0VBaUJJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQ3JCRixlQUFBO0VBQ0EsaUJBQUE7RUNXRCxrQkFBQTtFRmtCRyx1QkFBQTtFRzlCRiw0Q0FBQTtFQUFBLG9DQUFBO0FMNkRGO0FFcENJO0VBQUE7SUFDRSxTQUFBO0VGdUNKO0FBQ0Y7QUVsRUE7RUN5QkUsY0FBQTtBSDRDRjtBRS9CSTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtBRmlDTjtBRW5DSTtFQ3JCRixjQUFBO0FIMkRGO0FFNUJFOztFQ2ZBLFdBQUE7QUgrQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lhbC1saW5rcy9zb2NpYWwtbGlua3MuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTaXplICovXG4vKiBDb2xvcnMgKi9cbi8qIFRleHQgKi9cbi8qIFNwYWNpbmcgKi9cbi8qIFogcG9zaXRpb24gKi9cbi8qIFRyYW5zaXRpb24gKi9cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICAyMCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG4gIDMwJSxcbiAgNTAlLFxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cbiAgNDAlLFxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmcm9tTGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZyb21SaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5zb2NpYWwtbGlua3Mge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNvY2lhbC1saW5rcyB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICB9XG59XG4uc29jaWFsLWxpbmtzLnNvY2lhbC1saW5rcy0tY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjZTg2NzY3O1xufVxuLnNvY2lhbC1saW5rcyAuc29jaWFsLWxpbmtzX19saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLW91dCAwLjJzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zb2NpYWwtbGlua3MgLnNvY2lhbC1saW5rc19fbGluayB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4uc29jaWFsLWxpbmtzIC5zb2NpYWwtbGlua3NfX2xpbmsgYSB7XG4gIGNvbG9yOiAjZDFkMWQxO1xufVxuLnNvY2lhbC1saW5rcyAuc29jaWFsLWxpbmtzX19saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc29jaWFsLWxpbmtzIC5zb2NpYWwtbGlua3NfX2xpbms6aG92ZXIgYSB7XG4gIGNvbG9yOiAjM2Q0NDUxO1xufVxuLnNvY2lhbC1saW5rcy5zb2NpYWwtbGlua3MtLWNvbG9yIC5zb2NpYWwtbGlua3NfX2xpbmsgYSxcbi5zb2NpYWwtbGlua3Muc29jaWFsLWxpbmtzLS1jb2xvciAuc29jaWFsLWxpbmtzX19saW5rIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbiIsIlxuLnNoYWtlLWFuaW1hdGlvbigpIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAxcyBjdWJpYy1iZXppZXIoLjM2LC4wNywuMTksLjk3KSBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbkBtb3ZlLWFuaW1hdGlvbi1zdGFydDogMjAwJTtcbkBtb3ZlLWFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG5cbi5mcm9tLWxlZnQtYW5pbWF0aW9uKCkge1xuICBhbmltYXRpb246IGZyb21MZWZ0IEBtb3ZlLWFuaW1hdGlvbi1kdXJhdGlvbiBlYXNlLW91dCBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC1AbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xufVxuXG4uZnJvbS1yaWdodC1hbmltYXRpb24oKSB7XG4gIGFuaW1hdGlvbjogZnJvbVJpZ2h0IEBtb3ZlLWFuaW1hdGlvbi1kdXJhdGlvbiBlYXNlLW91dCBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEBtb3ZlLWFuaW1hdGlvbi1zdGFydCwgMCwgMCk7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICBcbiAgMjAlLCA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbiAgfVxuXG4gIDMwJSwgNTAlLCA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cblxuICA0MCUsIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZnJvbUxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtQG1vdmUtYW5pbWF0aW9uLXN0YXJ0LCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmcm9tUmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChAbW92ZS1hbmltYXRpb24tc3RhcnQsIDAsIDApO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uL2xlc3MtbGlicmFyeS92YXJpYWJsZXMnO1xuQGltcG9ydCAnLi4vLi4vbGVzcy1saWJyYXJ5L21peGlucyc7XG5cbi5zb2NpYWwtbGlua3Mge1xuICBwYWRkaW5nOiBAcGFkZGluZztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBAbXEteHMtbWF4KSB7XG4gICAgcGFkZGluZzogQHBhZGRpbmcgQHBhZGRpbmctaGFsZjtcbiAgfVxuXG4gICYuc29jaWFsLWxpbmtzLS1jb2xvciB7XG4gICAgYmFja2dyb3VuZDogQHJlZC1saWdodDtcbiAgfVxuXG4gIC5zb2NpYWwtbGlua3NfX2xpbmsge1xuICAgIEBpY29uU2l6ZTogQHRleHRTaXplLWljb247XG4gICAgQGljb25QYWRkaW5nOiBAcGFkZGluZy1oYWxmO1xuICAgIEBsaW5rU2l6ZTogQGljb25TaXplICsgKDIgKiBAaWNvblBhZGRpbmcpO1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBAbGlua1NpemU7XG4gICAgaGVpZ2h0OiBAbGlua1NpemU7XG4gICAgcGFkZGluZzogQGljb25QYWRkaW5nO1xuICAgIG1hcmdpbjogMCBAaWNvblBhZGRpbmc7XG5cbiAgICAuZm9udC1zaXplKEBpY29uU2l6ZSk7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogQG1xLXhzLW1heCkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5ib3JkZXItY2lyY3VsYXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAudHJhbnNpdGlvbi1zaG9ydChiYWNrZ3JvdW5kKTtcblxuICAgIGEge1xuICAgICAgLnRleHQtbGlnaHQtZ3JleTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuMSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIGEge1xuICAgICAgICAudGV4dC1kYXJrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuc29jaWFsLWxpbmtzLS1jb2xvciB7XG4gICAgLnNvY2lhbC1saW5rc19fbGluayB7XG4gICAgICBhLCBhOmhvdmVyIHtcbiAgICAgICAgLnRleHQtb24tZGFyaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uZm9udC1zaXplKEBzaXplLCBAbGluZUhlaWdodDogQHNpemUpIHtcbiAgZm9udC1zaXplOiBAc2l6ZTtcbiAgbGluZS1oZWlnaHQ6IEBsaW5lSGVpZ2h0O1xufVxuXG5cbi50ZXh0LXByaW1hcnkoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplKTtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgZm9udC1mYW1pbHk6IEBmb250LXByaW1hcnk7XG59XG5cbi50ZXh0LWJvZHkoKSB7XG4gIC50ZXh0LXByaW1hcnk7XG4gIGxpbmUtaGVpZ2h0OiBAdGV4dFNpemUgKyA4cHg7XG59XG5cbi50ZXh0LWRhcmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG59XG5cbi50ZXh0LWdyZXkoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLWxpZ2h0O1xufVxuXG4udGV4dC1saWdodC1ncmV5KCkge1xuICBjb2xvcjogQHRleHRDb2xvci1saWdodGVyO1xufVxuXG4udGV4dC1jb2xvcigpIHtcbiAgY29sb3I6IEB0ZXh0Q29sb3ItY29sb3I7XG59XG5cbi50ZXh0LW9uLWRhcmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLW9uRGFyaztcbn1cblxuXG4udGV4dC1saWdodCgpIHtcbiAgZm9udC13ZWlnaHQ6IEB0ZXh0V2VpZ2h0LWxpZ2h0O1xufVxuXG4udGV4dC1ib2xkKCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtYm9sZDtcbn1cblxuLnRleHQtYm9sZGVyKCkge1xuICBmb250LXdlaWdodDogQHRleHRXZWlnaHQtYm9sZGVyO1xufVxuXG5cbi5oMSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDEpO1xufVxuXG4uaDIoKSB7XG4gIC5mb250LXNpemUoQHRleHRTaXplLWgyKTtcbn1cblxuLmgzKCkge1xuICAuZm9udC1zaXplKEB0ZXh0U2l6ZS1oMyk7XG59XG5cbi5oNCgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtaDQpO1xufVxuXG4udGV4dC1zbWFsbCgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtc21hbGwpO1xufVxuXG4udGV4dC1sYXJnZSgpIHtcbiAgLmZvbnQtc2l6ZShAdGV4dFNpemUtbGFyZ2UpO1xufVxuXG4udGV4dC11cHBlcmNhc2UoKSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLmxpbmsoKSB7XG4gIGNvbG9yOiBAdGV4dENvbG9yLXByaW1hcnk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciwgJjphY3RpdmUsICY6dmlzaXRlZCB7XG4gICAgY29sb3I6IEB0ZXh0Q29sb3ItcHJpbWFyeTtcbiAgfVxufVxuXG4udGV4dC1idWJibGUoQGFycm93RG93bjogdHJ1ZSwgQGJnQ29sb3I6IEByZWQtbGlnaHQpIHtcbiAgQGFycm93U2l6ZTogOHB4O1xuICBAYXJyb3dPZmZzZXQ6IDVweDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IEBhcnJvd1NpemU7XG4gIHBhZGRpbmc6IEBwYWRkaW5nLXF1YXJ0ZXIgQHBhZGRpbmctaGFsZjtcbiAgYmFja2dyb3VuZDogQGJnQ29sb3I7XG5cbiAgLmRpc3BsYXktaW5saW5lLWJsb2NrO1xuICAudGV4dC1vbi1kYXJrO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IEBiZ0NvbG9yO1xuICAgIC5kaXNwbGF5LWJsb2NrO1xuICAgIC5zaXplKDAsIDApO1xuXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgQGFycm93U2l6ZSBAYXJyb3dTaXplO1xuICAgIC5wb3NpdGlvbihhYnNvbHV0ZSwgMTAwJSwgYXV0bywgYXV0bywgQGFycm93T2Zmc2V0KTtcblxuICAgICYgd2hlbiAoQGFycm93RG93biA9IGZhbHNlKSB7XG4gICAgICBib3JkZXItd2lkdGg6IEBhcnJvd1NpemUgMCAwIEBhcnJvd1NpemU7XG4gICAgICAucG9zaXRpb24oYWJzb2x1dGUsIGF1dG8sIGF1dG8sIDEwMCUsIEBhcnJvd09mZnNldCk7XG4gICAgfVxuICB9XG59IiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmJvcmRlci1wcmltYXJ5KCkge1xuICBib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyQ29sb3ItcHJpbWFyeTtcbn1cblxuLmJvcmRlci1zZWNvbmRhcnkoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1zZWNvbmRhcnk7XG59XG5cbi5ib3JkZXItY29sb3IoKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXJDb2xvci1jb2xvcjtcbn1cblxuLmJvcmRlci1jaXJjdWxhcigpIHtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYm9yZGVyU2hhZG93KCkge1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5ib3JkZXJTaGFkb3ctc3Ryb25nKEBvZmZzZXQ6IDEwcHgpIHtcbiAgYm94LXNoYWRvdzogMCBAb2Zmc2V0IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4uYm9yZGVyU2hhZG93LWluc2V0KEBvZmZzZXQ6IDEwcHgpIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4uYm9yZGVyU2hhZG93LW9uLWhvdmVyKCkge1xuXHQudHJhbnNpdGlvbi1zaG9ydChib3gtc2hhZG93KTtcbiAgJjpob3ZlciB7XG4gIFx0LmJvcmRlclNoYWRvdy1zdHJvbmc7XG4gIH1cbn1cblxuLmlubmVyU2hhZG93LW9uLWFjdGl2ZSgpIHtcbiAgLnRyYW5zaXRpb24tc2hvcnQoYm94LXNoYWRvdyk7XG4gICY6YWN0aXZlIHtcbiAgICAuYm9yZGVyU2hhZG93LWluc2V0O1xuICB9XG59XG5cbi5ib3JkZXItdG9wLWJhcigpIHtcbiAgYm9yZGVyLXRvcDogQGxpbmVXaWR0aC10aGljayBzb2xpZCBAY29sb3ItcHJpbWFyeTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4udHJhbnNpdGlvbihAcHJvcDphbGwsIEB0aW1lOkB0cmFuc2l0aW9uRHVyYXRpb24tbm9ybWFsKSB7XG4gIHRyYW5zaXRpb246IEBwcm9wIEB0cmFuc2l0aW9uVGltaW5nIEB0aW1lO1xufVxuXG4udHJhbnNpdGlvbi1zaG9ydChAcHJvcDphbGwpIHtcbiAgLnRyYW5zaXRpb24oQHByb3AsIEB0cmFuc2l0aW9uRHVyYXRpb24tc2hvcnQpO1xufVxuXG4udHJhbnNpdGlvbi1sb25nKEBwcm9wOmFsbCkge1xuICAudHJhbnNpdGlvbihAcHJvcCwgQHRyYW5zaXRpb25EdXJhdGlvbi1sb25nKTtcbn1cblxuLnRyYW5zaXRpb24tZXh0cmEtbG9uZyhAcHJvcDphbGwpIHtcbiAgLnRyYW5zaXRpb24oQHByb3AsIEB0cmFuc2l0aW9uRHVyYXRpb24tZXh0cmEtbG9uZyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/social-links/social-links.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-links/social-links.component.ts ***!
  \*******************************************************************/
/*! exports provided: SocialLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinksComponent", function() { return SocialLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_social_link_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/social-link-items */ "./src/app/data/social-link-items.ts");



let SocialLinksComponent = class SocialLinksComponent {
    constructor() {
        this.theme = 'normal';
        this.socialLinkItems = _data_social_link_items__WEBPACK_IMPORTED_MODULE_2__["SOCIAL_LINK_ITEMS"];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SocialLinksComponent.prototype, "theme", void 0);
SocialLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social-links',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social-links/social-links.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-links.component.less */ "./src/app/components/social-links/social-links.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SocialLinksComponent);



/***/ }),

/***/ "./src/app/data/brand-link-items.ts":
/*!******************************************!*\
  !*** ./src/app/data/brand-link-items.ts ***!
  \******************************************/
/*! exports provided: BRAND_LINK_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRAND_LINK_ITEMS", function() { return BRAND_LINK_ITEMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const BRAND_LINK_ITEMS = [
    { url: 'https://angular.io/', iconName: 'angular', title: 'Angular' },
    { url: 'https://www.typescriptlang.org/', iconName: 'typescript', title: 'Typescript' },
    { url: 'http://lesscss.org/', iconName: 'less', title: 'Less' },
    { url: 'https://webpack.github.io/', iconName: 'webpack', title: 'Webpack' }
];


/***/ }),

/***/ "./src/app/data/demo-items.ts":
/*!************************************!*\
  !*** ./src/app/data/demo-items.ts ***!
  \************************************/
/*! exports provided: DEMO_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMO_ITEMS", function() { return DEMO_ITEMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const DEMO_ITEMS = [
    {
        url: 'https://oloflandahl.github.io/memory/',
        descriptionTranslationKey: 'Demo_Memory',
        image: 'memory'
    },
    {
        url: 'https://oloflandahl.github.io/intersection-observer-demo/',
        descriptionTranslationKey: 'Demo_Photos',
        image: 'photos'
    }
];


/***/ }),

/***/ "./src/app/data/interest-items.ts":
/*!****************************************!*\
  !*** ./src/app/data/interest-items.ts ***!
  \****************************************/
/*! exports provided: INTEREST_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTEREST_ITEMS", function() { return INTEREST_ITEMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Can only contain 7 items
const INTEREST_ITEMS = [
    { iconPrefix: 'fa', iconName: 'music', title: 'Interest_Music', description: 'Interest_Music_Description' },
    { iconPrefix: 'fa', iconName: 'futbol-o', title: 'Interest_Football', description: 'Interest_Football_Description' },
    { iconPrefix: 'map-icon', iconName: 'trail-walking', title: 'Interest_Nature', description: 'Interest_Nature_Description' },
    { iconPrefix: 'map-icon', iconName: 'surfing', title: 'Interest_Surfing', description: 'Interest_Surfing_Description' },
    { iconPrefix: 'fa', iconName: 'camera', title: 'Interest_Photo', description: 'Interest_Photo_Description' },
    { iconPrefix: 'map-icon', iconName: 'restaurant', title: 'Interest_Food', description: 'Interest_Food_Description' },
    { iconPrefix: 'map-icon', iconName: 'bar', title: 'Interest_Beer', description: 'Interest_Beer_Description' }
];


/***/ }),

/***/ "./src/app/data/menu-items.ts":
/*!************************************!*\
  !*** ./src/app/data/menu-items.ts ***!
  \************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const MENU_ITEMS = [
    { id: 'about', translationKey: 'About_Title', isActive: true },
    { id: 'skills', translationKey: 'Skills_Title', isActive: false },
    { id: 'experience', translationKey: 'Experience_Title', isActive: false },
    { id: 'demos', translationKey: 'Demos_Title', isActive: false },
    { id: 'interests', translationKey: 'Interests_Title', isActive: false },
    { id: 'page', translationKey: 'AboutPage_Title', isActive: false }
];


/***/ }),

/***/ "./src/app/data/person-info-items.ts":
/*!*******************************************!*\
  !*** ./src/app/data/person-info-items.ts ***!
  \*******************************************/
/*! exports provided: INFO_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_ITEMS", function() { return INFO_ITEMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/date.service */ "./src/app/services/date.service.ts");


const INFO_ITEMS = [
    { key: 'PersonInfo_Age', value: _services_date_service__WEBPACK_IMPORTED_MODULE_1__["default"].getYearsToNow(1982, 8, 3) },
    { key: 'PersonInfo_Years_Experience', value: _services_date_service__WEBPACK_IMPORTED_MODULE_1__["default"].getYearsToNow(2008, 2, 15) },
    { key: 'PersonInfo_City', value: 'Göteborg' },
    { key: 'PersonInfo_Employment', value: 'HiQ Göteborg' },
    { key: 'PersonInfo_Email', value: 'oloflandahl@gmail.com' }
];


/***/ }),

/***/ "./src/app/data/skill-items.ts":
/*!*************************************!*\
  !*** ./src/app/data/skill-items.ts ***!
  \*************************************/
/*! exports provided: SKILL_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILL_ITEMS", function() { return SKILL_ITEMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SKILL_ITEMS = [
    { key: 'JavaScript', value: 90 },
    { key: 'TypeScript', value: 80 },
    { key: 'HTML/CSS', value: 90 },
    { key: 'Angular', value: 90 },
    { key: 'React', value: 70 },
    { key: 'Vue', value: 50 },
    { key: 'PWA', value: 60 },
    { key: '.NET', value: 75 },
    { key: 'SQL', value: 50 },
];


/***/ }),

/***/ "./src/app/data/social-link-items.ts":
/*!*******************************************!*\
  !*** ./src/app/data/social-link-items.ts ***!
  \*******************************************/
/*! exports provided: SOCIAL_LINK_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LINK_ITEMS", function() { return SOCIAL_LINK_ITEMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SOCIAL_LINK_ITEMS = [
    { url: 'https://www.linkedin.com/in/oloflandahl', iconName: 'linkedin', title: 'LinkedIn' },
    { url: 'https://github.com/oloflandahl', iconName: 'github', title: 'Github' },
    { url: 'https://securitashiq.slack.com/team/oloflandahl', iconName: 'slack', title: 'Slack' },
    { url: 'https://www.last.fm/user/oloflandahl', iconName: 'lastfm', title: 'LastFM' },
    { url: 'mailto:oloflandahl@gmail.com', iconName: 'envelope-o', title: 'Email', openOnPage: true }
];
const share = navigator.share;
if (share) {
    const onShare = (event) => {
        event.preventDefault();
        share({
            title: 'Olof Landahl',
            url: 'https://oloflandahl.com/'
        });
    };
    SOCIAL_LINK_ITEMS.push({
        onClick: onShare,
        iconName: 'share-alt',
        title: 'Share'
    });
}



/***/ }),

/***/ "./src/app/data/timeline-items.ts":
/*!****************************************!*\
  !*** ./src/app/data/timeline-items.ts ***!
  \****************************************/
/*! exports provided: TIMELINE_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMELINE_ITEMS", function() { return TIMELINE_ITEMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const TIMELINE_ITEMS = [
    {
        startYear: 2020,
        endYear: 2020,
        logo: 'fis',
        city: 'Göteborg',
        title: 'HiQ - Freight Investor Services',
        subTitleTranslationKey: 'Role_WebDeveloper',
        descriptionTranslationKey: 'Experience_FIS',
        url: 'https://freightinvestorservices.com/',
        technologies: ['React', 'TypeScript', 'PWA', 'Web Push', 'SignalR', 'Highcharts', 'Jest']
    },
    {
        startYear: 2018,
        endYear: 2019,
        logo: 'pbolaget',
        city: 'Göteborg',
        title: 'HiQ - Parkering Göteborg',
        subTitleTranslationKey: 'Role_WebDeveloper',
        descriptionTranslationKey: 'Experience_PBolaget',
        url: 'https://foretag.parkeringgoteborg.se/',
        technologies: ['Angular 8', 'TypeScript', 'Jasmine', 'Git']
    },
    {
        startYear: 2016,
        endYear: 2018,
        logo: 'securitas',
        city: 'Malmö',
        title: 'HiQ - Securitas',
        subTitleTranslationKey: 'Role_WebDeveloper',
        descriptionTranslationKey: 'Experience_Securitas',
        url: 'http://www.securitas.se/',
        technologies: ['ASP.NET', 'MVC', 'React', 'KnockoutJS', 'JQuery', 'EcmaScript2015', 'Jasmine', 'NUnit', 'SQL', 'Git']
    },
    {
        startYear: 2015,
        endYear: 2016,
        logo: 'tunstall',
        city: 'Malmö',
        title: 'HiQ - Tunstall',
        subTitleTranslationKey: 'Role_WebDeveloper',
        descriptionTranslationKey: 'Experience_Tunstall',
        url: 'http://www.tunstall.se/',
        technologies: ['ASP.NET', 'MVC', 'KnockoutJS', 'Jasmine', 'NUnit', 'SQL', 'Git', 'Kanban']
    },
    {
        startYear: 2016,
        endYear: 2017,
        logo: 'hiq',
        city: 'Malmö',
        title: 'HiQ',
        subTitleTranslationKey: 'Role_CodeTestVerifier',
        descriptionTranslationKey: 'Experience_HiQ',
        url: 'http://hiq.se/',
        technologies: ['JavaScript', 'HTML', 'CSS']
    },
    {
        startYear: 2014,
        endYear: 2015,
        logo: 'telia',
        city: 'Göteborg',
        title: 'HiQ - Telia',
        subTitleTranslationKey: 'Role_WebDeveloper',
        descriptionTranslationKey: 'Experience_Telia',
        url: 'https://www.telia.se/privat',
        technologies: ['AngularJS', 'JQuery', 'Jasmine', 'LESS', 'Magnolia', 'Grunt', 'Git', 'Scrum']
    },
    {
        startYear: 2013,
        endYear: 2014,
        logo: 'vodafone',
        city: 'Sydney',
        title: 'DiUS - Vodafone',
        subTitleTranslationKey: 'Role_WebDeveloper',
        descriptionTranslationKey: 'Experience_Vodafone',
        url: 'http://www.vodafone.com.au/',
        technologies: ['AngularJS', 'BackboneJS', 'JQuery', 'JavaScript', 'Jasmine', 'SASS', 'FatWire', 'Git', 'SVN', 'Scrum']
    },
    {
        startYear: 2008,
        endYear: 2013,
        logo: 'spotfire',
        city: 'Göteborg',
        title: 'TIBCO Spotfire',
        subTitleTranslationKey: 'Role_SoftwareDeveloper',
        descriptionTranslationKey: 'Experience_Tibco',
        url: 'https://spotfire.tibco.com/',
        technologies: ['.NET', 'ASP.NET', 'WinForms', 'C#', 'JQuery', 'JavaScript', 'NUnit', 'SVN']
    },
    {
        startYear: 2008,
        endYear: 2008,
        logo: 'carmenta',
        city: 'Göteborg',
        title: 'Carmenta',
        subTitleTranslationKey: 'Role_SoftwareDeveloper',
        descriptionTranslationKey: 'Experience_Carmenta',
        url: 'http://www.carmenta.com',
        technologies: ['.NET', 'C#', 'C++']
    },
    {
        startYear: 2002,
        endYear: 2008,
        logo: 'liu',
        city: 'Norrköping',
        title: 'Linköpings Universitet',
        subTitleTranslationKey: 'Degree_Medieteknik',
        descriptionTranslationKey: 'Experience_Linkoping',
        url: 'http://liu.se/',
        technologies: []
    }
];


/***/ }),

/***/ "./src/app/directives/click-outside.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/click-outside.directive.ts ***!
  \*******************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(element) {
        this.element = element;
        this.appClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.element.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.appClickOutside.emit(event);
        }
    }
};
ClickOutsideDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClickOutsideDirective.prototype, "appClickOutside", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent, HTMLElement]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appClickOutside]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ClickOutsideDirective);



/***/ }),

/***/ "./src/app/directives/scroll-section.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/scroll-section.directive.ts ***!
  \********************************************************/
/*! exports provided: ScrollSectionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSectionDirective", function() { return ScrollSectionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_scroll_section_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/scroll-section.service */ "./src/app/services/scroll-section.service.ts");



let ScrollSectionDirective = class ScrollSectionDirective {
    constructor(scrollService, renderer, element) {
        this.scrollService = scrollService;
        this.renderer = renderer;
        this.element = element;
    }
    ngOnInit() {
        this.scrollService.registerSection({
            id: this.id,
            element: this.element
        });
    }
};
ScrollSectionDirective.ctorParameters = () => [
    { type: _services_scroll_section_service__WEBPACK_IMPORTED_MODULE_2__["ScrollSectionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appScrollSection'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ScrollSectionDirective.prototype, "id", void 0);
ScrollSectionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appScrollSection]',
        host: {
            '[id]': 'id'
        }
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scroll_section_service__WEBPACK_IMPORTED_MODULE_2__["ScrollSectionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ScrollSectionDirective);



/***/ }),

/***/ "./src/app/models/line.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/line.model.ts ***!
  \**************************************/
/*! exports provided: Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Line {
    constructor(line) {
        this.start = line.start;
        this.length = line.length;
    }
    get end() {
        return this.start + this.length;
    }
    isBetween(x) {
        return x >= this.start && x <= this.end;
    }
    isOverlapping(line) {
        if (this.end < line.start || this.start > line.end) {
            return false;
        }
        return true;
    }
    getOverlap(line) {
        const otherLine = new Line(line);
        if (!this.isOverlapping(otherLine)) {
            return 0;
        }
        return Math.min(this.end, otherLine.end) - Math.max(this.start, otherLine.start);
    }
    getDistanceFromTop(x) {
        if (!this.isBetween(x)) {
            return Number.MAX_VALUE;
        }
        return x - this.start;
    }
}



/***/ }),

/***/ "./src/app/services/date.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/date.service.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DateServiceInstance {
    getYearsToNow(year, month, day) {
        const then = new Date(year, month - 1, day);
        const now = new Date();
        const monthsDiff = now.getMonth() - then.getMonth();
        let yearsDiff = now.getFullYear() - then.getFullYear();
        if (monthsDiff <= -6) {
            yearsDiff--;
        }
        return yearsDiff;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new DateServiceInstance());


/***/ }),

/***/ "./src/app/services/scroll-section.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/scroll-section.service.ts ***!
  \****************************************************/
/*! exports provided: ScrollSectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSectionService", function() { return ScrollSectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/scroll.service */ "./src/app/services/scroll.service.ts");
/* harmony import */ var _data_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/menu-items */ "./src/app/data/menu-items.ts");




let ScrollSectionService = class ScrollSectionService {
    constructor(scrollService, _window) {
        this.scrollService = scrollService;
        this._window = _window;
        this.menuItems = _data_menu_items__WEBPACK_IMPORTED_MODULE_3__["MENU_ITEMS"];
        this.NotActivatedClass = 'not-activated';
        this.sections = [];
    }
    registerSection(section) {
        section.element.nativeElement.classList.add(this.NotActivatedClass);
        this.sections.push(section);
    }
    // Ordered by 'view points'
    getSectionsInView(viewLine) {
        const sectionMeasures = this.sections.map(s => {
            const el = s.element.nativeElement;
            const elLine = { start: el.offsetTop, length: el.clientHeight };
            return {
                section: s,
                overlap: viewLine.getOverlap(elLine),
                distance: viewLine.getDistanceFromTop(elLine.start)
            };
        });
        return sectionMeasures
            .filter(item => item.overlap > 100)
            .sort((a, b) => a.distance - b.distance || b.overlap - a.overlap)
            .map(item => item.section);
    }
    onWindowScroll() {
        if (this.scrollTimeout) {
            this._window.clearTimeout(this.scrollTimeout);
        }
        this.scrollTimeout = this._window.setTimeout(this.onWindowScrollDelay.bind(this), 100);
    }
    onWindowScrollDelay() {
        const viewLine = this.scrollService.getViewLine();
        const sectionsInView = this.getSectionsInView(viewLine);
        const sectionToActivate = sectionsInView[0];
        const activeItem = this.menuItems.filter(i => i.isActive)[0];
        const newActiveItem = this.menuItems.filter(i => i.id === sectionToActivate.id)[0];
        if (activeItem !== newActiveItem) {
            activeItem.isActive = false;
            newActiveItem.isActive = true;
        }
        sectionsInView.map(s => s.element.nativeElement.classList).forEach(cl => {
            cl.remove(this.NotActivatedClass);
        });
        this.scrollTimeout = null;
    }
};
ScrollSectionService.ctorParameters = () => [
    { type: _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Window,] }] }
];
ScrollSectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Window)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"], Window])
], ScrollSectionService);



/***/ }),

/***/ "./src/app/services/scroll.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _models_line_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/line.model */ "./src/app/models/line.model.ts");




let ScrollService = class ScrollService {
    constructor(_document, _window) {
        this._document = _document;
        this._window = _window;
    }
    getScrollTop() {
        return this._document.documentElement && this._document.documentElement.scrollTop || this._document.body.scrollTop;
    }
    getViewLine() {
        const scrollTop = this.getScrollTop();
        return new _models_line_model__WEBPACK_IMPORTED_MODULE_3__["Line"]({
            start: scrollTop,
            length: this._window.innerHeight,
        });
    }
};
ScrollService.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Window,] }] }
];
ScrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Window)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, Window])
], ScrollService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oloflandahl/home2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map