(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-by-category-products-by-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products-by-category/products-by-category.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products-by-category/products-by-category.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          المنتجات\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-ion-no-padding>\n  <div class=\"header-image\">\n    <ion-card>\n      <img [src]=\"category.image ? category.image.src : 'assets/images/brands/' + category.index + '.jpg'\" />\n    </ion-card>\n  </div>\n\n  <div class=\"spinner\">\n    <div class=\"lds-roller\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n  <div id=\"no-items-ava\">\n    <img src=\"assets/imgs/makeover.svg\">\n    <p class=\"noitem\">لا يوجد عناصر</p>\n  </div>\n\n  <div id=\"SHOW\" class=\"main-content\">\n    <mat-accordion *ngIf=\"subcategories.length > 0\">\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          المنتجات الفرعية\n        </mat-expansion-panel-header>\n        <ion-item ion-text-wrap *ngFor=\"let subcategory of subcategories\" (click)=\"openCategoryPage(subcategory)\">\n          {{ subcategory.name }}\n        </ion-item>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let product of products\" ion-text-wrap>\n          <ion-card ion-no-padding (click)=\"openProductPage(product)\">\n            <ion-chip item-right style=\"position: absolute; top: 5px; right:5px; font-size: 10px\"\n              *ngIf=\"product.on_sale && product.sale_price\">\n              <ion-label color=\"danger\" style=\"margin-right: 5px;\">\n                {{ (product.regular_price - product.sale_price) *100 / product.regular_price | number:'1.0-0'}}% OFF\n              </ion-label>\n              <ion-icon name=\"pricetag\" color=\"danger\"></ion-icon>\n            </ion-chip>\n            <div class=\"image\" [style.background-image]='getBackground(product.images[0].src)'></div>\n            <p class=\"product-name\"> {{ product.name }} </p>\n            <ion-row>\n              <ion-col>\n                <div *ngIf=\"product.on_sale && product.sale_price\" style=\"text-align: left;\">\n                  <p *ngIf=\"product.variations.length == 0\">\n                    <span style=\"text-decoration: line-through\">{{ currency_symbol }}{{ product.regular_price }}</span>\n                    <span>&nbsp;{{ currency_symbol }}{{ product.sale_price }}</span>\n                  </p>\n                  <p *ngIf=\"product.variations.length > 0\">\n                    <span [innerHTML]=\"product.price_html\"></span>\n                  </p>\n                </div>\n                <div *ngIf=\"!(product.on_sale && product.sale_price)\" style=\"text-align: left;\">\n                  <p *ngIf=\"product.variations.length == 0\">\n                    <span [innerHTML]=\"currency_symbol + ' ' +  product.price\"></span>\n                  </p>\n                  <p *ngIf=\"product.variations.length > 0\">\n                    <span [innerHTML]=\"product.price_html\"></span>\n                  </p>\n                </div>\n              </ion-col>\n              <ion-col>\n                <span *ngIf=\"product.average_rating >= 1\">\n                  <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n                </span>\n                <span *ngIf=\"product.average_rating >= 2\">\n                  <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n                </span>\n                <span *ngIf=\"product.average_rating >= 3\">\n                  <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n                </span>\n                <span *ngIf=\"product.average_rating >= 4\">\n                  <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n                </span>\n                <span *ngIf=\"product.average_rating >= 5\">\n                  <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-infinite-scroll (ionInfinite)=\"loadMoreProducts($event)\">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/products-by-category/products-by-category.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products-by-category/products-by-category.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsByCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryPageModule", function() { return ProductsByCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_by_category_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products-by-category.page */ "./src/app/products-by-category/products-by-category.page.ts");








var routes = [
    {
        path: '',
        component: _products_by_category_page__WEBPACK_IMPORTED_MODULE_7__["ProductsByCategoryPage"]
    }
];
var ProductsByCategoryPageModule = /** @class */ (function () {
    function ProductsByCategoryPageModule() {
    }
    ProductsByCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_products_by_category_page__WEBPACK_IMPORTED_MODULE_7__["ProductsByCategoryPage"]]
        })
    ], ProductsByCategoryPageModule);
    return ProductsByCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/products-by-category/products-by-category.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/products-by-category/products-by-category.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin: 0 !important;\n  width: 100% !important;\n}\n\n.image {\n  height: 30vh;\n  background-size: auto 100% !important;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.product-name {\n  text-align: left;\n  margin: 5px;\n  max-height: 40px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.header-image ion-card {\n  position: relative;\n  text-align: center;\n  height: 30vh;\n  margin: 0 !important;\n  width: 100% !important;\n}\n\n.header-image ion-card img {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n\n.header-image .card-title {\n  position: absolute;\n  top: 30%;\n  font-size: 3em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.header-image .card-subtitle {\n  font-size: 1.5em;\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  color: #fff;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvcHJvZHVjdHMtYnktY2F0ZWdvcnkvcHJvZHVjdHMtYnktY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy1ieS1jYXRlZ29yeS9wcm9kdWN0cy1ieS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRElJO0VBRUksa0JBQUE7RUFDQSxrQkFBQTtFQUdBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDSlI7O0FET0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtBQ0xSOztBRFFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNOUjs7QURTSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy1ieS1jYXRlZ29yeS9wcm9kdWN0cy1ieS1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmltYWdlIHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuXG4gICAgaW9uLWNhcmQge1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyBtYXgtaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcbiAgICAgICAgLy8gbWluLWhlaWdodDogMjUlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG5cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMy4wZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmNhcmQtc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNjAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2Uge1xuICBoZWlnaHQ6IDMwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDVweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5oZWFkZXItaW1hZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHZoO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItaW1hZ2UgaW9uLWNhcmQgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5oZWFkZXItaW1hZ2UgLmNhcmQtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBmb250LXNpemU6IDNlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXItaW1hZ2UgLmNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/products-by-category/products-by-category.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/products-by-category/products-by-category.page.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsByCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryPage", function() { return ProductsByCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_woo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/woo.service */ "./src/app/services/woo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var ProductsByCategoryPage = /** @class */ (function () {
    function ProductsByCategoryPage(woo, ngZone, dataService, toastController, _sanitizer, router) {
        var _this = this;
        this.woo = woo;
        this.ngZone = ngZone;
        this.dataService = dataService;
        this.toastController = toastController;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.products = [];
        this.subcategories = [];
        this.currency_symbol = "ع.د";
        this.dataService.currentMessage.subscribe(function (data) {
            _this.category = data;
        });
        this.page = 1;
    }
    ProductsByCategoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.woo.getAsync("products/categories?parent=" + this.category.id + "&per_page=100").then(function (data) {
            console.log(data);
            _this.ngZone.run(function () {
                _this.subcategories = JSON.parse(JSON.stringify(data));
            });
        }, function (err) {
            console.log(err);
        });
        this.woo.getAsync("products?category=" + this.category.id).then(function (data) {
            console.log(data);
            _this.ngZone.run(function () {
                _this.products = JSON.parse(JSON.stringify(data));
                console.log(_this.products);
                jquery__WEBPACK_IMPORTED_MODULE_5__('.spinner').hide();
                if (_this.products.length == 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#no-items-ava').show();
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#SHOW').hide();
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#no-items-ava').hide();
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#SHOW').show();
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProductsByCategoryPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.page++;
        console.log("Getting page " + this.page);
        this.woo.getAsync("products?category=" + this.category.id + "&page=" + this.page).then(function (data) {
            var temp = JSON.parse(JSON.stringify(data));
            _this.products = _this.products.concat(JSON.parse(JSON.stringify(data)));
            console.log(_this.products);
            event.target.complete();
            if (temp.length < 10) {
                event.target.disabled = true;
                _this.presentToast("لا توجد المزيد من المنتجات");
            }
        });
    };
    ProductsByCategoryPage.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    ProductsByCategoryPage.prototype.openProductPage = function (product) {
        this.dataService.saveData(product);
        this.router.navigate(['/product-details']);
    };
    ProductsByCategoryPage.prototype.getBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    ProductsByCategoryPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsByCategoryPage.prototype.openCategoryPage = function (category) {
        var _this = this;
        this.dataService.saveData(category);
        this.woo.getAsync("products/categories?parent=" + category.id + "&per_page=100").then(function (data) {
            _this.ngZone.run(function () {
                _this.subcategories = JSON.parse(JSON.stringify(data));
            });
        }, function (err) {
            console.log(err);
        });
        this.woo.getAsync("products?category=" + category.id).then(function (data) {
            _this.ngZone.run(function () {
                _this.products = JSON.parse(JSON.stringify(data));
                console.log(_this.products);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProductsByCategoryPage.ctorParameters = function () { return [
        { type: _services_woo_service__WEBPACK_IMPORTED_MODULE_6__["WooService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductsByCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-by-category',
            template: __webpack_require__(/*! raw-loader!./products-by-category.page.html */ "./node_modules/raw-loader/index.js!./src/app/products-by-category/products-by-category.page.html"),
            styles: [__webpack_require__(/*! ./products-by-category.page.scss */ "./src/app/products-by-category/products-by-category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_woo_service__WEBPACK_IMPORTED_MODULE_6__["WooService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductsByCategoryPage);
    return ProductsByCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-by-category-products-by-category-module-es5.js.map