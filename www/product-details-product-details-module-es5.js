(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-details/product-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          التفاصيل\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-padding>\n\n  <ion-card>\n    <ion-slides pager=\"true\" *ngIf=\"!selectedVariation\">\n      <ion-slide *ngFor=\"let image of product.images\">\n        <img class=\"image\" [src]=\"image.src\" />\n      </ion-slide>\n    </ion-slides>\n\n    <img *ngIf=\"selectedVariation && selectedVariation.image.src\" class=\"image\" [src]=\"selectedVariation.image.src\" />\n\n    <ion-card-content>\n      <ion-card-title>\n        {{ product.title || product.name }} &nbsp;\n        <ion-chip *ngFor=\"let cat of product.categories\" style=\"margin-left: 5px;\">\n          <ion-label style=\"font-size: 10px;\" color=\"danger\" [innerHTML]=\"cat.name || cat\"></ion-label>\n        </ion-chip>\n      </ion-card-title>\n\n      <div [innerHTML]=\"product.description\"></div>\n\n    </ion-card-content>\n\n\n  </ion-card>\n\n  <ion-card *ngIf=\"product.variations.length > 0\" ion-no-padding>\n    <ion-item-divider color=\"light\">خصائص المنتج</ion-item-divider>\n    <ng-container *ngFor=\"let attribute of product.attributes\">\n      <ion-card class=\"full-width-card\" *ngIf=\"colorMap[attribute.slug] && attribute.variation\" ion-padding>\n        <ion-button (click)=\"check(attribute.name, option)\"\n          [style.background-color]=\"colorMap[attribute.slug] ? colorMap[attribute.slug][option]: ''\"\n          *ngFor=\"let option of attribute.options\" shape=\"round\" fill=\"outline\" slot=\"icon-only\">\n\n          <ion-icon [name]=\"selectedOptions[attribute.name]==option ? 'checkmark': 'checkmark'\"\n            [style.color]=\"selectedOptions[attribute.name]==option ? '#D30C66': colorMap[attribute.slug][option]\">\n          </ion-icon>\n        </ion-button>\n\n      </ion-card>\n\n      <ion-item *ngIf=\"!colorMap[attribute.slug] && attribute.variation\">\n          <!-- <ion-select cancelText=\"الغاء\" okText=\"اختيار\" [(ngModel)]=\"selectedOptions[attribute.name]\"\n            (ionChange)=\"check(attribute.name)\" >\n            <ion-select-option *ngFor=\"let option of attribute.options\" [value]=\"option\" (click)=\"print(option)\" onclick=\"print(option)\"> {{ option }}\n            </ion-select-option>\n          </ion-select> -->\n        <mat-form-field>\n          <mat-label class=\"form-control\">{{attribute.name | titlecase }}</mat-label>\n          <select  class=\"form-control\" name=\"governorate\" style=\"text-align: right\"\n          [(ngModel)]=\"selectedOptions[attribute.name]\" matNativeControl required (change)=\"check(attribute.name, $event.target.value)\">\n            <option *ngFor=\"let option of attribute.options\" [value]=\"option\" (select)=\"print(option)\" onclick=\"print(option)\">{{option}}</option>\n          </select>\n        </mat-form-field>\n      </ion-item>\n    </ng-container>\n  </ion-card>\n\n  <ion-card *ngIf=\"product.attributes.length > 0 && hasSpecs\">\n    <ion-item-divider color=\"light\">المواصفات</ion-item-divider>\n    <ion-card-content>\n      <ion-grid>\n        <ng-container *ngFor=\"let att of product.attributes\">\n          <!--For Products opened from any page other than cart-->\n          <ion-row *ngIf=\"!att.variation && att.options\">\n            <ion-col size=\"4\">\n              {{ att.name | titlecase}}\n            </ion-col>\n            <ion-col size=\"8\">\n              <span *ngFor=\"let option of att.options\"> {{ option | titlecase}}</span>\n            </ion-col>\n          </ion-row>\n          <!--For Variable products opened from Orders Page-->\n          <ion-row *ngIf=\"!att.variation && att.option\">\n            <ion-col size=\"4\">\n              {{ att.name | titlecase}}\n            </ion-col>\n            <ion-col size=\"8\">\n              <span> {{ att.option | titlecase}}</span>\n            </ion-col>\n          </ion-row>\n        </ng-container>\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"reviews.length > 0\">\n    <ion-item-divider color=\"light\">مراجعات المنتج</ion-item-divider>\n    <ion-card-content>\n\n      <ion-grid>\n        <ion-row *ngFor=\"let review of reviews\">\n          <ion-col size=\"4\">\n            <b>{{ review.reviewer_name }}</b><br />\n            <span *ngIf=\"review.rating >= 1\">\n              <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"review.rating >= 2\">\n              <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"review.rating >= 3\">\n              <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"review.rating >= 4\">\n              <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"review.rating >= 5\">\n              <ion-icon style=\"color: #d4af37\" small name=\"star\"></ion-icon>\n            </span>\n\n          </ion-col>\n          <ion-col size=\"8\">\n            {{ review.review }}\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button icon-left expand=\"block\" fill=\"outline\" [disabled]=\"productPrice == 0\" color=\"danger\" (click)=\"addToCart(product)\">\n      <ion-icon name=\"basket\"></ion-icon>\n      {{  productPrice !=0 ? ' اضافة الى السلة ' + currency_symbol + ' ' + productPrice : '    يرجى تحديد الخصائص   ' }}\n    </ion-button>\n    <ion-button icon-left expand=\"block\" color=\"danger\" (click)=\"openCart()\">\n      <ion-icon name=\"basket\"></ion-icon>\n      الذهاب للسلة\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/product-details/product-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/product-details/product-details.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]
    }
];
var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-card {\n  width: 100%;\n  margin: 0px;\n}\n\n.item-radio {\n  display: inline-block;\n  width: 50px;\n  border-radius: 50%;\n  margin: 10px;\n  padding-left: 0;\n}\n\n.image {\n  height: 40vh;\n  background-size: auto 100% !important;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\nmat-label {\n  font-family: \"Cairo\", sans-serif;\n  text-align: left !important;\n}\n\nmat-form-field[_ngcontent-qrm-c3] {\n  direction: rtl;\n  text-align: right;\n}\n\n.mat-form-field {\n  text-align: right !important;\n}\n\nmat-form-field {\n  width: 95%;\n  direction: rtl;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURDQTtFQUNJLGdDQUFBO0VBQ0EsMkJBQUE7QUNFSjs7QURBQztFQUNHLGNBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksNEJBQUE7QUNJSjs7QURGQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5pdGVtLXJhZGlvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5pbWFnZSB7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxubWF0LWxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFxufVxuIG1hdC1mb3JtLWZpZWxkW19uZ2NvbnRlbnQtcXJtLWMzXSB7XG4gICAgZGlyZWN0aW9uOiBydGw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH0iLCIuZnVsbC13aWR0aC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaXRlbS1yYWRpbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5pbWFnZSB7XG4gIGhlaWdodDogNDB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxubWF0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5tYXQtZm9ybS1maWVsZFtfbmdjb250ZW50LXFybS1jM10ge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDk1JTtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product-details/product-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-details/product-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_colors_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/colors/colors */ "./src/app/services/colors/colors.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_woo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/woo.service */ "./src/app/services/woo.service.ts");









var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(router, dataService, storage, toastCtrl, modalCtrl, nav, woo, events, loadingCtrl, colorsProvider, _sanitizer) {
        var _this = this;
        this.router = router;
        this.dataService = dataService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.woo = woo;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.colorsProvider = colorsProvider;
        this._sanitizer = _sanitizer;
        this.options = [];
        this.reviews = [];
        this.att = [];
        this.selectedOptions = {};
        this.productPrice = 0.0;
        this.productVariations = [];
        this.requireOptions = true;
        this.hasSpecs = false;
        this.counter = 0;
        this.colorMap = {};
        this.colorMap = this.colorsProvider.getColorsMap();
        this.currency_symbol = "ع.د";
        var product;
        this.dataService.currentMessage.subscribe(function (data) {
            product = data;
        });
        // console.log(product.attributes[0]);
        if (product.attributes[0]) {
            for (var i in product.attributes[0].options) {
                // console.log(product.attributes[0].options[i]);
                this.options.push(product.attributes[0].options[i]);
            }
        }
        // console.log(this.options);
        product.attributes.forEach(function (attribute, i_index) {
            if (attribute.variation == false) {
                _this.hasSpecs = true;
            }
            attribute.options.forEach(function (option, j_index) {
                product.attributes[i_index].options[j_index] = option.toLowerCase().replace(' ', '-').replace(' ', '-').replace('!', '');
            });
        });
        this.product = product;
        // console.log(this.product);
        if (this.product != undefined) {
            this.woo.getAsync('products/' + this.product.id + '/variations?per_page=100').then(function (data) {
                _this.productVariations = JSON.parse(JSON.stringify(data));
                // console.log(this.productVariations)
                for (var i in _this.productVariations) {
                    // console.log(this.productVariations[i].attributes[0].option);
                }
            });
        }
        //counting variation attributes options
        var count_ = 0;
        for (var index = 0; index < this.product.attributes.length; index++) {
            if (this.product.attributes[index].variation != undefined) {
                count_++;
                // console.log(this.product.attributes[index].variation);
            }
        }
        if (count_ == 0) {
            this.requireOptions = false;
        }
        if (this.product.variations.length == 0) {
            this.productPrice = this.product.price;
        }
    }
    ProductDetailsPage.prototype.addToCart = function (product) {
        var _this = this;
        //counting selected attribute options
        var count = 0;
        for (var k in this.selectedOptions)
            if (this.selectedOptions.hasOwnProperty(k))
                count++;
        //counting variation attributes options
        var count_ = 0;
        for (var index = 0; index < this.product.attributes.length; index++) {
            if (this.product.attributes[index].variation != undefined)
                count_++;
        }
        //checking if user selected all the variation options or not
        if (count_ != count || this.requireOptions) {
            this.presentToast("يرجى اختيار خصائص المنتج");
            return;
        }
        this.storage.get("cart").then(function (data) {
            if (data == undefined || data.length == 0) {
                data = [];
                data.push({
                    "product": product,
                    "qty": 1,
                    "amount": parseFloat(product.price)
                });
                if (_this.selectedVariation) {
                    data[0].variation = _this.selectedVariation;
                    data[0].amount = parseFloat(_this.selectedVariation.price);
                    _this.productPrice = _this.selectedVariation.price;
                }
            }
            else {
                // console.log(data);
                var alreadyAdded = false;
                var alreadyAddedIndex = -1;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].product.id == product.id) { //Product ID matched
                        if (_this.productVariations.length > 0 && data[i].variation != undefined) { //Now match variation ID also if it exists
                            if (data[i].variation.id == _this.selectedVariation.id) {
                                alreadyAdded = true;
                                alreadyAddedIndex = i;
                                break;
                            }
                        }
                        else { //product is simple product so variation does not  matter
                            alreadyAdded = true;
                            alreadyAddedIndex = i;
                            break;
                        }
                    }
                }
                if (alreadyAdded == true) {
                    if (_this.selectedVariation) {
                        data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
                        data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(_this.selectedVariation.price);
                        data[alreadyAddedIndex].variation = _this.selectedVariation;
                    }
                    else {
                        data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
                        data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(data[alreadyAddedIndex].product.price);
                    }
                }
                else {
                    if (_this.selectedVariation) {
                        data.push({
                            product: product,
                            qty: 1,
                            amount: parseFloat(_this.selectedVariation.price),
                            variation: _this.selectedVariation
                        });
                    }
                    else {
                        data.push({
                            product: product,
                            qty: 1,
                            amount: parseFloat(product.price)
                        });
                    }
                }
            }
            _this.storage.set("cart", data).then(function () {
                // console.log("Cart Updated");
                // console.log(data);
                _this.events.publish("updateCart");
                _this.presentToast("تم تحديث السلة");
            });
        });
    };
    ProductDetailsPage.prototype.openCart = function () {
        this.router.navigate(['/cart']);
    };
    ProductDetailsPage.prototype.check = function (justSelectedAttribute, option) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var count, k, count_, index, i, matchFailed, key, j;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log(justSelectedAttribute, option)
                console.log(option);
                if (option) {
                    this.selectedOptions[justSelectedAttribute] = option;
                }
                if (option) {
                    this.print(option);
                }
                count = 0;
                for (k in this.selectedOptions)
                    if (this.selectedOptions.hasOwnProperty(k))
                        count++;
                count_ = 0;
                for (index = 0; index < this.product.attributes.length; index++) {
                    if (this.product.attributes[index].variation)
                        count_++;
                }
                //checking if user selected all the variation options or not
                if (count_ != count) {
                    this.requireOptions = true;
                    return [2 /*return*/];
                }
                else {
                    this.requireOptions = false;
                    //Get product variations only once when all product variables are selected by the user
                }
                i = 0, matchFailed = true;
                if (this.productVariations.length > 0) {
                    for (i = 0; i < this.productVariations.length; i++) {
                        matchFailed = false;
                        key = "";
                        for (j = 0; j < this.productVariations[i].attributes.length; j++) {
                            key = this.productVariations[i].attributes[j].name;
                            //temporary fix
                            if (key.indexOf(' ') > -1) {
                                key = decodeURIComponent(encodeURIComponent(key).replace("%20", "-"));
                            }
                            // console.log(key, this.selectedOptions)
                            ////
                            // console.log(this.selectedOptions[key].toLowerCase() + " " + this.productVariations[i].attributes[j].option.toLowerCase())
                            if (this.selectedOptions[key] != undefined && this.selectedOptions[key].toLowerCase() == this.productVariations[i].attributes[j].option.toLowerCase()) {
                                //Do nothing
                            }
                            else {
                                // console.log(matchFailed)
                                matchFailed = true;
                                break;
                            }
                        }
                        //console.log(matchFailed)
                        if (matchFailed) {
                            continue;
                            this.productPrice = this.productVariations[i].price;
                            this.selectedVariation = this.productVariations[i];
                            // console.log(this.selectedVariation)
                        }
                        else {
                            //found the matching variation
                            //console.log(productVariations[i])
                            this.productPrice = this.productVariations[i].price;
                            this.selectedVariation = this.productVariations[i];
                            // console.log(this.selectedVariation)
                            break;
                        }
                    }
                    // if (matchFailed == false) {
                    //   this.presentToast("لم يتم ايجاد المنتج").then(() => {
                    //     this.requireOptions = true;
                    //   });
                    // }
                }
                else {
                    this.productPrice = this.product.price;
                }
                return [2 /*return*/];
            });
        });
    };
    ProductDetailsPage.prototype.getBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    ProductDetailsPage.prototype.back = function () {
        this.nav.pop();
    };
    ProductDetailsPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 3000
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
    // print(option){
    //   console.log('hh');
    //   console.log(option);
    // }
    ProductDetailsPage.prototype.print = function (option) {
        console.log(option);
        console.log('option' + option.toString().replace(/-/gi, ' '));
        console.log(this.productVariations);
        for (var i in this.productVariations) {
            console.log(this.productVariations[i].attributes[0].option.toLowerCase());
            if (option.toString().includes('-') && this.productVariations[i].attributes[0].option.toLowerCase() == option.toString().replace(/-/gi, ' ')) {
                console.log('i found it');
                this.productPrice = this.productVariations[i].price;
                this.selectedVariation = this.productVariations[i];
            }
            else {
                console.log('i found it');
                this.productPrice = this.productVariations[i].price;
            }
        }
        for (var i in this.options) {
            if (option == this.options[i]) {
            }
        }
    };
    ProductDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_woo_service__WEBPACK_IMPORTED_MODULE_8__["WooService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _services_colors_colors__WEBPACK_IMPORTED_MODULE_4__["ColorsProvider"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.page.html"),
            styles: [__webpack_require__(/*! ./product-details.page.scss */ "./src/app/product-details/product-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_woo_service__WEBPACK_IMPORTED_MODULE_8__["WooService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_colors_colors__WEBPACK_IMPORTED_MODULE_4__["ColorsProvider"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());



/***/ }),

/***/ "./src/app/services/colors/colors.ts":
/*!*******************************************!*\
  !*** ./src/app/services/colors/colors.ts ***!
  \*******************************************/
/*! exports provided: ColorsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsProvider", function() { return ColorsProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorsProvider = /** @class */ (function () {
    function ColorsProvider() {
        console.log('Hello ColorsProvider Provider');
    }
    ColorsProvider.prototype.getColorsMap = function () {
        return {
            "bb-color": {
                "01": "#fdd5cb",
                "02": "#ffb8a9",
                "03": "#ff9074"
            },
            "لون-bb": {
                "01": "#fdd5cb",
                "02": "#ffb8a9",
                "03": "#ff9074"
            },
            "اللون": {
                "pink-albaster": "#d2b9a3",
                "pink": "#d3aa96",
                "beige-nude": "#c6a691",
                "vanilla": "#b9937e",
                "warm-ivory": "#b08b71",
                "hazelnut": "#9b7664",
                "cinnamon": "#7c584c",
                "dark-brown": "#5f4842",
                "yellow-albaster": "#d8c1a2",
                "marble": "#cbad91",
                "soft-sand": "#c3a488",
                "soft-beige": "#c49b85",
                "sand": "#ba9179",
                "flesh": "#ba9379",
                "golden-honey": "#b88966",
                "almond": "#aa8068",
                "amber": "#a27a60",
                "praline": "#8f6955",
                "cognac": "#866055",
                "01-beige": "#f6cba8",
                "02-natrul-beige": "#f7cbb2",
                "03-medium-beige": "#e8bb92",
                "04-sand": "#c48a65",
                "05-honey-beige": "#d7a67d",
                "06-dark-beige": "#d19f7a",
                "07-apricol": "#d5a077",
                "08-sunny": "#d2976f",
                "06-dark-honey": "#cd8e6d",
                "ivory": "#b6987f",
                "medium-sand": "#e7d4bb",
                "golden-sand": "#d5ac90",
                "308-beige-clasic": "#e0bc9c",
                "313-beige-clasic": "#e3bca2",
                "314-beige-clasic": "#dfbda4",
                "315-brown-clasic": "#ae7c59",
                "316-brown-clasic": "#95624c",
                "317-brown-clasic": "#794734",
                "318-brown-clasic": "#684132",
                "319-brown-clasic": "#4f2d1d",
                "nude-ivore": "#c89671",
                "nude-beige": "#d98859",
                "rose": "#f4b090",
                "warm-beige": "#eca06f",
                "soft-honey": "#956439",
                "caramel": "#9d6234",
                "natural": "#c8aa9f",
                "warm-sand": "#cea99b",
                "fawn": "#e2caa5",
                "biscuit": "#d5b791",
                "1": "#be9279",
                "2": "#bb9a7b",
                "0": "#d1b9a2",
                "00": "	#E0C1A0",
                "3": "#aa997f",
                "1d": "#be9382",
                "2d": "#bb997d",
                "01": "#ffe1c7",
                "02mav": "#f0ceb4",
                "05mav": "#cd9470",
                "06mav": "#cc9571",
                "03mav": "#cb8669",
                "04mav": "#9c7361",
                "11mav": "#fbceb1",
                "09mav": "#f9cbb3",
                "warem-almound": "#dfa38b",
                "creamy-ivory": "#d8a58c",
                "035": "#ebb89b",
                "040": "#dfb390",
                "045": "#e4ae8f",
                "bronze": "#b88b6e",
                "sand-0": "#ba917b",
                "golden-0": "#cb9f82",
                "toffee0": "#cc9877",
                "natural-0": "#d0a68d",
                "porcelain-0": "#d5ad94",
                "ivory-0": "#d7ad94",
                "deeb-beige": "#b78a69",
                "soft-beige-0": "#c79a7d",
                "pastelle": "#c89e85",
                "fair-0": "#d4b098",
                "blushing-begie": "#cda48e",
                "pearl-begie": "#dba88b",
                "cool-copper": "#dfb48a",
                "nouvia-beige": "#ebc6a9",
                "clear": "#ffffff",
                "100": "#d1b295",
                "203": "#e6a481",
                "300": "#efab86",
                "081-fair-ivory": "#fed8ab",
                "091light-ivory": "#fed6bd",
                "100ivory": "#e7c3ad",
                "103true-ivory": "#edb294",
                "203true-beige": "#eaa77c",
                "300sand": "#e79b69",
                "01ivory": "#f9c4a5",
                "02vanille": "#edb38e",
                "03beige-clair": "#ecac7e",
                "04beige": "#e1a478",
                "05beige-dore": "#db9c70",
                "06hali-clair": "#c48f6f",
                "015-sand-beige": "#ffc482",
                "010-soft-ivory": "#f0d5a6",
                "025-light-beige": "#fbcdab",
                "030-natural-beige": "#F4A57C",
                "005-ivory-beige": "#f3d2bf",
                "010-nude-beige": "#eec8b5",
                "015-vanilla-beige": "#f5c2a3",
                "025-warm-beige": "#e2b095",
                "027-amber-beige": "#e1b59a",
                "010-light-beige": "#d9bfae",
                "020-nude-beige": "#CFA38A",
                "10-light-beige": "#ebc4a7",
                "020-rose-beige": "#f1c6a6",
                "030-sand-beige": "#fcd298",
                "040-warm-beige": "#e7b787",
                "010-sleeping-beautys-rose": "#eec5d3",
                "020-ready-for-champagne": "#ebc6ac",
                "04-bright-ivory": "#ab896e",
                "12-honey-beige": "#a97856",
                "20-natural-beige": "#986f4f",
                "28-soft-almond": "#926f59",
                "5-soft-porcelain": "#eec5a9",
                "7-silky-sand": "#e9ba9e",
                "8-natural-peach": "#e4b79a",
                "1-soft-hazelnut": "#cfa17f",
                "10-arizona-tan": "#dbc6b3",
                "14-maple-cream": "#d6c3b4",
                "15-rose-ivory": "#e1b9a0",
                "18-blanched-almond": "#cab69e",
                "018-blanched-almond": "#cab69e",
                "2-light-sand": "#d6a074",
                "9-peach-silk": "#cca480",
                "10-honey-chiffon": "#d5bba4",
                "15-golden-honey": "#cab5a0",
                "30-light-toffee": "#bf9d84",
                "20-0natural-beige": "#dabfaa",
                "16-porcelain-creme": "#b98967",
                "17-bright-sand": "#d7a88a",
                "18-honey-chiffon": "#dab8ab",
                "58-sepia-glow": "#c2a595",
                "71-sun-desert": "#bea18f",
                "85-sunset-shine": "#a4877f",
                "07sand": "#d7bca5",
                "15natural": "#baa690",
                "21light-caramel": "#b59889",
                "28caramel": "#c5ab9f",
                "1rosy-ivory": "#f2cbaf",
                "3beige-sand": "#d1ac87",
                "8sand": "#e2c6a4",
                "15caramel": "#b39b6f",
                "21natural": "#c8a585",
                "28rosy-beige": "#d2b296",
                "34rosy-porcelain": "#d3b89b",
                "50chocolate-brown": "#8e5a3a",
                "5light-beige": "#ca9e81",
                "10sand": "#cd9c84",
                "14rosy-beige": "#b78971",
                "18caramel": "#b68568",
                "10rosy-beige": "#d8af99",
                "15-natural": "#d1a993",
                "20honey-beige": "#ddb391",
                "30caramel": "#c0a58f",
                "d01": "#dba080",
                "d02": "#e2996f",
                "n-0": "#f2d0ad",
                "n-00": "#E3BFA5",
                "n-1": "#d7a280",
                "n-2": "#d9a782",
                "n001": "#e0b6a8",
                "n002": "#f3cdb6",
                "n003": "#ddad87",
                "light-medium": "#e0b98e",
                "medium": "#dbaf80",
                "mid-medium": "#d79f75",
                "fpf001": "#f9d6b0",
                "fpf002": "#f9cdaa",
                "fpf003": "#f6d1b7",
                "a001": "#efcdb1",
                "a002": "#fae9d7",
                "a003": "#f7e6d5",
                "t353": "#876247",
                "t354": "#7a5d4f",
                "ss001": "#fcdaad",
                "ss002": "#e9bc9b",
                "ss003": "#d8a787",
                "fcf003": "#f8d6b0",
                "fcf004": "#f9c89b",
                "cc04": "#ebcbbc",
                "cc03": "#f7e3e5",
                "cc02": "#becbaf",
                "cc01": "#cec2da",
                "v207": "#edbf9d",
                "v208": "#e2ac7e",
                "v209": "#ebb287",
                "v213": "#eba583",
                "001": "#cba68c",
                "002": "#b89084",
                "003": "#c39c8b",
                "004": "#e59f6c",
                "01r": "#d1b08d",
                "02r": "#cda88b",
                "03r": "#b18e68",
                "04r": "#b19064",
                "05r": "#ae845a",
                "06r": "#a8825d",
                "r01": "#b4926c",
                "r02": "#b38865",
                "r03": "#a77b58",
                "r05": "#936646",
                "r06": "#754923",
                "001r": "#d7bab1",
                "002r": "#e59f85",
                "02": "#e3a590",
                "03": "#ca8c62",
                "04": "#b1764d",
                "05": "#905c4a",
                "06": "#774c31",
                "02rr": "#ca957e",
                "01br": "#977762",
                "02br": "#766150",
                "03br": "#73675b",
                "rr08": "#78513c",
                "rr07": "#8b5e3d",
                "rr06a": "#be794f",
                "rr05": "#85471a",
                "rr04": "#9f653d",
                "rr03": "#c07f5b",
                "rr02": "#b9835d",
                "rr01": "#b26f4d",
                "rr00": "#d8a173",
                "rr000": "#c4967c",
                "rr0000": "#dfb487",
                "01pr": "#d1decd",
                "03pr": "#e8e1cd",
                "02pr": "#dfd0d3",
                "01fr": "#d6bba0",
                "02fr": "#d9a492",
                "03fr": "#ca9e7d",
                "04fr": "#b78a76",
                "05fr": "#ba6d48",
                "06fr": "#854d34"
            },
            "لون-البلشر": {
                "01-pink-biach": "#ffb9a0",
                "02-pink-in-summer": "#fc937d",
                "03-coral": "#f07f57",
                "04-soft-peach": "#fcaa84",
                "05-desert-rose": "#fda37e",
                "06-sandy-pink": "#fca59c",
                "07-star-copper": "#c8654e",
                "08-bronze-show": "#d2805a",
                "red-herring": "#fe6266",
                "spoiler-alert": "#f88e7e",
                "coming-soon": "#da5765",
                "love-scene": "#fba3c9",
                "pink-puff": "#da8b7c",
                "bronze-beige": "#b8825c",
                "brickdust": "#bc715e",
                "hippiefest": "#bc4156",
                "grow-love": "#cd5175",
                "choc-au-lait": "#b57564",
                "blushin": "#e07a7e",
                "rosey": "#e2b0a7",
                "wish": "#d6989a",
                "berry": "#c99c97",
                "dainty": "#f0918d",
                "darling": "#d78a82",
                "lovely": "#fcb5af",
                "precious": "#fbbfc1",
                "goddess": "#9f7c66",
                "halo": "#b68d82",
                "f282a0": "#f282a0",
                "rose-rouge": "#f47580",
                "capital-pink": "#cd5771",
                "dawn-glow": "#b3666c",
                "isla-rose": "#d1758c",
                "rustic-peach": "#b1553c",
                "upper-east-side": "#af766a",
                "peachy-cream": "#f8b191",
                "pink-pavlova": "#ecaebd",
                "raspberry-ripple": "#dd7592",
                "strawberry-jelly": "#e69080",
                "turkish-delight": "#e99e99",
                "vanilla-ice": "#d4ae88",
                "010": "#dfa57f",
                "015": "#de7482",
                "030": "#fb9394",
                "0030": "#fb9394",
                "005": "#ffb8c0",
                "020": "#ffcccb",
                "0025": "#fdb292",
                "soft-murano": "#a1565b",
                "soft-copper": "#a8665a",
                "soft-candy": "#ae4240",
                "soft-pink": "#cf6772",
                "20-coral-brown": "#a16a55",
                "36-burned-cinnamon": "#b2705b",
                "39-powdery-rose": "#a95f54",
                "48-salmon-pink": "#c98883",
                "79-rose-petal": "#bb7279",
                "12-brilliant-bronze": "#ac7477",
                "25-orange-touch": "#c38d7a",
                "10-satin-coral": "#f09b96",
                "20-satin-love": "#d1898a",
                "15light-shiraz": "#aa7c7f",
                "sandy-brown25": "#bd7464",
                "coral-blush27": "#b67e7f",
                "30golden-tan": "#b18268",
                "17pink-salmon": "#c6897e",
                "23smokey-rosewood": "#a86c64",
                "35light-coffee": "#9b715c",
                "n-4": "#d48564",
                "n-5": "#d36f60",
                "n-6": "#d98376",
                "n-8": "#f198b4",
                "n-10": "#b4646d",
                "n-11": "#e2748f",
                "n-12": "#e77f72",
                "n-13": "#de6459",
                "n14": "#d85c55",
                "n-15": "#c26254",
                "n-16": "#d45f84",
                "n-46": "#e19188",
                "n-52": "#dd835e",
                "n-58": "#d5725f",
                "n-60": "#c06562",
                "n-61": "#d46456",
                "n-62": "#df5f44",
                "berry-pink": "#f4adbf",
                "bayberry": "#d47887",
                "peach-ice": "#f2ad9e",
                "toasted-apricot": "#f48a6d",
                "chic": "#e78c7a",
                "tipsy": "#f4595d",
                "poised": "#dd8077",
                "velvetine": "#bb5462",
                "137": "#ecb9c8",
                "136": "#b46a7a",
                "135": "#9c795e",
                "29": "#dc8a6f",
                "128": "#e68f87",
                "127": "#d37d6e",
                "125": "#ef7165",
                "123": "#ad6657",
                "121": "#bc5b6e",
                "119": "#c06b54",
                "117": "#d98c88",
                "116": "#c08f92",
                "113": "#b46f69",
                "112": "#bf7a6b",
                "111": "#c26e7c",
                "109": "#b07b6a",
                "102": "#a86446",
                "1r": "#bf6a54",
                "2r": "#bd6d4c",
                "3r": "#d17a5f",
                "4r": "#a86e49",
                "5r": "#ac6c46",
                "6r": "#c17390",
                "7r": "#dd90aa"
            },
            "لون-الشدو": {
                "01": "#f2d3bf",
                "02": "#f3c8a5",
                "03": "#e5b2ae",
                "04": "#b8999e",
                "05": "#425983",
                "06": "#d19b81",
                "07": "#794c39",
                "08": "#a6737c",
                "09": "#734255",
                "10": "#6e7c68",
                "11": "#45393b",
                "12": "#e1baa9",
                "13": "#cdccd1",
                "14": "#af878f",
                "15": "#8f8586",
                "16": "#c39683",
                "17": "#f2d3bf",
                "18": "#b3907a",
                "blue-classic": "#92bfeb",
                "soft-beige": "#ecdad1",
                "chocolate-brown": "#74513d",
                "green-classic": "#b8ca96",
                "steel-grey": "#716e69",
                "carbon-black": "#292927",
                "satin-in-white": "#ebe7e4",
                "bright-yellow": "#f8e878",
                "orange-gold": "#ea8d4c",
                "orange-crush": "#fc5b2f",
                "real-fuchsia": "#fd46a2",
                "bright-green": "#7ab154",
                "pearly-green": "#629b70",
                "indigo-blue": "#1760b7",
                "red-violet": "#815db5",
                "parallax": "#60514e",
                "solstice": "#fdcd9d",
                "nebula": "#674e6b",
                "lightyear": "#f2a071",
                "zenon": "#a19855",
                "stellar": "#9a6b57",
                "zodiac": "#9bacb3",
                "meteor": "#af6248",
                "blue-moon": "#345d8b",
                "stardust_large": "#dea793",
                "supernova": "#80514b",
                "eclipse": "#bb7946",
                "white": "#ffffff",
                "espresso": "#7a563d",
                "iced-coffee": "#7a563d",
                "moon-stone": "#d6c4b8",
                "in-the-buff": "#f7e5d7",
                "eclipse2": "#4e4e50",
                "010": "#283032",
                "107": "#6c4e44",
                "35": "#896b51",
                "55": "#89443f",
                "015": "#93588e",
                "45": "#27709b",
                "50": "#a79f3a",
                "60": "#afb6af",
                "30": "#a1c4ae",
                "25": "#ce9e88",
                "101": "#edd7c0",
                "65": "#ffffff",
                "010-turn-the-high-lights-on": "#efeff1",
                "020-rosefeller-center": "#ecd3d7",
                "030-1001-golden-nights": "#e6ccbb",
                "12m": "#e7e3d7",
                "40m": "#e0cca0",
                "2black-coffee": "#363533",
                "10walnut-brown": "#725d52",
                "12sweet-orange": "#ea8439",
                "16caramel-toffee": "#885c4c",
                "28light-cinnamon": "#b99d89",
                "35natural-skin": "#e8dbc8",
                "45dark-olive": "#897961",
                "48khaki-green": "#7a6248",
                "55cobalt-blue": "#3f65ab",
                "56just-purple": "#884392",
                "59rich-red": "#9c4558",
                "63smokey-aubergine": "#4e3435",
                "d1": "#e9eaec",
                "d5": "#2f0513",
                "d7": "#473239",
                "d14": "#161616",
                "d16": "#214d74",
                "d17": "#81a9d3",
                "d80": "#3b3b3b",
                "d81": "#1b2a25",
                "d82": "#da8e6a",
                "d83": "#43253d",
                "fdp001": "#f0f2f7",
                "eae9f1": "#eae9f1",
                "fdp002": "#EAE9F1",
                "fdp006": "#c2bcb0",
                "fdp007": "#dcd8d4",
                "fdp027": "#f3ab5a",
                "r16": "#710616",
                "r15": "#be6577",
                "r14": "#ff71c7",
                "r13": "#6e0224",
                "r12": "#f9014d",
                "r11": "#fe0002",
                "r10": "#ff5e28",
                "r9": "#9d1c79",
                "r8": "#e486bb",
                "r7": "#eeb7bc",
                "r6": "#ce012a",
                "r5": "#d87172",
                "r4": "#ff75cb",
                "r3": "#eca591",
                "r2": "#bb329c",
                "r1": "#ffa6aa",
                "12r": "#958d81",
                "11r": "#ac8e6a",
                "08r": "#927778",
                "05r": "#976454",
                "03r": "#997c6a",
                "01r": "#6a4f48",
                "s10": "#c9735c",
                "s9": "#326f83",
                "s8": "#be8b76",
                "s7": "#7d513f",
                "s6": "#59709a",
                "s5": "#837a73",
                "s4": "#c4c2c3",
                "s3": "#e5b8a7",
                "s2": "#ba8469",
                "s1": "#d2cbb9"
            },
            "لون-الكحل": {
                "black": "#000000",
                "cafe": "#653d22",
                "green-apple": "#334b3c",
                "marine": "#314656",
                "navy": "#3849af",
                "mocha": "#5a392e",
                "iceberg": "#b8b8b8",
                "deep-forest": "#29362d",
                "espresso": "#482f28",
                "ultra-marine": "#151e2f",
                "deep-blue": "#333c64",
                "green": "#1F3135",
                "cooper": "#764537",
                "sky-blue": "#088aac",
                "10": "#cb8a0e",
                "18": "#927b37",
                "19": "#844c1b",
                "17": "#7a838c",
                "09": "#433d93",
                "01": "#1d1d1b",
                "08": "#149f9d",
                "03": "#164b8a",
                "04": "#626c47",
                "14": "#5a50a6",
                "06": "#555459",
                "02": "#502310",
                "07": "#4a0d27",
                "16": "#0091b1",
                "11": "#024f78",
                "010black": "#000000",
                "020-absolute-greyziness": "#636363",
                "030-stella-mcbrowny": "#6b4e53",
                "040-the-sky-is-the-limit": "#ffffff",
                "050-copper-kiss": "#BDADB0",
                "060-dutchess-of-champagnebridge": "#e4dbd6",
                "070-green-smothie": "#007890",
                "080-up-in-the-air": "#00336c",
                "250-copper-cat": "#fdc4b8",
                "010-ultra-black": "#000000",
                "040-white": "#ffffff",
                "070-take-the-greyhound": "#60606a",
                "140-chocwaves": "#664b42",
                "220-grey-z": "#87a2bf",
                "230-living-in-browntown-manhattan": "#5e504d",
                "240-my-dream-of-caribbean": "#63b1bd",
                "81-alomost-perfect": "#547e8a",
                "67-make-my-day": "#213a8c",
                "67-0make-my-day": "#213a8c",
                "52-midnight-blue": "#1e2446",
                "38-denim": "#0a2d43",
                "29-silver-linings": "#b9c0c2",
                "25-rock-star": "#383c3d",
                "231-ocean-wave": "#76b4c1",
                "220-pool-party": "#559c9d",
                "204-beach-day": "#30878a",
                "20-black-beauty": "#000000",
                "198-ivy-clad": "#1b381c",
                "185-spring-meadow": "#69775e",
                "177-go-wild": "#738c6b",
                "153-perfectly-wonderful": "#88807e",
                "139-caffeine-buzz": "#694a45",
                "124-double-espresso": "#281d17",
                "106-provence": "#3a1943",
                "10-casual": "#f8f1d7",
                "01-blacklove": "#29282e",
                "02-but-first-espress": "#715c61",
                "03-black-midnight-sky": "#7c8187",
                "06-silky-nude": "#f1c3b3",
                "25-feel-the-mari-time": "#06999f",
                "08-teddy": "#452920",
                "n01": "#040404",
                "n02": "#f4f4f4",
                "n120": "#003251",
                "n121": "#4f3864",
                "n124": "#017b5e",
                "n125": "#084e8a",
                "n129": "#543a21",
                "f1201": "#5d4a50",
                "f1202": "#946660",
                "f1203": "#7a798b",
                "f1204": "#724f3c",
                "f1205": "#6a6e53",
                "f1206": "#c7c6b3",
                "f1207": "#e1bfbd",
                "f1208": "#b09381",
                "f501": "#211f20",
                "f502": "#513f29",
                "f503": "#c1c2c4",
                "f504": "#1a9ad2",
                "f505": "#c2b044",
                "f506": "#3d847e",
                "f507": "#90bed7",
                "f508": "#4e4f7f",
                "f509": "#17b165",
                "f510": "#108da0",
                "f511": "#4d563b",
                "f512": "#ffffff",
                "f513": "#242223",
                "f514": "#166268",
                "f515": "#2d5d6b",
                "f516": "#947c59",
                "f517": "#1b61a0",
                "f518": "#68b496",
                "f519": "#e2c7b6",
                "f520": "#e4d7c7",
                "f521": "#18aae3",
                "f524": "#f5cb21",
                "f527": "#157cb1",
                "f528": "#17949d",
                "f530": "#ecc5a6",
                "f531": "#d3d6c5",
                "f522": "#90b570",
                "f525": "#0d676b",
                "f526": "#99604f",
                "f529": "#735d3e"
            },
            "لون-قلم-تحديد": {
                "01-sandy": "#bc766a",
                "02-rose": "#b15d53",
                "03-nude": "#a55e64",
                "04-fuchsia": "#b84167",
                "05-cherry": "#712833",
                "06-note-red": "#ca2e31",
                "08mav": "#e9acb4",
                "05mav": "#ba0d62",
                "03mav": "#be665f",
                "10mav": "#c76066",
                "06mav": "#ad5258",
                "07mav": "#9c221f",
                "02mav": "#95421b",
                "09mav": "#8c0e40",
                "020-hey-macadamia-ahey": "#8e716b",
                "070-i-got-you-babe": "#e98a92",
                "080-thats-what-rose-wood-do": "#dd9ca2",
                "100-upper-brown-side": "#cf8885",
                "130-prince-cherry": "#ac1a31",
                "150-vintage-rose": "#b97e78",
                "170-plumplona-ole": "#9c233f",
                "180-all-time-mauvie-star": "#9d6169",
                "1-naturally-naughty": "#a16d57",
                "2-mauve-mmmwaah": "#c27c72",
                "3-nearly-naked": "#c18472",
                "4-peachy-kiss": "#f57c73",
                "5-pink-motherpucke": "#ea4b48",
                "6-purple-pleaser": "#b63458",
                "7-raspberry-smooch": "#cb1734",
                "8-code-red": "#a3071f",
                "9-plum-pout": "#400404",
                "01-ready-for-red": "#e6282a",
                "02-sweetheart": "#f66089",
                "03-yummy-berry": "#ba2665",
                "05-lovely-frappuccino": "#cf7b61",
                "06-a-girls-dream": "#af1730",
                "07-plum-cake": "#954852",
                "08-girl-next-door": "#d48570",
                "10-berry-on-my-mind": "#742041",
                "11-be-a-game-changer": "#4f1725",
                "07antique-pink": "#b17a73",
                "09rosy-mauve": "#946970",
                "12perfect-rosewood": "#935d5e",
                "28warm-tangerine": "#9f5243",
                "34soft-maroon": "#bb5664",
                "39bright-red": "#9b1d29",
                "44creamy-cranberry": "#6e211a",
                "56berry-explosion": "#83444d",
                "n01": "#d07d79",
                "n02": "#bb7b58",
                "n03": "#8e4b3a",
                "n05": "#cf4459",
                "n06": "#b66d81",
                "n07": "#c55c2f",
                "n08": "#c72c30",
                "n09": "#ae2525",
                "n10": "#872c35",
                "n11": "#852540",
                "n12": "#6f2735",
                "l277": "#854539",
                "l278": "#8b4031",
                "l280": "#6a2b33",
                "l282": "#8f373b",
                "l288": "#905a4a",
                "l289": "#905a4a",
                "l292": "#7d3328",
                "l294": "#7a333b",
                "l295": "#a06452",
                "l297": "#9c4e42",
                "l302": "#702639",
                "l303": "#884952",
                "l304": "#e27179",
                "l305": "#ee383c",
                "l306": "#c3222c",
                "f1602": "#b47969",
                "f1603": "#b42a43",
                "f1604": "#5f283f",
                "f1605": "#cc5769",
                "f1606": "#9c635a",
                "f1607": "#c51c47",
                "f1608": "#c75471",
                "f1609": "#d6316b",
                "f1610": "#3e2924",
                "f1611": "#84454e",
                "f1612": "#84454E",
                "f1613": "#9f5c5c",
                "f1614": "#a86a65",
                "f1615": "#9d5f78",
                "f1616": "#894950",
                "f1617": "#885b50",
                "01r": "#904e37",
                "02r": "#9f5e4c",
                "03r": "#8a4644",
                "04r": "#7a4040",
                "05r": "#80363d",
                "06r": "#ce685a",
                "09r": "#b74a4d",
                "10r": "#b21935",
                "11r": "#8c2a37",
                "12r": "#7a211b",
                "15r": "#ab7f6d",
                "16r": "#672b33",
                "17r": "#84442b",
                "18r": "#87253f",
                "19r": "#e82442"
            },
            "لون-قلم-الحاجب": {
                "black": "#000000",
                "brown": "#4c3831",
                "light-brown": "#926455",
                "taupe": "#7a6552",
                "mediam": "#83634b",
                "ash-brown": "#4a3725",
                "black-brown": "#291608",
                "gray": "#303030",
                "auburn": "#694034",
                "04": "#9e7c5c",
                "05": "#8b594c",
                "03": "#76584d",
                "06": "#5a2c1e",
                "01": "#25201a",
                "ebony": "#3d3c41",
                "hazel": "#67463f",
                "bloned": "#ab806d",
                "dark-brown": "#462f27",
                "mediam03": "#9e7c5c",
                "us04": "#76584d",
                "073": "#5c4a3e",
                "033": "#3d1200",
                "083": "#382b25",
                "043": "#665032",
                "020-date-with-ash-ton": "#ad8876",
                "030-brow-n-eyed-peas": "#6e5046",
                "040-dont-let-me-brown": "#695c53",
                "10f": "#6d4e4b",
                "20f": "#73674d",
                "020-flashy-brows": "#7e5947",
                "030-chocolate-brownie": "#512c1a",
                "040-browdly-presents": "#885a4a",
                "010-light": "#806659",
                "020-medium": "#a47f6d",
                "030-dark": "#847264",
                "2-dark-sandalo": "#4a3730",
                "2-0dark-sandalo": "#4a3730",
                "4-mongose-brown": "#615048",
                "5-earthy-brown": "#877865",
                "6-napa-brown": "#80664f",
                "3-secret-wood": "#4f3f38",
                "5-subtle-taupe": "#604e44",
                "7-ash-grey": "#856552",
                "01-black": "#151515",
                "02-brown": "#301c12",
                "05-soft-blonde": "#8c6d6a",
                "2turkish-coffee": "#936c4f",
                "sahara-brown5": "#523e35",
                "2coffee-bean": "#5d4c45",
                "mocca-brown": "#6c6050",
                "deep-amber6": "#7c674b",
                "n281": "#787563",
                "n282": "#362b25",
                "n286": "#36312b",
                "l02": "#6a4437",
                "l03": "#7b4e51",
                "l04": "#937c69",
                "l05": "#a18a82",
                "l01": "#040000",
                "fep003": "#c1a693",
                "fep004": "#b59586",
                "f121": "#7c5a47",
                "f122": "#664848",
                "f1405": "#442f24",
                "f1401": "#442f24",
                "f1402": "#53382f",
                "f1403": "#b28d74",
                "f1404": "#907363",
                "f-1405": "#b79e94",
                "01r": "#0e0e0e",
                "02r": "#875b52",
                "03r": "#414141",
                "04r": "#412f2f",
                "001r": "#9c7a66",
                "002r": "#835745",
                "003r": "#44321f",
                "004r": "#68524d",
                "006r": "#1d1c24"
            },
            "لون-الغلوس": {
                "vanilla-suede": "#e8bca3",
                "barely-nude": "#ffbebf",
                "truffle-nude": "#edae8f",
                "crystal-baby": "#fdad8a",
                "coral-vanilla": "#f65f68",
                "juicy-peach": "#ff9c75",
                "topaz-orange": "#fd7247",
                "noble-pink": "#ef6db5",
                "rose-petal": "#fb5663",
                "charmed": "#ff57a2",
                "baby-soft": "#f593ba",
                "electric-pink": "#fa6d75",
                "fiesta": "#fe6b7d",
                "lilac-champagne": "#bc4694",
                "party-girl": "#d14f6e",
                "sophisticate": "#9c1b1f",
                "caramel": "#a96f6b",
                "glossy-bronze": "#9d7470",
                "berry-pink": "#e46276",
                "impatient": "#71101b",
                "vivacious": "#e54434",
                "delicious": "#c3211c",
                "russian-red": "#7e000c",
                "silhouette": "#db1431",
                "dream": "#ff4337",
                "pure-glow": "#d18f79",
                "love-baby": "#f499bc",
                "matnude": "#bc736c",
                "matkiss": "#B75F5E",
                "sugar-kiss": "#a75c61",
                "jolly": "#a2232a",
                "first-kiss": "#e10d1c",
                "sweet-heart": "#ba094d",
                "notisme": "#7b0014",
                "femme-fatale": "#690507",
                "020-stay-apri-cosy": "#ff6a64",
                "010": "#f0c5ce",
                "030-pink-up-the-volume": "#e06287",
                "040-nuts-about-mary": "#b1555a",
                "030-hazel-rose-royce": "#9b4f5b",
                "040-plumming-bird": "#9d2143",
                "050-brooklyn-pink-ster": "#b52556",
                "060-redvolution": "#94272c",
                "1-coffee-cake": "#d9a598",
                "10-plum-have-a-go": "#8d344a",
                "2-pink-twice": "#efa7a8",
                "3-peach-for-the-sky": "#f69f95",
                "4-i-like-to-mauve-it-mauve-it": "#d69a9a",
                "5-tickle-me-pink": "#f56e7c",
                "6-atomic-pink": "#f7597d",
                "7-pucker-up-pink": "#d689ad",
                "8-candy-coral": "#ef5641",
                "9-heart-breaker": "#c02d35",
                "01-behind-the-scenes": "#f6f7f9",
                "02-smile-sparkle-shine": "#f5aac8",
                "03-friends-of-glamour": "#c14c73",
                "04-flirt-alert": "#eb497b",
                "07-happiness-in-a-bottle": "#d58e92",
                "12-runway-your-way": "#721f55",
                "10soft-violett": "#c67993",
                "15berry-mix": "#ad7e84",
                "29rosewood": "#b18577",
                "57peach-rose": "#ca9887",
                "65coral": "#bb806d",
                "slc-001": "#c87587",
                "slc-002": "#f39ec5",
                "slc-003": "#f4627f",
                "slc-004": "#c87e7f",
                "slc-012": "#cb634f",
                "slc-016": "#de6cac",
                "slc-017": "#dd7b8a",
                "slc-024": "#d06079",
                "slc-025": "#eca9ba",
                "slc-026": "#f39ec5",
                "slc-027": "#db9fc5",
                "slc-031": "#cc93b3",
                "slc-035": "#f9bccb",
                "slc-036": "#de6584",
                "slc-037": "#e682a8",
                "slc-038": "#ed657c",
                "slc-039": "#c28d87",
                "slc-043": "#804da0",
                "slc-044": "#462960",
                "slc-047": "#e78699",
                "slc-051": "#ac8589",
                "01r": "#d4ced9",
                "02r": "#c28283",
                "05r": "#ae605f",
                "06r": "#a1615c",
                "07r": "#cf93b5",
                "09r": "#d568c5",
                "10r": "#ecdeed",
                "12r": "#d58176",
                "13r": "#cd7488",
                "14r": "#cd7488",
                "15r": "#cf6a6b"
            },
            "لون-الحمرة": {
                "spirit": "#d3604d",
                "mirage": "#c64d3a",
                "miss-kiss": "#b75852",
                "spring": "#771723",
                "show": "#532831",
                "kiss-blossom": "#e10821",
                "dark-wine": "#5b1519",
                "brand": "#371219",
                "creamy-nude": "#dd927f",
                "lingerie-pink": "#de8c92",
                "milk-chocolate": "#b75a48",
                "juicy-nectar": "#d35a47",
                "satin-silk": "#f1697d",
                "candy-nude": "#d65859",
                "hot-cocoa": "#a33d26",
                "brownie-pink": "#c84d52",
                "bronzed-pink": "#b54834",
                "italian-rose": "#f06e76",
                "cranberry": "#f1002d",
                "sun-petal": "#bc4034",
                "rapture": "#b73c50",
                "pink-marble": "#e93552",
                "deep-orchide": "#aa385c",
                "pink-topaz": "#d22251",
                "kiss-me": "#c20322",
                "top-orange": "#b0040b",
                "ginger-flower": "#E40228",
                "merlot": "#b4041b",
                "vintage-sun": "#fc1235",
                "shiny-rising": "#310003",
                "black-violet": "#572639",
                "pink-nude": "#963b32",
                "dark-burgundy": "#592321",
                "spectacular-red": "#470c0e",
                "saturated-fuchsia": "#ba165f",
                "satin-red-pearly": "#82181c",
                "soft-pink": "#a82f48",
                "chic-aubergine": "#350c1a",
                "madam-pink": "#8f2b37",
                "perfect-red": "#6c1a19",
                "breathtaking-apricot-pearly": "#cc3d35",
                "glam-cherry": "#350b0f",
                "pastel-beige": "#9f4e33",
                "saturated-beige": "#7f322d",
                "hot-red-pearly": "#88111b",
                "pink-lady": "#c84f85",
                "purple-pearlescent": "#75395b",
                "creamy-pink": "#b82f6a",
                "expressive-fuchsia": "#ce0f64",
                "enchanting-coral-red": "#b71a2e",
                "dark-fuchsia-pearly": "#8d0239",
                "purple-dusk-pearly": "#9b1c71",
                "pink-pearlescent": "#913648",
                "quite-cute-pearly": "#81151d",
                "lilac-gloss": "#825b7a",
                "extraordinary-purple": "#612042",
                "pinkish-crimson": "#b31540",
                "purple-crimson-pearly": "#7b0821",
                "vacation-in-rome-pearly": "#7f3641",
                "red-burgundy": "#5a141f",
                "bordeaux": "#8c2c37",
                "carmen-dress": "#930710",
                "chic-violet": "#23040a",
                "chocolate-fondue": "#2a0e08",
                "daylight": "#f1506b",
                "deep-bordeaux": "#210406",
                "desire": "#460102",
                "haute-burgundy": "#2c0103",
                "magenta": "#48151c",
                "pale-pink": "#9c404f",
                "red-carpet": "#6e0005",
                "skin-tone": "#9c453c",
                "soap-opera": "#c1435a",
                "sweet-blush": "#7d0e21",
                "terracotta-rose": "#711a2a",
                "urban-rose": "#8b323b",
                "warm-nude": "#ab3e3c",
                "195mav": "#f3927f",
                "231mav": "#e94812",
                "102mav": "#e73d2e",
                "123mav": "#e6226e",
                "175mav": "#e45243",
                "176mav": "#cc7361",
                "177mav": "#c61b24",
                "130mav": "#c7241d",
                "122mav": "#a03d40",
                "36": "#6e252e",
                "180-everybody-is-an-aubergenius": "#8d3450",
                "010-good-nudes": "#ecd3d7",
                "020-lets-go-brown-town": "#a8594c",
                "120-wood-rose-propose": "#b66f7e",
                "130-brigitte-loves-bordeaux": "#962e49",
                "140-meet-violeta": "#b688b9",
                "010-bare-nudes-soul": "#b95055",
                "020-best-rosebuddies-forever": "#cd546d",
                "030-barberry-hopping": "#b0495a",
                "040-hibiskiss-proof": "#b52556",
                "050-fashion-reditorial": "#b0272f",
                "060-merl-oh": "#8e2b47",
                "070-first-brown-ticket": "#813a34",
                "490-plum-base": "#a0355f",
                "500-temptation-in-red": "#b23c3a",
                "maroon-020": "#b0675e",
                "140-pinker-bell": "#e95089",
                "240-hey-nude": "#daabb5",
                "310-red-my-lips": "#ac1a31",
                "340-berry-bradshaw": "#71273e",
                "370-in-a-rosegarden": "#dd5f75",
                "380-nude-tastic": "#bf8881",
                "430-hot-n-spicy": "#e23c30",
                "450-legendberry": "#7b2532",
                "460-cool-brown": "#b05856",
                "470-my-little-peony": "#af4a5a",
                "480-red-said-black": "#572d2e",
                "08-red-lobster": "#ae3520",
                "19-scarlet-red": "#a81f33",
                "25-berry-affair": "#652e31",
                "48-magic-magenta": "#ae2836",
                "56-red-vibrations": "#a61d53",
                "85-rose-romance": "#af4243",
                "92-smooth-marsala": "#972d44",
                "418-manhattan-chic": "#a11333",
                "416-bloody-mary": "#970d2e",
                "410-dusty-rose": "#93414c",
                "408-rosy-nude": "#803e42",
                "405-peach-daiquiri": "#945452",
                "279-cosy-mauve": "#7e3c4a",
                "270-cheeky-pink": "#89234b",
                "266-orchid-dream": "#93374e",
                "04-goldnroses": "#97545b",
                "06-perfect-illusion": "#80425b",
                "10-nostalgia": "#a84e58",
                "16-cosmo-wonder": "#927673",
                "112-midnight-sign": "#724544",
                "136-ruby-rebel": "#553230",
                "167-plum-secret": "#883f5d",
                "200-flirty-pink": "#b9445e",
                "209-rebellious-pink": "#e30e59",
                "218-pink-hibiscus": "#e44e50",
                "223-aloha-coral": "#e33638",
                "238-rose-affair": "#a44b51",
                "250-innocent-lips": "#a14e56",
                "272-rose-nude": "#b0555a",
                "304-cream-nude": "#ae7269",
                "311-hula-babe": "#d18a78",
                "330-hot-coffee": "#9c534d",
                "55-on-fire": "#d33628",
                "80-scarlet-lips": "#af0c1f",
                "94-pure-red": "#9a2337",
                "1-bond-mrs-bond": "#a51e24",
                "2-radical-red": "#d62541",
                "3-curious-coral": "#e64a4e",
                "4-shake-your-plum": "#be5073",
                "5-wham-bam-thank-you-jam": "#de427f",
                "6-nudge-nudge-pink-pink": "#f36f96",
                "7-mauve-your-body": "#d88096",
                "8-thatll-peach-you": "#f7928a",
                "9-get-your-nude-on": "#e0bbb1",
                "10-powder-pink-pout": "#f5ced3",
                "01-natural-kiss": "#d46a79",
                "02-perfect-match": "#ad5554",
                "04-pink-up-your-life": "#c00951",
                "05-red-y-or-not": "#d81d36",
                "06-kiss-me-if-you-can": "#b53439",
                "07-purple-power": "#742847",
                "08-its-a-statement": "#854134",
                "n04": "#670a3f",
                "n02": "#f33d22",
                "n01": "#b81f3d",
                "n03": "#B8224A",
                "n10": "#c1323e",
                "n11": "#8f2b34",
                "n12": "#c94b47",
                "n13": "#a44a3b",
                "r1": "#e0bba9",
                "r2": "#c1776e",
                "r3": "#89241c",
                "r4": "#efa0b6",
                "r5": "#cd6e96",
                "r14": "#ac1536",
                "r7": "#c379a3",
                "r10": "#a22137",
                "n516": "#af622f",
                "n534": "#cd0b95",
                "n601": "#99252e",
                "n602": "#a32328",
                "n603": "#cf4835",
                "n605": "#95372d",
                "n800": "#ac4547",
                "no1": "#c03f44",
                "no2": "#813525",
                "no3": "#b5422f",
                "no5": "#91211d",
                "no6": "#cc686a",
                "no17": "#ac5750",
                "no19": "#cb4c57",
                "no20": "#a51e2d",
                "no21": "#92393b",
                "r03": "#9e4e53",
                "r04": "#ce5c80",
                "r06": "#de407b",
                "r07": "#984154",
                "r08": "#ca1747",
                "r09": "#9d5950",
                "n-01": "#c66d5f",
                "n-02": "#ce5f66",
                "n-03": "#c7183a",
                "n-04": "#d40b49",
                "n-05": "#c62a6b",
                "n-06": "#c60e2f",
                "n-07": "#9a1d1b",
                "n-09": "#732737",
                "no-1": "#b16e5b",
                "no-02": "#c46465",
                "no-03": "#bc6a5f",
                "no-04": "#c65266",
                "no-05": "#a01f3e",
                "no-06": "#b41e44",
                "no-07": "#d92864",
                "no-08": "#d93a48",
                "n0-09": "#dd391d",
                "no-10": "#aa1825",
                "no-11": "#862423",
                "no-12": "#771a2d",
                "no-13": "#9e3270",
                "no-14": "#6d1e33",
                "no-01": "#b06f57",
                "804": "#a36a5d",
                "807": "#c37d85",
                "808": "#aa5759",
                "810": "#b11e2d",
                "823": "#da552f",
                "827": "#6c1313",
                "835": "#631910",
                "838": "#e68984",
                "854": "#ce8969",
                "855": "#914339",
                "858": "#ac4c43",
                "859": "#ca5d68",
                "860": "#df697c",
                "861": "#9a383d",
                "862": "#a3302f",
                "866": "#91434b",
                "867": "#85203c",
                "869": "#cf293d",
                "870": "#c34b4e",
                "871": "#f74040",
                "872": "#c54721",
                "913": "#c1292e",
                "l01": "#d66966",
                "l02": "#cf7866",
                "l03": "#b23f44",
                "l04": "#b52730",
                "l05": "#e02537",
                "l06": "#822c45",
                "l07": "#c8718a",
                "panne": "#d31e2f",
                "angora": "#C13A37",
                "jacquard": "#e64254",
                "brocade": "#b13851",
                "plush": "#ce3262",
                "cashmere": "#e65257",
                "suede": "#933c44",
                "damask": "#632d4f",
                "tapestry": "#632e34",
                "sateen": "#db6466",
                "boucle": "#89444c",
                "raw-silk": "#af5e57",
                "56": "#ff6b6b",
                "056": "#ff6b6b",
                "055": "#c9156e",
                "054": "#dd2120",
                "053": "#dd2120",
                "0053": "#b11a3b",
                "052": "#9b3f40",
                "051": "#e91b97",
                "016": "#8e1945",
                "015": "#9d0015",
                "014": "#d50042",
                "013": "#de203a",
                "012": "#f01b17",
                "011": "#a90043",
                "r18": "#a40404",
                "r17": "#3c0614",
                "milk-chocolate6": "#b86f4c",
                "mocha5": "#b9795d",
                "walnut-cake4": "#c78370",
                "nut-cookie3": "#ee8b62",
                "latte": "#d2886f",
                "vanilla1": "#dca088",
                "fbn001": "#fb2539",
                "fbn003": "#de1682",
                "fbn005": "#e41568",
                "fbn007": "#ce1c52",
                "fbn008": "#dc2e6d",
                "fbn010": "#ef3938",
                "fbn011": "#e40c79",
                "fbn012": "#da938a",
                "fbn014": "#d06079",
                "fbn015": "#d01587",
                "fbn018": "#cf1973",
                "fbn019": "#ae4b8e",
                "fbn023": "#ea3f96",
                "fbn025": "#e14b9c",
                "fbn029": "#ef4f99",
                "fbn030": "#e95670",
                "006": "#fa1e2a",
                "005": "#fa3b42",
                "004": "#eee5df",
                "003": "#cc4b09",
                "002": "#fe4904",
                "001": "#6d0a27",
                "01mr": "#b66665",
                "02mr": "#b06e61",
                "03mr": "#c4716b",
                "04mr": "#9d5041",
                "05mr": "#b25b6b",
                "06mr": "#ad6a57",
                "07mr": "#9d535a",
                "08mr": "#ad3447",
                "09mr": "#8f3348",
                "11mr": "#813c47",
                "12mr": "#d2543d",
                "13mr": "#e97274",
                "14mr": "#740e3d",
                "15mr": "#d34d75",
                "16mr": "#df5c61",
                "17mr": "#ba1825",
                "18mr": "#7e1422",
                "19mr": "#A85253",
                "20mr": "#9c5a4a",
                "21mr": "#8a483c",
                "22mr": "#7a1c2e",
                "23mr": "#c81b46",
                "24mr": "#cb3241",
                "25mr": "#e02973",
                "26mr": "#ca6a90",
                "140": "#be6e6d",
                "143": "#c33e37",
                "144": "#be4d48",
                "148": "#c85a51",
                "149": "#d85883",
                "150": "#9d5740",
                "27mr": "#6b2957",
                "28mr": "#4e1540",
                "29mr": "#d3677e",
                "30mr": "#e54181",
                "31mr": "#c9558e",
                "32mr": "#9c4680",
                "33mr": "#8f364a",
                "34mr": "#712339",
                "35mr": "#8f5551",
                "36mr": "#282828",
                "37mr": "#e17380",
                "38mr": "#ea4441",
                "39mr": "#b72e5a",
                "40mr": "#ca3652",
                "41mr": "#dc5a76",
                "42mr": "#d1677d",
                "43mr": "#cf8c86",
                "44mr": "#e23e58",
                "172": "#8b3b2a",
                "183": "#953635",
                "199": "#a95e4c",
                "203": "#ccabb1",
                "230": "#9c523d",
                "243": "#ca5d61",
                "263": "#a6443d",
                "278": "#9f4f55",
                "300": "#eac8d8",
                "303": "#852f3a",
                "304": "#8e404a",
                "305": "#b35d56",
                "309": "#87484c",
                "311": "#dc4643",
                "312": "#d86359",
                "333": "#c98d6f",
                "334": "#ca755f",
                "342": "#6f212a",
                "345": "#da2323",
                "348": "#b7171c",
                "354": "#87334b",
                "359": "#ce3958",
                "360": "#ba3d46",
                "361": "#8c2834",
                "363": "#974447",
                "368": "#af5f52",
                "370": "#9e6447",
                "377": "#96465f",
                "386": "#b8485a",
                "389": "#ff4158",
                "396": "#a75f6c",
                "397": "#a54440",
                "399": "#f41652",
                "400": "#de9f6b",
                "405": "#a95c50",
                "406": "#e0003b",
                "412": "#8e4e3a",
                "0172": "#9a2817",
                "0175": "#b84a37",
                "0196": "#db1339",
                "0198": "#510107",
                "0207": "#510107",
                "0204": "#f9522e",
                "m1": "#88584f",
                "m2": "#ce847d",
                "m3": "#743637",
                "m4": "#913643",
                "m5": "#8b2d4b",
                "m6": "#b5315b",
                "m9": "#8d364d",
                "m10": "#77091b",
                "m11": "#8b1223",
                "m12": "#642837",
                "m13": "#b81d5b",
                "m15": "#af6073",
                "m16": "#e47492",
                "m19": "#d06473",
                "m20": "#e1676d",
                "m21": "#ec7271",
                "m23": "#7b3b3f",
                "m24": "#af594c",
                "m25": "#b54142",
                "m26": "#b9402d",
                "m28": "#f1494b",
                "m29": "#4c1429",
                "m30": "#bf5a6f",
                "m31": "#ba245c",
                "m32": "#ce3c8b",
                "m33": "#b0689a",
                "m34": "#bb0711",
                "m35": "#c28073",
                "m36": "#16050f",
                "m37": "#732230",
                "m38": "#903b5e",
                "m39": "#f2878a",
                "m40": "#f84c34",
                "m41": "#78362f",
                "m42": "#261129",
                "m43": "#855d77",
                "m44": "#631e29",
                "m45": "#9d474f",
                "m46": "#661412",
                "m47": "#9b4d72",
                "m48": "#831f49",
                "m49": "#b50b24",
                "m50": "#c03d3a",
                "m51": "#c32f75",
                "m52": "#815748",
                "m53": "#ae75aa",
                "m54": "#905f51",
                "m56": "#121212",
                "m57": "#60150b",
                "m55": "#613e4a"
            },
            "لون-الايلاينر": {
                "black": "#000000",
                "blue": "#000e7a",
                "brwon": "#603600",
                "green": "#095400",
                "charcoal": "#656565",
                "dark-brown": "#59443f",
                "dark-green": "#4e594b",
                "electric-purple": "#9d6bd2",
                "golden-yellow": "#ede9a6",
                "lavender": "#a894af",
                "light-brown": "#846860",
                "lime-green": "#45bc38",
                "midnight": "#353c59",
                "sea-foam-green": "#aad1a2",
                "silver": "#ababab",
                "sky-blue": "#84b1c8",
                "taupe": "#8b7b6e",
                "white": "#ffffff",
                "black-shimmer": "#1d1d1d",
                "royalty": "#6e2431",
                "mystery": "#444341",
                "purity": "#d8d8d8",
                "pink": "#d14576",
                "aqua-force": "#42a3a1",
                "electric-blue": "#2e6890",
                "gray-sky": "#484848",
                "ultraviolet": "#9c7aa4",
                "ocean-blue": "#1898c1",
                "smokey": "#676767",
                "eggplant": "#6c4759",
                "sliver": "#a9abb0",
                "lilac": "#3a3671",
                "0212": "#826152",
                "0230": "#3b4b6f",
                "0261": "#231f20",
                "0262": "#0c0c0e",
                "0263": "#5a5d64",
                "0264": "#343f45",
                "ultra-black": "#000000",
                "2-secret-grey": "#2e3138",
                "4-royal-brown": "#524444",
                "6-white-smoke": "#ffffff",
                "9-blue-desire": "#0055a4",
                "01-blacklove": "#302f34",
                "02-but-first-espresso": "#776365",
                "03-black-midnight-sky": "#75787d",
                "06-silky-nude": "#f3c0ad",
                "02-hot-chocolate": "#533328",
                "17-tu-tu-turquoise": "#00a4ba",
                "06terra": "#6d5247",
                "marine-blue21": "#2a4e90",
                "no01": "#060702",
                "no02": "#525453",
                "no03": "#57372c",
                "no05": "#517688",
                "no06": "#2a4d63",
                "no07": "#346a6a",
                "no08": "#175139",
                "no09": "#545033",
                "n07": "#2d4864",
                "n08": "#491f71",
                "n3": "#434348",
                "n3-2": "#2f416a",
                "n4": "#265552",
                "n5": "#4f3d35",
                "n6": "#d5c2b3",
                "n02": "#4d4e50",
                "gt002": "#56331d",
                "gt-008": "#7a5d4f",
                "006": "#015DB0",
                "003": "#352929",
                "004": "#313038",
                "01": "#0c0d0f",
                "02": "#44260d",
                "03": "#494b55",
                "e01": "#181818",
                "e03": "#434651",
                "e02": "#3d2825",
                "30r": "#121315",
                "31r": "#3c271e",
                "32r": "#1c284f",
                "33r": "#281c34"
            },
            "لون-المسكارة": {
                "too-green": "#001203",
                "blue": "#0d1c6e",
                "burgundy": "#2c0518",
                "brown": "#2b190d",
                "pink": "#be1b84",
                "suny": "#3c9fdb",
                "beige-light": "#ccc5a5",
                "sliver": "#929199",
                "bluck": "#000000",
                "trcuazy": "#1daad9",
                "light-medium": "#553d3d",
                "medium-dark": "#3d2729",
                "22": "#4f2411",
                "24": "#495929",
                "21": "#221f0e",
                "23": "#053855",
                "20c": "#73674d",
                "10c": "#6d4e4b",
                "3-chocolate-cake": "#453329",
                "6-cafe-mocca": "#654c38",
                "01-blondy-brows": "#927469",
                "02-browny-brows": "#63453b",
                "dark-brown": "#543d38",
                "light-brown": "#926a4d",
                "wbs002": "#50361f",
                "wbs003": "#6d513b",
                "wbs005": "#5d4739",
                "wbs006": "#6c5440",
                "01": "#b6967f",
                "01a": "#6f5a49",
                "02": "#615b56",
                "03": "#4c2c1f",
                "04": "#3d332a",
                "05": "#54443f",
                "06": "#4d3b49",
                "07": "#1a364d",
                "01r": "#0a0018",
                "02r": "#042c95",
                "03r": "#6a50c1",
                "04r": "#47675c",
                "r05": "#131746",
                "r04": "#352c64",
                "r03": "#253b63",
                "r02": "#532232",
                "r01": "#0c0018"
            },
            "لون-الباودر": {
                "medium-peach-beige": "#d19d78",
                "medium-cream": "#c79572",
                "medium-rose": "#e8c2ab",
                "medium-cream-rose": "#c89172",
                "medium-soft-peach": "#CD9B78",
                "natural-coral-beige": "#ca9374",
                "beige-classic": "#edd3c6",
                "red-classic": "#f8d8c3",
                "pink-classic": "#f0cab3",
                "medium-sand-transp": "#e3b79d",
                "beige-sand-transparant": "#ebbe94",
                "bronze-sand-transparant": "#c99371",
                "07mav": "#f8cab3",
                "08mav": "#f0c0ac",
                "03mav": "#ebbb9a",
                "09mav": "#e4b19c",
                "01mav": "#d9a887",
                "05mav": "#cd9374",
                "06mav": "#f1cdab",
                "04mav": "#d9a689",
                "02mav": "#d69a87",
                "51porcelain": "#f2cead",
                "52vanilla": "#edc298",
                "53beige-dore": "#ebb68a",
                "54beige-rose": "#e4a77b",
                "010-transparent": "#e5c4b1",
                "015-natural-beige": "#e8c0b4",
                "025-sand-beige": "#ecc09b",
                "030-warm-beige": "#d19f84",
                "2-wheat-beige": "#e8bca1",
                "4-champagne-creme": "#e7c1aa",
                "2light-beige": "#d5ab9b",
                "4natural": "#d4a78d",
                "no1": "#e6ae7f",
                "no2": "#dd9a63",
                "no7": "#daa48a",
                "no8": "#d18b61",
                "no29": "#f0c092",
                "no30": "#e4b98f",
                "no33": "#d3b196",
                "no40": "#d3b196",
                "no42": "#f2c9ab",
                "p01": "#6c423b",
                "p02": "#985b4b",
                "p03": "#b59680",
                "stc101": "#f0bfa1",
                "stc102": "#edc4a6",
                "stc107": "#eecca9",
                "na001": "#f9db95",
                "na002": "#f8c49f",
                "na003": "#dfae85",
                "020": "#bf8c6d",
                "030": "#5a382c",
                "040": "#3b2d2c",
                "01": "#e3baa7",
                "02": "#caa88e",
                "03": "#a67a5e",
                "04": "#8d5f49",
                "06": "#dbb2a0",
                "08": "#a35f48",
                "003": "#e0cbba",
                "9": "#be8878",
                "8": "#bf8879",
                "7": "#cc8c74",
                "6": "#cfa189",
                "5": "#d9a689",
                "4": "#efcbb7",
                "3": "#dfa293",
                "2": "#eec5b0",
                "1": "#f9dbc3",
                "b01": "#d5ba9d",
                "b02": "#dba38c",
                "b03": "#c48d6e",
                "b04": "#c89168",
                "b05": "#8a6344",
                "b10": "#ab805d",
                "b11": "#c9937e",
                "b12": "#ce9a75",
                "b13": "#83573d",
                "b001": "#cdb7a8",
                "b002": "#be9f83",
                "b003": "#c4967c",
                "b004": "#ab8060",
                "281": "#3b3e4f",
                "280": "#8e7d83",
                "279": "#c94e89",
                "278": "#73302c",
                "277": "#5c2f2c",
                "276": "#421e24",
                "275": "#351c32",
                "266": "#613935",
                "265": "#665249",
                "264": "#907768",
                "260": "#308884",
                "258": "#6d5650",
                "254": "#9c6167",
                "248": "#6f755b",
                "246": "#422f26",
                "241": "#8a8f95",
                "235": "#5c3725",
                "229": "#543424",
                "221": "#685144",
                "220": "#c19e9c",
                "218": "#e0bbac",
                "217": "#f4e9d3",
                "119": "#020202",
                "199": "#020202",
                "196": "#e7b185",
                "195": "#66422a",
                "192": "#362422",
                "191": "#d28362",
                "166": "#d68e94",
                "162": "#664038",
                "144": "#e1b1a3",
                "137": "#c89c79",
                "134": "#b58e5d",
                "120": "#f2f3ee",
                "106": "#cfbca4",
                "104": "#d9ac97"
            },
            "لون-البرونزر": {
                "no-tan-lines": "#c88b6f",
                "nude-beach": "#b76d50",
                "teeny-bikini": "#9c5239",
                "pacific-tan": "#b5785c",
                "atlantic-tan": "#af7859",
                "caribbean-tan": "#ac704b",
                "illuminating-tan": "#b5765d",
                "bronze": "#a67966",
                "golden": "#A97B63",
                "1-golden-tan": "#a66545",
                "6-luxor-brown": "#d49c7c",
                "7-aztec-tan": "#cd916c",
                "br01": "#eebc9b",
                "br02": "#e2a27f",
                "br03": "#e58958",
                "br04": "#edaf86",
                "br05": "#e8ad8b",
                "06": "#915a46",
                "05": "#82523c",
                "04": "#a05545"
            },
            "لون-الكونسيلر": {
                "light": "#e6c59a",
                "mediam": "#e4b78f",
                "dark": "#daa076",
                "yellow": "#e7c683",
                "ivory": "#efd0b6",
                "green": "#bfd596",
                "porcelain": "#e6cfbf",
                "banana": "#e8cca4",
                "beige": "#dcb898",
                "hony": "#dbb18b",
                "mint": "#b7c8a4",
                "nude": "#e5d3bf",
                "fair": "#d7ad94",
                "sand": "#eab39e",
                "naturl-beige": "#e19281",
                "010-ivory": "#f4d0b8",
                "020-light-beige": "#e4b392",
                "025-rosy-sand": "#dfa283",
                "005-light-nude": "#f2cdb0",
                "10-ivory": "#FACDA6",
                "20-light-beige": "#eecfb3",
                "005-light-natural": "#f2cdb0",
                "010-porcellain": "#F2CDB0",
                "1-correcting-green": "#b9c3b8",
                "3-sand": "#ce9a73",
                "6-natural": "#c5997c",
                "2-rosy-creme": "#f5c9ad",
                "5-nude-beige": "#ebc7a5",
                "7-albescent-white": "#eabf9d",
                "8-marzipan-beige": "#f3c7a2",
                "9-buttercup-beige": "#e3b791",
                "10-matt-naturelle": "#fbcdae",
                "20-matt-sand": "#e4b69f",
                "30-matt-honey": "#d9a483",
                "1luminous-beige": "#f2dec6",
                "2luminous-cream": "#eee7cb",
                "3luminous-sand": "#e0d3be",
                "7luminous-peach": "#e1c9af",
                "no01": "#e1ae9a",
                "no02": "#e0ab83",
                "no6": "#aed9be",
                "n1": "#dfb491",
                "n2": "#d3a78e",
                "n3": "#d9ad8a",
                "medium": "#d3a782",
                "mid-medium": "#cc9e7c",
                "fjc001": "#e3bda0",
                "fjc002": "#debea7",
                "cov001": "#fed8b4",
                "cov005": "#f4cbb0",
                "y01": "#f6cab1",
                "y02": "#f4cdac",
                "y03": "#f3c0a1",
                "y04": "#f3c5a3",
                "y05": "#f1bf9a",
                "01": "#e0b385",
                "02": "#f1b179",
                "03": "#e29f76",
                "04": "#dcb17b",
                "c01": "#e3cbb1",
                "c02": "#c49b7b",
                "c03": "#cda581",
                "c04": "#f7b7d4",
                "c05": "#ffffff",
                "c06": "#ebd8a0",
                "c07": "#c8e2c7",
                "c08": "#c08e74",
                "c09": "#ac8d6e",
                "100": "#f2d3b7",
                "c100": "#f2d3b7",
                "c101": "#cb9f6f"
            }
        };
    };
    ColorsProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorsProvider);
    return ColorsProvider;
}());



/***/ })

}]);
//# sourceMappingURL=product-details-product-details-module-es5.js.map