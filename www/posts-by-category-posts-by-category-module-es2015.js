(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-by-category-posts-by-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/posts-by-category/posts-by-category.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts-by-category/posts-by-category.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"tit-container\">\n        <div class=\"titlee\">\n          {{name}}\n        </div>\n        <div class=\"backicon\">\n          <ion-icon name=\"arrow-round-back\" (click)=\"back()\"></ion-icon>\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div class=\"spinner\">\n    <div class=\"lds-roller\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n  <div id=\"no-items-ava\">\n    <img src=\"assets/imgs/news.svg\">\n    <p class=\"noitem\">لا يوجد عناصر</p>\n  </div>\n\n  <ion-card id=\"SHOW\" *ngFor=\"let post of posts\" (click)=\"openPostDetailPage(post)\">\n    <ion-item-divider color=\"danger\">\n      {{ post.title.rendered }}\n    </ion-item-divider>\n\n    <img *ngIf=\"post.better_featured_image\" [src]=\"post.better_featured_image.source_url\">\n    <img *ngIf=\"!post.better_featured_image\" src=\"https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif\">\n\n    <ion-card-content>\n      <div [innerHTML]=\"post.excerpt.rendered\"></div>\n    </ion-card-content>\n\n    <ion-row style=\"background-color: #eeeeee\">\n      <ion-button color=\"danger\" icon-left>\n        <small> اقرا الان </small>\n        <ion-icon name=\"glasses\"></ion-icon>\n      </ion-button>\n    </ion-row>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/posts-by-category/posts-by-category.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/posts-by-category/posts-by-category.module.ts ***!
  \***************************************************************/
/*! exports provided: PostsByCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsByCategoryPageModule", function() { return PostsByCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _posts_by_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts-by-category.page */ "./src/app/posts-by-category/posts-by-category.page.ts");







const routes = [
    {
        path: '',
        component: _posts_by_category_page__WEBPACK_IMPORTED_MODULE_6__["PostsByCategoryPage"]
    }
];
let PostsByCategoryPageModule = class PostsByCategoryPageModule {
};
PostsByCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_posts_by_category_page__WEBPACK_IMPORTED_MODULE_6__["PostsByCategoryPage"]]
    })
], PostsByCategoryPageModule);



/***/ }),

/***/ "./src/app/posts-by-category/posts-by-category.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/posts-by-category/posts-by-category.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noitem {\n  font-weight: bold;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGlhbG1vc295L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcmFtaS9taWt5YWd5L3NyYy9hcHAvcG9zdHMtYnktY2F0ZWdvcnkvcG9zdHMtYnktY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wb3N0cy1ieS1jYXRlZ29yeS9wb3N0cy1ieS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzLWJ5LWNhdGVnb3J5L3Bvc3RzLWJ5LWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAubm9pdGVtIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbjogMTBweFxuICAgIH0iLCIubm9pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/posts-by-category/posts-by-category.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/posts-by-category/posts-by-category.page.ts ***!
  \*************************************************************/
/*! exports provided: PostsByCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsByCategoryPage", function() { return PostsByCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_woo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/woo.service */ "./src/app/services/woo.service.ts");







let PostsByCategoryPage = class PostsByCategoryPage {
    constructor(data, woo, router, routerParam) {
        this.data = data;
        this.woo = woo;
        this.router = router;
        this.routerParam = routerParam;
        this.posts = [];
        this.routerParam.params.subscribe(params => {
            this.id = params['id'];
            this.name = params['name'];
        });
    }
    ngOnInit() {
        this.woo.getPostsByCategory(this.id).then(data => {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.spinner').hide();
            if (data == null || data == undefined) {
                jquery__WEBPACK_IMPORTED_MODULE_3__('#no-items-ava').show();
                jquery__WEBPACK_IMPORTED_MODULE_3__('#SHOW').hide();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_3__('#no-items-ava').hide();
                jquery__WEBPACK_IMPORTED_MODULE_3__('#SHOW').show();
            }
            this.posts = JSON.parse(JSON.stringify(data));
        });
    }
    back() {
        this.router.navigate(['/home']);
    }
    openPostDetailPage(post) {
        this.data.saveData(post);
        this.router.navigate(['/post-details', this.id, this.name]);
    }
};
PostsByCategoryPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _services_woo_service__WEBPACK_IMPORTED_MODULE_5__["WooService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PostsByCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts-by-category',
        template: __webpack_require__(/*! raw-loader!./posts-by-category.page.html */ "./node_modules/raw-loader/index.js!./src/app/posts-by-category/posts-by-category.page.html"),
        styles: [__webpack_require__(/*! ./posts-by-category.page.scss */ "./src/app/posts-by-category/posts-by-category.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_woo_service__WEBPACK_IMPORTED_MODULE_5__["WooService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], PostsByCategoryPage);



/***/ })

}]);
//# sourceMappingURL=posts-by-category-posts-by-category-module-es2015.js.map