(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-verify-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/verify/verify.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verify/verify.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          التحقق من حساب\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"signin\">\n    <div class=\"header\">\n      <h1>تاكيد رقم الهاتف</h1>\n      <p>الرجاء تاكيد رقم الهاتف لاستخدام التطبيق</p>\n    </div>\n    <div class=\"main\">\n      <form role=\"form\" #f=\"ngForm\">\n        <div *ngIf=\"!check\">\n          <ion-item>\n            <ion-input class=\"form-control\" placeholder=\"رقم الهاتف\" type=\"tel\" name=\"phone\" [(ngModel)]=\"phone\"\n              required minlength=\"11\">\n            </ion-input>\n          </ion-item>\n          <ion-button expand=\"block\" fill=\"outline\" type=\"buttom\" color=\"danger\" (click)=\"sendcode()\"\n            [disabled]=\"!f.valid\">\n            ارسال رمز التحقيق</ion-button>\n        </div>\n      </form>\n\n      <div *ngIf=\"check\">\n        <form role=\"form\" #f=\"ngForm\">\n          <ion-item>\n            <ion-input class=\"form-control\" placeholder=\"يرجى ادخال رمز التحقيق\" name=\"code\"\n              [(ngModel)]=\"verificationCode\" required minlength=\"6\">\n            </ion-input>\n          </ion-item>\n          <ion-button expand=\"block\" fill=\"outline\" (click)=\"verifyLoginCode()\" color=\"danger\" type=\"buttom\"\n            [disabled]=\"!f.valid\">\n            تاكيد رقم\n            الهاتف</ion-button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div id=\"recaptcha-container\"></div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/services/window.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/window.service.ts ***!
  \********************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WindowService = class WindowService {
    get windowRef() {
        return window;
    }
};
WindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WindowService);



/***/ }),

/***/ "./src/app/verify/verify.module.ts":
/*!*****************************************!*\
  !*** ./src/app/verify/verify.module.ts ***!
  \*****************************************/
/*! exports provided: VerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify.page */ "./src/app/verify/verify.page.ts");







const routes = [
    {
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]
    }
];
let VerifyPageModule = class VerifyPageModule {
};
VerifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })
], VerifyPageModule);



/***/ }),

/***/ "./src/app/verify/verify.page.scss":
/*!*****************************************!*\
  !*** ./src/app/verify/verify.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title,\nion-content {\n  font-family: \"Cairo\", sans-serif;\n  direction: rtl;\n}\n\nimg {\n  width: 150px;\n  height: 150px;\n}\n\n.signin {\n  text-align: center;\n}\n\n.header {\n  text-align: center;\n}\n\n.logos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-input {\n  font-family: \"Cairo\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlcmlmeS92ZXJpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGdDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUsXG5pb24tY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gICAgZGlyZWN0aW9uOiBydGw7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5zaWduaW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5sb2dvcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcbn0iLCJpb24tdGl0bGUsXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5zaWduaW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/verify/verify.page.ts":
/*!***************************************!*\
  !*** ./src/app/verify/verify.page.ts ***!
  \***************************************/
/*! exports provided: VerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPage", function() { return VerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);









let VerifyPage = class VerifyPage {
    constructor(data, user, router, win, storage, fire, routerParam) {
        this.data = data;
        this.user = user;
        this.router = router;
        this.win = win;
        this.storage = storage;
        this.fire = fire;
        this.routerParam = routerParam;
        this.isComplete = false;
        this.check = false;
        this.routerParam.params.subscribe(params => {
            this.fromFacebook = params['fromfacebook'];
        });
    }
    ngOnInit() {
        this.storage.set('verify', false);
        this.windowRef = this.win.windowRef;
        this.windowRef.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"].RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
        });
        this.windowRef.recaptchaVerifier.render();
        this.data.currentMessage.subscribe(data => {
            let info = JSON.parse(JSON.stringify(data));
            this.user.firstname = info.firstname;
            this.user.password = info.password;
            this.user.lastname = info.lastname;
            this.user.email = info.email;
            this.user.phone = info.phone;
            this.user.id = info.id;
            this.user.imgname = info.imgname;
        });
    }
    sendcode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.set('verify', false);
            this.user.phone = this.phone;
            const appVerifier = this.windowRef.recaptchaVerifier;
            yield firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().signInWithPhoneNumber('+964' + this.user.phone, appVerifier)
                .then(result => {
                this.windowRef.confirmationResult = result;
                this.check = true;
                this.fire.presentToast("تم ارسال رمز التحقيق");
            })
                .catch(error => {
                this.check = false;
                console.log(error);
                this.fire.presentToast(error);
            });
        });
    }
    verifyLoginCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.set('verify', false);
            yield this.windowRef.confirmationResult
                .confirm(this.verificationCode)
                .then(result => {
                console.log(result.user);
                if (this.fromFacebook == "no") {
                    this.fire.register(this.user).then((user) => {
                        this.isComplete = true;
                        this.storage.set('verify', true);
                        this.fire.presentToast('تم التحقق من الهاتف بنجاح');
                        this.back();
                        console.log(user);
                    }, (e) => {
                        this.storage.set('verify', false);
                        this.isComplete = false;
                        console.log(e);
                        this.fire.presentToast(e);
                    });
                }
                else if (this.fromFacebook == "yes") {
                    this.isComplete = true;
                    this.fire.presentToast('تم التحقق من الهاتف بنجاح');
                    this.storage.set('verify', true);
                    this.user.password = null;
                    this.user.imgname = null;
                    this.fire.addRealTimeData('users', this.user.id, this.user);
                    this.back();
                }
            })
                .catch(error => {
                this.storage.set('verify', false);
                console.log(error, "Incorrect code entered?");
                this.fire.presentToast(error);
            });
        });
    }
    back() {
        if (!this.isComplete && (this.user.imgname != undefined || this.user.imgname != null)) {
            this.fire.deleteStorageFile('profiles', this.user.imgname);
        }
        else if (!this.isComplete) {
            this.storage.set('verify', false);
        }
        this.router.navigate(['/home']);
    }
};
VerifyPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_window_service__WEBPACK_IMPORTED_MODULE_3__["WindowService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
VerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify',
        template: __webpack_require__(/*! raw-loader!./verify.page.html */ "./node_modules/raw-loader/index.js!./src/app/verify/verify.page.html"),
        styles: [__webpack_require__(/*! ./verify.page.scss */ "./src/app/verify/verify.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_window_service__WEBPACK_IMPORTED_MODULE_3__["WindowService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], VerifyPage);



/***/ })

}]);
//# sourceMappingURL=verify-verify-module-es2015.js.map