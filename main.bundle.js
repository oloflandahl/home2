webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root\">\r\n  <app-back-img></app-back-img>\r\n  <app-header></app-header>\r\n  <div class=\"container cards-container\">\r\n    <app-person-card></app-person-card>\r\n    <app-resume-summary></app-resume-summary>\r\n    <app-skills-card></app-skills-card>\r\n    <app-timeline></app-timeline>\r\n    <app-interests-card></app-interests-card>\r\n    <app-page-card></app-page-card>\r\n  </div>\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 300;\n  font-style: normal;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Light/OpenSans-Light.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Light/OpenSans-Light.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Light/OpenSans-Light.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Light/OpenSans-Light.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Light/OpenSans-Light.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Light/OpenSans-Light.svg") + "#OpenSansLight) format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 300;\n  font-style: italic;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/LightItalic/OpenSans-LightItalic.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/LightItalic/OpenSans-LightItalic.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/LightItalic/OpenSans-LightItalic.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/LightItalic/OpenSans-LightItalic.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/LightItalic/OpenSans-LightItalic.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/LightItalic/OpenSans-LightItalic.svg") + "#OpenSansLightItalic) format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: normal;\n  font-style: normal;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Regular/OpenSans-Regular.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Regular/OpenSans-Regular.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Regular/OpenSans-Regular.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Regular/OpenSans-Regular.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Regular/OpenSans-Regular.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Regular/OpenSans-Regular.svg") + "#OpenSansRegular) format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: normal;\n  font-style: italic;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Italic/OpenSans-Italic.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Italic/OpenSans-Italic.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Italic/OpenSans-Italic.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Italic/OpenSans-Italic.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Italic/OpenSans-Italic.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Italic/OpenSans-Italic.svg") + "#OpenSansItalic) format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Semibold/OpenSans-Semibold.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Semibold/OpenSans-Semibold.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Semibold/OpenSans-Semibold.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Semibold/OpenSans-Semibold.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Semibold/OpenSans-Semibold.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Semibold/OpenSans-Semibold.svg") + "#OpenSansSemibold) format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 600;\n  font-style: italic;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/SemiboldItalic/OpenSans-SemiboldItalic.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/SemiboldItalic/OpenSans-SemiboldItalic.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/SemiboldItalic/OpenSans-SemiboldItalic.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/SemiboldItalic/OpenSans-SemiboldItalic.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/SemiboldItalic/OpenSans-SemiboldItalic.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/SemiboldItalic/OpenSans-SemiboldItalic.svg") + "#OpenSansSemiboldItalic) format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: bold;\n  font-style: normal;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Bold/OpenSans-Bold.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Bold/OpenSans-Bold.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Bold/OpenSans-Bold.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Bold/OpenSans-Bold.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Bold/OpenSans-Bold.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/Bold/OpenSans-Bold.svg") + "#OpenSansBold) format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: bold;\n  font-style: italic;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/BoldItalic/OpenSans-BoldItalic.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/BoldItalic/OpenSans-BoldItalic.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/BoldItalic/OpenSans-BoldItalic.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/BoldItalic/OpenSans-BoldItalic.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/BoldItalic/OpenSans-BoldItalic.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/BoldItalic/OpenSans-BoldItalic.svg") + "#OpenSansBoldItalic) format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 800;\n  font-style: normal;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBold/OpenSans-ExtraBold.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBold/OpenSans-ExtraBold.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBold/OpenSans-ExtraBold.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBold/OpenSans-ExtraBold.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBold/OpenSans-ExtraBold.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBold/OpenSans-ExtraBold.svg") + "#OpenSansExtrabold) format('svg');\n}\n@font-face {\n  font-family: 'Open Sans';\n  font-weight: 800;\n  font-style: italic;\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBoldItalic/OpenSans-ExtraBoldItalic.eot") + ");\n  src: url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBoldItalic/OpenSans-ExtraBoldItalic.eot") + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBoldItalic/OpenSans-ExtraBoldItalic.woff2") + ") format('woff2'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBoldItalic/OpenSans-ExtraBoldItalic.woff") + ") format('woff'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBoldItalic/OpenSans-ExtraBoldItalic.ttf") + ") format('truetype'), url(" + __webpack_require__("../../../../npm-font-open-sans/fonts/ExtraBoldItalic/OpenSans-ExtraBoldItalic.svg") + "#OpenSansExtraboldItalic) format('svg');\n}\n.cards-container {\n  max-width: 970px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.initLanguage(translate);
        this.initPageScroll();
    }
    AppComponent.prototype.initLanguage = function (translate) {
        var defaultLang = 'en';
        translate.addLangs([defaultLang, 'sv']);
        translate.setDefaultLang(defaultLang);
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|sv/) ? browserLang : defaultLang);
    };
    AppComponent.prototype.initPageScroll = function () {
        __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollConfig */].defaultScrollOffset = 100;
        __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollConfig */].defaultDuration = 500;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__ = __webpack_require__("../../../../../src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_scroll_section_service__ = __webpack_require__("../../../../../src/app/services/scroll-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_scroll_section_directive__ = __webpack_require__("../../../../../src/app/directives/scroll-section.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_back_img_back_img_component__ = __webpack_require__("../../../../../src/app/components/back-img/back-img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_social_links_social_links_component__ = __webpack_require__("../../../../../src/app/components/social-links/social-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cards_person_card_person_card_component__ = __webpack_require__("../../../../../src/app/components/cards/person-card/person-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_resume_summary_resume_summary_component__ = __webpack_require__("../../../../../src/app/components/resume-summary/resume-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cards_skills_card_skills_card_component__ = __webpack_require__("../../../../../src/app/components/cards/skills-card/skills-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cards_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/components/cards/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_cards_interests_card_interests_card_component__ = __webpack_require__("../../../../../src/app/components/cards/interests-card/interests-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_cards_page_card_page_card_component__ = __webpack_require__("../../../../../src/app/components/cards/page-card/page-card.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["a" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_scroll_service__["a" /* ScrollService */],
                __WEBPACK_IMPORTED_MODULE_6__services_scroll_section_service__["a" /* ScrollSectionService */],
                { provide: Window, useValue: window }
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__directives_scroll_section_directive__["a" /* ScrollSectionDirective */],
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_back_img_back_img_component__["a" /* BackImgComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_social_links_social_links_component__["a" /* SocialLinksComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_cards_person_card_person_card_component__["a" /* PersonCardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_resume_summary_resume_summary_component__["a" /* ResumeSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_cards_skills_card_skills_card_component__["a" /* SkillsCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_cards_timeline_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_cards_interests_card_interests_card_component__["a" /* InterestsCardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_cards_page_card_page_card_component__["a" /* PageCardComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/back-img/back-img.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-back-img\" [ngClass]=\"'app-back-img--'+bgNo\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/back-img/back-img.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n.app-back-img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 500px;\n  z-index: -1;\n  background-color: #000;\n}\n.app-back-img:after {\n  content: '';\n  display: block;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.5;\n}\n.app-back-img.app-back-img--1:after {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/back-img/img/bg1.jpg") + ");\n}\n.app-back-img.app-back-img--2:after {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/back-img/img/bg2.jpg") + ");\n}\n.app-back-img.app-back-img--3:after {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/back-img/img/bg3.jpg") + ");\n}\n.app-back-img.app-back-img--4:after {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/back-img/img/bg4.jpg") + ");\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/back-img/back-img.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackImgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackImgComponent = (function () {
    function BackImgComponent() {
        this.bgNo = 1;
    }
    BackImgComponent.prototype.ngOnInit = function () {
        this.bgNo = getRandomInt(1, 4);
    };
    BackImgComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-back-img',
            template: __webpack_require__("../../../../../src/app/components/back-img/back-img.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/back-img/back-img.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], BackImgComponent);
    return BackImgComponent;
}());

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//# sourceMappingURL=back-img.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/back-img/img/bg1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg1.a12c5430c4ce04b81bc1.jpg";

/***/ }),

/***/ "../../../../../src/app/components/back-img/img/bg2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg2.4fc30547941dada969e0.jpg";

/***/ }),

/***/ "../../../../../src/app/components/back-img/img/bg3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg3.c68cc547b768dfe1e5d1.jpg";

/***/ }),

/***/ "../../../../../src/app/components/back-img/img/bg4.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg4.bca46e33d75544e7b956.jpg";

/***/ }),

/***/ "../../../../../src/app/components/cards/interests-card/interests-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"interests-card-container\" appScrollSection=\"interests\">\r\n  <div class=\"interests-card__title\">{{ 'Interests_Title' | translate }}</div>\r\n  <div class=\"interests-card\">\r\n    <div class=\"interests-card__interests\">\r\n      <div class=\"interests-card__interest\" [class.interests-card__interest--active]=\"activeItem === item\" *ngFor=\"let item of interestItems; let index = index\" (click)=\"select(item, index)\">\r\n        <div class=\"interests-card__interest-icon\">\r\n          <i class=\"{{item.iconPrefix}} {{item.iconPrefix}}-{{item.iconName}}\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"interests-card__interest-description interests-card__interest-description--{{activeIndex}}\">\r\n      {{ activeItem.description | translate }}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cards/interests-card/interests-card.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.interests-card-container {\n  margin-top: 80px;\n}\n.interests-card-container .interests-card__title {\n  font-size: 34px;\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n}\n.interests-card-container .interests-card {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n  padding: 40px;\n}\n.interests-card-container .interests-card .interests-card__interests:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest {\n  float: left;\n  width: 14.28571429%;\n  padding: 15px;\n  text-align: center;\n  cursor: pointer;\n  color: #9da0a7;\n}\n@media (max-width: 768px) {\n  .interests-card-container .interests-card .interests-card__interests .interests-card__interest {\n    padding: 15px 5px;\n  }\n}\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest:hover,\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest.interests-card__interest--active {\n  color: #e86767;\n}\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest .interests-card__interest-title {\n  font-size: 13px;\n  line-height: 13px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.interests-card-container .interests-card .interests-card__interests .interests-card__interest .interests-card__interest-icon {\n  font-size: 40px;\n  line-height: 40px;\n}\n@media (max-width: 768px) {\n  .interests-card-container .interests-card .interests-card__interests .interests-card__interest .interests-card__interest-icon {\n    font-size: 22px;\n    line-height: 22px;\n  }\n}\n.interests-card-container .interests-card .interests-card__interest-description {\n  width: 100%;\n  font-size: 16px;\n  line-height: 16px;\n  color: #3d4451;\n  font-family: \"Open Sans\", \"sans-serif\";\n  line-height: 24px;\n  position: relative;\n  margin-bottom: 8px;\n  padding: 5px 10px;\n  background: #9da0a7;\n  display: inline-block;\n  color: #fff;\n  padding: 10px 20px;\n}\n.interests-card-container .interests-card .interests-card__interest-description:before {\n  content: '';\n  border-style: solid;\n  border-color: transparent;\n  border-left-color: #9da0a7;\n  display: block;\n  width: 0;\n  height: 0;\n  border-width: 0 0 8px 8px;\n  top: 100%;\n  bottom: auto;\n  border-width: 8px 0 0 8px;\n  position: absolute;\n  top: auto;\n  right: auto;\n  bottom: 100%;\n  left: 5px;\n}\n.interests-card-container .interests-card .interests-card__interest-description:before {\n  transition: left ease-out 0.2s;\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--0:before {\n  left: calc(7.14285714%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--1:before {\n  left: calc(21.42857143%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--2:before {\n  left: calc(35.71428571%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--3:before {\n  left: calc(50%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--4:before {\n  left: calc(64.28571429%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--5:before {\n  left: calc(78.57142857%);\n}\n.interests-card-container .interests-card .interests-card__interest-description.interests-card__interest-description--6:before {\n  left: calc(92.85714286%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards/interests-card/interests-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_interest_items__ = __webpack_require__("../../../../../src/app/data/interest-items.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestsCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterestsCardComponent = (function () {
    function InterestsCardComponent() {
        this.interestItems = __WEBPACK_IMPORTED_MODULE_1__data_interest_items__["a" /* INTEREST_ITEMS */];
        this.activeIndex = 0;
        this.activeItem = this.interestItems[this.activeIndex];
    }
    InterestsCardComponent.prototype.select = function (item, index) {
        this.activeItem = item;
        this.activeIndex = index;
    };
    InterestsCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-interests-card',
            template: __webpack_require__("../../../../../src/app/components/cards/interests-card/interests-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards/interests-card/interests-card.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], InterestsCardComponent);
    return InterestsCardComponent;
}());

//# sourceMappingURL=interests-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cards/page-card/page-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-card-container\" appScrollSection=\"page\">\r\n  <div class=\"page-card__title\">{{ 'AboutPage_Title' | translate }}</div>\r\n  <div class=\"page-card\">\r\n    <div class=\"page-card__description\">{{ 'AboutPage_Description' | translate }}</div>\r\n  </div>\r\n  <div class=\"page-card__icons\">\r\n    <a class=\"page-card__icon-link\" *ngFor=\"let item of brandItems;\" target=\"_blank\" [href]=\"item.url\" [title]=\"item.title\">\r\n      <div class=\"page-card__icon\" [style.background-image]=\"'url(/assets/logos/'+item.iconName+'.svg)'\"></div>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cards/page-card/page-card.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.page-card-container {\n  margin-top: 80px;\n}\n.page-card-container .page-card__title {\n  font-size: 34px;\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n}\n.page-card-container .page-card {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n  padding: 40px;\n}\n.page-card-container .page-card .page-card__description {\n  font-size: 16px;\n  line-height: 16px;\n  color: #3d4451;\n  font-family: \"Open Sans\", \"sans-serif\";\n  line-height: 24px;\n}\n.page-card-container .page-card__icons {\n  margin-top: 20px;\n  text-align: center;\n}\n.page-card-container .page-card__icons .page-card__icon-link {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  margin: 20px;\n  padding: 20px;\n  border: 1px solid #d1d1d1;\n  font-size: 13px;\n  line-height: 13px;\n  text-transform: uppercase;\n  text-decoration: none;\n  cursor: pointer;\n  transition: box-shadow ease-out 0.2s;\n}\n.page-card-container .page-card__icons .page-card__icon-link:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n}\n.page-card-container .page-card__icons .page-card__icon-link:active {\n  box-shadow: inset 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n}\n.page-card-container .page-card__icons .page-card__icon-link:hover .page-card__icon {\n  opacity: 1;\n}\n.page-card-container .page-card__icons .page-card__icon-link .page-card__icon {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  background-origin: center;\n  opacity: 0.6;\n  transition: opacity ease-out 0.2s;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards/page-card/page-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_brand_link_items__ = __webpack_require__("../../../../../src/app/data/brand-link-items.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageCardComponent = (function () {
    function PageCardComponent() {
        this.brandItems = __WEBPACK_IMPORTED_MODULE_1__data_brand_link_items__["a" /* BRAND_LINK_ITEMS */];
    }
    PageCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-page-card',
            template: __webpack_require__("../../../../../src/app/components/cards/page-card/page-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards/page-card/page-card.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PageCardComponent);
    return PageCardComponent;
}());

//# sourceMappingURL=page-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cards/person-card/me.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "me.c20c7eea99cb0834027c.jpg";

/***/ }),

/***/ "../../../../../src/app/components/cards/person-card/person-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"person-card-container\" appScrollSection=\"about\">\r\n  <div class=\"person-card\">\r\n    <div class=\"row person-card__content\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"person-card__photo hidden-xs\"></div>\r\n        <div class=\"person-card__photo person-card__photo--large visible-xs-block\"></div>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n          <div class=\"person-card__info-header\">\r\n            <div class=\"person-card__greeting\">{{ 'PersonInfo_Hello' | translate }}!</div>\r\n            <div class=\"person-card__name\">\r\n              <span class=\"light\">{{ 'PersonInfo_IAm' | translate }}</span>\r\n              <strong class=\"stronger\">Olof Landahl</strong></div>\r\n            <div class=\"person-card__title\">{{ 'PersonInfo_Developer' | translate }}</div>\r\n          </div>\r\n          <ul class=\"person-card__info-items\">\r\n            <li class=\"row person-card__info-item\" *ngFor=\"let item of infoItems;\">\r\n              <div class=\"col-sm-4 person-card__info-item-left\">{{ item.key | translate }}</div>\r\n              <div class=\"col-sm-8 person-card__info-item-right\">{{item.value}}</div>\r\n            </li>\r\n          </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"person-card__footer\">\r\n      <app-social-links [theme]=\"'color'\"></app-social-links>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cards/person-card/person-card.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.person-card-container {\n  margin-top: 80px;\n}\n.person-card-container .person-card {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n}\n.person-card-container .person-card .person-card__content {\n  padding: 40px;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header {\n  margin-bottom: 20px;\n  border-bottom: 1px solid #d8dadc;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header .person-card__greeting {\n  position: relative;\n  margin-bottom: 8px;\n  padding: 5px 10px;\n  background: #e86767;\n  display: inline-block;\n  color: #fff;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header .person-card__greeting:before {\n  content: '';\n  border-style: solid;\n  border-color: transparent;\n  border-left-color: #e86767;\n  display: block;\n  width: 0;\n  height: 0;\n  border-width: 0 0 8px 8px;\n  position: absolute;\n  top: 100%;\n  right: auto;\n  bottom: auto;\n  left: 5px;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header .person-card__name {\n  font-size: 36px;\n  line-height: 36px;\n  font-weight: 200;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.person-card-container .person-card .person-card__content .person-card__info-header .person-card__title {\n  font-size: 20px;\n  line-height: 20px;\n  margin-bottom: 40px;\n}\n.person-card-container .person-card .person-card__content .person-card__info-items .person-card__info-item {\n  padding: 5px 0;\n}\n.person-card-container .person-card .person-card__content .person-card__info-items .person-card__info-item .person-card__info-item-left {\n  padding-bottom: 5px;\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 600;\n}\n.person-card-container .person-card .person-card__content .person-card__info-items .person-card__info-item .person-card__info-item-right {\n  color: #9da0a7;\n  font-weight: 200;\n}\n.person-card-container .person-card .person-card__content .person-card__photo {\n  height: 350px;\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/person-card/me.jpg") + ");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.person-card-container .person-card .person-card__content .person-card__photo.person-card__photo--large {\n  height: 500px;\n  margin-bottom: 20px;\n  background-size: cover;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards/person-card/person-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_person_info_items__ = __webpack_require__("../../../../../src/app/data/person-info-items.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonCardComponent = (function () {
    function PersonCardComponent() {
        this.infoItems = __WEBPACK_IMPORTED_MODULE_1__data_person_info_items__["a" /* INFO_ITEMS */];
    }
    PersonCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-person-card',
            template: __webpack_require__("../../../../../src/app/components/cards/person-card/person-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards/person-card/person-card.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonCardComponent);
    return PersonCardComponent;
}());

//# sourceMappingURL=person-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cards/skills-card/skills-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-card-container\" appScrollSection=\"skills\">\r\n\t<div class=\"skills-card__title\">{{ 'Skills_Title' | translate }}</div>\r\n  \r\n\t<div class=\"skills-card\">\r\n\t  <div class=\"row skills-card__skills\">\r\n\t    <div class=\"col-md-6 skill\" *ngFor=\"let item of skillItems\">\r\n\t      <div class=\"skill__title\">{{item.key}}</div>\r\n\t      <div class=\"skill__bar-container\">\r\n\t        <div class=\"skill__bar skill__bar--full\"></div>\r\n\t        <div class=\"skill__bar skill__bar--fill\" [style.width]=\"item.value+'%'\"></div>\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cards/skills-card/skills-card.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.skills-card-container {\n  margin-top: 80px;\n}\n.skills-card-container .skills-card__title {\n  font-size: 34px;\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n}\n.skills-card-container .skills-card {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n  padding: 40px;\n}\n.skills-card-container .skills-card .skills-card__skills .skill {\n  padding: 20px;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__title {\n  margin-bottom: 10px;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__bar-container {\n  position: relative;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__bar-container .skill__bar {\n  position: absolute;\n  height: 5px;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__bar-container .skill__bar.skill__bar--full {\n  width: 100%;\n  background-color: #e86767;\n  opacity: 0.3;\n  z-index: 10;\n}\n.skills-card-container .skills-card .skills-card__skills .skill .skill__bar-container .skill__bar.skill__bar--fill {\n  z-index: 20;\n  background-color: #e86767;\n  transition: width ease-out 2s;\n}\n.skills-card-container.not-activated .skill__bar.skill__bar--fill {\n  width: 0 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards/skills-card/skills-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_skill_items__ = __webpack_require__("../../../../../src/app/data/skill-items.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsCardComponent = (function () {
    function SkillsCardComponent() {
        this.skillItems = __WEBPACK_IMPORTED_MODULE_1__data_skill_items__["a" /* SKILL_ITEMS */];
    }
    SkillsCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-skills-card',
            template: __webpack_require__("../../../../../src/app/components/cards/skills-card/skills-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards/skills-card/skills-card.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsCardComponent);
    return SkillsCardComponent;
}());

//# sourceMappingURL=skills-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/img/arrows.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/img/carmenta.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/img/hiq.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAADBCAYAAAB2QtScAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZEQkU2RTAzMTIwMTExRTJBQUNCOTlBMzY0OTdGMDE3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZEQkU2RTA0MTIwMTExRTJBQUNCOTlBMzY0OTdGMDE3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkRCRTZFMDExMjAxMTFFMkFBQ0I5OUEzNjQ5N0YwMTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkRCRTZFMDIxMjAxMTFFMkFBQ0I5OUEzNjQ5N0YwMTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4g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"

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/img/liu.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "liu.1907f965ef3c4f011856.png";

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/img/securitas.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "securitas.e37a52bfac7aac837ae4.png";

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/img/spotfire.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/img/telia.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAIsUlEQVRIS51XCXBU9Rn/7X1ld0N2k7DkDuaSREgwgkYZSjPAAAXbEbV0OCxFKh1oO1K0zFSZOhQGiVQmHUuYVigIGUzliAQCrSCgzEhVRCDkIAe5z93N7nv7jn37+r232xIUkPab2dm3ee99v+/4fb/vH41Mhv/Tutr6cOOrFnR19GKoNwjGL4ATOBhNBoxzOzGxIAUzZpfA6XLE3rht/xOwIPI4deg8ztReRuv1Nug1RphsNhj1BmgNMiIIIxKRERY5sKEQWJaHd3gEBcU52LZnPZI8STFPDwjccLkVB98+jiv/akRSogfxbgfiHGY1M2hlyHIEUliiwAQIggBeCEPgOIRCDJhgAL09w3iregPSM9IJPFH1eV/g5uutqFj/Lnz9YeQUZCI5Yxxs40ywWOOg1WoR0UQQEUWICmiIB698eBYhRsmYgc/rRdDPo6ruD1j8xGoY4nh88HG16vuewJvW7MC1c914uDQXqTmJSE5zw+lMgNFshEZD5QwL9IlQhiHKLASeExAKcgTOIuBl0Nc1iPT8ZKx9bTlWLlqHvjYvmm82oYm5pPr/FnBbSwdefroCqZnpyC1OQ3ZBNpImuClLA6iVBMZTWTUQBR4cxxJwWM2OJdBggMXI4BAFZ8AzP51H/Y5g46rNiPB6+HyDMNi1lPF7Ks4dwJIk4bc/qYAc1iEjPxO5k7PgSXVRL43R+5ShkiVPgDwngmEZtaxMgKEqSEjJGo8pZTmwmuKwp/IgLp1tgM4ogqX7N643YV/9LuQWTlR93afHMmUhQiLC8LwIgSVAGhVRkCgAuk3lttgMsLuMcLnc9HQYN6624OLJr9F0pQVanQYcsZsJsuhqv4V5S2bhFxtexLoVL2PnnooocCQioTzzBRRNmYSn5pegqGwiUlI9iIu3RGMYY7IsoaOlFz3tQxjsCmCkz4+BLi9YhqWRikCjI7JFKFiF1US0/s4BFD7xEF7b/ir2V1Vj55ZKfNZ2IQr8yoodGGjyISMnFRl5KRif5YEryQG9XiJnWug0eiqZlgIxINETT/2OBiSJEjpbB9Da2I72xj60NnRQIEHAyFOAWgwNdWPGnGlEsFXo6ezBjJy5yCvJxvFPj0DjHfbJz0z9FQqLJiEzJw0TJiYhOTUJcXYrzSixlovQWPjB+Fj4BwLwDzNUcgEJE8zIzPeggBylT/SogSjGhTh8eaEBJw6fwmNPTsWCJeXUshDKpyyAxEnIfiQNB+v2QXNod7185J2zyMrPQFq2B+4MFxISHTAZTZCoBSGWBeuPEmjUOwouoPSeBUc9j/ASEYzmVggiiypVMjMHpd8vwLiEcbEwojZ78g8pcBIXMYDyHz2FLZWboe242g+Lg6SP5lOnkJe4poyIMpsM9Y0ZJfWhMVGiFkISEY2DJIDKT4+STJodWiQ4reht7UfV7w9jb8WRKNoYO/XVYSxeNR/dvT3IK8xT/6YrK5iziafonU4HLHYzrDYzMVKZVymaWUAkYYiC8yGSQjZMzCYC0ejJRKIwtcJL5XeMN+GNfS+hfFGZ6vjTjy5h7bObMKk0C8meZEyfUQpbvBVFxYVITU+B5q1fHpBvNnQjOcWNxAku2N0WmKwmmmWZBEKZU5JBRRwoCFHRYJYGh3os0fWon4E1wYRlv1mA4scLVEDFdm09gGN7TiPOaUTnrW6s3LgYK9cuj92Nmqb2vbNybeVFeEgW3ePjSYvNMBgMpL+iqruK/oYoa46kUQzRLPtFUqEgXGl2PLdmNkrKHo65AnEggFeWbsNArw8mC6mbRO0Jc2hva8dfa3di6uPFsScJmAkG5ecnv47JpMlOtx02hwVaPSkUlVHRYZahXhNYcJQIxo2ieFoBFq74HtKzU2Iuonao6gT2//Eo4l1mWh4EKoYQlmlZkMQyfj8emZ6Hyn07Yk/HlKvuwCd4v/K0qsl2ZxxA88sJVOZQAHpafZkFyTQaJZj6ZFHstdv25cXr+NPr+8GMSDDZqQ3U+zBlqYCKtL95uh4NelFaVoy3926PvTVGMpWva583Y9THQEcKpJwgJqSTetlt6oPftKtfNKJqSzX6m4dhdzgh6HhaCmEiHPGAshUljsos0DePW7faUP2PvSh+dErs7THAD2r1fz+Pml11GOkPwmF3QFbUTdKB13AqyyWJdD1MRKQAlB4PDQxj1g/K8OauLTEPUbsDeHhwBK7EhNivqLW3dOHKZ9fwCY1H46VWEhYL9GbigZZu0qJQ3layVACVa0kFpL0ssiSZgyh8NBd7ju6OOhtjdwBv/fVO/PPIRbgyHZB4AUGWdJc2kUkfBwMpWXQ9agiAlgFdKS8qryu/I8rxh9aWSOoS4WR09Ddj6ZpnsWjJfFjMNqRnpioQ/7VvlXrZnDXovTkIe4IVMnnXaeiIQwc4vZ5OHjIpi0x9hBYa5egjKWCSGgHBQ6BMA/5RSNTvv9X9GT1dvTj+wUlsrXwj5v223bXHKxa+RGy9giR3krqdDKSlWpIz5ZxFm0MNhPJW8OhDo0diwtC4iZoQ1v3uZ/jxysVY/+KrOPp+LZq911Sf37R7kutYzYfYvGEbAiMM7PHxMBvM0FMAGlp3allJUsO0FsMkn4Wl+Vi+9jlagWWoranDhtUbMTgyhFtME6xW2nJ3sXsC/8f6uwdQ/+FpOkd3YnhghMRFi6TkBGTnZaFkejHyih5SSVW14y94Z/tuRFig29+Jc1dOYRKt2nvZfYEP7a/BmfqPsWL1UuQX5sMZ7yCBCKO3m/6D+LoRl859jjMnz6O7vRs2E42WTsLNvmacuHAM08sei3m5u31nxh/Vn8W8uQuRgERYTLS5qNd6vQ4GPbGcNF1v0lG/tRjxDoGXWVxoOIvUtDsZfDdT2HJfmzVnJjh5FHOfLqelwcNE4BaLDQaSUqXXfp8fzZ03MP/5uWgPtjwQqGLfmfFY83l9qH63Bl9cvExjE1QXyrSZpXjh58uoCvrYUw9iwL8BB+CfDKNo6DoAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/img/tunstall.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tunstall.37293b0094aa55cf4f3a.png";

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/img/vodafone.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline\" appScrollSection=\"experience\">\r\n  <div class=\"timeline__title\">{{ 'Experience_Title' | translate }}</div>\r\n  <div class=\"timeline-cards-container\">\r\n    <div class=\"timeline-card-container\" *ngFor=\"let item of timelineItems; let odd = odd; let even = even;\" [ngClass]=\"{ 'timeline-card-container--left': even, 'timeline-card-container--right': odd }\">\r\n      <span class=\"timeline__dot\"></span>\r\n      <a [href]=\"item.url\" target=\"_blank\">\r\n        <div class=\"timeline-card\">\r\n          <span class=\"timeline-card__arrow\"></span>\r\n          <div class=\"timeline-card__years\">\r\n            <span>{{item.startYear}}</span>\r\n            <span [hidden]=\"!item.endYear || item.startYear === item.endYear\">- {{item.endYear}}</span>\r\n          </div>\r\n          <div class=\"timeline-card__logo timeline-card__logo--{{item.logo}}\" ></div>\r\n          <div class=\"timeline-card__city\">{{item.city}}</div>\r\n          <div class=\"timeline-card__title\">{{item.title}}</div>\r\n          <div class=\"timeline-card__subtitle\">{{item.subTitleTranslationKey | translate}}</div>\r\n          <div class=\"timeline-card__description\">{{item.descriptionTranslationKey | translate}}</div>\r\n          <div class=\"timeline-card__technologies\">\r\n            <span class=\"timeline-card__technology\" *ngFor=\"let t of item.technologies;\" [ngClass]=\"{ 'timeline-card__technology--selected': selectedTech === t }\" (click)=\"toggleTechnology(t)\">{{t}}</span>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/timeline.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.timeline {\n  margin-top: 80px;\n}\n.timeline .timeline__title {\n  font-size: 34px;\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n  margin-bottom: 20px;\n}\n.timeline .timeline-cards-container {\n  position: relative;\n}\n.timeline .timeline-cards-container:before {\n  content: '';\n  position: absolute;\n  top: 70px;\n  right: calc( 50% -  2px );\n  bottom: 20px;\n  left: auto;\n  z-index: -1;\n  width: 5px;\n  background-color: #e86767;\n  opacity: 0.3;\n  transition: opacity ease-out 2s;\n}\n.timeline .timeline-cards-container .timeline-card-container {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  padding: 20px 0;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card {\n  position: relative;\n  min-height: 200px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n  background: #fff;\n  border-top: 5px solid #e86767;\n  transition: box-shadow ease-out 0.2s;\n  padding: 40px;\n  padding-top: 20px;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__years {\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 700;\n  color: #e86767;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 30px;\n  height: 30px;\n  background-size: cover;\n  opacity: 0.5;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  transition: all ease-out 0.5s;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--securitas {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/timeline/img/securitas.png") + ");\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--tunstall {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/timeline/img/tunstall.png") + ");\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--telia {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/timeline/img/telia.png") + ");\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--hiq {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/timeline/img/hiq.png") + ");\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--vodafone {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/timeline/img/vodafone.png") + ");\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--spotfire {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/timeline/img/spotfire.png") + ");\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--carmenta {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/timeline/img/carmenta.png") + ");\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__logo.timeline-card__logo--liu {\n  background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/timeline/img/liu.png") + ");\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__city {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-weight: 600;\n  color: #9da0a7;\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 13px;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__title {\n  margin-bottom: 10px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 22px;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__subtitle {\n  margin-bottom: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 13px;\n  color: #9da0a7;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__description {\n  margin-bottom: 20px;\n  font-size: 16px;\n  line-height: 16px;\n  color: #3d4451;\n  font-family: \"Open Sans\", \"sans-serif\";\n  line-height: 24px;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies {\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 13px;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies .timeline-card__technology {\n  float: left;\n  padding: 5px;\n  opacity: 0.5;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies .timeline-card__technology:hover {\n  opacity: 1;\n}\n.timeline .timeline-cards-container .timeline-card-container .timeline-card .timeline-card__technologies .timeline-card__technology.timeline-card__technology--selected {\n  color: #e86767;\n  opacity: 1;\n}\n.timeline .timeline-cards-container .timeline-card-container:hover .timeline-card {\n  cursor: pointer;\n}\n.timeline .timeline-cards-container .timeline-card-container:hover .timeline-card .timeline-card__logo {\n  opacity: 1;\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n}\n.timeline .timeline-cards-container .timeline-card-container:hover .timeline__dot {\n  opacity: 1;\n}\n.timeline .timeline-cards-container .timeline-card-container:hover .timeline__dot:before {\n  opacity: 1;\n}\n@media (min-width: 992px) {\n  .timeline .timeline-cards-container .timeline-card-container {\n    width: 50%;\n  }\n  .timeline .timeline-cards-container .timeline-card-container .timeline-card__arrow {\n    position: absolute;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 20px 10px;\n    background-image: url(" + __webpack_require__("../../../../../src/app/components/cards/timeline/img/arrows.png") + ");\n    background-repeat: no-repeat;\n    background-position-y: -20px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container .timeline__dot {\n    content: '';\n    position: absolute;\n    width: 11px;\n    height: 11px;\n    border-radius: 50%;\n    background-color: #e86767;\n    opacity: 0.5;\n    transition: opacity ease-out 2s;\n  }\n  .timeline .timeline-cards-container .timeline-card-container .timeline__dot:before {\n    content: '';\n    position: absolute;\n    margin: -5px;\n    width: 21px;\n    height: 21px;\n    border-radius: 50%;\n    border: 3px solid #e86767;\n    opacity: 0;\n    transition: opacity ease-out 0.5s;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--left {\n    padding-right: 30px;\n    -webkit-animation: fromLeft 600ms ease-out both;\n            animation: fromLeft 600ms ease-out both;\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--left .timeline__dot {\n    top: 70px;\n    right: -5px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--left .timeline-card__arrow {\n    top: 30px;\n    right: -20px;\n    border-left-color: #fff;\n    background-position-x: -28px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right {\n    padding-left: 30px;\n    -webkit-animation: fromRight 600ms ease-out both;\n            animation: fromRight 600ms ease-out both;\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right .timeline__dot {\n    bottom: 70px;\n    left: -6px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right .timeline-card .timeline-card__arrow {\n    bottom: 35px;\n    left: -20px;\n    border-right-color: #fff;\n    background-position-x: -2px;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right .timeline-card .timeline-card__logo {\n    right: 10px;\n    left: auto;\n  }\n  .timeline .timeline-cards-container .timeline-card-container.timeline-card-container--right .timeline-card .timeline-card__city {\n    left: 20px;\n    right: auto;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(2) {\n    -webkit-animation-delay: 200ms;\n            animation-delay: 200ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(3) {\n    -webkit-animation-delay: 180ms;\n            animation-delay: 180ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(4) {\n    -webkit-animation-delay: 400ms;\n            animation-delay: 400ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(5) {\n    -webkit-animation-delay: 380ms;\n            animation-delay: 380ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(6) {\n    -webkit-animation-delay: 600ms;\n            animation-delay: 600ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(7) {\n    -webkit-animation-delay: 580ms;\n            animation-delay: 580ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(8) {\n    -webkit-animation-delay: 800ms;\n            animation-delay: 800ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(9) {\n    -webkit-animation-delay: 780ms;\n            animation-delay: 780ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(10) {\n    -webkit-animation-delay: 1000ms;\n            animation-delay: 1000ms;\n  }\n  .timeline .timeline-cards-container .timeline-card-container:nth-child(11) {\n    -webkit-animation-delay: 980ms;\n            animation-delay: 980ms;\n  }\n}\n.timeline.not-activated .timeline-cards-container:before,\n.timeline.not-activated .timeline__dot {\n  opacity: 0 !important;\n}\n.timeline.not-activated .timeline-card-container--left {\n  -webkit-animation: none !important;\n          animation: none !important;\n}\n.timeline.not-activated .timeline-card-container--right {\n  -webkit-animation: none !important;\n          animation: none !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cards/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_timeline_items__ = __webpack_require__("../../../../../src/app/data/timeline-items.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineComponent = (function () {
    function TimelineComponent() {
        this.timelineItems = __WEBPACK_IMPORTED_MODULE_1__data_timeline_items__["a" /* TIMELINE_ITEMS */].sort(function (a, b) {
            if (a.startYear === b.startYear) {
                return b.endYear - a.endYear;
            }
            return b.startYear - a.startYear;
        });
    }
    TimelineComponent.prototype.toggleTechnology = function (t) {
        this.selectedTech = this.selectedTech === t ? null : t;
        return false;
    };
    TimelineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/components/cards/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cards/timeline/timeline.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());

//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <app-social-links></app-social-links>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.footer {\n  margin-top: 80px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\" [class.app-header--init]=\"isInit\" [class.app-header--sticky]=\"isSticky\" [class.app-header--hide-sticky]=\"stickyIsHidden\">\r\n  <div class=\"app-header__title\">oloflandahl.com</div>\r\n  <nav class=\"app-header__navbar\">\r\n    <div class=\"app-header__navbar-icon\" (click)=\"openMenu()\">\r\n      <i class=\"fa fa-bars\"></i>\r\n    </div>\r\n    <ul class=\"navbar\" [class.navbar--open]=\"isMenuOpen\">\r\n      <li class=\"navbar__item navbar__item--close-icon\" (click)=\"closeMenu()\"><i class=\"fa fa-close\"></i></li>\r\n      <li class=\"navbar__item\" [class.navbar__item--active]=\"item.isActive\" *ngFor=\"let item of items;\" pageScroll [href]=\"'#'+item.id\" (click)=\"select(item)\">\r\n        <span>{{ item.translationKey | translate }}</span>\r\n      </li>\r\n      <li class=\"navbar__item navbar__item--box\" (click)=\"switchLanguage()\">\r\n        <span title=\"{{ 'SwitchLanguage_Tooltip' | translate }}\">{{ currentLang }}</span>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n<div class=\"app-header-sticky-placeholder\" [class.app-header-sticky-placeholder--visible]=\"isSticky && !stickyIsHidden\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.app-header {\n  position: relative;\n  z-index: 100;\n  margin-top: -88px;\n  padding: 20px 20px 108px 20px;\n  transition: margin-top ease-out 1s, padding ease-out 1s, background ease-out 0.5s;\n}\n.app-header:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.app-header.app-header--init {\n  margin-top: 0;\n  padding: 20px;\n}\n.app-header .app-header__title {\n  float: left;\n  padding: 15px;\n  color: #fff;\n  text-transform: uppercase;\n  transition: color ease-out 1s;\n}\n.app-header .app-header__navbar {\n  float: right;\n}\n.app-header .app-header__navbar-icon {\n  display: none;\n  color: #fff;\n  text-transform: uppercase;\n  transition: color ease-out 1s;\n  font-size: 48px;\n  line-height: 48px;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .app-header .app-header__navbar-icon {\n    display: block;\n    float: right;\n  }\n}\n.app-header .navbar:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n@media (max-width: 768px) {\n  .app-header .navbar {\n    position: fixed;\n    top: 0;\n    right: -80%;\n    bottom: 0;\n    left: auto;\n    transition: all ease-out 0.5s;\n    background-color: #fff;\n    width: 80%;\n    box-shadow: none;\n    text-align: center;\n  }\n  .app-header .navbar.navbar--open {\n    right: 0;\n    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n  }\n}\n.app-header .navbar__item {\n  float: left;\n  padding: 15px;\n  margin-left: 20px;\n}\n@media (max-width: 768px) {\n  .app-header .navbar__item {\n    float: none;\n    margin-left: 0;\n    padding: 40px;\n  }\n}\n.app-header .navbar__item span {\n  padding: 2px 0;\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  transition: color ease-out 1s;\n}\n@media (max-width: 768px) {\n  .app-header .navbar__item span {\n    color: #3d4451;\n  }\n}\n@media (max-width: 768px) {\n  .app-header .navbar__item.navbar__item--active {\n    background-color: #efefef;\n  }\n}\n.app-header .navbar__item.navbar__item--active span {\n  border-bottom: 3px solid #e86767;\n}\n.app-header .navbar__item.navbar__item--box {\n  display: inline-block;\n  border: 1px solid #d1d1d1;\n}\n@media (max-width: 768px) {\n  .app-header .navbar__item.navbar__item--box {\n    margin-top: 40px;\n    padding: 20px;\n  }\n}\n.app-header .navbar__item.navbar__item--close-icon {\n  display: none;\n  font-size: 22px;\n  line-height: 22px;\n  padding: 20px 40px;\n  text-align: right;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .app-header .navbar__item.navbar__item--close-icon {\n    display: block;\n  }\n}\n.app-header .navbar__item:hover {\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .app-header .navbar__item:hover {\n    background-color: #efefef;\n  }\n}\n.app-header .navbar__item:hover span {\n  border-bottom: 3px solid #e86767;\n}\n.app-header.app-header--sticky {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: 0;\n  padding: 10px 20px;\n  background-color: #fff;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n}\n.app-header.app-header--sticky .app-header__title,\n.app-header.app-header--sticky .app-header__navbar-icon,\n.app-header.app-header--sticky .navbar__item span {\n  color: #3d4451;\n}\n.app-header.app-header--sticky.app-header--hide-sticky {\n  transition: all ease-out 0.5s;\n  top: -88px;\n  box-shadow: none;\n}\n.app-header-sticky-placeholder {\n  display: none;\n  height: 68px;\n}\n.app-header-sticky-placeholder.app-header-sticky-placeholder--visible {\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_scroll_service__ = __webpack_require__("../../../../../src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_scroll_section_service__ = __webpack_require__("../../../../../src/app/services/scroll-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_menu_items__ = __webpack_require__("../../../../../src/app/data/menu-items.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HeaderComponent = (function () {
    function HeaderComponent(_window, translate, scrollService, scrollSectionService) {
        this._window = _window;
        this.translate = translate;
        this.scrollService = scrollService;
        this.scrollSectionService = scrollSectionService;
        this.isInit = false;
        this.isSticky = false;
        this.stickyIsHidden = false;
        this.isMenuOpen = false;
        this.currentLang = this.translate.currentLang;
        this.items = __WEBPACK_IMPORTED_MODULE_4__data_menu_items__["a" /* MENU_ITEMS */];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var self = this;
        this._window.setTimeout(function () {
            self.isInit = true;
        }, 0);
    };
    HeaderComponent.prototype.openMenu = function () {
        this.isMenuOpen = true;
    };
    HeaderComponent.prototype.closeMenu = function () {
        this.isMenuOpen = false;
    };
    HeaderComponent.prototype.hideSticky = function () {
        this.closeMenu();
        this.stickyIsHidden = true;
    };
    HeaderComponent.prototype.select = function (item) {
        this.closeMenu();
        this.items.filter(function (i) { return i.isActive; })[0].isActive = false;
        item.isActive = true;
    };
    HeaderComponent.prototype.switchLanguage = function () {
        var allLangs = this.translate.getLangs();
        var currentIndex = allLangs.indexOf(this.currentLang);
        currentIndex = currentIndex < allLangs.length - 1 ? currentIndex + 1 : 0;
        this.currentLang = allLangs[currentIndex];
        this.translate.use(this.currentLang);
        return false;
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        var scrollTop = this.scrollService.getScrollTop();
        this.isSticky = scrollTop > 0;
        this.scrollSectionService.onWindowScroll();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.less")]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(Window)),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_scroll_service__["a" /* ScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_scroll_service__["a" /* ScrollService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_scroll_section_service__["a" /* ScrollSectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_scroll_section_service__["a" /* ScrollSectionService */]) === "function" && _c || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/resume-summary/resume-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-summary\">\r\n  <a class=\"resume-summary__link\" href=\"./assets/{{'ResumeSummary_Filename' | translate}}\" target=\"_blank\">{{'ResumeSummary_ButtonLabel' | translate}}</a>\r\n  <div class=\"resume-summary__text\">{{'ResumeSummary_Text' | translate}}</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/resume-summary/resume-summary.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.resume-summary {\n  margin-top: 80px;\n  text-align: center;\n}\n.resume-summary .resume-summary__link {\n  display: inline-block;\n  padding: 20px;\n  border: 1px solid #d1d1d1;\n  font-size: 13px;\n  line-height: 13px;\n  text-transform: uppercase;\n  text-decoration: none;\n  cursor: pointer;\n  transition: box-shadow ease-out 0.2s;\n  padding: 20px 40px;\n  font-size: 18px;\n  line-height: 18px;\n  font-weight: 600;\n  margin-bottom: 40px;\n}\n.resume-summary .resume-summary__link:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);\n}\n.resume-summary .resume-summary__link:active {\n  box-shadow: inset 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);\n}\n.resume-summary .resume-summary__text {\n  font-size: 22px;\n  line-height: 44px;\n  font-weight: 200;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/resume-summary/resume-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResumeSummaryComponent = (function () {
    function ResumeSummaryComponent() {
    }
    ResumeSummaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-resume-summary',
            template: __webpack_require__("../../../../../src/app/components/resume-summary/resume-summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/resume-summary/resume-summary.component.less")]
        })
    ], ResumeSummaryComponent);
    return ResumeSummaryComponent;
}());

//# sourceMappingURL=resume-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/social-links/social-links.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"social-links social-links--{{theme}}\">\r\n  <li *ngFor=\"let item of socialLinkItems;\" class=\"social-links__link\">\r\n    <a href=\"{{item.url}}\" [target]=\"item.openOnPage ? '_self' : '_blank'\" title=\"{{item.title}}\">\r\n      <i class=\"fa fa-{{item.iconName}}\"></i>\r\n    </a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/social-links/social-links.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Size */\n/* Colors */\n/* Text */\n/* Spacing */\n/* Z position */\n/* Transition */\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromLeft {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fromRight {\n  0% {\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.social-links {\n  padding: 20px;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .social-links {\n    padding: 20px 10px;\n  }\n}\n.social-links.social-links--color {\n  background: #e86767;\n}\n.social-links .social-links__link {\n  display: inline-block;\n  width: 42px;\n  height: 42px;\n  padding: 10px;\n  margin: 0 10px;\n  font-size: 22px;\n  line-height: 22px;\n  border-radius: 50%;\n  background: transparent;\n  transition: background ease-out 0.2s;\n}\n@media (max-width: 768px) {\n  .social-links .social-links__link {\n    margin: 0;\n  }\n}\n.social-links .social-links__link a {\n  color: #d1d1d1;\n}\n.social-links .social-links__link:hover {\n  background: rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.social-links .social-links__link:hover a {\n  color: #3d4451;\n}\n.social-links.social-links--color .social-links__link a,\n.social-links.social-links--color .social-links__link a:hover {\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/social-links/social-links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_social_link_items__ = __webpack_require__("../../../../../src/app/data/social-link-items.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialLinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialLinksComponent = (function () {
    function SocialLinksComponent() {
        this.theme = 'normal';
        this.socialLinkItems = __WEBPACK_IMPORTED_MODULE_1__data_social_link_items__["a" /* SOCIAL_LINK_ITEMS */];
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
        __metadata("design:type", Object)
    ], SocialLinksComponent.prototype, "theme", void 0);
    SocialLinksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-social-links',
            template: __webpack_require__("../../../../../src/app/components/social-links/social-links.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/social-links/social-links.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialLinksComponent);
    return SocialLinksComponent;
}());

//# sourceMappingURL=social-links.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/brand-link-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BRAND_LINK_ITEMS; });
var BRAND_LINK_ITEMS = [
    { url: 'https://angular.io/', iconName: 'angular', title: 'Angular' },
    { url: 'https://www.typescriptlang.org/', iconName: 'typescript', title: 'Typescript' },
    { url: 'https://webpack.github.io/', iconName: 'webpack', title: 'Webpack' },
    { url: 'http://lesscss.org/', iconName: 'less', title: 'Less' }
];
//# sourceMappingURL=brand-link-items.js.map

/***/ }),

/***/ "../../../../../src/app/data/interest-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INTEREST_ITEMS; });
// Can only contain 7 items
var INTEREST_ITEMS = [
    { iconPrefix: 'fa', iconName: 'music', title: 'Interest_Music', description: 'Interest_Music_Description' },
    { iconPrefix: 'fa', iconName: 'futbol-o', title: 'Interest_Football', description: 'Interest_Football_Description' },
    { iconPrefix: 'map-icon', iconName: 'trail-walking', title: 'Interest_Nature', description: 'Interest_Nature_Description' },
    { iconPrefix: 'map-icon', iconName: 'surfing', title: 'Interest_Surfing', description: 'Interest_Surfing_Description' },
    { iconPrefix: 'fa', iconName: 'camera', title: 'Interest_Photo', description: 'Interest_Photo_Description' },
    { iconPrefix: 'map-icon', iconName: 'restaurant', title: 'Interest_Food', description: 'Interest_Food_Description' },
    { iconPrefix: 'map-icon', iconName: 'bar', title: 'Interest_Beer', description: 'Interest_Beer_Description' }
];
//# sourceMappingURL=interest-items.js.map

/***/ }),

/***/ "../../../../../src/app/data/menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    { id: 'about', translationKey: 'About_Title', isActive: true },
    { id: 'skills', translationKey: 'Skills_Title', isActive: false },
    { id: 'experience', translationKey: 'Experience_Title', isActive: false },
    { id: 'interests', translationKey: 'Interests_Title', isActive: false },
    { id: 'page', translationKey: 'AboutPage_Title', isActive: false }
];
//# sourceMappingURL=menu-items.js.map

/***/ }),

/***/ "../../../../../src/app/data/person-info-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_date_service__ = __webpack_require__("../../../../../src/app/services/date.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INFO_ITEMS; });

var INFO_ITEMS = [
    { key: 'PersonInfo_Age', value: __WEBPACK_IMPORTED_MODULE_0__services_date_service__["a" /* default */].getYearsToNow(1982, 8, 3) },
    { key: 'PersonInfo_Years_Experience', value: __WEBPACK_IMPORTED_MODULE_0__services_date_service__["a" /* default */].getYearsToNow(2008, 2, 15) },
    { key: 'PersonInfo_City', value: 'Lund' },
    { key: 'PersonInfo_Employment', value: 'HiQ Skåne' },
    { key: 'PersonInfo_Email', value: 'oloflandahl@gmail.com' }
];
//# sourceMappingURL=person-info-items.js.map

/***/ }),

/***/ "../../../../../src/app/data/skill-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SKILL_ITEMS; });
var SKILL_ITEMS = [
    { key: 'JavaScript', value: 90 },
    { key: 'HTML/CSS', value: 90 },
    { key: 'AngularJS', value: 90 },
    { key: 'Angular 2', value: 40 },
    { key: 'KnockoutJS', value: 95 },
    { key: 'JQuery', value: 95 },
    { key: '.NET', value: 75 },
    { key: 'SQL', value: 50 },
];
//# sourceMappingURL=skill-items.js.map

/***/ }),

/***/ "../../../../../src/app/data/social-link-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SOCIAL_LINK_ITEMS; });
var SOCIAL_LINK_ITEMS = [
    { url: 'https://www.linkedin.com/in/olof-landahl-91782a37', iconName: 'linkedin', title: 'LinkedIn' },
    { url: 'https://github.com/oloflandahl', iconName: 'github', title: 'Github' },
    { url: 'https://plus.google.com/u/0/111518842534028383812', iconName: 'google-plus', title: 'Google+' },
    { url: 'https://securitashiq.slack.com/team/oloflandahl', iconName: 'slack', title: 'Slack' },
    { url: 'https://www.last.fm/user/oloflandahl', iconName: 'lastfm', title: 'LastFM' },
    { url: 'mailto:oloflandahl@gmail.com', iconName: 'envelope-o', title: 'Email', openOnPage: true }
];
//# sourceMappingURL=social-link-items.js.map

/***/ }),

/***/ "../../../../../src/app/data/timeline-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TIMELINE_ITEMS; });
var TIMELINE_ITEMS = [
    {
        startYear: 2016,
        endYear: 2017,
        logo: 'securitas',
        city: 'Malmö',
        title: 'HiQ - Securitas',
        subTitleTranslationKey: 'Role_WebDeveloper',
        descriptionTranslationKey: 'Experience_Securitas',
        url: 'http://www.securitas.se/',
        technologies: ['ASP.NET', 'MVC', 'KnockoutJS', 'JQuery', 'Jasmine', 'NUnit', 'SQL', 'Git', 'Kanban']
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
//# sourceMappingURL=timeline-items.js.map

/***/ }),

/***/ "../../../../../src/app/directives/scroll-section.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scroll_section_service__ = __webpack_require__("../../../../../src/app/services/scroll-section.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollSectionDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollSectionDirective = (function () {
    function ScrollSectionDirective(scrollService, renderer, element) {
        this.scrollService = scrollService;
        this.renderer = renderer;
        this.element = element;
    }
    ScrollSectionDirective.prototype.ngOnInit = function () {
        this.scrollService.registerSection({
            id: this.id,
            element: this.element
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('appScrollSection'),
        __metadata("design:type", String)
    ], ScrollSectionDirective.prototype, "id", void 0);
    ScrollSectionDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
            selector: '[appScrollSection]',
            host: {
                '[id]': 'id'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_scroll_section_service__["a" /* ScrollSectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scroll_section_service__["a" /* ScrollSectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === "function" && _c || Object])
    ], ScrollSectionDirective);
    return ScrollSectionDirective;
    var _a, _b, _c;
}());

//# sourceMappingURL=scroll-section.directive.js.map

/***/ }),

/***/ "../../../../../src/app/models/line.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });
var Line = (function () {
    function Line(line) {
        this.start = line.start;
        this.length = line.length;
    }
    Object.defineProperty(Line.prototype, "end", {
        get: function () {
            return this.start + this.length;
        },
        enumerable: true,
        configurable: true
    });
    Line.prototype.isBetween = function (x) {
        return x >= this.start && x <= this.end;
    };
    Line.prototype.isOverlapping = function (line) {
        if (this.end < line.start || this.start > line.end) {
            return false;
        }
        return true;
    };
    Line.prototype.getOverlap = function (line) {
        var otherLine = new Line(line);
        if (!this.isOverlapping(otherLine)) {
            return 0;
        }
        return Math.min(this.end, otherLine.end) - Math.max(this.start, otherLine.start);
    };
    Line.prototype.getDistanceFromTop = function (x) {
        if (!this.isBetween(x)) {
            return Number.MAX_VALUE;
        }
        return x - this.start;
    };
    return Line;
}());

//# sourceMappingURL=line.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/date.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DateServiceInstance = (function () {
    function DateServiceInstance() {
    }
    DateServiceInstance.prototype.getYearsToNow = function (year, month, day) {
        var then = new Date(year, month - 1, day);
        var now = new Date();
        var monthsDiff = now.getMonth() - then.getMonth();
        var yearsDiff = now.getFullYear() - then.getFullYear();
        if (monthsDiff <= -6) {
            yearsDiff--;
        }
        return yearsDiff;
    };
    return DateServiceInstance;
}());
/* harmony default export */ __webpack_exports__["a"] = (new DateServiceInstance());
//# sourceMappingURL=date.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/scroll-section.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__ = __webpack_require__("../../../../../src/app/services/scroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_menu_items__ = __webpack_require__("../../../../../src/app/data/menu-items.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollSectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ScrollSectionService = (function () {
    function ScrollSectionService(scrollService, _window) {
        this.scrollService = scrollService;
        this._window = _window;
        this.menuItems = __WEBPACK_IMPORTED_MODULE_2__data_menu_items__["a" /* MENU_ITEMS */];
        this.NotActivatedClass = 'not-activated';
        this.sections = [];
    }
    ScrollSectionService.prototype.registerSection = function (section) {
        section.element.nativeElement.classList.add(this.NotActivatedClass);
        this.sections.push(section);
    };
    // Ordered by 'view points'
    ScrollSectionService.prototype.getSectionsInView = function (viewLine) {
        var sectionMeasures = this.sections.map(function (s) {
            var el = s.element.nativeElement;
            var elLine = { start: el.offsetTop, length: el.clientHeight };
            return {
                section: s,
                overlap: viewLine.getOverlap(elLine),
                distance: viewLine.getDistanceFromTop(elLine.start)
            };
        });
        return sectionMeasures
            .filter(function (item) { return item.overlap > 100; })
            .sort(function (a, b) { return a.distance - b.distance || b.overlap - a.overlap; })
            .map(function (item) { return item.section; });
    };
    ScrollSectionService.prototype.onWindowScroll = function () {
        if (this.scrollTimeout) {
            this._window.clearTimeout(this.scrollTimeout);
        }
        this.scrollTimeout = this._window.setTimeout(this.onWindowScrollDelay.bind(this), 100);
    };
    ScrollSectionService.prototype.onWindowScrollDelay = function () {
        var _this = this;
        var viewLine = this.scrollService.getViewLine();
        var sectionsInView = this.getSectionsInView(viewLine);
        var sectionToActivate = sectionsInView[0];
        var activeItem = this.menuItems.filter(function (i) { return i.isActive; })[0];
        var newActiveItem = this.menuItems.filter(function (i) { return i.id === sectionToActivate.id; })[0];
        if (activeItem !== newActiveItem) {
            activeItem.isActive = false;
            newActiveItem.isActive = true;
        }
        sectionsInView.map(function (s) { return s.element.nativeElement.classList; }).forEach(function (cl) {
            cl.remove(_this.NotActivatedClass);
        });
        this.scrollTimeout = null;
    };
    ScrollSectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(Window)),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__["a" /* ScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_scroll_service__["a" /* ScrollService */]) === "function" && _a || Object, Object])
    ], ScrollSectionService);
    return ScrollSectionService;
    var _a;
}());

//# sourceMappingURL=scroll-section.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/scroll.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_line_model__ = __webpack_require__("../../../../../src/app/models/line.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ScrollService = (function () {
    function ScrollService(_document, _window) {
        this._document = _document;
        this._window = _window;
    }
    ScrollService.prototype.getScrollTop = function () {
        return this._document.documentElement && this._document.documentElement.scrollTop || this._document.body.scrollTop;
    };
    ScrollService.prototype.getViewLine = function () {
        var scrollTop = this.getScrollTop();
        return new __WEBPACK_IMPORTED_MODULE_2__models_line_model__["a" /* Line */]({
            start: scrollTop,
            length: this._window.innerHeight,
        });
    };
    ScrollService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Injectable */])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(Window)),
        __metadata("design:paramtypes", [Object, Object])
    ], ScrollService);
    return ScrollService;
}());

//# sourceMappingURL=scroll.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map