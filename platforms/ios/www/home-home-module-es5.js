(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      الصفحة الرئيسية\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"padding :8px\">\n      <ion-icon style=\"font-size: 24px !important\" name=\"cart\" (click)=\"gotoCart()\"></ion-icon>\n      <ion-badge class=\"cart-badge\">{{ cart_count }}</ion-badge>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <ion-card *ngIf=\"images.length > 0\" style=\"width: 100%;\">\n    <ion-slides [options]=\"slideOpts\" pager=\"true\">\n      <ion-slide *ngFor=\"let item of images\">\n        <img *ngIf=\"fireImages\" [src]=\"item.image\" />\n        <img *ngIf=\"!fireImages\" [src]=\"item\" />\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <ion-list style=\"margin-bottom:0;\" style=\"width: 100%;\">\n    <ion-item-divider color=\"danger\">المنتجات المميزة</ion-item-divider>\n  </ion-list>\n  <ion-grid style=\"width: 100%;\">\n    <ion-row>\n      <ion-slides [options]=\"slideOpts2\">\n        <ion-slide class=\"ion-slide\" *ngFor=\"let product of featuredProducts; let i = index\">\n          <ion-card class=\"ion-no-padding\" (click)=\"openProductPage(product)\">\n            <ion-chip item-right style=\"position: absolute; top: 5px; right:5px; font-size: 10px\"\n              *ngIf=\"product.on_sale && product.sale_price\">\n              <ion-label color=\"danger\" style=\"margin-right: 5px;\">\n                {{ (product.regular_price - product.sale_price) *100 / product.regular_price | number:'1.0-0'}}%\n                OFF</ion-label>\n              <ion-icon name=\"pricetag\" color=\"danger\"></ion-icon>\n            </ion-chip>\n            <div class=\"image\" [style.background-image]='getBackground(product.images[0].src)'></div>\n            <p class=\"product-name\"> {{ product.name }} </p>\n            <ion-row>\n              <ion-col>\n                <div *ngIf=\"product.on_sale && product.sale_price\" style=\"text-align: left;\">\n                  <p *ngIf=\"product.variations.length == 0\">\n                    <span style=\"text-decoration: line-through\">{{ currency_symbol }}{{ product.regular_price }}</span>\n                    <span>&nbsp;{{ currency_symbol }}{{ product.sale_price }}</span>\n                  </p>\n                  <p *ngIf=\"product.variations.length > 0\">\n                    <span [innerHTML]=\"product.price_html\"></span>\n                  </p>\n                </div>\n                <div *ngIf=\"!(product.on_sale && product.sale_price)\" style=\"text-align: left;\">\n                  <p *ngIf=\"product.variations.length == 0\">\n                    <span [innerHTML]=\"currency_symbol + ' ' +  product.price\"></span>\n                  </p>\n                  <p *ngIf=\"product.variations.length > 0\">\n                    <span [innerHTML]=\"product.price_html\"></span>\n                  </p>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n  </ion-grid>\n  <ion-list style=\"margin-bottom:0;\" style=\"width: 100%;\">\n    <ion-item-divider color=\"danger\">تخفيضات على المنتجات</ion-item-divider>\n  </ion-list>\n  <ion-grid style=\"width: 100%;\">\n    <ion-row>\n      <ion-slides class=\"ion-slides\" [options]=\"slideOpts2\">\n        <ion-slide class=\"ion-slide\" *ngFor=\"let product of discountProducts; let i = index\">\n          <ion-card ion-no-padding (click)=\"openProductPage(product)\">\n            <ion-chip item-right style=\"position: absolute; top: 5px; right:5px; font-size: 10px\"\n              *ngIf=\"product.on_sale && product.sale_price\">\n              <ion-label color=\"danger\" style=\"margin-right: 5px;\">\n                {{ (product.regular_price - product.sale_price) *100 / product.regular_price | number:'1.0-0'}}%\n                OFF</ion-label>\n              <ion-icon name=\"pricetag\" color=\"danger\"></ion-icon>\n            </ion-chip>\n            <div class=\"image\" [style.background-image]='getBackground(product.images[0].src)'></div>\n            <p class=\"product-name\"> {{ product.name }} </p>\n            <ion-row>\n              <ion-col>\n                <div *ngIf=\"product.on_sale && product.sale_price\" style=\"text-align: left;\">\n                  <p *ngIf=\"product.variations.length == 0\">\n                    <span style=\"text-decoration: line-through\">{{ currency_symbol }}{{ product.regular_price }}</span>\n                    <span>&nbsp;{{ currency_symbol }}{{ product.sale_price }}</span>\n                  </p>\n                  <p *ngIf=\"product.variations.length > 0\">\n                    <span [innerHTML]=\"product.price_html\"></span>\n                  </p>\n                </div>\n                <div *ngIf=\"!(product.on_sale && product.sale_price)\" style=\"text-align: left;\">\n                  <p *ngIf=\"product.variations.length == 0\">\n                    <span [innerHTML]=\"currency_symbol + ' ' +  product.price\"></span>\n                  </p>\n                  <p *ngIf=\"product.variations.length > 0\">\n                    <span [innerHTML]=\"product.price_html\"></span>\n                  </p>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n  </ion-grid>\n\n  <img style=\"margin-top: 10px; width:100%;\" src=\"./assets/imgs/banner.jpg\" />\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.image {\n  height: 30vh;\n  background-size: auto 100% !important;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.product-name {\n  text-align: left;\n  margin: 5px;\n  max-height: 40px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.cart-badge {\n  margin-left: -5px !important;\n  color: #c0101e !important;\n  background-color: #f4f5f8 !important;\n  padding: 4px 6px !important;\n  border-radius: 15px !important;\n}\n.ion-slide {\n  display: table-cell;\n}\n.ion-slides {\n  display: table;\n  width: 100%;\n}\n.pricetag {\n  white-space: nowrap;\n  position: relative;\n  margin: 0 5px 0 10px;\n  display: inline-block;\n  height: 25px;\n  border-radius: 0 5px 5px 0;\n  padding: 0 25px 0 15px;\n  background: #E8EDF0;\n  border: 0 solid #C7D2D4;\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n  color: #999;\n  line-height: 23px;\n}\n.pricetag:after {\n  position: absolute;\n  right: 0;\n  margin: 1px 7px;\n  font-weight: bold;\n  font-size: 19px;\n  content: \"×\";\n}\n.pricetag:before {\n  position: absolute;\n  content: \"●\";\n  color: white;\n  text-shadow: 0 0 1px #333;\n  font-size: 11px;\n  line-height: 0px;\n  text-indent: 12px;\n  left: -15px;\n  width: 1px;\n  height: 0px;\n  border-right: 14px solid #E8EDF0;\n  border-top: 13px solid transparent;\n  border-bottom: 13px solid transparent;\n}\nion-content,\nion-header {\n  font-family: \"Cairo\", sans-serif;\n  direction: rtl;\n}\nion-slides {\n  direction: ltr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxZQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FERUY7QUNDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FERUY7QUNDQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0FERUY7QUNDQTs7RUFFRSxnQ0FBQTtFQUNBLGNBQUE7QURFRjtBQ0NBO0VBQ0UsY0FBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5pbWFnZSB7XG4gIGhlaWdodDogMzB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogNXB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNhcnQtYmFkZ2Uge1xuICBtYXJnaW4tbGVmdDogLTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2MwMTAxZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRweCA2cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlvbi1zbGlkZXMge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcmljZXRhZyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDVweCAwIDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgcGFkZGluZzogMCAyNXB4IDAgMTVweDtcbiAgYmFja2dyb3VuZDogI0U4RURGMDtcbiAgYm9yZGVyOiAwIHNvbGlkICNDN0QyRDQ7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBjb2xvcjogIzk5OTtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5wcmljZXRhZzphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMXB4IDdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29udGVudDogXCLDl1wiO1xufVxuXG4ucHJpY2V0YWc6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIuKXj1wiO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwIDAgMXB4ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgdGV4dC1pbmRlbnQ6IDEycHg7XG4gIGxlZnQ6IC0xNXB4O1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxNHB4IHNvbGlkICNFOEVERjA7XG4gIGJvcmRlci10b3A6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jb250ZW50LFxuaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgZGlyZWN0aW9uOiBsdHI7XG59IiwiLmltYWdlIHtcbiAgaGVpZ2h0OiAzMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4ucHJvZHVjdC1uYW1lIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiA1cHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY2FydC1iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYzAxMDFlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1ZjggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNHB4IDZweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tc2xpZGUge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW9uLXNsaWRlcyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJSA7XG59XG5cbi5wcmljZXRhZyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDVweCAwIDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgcGFkZGluZzogMCAyNXB4IDAgMTVweDtcbiAgYmFja2dyb3VuZDogI0U4RURGMDtcbiAgYm9yZGVyOiAwIHNvbGlkICNDN0QyRDQ7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBjb2xvcjogIzk5OTtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5wcmljZXRhZzphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMXB4IDdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29udGVudDogXCJcXDAwRDdcIjtcbn1cblxuLnByaWNldGFnOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcXDI1Q0ZcIjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMzMzO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIHRleHQtaW5kZW50OiAxMnB4O1xuICBsZWZ0OiAtMTVweDtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1yaWdodDogMTRweCBzb2xpZCAjRThFREYwO1xuICBib3JkZXItdG9wOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5pb24tY29udGVudCxcbmlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbmlvbi1zbGlkZXMge1xuICBkaXJlY3Rpb246IGx0cjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_woo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/woo.service */ "./src/app/services/woo.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var HomePage = /** @class */ (function () {
    function HomePage(woo, data, events, storage, _sanitizer, firebaseService, router) {
        var _this = this;
        this.woo = woo;
        this.data = data;
        this.events = events;
        this.storage = storage;
        this._sanitizer = _sanitizer;
        this.firebaseService = firebaseService;
        this.router = router;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            slidesPerView: 1,
            autoplay: true
        };
        this.slideOpts2 = {
            initialSlide: 1,
            speed: 400,
            slidesPerView: 2,
            autoplay: true
        };
        this.fireImages = false;
        this.featuredProducts = [];
        this.discountProducts = [];
        this.images = [];
        this.cart_count = 0;
        this.currency_symbol = "د.ع";
        this.events.subscribe("updateCart", function () {
            _this.updateCart();
        });
    }
    HomePage.prototype.ngOnInit = function () {
        this.getSlideImages();
        this.getfeatured();
        this.getdiscount();
        this.updateCart();
    };
    HomePage.prototype.getSlideImages = function () {
        var _this = this;
        var slideList;
        slideList = this.firebaseService.getRealTimeDataCol('slideList');
        slideList.subscribe(function (data) {
            if (data.length > 0) {
                _this.fireImages = true;
                _this.images = data.slice().reverse();
            }
            else {
                _this.fireImages = false;
                _this.images.push("https://mikyiajacademy.com/wp-content/uploads/2018/01/PHYTO_-_Ambiance_17_-1170x610.jpg");
                _this.images.push("https://mikyiajacademy.com/wp-content/uploads/2018/01/marval-1.jpg");
                _this.images.push("https://mikyiajacademy.com/wp-content/uploads/2018/01/liraq-1170x583.jpg");
            }
        });
    };
    HomePage.prototype.getfeatured = function () {
        var _this = this;
        this.woo.getAsync("products?featured=true").then(function (data) {
            _this.featuredProducts = JSON.parse(JSON.stringify(data));
        });
    };
    HomePage.prototype.getdiscount = function () {
        var _this = this;
        this.woo.getAsync("products?on_sale=true").then(function (data) {
            _this.discountProducts = JSON.parse(JSON.stringify(data));
        });
    };
    HomePage.prototype.gotoCart = function () {
        this.router.navigate(['/cart']);
    };
    HomePage.prototype.openProductPage = function (product) {
        this.data.saveData(product);
        this.router.navigate(['/product-details']);
    };
    HomePage.prototype.getBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    HomePage.prototype.updateCart = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("cart").then(function (data) {
                console.log(data);
                var cartItems = data;
                if (cartItems && cartItems.length > 0) {
                    _this.cart_count = cartItems.length;
                }
                else {
                    _this.cart_count = 0;
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_woo_service__WEBPACK_IMPORTED_MODULE_6__["WooService"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_woo_service__WEBPACK_IMPORTED_MODULE_6__["WooService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map