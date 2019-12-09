(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          سلتك\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-divider color=\"danger\" [hidden]=\"showEmptyCartMessage\">\n      تفاصيل سلتك\n    </ion-item-divider>\n    <ion-item-divider color=\"danger\" [hidden]=\"!showEmptyCartMessage\">\n      لا يوجد منتجات في السلة\n    </ion-item-divider>\n\n    <ion-card color=\"light\" *ngFor=\"let item of cartItems; let i = index\">\n      <ion-item color=\"light\">\n\n        <ion-thumbnail item-right>\n          <img style=\"border-radius: 100%\" [src]=\"item.product.featured_src || item.product.images[0].src\" />\n        </ion-thumbnail>\n        <h6 style=\"font-weight: bold; margin:5px\">{{ item.product.name || item.product.title }}</h6>\n        <p *ngIf=\"item.variation\"><span *ngFor=\"let att of item.variation.attributes\">{{ att.option | titlecase }}\n            &nbsp;</span></p>\n        <h6 *ngIf=\"!item.variation\"><span [innerHTML]=\"item.product.price_html\"></span><span\n            *ngIf=\"item.product.sale_price\">\n            {{ (item.product.regular_price - item.product.sale_price)/item.product.regular_price * 100  | number:'1.2-2'}}\n            % OFF</span></h6>\n        <h6 *ngIf=\"item.variation\"><span>{{ currency_symbol }}\n            {{ item.variation.regular_price | number: '1.2-2'}}</span><span\n            *ngIf=\"item.product.sale_price\">{{ (item.variation.regular_price - item.variation.sale_price)/item.variation.regular_price * 100  | number:'1.2-2'}}\n            % OFF</span></h6>\n      </ion-item>\n      <ion-item class=\"compact\">\n        <ion-row ion-no-padding>\n          <ion-col size=\"8\" ion-no-padding>\n            <ion-button fill=\"clear\" color=\"danger\" (click)=\"changeQty(item, i, -1)\">\n              <ion-icon name=\"remove-circle\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"dark\" fill=\"clear\">{{ item.qty }}</ion-button>\n            <ion-button fill=\"clear\" color=\"danger\" (click)=\"changeQty(item, i, 1)\">\n              <ion-icon name=\"add-circle\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\" style=\"text-align: right;\">\n            <ion-button small outline (click)=\"removeFromCart(item, i)\" style=\"width: 64px;\" color=\"danger\">ازالة\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-card>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n\n    <ion-row ion-no-padding>\n      <ion-col ion-no-padding>\n        <ion-button color=\"danger\" expand=\"block\">الكلي {{ currency_symbol }} {{ total | number}}\n        </ion-button>\n      </ion-col>\n      <ion-col ion-no-padding>\n        <ion-button color=\"danger\" expand=\"block\" fill=\"outline\" (click)=\"checkout()\">اكمال الطلب</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".compact .item-inner .input-wrapper ion-label {\n  margin: 0 !important;\n}\n\nion-content, ion-header {\n  font-family: \"Cairo\", sans-serif;\n  direction: rtl;\n}\n\nion-toolbar {\n  font-family: \"Cairo\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0o7O0FERUE7RUFDRyxnQ0FBQTtFQUNBLGNBQUE7QUNDSDs7QURDQTtFQUNJLGdDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhY3QgLml0ZW0taW5uZXIgLmlucHV0LXdyYXBwZXIgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQsIGlvbi1oZWFkZXIge1xuICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gICBkaXJlY3Rpb246IHJ0bDtcbn1cbmlvbi10b29sYmFye1xuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xufSIsIi5jb21wYWN0IC5pdGVtLWlubmVyIC5pbnB1dC13cmFwcGVyIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCwgaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let CartPage = class CartPage {
    constructor(toastController, storage, router, events) {
        this.toastController = toastController;
        this.storage = storage;
        this.router = router;
        this.events = events;
        this.cartItems = [];
        this.showEmptyCartMessage = false;
        this.currency_symbol = "د.ع";
    }
    ngOnInit() {
        this.total = 0.0;
        this.storage.ready().then(() => {
            this.storage.get("cart").then((data) => {
                this.cartItems = data;
                console.log(this.cartItems);
                if (this.cartItems && this.cartItems.length > 0) {
                    let i = 0;
                    this.cartItems.forEach((item, index) => {
                        if (!item.variation) {
                            this.total = this.total + (item.product.price * item.qty);
                            console.log(item.product.price * item.qty);
                        }
                        else {
                            console.log(item.variation.attributes[i].name + ' opt ' + item.variation.attributes[i].option);
                            this.total = this.total + (parseFloat(item.variation.price) * item.qty);
                            console.log(parseFloat(item.variation.price) * item.qty);
                        }
                    });
                }
                else {
                    this.showEmptyCartMessage = true;
                }
            });
        });
    }
    back() {
        this.router.navigate(['/home']);
    }
    removeFromCart(item, i) {
        let price;
        if (!item.variation)
            price = item.product.price;
        else
            price = parseFloat(item.variation.price);
        let qty = item.qty;
        this.cartItems.splice(i, 1);
        this.storage.set("cart", this.cartItems).then(() => {
            this.total = this.total - (price * qty);
        });
        if (this.cartItems.length == 0) {
            this.showEmptyCartMessage = true;
        }
        this.events.publish("updateCart");
    }
    checkout() {
        this.storage.get("cart").then((data) => {
            this.cartItems = data;
            //FIX: Prevent checkout if cart is empty
            if (this.cartItems && this.cartItems.length > 0) {
                this.storage.get("userIn").then((data) => {
                    if (data != null && data == true) {
                        this.router.navigate(['/checkout']);
                    }
                    else {
                        this.presentToast('يرجى تسجيل الدخول');
                        this.router.navigate(['/signup']);
                    }
                });
            }
            else {
                this.presentToast('السلة فارغة');
            }
        });
    }
    changeQty(item, index, change) {
        let price;
        if (!item.variation)
            price = item.product.price;
        else
            price = parseFloat(item.variation.price);
        let qty = item.qty;
        if (change < 0 && item.qty == 1) {
            return;
        }
        qty = qty + change;
        item.qty = qty;
        item.amount = qty * price;
        this.cartItems[index] = item;
        this.storage.set("cart", this.cartItems).then(() => {
            this.presentToast('تم تحديث السلة');
        });
        this.total = (parseFloat(this.total.toString()) + (parseFloat(price.toString()) * change));
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 1000
            });
            yield toast.present();
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html"),
        styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map