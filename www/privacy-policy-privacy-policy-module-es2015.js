(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-policy-privacy-policy-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/privacy-policy/privacy-policy.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/privacy-policy/privacy-policy.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          سياسة الخصوصية\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/imgs/logo.png\" />\n  </div>\n  <p>\n    تلتزم شركة مكياجي بالحفاظ على البيانات الخاصة بالعملاء ( الاسم , رقم الهاتف , البريد الالكتروني , العنوان ) واية\n    بيانات اخرى يتم الحصول عليها من التطبيق بصورة سرية وعدم استعمالها لا فيما يتعلق بعمل التطبيق وعدم اطلاع اي جهة\n    خارجية عليها إلا بموافقة الزبون كما تضمن الشركة حق الزبون في طلب حذف معلوماته من قواعد بيانات الشركة للاسباب التي\n    يراها مناسبة , كما تلتزم الشركة بابلاغ الزبون باي تعديلات تحصل على سياسة الخصوصية وامن المعلومات الخاصة بها\n    كما تلتزم الشركة بان المعلومات المتحصل عليها من الزبون تستخدم في\n  </p>\n  <ul>\n    <li> فتح حساب الكتروني للزبون</li>\n    <li> انشاء سلة تسوق لتجميع مشتريات الزبون</li>\n    <li> توصيل الطلبات الى الزبون اعتماداً على عنوان سكنه او العنوان الذي يراه مناسباً </li>\n    <li> - التواصل مع الزبون فيما يخص عمل التطبيق واعلامه بالتحديثات والخصومات والقسائم الشرائية\n    </li>\n\n    <li> كما يقوم التطبيق باستخدام الكوكيز لتسهيل عملية دخول الزبائن الى التطبيق.</li>\n  </ul>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function() { return PrivacyPolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy-policy.page */ "./src/app/privacy-policy/privacy-policy.page.ts");







const routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]
    }
];
let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
    })
], PrivacyPolicyPageModule);



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title,\nion-content {\n  font-family: \"Cairo\", sans-serif;\n  direction: rtl;\n}\n\np {\n  font-size: 15px;\n}\n\nimg {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIiwic3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7O0VBRUksZ0NBQUE7RUFDQSxjQUFBO0FDQ1I7O0FERUk7RUFDSSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGlvbi10aXRsZSxcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9IiwiaW9uLXRpdGxlLFxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
  \*******************************************************/
/*! exports provided: PrivacyPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function() { return PrivacyPolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PrivacyPolicyPage = class PrivacyPolicyPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['/home']);
    }
};
PrivacyPolicyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PrivacyPolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy-policy',
        template: __webpack_require__(/*! raw-loader!./privacy-policy.page.html */ "./node_modules/raw-loader/index.js!./src/app/privacy-policy/privacy-policy.page.html"),
        styles: [__webpack_require__(/*! ./privacy-policy.page.scss */ "./src/app/privacy-policy/privacy-policy.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PrivacyPolicyPage);



/***/ })

}]);
//# sourceMappingURL=privacy-policy-privacy-policy-module-es2015.js.map