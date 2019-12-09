(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          تاكيد الطلب\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"transparent-card\">\n    <ion-slides #slides>\n      <ion-slide>\n        <ion-list>\n          <ion-item style=\"text-align: center ;color:#c0101e\">\n            <h2>المعلومات الشخصية</h2>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>الاسم الاول</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"newOrder.firstname\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>اسم العائلة</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"newOrder.lastname\"></ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>رقم الهاتف</ion-label>\n            <ion-input type=\"tel\" [(ngModel)]=\"newOrder.phone\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label> رقم هاتف ثاني</ion-label>\n            <ion-input type=\"tel\" [(ngModel)]=\"newOrder.phone2\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>المحافظة</ion-label>\n            <ion-select name=\"governorate\" [(ngModel)]=\"newOrder.governorate\" okText=\"اختيار\" cancelText=\"الغاء\">\n              <ion-select-option value=\"بغداد\">بغداد</ion-select-option>\n              <ion-select-option value=\"البصرة\">البصرة</ion-select-option>\n              <ion-select-option value=\"النجف\">النجف</ion-select-option>\n              <ion-select-option value=\"كربلاء\">كربلاء</ion-select-option>\n              <ion-select-option value=\"صلاح الدين\">صلاح الدين</ion-select-option>\n              <ion-select-option value=\"الانبار\">الانبار</ion-select-option>\n              <ion-select-option value=\"ديالى\">ديالى</ion-select-option>\n              <ion-select-option value=\"ميسان\">ميسان</ion-select-option>\n              <ion-select-option value=\"القادسية\">القادسية</ion-select-option>\n              <ion-select-option value=\"دهوك\">دهوك</ion-select-option>\n              <ion-select-option value=\"نينوى\">نينوى</ion-select-option>\n              <ion-select-option value=\"اربيل\">اربيل</ion-select-option>\n              <ion-select-option value=\"بابل\">بابل</ion-select-option>\n              <ion-select-option value=\"حلبجة\">حلبجة</ion-select-option>\n              <ion-select-option value=\"ذي قار\">ذي قار</ion-select-option>\n              <ion-select-option value=\"السليمانية\">السليمانية</ion-select-option>\n              <ion-select-option value=\"كركوك\">كركوك </ion-select-option>\n              <ion-select-option value=\"المثنى\">المثنى</ion-select-option>\n              <ion-select-option value=\"واسط\">واسط</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>المدينة</ion-label>\n            <ion-input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"newOrder.city\">\n            </ion-input>\n          </ion-item>\n          <!-- <ion-item>\n            <ion-label>المحلة</ion-label>\n            <ion-input class=\"form-control\" type=\"tel\" name=\"street\" [(ngModel)]=\"newOrder.street\">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>الزقاق</ion-label>\n            <ion-input class=\"form-control\" type=\"tel\" name=\"zoqaq\" [(ngModel)]=\"newOrder.zoqaq\">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>الدار</ion-label>\n            <ion-input class=\"form-control\" type=\"tel\" name=\"house\" [(ngModel)]=\"newOrder.house\">\n            </ion-input>\n          </ion-item> -->\n          <ion-item>\n            <ion-label>نقطة دالة</ion-label>\n            <ion-input class=\"form-control\" type=\"text\" name=\"nearest_point\" [(ngModel)]=\"newOrder.nearest_point\">\n            </ion-input>\n          </ion-item>\n\n          <!-- <div class=\"form-check\" style=\"margin:5px\">\n            <label class=\"form-check-label\">\n              <ion-checkbox color=\"danger\" (click)=\"getAccountData()\"></ion-checkbox>\n              استخدم معلومات الحساب الشخصية؟\n            </label>\n          </div> -->\n\n          <ion-button size=\"large\" fill=\"clear\" expand=\"block\" color=\"danger\" (click)=\"move(1,2)\">\n            <ion-icon name=\"arrow-forward\" color=\"danger\"></ion-icon>\n            التالي\n          </ion-button>\n        </ion-list>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-list lines=\"none\" style=\"width: 95%\">\n          <ion-item style=\"text-align: center; color:#c0101e\">\n            <h2>تفاصيل الطلب</h2>\n          </ion-item>\n\n          <ion-card>\n            <ion-card-header style=\"text-align: center; color:#c0101e\">\n              معلومات الحساب\n            </ion-card-header>\n            <ion-card-content>\n              <h2>{{ newOrder.firstname }} {{ newOrder.lastname }}</h2>\n              <h2>{{ newOrder.phone }}</h2>\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card style=\"padding: 0;\">\n            <ion-item color=\"light\" *ngFor=\"let item of cartItems\">\n              <ion-thumbnail item-right>\n                <img style=\"border-radius: 100%\" [src]=\"item.product.featured_src || item.product.images[0].src\" />\n              </ion-thumbnail>\n              <p style=\"font-weight: bold; margin:5px\">{{ item.product.name }}</p>\n              <ion-row>\n                <ion-col col-auto>\n                  <div *ngIf=\"!item.variation\" style=\"text-align: center;\">\n                    <p><span style=\"font-weight: bold\"> الكمية: </span> {{ item.qty }} <ion-badge color=\"danger\">\n                        {{ item.product.price * item.qty }} د.ع </ion-badge>\n                    </p>\n                  </div>\n                  <div *ngIf=\"item.variation\" style=\"text-align: center;\">\n                    <p><span style=\"font-weight: bold\"> الكمية: </span>{{ item.qty }} <ion-badge color=\"danger\">\n                        {{ item.variation.price * item.qty }} د.ع </ion-badge>\n                    </p>\n                  </div>\n                </ion-col>\n              </ion-row>\n\n            </ion-item>\n            <ion-item text-center>\n              <div>\n                <p> <span style=\"font-weight: bold\"> سعر التوصيل : </span>{{shippcost}} د.ع</p>\n              </div>\n            </ion-item>\n            <ion-item text-center>\n\n              <div>\n\n                <p *ngIf=\"!hide\"> <span style=\"font-weight: bold\"> السعر الكلي: </span>{{total + shippcost}} د.ع</p>\n                <p *ngIf=\"hide\"> <span style=\"font-weight: bold\"> السعر الكلي قبل التخفيض:\n                  </span>{{total  + copunCost +  shippcost}} د.ع</p>\n                <p *ngIf=\"hide\"> <span style=\"font-weight: bold\"> السعر الكلي بعد التخفيض: </span>{{total + shippcost }}\n                  د.ع</p>\n              </div>\n            </ion-item>\n\n          </ion-card>\n\n          <ion-row style=\"text-align: center\" *ngIf=\"!hide\">\n            <ion-item>\n              <ion-input type=\"text\" style=\"font-size: 1.1em;\" [(ngModel)]=\"couponCode\"\n                placeholder=\"ادخل كوبون التخفيض\"></ion-input>\n              <ion-button item-right size=\"medium\" color=\"danger\" (click)=\"applyCouponCode(couponCode)\">\n                <ion-icon name=\"checkmark-circle\"></ion-icon>\n                تفعيل الكوبون\n              </ion-button>\n            </ion-item>\n          </ion-row>\n          <ion-row *ngIf=\"hide\">\n\n            <ion-button item-right expand=\"block\" color=\"danger\" (click)=\"replyCouponCode()\">\n              اعاده ادخال الكوبون\n            </ion-button>\n\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button item-right size=\"large\" fill=\"clear\" expand=\"block\" icon-left color=\"danger\"\n                (click)=\"placeOrder()\">\n                <ion-icon name=\"arrow-forward\" color=\"danger\"></ion-icon>\n                تثبيت الطلب\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button item-right size=\"large\" fill=\"clear\" expand=\"block\" icon-left color=\"danger\"\n                (click)=\"move(2,1)\">\n                <ion-icon name=\"arrow-back\" color=\"danger\"></ion-icon>\n                رجوع\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-list lines=\"none\" style=\"width: 95%\">\n          <ion-item style=\"text-align: center; color:#c0101e\">\n            <h2>طريقة الدفع</h2>\n          </ion-item>\n\n          <!-- <ion-item>\n            <ion-label>الدفع</ion-label>\n            <ion-select [(ngModel)]=\"newOrder.paymentMethod\" okText=\"اختيار\" cancelText=\"الغاء\">\n              <ion-select-option value=\"الدفع عن الاستلام\">الدفع عن الاستلام\n              </ion-select-option>\n            </ion-select>\n          </ion-item> -->\n\n          <ion-row>\n            <ion-col>\n              <ion-button item-right size=\"large\" fill=\"clear\" expand=\"block\" icon-left color=\"danger\"\n                (click)=\"placeOrder()\">\n                <ion-icon name=\"arrow-forward\" color=\"danger\"></ion-icon>\n                تثبيت الطلب\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button item-right size=\"large\" fill=\"clear\" expand=\"block\" icon-left color=\"danger\"\n                (click)=\"move(3,2)\">\n                <ion-icon name=\"arrow-back\" color=\"danger\"></ion-icon>\n                رجوع\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-slide>\n    </ion-slides>\n\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transparent-card {\n  background-color: transparent;\n  box-shadow: none;\n}\n\nion-chip {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-input {\n  font-family: \"Cairo\", sans-serif;\n}\n\n.item.sc-ion-label-md-h,\n.item .sc-ion-label-md-h {\n  color: #c0101e;\n}\n\n.swiper-slide img {\n  width: 50px;\n  max-width: 100%;\n  height: 50px;\n  max-height: 100%;\n}\n\n.header {\n  text-align: center;\n}\n\n.item-native {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FERUk7RUFDSSxnQ0FBQTtBQ0NSOztBREVJOztFQUVJLGNBQUE7QUNDUjs7QURFSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSxrQkFBQTtBQ0NSOztBREVJO0VBQ0ksaUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAudHJhbnNwYXJlbnQtY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgIGlvbi1jaGlwIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICBpb24taW5wdXQge1xuICAgICAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAuaXRlbS5zYy1pb24tbGFiZWwtbWQtaCxcbiAgICAuaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICAgICAgICBjb2xvcjogI2MwMTAxZTtcbiAgICB9XG5cbiAgICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuXG4gICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfSIsIi50cmFuc3BhcmVudC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlvbi1jaGlwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaXRlbS5zYy1pb24tbGFiZWwtbWQtaCxcbi5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGNvbG9yOiAjYzAxMDFlO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/order.model */ "./src/app/models/order.model.ts");









let CheckoutPage = class CheckoutPage {
    constructor(storage, newOrder, router, fire, firestore, events, data) {
        this.storage = storage;
        this.newOrder = newOrder;
        this.router = router;
        this.fire = fire;
        this.firestore = firestore;
        this.events = events;
        this.data = data;
        this.hide = false;
        this.products = [];
        this.shippcost = 0;
        this.couponCode = "";
        this.copunCost = 0;
        this.cartItems = [];
        this.useAccountInfo = false;
        this.total = 0;
    }
    ngOnInit() {
        this.storage.ready().then(() => {
            this.storage.get('cart').then((data) => {
                let info = JSON.parse(JSON.stringify(data));
                this.cartItems = data;
                console.log(JSON.parse(JSON.stringify(data)));
                // console.log(this.cartItems);
                let i = 0;
                let n = 0;
                this.cartItems.forEach(element => {
                    let data = element;
                    if (element.variation && element.product.categories[i]) {
                        this.products.push({
                            name: element.product.name,
                            price: element.product.price,
                            qty: element.qty,
                            variations: element.variation.attributes[0].option ? element.variation.attributes[0].option : "",
                            category: element.product.categories[i].option ? element.product.categories[i].name + 'option: ' + element.product.categories[i].option : element.product.categories[i].name,
                            totalprice: element.product.price * element.qty
                        });
                    }
                    else if (element.variation) {
                        this.products.push({
                            name: element.product.name,
                            price: element.product.price,
                            qty: element.qty,
                            variations: element.variation.attributes[0].option ? element.variation.attributes[0].option : "",
                            totalprice: element.product.price * element.qty
                        });
                    }
                    else {
                        this.products.push({
                            name: element.product.name,
                            price: element.product.price,
                            qty: element.qty,
                            totalprice: element.product.price * element.qty
                        });
                    }
                    // console.log(data.variation );
                    // if(data.variation.attributes != undefined || data.variation.attributes == null){
                    //   console.log(element.variation.attributes[0].name + ' opt ' + element.variation.attributes[0].option);
                    // }
                    this.total = this.total + (element.product.price * element.qty);
                    console.log(this.total);
                    i++;
                    // console.log(element.product.categories[i].option);
                });
            });
        });
    }
    move(from, to) {
        this.slides.lockSwipes(false);
        if (from == 1 && to == 2) {
            if (!this.newOrder.phone || this.newOrder.phone.length < 10) {
                this.fire.presentToast('رقم الهاتف مطلوب!');
                return;
            }
            if (!this.newOrder.firstname || !this.newOrder.lastname) {
                this.fire.presentToast('يرجى ملى المعلومات');
                return;
            }
            if (!this.newOrder.governorate || !this.newOrder.city
                || !this.newOrder.nearest_point) {
                this.fire.presentToast('يرجى ملئ معلومات العنوان');
                return;
            }
            if (!this.newOrder.phone2 || this.newOrder.phone2.length < 10) {
                this.newOrder.phone2 = '';
            }
            const date = new Date();
            const formatedDate = date.toISOString().substring(0, 10);
            const dateh = date.toISOString();
            console.log(formatedDate);
            this.newOrder.date = formatedDate;
            var d = new Date();
            var n = (d.getHours() - 12) + ':' + d.getMinutes();
            this.newOrder.datehours = n;
        }
        if (from > to) {
            this.slides.slidePrev();
        }
        else {
            this.slides.slideNext();
        }
        setTimeout(() => {
            this.content.scrollToTop(250);
            this.slides.lockSwipes(true);
        }, 250);
        this.newOrder.product = this.products;
    }
    applyCouponCode(couponCode) {
        this.fire.getRealTimeData('codeList', couponCode).subscribe((data) => {
            console.log(data[1]);
            if (data[1] == null || data[1] == undefined) {
                this.fire.presentToast('هذا الرمز غير صالح');
            }
            else {
                if (data[2] == "سعر ثابت") {
                    this.total = this.total - Number(data[1]);
                    this.newOrder.total = this.total;
                    this.newOrder.couponCode = couponCode;
                    this.newOrder.couponPrice = Number(data[1]);
                    this.copunCost = Number(data[1]);
                    this.hide = true;
                }
                else {
                    this.total = this.total - (this.total * (Number(data[1]) / 100));
                    this.newOrder.total = this.total;
                    this.newOrder.couponCode = couponCode;
                    this.newOrder.couponPrice = Number(data[1]);
                    this.hide = true;
                }
            }
        });
    }
    placeOrder() {
        let id = this.firestore.createId();
        this.newOrder.id = id;
        this.newOrder.total = this.total + this.shippcost;
        console.log(this.newOrder);
        this.fire.addRealTimeData('orders', this.newOrder.id, this.newOrder);
        this.fire.presentToast('تم تثبيت طلبك بنجاح');
        this.storage.set('cart', null);
        this.events.publish("updateCart");
        this.router.navigate(['/home']);
    }
    back() {
        this.router.navigate(['/home']);
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.useAccountInfo = !this.useAccountInfo;
            if (this.useAccountInfo) {
                let userid;
                yield this.storage.get('userid').then(id => {
                    userid = id;
                });
                let userList = this.fire.getRealTimeObject('users', userid);
                yield userList.subscribe(info => {
                    this.newOrder.firstname = info.firstname;
                    this.newOrder.lastname = info.lastname;
                    this.newOrder.phone = info.phone;
                    this.newOrder.uid = info.id;
                    this.newOrder.governorate = info.governorate;
                    this.newOrder.city = info.city;
                    this.newOrder.phone2 = info.phone2;
                    this.newOrder.nearest_point = info.nearest_point;
                    this.fire.getShoppingCost(info.governorate);
                    this.data.costMessage.subscribe((data) => {
                        console.log(data);
                        this.shippcost = Number(data.toString());
                    });
                });
            }
        });
    }
    replyCouponCode() {
        console.log(this.copunCost);
        this.total = (this.total + this.copunCost);
        this.hide = false;
    }
    getAccountData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.useAccountInfo = !this.useAccountInfo;
            if (this.useAccountInfo) {
                let userid;
                yield this.storage.get('userid').then(id => {
                    userid = id;
                });
                let userList = this.fire.getRealTimeObject('users', userid);
                yield userList.subscribe(info => {
                    this.newOrder.firstname = info.firstname;
                    this.newOrder.lastname = info.lastname;
                    this.newOrder.phone = info.phone;
                    this.newOrder.uid = info.id;
                    this.newOrder.governorate = info.governorate;
                    this.newOrder.city = info.city;
                    this.newOrder.nearest_point = info.nearest_point;
                });
            }
            else {
                this.newOrder.firstname = null;
                this.newOrder.lastname = null;
                this.newOrder.phone = null;
                this.newOrder.id = null;
                this.newOrder.governorate = null;
                this.newOrder.city = null;
                this.newOrder.nearest_point = null;
            }
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _models_order_model__WEBPACK_IMPORTED_MODULE_8__["Order"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], CheckoutPage.prototype, "slides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], CheckoutPage.prototype, "content", void 0);
CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.page.html"),
        styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _models_order_model__WEBPACK_IMPORTED_MODULE_8__["Order"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
], CheckoutPage);



/***/ }),

/***/ "./src/app/models/order.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/order.model.ts ***!
  \***************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Order = class Order {
};
Order = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Order);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es2015.js.map