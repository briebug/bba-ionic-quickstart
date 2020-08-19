(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/core-data/src/index.ts":
/*!******************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-data/src/index.ts ***!
  \******************************************************************************/
/*! exports provided: CoreDataModule, AuthorsService, CoursesService, LessonsService, UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_core_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core-data.module */ "../../libs/core-data/src/lib/core-data.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreDataModule", function() { return _lib_core_data_module__WEBPACK_IMPORTED_MODULE_0__["CoreDataModule"]; });

/* harmony import */ var _lib_services_authors_authors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/authors/authors.service */ "../../libs/core-data/src/lib/services/authors/authors.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthorsService", function() { return _lib_services_authors_authors_service__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"]; });

/* harmony import */ var _lib_services_courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/courses/courses.service */ "../../libs/core-data/src/lib/services/courses/courses.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return _lib_services_courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"]; });

/* harmony import */ var _lib_services_lessons_lessons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/lessons/lessons.service */ "../../libs/core-data/src/lib/services/lessons/lessons.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LessonsService", function() { return _lib_services_lessons_lessons_service__WEBPACK_IMPORTED_MODULE_3__["LessonsService"]; });

/* harmony import */ var _lib_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/users/users.service */ "../../libs/core-data/src/lib/services/users/users.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _lib_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]; });








/***/ }),

/***/ "../../libs/core-data/src/lib/core-data.module.ts":
/*!*********************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-data/src/lib/core-data.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: coreDataRoutes, CoreDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDataRoutes", function() { return coreDataRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreDataModule", function() { return CoreDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const coreDataRoutes = [];
class CoreDataModule {
}
CoreDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreDataModule });
CoreDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreDataModule_Factory(t) { return new (t || CoreDataModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreDataModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreDataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/core-data/src/lib/services/authors/authors.service.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-data/src/lib/services/authors/authors.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AuthorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsService", function() { return AuthorsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "../dashboard/src/environments/environment.ts");





class AuthorsService {
    constructor(http) {
        this.http = http;
        this.model = 'authors';
    }
    all() {
        return this.http.get(this.getUrl());
    }
    find(id) {
        return this.http.get(this.getUrlWithId(id));
    }
    create(author) {
        return this.http.post(this.getUrl(), author);
    }
    update(author) {
        return this.http.put(this.getUrlWithId(author.id), author);
    }
    delete(author) {
        return this.http.delete(this.getUrlWithId(author.id));
    }
    getUrl() {
        return `${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint}${this.model}`;
    }
    getUrlWithId(id) {
        return `${this.getUrl()}/${id}`;
    }
}
AuthorsService.ɵfac = function AuthorsService_Factory(t) { return new (t || AuthorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorsService, factory: AuthorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "../../libs/core-data/src/lib/services/courses/courses.service.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-data/src/lib/services/courses/courses.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "../dashboard/src/environments/environment.ts");





class CoursesService {
    constructor(http) {
        this.http = http;
        this.model = 'courses';
    }
    all() {
        return this.http.get(this.getUrl());
    }
    find(id) {
        return this.http.get(this.getUrlWithId(id));
    }
    create(course) {
        return this.http.post(this.getUrl(), course);
    }
    update(course) {
        return this.http.put(this.getUrlWithId(course.id), course);
    }
    delete(course) {
        return this.http.delete(this.getUrlWithId(course.id));
    }
    getUrl() {
        return `${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint}${this.model}`;
    }
    getUrlWithId(id) {
        return `${this.getUrl()}/${id}`;
    }
}
CoursesService.ɵfac = function CoursesService_Factory(t) { return new (t || CoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CoursesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CoursesService, factory: CoursesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoursesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "../../libs/core-data/src/lib/services/lessons/lessons.service.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-data/src/lib/services/lessons/lessons.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LessonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsService", function() { return LessonsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "../dashboard/src/environments/environment.ts");





class LessonsService {
    constructor(http) {
        this.http = http;
        this.model = 'lessons';
    }
    all() {
        return this.http.get(this.getUrl());
    }
    find(id) {
        return this.http.get(this.getUrlWithId(id));
    }
    create(lesson) {
        return this.http.post(this.getUrl(), lesson);
    }
    update(lesson) {
        return this.http.put(this.getUrlWithId(lesson.id), lesson);
    }
    delete(lesson) {
        return this.http.delete(this.getUrlWithId(lesson.id));
    }
    getUrl() {
        return `${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint}${this.model}`;
    }
    getUrlWithId(id) {
        return `${this.getUrl()}/${id}`;
    }
}
LessonsService.ɵfac = function LessonsService_Factory(t) { return new (t || LessonsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LessonsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LessonsService, factory: LessonsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessonsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "../../libs/core-data/src/lib/services/users/users.service.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-data/src/lib/services/users/users.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "../dashboard/src/environments/environment.ts");





class UsersService {
    constructor(http) {
        this.http = http;
        this.model = 'users';
    }
    all() {
        return this.http.get(this.getUrl());
    }
    find(id) {
        return this.http.get(this.getUrlWithId(id));
    }
    create(user) {
        return this.http.post(this.getUrl(), user);
    }
    update(user) {
        return this.http.put(this.getUrlWithId(user.id), user);
    }
    delete(user) {
        return this.http.delete(this.getUrlWithId(user.id));
    }
    getUrl() {
        return `${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint}${this.model}`;
    }
    getUrlWithId(id) {
        return `${this.getUrl()}/${id}`;
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "../../libs/core-state/src/index.ts":
/*!*******************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/index.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/users/users.actions */ "../../libs/core-state/src/lib/users/users.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSelectedUser", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["resetSelectedUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetUsers", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["resetUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["selectUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadUsers", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["loadUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadUsersSuccess", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["loadUsersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadUsersFailure", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["loadUsersFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["loadUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadUserSuccess", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["loadUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadUserFailure", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["loadUserFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["createUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUserSuccess", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["createUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUserFailure", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["createUserFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["updateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserSuccess", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["updateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserFailure", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["updateUserFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["deleteUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUserCancelled", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["deleteUserCancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUserSuccess", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["deleteUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUserFailure", function() { return _lib_users_users_actions__WEBPACK_IMPORTED_MODULE_0__["deleteUserFailure"]; });

/* harmony import */ var _lib_users_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/users/users.reducer */ "../../libs/core-state/src/lib/users/users.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS_FEATURE_KEY", function() { return _lib_users_users_reducer__WEBPACK_IMPORTED_MODULE_1__["USERS_FEATURE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersAdapter", function() { return _lib_users_users_reducer__WEBPACK_IMPORTED_MODULE_1__["usersAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialUsersState", function() { return _lib_users_users_reducer__WEBPACK_IMPORTED_MODULE_1__["initialUsersState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersReducer", function() { return _lib_users_users_reducer__WEBPACK_IMPORTED_MODULE_1__["usersReducer"]; });

/* harmony import */ var _lib_users_users_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/users/users.selectors */ "../../libs/core-state/src/lib/users/users.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsersState", function() { return _lib_users_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getUsersState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsersLoaded", function() { return _lib_users_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getUsersLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsersError", function() { return _lib_users_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getUsersError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return _lib_users_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getAllUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsersEntities", function() { return _lib_users_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getUsersEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedUserId", function() { return _lib_users_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedUserId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedUser", function() { return _lib_users_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedUser"]; });

/* harmony import */ var _lib_users_users_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/users/users.models */ "../../libs/core-state/src/lib/users/users.models.ts");
/* harmony import */ var _lib_users_users_models__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_users_users_models__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_users_users_models__WEBPACK_IMPORTED_MODULE_3__) if(["resetSelectedUser","resetUsers","selectUser","loadUsers","loadUsersSuccess","loadUsersFailure","loadUser","loadUserSuccess","loadUserFailure","createUser","createUserSuccess","createUserFailure","updateUser","updateUserSuccess","updateUserFailure","deleteUser","deleteUserCancelled","deleteUserSuccess","deleteUserFailure","USERS_FEATURE_KEY","usersAdapter","initialUsersState","usersReducer","getUsersState","getUsersLoaded","getUsersError","getAllUsers","getUsersEntities","getSelectedUserId","getSelectedUser","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_users_users_models__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _lib_users_users_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/users/users.facade */ "../../libs/core-state/src/lib/users/users.facade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersFacade", function() { return _lib_users_users_facade__WEBPACK_IMPORTED_MODULE_4__["UsersFacade"]; });

/* harmony import */ var _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/lessons/lessons.actions */ "../../libs/core-state/src/lib/lessons/lessons.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSelectedLesson", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["resetSelectedLesson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetLessons", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["resetLessons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectLesson", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["selectLesson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadLessons", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["loadLessons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadLessonsSuccess", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["loadLessonsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadLessonsFailure", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["loadLessonsFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadLesson", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["loadLesson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadLessonSuccess", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["loadLessonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadLessonFailure", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["loadLessonFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLesson", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["createLesson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLessonSuccess", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["createLessonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLessonFailure", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["createLessonFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLesson", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["updateLesson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLessonSuccess", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["updateLessonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLessonFailure", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["updateLessonFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteLesson", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["deleteLesson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteLessonCancelled", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["deleteLessonCancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteLessonSuccess", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["deleteLessonSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteLessonFailure", function() { return _lib_lessons_lessons_actions__WEBPACK_IMPORTED_MODULE_5__["deleteLessonFailure"]; });

/* harmony import */ var _lib_lessons_lessons_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/lessons/lessons.reducer */ "../../libs/core-state/src/lib/lessons/lessons.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LESSONS_FEATURE_KEY", function() { return _lib_lessons_lessons_reducer__WEBPACK_IMPORTED_MODULE_6__["LESSONS_FEATURE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lessonsAdapter", function() { return _lib_lessons_lessons_reducer__WEBPACK_IMPORTED_MODULE_6__["lessonsAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialLessonsState", function() { return _lib_lessons_lessons_reducer__WEBPACK_IMPORTED_MODULE_6__["initialLessonsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lessonsReducer", function() { return _lib_lessons_lessons_reducer__WEBPACK_IMPORTED_MODULE_6__["lessonsReducer"]; });

/* harmony import */ var _lib_lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/lessons/lessons.selectors */ "../../libs/core-state/src/lib/lessons/lessons.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLessonsState", function() { return _lib_lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_7__["getLessonsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLessonsLoaded", function() { return _lib_lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_7__["getLessonsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLessonsError", function() { return _lib_lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_7__["getLessonsError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllLessons", function() { return _lib_lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_7__["getAllLessons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLessonsEntities", function() { return _lib_lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_7__["getLessonsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedLessonId", function() { return _lib_lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_7__["getSelectedLessonId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedLesson", function() { return _lib_lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_7__["getSelectedLesson"]; });

/* harmony import */ var _lib_lessons_lessons_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/lessons/lessons.models */ "../../libs/core-state/src/lib/lessons/lessons.models.ts");
/* harmony import */ var _lib_lessons_lessons_models__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_lessons_lessons_models__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_lessons_lessons_models__WEBPACK_IMPORTED_MODULE_8__) if(["resetSelectedUser","resetUsers","selectUser","loadUsers","loadUsersSuccess","loadUsersFailure","loadUser","loadUserSuccess","loadUserFailure","createUser","createUserSuccess","createUserFailure","updateUser","updateUserSuccess","updateUserFailure","deleteUser","deleteUserCancelled","deleteUserSuccess","deleteUserFailure","USERS_FEATURE_KEY","usersAdapter","initialUsersState","usersReducer","getUsersState","getUsersLoaded","getUsersError","getAllUsers","getUsersEntities","getSelectedUserId","getSelectedUser","UsersFacade","resetSelectedLesson","resetLessons","selectLesson","loadLessons","loadLessonsSuccess","loadLessonsFailure","loadLesson","loadLessonSuccess","loadLessonFailure","createLesson","createLessonSuccess","createLessonFailure","updateLesson","updateLessonSuccess","updateLessonFailure","deleteLesson","deleteLessonCancelled","deleteLessonSuccess","deleteLessonFailure","LESSONS_FEATURE_KEY","lessonsAdapter","initialLessonsState","lessonsReducer","getLessonsState","getLessonsLoaded","getLessonsError","getAllLessons","getLessonsEntities","getSelectedLessonId","getSelectedLesson","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_lessons_lessons_models__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _lib_lessons_lessons_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/lessons/lessons.facade */ "../../libs/core-state/src/lib/lessons/lessons.facade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LessonsFacade", function() { return _lib_lessons_lessons_facade__WEBPACK_IMPORTED_MODULE_9__["LessonsFacade"]; });

/* harmony import */ var _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/courses/courses.actions */ "../../libs/core-state/src/lib/courses/courses.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSelectedCourse", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["resetSelectedCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetCourses", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["resetCourses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCourse", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["selectCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCourses", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["loadCourses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCoursesSuccess", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["loadCoursesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCoursesFailure", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["loadCoursesFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCourse", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["loadCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCourseSuccess", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["loadCourseSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCourseFailure", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["loadCourseFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCourse", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["createCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCourseSuccess", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["createCourseSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCourseFailure", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["createCourseFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCourse", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["updateCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCourseSuccess", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["updateCourseSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCourseFailure", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["updateCourseFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCourse", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["deleteCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCourseCancelled", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["deleteCourseCancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCourseSuccess", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["deleteCourseSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCourseFailure", function() { return _lib_courses_courses_actions__WEBPACK_IMPORTED_MODULE_10__["deleteCourseFailure"]; });

/* harmony import */ var _lib_courses_courses_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/courses/courses.reducer */ "../../libs/core-state/src/lib/courses/courses.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COURSES_FEATURE_KEY", function() { return _lib_courses_courses_reducer__WEBPACK_IMPORTED_MODULE_11__["COURSES_FEATURE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coursesAdapter", function() { return _lib_courses_courses_reducer__WEBPACK_IMPORTED_MODULE_11__["coursesAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialCoursesState", function() { return _lib_courses_courses_reducer__WEBPACK_IMPORTED_MODULE_11__["initialCoursesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coursesReducer", function() { return _lib_courses_courses_reducer__WEBPACK_IMPORTED_MODULE_11__["coursesReducer"]; });

/* harmony import */ var _lib_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/courses/courses.selectors */ "../../libs/core-state/src/lib/courses/courses.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCoursesState", function() { return _lib_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_12__["getCoursesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCoursesLoaded", function() { return _lib_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_12__["getCoursesLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCoursesError", function() { return _lib_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_12__["getCoursesError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllCourses", function() { return _lib_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_12__["getAllCourses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCoursesEntities", function() { return _lib_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_12__["getCoursesEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedCourseId", function() { return _lib_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_12__["getSelectedCourseId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedCourse", function() { return _lib_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_12__["getSelectedCourse"]; });

/* harmony import */ var _lib_courses_courses_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/courses/courses.models */ "../../libs/core-state/src/lib/courses/courses.models.ts");
/* harmony import */ var _lib_courses_courses_models__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_lib_courses_courses_models__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_courses_courses_models__WEBPACK_IMPORTED_MODULE_13__) if(["resetSelectedUser","resetUsers","selectUser","loadUsers","loadUsersSuccess","loadUsersFailure","loadUser","loadUserSuccess","loadUserFailure","createUser","createUserSuccess","createUserFailure","updateUser","updateUserSuccess","updateUserFailure","deleteUser","deleteUserCancelled","deleteUserSuccess","deleteUserFailure","USERS_FEATURE_KEY","usersAdapter","initialUsersState","usersReducer","getUsersState","getUsersLoaded","getUsersError","getAllUsers","getUsersEntities","getSelectedUserId","getSelectedUser","UsersFacade","resetSelectedLesson","resetLessons","selectLesson","loadLessons","loadLessonsSuccess","loadLessonsFailure","loadLesson","loadLessonSuccess","loadLessonFailure","createLesson","createLessonSuccess","createLessonFailure","updateLesson","updateLessonSuccess","updateLessonFailure","deleteLesson","deleteLessonCancelled","deleteLessonSuccess","deleteLessonFailure","LESSONS_FEATURE_KEY","lessonsAdapter","initialLessonsState","lessonsReducer","getLessonsState","getLessonsLoaded","getLessonsError","getAllLessons","getLessonsEntities","getSelectedLessonId","getSelectedLesson","LessonsFacade","resetSelectedCourse","resetCourses","selectCourse","loadCourses","loadCoursesSuccess","loadCoursesFailure","loadCourse","loadCourseSuccess","loadCourseFailure","createCourse","createCourseSuccess","createCourseFailure","updateCourse","updateCourseSuccess","updateCourseFailure","deleteCourse","deleteCourseCancelled","deleteCourseSuccess","deleteCourseFailure","COURSES_FEATURE_KEY","coursesAdapter","initialCoursesState","coursesReducer","getCoursesState","getCoursesLoaded","getCoursesError","getAllCourses","getCoursesEntities","getSelectedCourseId","getSelectedCourse","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_courses_courses_models__WEBPACK_IMPORTED_MODULE_13__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _lib_courses_courses_facade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/courses/courses.facade */ "../../libs/core-state/src/lib/courses/courses.facade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoursesFacade", function() { return _lib_courses_courses_facade__WEBPACK_IMPORTED_MODULE_14__["CoursesFacade"]; });

/* harmony import */ var _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/authors/authors.actions */ "../../libs/core-state/src/lib/authors/authors.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSelectedAuthor", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["resetSelectedAuthor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetAuthors", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["resetAuthors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAuthor", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["selectAuthor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadAuthors", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["loadAuthors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadAuthorsSuccess", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["loadAuthorsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadAuthorsFailure", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["loadAuthorsFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadAuthor", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["loadAuthor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadAuthorSuccess", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["loadAuthorSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadAuthorFailure", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["loadAuthorFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAuthor", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["createAuthor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAuthorSuccess", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["createAuthorSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAuthorFailure", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["createAuthorFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateAuthor", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["updateAuthor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateAuthorSuccess", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["updateAuthorSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateAuthorFailure", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["updateAuthorFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteAuthor", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["deleteAuthor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteAuthorCancelled", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["deleteAuthorCancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteAuthorSuccess", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["deleteAuthorSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteAuthorFailure", function() { return _lib_authors_authors_actions__WEBPACK_IMPORTED_MODULE_15__["deleteAuthorFailure"]; });

/* harmony import */ var _lib_authors_authors_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/authors/authors.reducer */ "../../libs/core-state/src/lib/authors/authors.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AUTHORS_FEATURE_KEY", function() { return _lib_authors_authors_reducer__WEBPACK_IMPORTED_MODULE_16__["AUTHORS_FEATURE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorsAdapter", function() { return _lib_authors_authors_reducer__WEBPACK_IMPORTED_MODULE_16__["authorsAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialAuthorsState", function() { return _lib_authors_authors_reducer__WEBPACK_IMPORTED_MODULE_16__["initialAuthorsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorsReducer", function() { return _lib_authors_authors_reducer__WEBPACK_IMPORTED_MODULE_16__["authorsReducer"]; });

/* harmony import */ var _lib_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/authors/authors.selectors */ "../../libs/core-state/src/lib/authors/authors.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthorsState", function() { return _lib_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_17__["getAuthorsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthorsLoaded", function() { return _lib_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_17__["getAuthorsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthorsError", function() { return _lib_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_17__["getAuthorsError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllAuthors", function() { return _lib_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_17__["getAllAuthors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuthorsEntities", function() { return _lib_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_17__["getAuthorsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedAuthorId", function() { return _lib_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_17__["getSelectedAuthorId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedAuthor", function() { return _lib_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_17__["getSelectedAuthor"]; });

/* harmony import */ var _lib_authors_authors_models__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/authors/authors.models */ "../../libs/core-state/src/lib/authors/authors.models.ts");
/* harmony import */ var _lib_authors_authors_models__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_lib_authors_authors_models__WEBPACK_IMPORTED_MODULE_18__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_authors_authors_models__WEBPACK_IMPORTED_MODULE_18__) if(["resetSelectedUser","resetUsers","selectUser","loadUsers","loadUsersSuccess","loadUsersFailure","loadUser","loadUserSuccess","loadUserFailure","createUser","createUserSuccess","createUserFailure","updateUser","updateUserSuccess","updateUserFailure","deleteUser","deleteUserCancelled","deleteUserSuccess","deleteUserFailure","USERS_FEATURE_KEY","usersAdapter","initialUsersState","usersReducer","getUsersState","getUsersLoaded","getUsersError","getAllUsers","getUsersEntities","getSelectedUserId","getSelectedUser","UsersFacade","resetSelectedLesson","resetLessons","selectLesson","loadLessons","loadLessonsSuccess","loadLessonsFailure","loadLesson","loadLessonSuccess","loadLessonFailure","createLesson","createLessonSuccess","createLessonFailure","updateLesson","updateLessonSuccess","updateLessonFailure","deleteLesson","deleteLessonCancelled","deleteLessonSuccess","deleteLessonFailure","LESSONS_FEATURE_KEY","lessonsAdapter","initialLessonsState","lessonsReducer","getLessonsState","getLessonsLoaded","getLessonsError","getAllLessons","getLessonsEntities","getSelectedLessonId","getSelectedLesson","LessonsFacade","resetSelectedCourse","resetCourses","selectCourse","loadCourses","loadCoursesSuccess","loadCoursesFailure","loadCourse","loadCourseSuccess","loadCourseFailure","createCourse","createCourseSuccess","createCourseFailure","updateCourse","updateCourseSuccess","updateCourseFailure","deleteCourse","deleteCourseCancelled","deleteCourseSuccess","deleteCourseFailure","COURSES_FEATURE_KEY","coursesAdapter","initialCoursesState","coursesReducer","getCoursesState","getCoursesLoaded","getCoursesError","getAllCourses","getCoursesEntities","getSelectedCourseId","getSelectedCourse","CoursesFacade","resetSelectedAuthor","resetAuthors","selectAuthor","loadAuthors","loadAuthorsSuccess","loadAuthorsFailure","loadAuthor","loadAuthorSuccess","loadAuthorFailure","createAuthor","createAuthorSuccess","createAuthorFailure","updateAuthor","updateAuthorSuccess","updateAuthorFailure","deleteAuthor","deleteAuthorCancelled","deleteAuthorSuccess","deleteAuthorFailure","AUTHORS_FEATURE_KEY","authorsAdapter","initialAuthorsState","authorsReducer","getAuthorsState","getAuthorsLoaded","getAuthorsError","getAllAuthors","getAuthorsEntities","getSelectedAuthorId","getSelectedAuthor","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_authors_authors_models__WEBPACK_IMPORTED_MODULE_18__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _lib_authors_authors_facade__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/authors/authors.facade */ "../../libs/core-state/src/lib/authors/authors.facade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthorsFacade", function() { return _lib_authors_authors_facade__WEBPACK_IMPORTED_MODULE_19__["AuthorsFacade"]; });

/* harmony import */ var _lib_core_state_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/core-state.module */ "../../libs/core-state/src/lib/core-state.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreStateModule", function() { return _lib_core_state_module__WEBPACK_IMPORTED_MODULE_20__["CoreStateModule"]; });
























/***/ }),

/***/ "../../libs/core-state/src/lib/authors/authors.actions.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/authors/authors.actions.ts ***!
  \*****************************************************************************************************/
/*! exports provided: resetSelectedAuthor, resetAuthors, selectAuthor, loadAuthors, loadAuthorsSuccess, loadAuthorsFailure, loadAuthor, loadAuthorSuccess, loadAuthorFailure, createAuthor, createAuthorSuccess, createAuthorFailure, updateAuthor, updateAuthorSuccess, updateAuthorFailure, deleteAuthor, deleteAuthorCancelled, deleteAuthorSuccess, deleteAuthorFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSelectedAuthor", function() { return resetSelectedAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAuthors", function() { return resetAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthor", function() { return selectAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthors", function() { return loadAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthorsSuccess", function() { return loadAuthorsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthorsFailure", function() { return loadAuthorsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthor", function() { return loadAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthorSuccess", function() { return loadAuthorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAuthorFailure", function() { return loadAuthorFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthor", function() { return createAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthorSuccess", function() { return createAuthorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthorFailure", function() { return createAuthorFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAuthor", function() { return updateAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAuthorSuccess", function() { return updateAuthorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAuthorFailure", function() { return updateAuthorFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAuthor", function() { return deleteAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAuthorCancelled", function() { return deleteAuthorCancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAuthorSuccess", function() { return deleteAuthorSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAuthorFailure", function() { return deleteAuthorFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const resetSelectedAuthor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Reset Selected Author');
const resetAuthors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Reset Authors');
// Select Author
const selectAuthor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Select Author', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Load Authors
const loadAuthors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Load Authors');
const loadAuthorsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Load Authors Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadAuthorsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Load Authors Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Load Author
const loadAuthor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Load Author', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadAuthorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Load Author Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadAuthorFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Load Author Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Create Author
const createAuthor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Create Author', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createAuthorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Create Author Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createAuthorFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Create Author Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Update Author
const updateAuthor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Update Author', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateAuthorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Update Author Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateAuthorFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Update Author Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Delete Author
const deleteAuthor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Delete Author', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteAuthorCancelled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Delete Author Cancelled');
const deleteAuthorSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Delete Author Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteAuthorFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Authors] Delete Author Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "../../libs/core-state/src/lib/authors/authors.effects.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/authors/authors.effects.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AuthorsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsEffects", function() { return AuthorsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bba_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bba/core-data */ "../../libs/core-data/src/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _nrwl_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nrwl/angular */ "../../node_modules/@nrwl/angular/__ivy_ngcc__/fesm2015/nrwl-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _authors_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authors.actions */ "../../libs/core-state/src/lib/authors/authors.actions.ts");










class AuthorsEffects {
    constructor(actions$, authorsService) {
        this.actions$ = actions$;
        this.authorsService = authorsService;
        this.loadAuthors$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_authors_actions__WEBPACK_IMPORTED_MODULE_6__["loadAuthors"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            run: (action) => this.authorsService
                .all()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((authors) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["loadAuthorsSuccess"]({ authors }))),
            onError: (action, error) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["loadAuthorsFailure"]({ error }),
        }));
        this.loadAuthor$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_authors_actions__WEBPACK_IMPORTED_MODULE_6__["loadAuthor"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            run: (action) => this.authorsService
                .find(action.authorId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((author) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["loadAuthorSuccess"]({ author }))),
            onError: (action, error) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["loadAuthorFailure"]({ error }),
        }));
        this.createAuthor$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_authors_actions__WEBPACK_IMPORTED_MODULE_6__["createAuthor"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.authorsService
                .create(action.author)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((author) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["createAuthorSuccess"]({ author }))),
            onError: (action, error) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["createAuthorFailure"]({ error }),
        }));
        this.updateAuthor$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_authors_actions__WEBPACK_IMPORTED_MODULE_6__["updateAuthor"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.authorsService
                .update(action.author)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((author) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["updateAuthorSuccess"]({ author }))),
            onError: (action, error) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["updateAuthorFailure"]({ error }),
        }));
        this.deleteAuthor$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_authors_actions__WEBPACK_IMPORTED_MODULE_6__["deleteAuthor"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.authorsService
                .delete(action.author)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((author) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["deleteAuthorSuccess"]({ author }))),
            onError: (action, error) => _authors_actions__WEBPACK_IMPORTED_MODULE_6__["deleteAuthorFailure"]({ error }),
        }));
    }
}
AuthorsEffects.ɵfac = function AuthorsEffects_Factory(t) { return new (t || AuthorsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_bba_core_data__WEBPACK_IMPORTED_MODULE_2__["AuthorsService"])); };
AuthorsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorsEffects, factory: AuthorsEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AuthorsEffects.prototype, "loadAuthors$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AuthorsEffects.prototype, "loadAuthor$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AuthorsEffects.prototype, "createAuthor$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AuthorsEffects.prototype, "updateAuthor$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AuthorsEffects.prototype, "deleteAuthor$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthorsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _bba_core_data__WEBPACK_IMPORTED_MODULE_2__["AuthorsService"] }]; }, { loadAuthors$: [], loadAuthor$: [], createAuthor$: [], updateAuthor$: [], deleteAuthor$: [] }); })();


/***/ }),

/***/ "../../libs/core-state/src/lib/authors/authors.facade.ts":
/*!****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/authors/authors.facade.ts ***!
  \****************************************************************************************************/
/*! exports provided: AuthorsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsFacade", function() { return AuthorsFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "../../libs/core-state/src/lib/index.ts");
/* harmony import */ var _authors_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authors.actions */ "../../libs/core-state/src/lib/authors/authors.actions.ts");
/* harmony import */ var _authors_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authors.selectors */ "../../libs/core-state/src/lib/authors/authors.selectors.ts");








class AuthorsFacade {
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.loaded$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_authors_selectors__WEBPACK_IMPORTED_MODULE_5__["getAuthorsLoaded"]));
        this.allAuthors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(___WEBPACK_IMPORTED_MODULE_3__["getFullAuthors"]));
        this.selectedAuthor$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_authors_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedAuthor"]));
        this.mutations$ = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((action) => action.type === _authors_actions__WEBPACK_IMPORTED_MODULE_4__["createAuthor"]({}).type ||
            action.type === _authors_actions__WEBPACK_IMPORTED_MODULE_4__["updateAuthor"]({}).type ||
            action.type === _authors_actions__WEBPACK_IMPORTED_MODULE_4__["deleteAuthor"]({}).type));
    }
    selectAuthor(selectedId) {
        this.dispatch(_authors_actions__WEBPACK_IMPORTED_MODULE_4__["selectAuthor"]({ selectedId }));
    }
    loadAuthors() {
        this.dispatch(_authors_actions__WEBPACK_IMPORTED_MODULE_4__["loadAuthors"]());
    }
    loadAuthor(authorId) {
        this.dispatch(_authors_actions__WEBPACK_IMPORTED_MODULE_4__["loadAuthor"]({ authorId }));
    }
    createAuthor(author) {
        this.dispatch(_authors_actions__WEBPACK_IMPORTED_MODULE_4__["createAuthor"]({ author }));
    }
    updateAuthor(author) {
        this.dispatch(_authors_actions__WEBPACK_IMPORTED_MODULE_4__["updateAuthor"]({ author }));
    }
    deleteAuthor(author) {
        this.dispatch(_authors_actions__WEBPACK_IMPORTED_MODULE_4__["deleteAuthor"]({ author }));
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
}
AuthorsFacade.ɵfac = function AuthorsFacade_Factory(t) { return new (t || AuthorsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"])); };
AuthorsFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorsFacade, factory: AuthorsFacade.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"] }]; }, null); })();


/***/ }),

/***/ "../../libs/core-state/src/lib/authors/authors.models.ts":
/*!****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/authors/authors.models.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../libs/core-state/src/lib/authors/authors.reducer.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/authors/authors.reducer.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AUTHORS_FEATURE_KEY, authorsAdapter, initialAuthorsState, authorsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHORS_FEATURE_KEY", function() { return AUTHORS_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorsAdapter", function() { return authorsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAuthorsState", function() { return initialAuthorsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorsReducer", function() { return authorsReducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _authors_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authors.actions */ "../../libs/core-state/src/lib/authors/authors.actions.ts");



const AUTHORS_FEATURE_KEY = 'authors';
const authorsAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const initialAuthorsState = authorsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});
const onFailure = (state, { error }) => (Object.assign(Object.assign({}, state), { error }));
const _authorsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialAuthorsState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["selectAuthor"], (state, { selectedId }) => Object.assign({}, state, { selectedId })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["resetSelectedAuthor"], (state) => Object.assign({}, state, { selectedId: null })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["resetAuthors"], (state) => authorsAdapter.removeAll(state)), 
// Load authors
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthors"], (state) => (Object.assign(Object.assign({}, state), { loaded: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthorsSuccess"], (state, { authors }) => authorsAdapter.setAll(authors, Object.assign(Object.assign({}, state), { loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthorsFailure"], onFailure), 
// Load author
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthor"], (state) => (Object.assign(Object.assign({}, state), { loaded: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthorSuccess"], (state, { author }) => authorsAdapter.upsertOne(author, Object.assign(Object.assign({}, state), { loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["loadAuthorFailure"], onFailure), 
// Add author
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["createAuthorSuccess"], (state, { author }) => authorsAdapter.addOne(author, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["createAuthorFailure"], onFailure), 
// Update author
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["updateAuthorSuccess"], (state, { author }) => authorsAdapter.updateOne({ id: author.id, changes: author }, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["updateAuthorFailure"], onFailure), 
// Delete author
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["deleteAuthorSuccess"], (state, { author }) => authorsAdapter.removeOne(author.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_authors_actions__WEBPACK_IMPORTED_MODULE_2__["deleteAuthorFailure"], onFailure));
function authorsReducer(state, action) {
    return _authorsReducer(state, action);
}


/***/ }),

/***/ "../../libs/core-state/src/lib/authors/authors.selectors.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/authors/authors.selectors.ts ***!
  \*******************************************************************************************************/
/*! exports provided: getAuthorsState, getAuthorsLoaded, getAuthorsError, getAllAuthors, getAuthorsEntities, getSelectedAuthorId, getSelectedAuthor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorsState", function() { return getAuthorsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorsLoaded", function() { return getAuthorsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorsError", function() { return getAuthorsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAuthors", function() { return getAllAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorsEntities", function() { return getAuthorsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedAuthorId", function() { return getSelectedAuthorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedAuthor", function() { return getSelectedAuthor; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _authors_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authors.reducer */ "../../libs/core-state/src/lib/authors/authors.reducer.ts");


// Lookup the 'Authors' feature state managed by NgRx
const getAuthorsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_authors_reducer__WEBPACK_IMPORTED_MODULE_1__["AUTHORS_FEATURE_KEY"]);
const { selectAll, selectEntities } = _authors_reducer__WEBPACK_IMPORTED_MODULE_1__["authorsAdapter"].getSelectors();
const getAuthorsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthorsState, (state) => state.loaded);
const getAuthorsError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthorsState, (state) => state.error);
const getAllAuthors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthorsState, (state) => selectAll(state));
const getAuthorsEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthorsState, (state) => selectEntities(state));
const getSelectedAuthorId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthorsState, (state) => state.selectedId);
const getSelectedAuthor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthorsEntities, getSelectedAuthorId, (entities, selectedId) => selectedId && entities[selectedId]);


/***/ }),

/***/ "../../libs/core-state/src/lib/core-state.module.ts":
/*!***********************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/core-state.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: CoreStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreStateModule", function() { return CoreStateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "../../libs/core-state/src/lib/index.ts");
/* harmony import */ var _authors_authors_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authors/authors.effects */ "../../libs/core-state/src/lib/authors/authors.effects.ts");
/* harmony import */ var _courses_courses_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/courses.effects */ "../../libs/core-state/src/lib/courses/courses.effects.ts");
/* harmony import */ var _lessons_lessons_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lessons/lessons.effects */ "../../libs/core-state/src/lib/lessons/lessons.effects.ts");
/* harmony import */ var _users_users_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.effects */ "../../libs/core-state/src/lib/users/users.effects.ts");
















const STORE_NAME = 'bba-store';
const storeConfig = {
    runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
    },
};
class CoreStateModule {
}
CoreStateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreStateModule });
CoreStateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreStateModule_Factory(t) { return new (t || CoreStateModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(___WEBPACK_IMPORTED_MODULE_6__["reducers"], storeConfig),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([
                _authors_authors_effects__WEBPACK_IMPORTED_MODULE_7__["AuthorsEffects"],
                _courses_courses_effects__WEBPACK_IMPORTED_MODULE_8__["CoursesEffects"],
                _lessons_lessons_effects__WEBPACK_IMPORTED_MODULE_9__["LessonsEffects"],
                _users_users_effects__WEBPACK_IMPORTED_MODULE_10__["UsersEffects"],
            ]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 25, name: STORE_NAME }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot({ stateKey: ___WEBPACK_IMPORTED_MODULE_6__["ROUTER_FEATURE_KEY"] }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreStateModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreStateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(___WEBPACK_IMPORTED_MODULE_6__["reducers"], storeConfig),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([
                        _authors_authors_effects__WEBPACK_IMPORTED_MODULE_7__["AuthorsEffects"],
                        _courses_courses_effects__WEBPACK_IMPORTED_MODULE_8__["CoursesEffects"],
                        _lessons_lessons_effects__WEBPACK_IMPORTED_MODULE_9__["LessonsEffects"],
                        _users_users_effects__WEBPACK_IMPORTED_MODULE_10__["UsersEffects"],
                    ]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 25, name: STORE_NAME }),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot({ stateKey: ___WEBPACK_IMPORTED_MODULE_6__["ROUTER_FEATURE_KEY"] }),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/core-state/src/lib/courses/courses.actions.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/courses/courses.actions.ts ***!
  \*****************************************************************************************************/
/*! exports provided: resetSelectedCourse, resetCourses, selectCourse, loadCourses, loadCoursesSuccess, loadCoursesFailure, loadCourse, loadCourseSuccess, loadCourseFailure, createCourse, createCourseSuccess, createCourseFailure, updateCourse, updateCourseSuccess, updateCourseFailure, deleteCourse, deleteCourseCancelled, deleteCourseSuccess, deleteCourseFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSelectedCourse", function() { return resetSelectedCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCourses", function() { return resetCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCourse", function() { return selectCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCourses", function() { return loadCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCoursesSuccess", function() { return loadCoursesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCoursesFailure", function() { return loadCoursesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCourse", function() { return loadCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCourseSuccess", function() { return loadCourseSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCourseFailure", function() { return loadCourseFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCourse", function() { return createCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCourseSuccess", function() { return createCourseSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCourseFailure", function() { return createCourseFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCourse", function() { return updateCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCourseSuccess", function() { return updateCourseSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCourseFailure", function() { return updateCourseFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCourse", function() { return deleteCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCourseCancelled", function() { return deleteCourseCancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCourseSuccess", function() { return deleteCourseSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCourseFailure", function() { return deleteCourseFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const resetSelectedCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Reset Selected Course');
const resetCourses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Reset Courses');
// Select Course
const selectCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Select Course', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Load Courses
const loadCourses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Load Courses');
const loadCoursesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Load Courses Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCoursesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Load Courses Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Load Course
const loadCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Load Course', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCourseSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Load Course Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCourseFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Load Course Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Create Course
const createCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Create Course', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCourseSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Create Course Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCourseFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Create Course Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Update Course
const updateCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Update Course', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCourseSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Update Course Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCourseFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Update Course Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Delete Course
const deleteCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Delete Course', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCourseCancelled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Delete Course Cancelled');
const deleteCourseSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Delete Course Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCourseFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Courses] Delete Course Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "../../libs/core-state/src/lib/courses/courses.effects.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/courses/courses.effects.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CoursesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesEffects", function() { return CoursesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bba_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bba/core-data */ "../../libs/core-data/src/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _nrwl_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nrwl/angular */ "../../node_modules/@nrwl/angular/__ivy_ngcc__/fesm2015/nrwl-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _courses_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses.actions */ "../../libs/core-state/src/lib/courses/courses.actions.ts");










class CoursesEffects {
    constructor(actions$, coursesService) {
        this.actions$ = actions$;
        this.coursesService = coursesService;
        this.loadCourses$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_courses_actions__WEBPACK_IMPORTED_MODULE_6__["loadCourses"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            run: (action) => this.coursesService
                .all()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((courses) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["loadCoursesSuccess"]({ courses }))),
            onError: (action, error) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["loadCoursesFailure"]({ error }),
        }));
        this.loadCourse$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_courses_actions__WEBPACK_IMPORTED_MODULE_6__["loadCourse"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            run: (action) => this.coursesService
                .find(action.courseId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((course) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["loadCourseSuccess"]({ course }))),
            onError: (action, error) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["loadCourseFailure"]({ error }),
        }));
        this.createCourse$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_courses_actions__WEBPACK_IMPORTED_MODULE_6__["createCourse"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.coursesService
                .create(action.course)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((course) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["createCourseSuccess"]({ course }))),
            onError: (action, error) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["createCourseFailure"]({ error }),
        }));
        this.updateCourse$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_courses_actions__WEBPACK_IMPORTED_MODULE_6__["updateCourse"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.coursesService
                .update(action.course)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((course) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["updateCourseSuccess"]({ course }))),
            onError: (action, error) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["updateCourseFailure"]({ error }),
        }));
        this.deleteCourse$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_courses_actions__WEBPACK_IMPORTED_MODULE_6__["deleteCourse"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.coursesService
                .delete(action.course)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((course) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["deleteCourseSuccess"]({ course }))),
            onError: (action, error) => _courses_actions__WEBPACK_IMPORTED_MODULE_6__["deleteCourseFailure"]({ error }),
        }));
    }
}
CoursesEffects.ɵfac = function CoursesEffects_Factory(t) { return new (t || CoursesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_bba_core_data__WEBPACK_IMPORTED_MODULE_2__["CoursesService"])); };
CoursesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CoursesEffects, factory: CoursesEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CoursesEffects.prototype, "loadCourses$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CoursesEffects.prototype, "loadCourse$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CoursesEffects.prototype, "createCourse$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CoursesEffects.prototype, "updateCourse$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CoursesEffects.prototype, "deleteCourse$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoursesEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _bba_core_data__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] }]; }, { loadCourses$: [], loadCourse$: [], createCourse$: [], updateCourse$: [], deleteCourse$: [] }); })();


/***/ }),

/***/ "../../libs/core-state/src/lib/courses/courses.facade.ts":
/*!****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/courses/courses.facade.ts ***!
  \****************************************************************************************************/
/*! exports provided: CoursesFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesFacade", function() { return CoursesFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "../../libs/core-state/src/lib/index.ts");
/* harmony import */ var _courses_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courses.actions */ "../../libs/core-state/src/lib/courses/courses.actions.ts");
/* harmony import */ var _courses_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses.selectors */ "../../libs/core-state/src/lib/courses/courses.selectors.ts");








class CoursesFacade {
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.loaded$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_courses_selectors__WEBPACK_IMPORTED_MODULE_5__["getCoursesLoaded"]));
        this.allCourses$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(___WEBPACK_IMPORTED_MODULE_3__["getFullCourses"]));
        this.selectedCourse$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_courses_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedCourse"]));
        this.navigatedCourse$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(___WEBPACK_IMPORTED_MODULE_3__["getNavigatedCourse"]));
        this.mutations$ = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((action) => action.type === _courses_actions__WEBPACK_IMPORTED_MODULE_4__["createCourse"]({}).type ||
            action.type === _courses_actions__WEBPACK_IMPORTED_MODULE_4__["updateCourse"]({}).type ||
            action.type === _courses_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCourse"]({}).type));
    }
    selectCourse(selectedId) {
        this.dispatch(_courses_actions__WEBPACK_IMPORTED_MODULE_4__["selectCourse"]({ selectedId }));
    }
    loadCourses() {
        this.dispatch(_courses_actions__WEBPACK_IMPORTED_MODULE_4__["loadCourses"]());
    }
    loadCourse(courseId) {
        this.dispatch(_courses_actions__WEBPACK_IMPORTED_MODULE_4__["loadCourse"]({ courseId }));
    }
    createCourse(course) {
        this.dispatch(_courses_actions__WEBPACK_IMPORTED_MODULE_4__["createCourse"]({ course }));
    }
    updateCourse(course) {
        this.dispatch(_courses_actions__WEBPACK_IMPORTED_MODULE_4__["updateCourse"]({ course }));
    }
    deleteCourse(course) {
        this.dispatch(_courses_actions__WEBPACK_IMPORTED_MODULE_4__["deleteCourse"]({ course }));
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
}
CoursesFacade.ɵfac = function CoursesFacade_Factory(t) { return new (t || CoursesFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"])); };
CoursesFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoursesFacade, factory: CoursesFacade.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"] }]; }, null); })();


/***/ }),

/***/ "../../libs/core-state/src/lib/courses/courses.models.ts":
/*!****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/courses/courses.models.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../libs/core-state/src/lib/courses/courses.reducer.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/courses/courses.reducer.ts ***!
  \*****************************************************************************************************/
/*! exports provided: COURSES_FEATURE_KEY, coursesAdapter, initialCoursesState, coursesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSES_FEATURE_KEY", function() { return COURSES_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coursesAdapter", function() { return coursesAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCoursesState", function() { return initialCoursesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coursesReducer", function() { return coursesReducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _courses_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses.actions */ "../../libs/core-state/src/lib/courses/courses.actions.ts");



const COURSES_FEATURE_KEY = 'courses';
const coursesAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const initialCoursesState = coursesAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});
const onFailure = (state, { error }) => (Object.assign(Object.assign({}, state), { error }));
const _coursesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialCoursesState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["selectCourse"], (state, { selectedId }) => Object.assign({}, state, { selectedId })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["resetSelectedCourse"], (state) => Object.assign({}, state, { selectedId: null })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["resetCourses"], (state) => coursesAdapter.removeAll(state)), 
// Load courses
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["loadCourses"], (state) => (Object.assign(Object.assign({}, state), { loaded: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["loadCoursesSuccess"], (state, { courses }) => coursesAdapter.setAll(courses, Object.assign(Object.assign({}, state), { loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["loadCoursesFailure"], onFailure), 
// Load course
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["loadCourse"], (state) => (Object.assign(Object.assign({}, state), { loaded: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["loadCourseSuccess"], (state, { course }) => coursesAdapter.upsertOne(course, Object.assign(Object.assign({}, state), { loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["loadCourseFailure"], onFailure), 
// Add course
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["createCourseSuccess"], (state, { course }) => coursesAdapter.addOne(course, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["createCourseFailure"], onFailure), 
// Update course
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["updateCourseSuccess"], (state, { course }) => coursesAdapter.updateOne({ id: course.id, changes: course }, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["updateCourseFailure"], onFailure), 
// Delete course
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["deleteCourseSuccess"], (state, { course }) => coursesAdapter.removeOne(course.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_courses_actions__WEBPACK_IMPORTED_MODULE_2__["deleteCourseFailure"], onFailure));
function coursesReducer(state, action) {
    return _coursesReducer(state, action);
}


/***/ }),

/***/ "../../libs/core-state/src/lib/courses/courses.selectors.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/courses/courses.selectors.ts ***!
  \*******************************************************************************************************/
/*! exports provided: getCoursesState, getCoursesLoaded, getCoursesError, getAllCourses, getCoursesEntities, getSelectedCourseId, getSelectedCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoursesState", function() { return getCoursesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoursesLoaded", function() { return getCoursesLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoursesError", function() { return getCoursesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCourses", function() { return getAllCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoursesEntities", function() { return getCoursesEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedCourseId", function() { return getSelectedCourseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedCourse", function() { return getSelectedCourse; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _courses_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.reducer */ "../../libs/core-state/src/lib/courses/courses.reducer.ts");


// Lookup the 'Courses' feature state managed by NgRx
const getCoursesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_courses_reducer__WEBPACK_IMPORTED_MODULE_1__["COURSES_FEATURE_KEY"]);
const { selectAll, selectEntities } = _courses_reducer__WEBPACK_IMPORTED_MODULE_1__["coursesAdapter"].getSelectors();
const getCoursesLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoursesState, (state) => state.loaded);
const getCoursesError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoursesState, (state) => state.error);
const getAllCourses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoursesState, (state) => selectAll(state));
const getCoursesEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoursesState, (state) => selectEntities(state));
const getSelectedCourseId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoursesState, (state) => state.selectedId);
const getSelectedCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoursesEntities, getSelectedCourseId, (entities, selectedId) => selectedId && entities[selectedId]);


/***/ }),

/***/ "../../libs/core-state/src/lib/index.ts":
/*!***********************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/index.ts ***!
  \***********************************************************************************/
/*! exports provided: ROUTER_FEATURE_KEY, reducers, getFullCourses, getFullAuthors, getFullUsers, getFullUser, getRouterState, selectRouteParam, navigatedCourseId, navigatedLessonId, getNavigatedCourse, getNavigatedLesson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_FEATURE_KEY", function() { return ROUTER_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullCourses", function() { return getFullCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullAuthors", function() { return getFullAuthors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullUsers", function() { return getFullUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullUser", function() { return getFullUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteParam", function() { return selectRouteParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigatedCourseId", function() { return navigatedCourseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigatedLessonId", function() { return navigatedLessonId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavigatedCourse", function() { return getNavigatedCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavigatedLesson", function() { return getNavigatedLesson; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _authors_authors_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authors/authors.reducer */ "../../libs/core-state/src/lib/authors/authors.reducer.ts");
/* harmony import */ var _courses_courses_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses/courses.reducer */ "../../libs/core-state/src/lib/courses/courses.reducer.ts");
/* harmony import */ var _lessons_lessons_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lessons/lessons.reducer */ "../../libs/core-state/src/lib/lessons/lessons.reducer.ts");
/* harmony import */ var _users_users_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.reducer */ "../../libs/core-state/src/lib/users/users.reducer.ts");
/* harmony import */ var _authors_authors_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authors/authors.selectors */ "../../libs/core-state/src/lib/authors/authors.selectors.ts");
/* harmony import */ var _courses_courses_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./courses/courses.selectors */ "../../libs/core-state/src/lib/courses/courses.selectors.ts");
/* harmony import */ var _lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lessons/lessons.selectors */ "../../libs/core-state/src/lib/lessons/lessons.selectors.ts");
/* harmony import */ var _users_users_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.selectors */ "../../libs/core-state/src/lib/users/users.selectors.ts");











// -------------------------------------------------------------------
// Core State and Reducers
// -------------------------------------------------------------------
const ROUTER_FEATURE_KEY = 'router';
const reducers = {
    [ROUTER_FEATURE_KEY]: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    [_authors_authors_reducer__WEBPACK_IMPORTED_MODULE_2__["AUTHORS_FEATURE_KEY"]]: _authors_authors_reducer__WEBPACK_IMPORTED_MODULE_2__["authorsReducer"],
    [_courses_courses_reducer__WEBPACK_IMPORTED_MODULE_3__["COURSES_FEATURE_KEY"]]: _courses_courses_reducer__WEBPACK_IMPORTED_MODULE_3__["coursesReducer"],
    [_lessons_lessons_reducer__WEBPACK_IMPORTED_MODULE_4__["LESSONS_FEATURE_KEY"]]: _lessons_lessons_reducer__WEBPACK_IMPORTED_MODULE_4__["lessonsReducer"],
    [_users_users_reducer__WEBPACK_IMPORTED_MODULE_5__["USERS_FEATURE_KEY"]]: _users_users_reducer__WEBPACK_IMPORTED_MODULE_5__["usersReducer"],
};
// -------------------------------------------------------------------
// Common Selectors
// -------------------------------------------------------------------
const getFullCourses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllAuthors"], _courses_courses_selectors__WEBPACK_IMPORTED_MODULE_7__["getAllCourses"], _lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_8__["getAllLessons"], (authors, courses, lessons) => {
    const updatedCourses = courses.map((course) => {
        return Object.assign({}, course, { author: authors.find((author) => author.id === course.authorId) }, { lessons: lessons.filter((lesson) => lesson.courseId === course.id) });
    });
    return updatedCourses;
});
const getFullAuthors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_authors_authors_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllAuthors"], _courses_courses_selectors__WEBPACK_IMPORTED_MODULE_7__["getAllCourses"], (authors, courses) => {
    const updatedAuthors = authors.map((author) => {
        return Object.assign({}, author, {
            courses: courses.filter((course) => author.id === course.authorId),
        });
    });
    return updatedAuthors;
});
const getFullUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_7__["getAllCourses"], _lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_8__["getAllLessons"], _users_users_selectors__WEBPACK_IMPORTED_MODULE_9__["getAllUsers"], (courses, lessons, users) => {
    const updatedUsers = users.map((user) => {
        const currentLesson = lessons.find((lesson) => lesson.id === user.currentLessonId);
        const currentCourse = courses.find((course) => course.id === currentLesson.courseId);
        return Object.assign({}, user, {
            currentCourse,
            currentLesson,
        });
    });
    return updatedUsers;
});
const getFullUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_courses_courses_selectors__WEBPACK_IMPORTED_MODULE_7__["getAllCourses"], _lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_8__["getAllLessons"], _users_users_selectors__WEBPACK_IMPORTED_MODULE_9__["getSelectedUser"], (courses, lessons, user) => {
    if (!user)
        return;
    const currentLesson = lessons.find((lesson) => lesson.id === user.currentLessonId);
    const currentCourse = courses.find((course) => course.id === currentLesson.courseId);
    return Object.assign({}, user, {
        currentCourse,
        currentLesson,
    });
});
// -------------------------------------------------------------------
// Router Selectors
// -------------------------------------------------------------------
const getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(ROUTER_FEATURE_KEY);
const { selectRouteParam } = _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["getSelectors"](getRouterState);
const navigatedCourseId = selectRouteParam('courseId');
const navigatedLessonId = selectRouteParam('lessonId');
const getNavigatedCourse = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getFullCourses, navigatedCourseId, (courses, courseId) => courses.find(course => course.id === courseId));
const getNavigatedLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_lessons_lessons_selectors__WEBPACK_IMPORTED_MODULE_8__["getLessonsEntities"], navigatedLessonId, (lessons, lessonId) => lessons[lessonId]);


/***/ }),

/***/ "../../libs/core-state/src/lib/lessons/lessons.actions.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/lessons/lessons.actions.ts ***!
  \*****************************************************************************************************/
/*! exports provided: resetSelectedLesson, resetLessons, selectLesson, loadLessons, loadLessonsSuccess, loadLessonsFailure, loadLesson, loadLessonSuccess, loadLessonFailure, createLesson, createLessonSuccess, createLessonFailure, updateLesson, updateLessonSuccess, updateLessonFailure, deleteLesson, deleteLessonCancelled, deleteLessonSuccess, deleteLessonFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSelectedLesson", function() { return resetSelectedLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLessons", function() { return resetLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLesson", function() { return selectLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLessons", function() { return loadLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLessonsSuccess", function() { return loadLessonsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLessonsFailure", function() { return loadLessonsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLesson", function() { return loadLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLessonSuccess", function() { return loadLessonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLessonFailure", function() { return loadLessonFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLesson", function() { return createLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLessonSuccess", function() { return createLessonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLessonFailure", function() { return createLessonFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLesson", function() { return updateLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLessonSuccess", function() { return updateLessonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLessonFailure", function() { return updateLessonFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLesson", function() { return deleteLesson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLessonCancelled", function() { return deleteLessonCancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLessonSuccess", function() { return deleteLessonSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLessonFailure", function() { return deleteLessonFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const resetSelectedLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Reset Selected Lesson');
const resetLessons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Reset Lessons');
// Select Lesson
const selectLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Select Lesson', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Load Lessons
const loadLessons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Load Lessons');
const loadLessonsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Load Lessons Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadLessonsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Load Lessons Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Load Lesson
const loadLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Load Lesson', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadLessonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Load Lesson Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadLessonFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Load Lesson Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Create Lesson
const createLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Create Lesson', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createLessonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Create Lesson Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createLessonFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Create Lesson Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Update Lesson
const updateLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Update Lesson', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateLessonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Update Lesson Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateLessonFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Update Lesson Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Delete Lesson
const deleteLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Delete Lesson', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteLessonCancelled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Delete Lesson Cancelled');
const deleteLessonSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Delete Lesson Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteLessonFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Lessons] Delete Lesson Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "../../libs/core-state/src/lib/lessons/lessons.effects.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/lessons/lessons.effects.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LessonsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsEffects", function() { return LessonsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bba_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bba/core-data */ "../../libs/core-data/src/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _nrwl_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nrwl/angular */ "../../node_modules/@nrwl/angular/__ivy_ngcc__/fesm2015/nrwl-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _lessons_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lessons.actions */ "../../libs/core-state/src/lib/lessons/lessons.actions.ts");










class LessonsEffects {
    constructor(actions$, lessonsService) {
        this.actions$ = actions$;
        this.lessonsService = lessonsService;
        this.loadLessons$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_6__["loadLessons"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            run: (action) => this.lessonsService
                .all()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((lessons) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["loadLessonsSuccess"]({ lessons }))),
            onError: (action, error) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["loadLessonsFailure"]({ error }),
        }));
        this.loadLesson$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_6__["loadLesson"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            run: (action) => this.lessonsService
                .find(action.lessonId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((lesson) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["loadLessonSuccess"]({ lesson }))),
            onError: (action, error) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["loadLessonFailure"]({ error }),
        }));
        this.createLesson$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_6__["createLesson"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.lessonsService
                .create(action.lesson)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((lesson) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["createLessonSuccess"]({ lesson }))),
            onError: (action, error) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["createLessonFailure"]({ error }),
        }));
        this.updateLesson$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_6__["updateLesson"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.lessonsService
                .update(action.lesson)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((lesson) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["updateLessonSuccess"]({ lesson }))),
            onError: (action, error) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["updateLessonFailure"]({ error }),
        }));
        this.deleteLesson$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_6__["deleteLesson"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.lessonsService
                .delete(action.lesson)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((lesson) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["deleteLessonSuccess"]({ lesson }))),
            onError: (action, error) => _lessons_actions__WEBPACK_IMPORTED_MODULE_6__["deleteLessonFailure"]({ error }),
        }));
    }
}
LessonsEffects.ɵfac = function LessonsEffects_Factory(t) { return new (t || LessonsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_bba_core_data__WEBPACK_IMPORTED_MODULE_2__["LessonsService"])); };
LessonsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LessonsEffects, factory: LessonsEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LessonsEffects.prototype, "loadLessons$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LessonsEffects.prototype, "loadLesson$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LessonsEffects.prototype, "createLesson$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LessonsEffects.prototype, "updateLesson$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LessonsEffects.prototype, "deleteLesson$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessonsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _bba_core_data__WEBPACK_IMPORTED_MODULE_2__["LessonsService"] }]; }, { loadLessons$: [], loadLesson$: [], createLesson$: [], updateLesson$: [], deleteLesson$: [] }); })();


/***/ }),

/***/ "../../libs/core-state/src/lib/lessons/lessons.facade.ts":
/*!****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/lessons/lessons.facade.ts ***!
  \****************************************************************************************************/
/*! exports provided: LessonsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsFacade", function() { return LessonsFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "../../libs/core-state/src/lib/index.ts");
/* harmony import */ var _lessons_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lessons.actions */ "../../libs/core-state/src/lib/lessons/lessons.actions.ts");
/* harmony import */ var _lessons_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lessons.selectors */ "../../libs/core-state/src/lib/lessons/lessons.selectors.ts");








class LessonsFacade {
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.loaded$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_lessons_selectors__WEBPACK_IMPORTED_MODULE_5__["getLessonsLoaded"]));
        this.allLessons$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_lessons_selectors__WEBPACK_IMPORTED_MODULE_5__["getAllLessons"]));
        this.selectedLesson$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_lessons_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedLesson"]));
        this.navigatedLesson$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(___WEBPACK_IMPORTED_MODULE_3__["getNavigatedLesson"]));
        this.mutations$ = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((action) => action.type === _lessons_actions__WEBPACK_IMPORTED_MODULE_4__["createLesson"]({}).type ||
            action.type === _lessons_actions__WEBPACK_IMPORTED_MODULE_4__["updateLesson"]({}).type ||
            action.type === _lessons_actions__WEBPACK_IMPORTED_MODULE_4__["deleteLesson"]({}).type));
    }
    selectLesson(selectedId) {
        this.dispatch(_lessons_actions__WEBPACK_IMPORTED_MODULE_4__["selectLesson"]({ selectedId }));
    }
    loadLessons() {
        this.dispatch(_lessons_actions__WEBPACK_IMPORTED_MODULE_4__["loadLessons"]());
    }
    loadLesson(lessonId) {
        this.dispatch(_lessons_actions__WEBPACK_IMPORTED_MODULE_4__["loadLesson"]({ lessonId }));
    }
    createLesson(lesson) {
        this.dispatch(_lessons_actions__WEBPACK_IMPORTED_MODULE_4__["createLesson"]({ lesson }));
    }
    updateLesson(lesson) {
        this.dispatch(_lessons_actions__WEBPACK_IMPORTED_MODULE_4__["updateLesson"]({ lesson }));
    }
    deleteLesson(lesson) {
        this.dispatch(_lessons_actions__WEBPACK_IMPORTED_MODULE_4__["deleteLesson"]({ lesson }));
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
}
LessonsFacade.ɵfac = function LessonsFacade_Factory(t) { return new (t || LessonsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"])); };
LessonsFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LessonsFacade, factory: LessonsFacade.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonsFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"] }]; }, null); })();


/***/ }),

/***/ "../../libs/core-state/src/lib/lessons/lessons.models.ts":
/*!****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/lessons/lessons.models.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../libs/core-state/src/lib/lessons/lessons.reducer.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/lessons/lessons.reducer.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LESSONS_FEATURE_KEY, lessonsAdapter, initialLessonsState, lessonsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LESSONS_FEATURE_KEY", function() { return LESSONS_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessonsAdapter", function() { return lessonsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialLessonsState", function() { return initialLessonsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessonsReducer", function() { return lessonsReducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _lessons_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lessons.actions */ "../../libs/core-state/src/lib/lessons/lessons.actions.ts");



const LESSONS_FEATURE_KEY = 'lessons';
const lessonsAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const initialLessonsState = lessonsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});
const onFailure = (state, { error }) => (Object.assign(Object.assign({}, state), { error }));
const _lessonsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialLessonsState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["selectLesson"], (state, { selectedId }) => Object.assign({}, state, { selectedId })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["resetSelectedLesson"], (state) => Object.assign({}, state, { selectedId: null })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["resetLessons"], (state) => lessonsAdapter.removeAll(state)), 
// Load lessons
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["loadLessons"], (state) => (Object.assign(Object.assign({}, state), { loaded: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["loadLessonsSuccess"], (state, { lessons }) => lessonsAdapter.setAll(lessons, Object.assign(Object.assign({}, state), { loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["loadLessonsFailure"], onFailure), 
// Load lesson
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["loadLesson"], (state) => (Object.assign(Object.assign({}, state), { loaded: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["loadLessonSuccess"], (state, { lesson }) => lessonsAdapter.upsertOne(lesson, Object.assign(Object.assign({}, state), { loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["loadLessonFailure"], onFailure), 
// Add lesson
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["createLessonSuccess"], (state, { lesson }) => lessonsAdapter.addOne(lesson, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["createLessonFailure"], onFailure), 
// Update lesson
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["updateLessonSuccess"], (state, { lesson }) => lessonsAdapter.updateOne({ id: lesson.id, changes: lesson }, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["updateLessonFailure"], onFailure), 
// Delete lesson
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["deleteLessonSuccess"], (state, { lesson }) => lessonsAdapter.removeOne(lesson.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_lessons_actions__WEBPACK_IMPORTED_MODULE_2__["deleteLessonFailure"], onFailure));
function lessonsReducer(state, action) {
    return _lessonsReducer(state, action);
}


/***/ }),

/***/ "../../libs/core-state/src/lib/lessons/lessons.selectors.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/lessons/lessons.selectors.ts ***!
  \*******************************************************************************************************/
/*! exports provided: getLessonsState, getLessonsLoaded, getLessonsError, getAllLessons, getLessonsEntities, getSelectedLessonId, getSelectedLesson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLessonsState", function() { return getLessonsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLessonsLoaded", function() { return getLessonsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLessonsError", function() { return getLessonsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLessons", function() { return getAllLessons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLessonsEntities", function() { return getLessonsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedLessonId", function() { return getSelectedLessonId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedLesson", function() { return getSelectedLesson; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _lessons_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lessons.reducer */ "../../libs/core-state/src/lib/lessons/lessons.reducer.ts");


// Lookup the 'Lessons' feature state managed by NgRx
const getLessonsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_lessons_reducer__WEBPACK_IMPORTED_MODULE_1__["LESSONS_FEATURE_KEY"]);
const { selectAll, selectEntities } = _lessons_reducer__WEBPACK_IMPORTED_MODULE_1__["lessonsAdapter"].getSelectors();
const getLessonsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLessonsState, (state) => state.loaded);
const getLessonsError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLessonsState, (state) => state.error);
const getAllLessons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLessonsState, (state) => selectAll(state));
const getLessonsEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLessonsState, (state) => selectEntities(state));
const getSelectedLessonId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLessonsState, (state) => state.selectedId);
const getSelectedLesson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLessonsEntities, getSelectedLessonId, (entities, selectedId) => selectedId && entities[selectedId]);


/***/ }),

/***/ "../../libs/core-state/src/lib/users/users.actions.ts":
/*!*************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/users/users.actions.ts ***!
  \*************************************************************************************************/
/*! exports provided: resetSelectedUser, resetUsers, selectUser, loadUsers, loadUsersSuccess, loadUsersFailure, loadUser, loadUserSuccess, loadUserFailure, createUser, createUserSuccess, createUserFailure, updateUser, updateUserSuccess, updateUserFailure, deleteUser, deleteUserCancelled, deleteUserSuccess, deleteUserFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSelectedUser", function() { return resetSelectedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetUsers", function() { return resetUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsers", function() { return loadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsersSuccess", function() { return loadUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsersFailure", function() { return loadUsersFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUserSuccess", function() { return loadUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUserFailure", function() { return loadUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserSuccess", function() { return createUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserFailure", function() { return createUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserSuccess", function() { return updateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserFailure", function() { return updateUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserCancelled", function() { return deleteUserCancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserSuccess", function() { return deleteUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserFailure", function() { return deleteUserFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const resetSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Reset Selected User');
const resetUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Reset Users');
// Select User
const selectUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Select User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Load Users
const loadUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Load Users');
const loadUsersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Load Users Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadUsersFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Load Users Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Load User
const loadUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Load User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Load User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Load User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Create User
const createUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Create User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Create User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Create User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Update User
const updateUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Update User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Update User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Update User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Delete User
const deleteUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Delete User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteUserCancelled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Delete User Cancelled');
const deleteUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Delete User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Delete User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "../../libs/core-state/src/lib/users/users.effects.ts":
/*!*************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/users/users.effects.ts ***!
  \*************************************************************************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bba_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bba/core-data */ "../../libs/core-data/src/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _nrwl_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nrwl/angular */ "../../node_modules/@nrwl/angular/__ivy_ngcc__/fesm2015/nrwl-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.actions */ "../../libs/core-state/src/lib/users/users.actions.ts");










class UsersEffects {
    constructor(actions$, usersService) {
        this.actions$ = actions$;
        this.usersService = usersService;
        this.loadUsers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUsers"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            run: (action) => this.usersService
                .all()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((users) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUsersSuccess"]({ users }))),
            onError: (action, error) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUsersFailure"]({ error }),
        }));
        this.loadUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUser"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["fetch"])({
            run: (action) => this.usersService
                .find(action.userId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUserSuccess"]({ user }))),
            onError: (action, error) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUserFailure"]({ error }),
        }));
        this.createUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_users_actions__WEBPACK_IMPORTED_MODULE_6__["createUser"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.usersService
                .create(action.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["createUserSuccess"]({ user }))),
            onError: (action, error) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["createUserFailure"]({ error }),
        }));
        this.updateUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_users_actions__WEBPACK_IMPORTED_MODULE_6__["updateUser"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.usersService
                .update(action.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["updateUserSuccess"]({ user }))),
            onError: (action, error) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["updateUserFailure"]({ error }),
        }));
        this.deleteUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_users_actions__WEBPACK_IMPORTED_MODULE_6__["deleteUser"]), Object(_nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["pessimisticUpdate"])({
            run: (action) => this.usersService
                .delete(action.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["deleteUserSuccess"]({ user }))),
            onError: (action, error) => _users_actions__WEBPACK_IMPORTED_MODULE_6__["deleteUserFailure"]({ error }),
        }));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_bba_core_data__WEBPACK_IMPORTED_MODULE_2__["UsersService"])); };
UsersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UsersEffects.prototype, "loadUsers$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UsersEffects.prototype, "loadUser$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UsersEffects.prototype, "createUser$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UsersEffects.prototype, "updateUser$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UsersEffects.prototype, "deleteUser$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _bba_core_data__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }]; }, { loadUsers$: [], loadUser$: [], createUser$: [], updateUser$: [], deleteUser$: [] }); })();


/***/ }),

/***/ "../../libs/core-state/src/lib/users/users.facade.ts":
/*!************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/users/users.facade.ts ***!
  \************************************************************************************************/
/*! exports provided: UsersFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFacade", function() { return UsersFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "../../libs/core-state/src/lib/index.ts");
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.actions */ "../../libs/core-state/src/lib/users/users.actions.ts");
/* harmony import */ var _users_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.selectors */ "../../libs/core-state/src/lib/users/users.selectors.ts");








class UsersFacade {
    constructor(store, actions$) {
        this.store = store;
        this.actions$ = actions$;
        this.loaded$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_users_selectors__WEBPACK_IMPORTED_MODULE_5__["getUsersLoaded"]));
        this.allUsers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_users_selectors__WEBPACK_IMPORTED_MODULE_5__["getAllUsers"]));
        this.selectedUser$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(___WEBPACK_IMPORTED_MODULE_3__["getFullUser"]));
        this.mutations$ = this.actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((action) => action.type === _users_actions__WEBPACK_IMPORTED_MODULE_4__["createUser"]({}).type ||
            action.type === _users_actions__WEBPACK_IMPORTED_MODULE_4__["updateUser"]({}).type ||
            action.type === _users_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUser"]({}).type));
    }
    // For demonstration purposes only...
    login(firstName, lastName) {
        this.allUsers$.subscribe((users) => {
            if (users.length === 0)
                return;
            const loggedInUser = users.find((user) => user.firstName === firstName && user.lastName === lastName);
            this.selectUser(loggedInUser.id);
        });
    }
    selectUser(selectedId) {
        this.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_4__["selectUser"]({ selectedId }));
    }
    loadUsers() {
        this.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadUsers"]());
    }
    loadUser(userId) {
        this.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadUser"]({ userId }));
    }
    createUser(user) {
        this.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_4__["createUser"]({ user }));
    }
    updateUser(user) {
        this.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_4__["updateUser"]({ user }));
    }
    deleteUser(user) {
        this.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUser"]({ user }));
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
}
UsersFacade.ɵfac = function UsersFacade_Factory(t) { return new (t || UsersFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"])); };
UsersFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersFacade, factory: UsersFacade.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"] }]; }, null); })();


/***/ }),

/***/ "../../libs/core-state/src/lib/users/users.models.ts":
/*!************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/users/users.models.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../libs/core-state/src/lib/users/users.reducer.ts":
/*!*************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/users/users.reducer.ts ***!
  \*************************************************************************************************/
/*! exports provided: USERS_FEATURE_KEY, usersAdapter, initialUsersState, usersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_FEATURE_KEY", function() { return USERS_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersAdapter", function() { return usersAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialUsersState", function() { return initialUsersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersReducer", function() { return usersReducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "../../node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.actions */ "../../libs/core-state/src/lib/users/users.actions.ts");



const USERS_FEATURE_KEY = 'users';
const usersAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const initialUsersState = usersAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});
const onFailure = (state, { error }) => (Object.assign(Object.assign({}, state), { error }));
const _usersReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialUsersState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["selectUser"], (state, { selectedId }) => Object.assign({}, state, { selectedId })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["resetSelectedUser"], (state) => Object.assign({}, state, { selectedId: null })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["resetUsers"], (state) => usersAdapter.removeAll(state)), 
// Load users
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["loadUsers"], (state) => (Object.assign(Object.assign({}, state), { loaded: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["loadUsersSuccess"], (state, { users }) => usersAdapter.setAll(users, Object.assign(Object.assign({}, state), { loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["loadUsersFailure"], onFailure), 
// Load user
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["loadUser"], (state) => (Object.assign(Object.assign({}, state), { loaded: false, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["loadUserSuccess"], (state, { user }) => usersAdapter.upsertOne(user, Object.assign(Object.assign({}, state), { loaded: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["loadUserFailure"], onFailure), 
// Add user
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["createUserSuccess"], (state, { user }) => usersAdapter.addOne(user, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["createUserFailure"], onFailure), 
// Update user
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["updateUserSuccess"], (state, { user }) => usersAdapter.updateOne({ id: user.id, changes: user }, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["updateUserFailure"], onFailure), 
// Delete user
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["deleteUserSuccess"], (state, { user }) => usersAdapter.removeOne(user.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["deleteUserFailure"], onFailure));
function usersReducer(state, action) {
    return _usersReducer(state, action);
}


/***/ }),

/***/ "../../libs/core-state/src/lib/users/users.selectors.ts":
/*!***************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/libs/core-state/src/lib/users/users.selectors.ts ***!
  \***************************************************************************************************/
/*! exports provided: getUsersState, getUsersLoaded, getUsersError, getAllUsers, getUsersEntities, getSelectedUserId, getSelectedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersState", function() { return getUsersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLoaded", function() { return getUsersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersError", function() { return getUsersError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersEntities", function() { return getUsersEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedUserId", function() { return getSelectedUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedUser", function() { return getSelectedUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.reducer */ "../../libs/core-state/src/lib/users/users.reducer.ts");


// Lookup the 'Users' feature state managed by NgRx
const getUsersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_users_reducer__WEBPACK_IMPORTED_MODULE_1__["USERS_FEATURE_KEY"]);
const { selectAll, selectEntities } = _users_reducer__WEBPACK_IMPORTED_MODULE_1__["usersAdapter"].getSelectors();
const getUsersLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersState, (state) => state.loaded);
const getUsersError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersState, (state) => state.error);
const getAllUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersState, (state) => selectAll(state));
const getUsersEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersState, (state) => selectEntities(state));
const getSelectedUserId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersState, (state) => state.selectedId);
const getSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersEntities, getSelectedUserId, (entities, selectedId) => selectedId && entities[selectedId]);


/***/ }),

/***/ "../../node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /Users/lukas/Projects/bba-ionic-quickstart/node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-alert.entry.js",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-app_8.entry.js",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-back-button.entry.js",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js",
		5
	],
	"./ion-button_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-button_2.entry.js",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-card_5.entry.js",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-chip.entry.js",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		10
	],
	"./ion-datetime_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js",
		14
	],
	"./ion-input.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-input.entry.js",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-item_8.entry.js",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-loading.entry.js",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-modal.entry.js",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-popover.entry.js",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-range.entry.js",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		28
	],
	"./ion-route_4.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-select_3.entry.js",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js",
		33
	],
	"./ion-spinner.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-textarea.entry.js",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-toast.entry.js",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-toggle.entry.js",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../dashboard/src/environments/environment.ts":
/*!****************************************************!*\
  !*** ../dashboard/src/environments/environment.ts ***!
  \****************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiEndpoint: 'http://localhost:3000/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts")).then((m) => m.HomePageModule)
    },
    {
        path: 'courses',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-courses-courses-module */ "pages-courses-courses-module").then(__webpack_require__.bind(null, /*! ./pages/courses/courses.module */ "./src/app/pages/courses/courses.module.ts")).then((m) => m.CoursesPageModule)
    },
    {
        path: 'courses/:courseId',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-course-details-course-details-module */ "pages-course-details-course-details-module").then(__webpack_require__.bind(null, /*! ./pages/course-details/course-details.module */ "./src/app/pages/course-details/course-details.module.ts")).then((m) => m.CourseDetailsPageModule)
    },
    {
        path: 'lessons',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-lessons-lessons-module */ "pages-lessons-lessons-module").then(__webpack_require__.bind(null, /*! ./pages/lessons/lessons.module */ "./src/app/pages/lessons/lessons.module.ts")).then((m) => m.LessonsPageModule)
    },
    {
        path: 'courses/:courseId/lessons/:lessonId',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-lesson-details-lesson-details-module */ "pages-lesson-details-lesson-details-module").then(__webpack_require__.bind(null, /*! ./pages/lesson-details/lesson-details.module */ "./src/app/pages/lesson-details/lesson-details.module.ts")).then((m) => m.LessonDetailsPageModule)
    },
    {
        path: 'authors',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-authors-authors-module */ "pages-authors-authors-module").then(__webpack_require__.bind(null, /*! ./pages/authors/authors.module */ "./src/app/pages/authors/authors.module.ts")).then((m) => m.AuthorsPageModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bba_core_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bba/core-state */ "../../libs/core-state/src/index.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "../../node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "../../node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-header/menu-header.component */ "./src/app/components/menu-header/menu-header.component.ts");
/* harmony import */ var _components_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu-list/menu-list.component */ "./src/app/components/menu-list/menu-list.component.ts");












class AppComponent {
    constructor(platform, splashScreen, statusBar, authorsFacade, coursesFacade, lessonsFacade, usersFacade) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authorsFacade = authorsFacade;
        this.coursesFacade = coursesFacade;
        this.lessonsFacade = lessonsFacade;
        this.usersFacade = usersFacade;
        this.dark = false;
        this.pages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home',
            },
            {
                title: 'Courses',
                url: '/courses',
                icon: 'rocket',
            },
            {
                title: 'Lessons',
                url: '/lessons',
                icon: 'paper-plane',
            },
            {
                title: 'Authors',
                url: '/authors',
                icon: 'people',
            },
        ];
        this.initializeApp();
        this.loadData();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    loadData() {
        this.authorsFacade.loadAuthors();
        this.coursesFacade.loadCourses();
        this.lessonsFacade.loadLessons();
        this.usersFacade.loadUsers();
        // For demonstration purposes only...
        this.usersFacade.login('Cole', 'Sanders');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bba_core_state__WEBPACK_IMPORTED_MODULE_1__["AuthorsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bba_core_state__WEBPACK_IMPORTED_MODULE_1__["CoursesFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bba_core_state__WEBPACK_IMPORTED_MODULE_1__["LessonsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bba_core_state__WEBPACK_IMPORTED_MODULE_1__["UsersFacade"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["bba-root"]], decls: 7, vars: 4, consts: [["contentId", "main-content"], ["contentId", "main-content", "type", "overlay", "lines", "none"], [3, "dark", "pages", "darkChange"], ["id", "main-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-split-pane", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "bba-menu-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "bba-menu-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("darkChange", function AppComponent_Template_bba_menu_list_darkChange_5_listener($event) { return ctx.dark = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-router-outlet", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dark", ctx.dark)("pages", ctx.pages);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSplitPane"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonMenu"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_5__["MenuHeaderComponent"], _components_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_6__["MenuListComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21vYmlsZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-root',
                templateUrl: 'app.component.html',
                styleUrls: ['app.component.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"] }, { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }, { type: _bba_core_state__WEBPACK_IMPORTED_MODULE_1__["AuthorsFacade"] }, { type: _bba_core_state__WEBPACK_IMPORTED_MODULE_1__["CoursesFacade"] }, { type: _bba_core_state__WEBPACK_IMPORTED_MODULE_1__["LessonsFacade"] }, { type: _bba_core_state__WEBPACK_IMPORTED_MODULE_1__["UsersFacade"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bba_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bba/core-data */ "../../libs/core-data/src/index.ts");
/* harmony import */ var _bba_core_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bba/core-state */ "../../libs/core-state/src/index.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "../../node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "../../node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"] }
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
            _bba_core_data__WEBPACK_IMPORTED_MODULE_5__["CoreDataModule"],
            _bba_core_state__WEBPACK_IMPORTED_MODULE_6__["CoreStateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
        _bba_core_data__WEBPACK_IMPORTED_MODULE_5__["CoreDataModule"],
        _bba_core_state__WEBPACK_IMPORTED_MODULE_6__["CoreStateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
                entryComponents: [],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"],
                    _bba_core_data__WEBPACK_IMPORTED_MODULE_5__["CoreDataModule"],
                    _bba_core_state__WEBPACK_IMPORTED_MODULE_6__["CoreStateModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(),
                ],
                providers: [
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
                    _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
                    { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/author-courses-list/author-courses-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/author-courses-list/author-courses-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AuthorCoursesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorCoursesListComponent", function() { return AuthorCoursesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function AuthorCoursesListComponent_ion_item_sliding_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item-sliding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/courses/", course_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r1.description);
} }
class AuthorCoursesListComponent {
}
AuthorCoursesListComponent.ɵfac = function AuthorCoursesListComponent_Factory(t) { return new (t || AuthorCoursesListComponent)(); };
AuthorCoursesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorCoursesListComponent, selectors: [["bba-author-course-list"]], inputs: { author: "author" }, decls: 10, vars: 6, consts: [["sticky", ""], ["slot", "start"], [3, "src", "alt"], [4, "ngFor", "ngForOf"], [3, "routerLink"], ["color", "primary"], ["color", "danger"]], template: function AuthorCoursesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AuthorCoursesListComponent_ion_item_sliding_9_Template, 12, 3, "ion-item-sliding", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.author.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.author.firstName + " profile picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.author.firstName, " ", ctx.author.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.author.courses);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvYXV0aG9yLWNvdXJzZXMtbGlzdC9hdXRob3ItY291cnNlcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorCoursesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-author-course-list',
                templateUrl: './author-courses-list.component.html',
                styleUrls: ['./author-courses-list.component.scss'],
            }]
    }], null, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _author_courses_list_author_courses_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./author-courses-list/author-courses-list.component */ "./src/app/components/author-courses-list/author-courses-list.component.ts");
/* harmony import */ var _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-card/course-card.component */ "./src/app/components/course-card/course-card.component.ts");
/* harmony import */ var _course_lessons_list_course_lessons_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-lessons-list/course-lessons-list.component */ "./src/app/components/course-lessons-list/course-lessons-list.component.ts");
/* harmony import */ var _lesson_card_lesson_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lesson-card/lesson-card.component */ "./src/app/components/lesson-card/lesson-card.component.ts");
/* harmony import */ var _menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-header/menu-header.component */ "./src/app/components/menu-header/menu-header.component.ts");
/* harmony import */ var _menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu-list/menu-list.component */ "./src/app/components/menu-list/menu-list.component.ts");
/* harmony import */ var _social_share_social_share_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./social-share/social-share.component */ "./src/app/components/social-share/social-share.component.ts");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-card/user-card.component */ "./src/app/components/user-card/user-card.component.ts");
/* harmony import */ var _user_course_card_user_course_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-course-card/user-course-card.component */ "./src/app/components/user-course-card/user-course-card.component.ts");















class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_author_courses_list_author_courses_list_component__WEBPACK_IMPORTED_MODULE_5__["AuthorCoursesListComponent"],
        _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_6__["CourseCardComponent"],
        _course_lessons_list_course_lessons_list_component__WEBPACK_IMPORTED_MODULE_7__["CourseLessonsListComponent"],
        _lesson_card_lesson_card_component__WEBPACK_IMPORTED_MODULE_8__["LessonCardComponent"],
        _menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_9__["MenuHeaderComponent"],
        _menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_10__["MenuListComponent"],
        _social_share_social_share_component__WEBPACK_IMPORTED_MODULE_11__["SocialShareComponent"],
        _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_12__["UserCardComponent"],
        _user_course_card_user_course_card_component__WEBPACK_IMPORTED_MODULE_13__["UserCourseCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_author_courses_list_author_courses_list_component__WEBPACK_IMPORTED_MODULE_5__["AuthorCoursesListComponent"],
        _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_6__["CourseCardComponent"],
        _course_lessons_list_course_lessons_list_component__WEBPACK_IMPORTED_MODULE_7__["CourseLessonsListComponent"],
        _lesson_card_lesson_card_component__WEBPACK_IMPORTED_MODULE_8__["LessonCardComponent"],
        _menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_9__["MenuHeaderComponent"],
        _menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_10__["MenuListComponent"],
        _social_share_social_share_component__WEBPACK_IMPORTED_MODULE_11__["SocialShareComponent"],
        _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_12__["UserCardComponent"],
        _user_course_card_user_course_card_component__WEBPACK_IMPORTED_MODULE_13__["UserCourseCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _author_courses_list_author_courses_list_component__WEBPACK_IMPORTED_MODULE_5__["AuthorCoursesListComponent"],
                    _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_6__["CourseCardComponent"],
                    _course_lessons_list_course_lessons_list_component__WEBPACK_IMPORTED_MODULE_7__["CourseLessonsListComponent"],
                    _lesson_card_lesson_card_component__WEBPACK_IMPORTED_MODULE_8__["LessonCardComponent"],
                    _menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_9__["MenuHeaderComponent"],
                    _menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_10__["MenuListComponent"],
                    _social_share_social_share_component__WEBPACK_IMPORTED_MODULE_11__["SocialShareComponent"],
                    _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_12__["UserCardComponent"],
                    _user_course_card_user_course_card_component__WEBPACK_IMPORTED_MODULE_13__["UserCourseCardComponent"],
                ],
                exports: [
                    _author_courses_list_author_courses_list_component__WEBPACK_IMPORTED_MODULE_5__["AuthorCoursesListComponent"],
                    _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_6__["CourseCardComponent"],
                    _course_lessons_list_course_lessons_list_component__WEBPACK_IMPORTED_MODULE_7__["CourseLessonsListComponent"],
                    _lesson_card_lesson_card_component__WEBPACK_IMPORTED_MODULE_8__["LessonCardComponent"],
                    _menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_9__["MenuHeaderComponent"],
                    _menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_10__["MenuListComponent"],
                    _social_share_social_share_component__WEBPACK_IMPORTED_MODULE_11__["SocialShareComponent"],
                    _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_12__["UserCardComponent"],
                    _user_course_card_user_course_card_component__WEBPACK_IMPORTED_MODULE_13__["UserCourseCardComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/course-card/course-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/course-card/course-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: CourseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCardComponent", function() { return CourseCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1, a3) { return ["/courses/", a1, "lessons", a3]; };
function CourseCardComponent_ion_item_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Watch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lesson_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.course.id, lesson_r2.id));
} }
const _c1 = function (a1) { return ["/courses/", a1]; };
function CourseCardComponent_ion_button_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Go To Course ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r1.course.id));
} }
class CourseCardComponent {
    constructor() {
        this.navigate = true;
        this.lessonCount = 100;
    }
}
CourseCardComponent.ɵfac = function CourseCardComponent_Factory(t) { return new (t || CourseCardComponent)(); };
CourseCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseCardComponent, selectors: [["bba-course-card"]], inputs: { course: "course", navigate: "navigate", lessonCount: "lessonCount" }, decls: 27, vars: 14, consts: [[1, "course-card"], [3, "src"], ["detail", "false", "lines", "none", 1, "course-item"], ["detail", "false"], ["detail", "false", 4, "ngFor", "ngForOf"], ["slot", "start"], [3, "src", "alt"], ["expand", "bock", "fill", "outline", 3, "routerLink", 4, "ngIf"], [3, "routerLink"], ["slot", "end", "name", "play"], ["expand", "bock", "fill", "outline", 3, "routerLink"]], template: function CourseCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lessons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CourseCardComponent_ion_item_15_Template, 9, 6, "ion-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-avatar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CourseCardComponent_ion_button_26_Template, 2, 3, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.course.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](16, 10, ctx.course.lessons, 0, ctx.lessonCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.course.author.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.course.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.course.author.firstName, " ", ctx.course.author.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.author.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navigate);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".course-card.md[_ngcontent-%COMP%] {\n  max-width: 750px;\n}\n\n\n\nion-col[_ngcontent-%COMP%]:not(:last-of-type)   .course-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.course-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.course-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 0;\n}\n\n.course-card[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%] {\n  --min-height: 85px;\n}\n\n.course-card[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.course-card[_ngcontent-%COMP%]   .course-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtY2FyZC9jb3Vyc2UtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBQUE7O0FBR0E7RUFDRSxnQkFBQTtBQUNGOztBQUdFO0VBQ0UsVUFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0FBRko7O0FBSUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUZOOztBQUtJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBSE4iLCJmaWxlIjoiYXBwcy9tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1jYXJkL2NvdXJzZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZS1jYXJkLm1kIHtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbn1cblxuLyogRHVlIHRvIHRoZSBmYWN0IHRoZSBjYXJkcyBhcmUgaW5zaWRlIG9mIGNvbHVtbnMgdGhlIG1hcmdpbnMgZG9uJ3Qgb3ZlcmxhcFxuICogcHJvcGVybHkgc28gd2Ugd2FudCB0byByZW1vdmUgdGhlIGV4dHJhIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXG4gKi9cbmlvbi1jb2w6bm90KDpsYXN0LW9mLXR5cGUpIC5jb3Vyc2UtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jb3Vyc2UtY2FyZCB7XG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY291cnNlLWl0ZW0ge1xuICAgIC0tbWluLWhlaWdodDogODVweDtcblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-course-card',
                templateUrl: './course-card.component.html',
                styleUrls: ['./course-card.component.scss'],
            }]
    }], null, { course: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], navigate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lessonCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/course-lessons-list/course-lessons-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/course-lessons-list/course-lessons-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CourseLessonsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseLessonsListComponent", function() { return CourseLessonsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function CourseLessonsListComponent_ion_item_sliding_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item-sliding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lesson_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/courses/", ctx_r0.course.id, "/lessons/", lesson_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lesson_r1.description);
} }
class CourseLessonsListComponent {
}
CourseLessonsListComponent.ɵfac = function CourseLessonsListComponent_Factory(t) { return new (t || CourseLessonsListComponent)(); };
CourseLessonsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseLessonsListComponent, selectors: [["bba-course-lessons-list"]], inputs: { course: "course" }, decls: 6, vars: 2, consts: [["sticky", ""], [4, "ngFor", "ngForOf"], [3, "routerLink"], ["color", "primary"], ["color", "danger"]], template: function CourseLessonsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CourseLessonsListComponent_ion_item_sliding_5_Template, 12, 4, "ion-item-sliding", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.course.lessons);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItemOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLWxlc3NvbnMtbGlzdC9jb3Vyc2UtbGVzc29ucy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseLessonsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-course-lessons-list',
                templateUrl: './course-lessons-list.component.html',
                styleUrls: ['./course-lessons-list.component.scss'],
            }]
    }], null, { course: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/lesson-card/lesson-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/lesson-card/lesson-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: LessonCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonCardComponent", function() { return LessonCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



class LessonCardComponent {
}
LessonCardComponent.ɵfac = function LessonCardComponent_Factory(t) { return new (t || LessonCardComponent)(); };
LessonCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LessonCardComponent, selectors: [["bba-lesson-card"]], inputs: { course: "course", lesson: "lesson" }, decls: 9, vars: 4, consts: [[1, "lesson-card"], ["controls", "", 1, "video-player", 3, "src", "poster"], ["detail", "false", "lines", "none", 1, "lesson-item"]], template: function LessonCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lesson.videoUri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("poster", ctx.course.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lesson.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lesson.description);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: [".lesson-card.md[_ngcontent-%COMP%] {\n  max-width: 750px;\n}\n\n\n\nion-col[_ngcontent-%COMP%]:not(:last-of-type)   .lesson-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.lesson-card[_ngcontent-%COMP%]    > .video-player[_ngcontent-%COMP%] {\n  width: 750px;\n  height: auto;\n  background-color: black;\n}\n\n.lesson-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.lesson-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 0;\n}\n\n.lesson-card[_ngcontent-%COMP%]   .lesson-item[_ngcontent-%COMP%] {\n  --min-height: 85px;\n}\n\n.lesson-card[_ngcontent-%COMP%]   .lesson-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.lesson-card[_ngcontent-%COMP%]   .lesson-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9sZXNzb24tY2FyZC9sZXNzb24tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBQUE7O0FBR0E7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUdFO0VBQ0UsVUFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0FBRko7O0FBSUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUZOOztBQUtJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBSE4iLCJmaWxlIjoiYXBwcy9tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL2xlc3Nvbi1jYXJkL2xlc3Nvbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlc3Nvbi1jYXJkLm1kIHtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbn1cblxuLyogRHVlIHRvIHRoZSBmYWN0IHRoZSBjYXJkcyBhcmUgaW5zaWRlIG9mIGNvbHVtbnMgdGhlIG1hcmdpbnMgZG9uJ3Qgb3ZlcmxhcFxuICogcHJvcGVybHkgc28gd2Ugd2FudCB0byByZW1vdmUgdGhlIGV4dHJhIG1hcmdpbiBiZXR3ZWVuIGNhcmRzXG4gKi9cbmlvbi1jb2w6bm90KDpsYXN0LW9mLXR5cGUpIC5sZXNzb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sZXNzb24tY2FyZCA+IC52aWRlby1wbGF5ZXIge1xuICB3aWR0aDogNzUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5sZXNzb24tY2FyZCB7XG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubGVzc29uLWl0ZW0ge1xuICAgIC0tbWluLWhlaWdodDogODVweDtcblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LessonCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-lesson-card',
                templateUrl: './lesson-card.component.html',
                styleUrls: ['./lesson-card.component.scss'],
            }]
    }], null, { course: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lesson: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/menu-header/menu-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/menu-header/menu-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuHeaderComponent", function() { return MenuHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



class MenuHeaderComponent {
}
MenuHeaderComponent.ɵfac = function MenuHeaderComponent_Factory(t) { return new (t || MenuHeaderComponent)(); };
MenuHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuHeaderComponent, selectors: [["bba-menu-header"]], decls: 7, vars: 0, consts: [["detail", "false", "lines", "none", 1, "course-item"], ["slot", "start", "src", "assets/images/briebug-chevron.svg", "alt", "Briebug Academy Logo", 1, "logo"]], template: function MenuHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Briebug Academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Better Software Better Lives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9tZW51LWhlYWRlci9tZW51LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJhcHBzL21vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvbWVudS1oZWFkZXIvbWVudS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-menu-header',
                templateUrl: './menu-header.component.html',
                styleUrls: ['./menu-header.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/menu-list/menu-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/menu-list/menu-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListComponent", function() { return MenuListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a0) { return [a0]; };
function MenuListComponent_ion_menu_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-menu-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, page_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ios", "", page_r1.icon, "-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("md", "", page_r1.icon, "-sharp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1.title);
} }
class MenuListComponent {
    constructor() {
        this.darkChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
MenuListComponent.ɵfac = function MenuListComponent_Factory(t) { return new (t || MenuListComponent)(); };
MenuListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuListComponent, selectors: [["bba-menu-list"]], inputs: { pages: "pages", dark: "dark" }, outputs: { darkChange: "darkChange" }, decls: 7, vars: 2, consts: [["id", "menu-list", "lines", "none"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], ["slot", "start", "name", "moon-outline"], [3, "ngModel", "ngModelChange"], ["auto-hide", "false"], ["routerLinkActive", "selected", "routerDirection", "root", "lines", "none", "detail", "false", 3, "routerLink"], ["slot", "start", 3, "ios", "md"]], template: function MenuListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuListComponent_ion_menu_toggle_1_Template, 5, 6, "ion-menu-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dark Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenuListComponent_Template_ion_toggle_ngModelChange_6_listener($event) { return ctx.dark = $event; })("ngModelChange", function MenuListComponent_Template_ion_toggle_ngModelChange_6_listener() { return ctx.darkChange.emit(ctx.dark); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dark);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonMenuToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["#menu-list[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n#menu-list.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\n#menu-list.md[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\n#menu-list.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n#menu-list.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], #menu-list.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n#menu-list.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\n#menu-list.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\n#menu-list.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\n#menu-list.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n#menu-list.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #616e7e;\n}\n\n#menu-list.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n#menu-list.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 20px;\n}\n\n#menu-list.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n\n#menu-list.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\n#menu-list.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\n#menu-list.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n#menu-list.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #73849a;\n}\n\n#menu-list.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n#menu-list.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], #menu-list.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n#menu-list.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n\n.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n#menu-list.md[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9tZW51LWxpc3QvbWVudS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzREFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSx3REFBQTtFQUNBLDJEQUFBO0VBQ0EsVUFBQTtBQUFGIiwiZmlsZSI6ImFwcHMvbW9iaWxlL3NyYy9hcHAvY29tcG9uZW50cy9tZW51LWxpc3QvbWVudS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnUtbGlzdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuI21lbnUtbGlzdC5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbiNtZW51LWxpc3QubWQge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbiNtZW51LWxpc3QubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jbWVudS1saXN0Lm1kIGlvbi1saXN0LWhlYWRlcixcbiNtZW51LWxpc3QubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbiNtZW51LWxpc3QubWQgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG4jbWVudS1saXN0Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNtZW51LWxpc3QubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbiNtZW51LWxpc3QubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jbWVudS1saXN0Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbiNtZW51LWxpc3QubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI21lbnUtbGlzdC5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4jbWVudS1saXN0LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbiNtZW51LWxpc3QuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNtZW51LWxpc3QuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbiNtZW51LWxpc3QuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI21lbnUtbGlzdC5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG4jbWVudS1saXN0LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbiNtZW51LWxpc3QuaW9zIGlvbi1saXN0LWhlYWRlcixcbiNtZW51LWxpc3QuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4jbWVudS1saXN0LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaW9zIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI21lbnUtbGlzdC5tZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-menu-list',
                templateUrl: './menu-list.component.html',
                styleUrls: ['./menu-list.component.scss'],
            }]
    }], null, { pages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dark: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], darkChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/social-share/social-share.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-share/social-share.component.ts ***!
  \*******************************************************************/
/*! exports provided: SocialShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialShareComponent", function() { return SocialShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



class SocialShareComponent {
    constructor() {
        this.shared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
SocialShareComponent.ɵfac = function SocialShareComponent_Factory(t) { return new (t || SocialShareComponent)(); };
SocialShareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialShareComponent, selectors: [["bba-social-share"]], outputs: { shared: "shared" }, decls: 12, vars: 0, consts: [["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["name", "share-social"], ["side", "top"], ["color", "vimeo", 3, "click"], ["name", "logo-vimeo"], ["color", "instagram", 3, "click"], ["name", "logo-instagram"], ["color", "twitter", 3, "click"], ["name", "logo-twitter"], ["color", "facebook", 3, "click"], ["name", "logo-facebook"]], template: function SocialShareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-fab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-fab-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-fab-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-fab-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialShareComponent_Template_ion_fab_button_click_4_listener() { return ctx.shared.emit("Vimeo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-fab-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialShareComponent_Template_ion_fab_button_click_6_listener() { return ctx.shared.emit("Instagram"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-fab-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialShareComponent_Template_ion_fab_button_click_8_listener() { return ctx.shared.emit("Twitter"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-fab-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialShareComponent_Template_ion_fab_button_click_10_listener() { return ctx.shared.emit("Facebook"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFabList"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsLXNoYXJlL3NvY2lhbC1zaGFyZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialShareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-social-share',
                templateUrl: './social-share.component.html',
                styleUrls: ['./social-share.component.scss'],
            }]
    }], null, { shared: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/user-card/user-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-card/user-card.component.ts ***!
  \*************************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/courses/", a1]; };
const _c1 = function (a1, a3) { return ["/courses/", a1, "lessons", a3]; };
function UserCardComponent_ion_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-avatar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Current Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Go To Course ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Current Lesson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Watch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Total Courses Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Total Lessons Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.user.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.user.firstName + " profile picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.currentCourse.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r0.user.currentLesson.courseId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.currentLesson.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c1, ctx_r0.user.currentLesson.courseId, ctx_r0.user.currentLesson.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.coursesCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.lessonsCompleted);
} }
class UserCardComponent {
}
UserCardComponent.ɵfac = function UserCardComponent_Factory(t) { return new (t || UserCardComponent)(); };
UserCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCardComponent, selectors: [["bba-user-card"]], inputs: { user: "user" }, decls: 1, vars: 1, consts: [["class", "course-card", 4, "ngIf"], [1, "course-card"], ["detail", "false", "lines", "none", 1, "course-item"], ["slot", "start"], [3, "src", "alt"], ["detail", "false"], ["expand", "bock", "fill", "outline", 3, "routerLink"], [3, "routerLink"], ["slot", "end", "name", "play"], ["detail", "false", "lines", "none"]], template: function UserCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserCardComponent_ion_card_0_Template, 40, 16, "ion-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-user-card',
                templateUrl: './user-card.component.html',
                styleUrls: ['./user-card.component.scss'],
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/user-course-card/user-course-card.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/user-course-card/user-course-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserCourseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCourseCardComponent", function() { return UserCourseCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1, a3) { return ["/courses/", a1, "lessons", a3]; };
const _c1 = function (a1) { return ["/courses/", a1]; };
function UserCourseCardComponent_ion_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Current Lesson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Watch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Go To Course ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.user.currentCourse.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.currentCourse.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.currentCourse.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.currentLesson.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.currentLesson.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r0.user.currentLesson.courseId, ctx_r0.user.currentLesson.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r0.user.currentLesson.courseId));
} }
class UserCourseCardComponent {
}
UserCourseCardComponent.ɵfac = function UserCourseCardComponent_Factory(t) { return new (t || UserCourseCardComponent)(); };
UserCourseCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserCourseCardComponent, selectors: [["bba-user-course-card"]], inputs: { user: "user" }, decls: 1, vars: 1, consts: [["class", "course-card", 4, "ngIf"], [1, "course-card"], [3, "src"], ["detail", "false", "lines", "none", 1, "course-item"], ["detail", "false"], ["detail", "false", "lines", "none"], [3, "routerLink"], ["slot", "end", "name", "play"], ["lines", "none"], ["expand", "bock", "fill", "outline", 3, "routerLink"]], template: function UserCourseCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserCourseCardComponent_ion_card_0_Template, 27, 12, "ion-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21vYmlsZS9zcmMvYXBwL2NvbXBvbmVudHMvdXNlci1jb3Vyc2UtY2FyZC91c2VyLWNvdXJzZS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCourseCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bba-user-course-card',
                templateUrl: './user-course-card.component.html',
                styleUrls: ['./user-course-card.component.scss'],
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lukas/Projects/bba-ionic-quickstart/apps/mobile/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map