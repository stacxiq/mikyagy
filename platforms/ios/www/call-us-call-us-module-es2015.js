(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["call-us-call-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/call-us/call-us.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/call-us/call-us.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          اتصل بنا\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-padding>\n  <ion-list>\n    <div class=\"logos\">\n      <img src=\"./assets/imgs/logo.png\" width=\"150px\">\n    </div>\n\n    <h2 style=\"color: #c0101e; text-align: center\">- معلومات التواصل -</h2>\n\n    <ion-list-header>\n      <p>\n        <ion-icon name=\"mail\"></ion-icon> البريد الالكتروني\n      </p>\n    </ion-list-header>\n\n    <ion-item (click)=\"openMail()\">\n      <p>Info@mikyagy.com</p>\n    </ion-item>\n\n    <ion-list-header>\n      <p>\n        <ion-icon name=\"call\"></ion-icon> رقم الادارة\n      </p>\n    </ion-list-header>\n\n    <ion-item (click)=\"callme('07703976225')\">\n      <p>07703976225</p>\n    </ion-item>\n\n    <ion-list-header>\n      <p>\n        <ion-icon name=\"call\"></ion-icon> مركز خدمه الزبائن\n      </p>\n    </ion-list-header>\n\n    <ion-item (click)=\"callme('07702700856')\">\n      <p>07702700856</p>\n    </ion-item>\n\n    <ion-list-header>\n      <p>\n        <ion-icon name=\"logo-facebook\"></ion-icon> تواصل معنا عبر الفيسبوك\n      </p>\n    </ion-list-header>\n\n    <ion-item (click)=\"openUrl('facebook', 'mikyagyApp', 'https://www.facebook.com/mikyagyApp/')\">\n      <p>صفحة مكياجي</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/call-us/call-us.module.ts":
/*!*******************************************!*\
  !*** ./src/app/call-us/call-us.module.ts ***!
  \*******************************************/
/*! exports provided: CallUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPageModule", function() { return CallUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _call_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./call-us.page */ "./src/app/call-us/call-us.page.ts");







const routes = [
    {
        path: '',
        component: _call_us_page__WEBPACK_IMPORTED_MODULE_6__["CallUsPage"]
    }
];
let CallUsPageModule = class CallUsPageModule {
};
CallUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_call_us_page__WEBPACK_IMPORTED_MODULE_6__["CallUsPage"]]
    })
], CallUsPageModule);



/***/ }),

/***/ "./src/app/call-us/call-us.page.scss":
/*!*******************************************!*\
  !*** ./src/app/call-us/call-us.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title,\nion-content {\n  font-family: \"Cairo\", sans-serif;\n  direction: rtl;\n}\n\np {\n  font-size: 15px;\n}\n\nimg {\n  width: 200px;\n  height: 200px;\n}\n\n.logos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-list-header {\n  font-size: 20px;\n  color: #c0101e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvY2FsbC11cy9jYWxsLXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FsbC11cy9jYWxsLXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxnQ0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYWxsLXVzL2NhbGwtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlLFxuaW9uLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xuICAgIGRpcmVjdGlvbjogcnRsO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5sb2dvcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNjMDEwMWU7XG59IiwiaW9uLXRpdGxlLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ubG9nb3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2MwMTAxZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/call-us/call-us.page.ts":
/*!*****************************************!*\
  !*** ./src/app/call-us/call-us.page.ts ***!
  \*****************************************/
/*! exports provided: CallUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUsPage", function() { return CallUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/app-availability/ngx */ "./node_modules/@ionic-native/app-availability/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let CallUsPage = class CallUsPage {
    constructor(router, platform, appAvailability, inAppBrowser) {
        this.router = router;
        this.platform = platform;
        this.appAvailability = appAvailability;
        this.inAppBrowser = inAppBrowser;
    }
    callme(num) {
        let call = new _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"]();
        call.callNumber(num, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    back() {
        this.router.navigate(['/home']);
    }
    openMail() {
        window.open('mailto:Info@mikyagy.com');
    }
    openUrl(app, name, fbUrl) {
        switch (app) {
            case 'facebook':
                this.launchApp('fb://', 'com.facebook.katana', 'fb://facewebmodal/f?href=' + fbUrl, 'https://www.facebook.com/' + name);
                break;
            case 'instagram':
                this.launchApp('instagram://', 'com.instagram.android', 'instagram://user?username=' + name, 'https://www.instagram.com/' + name);
                break;
            case 'twitter':
                this.launchApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=' + name, 'https://twitter.com/' + name);
                break;
            default:
                break;
        }
    }
    launchApp(iosApp, androidApp, appUrl, webUrl) {
        let app;
        // check if the platform is ios or android, else open the web url
        if (this.platform.is('ios')) {
            app = iosApp;
        }
        else if (this.platform.is('android')) {
            app = androidApp;
        }
        else {
            const browser = this.inAppBrowser.create(webUrl, '_system');
            return;
        }
        this.appAvailability.check(app).then(() => {
            // success callback, the app exists and we can open it
            const browser = this.inAppBrowser.create(appUrl, '_system');
        }, () => {
            // error callback, the app does not exist, open regular web url instead
            const browser = this.inAppBrowser.create(webUrl, '_system');
        });
    }
};
CallUsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_4__["AppAvailability"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
CallUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-call-us',
        template: __webpack_require__(/*! raw-loader!./call-us.page.html */ "./node_modules/raw-loader/index.js!./src/app/call-us/call-us.page.html"),
        styles: [__webpack_require__(/*! ./call-us.page.scss */ "./src/app/call-us/call-us.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_4__["AppAvailability"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])
], CallUsPage);



/***/ })

}]);
//# sourceMappingURL=call-us-call-us-module-es2015.js.map