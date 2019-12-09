(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          انشاء حساب\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-padding>\n  <div class=\"signin\">\n    <div class=\"header\">\n      <div class=\"logos\">\n        <img *ngIf=\"!imagecheck\" src=\"assets/imgs/logo.png\" width=\"80\">\n        <img *ngIf=\"imagecheck\" src=\"{{newUser.image}}\" style=\"width:100px; height:100px; border-radius:50%\">\n      </div>\n      <h1>انشاء حساب</h1>\n      <p>الرجاء ملئ جميع المعلومات ادناه</p>\n    </div>\n    <div class=\"main\">\n      <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"signup(f)\">\n        <!-- <div class=\"myimage\" (click)=\"takePhoto()\" *ngIf=\"!imagecheck\">\n          <div style=\"text-align: center\">\n            <ion-icon name=\"images\"></ion-icon>\n            <p>رفع صورة</p>\n          </div>\n        </div> -->\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"الاسم الاول\" type=\"text\" name=\"firstname\"\n            [(ngModel)]=\"newUser.firstname\" required>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"اسم العائلة\" type=\"text\" name=\"lastname\"\n            [(ngModel)]=\"newUser.lastname\" required>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>المحافظة</ion-label>\n          <ion-select cancelText=\"الغاء\" okText=\"اختيار\" name=\"governorate\" [(ngModel)]=\"newUser.governorate\" required>\n            <ion-select-option value=\"بغداد\">بغداد</ion-select-option>\n            <ion-select-option value=\"البصرة\">البصرة</ion-select-option>\n            <ion-select-option value=\"النجف\">النجف</ion-select-option>\n            <ion-select-option value=\"كربلاء\">كربلاء</ion-select-option>\n            <ion-select-option value=\"صلاح الدين\">صلاح الدين</ion-select-option>\n            <ion-select-option value=\"الانبار\">الانبار</ion-select-option>\n            <ion-select-option value=\"ديالى\">ديالى</ion-select-option>\n            <ion-select-option value=\"ميسان\">ميسان</ion-select-option>\n            <ion-select-option value=\"القادسية\">القادسية</ion-select-option>\n            <ion-select-option value=\"دهوك\">دهوك</ion-select-option>\n            <ion-select-option value=\"نينوى\">نينوى</ion-select-option>\n            <ion-select-option value=\"اربيل\">اربيل</ion-select-option>\n            <ion-select-option value=\"بابل\">بابل</ion-select-option>\n            <ion-select-option value=\"حلبجة\">حلبجة</ion-select-option>\n            <ion-select-option value=\"ذي قار\">ذي قار</ion-select-option>\n            <ion-select-option value=\"السليمانية\">السليمانية</ion-select-option>\n            <ion-select-option value=\"كركوك\">كركوك </ion-select-option>\n            <ion-select-option value=\"المثنى\">المثنى</ion-select-option>\n            <ion-select-option value=\"واسط\">واسط</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"البريد الالكتروني\" type=\"email\" name=\"email\"\n            [(ngModel)]=\"newUser.email\" email>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"كلمة المرور\" [type]=\"show ? 'text' : 'password'\" name=\"password\"\n            [(ngModel)]=\"newUser.password\" required minlength=\"8\"></ion-input>\n        </ion-item>\n\n        <div class=\"form-check\" style=\"margin:5px\">\n          <label class=\"form-check-label\">\n            <ion-checkbox color=\"danger\" (click)=\"password()\"></ion-checkbox>\n            اظهار كلمة المرور\n          </label>\n        </div>\n\n        <ion-button color=\"danger\" type=\"submit\" [disabled]=\"!f.valid\">انشاء حساب</ion-button>\n\n        <!--<ion-button shape=\"round\" (click)=\"logginFacebook()\">\n            تسجيل الدخول باستخدام الفيسبوك\n            <ion-icon style=\"padding:2px\" name=\"logo-facebook\"></ion-icon>\n          </ion-button> -->\n\n      </form>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title,\nion-content {\n  font-family: \"Cairo\", sans-serif;\n  direction: rtl;\n}\n\nmat-label {\n  font-family: \"Cairo\", sans-serif;\n  text-align: left !important;\n}\n\nmat-form-field[_ngcontent-qrm-c3] {\n  direction: rtl;\n  text-align: right;\n}\n\n.mat-form-field {\n  text-align: right !important;\n}\n\nmat-form-field {\n  width: 95%;\n  direction: rtl;\n  margin-right: 15px;\n}\n\nimg {\n  width: 150px;\n  height: 150px;\n}\n\n.signin {\n  text-align: center;\n}\n\n.header {\n  text-align: center;\n}\n\n.logos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-input {\n  font-family: \"Cairo\", sans-serif;\n}\n\n.myimage {\n  height: 80px;\n  direction: rtl;\n  font-family: \"Cairo\", sans-serif;\n  padding: 12px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #3880ff;\n  width: 100%;\n  border: 1px dashed #CCC;\n  border-radius: 3px;\n  margin-bottom: 8px;\n  font-size: 20px;\n}\n\n.myimage p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGdDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUsXG5pb24tY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gICAgZGlyZWN0aW9uOiBydGw7XG59XG5cbm1hdC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50XG59XG5cbm1hdC1mb3JtLWZpZWxkW19uZ2NvbnRlbnQtcXJtLWMzXSB7XG4gICAgZGlyZWN0aW9uOiBydGw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZGlyZWN0aW9uOiBydGw7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uc2lnbmluIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4ubG9nb3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG59XG5cbi5teWltYWdlIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgZGlyZWN0aW9uOiBydGw7XG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzODgwZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNDQ0M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5teWltYWdlIHAge1xuICAgIG1hcmdpbjogMDtcbn0iLCJpb24tdGl0bGUsXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG5tYXQtbGFiZWwge1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkW19uZ2NvbnRlbnQtcXJtLWMzXSB7XG4gIGRpcmVjdGlvbjogcnRsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogOTUlO1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5zaWduaW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubXlpbWFnZSB7XG4gIGhlaWdodDogODBweDtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzM4ODBmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjQ0NDO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubXlpbWFnZSBwIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");









let SignupPage = class SignupPage {
    constructor(newUser, data, storage, fireAuth, fire, loading, router) {
        this.newUser = newUser;
        this.data = data;
        this.storage = storage;
        this.fireAuth = fireAuth;
        this.fire = fire;
        this.loading = loading;
        this.router = router;
        this.imagecheck = false;
        this.show = false;
    }
    password() {
        this.show = !this.show;
    }
    signup(f) {
        this.newUser.email = this.makeid(6) + Date.now().toString() + '@' + this.makeid(5) + '.com';
        if (this.newUser.image == null || this.newUser.image == undefined) {
            this.newUser.image = 'assets/imgs/logo.png';
            this.newUser.imgname = null;
        }
        else if (this.newUser.email == undefined || this.newUser.email == null) {
        }
        console.log(this.newUser);
        this.data.saveData(this.newUser);
        this.router.navigate(['/verify', 'no']);
    }
    back() {
        if (this.newUser.image && this.imagecheck)
            this.fire.deleteStorageFile('profiles', this.newUser.imgname);
        this.router.navigate(['/home']);
    }
    dataURLtoBlob(myURL) {
        let binary = atob(myURL.split(',')[1]);
        let array = [];
        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    onLoginError(err) {
        this.fire.presentToast("حصل خطا اثناء التسجيل!");
        console.log(err);
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
SignupPage.ctorParameters = () => [
    { type: _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
        styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map