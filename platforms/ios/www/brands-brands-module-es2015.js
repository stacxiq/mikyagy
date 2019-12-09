(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brands-brands-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/brands/brands.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/brands/brands.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          الماركات\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-padding>\n\n  <ion-card *ngFor=\"let brand of brands; let i = index\" (click)=\"openCategoryPage(brand[i+1], i+1)\" color=\"danger\">\n    <img [src]=\"'assets/images/brands/' + (i+1) + '.jpg'\" />\n    <ion-card-header ion-text-center color=\"white\">\n      {{ brand[i+1].name | uppercase }}\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/brands/brands.module.ts":
/*!*****************************************!*\
  !*** ./src/app/brands/brands.module.ts ***!
  \*****************************************/
/*! exports provided: BrandsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsPageModule", function() { return BrandsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _brands_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brands.page */ "./src/app/brands/brands.page.ts");







const routes = [
    {
        path: '',
        component: _brands_page__WEBPACK_IMPORTED_MODULE_6__["BrandsPage"]
    }
];
let BrandsPageModule = class BrandsPageModule {
};
BrandsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_brands_page__WEBPACK_IMPORTED_MODULE_6__["BrandsPage"]]
    })
], BrandsPageModule);



/***/ }),

/***/ "./src/app/brands/brands.page.scss":
/*!*****************************************!*\
  !*** ./src/app/brands/brands.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  position: relative;\n  text-align: center;\n  background-color: #000;\n}\nion-card img {\n  opacity: 0.95;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvYnJhbmRzL2JyYW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2JyYW5kcy9icmFuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kcy9icmFuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcblxuICAgIGltZyB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgfVxufSIsImlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5pb24tY2FyZCBpbWcge1xuICBvcGFjaXR5OiAwLjk1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/brands/brands.page.ts":
/*!***************************************!*\
  !*** ./src/app/brands/brands.page.ts ***!
  \***************************************/
/*! exports provided: BrandsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsPage", function() { return BrandsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_brands_brands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/brands/brands */ "./src/app/services/brands/brands.ts");





let BrandsPage = class BrandsPage {
    constructor(router, brandsProvider, dataService) {
        this.router = router;
        this.brandsProvider = brandsProvider;
        this.dataService = dataService;
        this.brands = [];
    }
    ngOnInit() {
        this.brands = this.brandsProvider.getBrands();
        console.log(this.brands);
    }
    back() {
        this.router.navigate(['/home']);
    }
    openCategoryPage(brand, index) {
        brand.index = index;
        this.dataService.saveData(brand);
        this.router.navigate(['products-by-category']);
    }
};
BrandsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_brands_brands__WEBPACK_IMPORTED_MODULE_4__["BrandsProvider"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
BrandsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brands',
        template: __webpack_require__(/*! raw-loader!./brands.page.html */ "./node_modules/raw-loader/index.js!./src/app/brands/brands.page.html"),
        styles: [__webpack_require__(/*! ./brands.page.scss */ "./src/app/brands/brands.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_brands_brands__WEBPACK_IMPORTED_MODULE_4__["BrandsProvider"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], BrandsPage);



/***/ }),

/***/ "./src/app/services/brands/brands.ts":
/*!*******************************************!*\
  !*** ./src/app/services/brands/brands.ts ***!
  \*******************************************/
/*! exports provided: BrandsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsProvider", function() { return BrandsProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BrandsProvider = class BrandsProvider {
    constructor() {
        this.brands = [{
                "1": {
                    "id": 2169,
                    "name": "b2",
                    "slug": "b-b2"
                }
            }, {
                "2": {
                    "id": 2168,
                    "name": "ag",
                    "slug": "b-ag"
                }
            }, {
                "3": {
                    "id": 2167,
                    "name": "Abril et nature",
                    "slug": "b-abril-et-nature"
                }
            }, {
                "4": {
                    "id": 2170,
                    "name": "beauty uk",
                    "slug": "b-beauty-uk"
                }
            }, {
                "5": {
                    "id": 2171,
                    "name": "beesline",
                    "slug": "b-beesline"
                }
            }, {
                "6": {
                    "id": 2172,
                    "name": "bella",
                    "slug": "b-bella"
                }
            }, {
                "7": {
                    "id": 2173,
                    "name": "beyu",
                    "slug": "b-beyu"
                }
            }, {
                "8": {
                    "id": 2174,
                    "name": "bourjois",
                    "slug": "b-bourjois"
                }
            }, {
                "9": {
                    "id": 2175,
                    "name": "byphasse",
                    "slug": "b-byphasse"
                }
            }, {
                "10": {
                    "id": 2176,
                    "name": "catrice",
                    "slug": "b-catrice"
                }
            }, {
                "11": {
                    "id": 2177,
                    "name": "covermark",
                    "slug": "b-covermark"
                }
            }, {
                "12": {
                    "id": 2178,
                    "name": "deborah",
                    "slug": "b-deborah"
                }
            }, {
                "13": {
                    "id": 2179,
                    "name": "essence",
                    "slug": "b-essence"
                }
            }, {
                "14": {
                    "id": 2180,
                    "name": "evolux",
                    "slug": "b-evolux"
                }
            }, {
                "15": {
                    "id": 2181,
                    "name": "flormar",
                    "slug": "b-flormar"
                }
            }, {
                "16": {
                    "id": 2182,
                    "name": "forever52",
                    "slug": "b-forever52"
                }
            }, {
                "17": {
                    "id": 2183,
                    "name": "inglot",
                    "slug": "b-inglot"
                }
            }, {
                "18": {
                    "id": 2184,
                    "name": "jewel",
                    "slug": "b-jewel"
                }
            }, {
                "19": {
                    "id": 2185,
                    "name": "lakme",
                    "slug": "b-lakme"
                }
            }, {
                "20": {
                    "id": 2186,
                    "name": "lierac",
                    "slug": "b-lierac"
                }
            }, {
                "21": {
                    "id": 2187,
                    "name": "makeupfactory",
                    "slug": "b-makeupfactory"
                }
            }, {
                "22": {
                    "id": 2188,
                    "name": "mavala",
                    "slug": "b-mavala"
                }
            }, {
                "23": {
                    "id": 2189,
                    "name": "max factor",
                    "slug": "b-max-factor"
                }
            }, {
                "24": {
                    "id": 2190,
                    "name": "moremo",
                    "slug": "b-moremo"
                }
            }, {
                "25": {
                    "id": 2191,
                    "name": "murad",
                    "slug": "b-murad"
                }
            }, {
                "26": {
                    "id": 2192,
                    "name": "note",
                    "slug": "b-note"
                }
            }, {
                "27": {
                    "id": 2193,
                    "name": "OPI",
                    "slug": "b-opi"
                }
            }, {
                "28": {
                    "id": 2194,
                    "name": "okay",
                    "slug": "b-okay"
                }
            }, {
                "29": {
                    "id": 2195,
                    "name": "palladio",
                    "slug": "b-palladio"
                }
            }, {
                "30": {
                    "id": 2196,
                    "name": "perfect",
                    "slug": "b-perfect"
                }
            }, {
                "31": {
                    "id": 2197,
                    "name": "pharmaceris",
                    "slug": "b-pharmaceris"
                }
            }, {
                "32": {
                    "id": 2198,
                    "name": "phyto",
                    "slug": "b-phyto"
                }
            }, {
                "33": {
                    "id": 2199,
                    "name": "rimmel-london",
                    "slug": "b-rimmel-london"
                }
            }, {
                "34": {
                    "id": 2200,
                    "name": "rokle",
                    "slug": "b-rokle"
                }
            }, {
                "35": {
                    "id": 2201,
                    "name": "selective professional",
                    "slug": "b-selective-professional"
                }
            }, {
                "36": {
                    "id": 2202,
                    "name": "seventeen",
                    "slug": "b-seventeen"
                }
            }, {
                "37": {
                    "id": 2203,
                    "name": "soskin",
                    "slug": "b-soskin"
                }
            }, {
                "38": {
                    "id": 2204,
                    "name": "stage",
                    "slug": "b-stage"
                }
            }, {
                "39": {
                    "id": 2205,
                    "name": "the balm",
                    "slug": "b-the-balm"
                }
            }, {
                "40": {
                    "id": 2206,
                    "name": "yucca",
                    "slug": "b-yucca"
                }
            }, {
                "41": {
                    "id": 2207,
                    "name": "koke",
                    "slug": "b-koke"
                }
            }];
    }
    getBrands() {
        return this.brands;
    }
};
BrandsProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BrandsProvider);



/***/ })

}]);
//# sourceMappingURL=brands-brands-module-es2015.js.map