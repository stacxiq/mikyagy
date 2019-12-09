(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sections-sections-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sections/sections.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sections/sections.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          الاقسام\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"spinner\">\n    <div class=\"lds-roller\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n  <div id=\"no-items-ava\">\n    <img src=\"assets/imgs/makeover.svg\">\n    <p class=\"noitem\">لا يوجد عناصر</p>\n  </div>\n\n  <ion-card id=\"SHOW\" *ngFor=\"let section of sectionsData\" (click)=\"openCategoryPage(section)\" color=\"danger\">\n    <img src=\"{{section.image}}\" />\n    <ion-card-header text-center color=\"white\">\n      {{ section.name | uppercase }}\n    </ion-card-header>\n  </ion-card>\n\n  <!-- <ion-list *ngIf=\"taskTemplates$\">\n    <ion-item *ngFor=\"let item of taskTemplates$ | async\">\n      {{item | json}}\n    </ion-item>\n  </ion-list> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/extra.service.ts":
/*!**********************************!*\
  !*** ./src/app/extra.service.ts ***!
  \**********************************/
/*! exports provided: ExtrasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasService", function() { return ExtrasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExtrasService = /** @class */ (function () {
    function ExtrasService() {
    }
    ExtrasService.prototype.setExtras = function (data) {
        this.extras = data;
    };
    ExtrasService.prototype.getExtras = function () {
        return this.extras;
    };
    ExtrasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExtrasService);
    return ExtrasService;
}());



/***/ }),

/***/ "./src/app/sections/sections.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsPageModule", function() { return SectionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sections_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections.page */ "./src/app/sections/sections.page.ts");







var routes = [
    {
        path: '',
        component: _sections_page__WEBPACK_IMPORTED_MODULE_6__["SectionsPage"]
    }
];
var SectionsPageModule = /** @class */ (function () {
    function SectionsPageModule() {
    }
    SectionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sections_page__WEBPACK_IMPORTED_MODULE_6__["SectionsPage"]]
        })
    ], SectionsPageModule);
    return SectionsPageModule;
}());



/***/ }),

/***/ "./src/app/sections/sections.page.scss":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/sections.page.ts":
/*!*******************************************!*\
  !*** ./src/app/sections/sections.page.ts ***!
  \*******************************************/
/*! exports provided: SectionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsPage", function() { return SectionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _extra_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extra.service */ "./src/app/extra.service.ts");







var SectionsPage = /** @class */ (function () {
    function SectionsPage(router, firebaseService, extra, angularFire) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.extra = extra;
        this.angularFire = angularFire;
    }
    SectionsPage.prototype.ngOnInit = function () {
        this.sectionsList = this.firebaseService.getRealTimeDataCol('sectionList');
    };
    SectionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.sectionsList.subscribe(function (data) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.spinner').hide();
            if (data.length == 0) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#no-items-ava').show();
                jquery__WEBPACK_IMPORTED_MODULE_4__('#SHOW').hide();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#no-items-ava').hide();
                jquery__WEBPACK_IMPORTED_MODULE_4__('#SHOW').show();
                _this.sectionsData = data.slice().reverse();
                console.log(_this.sectionsData);
            }
        });
    };
    SectionsPage.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    SectionsPage.prototype.openCategoryPage = function (section) {
        var _this = this;
        console.log(section.key);
        // this.router.navigate(['/category', brand]);
        this.taskTemplates$ = this.angularFire.list('productList');
        this.taskTemplates$.query.orderByChild('categorty').equalTo(section.name).on('value', function (snap) {
            console.log(snap.val());
            _this.extra.setExtras(snap.val());
        });
        this.router.navigate(['/products-by-category']);
        //  console.log(this.taskTemplates$);
    };
    SectionsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
        { type: _extra_service__WEBPACK_IMPORTED_MODULE_6__["ExtrasService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] }
    ]; };
    SectionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! raw-loader!./sections.page.html */ "./node_modules/raw-loader/index.js!./src/app/sections/sections.page.html"),
            styles: [__webpack_require__(/*! ./sections.page.scss */ "./src/app/sections/sections.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _extra_service__WEBPACK_IMPORTED_MODULE_6__["ExtrasService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]])
    ], SectionsPage);
    return SectionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sections-sections-module-es5.js.map