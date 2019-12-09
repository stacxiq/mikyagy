(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-edit-user-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user-edit/user-edit.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-edit/user-edit.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          تعديل حساب\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"signin\">\n    <div class=\"header\">\n      <div class=\"logos\">\n        <img src=\"{{user.image}}\" style=\"width:100px; height:100px; border-radius:50%\">\n      </div>\n      <h1>معلومات الحساب</h1>\n    </div>\n    <div class=\"main\">\n      <form role=\"form\" #f=\"ngForm\" (ngSubmit)=\"signup(f)\">\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"الاسم الاول\" type=\"text\" name=\"firstname\"\n            [(ngModel)]=\"user.firstname\" required>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"اسم العائلة\" type=\"text\" name=\"lastname\"\n            [(ngModel)]=\"user.lastname\" required>\n          </ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"الهاتف\" type=\"tel\" name=\"phone\" [(ngModel)]=\"user.phone\"\n            required>\n          </ion-input>\n        </ion-item>\n\n        <mat-form-field>\n          <mat-label class=\"form-control\">المحافظة</mat-label>\n          <select  class=\"form-control\" name=\"governorate\" style=\"text-align: right\"\n           [(ngModel)]=\"user.governorate\" matNativeControl required>\n            <option value=\"بغداد\">بغداد</option>\n            <option value=\"البصرة\">البصرة</option>\n            <option value=\"النجف\">النجف</option>\n            <option value=\"كربلاء\">كربلاء</option>\n            <option value=\"صلاح الدين\">صلاح الدين</option>\n            <option value=\"الانبار\">الانبار</option>\n            <option value=\"ديالى\">ديالى</option>\n            <option value=\"ميسان\">ميسان</option>\n            <option value=\"القادسية\">القادسية</option>\n            <option value=\"دهوك\">دهوك</option>\n            <option value=\"نينوى\">نينوى</option>\n            <option value=\"اربيل\">اربيل</option>\n            <option value=\"بابل\">بابل</option>\n            <option value=\"حلبجة\">حلبجة</option>\n            <option value=\"ذي قار\">ذي قار</option>\n            <option value=\"السليمانية\">السليمانية</option>\n            <option value=\"كركوك\">كركوك </option>\n            <option value=\"المثنى\">المثنى</option>\n            <option value=\"واسط\">واسط</option>\n          </select>\n        </mat-form-field>\n\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"المدينة\" type=\"text\" name=\"city\" [(ngModel)]=\"user.city\"\n            required>\n          </ion-input>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-input class=\"form-control\" placeholder=\"نقطة دالة\" type=\"text\" name=\"nearest_point\"\n            [(ngModel)]=\"user.nearest_point\" >\n          </ion-input>\n        </ion-item>\n        <ion-button expand=\"block\" color=\"danger\" type=\"submit\" [disabled]=\"!f.valid\">حفظ</ion-button>\n        <ion-button expand=\"block\" color=\"danger\" type=\"button\" (click)=\"back()\"> الغاء</ion-button>\n      </form>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/user-edit/user-edit.module.ts":
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.module.ts ***!
  \***********************************************/
/*! exports provided: UserEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditPageModule", function() { return UserEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit.page */ "./src/app/user-edit/user-edit.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








const routes = [
    {
        path: '',
        component: _user_edit_page__WEBPACK_IMPORTED_MODULE_6__["UserEditPage"]
    }
];
let UserEditPageModule = class UserEditPageModule {
};
UserEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_user_edit_page__WEBPACK_IMPORTED_MODULE_6__["UserEditPage"]]
    })
], UserEditPageModule);



/***/ }),

/***/ "./src/app/user-edit/user-edit.page.scss":
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title,\nion-content {\n  font-family: \"Cairo\", sans-serif;\n  direction: rtl;\n}\n\nimg {\n  width: 150px;\n  height: 150px;\n}\n\n.signin {\n  text-align: center;\n}\n\n.header {\n  text-align: center;\n}\n\n.logos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-input {\n  font-family: \"Cairo\", sans-serif;\n}\n\n.myimage {\n  height: 80px;\n  direction: rtl;\n  font-family: \"Cairo\", sans-serif;\n  padding: 12px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #3880ff;\n  width: 100%;\n  border: 1px dashed #CCC;\n  border-radius: 3px;\n  margin-bottom: 8px;\n  font-size: 20px;\n}\n\n.myimage p {\n  margin: 0;\n}\n\nmat-label {\n  font-family: \"Cairo\", sans-serif;\n  text-align: left !important;\n}\n\nmat-form-field[_ngcontent-qrm-c3] {\n  direction: rtl;\n  text-align: right;\n}\n\n.mat-form-field {\n  text-align: right !important;\n}\n\nmat-form-field {\n  width: 95%;\n  direction: rtl;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvdXNlci1lZGl0L3VzZXItZWRpdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXItZWRpdC91c2VyLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOztFQUVJLGdDQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxnQ0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksU0FBQTtBQ0FKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRENDO0VBQ0csY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSw0QkFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvdXNlci1lZGl0L3VzZXItZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10aXRsZSxcbmlvbi1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnNpZ25pbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmxvZ29zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24taW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4ubXlpbWFnZSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjMzg4MGZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjQ0NDO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubXlpbWFnZSBwIHtcbiAgICBtYXJnaW46IDA7XG59XG5tYXQtbGFiZWx7XG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50XG59XG4gbWF0LWZvcm0tZmllbGRbX25nY29udGVudC1xcm0tYzNdIHtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfSIsImlvbi10aXRsZSxcbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnNpZ25pbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ29zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5teWltYWdlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzg4MGZmO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5teWltYWdlIHAge1xuICBtYXJnaW46IDA7XG59XG5cbm1hdC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxubWF0LWZvcm0tZmllbGRbX25nY29udGVudC1xcm0tYzNdIHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA5NSU7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/user-edit/user-edit.page.ts":
/*!*********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.ts ***!
  \*********************************************/
/*! exports provided: UserEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditPage", function() { return UserEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");







let UserEditPage = class UserEditPage {
    constructor(user, data, fire, loading, routerParam, router) {
        this.user = user;
        this.data = data;
        this.fire = fire;
        this.loading = loading;
        this.routerParam = routerParam;
        this.router = router;
        this.face = false;
        this.show = false;
        this.newPhoto = false;
        this.routerParam.params.subscribe(params => {
            this.fromFacebook = params['fromfacebook'];
            this.user.governorate = 'بغداد';
        });
    }
    ngOnInit() {
        if (this.fromFacebook == "yes") {
            this.face = true;
        }
        else {
            this.face = false;
        }
        this.data.currentMessage.subscribe(data => {
            let info = JSON.parse(JSON.stringify(data));
            this.user.firstname = info.firstname;
            this.user.password = info.password;
            this.user.lastname = info.lastname;
            this.user.image = info.image;
            this.user.imgname = info.imgname;
            this.oldImageName = info.image;
            this.user.phone = info.phone;
            this.user.id = info.id;
            this.user.governorate = info.governorate;
            this.user.city = info.city;
            this.user.nearest_point = info.nearest_point;
        });
    }
    back() {
        this.router.navigate(['/account', this.user.id]);
    }
    signup(f) {
        if (this.face) {
            this.user.password = null;
            this.user.imgname = null;
            this.fire.addRealTimeData('users', this.user.id, this.user);
            this.router.navigate(['account', this.user.id]);
        }
        else {
            if (this.user.imgname == undefined) {
                this.user.imgname = null;
            }
            if (this.newPhoto && this.oldImageName != null && this.oldImageName != undefined) {
                this.fire.deleteStorageFile('profiles', this.oldImageName);
            }
            this.fire.addRealTimeData('users', this.user.id, this.user);
            this.router.navigate(['home']);
        }
    }
};
UserEditPage.ctorParameters = () => [
    { type: _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: __webpack_require__(/*! raw-loader!./user-edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/user-edit/user-edit.page.html"),
        styles: [__webpack_require__(/*! ./user-edit.page.scss */ "./src/app/user-edit/user-edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
        _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], UserEditPage);



/***/ })

}]);
//# sourceMappingURL=user-edit-user-edit-module-es2015.js.map