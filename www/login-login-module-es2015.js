(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          تسجيل الدخول\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"signin\">\n    <div class=\"header\">\n      <div class=\"logos\">\n        <img src=\"assets/imgs/logo.png\" width=\"80\">\n      </div>\n      <h1>تسجيل الدخول</h1>\n      <p>قم بتسجيل الدخول لاستخدام التطبيق</p>\n    </div>\n    <div class=\"main\">\n      <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"signIn(f)\">\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"البريد الالكتروني\" type=\"email\" name=\"email\" ngModel required\n            email>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"كلمة المرور\" [type]=\"show ? 'text' : 'password'\" name=\"password\"\n            ngModel minlength=\"8\" required></ion-input>\n        </ion-item>\n        <div class=\"form-check\" style=\"margin:5px\">\n          <label class=\"form-check-label\">\n            <ion-checkbox color=\"danger\" (click)=\"password()\"></ion-checkbox>\n            اظهار كلمة المرور\n          </label>\n        </div>\n        <ion-button color=\"danger\" type=\"submit\" [disabled]=\"!f.valid\">تسجيل الدخول</ion-button>\n        <ion-button shape=\"round\" (click)=\"logginFacebook()\">\n          تسجيل الدخول باستخدام الفيسبوك\n          <ion-icon style=\"padding:2px\" name=\"logo-facebook\"></ion-icon>\n        </ion-button>\n      </form>\n      <a style=\"color: #c0101e; text-decoration: none; font-size: 16px; margin: 10px\" [routerLink]=\"['/signup']\"\n        routerLinkActive=\"router-link-active\">انشاء حساب؟</a>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title,\nion-content {\n  font-family: \"Cairo\", sans-serif;\n  direction: rtl;\n}\n\nimg {\n  width: 150px;\n  height: 150px;\n}\n\n.signin {\n  text-align: center;\n}\n\n.header {\n  text-align: center;\n}\n\n.logos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-input {\n  font-family: \"Cairo\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksZ0NBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUsXG5pb24tY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gICAgZGlyZWN0aW9uOiBydGw7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5zaWduaW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5sb2dvcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcbn0iLCJpb24tdGl0bGUsXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5zaWduaW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");









let LoginPage = class LoginPage {
    constructor(fire, newUser, storage, fireAuth, loader, data, router) {
        this.fire = fire;
        this.newUser = newUser;
        this.storage = storage;
        this.fireAuth = fireAuth;
        this.loader = loader;
        this.data = data;
        this.router = router;
        this.show = false;
    }
    password() {
        this.show = !this.show;
    }
    signIn(f) {
        console.dir(f);
        this.loader.createLoading("الرجاء الانتظار").then(res => {
            this.loader.show();
        });
        this.fire.login(f.value.email, f.value.password).then(data => {
            this.storage.set('userid', data.user.uid);
            this.loader.dismiss();
            this.fire.presentToast("تم تسجيل الدخول بنجاح");
            this.back();
        }, (err) => {
            this.loader.dismiss();
            if (err.message == "The password is invalid or the user does not have a password.") {
                this.fire.presentToast("كلمة مرور غير صحيحة");
            }
            if (err.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                this.fire.presentToast("بريد الكتروني غير موجود");
            }
            if (err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
                this.fire.presentToast("يرجى التحقق من الاتصال بلشبكة");
            }
        });
        f.resetForm();
    }
    // import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
    // logginFacebook() {
    //   this.fb.login(['email'])
    //     .then((response: FacebookLoginResponse) => {
    //       this.onLoginSuccess(response);
    //       console.log(response.authResponse.accessToken);
    //     }).catch((error) => {
    //       console.log(error)
    //       this.onLoginError(error);
    //     });
    // }
    // async onLoginSuccess(res: FacebookLoginResponse) {
    //   const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    //   await this.fireAuth.auth.signInWithCredential(credential)
    //     .then((response) => {
    //       let info = JSON.parse(JSON.stringify(response));
    //       this.storage.set('userid', info.user.id);
    //       this.checkAccount(info);
    //     })
    // }
    onLoginError(err) {
        this.fire.presentToast("حصل خطا اثناء التسجيل!");
        console.log(err);
    }
    back() {
        this.router.navigate(['/home']);
    }
    checkAccount(info) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (info.user.uid) {
                let user = yield this.fire.getRealTimeData('users', info.user.uid);
                yield user.subscribe(data => {
                    if (data.length == 0 && data != null && data != undefined) {
                        // user data from facebook
                        this.newUser.id = info.user.uid;
                        this.newUser.firstname = info.additionalUserInfo.profile.first_name;
                        this.newUser.lastname = info.additionalUserInfo.profile.last_name;
                        this.newUser.email = info.user.email;
                        this.newUser.phone = info.user.phoneNumber;
                        this.newUser.image = info.user.photoURL + '?type=large&width=720&height=720';
                        this.fire.presentToast("يرجى تاكيد رقم الهاتف");
                        this.data.saveData(this.newUser);
                        this.router.navigate(['/verify', 'yes']);
                    }
                    else {
                        this.fire.presentToast("تم تسجيل الدخول بنجاح");
                        this.back();
                    }
                });
            }
            else {
                this.fire.presentToast("حصل خطا اثناء مزامنة البيانات");
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map