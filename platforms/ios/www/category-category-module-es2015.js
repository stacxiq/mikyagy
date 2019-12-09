(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          قائمة تصنيف\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"align-self: center\">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <ion-card text-center padding color=\"danger\" (click)=\"goToProduct('الوجه')\">\n            <img src=\"./assets/icon/face-mask.svg\" width=\"40\" height=\"45\" alt=\"\" />\n            <h2>الوجه</h2>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6>\n          <ion-card text-center padding color=\"danger\" (click)=\"goToProduct('العيون')\">\n            <img src=\"./assets/icon/eyeshadow.svg\" width=\"40\" height=\"45\" alt=\"\" />\n            <h2>العيون</h2>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-card text-center padding color=\"danger\" (click)=\"goToProduct('الشفاه')\">\n            <img src=\"./assets/icon/lipstick.svg\" width=\"40\" height=\"45\" alt=\"\" />\n            <h2>الشفاه</h2>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6>\n          <ion-card text-center padding color=\"danger\" (click)=\"goToProduct('الاظافر')\">\n            <img src=\"./assets/icon/manicure.svg\" width=\"40\" height=\"45\" alt=\"\" />\n            <h2>الاظافر</h2>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-card text-center padding color=\"danger\" (click)=\"goToProduct('العناية بالجسم')\">\n            <img src=\"./assets/icon/deodorant.svg\" width=\"40\" height=\"45\" alt=\"\" />\n            <h2>الجسم</h2>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6>\n          <ion-card text-center padding color=\"danger\" (click)=\"goToProduct('اخرى')\">\n            <img src=\"./assets/icon/cosmetics.svg\" width=\"40\" height=\"45\" alt=\"\" />\n            <h2>اخرى</h2>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/category/category.page.ts");







const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]
    }
];
let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })
], CategoryPageModule);



/***/ }),

/***/ "./src/app/category/category.page.scss":
/*!*********************************************!*\
  !*** ./src/app/category/category.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/category/category.page.ts":
/*!*******************************************!*\
  !*** ./src/app/category/category.page.ts ***!
  \*******************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CategoryPage = class CategoryPage {
    constructor(router, routerParam) {
        this.router = router;
        this.routerParam = routerParam;
        this.routerParam.params.subscribe(params => {
            this.brand = params['brand'];
        });
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/brands']);
    }
    goToProduct(type) {
        this.router.navigate(['/products-by-category', this.brand, type]);
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: __webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/index.js!./src/app/category/category.page.html"),
        styles: [__webpack_require__(/*! ./category.page.scss */ "./src/app/category/category.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map