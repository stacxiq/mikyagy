(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/about-us.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          حول\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/imgs/logo.png\" />\n  </div>\n\n  <p>\n    مكياجي هو اول تطبيق تجارة وتسويق مكياج ومواد تجميل في العراق\n    مكياجي وكيل وموزع معتمد لاكثر من 30 ماركة عالمية متخصصة في مجال التجميل والعناية بالبشرة والشعر\n    وية مكياجي انتي احلى\n  </p>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/about-us/about-us.module.ts":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/about-us/about-us.page.ts");







const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]
    }
];
let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "./src/app/about-us/about-us.page.scss":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title,\nion-content {\n  font-family: \"Cairo\", sans-serif;\n  direction: rtl;\n}\n\np {\n  font-size: 15px;\n}\n\nimg {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7O0VBRUksZ0NBQUE7RUFDQSxjQUFBO0FDQ1I7O0FERUk7RUFDSSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGlvbi10aXRsZSxcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9IiwiaW9uLXRpdGxlLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/about-us/about-us.page.ts":
/*!*******************************************!*\
  !*** ./src/app/about-us/about-us.page.ts ***!
  \*******************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AboutUsPage = class AboutUsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/home']);
    }
};
AboutUsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.page.html"),
        styles: [__webpack_require__(/*! ./about-us.page.scss */ "./src/app/about-us/about-us.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=about-us-about-us-module-es2015.js.map