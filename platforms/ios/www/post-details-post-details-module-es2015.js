(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-details-post-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/post-details/post-details.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-details/post-details.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          التفاصيل\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img *ngIf=\"post.better_featured_image\" [src]=\"post.better_featured_image.source_url\">\n  <ion-item-divider no-lines color=\"danger\">{{post.date}}</ion-item-divider>\n  <div style=\"padding:10px\">\n    <h3>{{post.title.rendered}}</h3>\n    <div innerHTML=\"{{post.content.rendered}}\"></div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/post-details/post-details.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/post-details/post-details.module.ts ***!
  \*****************************************************/
/*! exports provided: PostDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsPageModule", function() { return PostDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-details.page */ "./src/app/post-details/post-details.page.ts");







const routes = [
    {
        path: '',
        component: _post_details_page__WEBPACK_IMPORTED_MODULE_6__["PostDetailsPage"]
    }
];
let PostDetailsPageModule = class PostDetailsPageModule {
};
PostDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_post_details_page__WEBPACK_IMPORTED_MODULE_6__["PostDetailsPage"]]
    })
], PostDetailsPageModule);



/***/ }),

/***/ "./src/app/post-details/post-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/post-details/post-details.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagecontainer {\n  height: 200px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: top center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Vjb250YWluZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbn0iLCIuaW1hZ2Vjb250YWluZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/post-details/post-details.page.ts":
/*!***************************************************!*\
  !*** ./src/app/post-details/post-details.page.ts ***!
  \***************************************************/
/*! exports provided: PostDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsPage", function() { return PostDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PostDetailsPage = class PostDetailsPage {
    constructor(router, data, routerParam) {
        this.router = router;
        this.data = data;
        this.routerParam = routerParam;
        this.post = {};
        this.routerParam.params.subscribe(params => {
            this.id = params['id'];
            this.name = params['name'];
        });
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(data => {
            let info = JSON.parse(JSON.stringify(data));
            console.log(info);
            this.post = info;
        });
    }
    back() {
        this.router.navigate(['/posts-by-category', this.id, this.name]);
    }
};
PostDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PostDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-details',
        template: __webpack_require__(/*! raw-loader!./post-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/post-details/post-details.page.html"),
        styles: [__webpack_require__(/*! ./post-details.page.scss */ "./src/app/post-details/post-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PostDetailsPage);



/***/ })

}]);
//# sourceMappingURL=post-details-post-details-module-es2015.js.map