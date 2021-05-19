(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\15164\Downloads\user-management-app\src\main.ts */"zUnb");


/***/ }),

/***/ "9DFq":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "xdv0");






class AddUserComponent {
    constructor(router, userService, formBuilder) {
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        if (this.router.getCurrentNavigation().extras.state) {
            this.userData = this.router.getCurrentNavigation().extras.state;
            this.isEdit = true;
        }
        else {
            this.isEdit = false;
        }
    }
    ngOnInit() {
        if (this.isEdit) {
            this.userForm = this.formBuilder.group({
                id: [this.userData.id],
                title: [this.userData.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                firstName: [this.userData.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                lastName: [this.userData.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                email: [this.userData.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                imageUrl: [this.userData.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.userForm = this.formBuilder.group({
                id: [new Date().getTime()],
                title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                imageUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
    }
    saveUser() {
        if (this.userForm.invalid)
            return;
        if (this.isEdit) {
            this.userService.editUser(this.userForm.value);
            this.router.navigate(['/']);
        }
        else {
            this.userService.addUser(this.userForm.value);
            this.router.navigate(['/']);
        }
    }
    back() {
        this.router.navigate(['/']);
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], decls: 33, vars: 4, consts: [[1, "add-user", 3, "formGroup", "ngSubmit"], [1, "add-user-heading"], [1, "input-group"], ["for", "title", 1, "required"], ["formControlName", "title", "name", "title", "id", "title", 1, "input"], ["value", "Mr"], ["value", "Miss"], ["for", "firstName", 1, "required"], ["formControlName", "firstName", "type", "text", "id", "firstName", "name", "firstName", 1, "input"], ["for", "lastName", 1, "requried"], ["formControlName", "lastName", "type", "text", "id", "lastName", "name", "lastName", 1, "input"], ["for", "email", 1, "required"], ["formControlName", "email", "type", "text", "id", "email", "name", "email", 1, "input"], ["for", "imageUrl", 1, "required"], ["formControlName", "imageUrl", "type", "text", "id", "imageUrl", "name", "imageUrl", 1, "input"], [1, "justify-center"], ["type", "submit", 1, "btn", "btn-save", 3, "disabled"], [1, "btn", "btn-back", 3, "click"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_0_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Miss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_31_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isEdit ? "Edit" : "Add", " User Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isEdit ? "Update" : "Save", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: [".add-user[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 1rem auto;\n}\n.add-user[_ngcontent-%COMP%]   .add-user-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-align: center;\n  margin: 1rem 0;\n}\n.add-user[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.add-user[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  color: #333;\n  font-size: 0.9rem;\n}\n.add-user[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #333;\n  border-radius: 0.25rem;\n}\n.add-user[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]::after {\n  content: \"*\";\n  color: red;\n  margin-left: 0.25rem;\n}\n.add-user[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.add-user[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  border: 1px solid #c2185b;\n  background-color: #e91e63;\n  margin-right: 1rem;\n}\n.add-user[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  border: 1px solid #455a64;\n  background-color: #607d8b;\n}\n.add-user[_ngcontent-%COMP%]   .justify-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.add-user[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:disabled {\n  background: #f48fb1;\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUFJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFFTjtBQUNNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUNSO0FBR0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0U7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQURKO0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtdXNlciB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuXG4gIC5hZGQtdXNlci1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICB9XG4gIC5pbnB1dC1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICAgIC5pbnB1dCB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICB9XG4gICAgLnJlcXVpcmVkIHtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIqXCI7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYnRuIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ0bi1zYXZlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzIxODViO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG4gIC5idG4tYmFjayB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NWE2NDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xuICB9XG4gIC5qdXN0aWZ5LWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuYnRuLXNhdmU6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICNmNDhmYjE7XG4gICAgY3Vyc29yOiBuby1kcm9wO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-user',
                templateUrl: './add-user.component.html',
                styleUrls: ['./add-user.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'user-management-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app-component"], [1, "app-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app-component[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n.app-component[_ngcontent-%COMP%]   .app-content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  min-height: calc(100vh - 80px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FBRU4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbXBvbmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAuYXBwLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "XDvB":
/*!****************************************************!*\
  !*** ./src/app/users-list/users-list.component.ts ***!
  \****************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "xdv0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UsersListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_div_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Edit User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_div_9_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteUser(user_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Delete User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", user_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", user_r1.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", user_r1.title, ". ", user_r1.firstName, " ", user_r1.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
} }
class UsersListComponent {
    constructor(userSerivce, router) {
        this.userSerivce = userSerivce;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.userSerivce.usersListChange.subscribe((data) => {
            this.users = data;
        });
    }
    addUser() {
        this.router.navigate(['/add-user']);
    }
    editUser(user) {
        this.router.navigate(['/edit-user'], { state: user });
    }
    deleteUser(userId) {
        const isConfirm = confirm('Are you sure!! Do you want to delete the user?');
        if (isConfirm) {
            this.userSerivce.deleteUser(userId);
        }
    }
    onChange($event) {
        const value = $event.target.value;
        this.userSerivce.searchUser(value);
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], decls: 10, vars: 1, consts: [[1, "app-users"], [1, "justify-between"], ["type", "search", "placeholder", "Type someting and enter to search", 1, "search-input", 3, "change"], [1, "btn-add-user", 3, "click"], [1, "users-list"], ["class", "user", 4, "ngFor", "ngForOf"], [1, "user"], [3, "src", "alt"], [1, "user-content"], [1, "user-name"], [1, "user-email"], [1, "btn-container"], [1, "btn", "edit-user", 3, "click"], [1, "btn", "delete-user", 3, "click"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UsersListComponent_Template_input_change_5_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_6_listener() { return ctx.addUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersListComponent_div_9_Template, 12, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".app-users[_ngcontent-%COMP%]   .justify-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.app-users[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  width: 300px;\n  margin: 0 1rem;\n}\n.app-users[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.app-users[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  width: 300px;\n  background-color: #fff;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.app-users[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.app-users[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-content[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0.5rem 0;\n}\n.app-users[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-content[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n}\n.app-users[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-content[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.app-users[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-content[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  margin: 1rem 0 0;\n}\n.app-users[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-content[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .edit-user[_ngcontent-%COMP%] {\n  border: 1px solid #00796b;\n  background-color: #009688;\n  margin-right: 1rem;\n}\n.app-users[_ngcontent-%COMP%]   .users-list[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-content[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .delete-user[_ngcontent-%COMP%] {\n  border: 1px solid #455a64;\n  background-color: #607d8b;\n}\n.app-users[_ngcontent-%COMP%]   .btn-add-user[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  border: 1px solid #c2185b;\n  background-color: #e91e63;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNOO0FBQU07RUFDRSxhQUFBO0FBRVI7QUFEUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUdWO0FBRFE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQUdWO0FBRFE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFHVjtBQUZVO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlaO0FBRlU7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFJWjtBQUZVO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUlaO0FBRUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtdXNlcnMge1xuICAuanVzdGlmeS1iZXR3ZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zZWFyY2gtaW5wdXQge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gIH1cbiAgLnVzZXJzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC51c2VyIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBtYXJnaW46IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC51c2VyLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1lbWFpbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWRpdC11c2VyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDc5NmI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVsZXRlLXVzZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NWE2NDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5idG4tYWRkLXVzZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzIxODViO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-list',
                templateUrl: './users-list.component.html',
                styleUrls: ['./users-list.component.scss'],
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-list/users-list.component */ "XDvB");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-user/add-user.component */ "9DFq");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "fECr");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"],
        _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"],
                    _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/users"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 2, consts: [[1, "app-header"], [1, "app-header__title"], [3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Management App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".app-header[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 64px;\n}\n.app-header__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.app-header__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBR04iLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGhlaWdodDogNjRweDtcbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGEge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigate(['/']);
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 7, vars: 0, consts: [[1, "page-not-found"], [1, "title"], [1, "message"], [1, "btn-back", 3, "click"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The page you are looking for is not found :(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_button_click_5_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go Back To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-not-found[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 2rem 0;\n}\n.page-not-found[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0.5rem 0;\n}\n.page-not-found[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n.page-not-found[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  border: 1px solid #455a64;\n  background-color: #607d8b;\n  margin: 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNFO0VBQ0ksZ0JBQUE7QUFDTjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utbm90LWZvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMnJlbSAwO1xuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cbiAgLm1lc3NhZ2Uge1xuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgfVxuXG4gIC5idG4tYmFjayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTVhNjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user/add-user.component */ "9DFq");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-list/users-list.component */ "XDvB");







const routes = [
    {
        path: 'users',
        component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"],
    },
    {
        path: 'add-user',
        component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"],
    },
    {
        path: 'edit-user',
        component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/users',
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xdv0":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class UserService {
    constructor() {
        this.allUsersList = [
            {
                id: '0F8JIqi4zwvb77FGz6Wt',
                lastName: 'Fiedler',
                firstName: 'Heinz-Georg',
                email: 'heinz-georg.fiedler@example.com',
                title: 'Mr',
                imageUrl: 'https://randomuser.me/api/portraits/men/81.jpg',
            },
            {
                id: '0P6E1d4nr0L1ntW8cjGU',
                imageUrl: 'https://randomuser.me/api/portraits/women/74.jpg',
                lastName: 'Hughes',
                email: 'katie.hughes@example.com',
                title: 'Miss',
                firstName: 'Katie',
            },
            {
                id: '1Lkk06cOUCkiAsUXFLMN',
                title: 'Mr',
                lastName: 'Aasland',
                firstName: 'Vetle',
                imageUrl: 'https://randomuser.me/api/portraits/men/97.jpg',
                email: 'vetle.aasland@example.com',
            },
            {
                id: '1OuR3CWOEsfISTpFxsG7',
                imageUrl: 'https://randomuser.me/api/portraits/men/66.jpg',
                lastName: 'Vasquez',
                email: 'dylan.vasquez@example.com',
                title: 'Mr',
                firstName: 'Dylan',
            },
            {
                id: '1pRsh5nXDIH3pjEOZ17A',
                lastName: 'Vicente',
                title: 'Miss',
                firstName: 'Margarita',
                email: 'margarita.vicente@example.com',
                imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
            },
            {
                id: '3JAf8R85oIlxXd58Piqk',
                email: 'joey.oliver@example.com',
                title: 'Mr',
                firstName: 'Joey',
                lastName: 'Oliver',
                imageUrl: 'https://randomuser.me/api/portraits/men/61.jpg',
            },
            {
                id: '5aZRSdkcBOM6j3lkWEoP',
                imageUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
                email: 'lilja.lampinen@example.com',
                lastName: 'Lampinen',
                firstName: 'Lilja',
                title: 'Ms',
            },
            {
                id: '5tVxgsqPCjv2Ul5Rc7gw',
                email: 'abigail.liu@example.com',
                lastName: 'Liu',
                title: 'Miss',
                imageUrl: 'https://randomuser.me/api/portraits/women/83.jpg',
                firstName: 'Abigail',
            },
            {
                id: '6wy6UNkZueJfIUfq88d5',
                imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
                firstName: 'Melanie',
                email: 'melanie.pilz@example.com',
                title: 'Miss',
                lastName: 'Pilz',
            },
            {
                id: '7DbXNPWlNDR4QYVvFZjr',
                email: 'evan.carlson@example.com',
                firstName: 'Evan',
                imageUrl: 'https://randomuser.me/api/portraits/men/80.jpg',
                lastName: 'Carlson',
                title: 'Mr',
            },
        ];
        this.usersList = this.allUsersList;
        this.usersListChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.usersList);
    }
    addUser(user) {
        this.allUsersList.push(user);
        this.usersListChange.next(this.usersList);
    }
    editUser(user) {
        const index = this.usersList.findIndex((x) => x.id === user.id);
        this.allUsersList[index] = user;
        this.usersListChange.next(this.usersList);
    }
    deleteUser(userId) {
        const index = this.usersList.findIndex((user) => user.id === userId);
        this.allUsersList.splice(index, 1);
        this.usersListChange.next(this.usersList);
    }
    searchUser(searchInput) {
        this.usersList = this.allUsersList.filter(user => user.firstName.toLowerCase().includes(searchInput.toLowerCase()) || user.lastName.toLowerCase().includes(searchInput.toLowerCase()));
        this.usersListChange.next(this.usersList);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map