(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/events/events.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/events.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"tit-container\">\n                <div class=\"titlee\">\n                    قائمة الاشعارات\n                </div>\n                <div class=\"backicon\">\n                    <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n                </div>\n            </div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class=\"spinner\">\n        <div class=\"lds-roller\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    </div>\n    <div id=\"no-items-ava\">\n        <img src=\"assets/imgs/notification.svg\">\n        <p class=\"noitem\">لا يوجد عناصر</p>\n    </div>\n    <div id=\"SHOW\" *ngFor=\"let data of eventData\">\n        <ion-card>\n            <ion-item-divider class=\"divider\" color=\"light\">\n                <ion-label>{{data.title}}</ion-label>\n            </ion-item-divider>\n            <ion-card-content>{{data.content}}</ion-card-content>\n            <div class=\"datetime\">\n                <ion-label>{{data.date}}</ion-label>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/events/events.module.ts":
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/*! exports provided: EventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.page */ "./src/app/events/events.page.ts");







const routes = [
    {
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]
    }
];
let EventsPageModule = class EventsPageModule {
};
EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
    })
], EventsPageModule);



/***/ }),

/***/ "./src/app/events/events.page.scss":
/*!*****************************************!*\
  !*** ./src/app/events/events.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datetime {\n  font-size: 12px !important;\n  text-align: left !important;\n  padding: 5px;\n  font-weight: bold;\n}\n\n.divider {\n  font-weight: bold;\n}\n\n.noitem {\n  font-weight: bold;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZXRpbWV7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdmlkZXJ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cblxuLm5vaXRlbXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46MTBweFxufSIsIi5kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXZpZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub2l0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/events/events.page.ts":
/*!***************************************!*\
  !*** ./src/app/events/events.page.ts ***!
  \***************************************/
/*! exports provided: EventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPage", function() { return EventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





let EventsPage = class EventsPage {
    constructor(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
    }
    ngOnInit() {
        this.eventList = this.firebaseService.getRealTimeDataCol('notifyList');
    }
    ngAfterViewInit() {
        this.eventList.subscribe(data => {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.spinner').hide();
            if (data.length == 0) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#no-items-ava').show();
                jquery__WEBPACK_IMPORTED_MODULE_4__('#SHOW').hide();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#no-items-ava').hide();
                jquery__WEBPACK_IMPORTED_MODULE_4__('#SHOW').show();
                this.eventData = data.slice().reverse();
            }
        });
    }
    back() {
        this.router.navigate(['/home']);
    }
};
EventsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }
];
EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: __webpack_require__(/*! raw-loader!./events.page.html */ "./node_modules/raw-loader/index.js!./src/app/events/events.page.html"),
        styles: [__webpack_require__(/*! ./events.page.scss */ "./src/app/events/events.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
], EventsPage);



/***/ })

}]);
//# sourceMappingURL=events-events-module-es2015.js.map