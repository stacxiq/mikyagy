(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/account/account.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/account.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          حسابك\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-divider color=\"danger\" (click)=\"editAccount()\">\n      تعديل الحساب\n    </ion-item-divider>\n    <div class=\"logos\">\n      <img src=\"{{user.image}}\" style=\"width:180px; height:180px; border-radius:50%\">\n    </div>\n\n    <h2 style=\"color: #c0101e; text-align: center\">- المعلومات الشخصية -</h2>\n\n    <ion-list-header>\n      <p>\n        <ion-icon name=\"contact\"></ion-icon> الاسم\n      </p>\n    </ion-list-header>\n\n    <ion-item>\n      <p>{{user.firstname}} {{user.lastname}}</p>\n    </ion-item>\n\n  \n\n    <ion-list-header>\n      <p>\n        <ion-icon name=\"call\"></ion-icon> رقم الهاتف\n      </p>\n    </ion-list-header>\n\n    <ion-item>\n      <p>{{user.phone}}</p>\n    </ion-item>\n\n    <ion-list-header>\n      <p>\n        <ion-icon name=\"map\"></ion-icon> العنوان\n      </p>\n    </ion-list-header>\n\n    <ion-item>\n      <p>{{user.governorate}} / {{user.city}} / {{user.nearest_point}}</p>\n    </ion-item>\n\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");







const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
let AccountPageModule = class AccountPageModule {
};
AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n\nion-list-header {\n  font-size: 18px;\n  color: #c0101e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjYzAxMDFlO1xufSIsIi5sb2dvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNjMDEwMWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");






let AccountPage = class AccountPage {
    constructor(router, user, data, firebaseService, routerParam) {
        this.router = router;
        this.user = user;
        this.data = data;
        this.firebaseService = firebaseService;
        this.routerParam = routerParam;
        this.routerParam.params.subscribe(params => {
            this.userid = params['userid'];
        });
    }
    ngOnInit() {
        this.userList = this.firebaseService.getRealTimeObject('users', this.userid);
    }
    ngAfterViewInit() {
        this.userList.subscribe(info => {
            this.user.firstname = info.firstname;
            this.user.lastname = info.lastname;
            this.user.phone = info.phone;
            this.user.password = info.password;
            this.user.id = info.id;
            this.user.image = info.image;
            this.user.governorate = info.governorate;
            this.user.city = info.city;
            this.user.nearest_point = info.nearest_point;
        });
    }
    editAccount() {
        console.log(this.user);
        this.data.saveData(this.user);
        if (this.user.password == null && this.user.imgname == null)
            this.router.navigate(['user-edit', 'yes']);
        else {
            this.router.navigate(['user-edit', 'no']);
        }
    }
    back() {
        this.router.navigate(['/home']);
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/index.js!./src/app/account/account.page.html"),
        styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map