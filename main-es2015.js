(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-history/account-history.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-history/account-history.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header [title]=\"'history' | translate\"></app-account-header>\n\n<div class=\"history\">\n    <div class=\"select-type\">\n        <div class=\"select-box\">\n            All Accounts\n        </div>\n    </div>\n    <div class=\"history-table\">\n        <ng-container *ngFor=\"let data of history\">\n            <div class=\"tablerow\" [ngClass]=\"{isExpanded : data.isExpanded}\">\n                <div class=\"itemrow\">\n                    <div class=\"date\">{{data.time | date: 'MM-dd-yyyy H:mm'}}</div>\n                    <div class=\"type\">{{typeMap[data.activity] | translate}}</div>\n                    <div class=\"amount\">\n                        {{data.amount}}\n                    </div>\n                    <!-- <div class=\"icon\"><i *ngIf=\"!data.isExpanded\" class=\"icon-chevronright chevron-down\" (click)=\"data.isExpanded = true\"></i></div> -->\n                </div>\n                <!-- <div>\n                   <div class=\"address\">\n                       <div class=\"label\">\n                           {{'from'|translate}}: \n                       </div>\n                       <div class=\"value\">\n                            {{data.fromAddress}}\n                       </div>\n                       <div class=\"copy\">\n                           <i class=\"icon-documentcopy\"></i>\n                       </div>\n                   </div>\n                   <div class=\"address\">\n                        <div class=\"label\">\n                            {{'TXID'|translate}}: \n                        </div>\n                        <div class=\"value\">\n                            {{data.txid}}\n                        </div>\n                        <div class=\"copy\">\n                            <i class=\"icon-documentcopy\"></i>\n                        </div>\n                   </div>\n                </div> -->\n                <!-- <div class=\"closerow\">\n                    <div class=\"icon\">\n                        <i class=\"icon-chevronright chevron-up\" *ngIf=\"data.isExpanded\" (click)=\"data.isExpanded = false\"></i>\n                    </div>\n                </div> -->\n            </div>\n        </ng-container>\n    </div>\n\n    <div class=\"no-futher-activity\">\n        <div>\n            {{'no-further-activity' | translate}}\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-settings/account-settings.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-settings/account-settings.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\"  [ngClass]=\"{show: showAccount}\" (click)=\"close()\"></div>\n<div class=\"account-settings\" [ngClass]=\"{show: showAccount}\">\n    <div class=\"account-container\">\n        <div>\n            <div class=\"header\">\n                <i class=\"icon-close close\" (click)=\"close()\"></i>\n                <app-language-select class=\"language-select\" [darkBackground]=\"true\"></app-language-select>\n            </div>\n            <div class=\"info-container\">\n                <div class=\"background\">\n                    <app-animated-background [width]=\"'100%'\"></app-animated-background>\n                </div>\n                <div class=\"info\">\n                    <div *ngIf=\"authService.isLoggedIn\">\n                        <div class=\"label\">{{'hello'|translate}},</div>\n                        <div class=\"username\">{{authService.user.userName}}</div>\n                    </div>\n                    <div *ngIf=\"!authService.isLoggedIn\" \n                        class=\"label\"\n                        (click)=\"close()\"\n                    >\n                        <!-- {{'login-register-to-play' | translate}} -->\n                        {{'please-login-through-the-app' | translate}}\n                    </div>\n                    <div>\n                        <div class=\"label\">{{'balance'|translate}}</div>\n                        <div class=\"amount\">\n                            {{!authService.isLoggedIn ? '0' : authService.user.amountAvailable}} POST\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <ng-container *ngIf=\"!authService.isLoggedIn\">\n            <div class=\"link\" (click)=\"close()\">\n                {{'deposit' | translate}}\n            </div>\n            <div class=\"link\" (click)=\"close()\">\n                {{'bind-2fa' | translate}}\n            </div>\n            <div class=\"link\" [routerLink]=\"['/payout-history']\" (click)=\"close(true)\">\n                {{'payout-history' | translate}}\n            </div>\n            <div class=\"link\" (click)=\"close()\">\n                <button class=\"app-button dark-text\">\n                    {{'please-login-through-the-app' | translate}}!\n                    <!-- {{'login-register-to-play-now' | translate}}! -->\n                </button>\n            </div>        \n        </ng-container>\n        <ng-container *ngIf=\"authService.isLoggedIn\">\n            <div class=\"link\" [routerLink]=\"['/deposit']\" (click)=\"close(true)\">\n                {{'deposit' | translate}}\n            </div>\n            <div class=\"link\" [routerLink]=\"['/2fa']\" (click)=\"close(true)\">\n                {{'bind-2fa' | translate}}\n            </div>\n            <div class=\"link\" [routerLink]=\"['/payout-history']\" (click)=\"close(true)\">\n                {{'payout-history' | translate}}\n            </div>\n            <!-- <div class=\"link logout\" (click)=\"authService.isLoggedIn = false; close()\">\n                {{'logout' | translate}}\n            </div>     -->\n        </ng-container>    \n        <div class=\"link how-to-play\" [routerLink]=\"['/how-to-play']\" (click)=\"close(true)\">\n            {{'how-to-play' | translate}}\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/deposit/deposit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/deposit/deposit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header [title]=\"'deposit-funds' | translate\"></app-account-header>\r\n<div class=\"deposit\">\r\n    <!-- <div class=\"qr-container\">\r\n        <div class=\"qr-code\">\r\n            <img src=\"../../../assets/images/sample/qrcode.png\" alt=\"\">\r\n        </div>\r\n    </div> -->\r\n    <ng-container *ngIf=\"authService.user.depositAccount\">\r\n      <div class=\"message\">\r\n          <div>\r\n              {{'only-deposit-post-to-this-address' | translate}}.\r\n          </div>\r\n          <div>\r\n              {{'depositing-any-other-asset-here-may-result-in-permanent-loss' | translate}}.\r\n          </div>\r\n      </div>\r\n      <div class=\"address copy-pastable\">\r\n          <div>\r\n              {{authService.user.depositAccount}}\r\n          </div>\r\n          <div>\r\n              {{authService.user.memo}}\r\n          </div>\r\n      </div>\r\n      <div class=\"btn-container\">\r\n          <button class=\"app-button\" ngxClipboard [cbContent]=\"authService.user.depositAccount\">\r\n              {{'copy-account' | translate | uppercase}}\r\n              <i class=\"icon-documentcopy\"></i>\r\n          </button>\r\n          <button class=\"app-button\" ngxClipboard [cbContent]=\"authService.user.memo\">\r\n              {{'copy-memo' | translate | uppercase}}\r\n              <i class=\"icon-documentcopy\"></i>\r\n          </button>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"deposit-form\">\r\n      <input class=\"app-input\" [(ngModel)]=\"depositAmount\">\r\n      <button class=\"app-button\" (click)=\"deposit()\">\r\n        {{'deposit' | translate | uppercase}}\r\n      </button>\r\n    </div>\r\n    <div class=\"amount\">\r\n        <div class=\"available\">{{'available' | translate}}</div>\r\n        <div>{{authService.user.amountAvailable}} POST</div>\r\n    </div>\r\n    <div class=\"link\" [routerLink]=\"['/account-history']\">\r\n        {{'history' | translate}}\r\n    </div>\r\n    <div class=\"link\" [routerLink]=\"['/withdraw']\">\r\n        {{'withdraw' | translate}}\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header [simpleReturn]=\"true\"></app-account-header>\r\n<div class=\"login\">\r\n    <div class=\"logo\">\r\n      <img class=\"logo-image\" src=\"{{'logo' | translate}}\" alt=\"\">\r\n    </div>\r\n    <div class=\"input-form\">\r\n        <div class=\"input-row\">\r\n            <input type=\"text\"\r\n                [(ngModel)]=\"loginObj.userName\"\r\n                class=\"app-input\"\r\n                [placeholder]=\"'username'|translate\">\r\n        </div>\r\n        <div class=\"input-row app-input-group\">\r\n            <input [type]=\"loginObj.passwordType\" class=\"app-input\" [(ngModel)]=\"loginObj.password\" [placeholder]=\"'password'|translate\">\r\n            <div class=\"append\">\r\n                <i *ngIf=\"loginObj.passwordType === 'text'\"\r\n                    (click)=\"loginObj.passwordType = 'password'\"\r\n                    class=\"icon-eyeslash\"></i>\r\n                <i *ngIf=\"loginObj.passwordType === 'password'\"\r\n                    (click)=\"loginObj.passwordType = 'text'\"\r\n                    class=\"icon-eyenormal\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"input-row\">\r\n            <button [disabled]=\"!infoValid()\" class=\"app-button\" (click)=\"login()\">\r\n                {{'login' | translate | uppercase}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"register\" [routerLink]=\"['/register']\">\r\n        {{'create-new-account' | translate}}\r\n    </div>\r\n</div>\r\n<div class=\"language-container\">\r\n  <app-language-select class=\"language-select\" [darkBackground]=\"true\"></app-language-select>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/new-account-orientation/new-account-orientation.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/new-account-orientation/new-account-orientation.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header [simpleReturn]=\"true\"></app-account-header>\r\n\r\n<div class=\"orientation\">\r\n    <div class=\"message\">{{'hi-your-new-account-is-ready' | translate: [authService.user.userName]}}\r\n        <br>\r\n        <br>{{'remember-your-profile-is-anonymous-etc' | translate}}! ({{'optional' | translate}})\r\n    </div>\r\n    \r\n    <div class=\"deposit-funds\">\r\n        <button class=\"app-button\" [routerLink]=\"['/deposit']\"> {{'deposit-funds' | translate | uppercase}}</button>\r\n    </div>\r\n    \r\n    <!-- <div class=\"connect-2fa\">\r\n        {{'connect-2fa' | translate}}  ({{'optional' | translate}})\r\n    </div> -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header [simpleReturn]=\"true\"></app-account-header>\r\n<div class=\"register\">\r\n    <div class=\"info\">\r\n        {{'sign-up-for-an-anonymous-acount-and-start-playing-today' | translate}}.\r\n    </div>\r\n    <div class=\"input-form\">\r\n        <div class=\"input-row\">\r\n            <input type=\"text\" \r\n                [(ngModel)]=\"registrationObj.userName\"\r\n                class=\"app-input\" \r\n                [placeholder]=\"'username'|translate\">\r\n        </div>\r\n        <div class=\"input-row app-input-group\">\r\n            <input [type]=\"registrationObj.passwordType\" class=\"app-input\" [(ngModel)]=\"registrationObj.password\" [placeholder]=\"'password'|translate\">\r\n            <div class=\"append\">\r\n                <i *ngIf=\"registrationObj.passwordType === 'text'\" \r\n                    (click)=\"registrationObj.passwordType = 'password'\" \r\n                    class=\"icon-eyeslash\"></i>\r\n                <i *ngIf=\"registrationObj.passwordType === 'password'\" \r\n                    (click)=\"registrationObj.passwordType = 'text'\" \r\n                    class=\"icon-eyenormal\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"input-row app-input-group\">\r\n            <input [type]=\"registrationObj.password2Type\" class=\"app-input\" [(ngModel)]=\"registrationObj.password2\" [placeholder]=\"'password'|translate\">\r\n            <div class=\"append\">\r\n                <i *ngIf=\"registrationObj.password2Type === 'text'\" \r\n                    (click)=\"registrationObj.password2Type = 'password'\" \r\n                    class=\"icon-eyeslash\"></i>\r\n                <i *ngIf=\"registrationObj.password2Type === 'password'\" \r\n                    (click)=\"registrationObj.password2Type = 'text'\" \r\n                    class=\"icon-eyenormal\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"input-row\">\r\n            <button class=\"app-button\" [disabled]=\"!infoValid()\" (click)=\"register()\">\r\n                {{'register-new-account' | translate}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/two-factor/two-factor.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/two-factor/two-factor.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header *ngIf=\"step < 2\" [navigateBack]=\"navBack\" [title]=\"getTitle() | translate | uppercase\"></app-account-header>\n<div class=\"two-factor\">\n    <div *ngIf=\"step === 0\" class=\"step-0\">\n        <div class=\"qr-container\">\n            <div class=\"qr-code\">\n                <img src=\"../../../assets/images/sample/qrcode.png\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"message\">\n            <div>\n                {{'scan-this-code-with-your-2fa-app' | translate}}.\n            </div>\n            <div>\n                {{'please-backup-this-code-somewhere' | translate}}.\n            </div>\n            <div>\n                {{'once-your-account-is-bound-you-can-not-view-this-code-again' | translate}}\n            </div>\n        </div>\n\n        <div class=\"address copy-pastable\">\n            {{address}}\n        </div>\n\n        <div>\n            <button class=\"app-button\">\n                {{'copy-code' | translate | uppercase}}\n                <i class=\"icon-documentcopy\"></i>\n            </button>\n        </div>\n\n        <div class=\"link\" (click)=\"step=1\">\n            {{'next-step' | translate | uppercase}} \n            <i class=\"icon-chevronright\"></i>\n        </div>\n    </div>\n    <ng-container *ngIf=\"step === 1\">\n        <div class=\"message\">\n            {{'enter-your-2fa-code-and-press-confirm-to-bind-your-account' | translate}}.\n        </div>\n        <input class=\"app-input row\" [placeholder]=\"'6-digit-code' | translate\" type=\"text\">\n        <button class=\"app-button row\" (click)=\"confirmCode(2)\">{{'confirm' | translate | uppercase}}</button>\n    </ng-container>\n    <ng-container *ngIf=\"step === 2\">\n        <div class=\"confirmation\">\n            <div class=\"success-message\">\n                {{'success' | translate}}!\n                <br>\n                <br>\n                {{'your-account-is-now-bound' | translate}}\n            </div>\n        </div>\n        <button class=\"app-button\">\n            {{'finished' | translate | uppercase}}\n        </button>\n        <div class=\"link extra-margin\">\n            {{'deposit' | translate | uppercase}}\n        </div>\n        <div class=\"link extra-margin\">\n            {{'play-now' | translate | uppercase}}\n        </div>\n    </ng-container>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/withdraw/withdraw.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/withdraw/withdraw.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header [title]=\"'withdraw' | translate\"></app-account-header>\r\n<div class=\"withdraw\">\r\n    <div class=\"message\">\r\n        {{'withdraw-process-usually-takes-about-1-hour-or-less' | translate}}.\r\n    </div>\r\n    <div class=\"amount\">\r\n        <div class=\"available\">{{'available' | translate}}</div>\r\n        <div>{{authService.user.amountAvailable}} POST</div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <input type=\"text\" [(ngModel)]=\"amount\" (ngModelChange)=\"message=''\" [placeholder]=\"'withdrawal-amount'|translate\" class=\"app-input\">\r\n    </div>\r\n    <!-- <div class=\"row\">\r\n        <div class=\"withdraw-address\">\r\n            <div *ngIf=\"!showIcon\" class=\"placeholder\">\r\n                {{'withdrawal-address' | translate}}...\r\n            </div>\r\n            <i *ngIf=\"!showIcon\" class=\"icon-qrcode\" (click)=\"showIcon = true\"></i>\r\n            <div *ngIf=\"showIcon\">\r\n                {{address || 'work-in-progress' | translate}}\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"row\" (click)=\"withdraw()\">\r\n        <button class=\"app-button\">{{'submit-withdrawal' | translate | uppercase}}</button>\r\n    </div>\r\n    <div class=\"message\">\r\n        {{message | translate}}\r\n    </div>\r\n    <!-- <div class=\"message\">\r\n        {{'please-confirm-your-withdrawal-address' | translate}}\r\n    </div> -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\r\n  <div class=\"main-content\">\r\n    <div class=\"animated-background\">\r\n        <app-animated-background *ngIf=\"isHome()\"></app-animated-background>\r\n    </div>  \r\n    <app-account-settings></app-account-settings>\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/account-header/account-header.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/account-header/account-header.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"simpleReturn\" class=\"simple-return\">\n    <i class=\"icon-close\" (click)=\"navigateBack()\"></i>\n</div>\n<div  class=\"account-header\" *ngIf=\"!simpleReturn\">\n    <i class=\"icon-chevronleft\" (click)=\"navigateBack()\"></i>\n    <span class=\"title\">\n        {{title}}\n    </span>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-background/animated-background.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-background/animated-background.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background-container\">\n    <svg [ngStyle]=\"{'width': width}\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 436.924 291.282\">\n        <defs>\n          <linearGradient id=\"linear-gradient\" x1=\"380.439\" y1=\"338.678\" x2=\"56.484\" y2=\"-47.396\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#26352a\"/>\n            <stop offset=\"1\" stop-color=\"#2923ac\"/>\n          </linearGradient>\n          <linearGradient id=\"linear-gradient-2\" x1=\"99.464\" y1=\"37.273\" x2=\"192.622\" y2=\"37.273\" gradientUnits=\"userSpaceOnUse\">\n            <stop offset=\"0\" stop-color=\"#289cc7\"/>\n            <stop offset=\"1\" stop-color=\"#2a42e3\"/>\n          </linearGradient>\n          <linearGradient id=\"linear-gradient-3\" x1=\"-29.545\" y1=\"134.468\" x2=\"103.353\" y2=\"134.468\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-4\" x1=\"-70.68\" y1=\"183.173\" x2=\"152.889\" y2=\"183.173\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-5\" x1=\"43.504\" y1=\"203.105\" x2=\"153.765\" y2=\"203.105\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-6\" x1=\"-57.121\" y1=\"296.434\" x2=\"75.777\" y2=\"296.434\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-7\" x1=\"174.139\" y1=\"110.41\" x2=\"247.117\" y2=\"110.41\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-8\" x1=\"94.117\" y1=\"210.612\" x2=\"317.687\" y2=\"210.612\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-9\" x1=\"287.366\" y1=\"28.83\" x2=\"361.222\" y2=\"28.83\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-10\" x1=\"326.25\" y1=\"46.842\" x2=\"447.368\" y2=\"46.842\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-11\" x1=\"347.406\" y1=\"142.543\" x2=\"468.524\" y2=\"142.543\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-12\" x1=\"392.869\" y1=\"55.202\" x2=\"452.602\" y2=\"55.202\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-13\" x1=\"335.684\" y1=\"106.903\" x2=\"407.681\" y2=\"106.903\" xlink:href=\"#linear-gradient-2\"/>\n          <linearGradient id=\"linear-gradient-14\" x1=\"415.528\" y1=\"61.707\" x2=\"536.646\" y2=\"61.707\" xlink:href=\"#linear-gradient-2\"/>\n        </defs>\n        <g id=\"bg-animation\">\n          <g>\n            <rect x=\"-112.028\" y=\"108.826\" width=\"173.062\" height=\"28.982\" rx=\"14.491\" transform=\"translate(-62.727 3.021) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"52.926\" y=\"47.475\" width=\"65.626\" height=\"28.982\" rx=\"14.491\" transform=\"translate(-19.265 49.113) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <g>\n            <rect x=\"150.075\" y=\"138.811\" width=\"69.709\" height=\"14.571\" rx=\"7.285\" transform=\"translate(-47.561 107.48) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"216.518\" y=\"114.099\" width=\"26.434\" height=\"14.571\" rx=\"7.285\" transform=\"translate(-30.055 126.045) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <g>\n            <rect x=\"-56.693\" y=\"254.321\" width=\"69.709\" height=\"14.571\" rx=\"7.285\" transform=\"translate(-129.059 21.984) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"9.75\" y=\"229.609\" width=\"26.434\" height=\"14.571\" rx=\"7.285\" transform=\"translate(-111.553 40.55) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <g>\n            <rect x=\"180.855\" y=\"236.656\" width=\"113.413\" height=\"21.156\" rx=\"10.578\" transform=\"translate(-89.861 145.475) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"288.954\" y=\"196.452\" width=\"43.006\" height=\"21.156\" rx=\"10.578\" transform=\"translate(-61.379 175.68) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <g>\n            <rect x=\"11.311\" y=\"61.659\" width=\"10.995\" height=\"5.409\" rx=\"2.704\" transform=\"translate(-28.994 16.121) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"21.659\" y=\"55.952\" width=\"10.995\" height=\"5.409\" rx=\"2.704\" transform=\"translate(-24.951 20.409) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"32.007\" y=\"50.245\" width=\"10.995\" height=\"5.409\" rx=\"2.704\" transform=\"translate(-20.908 24.697) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"42.354\" y=\"44.538\" width=\"10.995\" height=\"5.409\" rx=\"2.704\" transform=\"translate(-16.865 28.985) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <path d=\"M68.963,122.843-111.853,222.57a6.766,6.766,0,0,1-9.192-2.657h0a6.767,6.767,0,0,1,2.657-9.193L62.428,110.994a6.766,6.766,0,0,1,9.192,2.657h0A6.765,6.765,0,0,1,68.963,122.843Z\" fill=\"#233d1e\"/>\n          <path d=\"M150.582,77.828l-61.21,33.759a6.765,6.765,0,0,1-9.192-2.657h0a6.765,6.765,0,0,1,2.657-9.192l61.21-33.76a6.766,6.766,0,0,1,9.192,2.657h0A6.767,6.767,0,0,1,150.582,77.828Z\" fill=\"#233d1e\"/>\n          <path d=\"M212.2,69.648,161.166,97.8a1.911,1.911,0,0,1-2.595-.75h0a1.911,1.911,0,0,1,.75-2.595L210.359,66.3a1.909,1.909,0,0,1,2.595.75h0A1.909,1.909,0,0,1,212.2,69.648Z\" fill=\"#233d1e\"/>\n          <path d=\"M235.242,56.942l-17.277,9.529a1.909,1.909,0,0,1-2.595-.75h0a1.911,1.911,0,0,1,.75-2.6L233.4,53.6a1.911,1.911,0,0,1,2.595.75h0A1.909,1.909,0,0,1,235.242,56.942Z\" fill=\"#233d1e\"/>\n          <g>\n            <rect x=\"60.997\" y=\"131.827\" width=\"62.106\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-53.142 61.086) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"120.192\" y=\"109.811\" width=\"23.551\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-37.545 77.627) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <g>\n            <rect x=\"219.992\" y=\"216.172\" width=\"62.106\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-74.105 148.361) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"279.188\" y=\"194.156\" width=\"23.551\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-58.508 164.902) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <g>\n            <rect x=\"184.531\" y=\"161.448\" width=\"62.106\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-52.086 124.43) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"243.727\" y=\"139.432\" width=\"23.551\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-36.489 140.971) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <g>\n            <rect x=\"51.701\" y=\"234.709\" width=\"62.106\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-103.985 69.39) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"110.896\" y=\"212.692\" width=\"23.551\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-88.388 85.931) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <path d=\"M75.267,42.966,24.229,71.115a1.909,1.909,0,0,1-2.594-.75h0a1.909,1.909,0,0,1,.75-2.595L73.423,39.621a1.909,1.909,0,0,1,2.594.75h0A1.909,1.909,0,0,1,75.267,42.966Z\" fill=\"#233d1e\"/>\n          <path d=\"M98.305,30.259,81.028,39.788a1.909,1.909,0,0,1-2.595-.75h0a1.91,1.91,0,0,1,.75-2.594l17.278-9.529a1.908,1.908,0,0,1,2.594.75h0A1.908,1.908,0,0,1,98.305,30.259Z\" fill=\"#233d1e\"/>\n          <path d=\"M192.329,12.585a2.354,2.354,0,0,1-.925,3.2l-10.031,5.533a2.355,2.355,0,1,0,2.274,4.124l4.286-2.364a2.355,2.355,0,1,1,2.275,4.124L114.116,69.169a2.355,2.355,0,0,1-2.274-4.124l10.839-5.979,1.525-.841L169.213,33.4a2.355,2.355,0,1,0-2.274-4.124L121.932,54.1a2.355,2.355,0,0,1-2.275-4.124l8.785-4.845,4.031-2.223a2.355,2.355,0,1,0-2.274-4.124l-4.032,2.223L113.7,47.883l-5,2.758a2.355,2.355,0,0,1-2.275-4.124l5-2.758,12.464-6.875,4.031-2.223a2.355,2.355,0,1,0-2.274-4.124l-4.032,2.223a2.355,2.355,0,0,1-2.274-4.124l47.377-26.13A2.355,2.355,0,0,1,169,6.63l-8.93,4.925-.682.376a2.448,2.448,0,0,1,.358-.157,2.352,2.352,0,0,0,2.241,4.063,2.352,2.352,0,0,1-.324.218l.681-.376,4.38-2.415a2.355,2.355,0,1,1,2.274,4.124L157.908,23.5,153.5,25.933a2.355,2.355,0,0,1-2.275-4.124l2.7-1.491,1.7-.94a2.355,2.355,0,0,0-2.274-4.124l-1.7.94-13.541,7.468-1.251.69a2.355,2.355,0,0,0,2.274,4.124l1.252-.69,3.493-1.926a2.355,2.355,0,1,1,2.274,4.124l-3.493,1.926-1.251.69a2.355,2.355,0,0,0,2.274,4.124l1.252-.69,15.244-8.408L189.13,11.66A2.354,2.354,0,0,1,192.329,12.585Zm-20.808-1.969a2.355,2.355,0,1,0,3.2.924A2.354,2.354,0,0,0,171.521,10.616Zm-64.885,57.3a2.355,2.355,0,1,0,3.2.924A2.354,2.354,0,0,0,106.636,67.916Zm-3.68-14.106a2.355,2.355,0,1,0-3.2-.925A2.355,2.355,0,0,0,102.956,53.81ZM178.6,12.091a2.355,2.355,0,1,0-3.2-.924A2.354,2.354,0,0,0,178.6,12.091Z\" fill=\"url(#linear-gradient-2)\"/>\n          <path d=\"M102.473,105.038a7.063,7.063,0,0,1-2.773,9.595L-5.244,172.513a7.063,7.063,0,0,1-9.6-2.773,7.062,7.062,0,0,1,2.774-9.595L7.994,149.081l7.614-4.2a7.062,7.062,0,0,0-6.822-12.368l-7.613,4.2a7.062,7.062,0,0,1-9.6-2.773,7.062,7.062,0,0,1,2.773-9.595l35.316-19.478a7.062,7.062,0,1,1,6.822,12.368l-9.14,5.041a7.062,7.062,0,1,0,6.821,12.368l9.14-5.041,26.176-14.437,23.392-12.9A7.063,7.063,0,0,1,102.473,105.038Zm-51.282,4.088a7.062,7.062,0,1,0-9.6-2.773A7.062,7.062,0,0,0,51.191,109.126Zm14.435-7.962a7.062,7.062,0,1,0-9.594-2.773A7.062,7.062,0,0,0,65.626,101.164Zm-91.518,66.607a7.063,7.063,0,0,0-2.774,9.6,7.063,7.063,0,0,0,9.595,2.773,7.063,7.063,0,0,0,2.774-9.595A7.063,7.063,0,0,0-25.892,167.771Z\" fill=\"url(#linear-gradient-3)\"/>\n          <path d=\"M152.45,113.7a3.53,3.53,0,0,1-1.387,4.8L95.52,149.128,38.446,180.607l-6.775,3.737a3.53,3.53,0,0,0-1.387,4.8h0a3.531,3.531,0,0,0,4.8,1.387l6.774-3.737,36.752-20.27a3.531,3.531,0,1,1,3.411,6.184L-65.443,254.036a3.531,3.531,0,0,1-4.8-1.387,3.53,3.53,0,0,1,1.387-4.8L-39.4,231.6l31.361-17.3,32.489-17.919a3.531,3.531,0,0,0,1.387-4.8h0a3.531,3.531,0,0,0-4.8-1.387l-32.489,17.919-4.032,2.224a3.53,3.53,0,0,1-4.8-1.387,3.531,3.531,0,0,1,1.386-4.8l7.689-4.241,2.2-1.212a3.53,3.53,0,0,0,1.387-4.8,3.531,3.531,0,0,0-4.8-1.387l-2.2,1.212-50.275,27.728a3.531,3.531,0,0,1-4.8-1.386,3.531,3.531,0,0,1,1.387-4.8L42.831,153.992a3.531,3.531,0,1,1,3.411,6.184l-6.594,3.637-3.292,1.816a3.531,3.531,0,0,0,3.411,6.184L43.059,170l60.558-33.4,44.035-24.288A3.531,3.531,0,0,1,152.45,113.7ZM53.311,156.278a3.531,3.531,0,1,0-4.8-1.387A3.531,3.531,0,0,0,53.311,156.278Zm32.737,6.14a3.531,3.531,0,1,0,4.8,1.387A3.531,3.531,0,0,0,86.048,162.418Zm7.722-4.259a3.531,3.531,0,1,0,4.8,1.386A3.531,3.531,0,0,0,93.77,158.159ZM-21.751,209.775a3.53,3.53,0,0,0-4.8-1.387,3.531,3.531,0,0,0-1.387,4.8,3.532,3.532,0,0,0,4.8,1.386A3.531,3.531,0,0,0-21.751,209.775Z\" fill=\"url(#linear-gradient-4)\"/>\n          <path d=\"M153.417,173.886a2.786,2.786,0,0,1-1.094,3.786l-11.873,6.549a2.787,2.787,0,1,0,2.692,4.881l5.073-2.8a2.787,2.787,0,0,1,2.692,4.881l-90.06,49.671a2.787,2.787,0,1,1-2.692-4.881L70.984,228.9l1.805-1,53.269-29.38a2.787,2.787,0,1,0-2.692-4.881L70.1,223.023a2.787,2.787,0,0,1-2.692-4.881l10.4-5.735,4.772-2.631a2.787,2.787,0,0,0-2.692-4.881l-4.772,2.631-14.752,8.137-5.92,3.265a2.787,2.787,0,0,1-2.692-4.881l5.919-3.265,14.753-8.137,4.772-2.631a2.787,2.787,0,0,0-2.692-4.881l-4.772,2.631a2.787,2.787,0,1,1-2.692-4.881l56.074-30.927a2.787,2.787,0,1,1,2.692,4.881l-10.57,5.83-.806.445a2.679,2.679,0,0,1,.423-.186,2.783,2.783,0,0,0,2.652,4.808,2.764,2.764,0,0,1-.383.259l.806-.445,5.184-2.859a2.787,2.787,0,0,1,2.692,4.881l-13.121,7.237-5.217,2.877a2.787,2.787,0,1,1-2.692-4.881l3.2-1.765,2.017-1.112a2.787,2.787,0,1,0-2.692-4.881l-2.017,1.112L89.25,187l-1.481.817a2.787,2.787,0,0,0,2.692,4.881l1.481-.817,4.134-2.28a2.787,2.787,0,1,1,2.692,4.881l-4.134,2.28-1.481.817a2.787,2.787,0,0,0,2.692,4.881l1.481-.817,18.043-9.951,34.262-18.9A2.787,2.787,0,0,1,153.417,173.886Zm-24.628-2.331a2.787,2.787,0,1,0,3.787,1.094A2.786,2.786,0,0,0,128.789,171.555Zm-76.8,67.819a2.787,2.787,0,1,0,3.787,1.094A2.786,2.786,0,0,0,51.993,239.374Zm-4.355-16.7a2.787,2.787,0,1,0-3.787-1.094A2.786,2.786,0,0,0,47.638,222.678ZM137.165,173.3a2.787,2.787,0,1,0-3.787-1.094A2.788,2.788,0,0,0,137.165,173.3Z\" fill=\"url(#linear-gradient-5)\"/>\n          <path d=\"M74.9,267.005a7.062,7.062,0,0,1-2.774,9.594L-32.819,334.48a7.063,7.063,0,0,1-9.595-2.774,7.063,7.063,0,0,1,2.773-9.6l20.06-11.063,7.613-4.2a7.063,7.063,0,0,0,2.774-9.595,7.063,7.063,0,0,0-9.6-2.774l-7.614,4.2A7.063,7.063,0,0,1-36,295.906a7.063,7.063,0,0,1,2.774-9.6L2.092,266.833A7.063,7.063,0,0,1,8.913,279.2l-9.14,5.041A7.062,7.062,0,0,0,6.6,296.611l9.14-5.041,26.176-14.437,23.392-12.9A7.062,7.062,0,0,1,74.9,267.005Zm-51.283,4.088a7.062,7.062,0,1,0-9.594-2.774A7.063,7.063,0,0,0,23.615,271.093Zm14.436-7.962a7.062,7.062,0,1,0-9.6-2.773A7.062,7.062,0,0,0,38.051,263.131Zm-91.519,66.606a7.063,7.063,0,0,0-2.773,9.595,7.063,7.063,0,0,0,9.595,2.774,7.063,7.063,0,0,0,2.773-9.595A7.062,7.062,0,0,0-53.468,329.737Z\" fill=\"url(#linear-gradient-6)\"/>\n          <path d=\"M246.634,94.249a3.878,3.878,0,0,1-1.523,5.269L187.483,131.3a3.878,3.878,0,0,1-3.746-6.792l11.016-6.076,4.181-2.306a3.878,3.878,0,1,0-3.746-6.791l-4.181,2.306a3.878,3.878,0,0,1-3.746-6.792l19.393-10.7a3.878,3.878,0,1,1,3.746,6.792l-5.019,2.768a3.878,3.878,0,1,0,3.746,6.792l5.019-2.769,14.374-7.927,12.845-7.085A3.877,3.877,0,0,1,246.634,94.249Zm-28.161,2.245a3.878,3.878,0,1,0-5.268-1.523A3.878,3.878,0,0,0,218.473,96.494Zm7.928-4.372a3.878,3.878,0,1,0-5.269-1.523A3.879,3.879,0,0,0,226.4,92.122ZM176.145,128.7a3.878,3.878,0,1,0,5.269,1.523A3.878,3.878,0,0,0,176.145,128.7Z\" fill=\"url(#linear-gradient-7)\"/>\n          <path d=\"M317.247,141.136a3.531,3.531,0,0,1-1.387,4.8l-55.542,30.634-57.075,31.479-6.775,3.736a3.531,3.531,0,0,0-1.387,4.8h0a3.531,3.531,0,0,0,4.8,1.387l6.774-3.736,36.752-20.27a3.531,3.531,0,1,1,3.411,6.184L99.355,281.475a3.531,3.531,0,1,1-3.411-6.184L125.4,259.044l31.36-17.3,32.489-17.919a3.531,3.531,0,0,0,1.387-4.8h0a3.531,3.531,0,0,0-4.8-1.386l-32.489,17.918-4.032,2.224a3.531,3.531,0,1,1-3.41-6.184l7.688-4.24,2.2-1.212a3.531,3.531,0,1,0-3.411-6.184l-2.2,1.212L99.912,248.907a3.531,3.531,0,1,1-3.411-6.184l111.128-61.291a3.531,3.531,0,1,1,3.41,6.184l-6.593,3.637-3.292,1.815a3.531,3.531,0,1,0,3.41,6.184l3.292-1.815,60.558-33.4,44.035-24.287A3.532,3.532,0,0,1,317.247,141.136Zm-99.139,42.581a3.531,3.531,0,1,0-4.8-1.386A3.531,3.531,0,0,0,218.108,183.717Zm32.737,6.14a3.531,3.531,0,1,0,4.8,1.387A3.532,3.532,0,0,0,250.845,189.857Zm7.723-4.259a3.531,3.531,0,1,0,4.8,1.387A3.531,3.531,0,0,0,258.568,185.6ZM143.047,237.214a3.531,3.531,0,1,0-1.387,4.8A3.532,3.532,0,0,0,143.047,237.214Z\" fill=\"url(#linear-gradient-8)\"/>\n          <path d=\"M388.693,2.441l-68.348,37.7a7.852,7.852,0,0,1-10.666-3.083h0a7.851,7.851,0,0,1,3.083-10.666l68.348-37.7a7.851,7.851,0,0,1,10.666,3.082h0A7.85,7.85,0,0,1,388.693,2.441Z\" fill=\"#233d1e\"/>\n          <g>\n            <rect x=\"329.083\" y=\"87.207\" width=\"37.765\" height=\"7.894\" rx=\"3.947\" transform=\"translate(-0.752 179.385) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"365.078\" y=\"73.819\" width=\"14.32\" height=\"7.894\" rx=\"3.947\" transform=\"translate(8.732 189.443) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <path d=\"M339.326-.54,313.169,13.886a3.947,3.947,0,0,1-5.362-1.549h0a3.947,3.947,0,0,1,1.55-5.363L335.513-7.452a3.947,3.947,0,0,1,5.362,1.55h0A3.946,3.946,0,0,1,339.326-.54Z\" fill=\"#233d1e\"/>\n          <g>\n            <rect x=\"424.758\" y=\"27.812\" width=\"5.957\" height=\"2.93\" rx=\"1.465\" transform=\"matrix(0.876, -0.483, 0.483, 0.876, 39.051, 210.216)\" fill=\"#233d1e\"/>\n            <rect x=\"430.364\" y=\"24.72\" width=\"5.957\" height=\"2.93\" rx=\"1.465\" transform=\"translate(41.241 212.539) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"435.97\" y=\"21.628\" width=\"5.957\" height=\"2.93\" rx=\"1.465\" transform=\"translate(43.431 214.862) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <path d=\"M401.9,14.159,303.945,68.185a3.665,3.665,0,0,1-4.98-1.44h0a3.666,3.666,0,0,1,1.439-4.98L398.36,7.739a3.665,3.665,0,0,1,4.98,1.44h0A3.665,3.665,0,0,1,401.9,14.159Z\" fill=\"#233d1e\"/>\n          <path d=\"M446.118-10.229,412.958,8.06a3.665,3.665,0,0,1-4.98-1.439h0a3.665,3.665,0,0,1,1.439-4.98l33.16-18.289a3.666,3.666,0,0,1,4.98,1.439h0A3.665,3.665,0,0,1,446.118-10.229Z\" fill=\"#233d1e\"/>\n          <g>\n            <rect x=\"389.384\" y=\"76.507\" width=\"33.645\" height=\"2.069\" rx=\"1.035\" transform=\"translate(13.064 205.821) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"421.453\" y=\"64.579\" width=\"12.758\" height=\"2.069\" rx=\"1.035\" transform=\"translate(21.514 214.781) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <g>\n            <rect x=\"368.125\" y=\"129.656\" width=\"33.645\" height=\"2.069\" rx=\"1.035\" transform=\"translate(-15.248 202.163) rotate(-28.878)\" fill=\"#233d1e\"/>\n            <rect x=\"400.194\" y=\"117.728\" width=\"12.758\" height=\"2.069\" rx=\"1.035\" transform=\"translate(-6.798 211.123) rotate(-28.878)\" fill=\"#233d1e\"/>\n          </g>\n          <path d=\"M360.989,9.258a1.866,1.866,0,0,1-.733,2.536L352.3,16.181a1.867,1.867,0,0,0,1.8,3.269l3.4-1.874a1.867,1.867,0,1,1,1.8,3.269L298.983,54.117a1.867,1.867,0,1,1-1.8-3.27l8.593-4.739,1.209-.667,35.681-19.68a1.867,1.867,0,1,0-1.8-3.269L305.179,42.171a1.867,1.867,0,0,1-1.8-3.269l6.964-3.841,3.2-1.763a1.867,1.867,0,0,0-1.8-3.27l-3.2,1.763-9.882,5.45-3.965,2.187a1.867,1.867,0,0,1-1.8-3.269l3.965-2.187,9.882-5.45,3.2-1.763a1.867,1.867,0,1,0-1.8-3.269l-3.2,1.762a1.867,1.867,0,0,1-1.8-3.269l37.56-20.716a1.867,1.867,0,0,1,1.8,3.27l-7.08,3.905-.54.3a1.862,1.862,0,0,1,.283-.125,1.865,1.865,0,0,0,1.777,3.221,1.924,1.924,0,0,1-.257.173l.541-.3L340.685,9.8a1.867,1.867,0,1,1,1.8,3.27L333.7,17.913l-3.494,1.927a1.867,1.867,0,1,1-1.8-3.269l2.144-1.183,1.351-.745a1.867,1.867,0,1,0-1.8-3.269l-1.351.745-10.735,5.92-.992.548a1.867,1.867,0,0,0,1.8,3.269l.992-.547,2.769-1.527a1.867,1.867,0,1,1,1.8,3.269l-2.769,1.527-.992.548a1.867,1.867,0,1,0,1.8,3.269l.992-.547L335.5,21.182,358.453,8.525A1.866,1.866,0,0,1,360.989,9.258ZM344.492,7.7a1.867,1.867,0,1,0,2.537.733A1.866,1.866,0,0,0,344.492,7.7Zm-51.44,45.426a1.867,1.867,0,1,0,2.537.733A1.868,1.868,0,0,0,293.052,53.123ZM290.135,41.94a1.867,1.867,0,1,0-2.536-.733A1.866,1.866,0,0,0,290.135,41.94ZM350.1,8.866a1.867,1.867,0,1,0-2.536-.733A1.867,1.867,0,0,0,350.1,8.866Z\" fill=\"url(#linear-gradient-9)\"/>\n          <path d=\"M447.13,9.2a1.914,1.914,0,0,1-.752,2.6l-30.09,16.6-30.92,17.054-3.67,2.024a1.913,1.913,0,0,0-.751,2.6h0a1.913,1.913,0,0,0,2.6.751l3.67-2.024,19.91-10.981a1.913,1.913,0,1,1,1.848,3.35l-79.887,44.06a1.913,1.913,0,1,1-1.847-3.35l15.958-8.8,16.99-9.37L377.788,54a1.913,1.913,0,0,0,.752-2.6h0a1.913,1.913,0,0,0-2.6-.752l-17.6,9.708-2.184,1.2a1.913,1.913,0,0,1-1.848-3.351l4.165-2.3,1.19-.656a1.913,1.913,0,0,0-1.848-3.351l-1.19.657L329.389,67.588a1.913,1.913,0,0,1-1.848-3.351l60.2-33.2a1.913,1.913,0,0,1,1.848,3.351l-3.572,1.97-1.783.983a1.913,1.913,0,1,0,1.847,3.351l1.784-.984L420.674,21.61,444.531,8.452A1.913,1.913,0,0,1,447.13,9.2ZM393.421,32.272a1.913,1.913,0,1,0-2.6-.752A1.914,1.914,0,0,0,393.421,32.272ZM411.157,35.6a1.913,1.913,0,1,0,2.6.751A1.914,1.914,0,0,0,411.157,35.6Zm4.183-2.308a1.913,1.913,0,1,0,2.6.752A1.913,1.913,0,0,0,415.34,33.29ZM352.757,61.253a1.913,1.913,0,1,0-.751,2.6A1.913,1.913,0,0,0,352.757,61.253Z\" fill=\"url(#linear-gradient-10)\"/>\n          <path d=\"M468.286,104.905a1.913,1.913,0,0,1-.752,2.6l-30.09,16.6-30.92,17.054-3.67,2.024a1.913,1.913,0,0,0-.751,2.6h0a1.912,1.912,0,0,0,2.6.751l3.67-2.024,19.91-10.981a1.913,1.913,0,1,1,1.848,3.35l-79.886,44.061a1.913,1.913,0,0,1-1.848-3.351l15.958-8.8,16.99-9.371,17.6-9.707a1.913,1.913,0,0,0,.751-2.6h0a1.912,1.912,0,0,0-2.6-.751l-17.6,9.707-2.184,1.2a1.913,1.913,0,1,1-1.848-3.35l4.165-2.3,1.19-.656a1.913,1.913,0,1,0-1.847-3.35l-1.191.656-27.236,15.022a1.913,1.913,0,1,1-1.847-3.35l60.2-33.2a1.913,1.913,0,1,1,1.848,3.35l-3.572,1.97-1.783.984a1.913,1.913,0,1,0,1.847,3.35l1.784-.984,32.807-18.094,23.856-13.157A1.913,1.913,0,0,1,468.286,104.905Zm-53.709,23.068a1.913,1.913,0,1,0-2.6-.751A1.913,1.913,0,0,0,414.577,127.973Zm17.736,3.326a1.913,1.913,0,1,0,2.6.751A1.912,1.912,0,0,0,432.313,131.3Zm4.183-2.307a1.913,1.913,0,1,0,2.6.751A1.913,1.913,0,0,0,436.5,128.992Zm-62.583,27.962a1.913,1.913,0,1,0-.751,2.6A1.913,1.913,0,0,0,373.913,156.954Z\" fill=\"url(#linear-gradient-11)\"/>\n          <path d=\"M452.414,39.372a1.51,1.51,0,0,1-.593,2.052l-6.432,3.547a1.51,1.51,0,1,0,1.459,2.645L449.6,46.1a1.51,1.51,0,0,1,1.458,2.644l-48.789,26.91a1.51,1.51,0,1,1-1.459-2.645l6.95-3.833.978-.539L437.593,52.72a1.51,1.51,0,0,0-1.459-2.644L407.276,65.992a1.51,1.51,0,1,1-1.458-2.644l5.632-3.107,2.585-1.425a1.51,1.51,0,0,0-1.458-2.645L409.992,57.6,402,62.005l-3.207,1.769a1.51,1.51,0,1,1-1.459-2.645l3.207-1.768,7.992-4.408,2.585-1.426a1.51,1.51,0,0,0-1.458-2.644l-2.585,1.426a1.51,1.51,0,0,1-1.458-2.645L435.994,32.91a1.51,1.51,0,1,1,1.459,2.644l-5.726,3.158-.437.241a1.548,1.548,0,0,1,.229-.1,1.508,1.508,0,0,0,1.437,2.605,1.518,1.518,0,0,1-.208.141l.437-.241,2.808-1.549a1.51,1.51,0,0,1,1.458,2.644l-7.107,3.92-2.827,1.559a1.51,1.51,0,1,1-1.458-2.644l1.733-.956,1.093-.6a1.51,1.51,0,0,0-1.458-2.644l-1.093.6-8.682,4.789-.8.442a1.51,1.51,0,0,0,1.458,2.645l.8-.443,2.24-1.235a1.51,1.51,0,0,1,1.458,2.644l-2.239,1.235-.8.443a1.51,1.51,0,0,0,1.459,2.644l.8-.442,9.775-5.391L450.363,38.78A1.509,1.509,0,0,1,452.414,39.372ZM439.072,38.11a1.51,1.51,0,1,0,2.051.593A1.509,1.509,0,0,0,439.072,38.11Zm-41.6,36.74a1.51,1.51,0,1,0,2.052.593A1.511,1.511,0,0,0,397.468,74.85Zm-2.359-9.044a1.51,1.51,0,1,0-2.052-.593A1.512,1.512,0,0,0,395.109,65.806Zm48.5-26.75a1.51,1.51,0,1,0-2.051-.593A1.51,1.51,0,0,0,443.609,39.056Z\" fill=\"url(#linear-gradient-12)\"/>\n          <path d=\"M407.2,90.96a3.826,3.826,0,0,1-1.5,5.2l-56.853,31.356a3.826,3.826,0,0,1-3.7-6.7l10.868-5.994,4.124-2.275a3.826,3.826,0,1,0-3.695-6.7l-4.125,2.275a3.826,3.826,0,1,1-3.695-6.7l19.132-10.552a3.826,3.826,0,0,1,3.695,6.7l-4.951,2.731a3.826,3.826,0,1,0,3.7,6.7l4.952-2.731,14.181-7.821,12.672-6.99A3.827,3.827,0,0,1,407.2,90.96Zm-27.782,2.215a3.826,3.826,0,1,0-5.2-1.5A3.827,3.827,0,0,0,379.422,93.175Zm7.821-4.314a3.826,3.826,0,1,0-5.2-1.5A3.825,3.825,0,0,0,387.243,88.861Zm-49.58,36.084a3.826,3.826,0,1,0,5.2,1.5A3.826,3.826,0,0,0,337.663,124.945Z\" fill=\"url(#linear-gradient-13)\"/>\n          <path d=\"M536.408,24.069a1.913,1.913,0,0,1-.752,2.6l-30.09,16.6-30.92,17.054-3.67,2.024a1.913,1.913,0,0,0-.751,2.6h0a1.912,1.912,0,0,0,2.6.751l3.67-2.024L496.4,52.686a1.913,1.913,0,1,1,1.848,3.35L418.365,100.1a1.913,1.913,0,0,1-1.847-3.351l15.958-8.8,16.99-9.371,17.6-9.707a1.913,1.913,0,0,0,.751-2.6h0a1.912,1.912,0,0,0-2.6-.751l-17.6,9.707-2.184,1.2a1.913,1.913,0,0,1-1.848-3.35l4.165-2.3,1.19-.656a1.913,1.913,0,1,0-1.847-3.35l-1.191.656L418.667,82.453a1.913,1.913,0,0,1-1.848-3.35l60.2-33.2a1.913,1.913,0,1,1,1.848,3.35l-3.572,1.97-1.783.983a1.913,1.913,0,1,0,1.847,3.351l1.784-.984,32.807-18.094,23.856-13.158A1.914,1.914,0,0,1,536.408,24.069ZM482.7,47.137a1.913,1.913,0,1,0-2.6-.751A1.913,1.913,0,0,0,482.7,47.137Zm17.736,3.326a1.913,1.913,0,1,0,2.6.751A1.912,1.912,0,0,0,500.435,50.463Zm4.183-2.307a1.913,1.913,0,1,0,2.6.751A1.913,1.913,0,0,0,504.618,48.156ZM442.035,76.118a1.913,1.913,0,1,0-.751,2.6A1.913,1.913,0,0,0,442.035,76.118Z\" fill=\"url(#linear-gradient-14)\"/>\n          <path d=\"M148.516,96.3l-.489-.895L263.289,32.427l.488.9Z\" fill=\"#a235c8\"/>\n          <path d=\"M85.072,96.3l-.488-.895L199.846,32.427l.488.9Z\" fill=\"#a235c8\"/>\n          <path d=\"M202.011,300.285l-.488-.9,115.262-62.977.488.895Z\" fill=\"#a235c8\"/>\n          <path d=\"M260.3,276.455l-.489-.895,115.262-62.977.489.894Z\" fill=\"#a235c8\"/>\n          <path d=\"M72.259,251.393l-.489-.9,115.262-62.977.489.9Z\" fill=\"#a235c8\"/>\n          <path d=\"M45.966,197.6l-.489-.9,115.262-62.977.489.894Z\" fill=\"#a235c8\"/>\n          <path d=\"M231.958,137.776l-.489-.9,45.665-24.951.489.895Z\" fill=\"#a235c8\"/>\n          <path d=\"M64.591,37.871l-.489-.9,45.665-24.951.489.895Z\" fill=\"#a235c8\"/>\n          <path d=\"M410.05,158.251l-.489-.9,45.665-24.95.489.894Z\" fill=\"#a235c8\"/>\n          <path d=\"M275.189,16.908l-.489-.895,45.665-24.95.489.894Z\" fill=\"#a235c8\"/>\n          <path d=\"M284.93,15.372l-.489-.895,45.665-24.95.489.894Z\" fill=\"#a235c8\"/>\n          <path d=\"M296.538,75.934l-.489-.895,45.665-24.951.489.895Z\" fill=\"#a235c8\"/>\n          <path d=\"M366.782,120.177l-.489-.894,45.665-24.951.489.9Z\" fill=\"#a235c8\"/>\n          <path d=\"M337.68,163.805l-.489-.894,55.262-30.195.489.895Z\" fill=\"#a235c8\"/>\n          <path d=\"M409.537,44.822l-.489-.9L464.31,13.732l.489.9Z\" fill=\"#a235c8\"/>\n          <path d=\"M-58.88,84.276l-.488-.895L55.893,20.4l.489.895Z\" fill=\"#a235c8\"/>\n        </g>\n      </svg>\n</div>\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-coins/animated-coins.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-coins/animated-coins.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg id=\"coins-animation\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\r\n  <g id=\"coins-parts\" style=\"opacity: 0;\">\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n  </g>\r\n</svg>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-confetti/animated-confetti.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-confetti/animated-confetti.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg id=\"confetti\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\r\n  <g id=\"confetti-particles\" style=\"opacity: 0;\">\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#ed1d63\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#fcb316\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#fcb316\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#ed1d63\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#ed1d63\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#fcb316\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#fcb316\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#ed1d63\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#fcb316\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#fcb316\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#ed1d63\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#ed1d63\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#42bcec\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#fcb316\"/>\r\n    <rect x=\"384.53\" y=\"786.41\" width=\"30.94\" height=\"13.59\" fill=\"#7452a2\"/>\r\n  </g>\r\n</svg>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-question/animated-question.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-question/animated-question.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <svg id=\"questionmark-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25.62 24.99\">\n    <g id=\"circles-around\">\n      <circle cx=\"10.27\" cy=\"0.92\" r=\"0.5\" fill=\"#ff0060\" style=\"transform-origin: 10.27px 0.92px;\"></circle>\n      <circle cx=\"2.83\" cy=\"6.1\" r=\"0.5\" fill=\"#00c0ff\" style=\"transform-origin: 2.83px 6.1px;\"></circle>\n      <circle cx=\"1.23\" cy=\"15.03\" r=\"0.5\" fill=\"#9000ff\" style=\"transform-origin: 1.23px 15.03px;\"></circle>\n      <circle cx=\"6.42\" cy=\"22.47\" r=\"0.5\" fill=\"#ffb400\" style=\"transform-origin: 6.42px 22.47px;\"></circle>\n      <circle cx=\"15.35\" cy=\"24.07\" r=\"0.5\" fill=\"#9000ff\" style=\"transform-origin: 15.35px 24.07px;\"></circle>\n      <circle cx=\"22.79\" cy=\"18.88\" r=\"0.5\" fill=\"#00c0ff\" style=\"transform-origin: 22.79px 18.88px;\"></circle>\n      <circle cx=\"24.39\" cy=\"9.96\" r=\"0.5\" fill=\"#ff0060\" style=\"transform-origin: 24.39px 9.96px;\"></circle>\n      <circle cx=\"19.2\" cy=\"2.51\" r=\"0.5\" fill=\"#ffb400\" style=\"transform-origin: 19.2px 2.51px;\"></circle>\n    </g>\n    <g id=\"circles-around-2\">\n      <circle cx=\"19.05\" cy=\"5.16\" r=\"0.41\" fill=\"#9000ff\" style=\"transform-origin: 19.05px 5.16px;\"></circle>\n      <circle cx=\"12.03\" cy=\"2.9\" r=\"0.41\" fill=\"#00c0ff\" style=\"transform-origin: 12.03px 2.9px;\"></circle>\n      <circle cx=\"5.47\" cy=\"6.26\" r=\"0.41\" fill=\"#9000ff\" style=\"transform-origin: 5.47px 6.26px;\"></circle>\n      <circle cx=\"3.21\" cy=\"13.27\" r=\"0.41\" fill=\"#ffb400\" style=\"transform-origin: 3.21px 13.27px;\"></circle>\n      <circle cx=\"6.57\" cy=\"19.83\" r=\"0.41\" fill=\"#ff0060\" style=\"transform-origin: 6.57px 19.83px;\"></circle>\n      <circle cx=\"13.59\" cy=\"22.09\" r=\"0.41\" fill=\"#00c0ff\" style=\"transform-origin: 13.59px 22.09px;\"></circle>\n      <circle cx=\"20.15\" cy=\"18.73\" r=\"0.41\" fill=\"#ff0060\" style=\"transform-origin: 20.15px 18.73px;\"></circle>\n      <circle cx=\"22.41\" cy=\"11.72\" r=\"0.41\" fill=\"#ffb400\" style=\"transform-origin: 22.41px 11.72px;\"></circle>\n    </g>\n    <path id=\"main-questionmark\" d=\"M11.36,15.3a5.94,5.94,0,0,1,.33-2.19,4.44,4.44,0,0,1,1.22-1.6,6.49,6.49,0,0,0,1.18-1.29,2.08,2.08,0,0,0,.29-1.05q0-1.65-1.53-1.65A1.54,1.54,0,0,0,11.69,8a1.75,1.75,0,0,0-.45,1.24H8.4A3.77,3.77,0,0,1,9.61,6.26,4.72,4.72,0,0,1,12.85,5.2a4.75,4.75,0,0,1,3.23,1,3.59,3.59,0,0,1,1.14,2.84,3.42,3.42,0,0,1-.37,1.57,6.37,6.37,0,0,1-1.3,1.64l-.8.76a2.73,2.73,0,0,0-.85,1.68l0,.6Zm-.29,3a1.41,1.41,0,0,1,.45-1.08,1.58,1.58,0,0,1,1.14-.43,1.61,1.61,0,0,1,1.14.43,1.51,1.51,0,0,1,0,2.14,1.6,1.6,0,0,1-1.15.42,1.58,1.58,0,0,1-1.15-.42A1.41,1.41,0,0,1,11.07,18.3Z\" fill=\"#fff\"></path>\n  </svg>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-tickets/animated-tickets.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-tickets/animated-tickets.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg id=\"tickets-animation\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\r\n  <g id=\"tickets\" style=\"opacity: 0\">\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n  </g>\r\n</svg>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/block-chain-info/block-chain-info.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/block-chain-info/block-chain-info.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block-chain-container\" [ngClass]=\"{'selected': blockChainService.isSingleRow}\" #scrollable>\r\n    <div class=\"block-chain-info\">\r\n        <div class=\"block-chain-row\" [@slideInOut] *ngFor=\"let block of blockChainService.rollingLog\" (click)=\"openTab(parseNumber(block.number))\">\r\n            <div>{{parseNumber(block.number)}}</div>\r\n            <div class=\"hash\">{{block.hash}}</div>\r\n            <div>{{parseDate(block.timestamp) | date : 'h:mm:ss'}}</div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/buy-ticket-input/buy-ticket-input.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/buy-ticket-input/buy-ticket-input.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"buy-ticket-input\">\r\n    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '0'\">\r\n        <div class=\"counter\">\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(0)\" (dragover)=\"setRatio(0)\">\r\n                <div class=\"node active\"></div>\r\n            </div>\r\n            <div class=\"wrapper line-wrapper\" (mouseup)=\"setRatio(1)\" (dragover)=\"setRatio(1)\">\r\n                <div class=\"line\" [ngClass]=\"{active: isWithinRatio(1)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(1)\" (dragover)=\"setRatio(1)\">\r\n                <div class=\"node\" [ngClass]=\"{active: isWithinRatio(1)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper line-wrapper\" (mouseup)=\"setRatio(2)\" (dragover)=\"setRatio(2)\">\r\n                <div class=\"line\" [ngClass]=\"{active: isWithinRatio(2)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(2)\" (dragover)=\"setRatio(2)\">\r\n                <div class=\"node\" [ngClass]=\"{active: isWithinRatio(2)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper line-wrapper\" (mouseup)=\"setRatio(3)\" (dragover)=\"setRatio(3)\">\r\n                <div class=\"line\" [ngClass]=\"{active: isWithinRatio(3)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(3)\" (dragover)=\"setRatio(3)\">\r\n                <div class=\"node\" [ngClass]=\"{active: isWithinRatio(3)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper line-wrapper\" (mouseup)=\"setRatio(4)\" (dragover)=\"setRatio(4)\">\r\n                <div class=\"line\" [ngClass]=\"{active: isWithinRatio(4)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(4)\" (dragover)=\"setRatio(4)\">\r\n                <div class=\"node\" [ngClass]=\"{active: isWithinRatio(4)}\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"app-input-group\">\r\n            <input class=\"app-input\" type=\"number\" (focus)=\"amount = null\" [(ngModel)]=\"amount\" (blur)=\"checkValue()\">\r\n            <div class=\"append\" (click)=\"setRatio(4)\">\r\n                {{'max-buy' | translate | uppercase}}\r\n            </div>\r\n        </div>\r\n        <div class=\"available-currency\">\r\n            <div class=\"label\">{{'available' | translate}}</div>\r\n            <div class=\"coin\">\r\n                {{authService.isLoggedIn ? authService.user.amountAvailable : 0}}\r\n            POST</div>\r\n        </div>\r\n        <div *ngIf=\"authService.isLoggedIn\">\r\n            <app-animated-tickets *ngIf=\"showAnimation\"></app-animated-tickets>\r\n            <button\r\n                class=\"app-button\"\r\n                (click)=\"buyTickets()\">\r\n                {{'buy-tickets' | translate : [amount || '0']}}\r\n            </button>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <!-- <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '1'\">\r\n        <div class=\"message\">\r\n            {{'now-drawing-winners' | translate | uppercase}}\r\n        </div>\r\n    </ng-container> -->\r\n    <div *ngIf=\"!authService.isLoggedIn\">\r\n        <button\r\n            class=\"app-button inverted\"\r\n            (click)=\"authorize()\"\r\n            >\r\n            <!-- {{'login-register-to-play' | translate | uppercase}} -->\r\n            {{'please-login-through-the-app' | translate | uppercase}}\r\n        </button>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/language-select/language-select.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/language-select/language-select.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"language-select\" [ngClass]=\"{'dark-background': darkBackground}\">\n    <div class=\"language-container\">\n      <span><img class=\"flag\" [src]=\"translateService.getFlagImage(translation)\" alt=\"\"></span>\n      <mat-select class=\"select\"  [(ngModel)]=\"translation\" (ngModelChange)=\"setTranslation()\">\n        <mat-option class=\"option\" *ngFor=\"let lang of languageOptions\" [value]=\"lang.language\">\n          {{lang.text}}\n        </mat-option>\n      </mat-select>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/main-header/main-header.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/main-header/main-header.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-header\">\r\n    <div class=\"icon-container\">\r\n        <i class=\"menu-icon icon-list\" (click)=\"showAccount()\"></i>\r\n    </div>\r\n    <div class=\"right-section-container\">\r\n        <div class=\"option-overlay\" *ngIf=\"showOptions\" (click)=\"openOptions()\"></div>\r\n        <div class=\"options\" [ngClass]=\"{show: showOptions}\">\r\n            <div class=\"option-placeholder\"></div>\r\n            <div class=\"option\"\r\n                [ngStyle]=\"{'background-color': option.background, 'color': option.color || 'white'}\"\r\n                *ngFor=\"let option of lotteryService.options\"\r\n                (click)=\"setOption(option)\">\r\n                <div class=\"percentage\" [ngStyle]=\"{'width': ((lotteryService.lotteryObj[option.value].currentEntries / option.value) * 100 + '%') }\"></div>\r\n                <div class=\"icon-placeholder\">\r\n                  <i class=\"icon-checkmark\" *ngIf=\"lotteryService.selectedOption.value == option.value\"></i>\r\n                </div>\r\n                <div *ngIf=\"!lotteryService.getLotteryInfo(option.value) || lotteryService.getLotteryInfo(option.value).lotteryStatus !== '1' \">\r\n                    {{option.value.toLocaleString()}}\r\n                </div>\r\n                <div *ngIf=\"lotteryService.getLotteryInfo(option.value) && lotteryService.getLotteryInfo(option.value).lotteryStatus === '1'\">\r\n                    0:{{lotteryService.getLotteryInfo(option.value).countDown | number: '2.0'}}\r\n                </div>\r\n                <div class=\"icon-placeholder\">\r\n                    <img class=\"icon-img\" [src]=\"option.icon\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"right-section\"\r\n            [ngStyle]=\"{\r\n                'background-color': lotteryService.selectedOption.background,\r\n                'color': lotteryService.selectedOption.color || 'white'}\">\r\n                <div class=\"percentage\" *ngIf=\"(lotteryService.lotteryObj[lotteryService.selectedOption.value].currentEntries / lotteryService.selectedOption.value) !== 1\" [ngStyle]=\"{'width': ((lotteryService.lotteryObj[lotteryService.selectedOption.value].currentEntries / lotteryService.selectedOption.value) * 100 + '%') }\"></div>\r\n            <div class=\"icon-placeholder\">\r\n                <i class=\"icon-chevronright\"\r\n                    *ngIf=\"lotteryService.options.length > 1\"\r\n                    [ngClass]=\"[showOptions ? 'chevron-up' : 'chevron-down']\"\r\n                    (click)=\"openOptions()\"></i>\r\n            </div>\r\n            <div class=\"section-content\" [ngStyle]=\"{'color': lotteryService.selectedOption.color || 'white'}\">\r\n                <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus !== '2'\">\r\n                    <div class=\"subtitle\">\r\n                        {{'prize-pool' | translate}}\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        {{lotteryService.availablePrizePool.toLocaleString()}}\r\n                    </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '2'\">\r\n                    <div class=\"subtitle\">\r\n                        {{'next-pool-starts-in' | translate | uppercase}}\r\n                    </div>\r\n                    <div class=\"content\" (dblclick)=\"lotteryService.currentLotteryInfo.countDown=1\">\r\n                        0:{{lotteryService.currentLotteryInfo.countDown | number: '2.0'}}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"icon-placeholder\">\r\n                <img class=\"icon-img\"\r\n                 [src]=\"lotteryService.selectedOption.icon\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/pool-select/pool-select.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/pool-select/pool-select.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pool-select works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/winner-panel/winner-panel.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/winner-panel/winner-panel.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"winner-panel\" [ngClass]=\"['place-'+place]\">\r\n    <div class=\"winner-container\">\r\n        <div class=\"place\">\r\n            {{placeMap[place].name}}\r\n        </div>\r\n        <div *ngIf=\"place === 0\" class=\"first-ticket\">\r\n            <div *ngFor=\"let ticket of winnerInfo.tickets\">\r\n                <div class=\"username\">{{ticket.userName}}</div>\r\n                <div class=\"number\">{{'ticket' | translate}} #{{ticket.ticketNumber}}</div>\r\n            </div>\r\n            <div class=\"winnings\" *ngIf=\"winnerInfo.myWinnings\">\r\n                <div class=\"amount\">\r\n                    +{{winnerInfo.myWinnings}} POST\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"place !== 0\" class=\"table-container\">\r\n            <div *ngFor=\"let ticket of winnerInfo.tickets\" class=\"ticket\">\r\n                <div class=\"username\">{{ticket.userName}}</div>\r\n                <div class=\"number\">\r\n                    {{'ticket' | translate}} #{{ticket.ticketNumber}}&nbsp;\r\n                    <span class=\"you-won\" *ngIf=\"ticket.isMine\">{{'you-won' | translate}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"winnings\" *ngIf=\"winnerInfo.myWinnings\">\r\n                <div class=\"amount\">\r\n                    +{{winnerInfo.myWinnings}} POST\r\n                </div>\r\n                <div class=\"dots\" *ngIf=\"place > 1\" (click)=\"goToWinnings()\">\r\n                    ...\r\n                </div>\r\n                <div class=\"count\">\r\n                    {{placeMap[place].winnerCount}} {{'winners' | translate}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/drawing-info/drawing-info.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/drawing-info/drawing-info.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"drawing-info\">\r\n    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '0'\">\r\n        <div class=\"heading\">\r\n            {{'drawing-begins-after-tickets' | translate : [lotteryService.currentLotteryInfo.availablePrizePool.toLocaleString()] | uppercase}}\r\n        </div>\r\n        <div class=\"subtitle\">\r\n            {{'current-tickets' | translate | uppercase}}\r\n        </div>\r\n        <div class=\"value\">\r\n            {{lotteryService.currentLotteryInfo.currentEntries.toLocaleString()}}\r\n        </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '1'\">\r\n        <div class=\"heading\">\r\n            {{(getRemainingBlocks() ? 'drawing-begins-in' : 'ticket-entry-limit-reached') | translate : [lotteryService.currentLotteryInfo.availablePrizePool.toLocaleString()] | uppercase}}\r\n        </div>\r\n        <div class=\"value\" *ngIf=\"getRemainingBlocks()\">\r\n            {{getRemainingBlocks()}} {{'blocks' | translate}}\r\n        </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '2'\">\r\n        <div class=\"winnings-container\">\r\n            <div *ngFor=\"let winner of lotteryService.currentLotteryInfo.winners.main; index as i\" \r\n                class=\"winning-panel\" \r\n                [ngClass]=\"{isHidden: winner.isDrawing}\">\r\n                <app-winner-panel [place]=\"i\" [winnerInfo]=\"winner\"></app-winner-panel>\r\n            </div>\r\n            <app-animated-coins *ngIf=\"myWinningsIncrement > 0\"></app-animated-coins>\r\n            <div class=\"winning-panel\" (dblclick)=\"this.finalizeWinning()\">\r\n              <div class=\"my-winnings\">\r\n                  <div class=\"winning-icon\">\r\n                      <img src=\"../../../assets/images/svgs/icon-moneybag.svg\" alt=\"\">\r\n                  </div>\r\n                  <div>\r\n                      <div class=\"label\">\r\n                          {{'my-winnings' | translate | uppercase}}\r\n                      </div>\r\n                      <div class=\"amount\">\r\n                          +{{myWinningsIncrement}}\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"winning-icon\">\r\n                      <img src=\"../../../assets/images/post-logo.png\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\r\n    <div class=\"panels\">\r\n        <div class=\"panel left-panel\">\r\n          <app-animated-confetti *ngIf=\"lotteryService.currentLotteryInfo.winners.minipool.winningAmount\"></app-animated-confetti>\r\n            <div>\r\n                <ng-container *ngIf=\"!authService.isLoggedIn\">\r\n                    <div class=\"title\">\r\n                        {{'my-ticket-ids' | translate | uppercase}}:\r\n                    </div>\r\n                    <div>\r\n                        <!-- <button class=\"app-button dark-text small-text\" (click)=\"authorize()\">\r\n                            {{'login-register-to-play-now' | translate | uppercase}}\r\n                        </button> -->\r\n                    </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"authService.isLoggedIn\">\r\n                    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '0'\r\n                        || lotteryService.currentLotteryInfo.lotteryStatus === '1'\">\r\n                        <div class=\"title\">\r\n                            {{'my-ticket-ids' | translate | uppercase}}:\r\n                        </div>\r\n                        <div class=\"text-content\">\r\n                            <span *ngFor=\"let data of lotteryService.currentLotteryInfo.myEntries | slice:0:8; let last=last;\">\r\n                                <span *ngIf=\"data.start !== data.end\">\r\n                                    #{{data.start}} - #{{data.end}}\r\n                                </span>\r\n                                <span *ngIf=\"data.start === data.end\">\r\n                                    #{{data.start}}\r\n                                </span>\r\n                                <span *ngIf=\"!last || (last && lotteryService.currentLotteryInfo.myEntries.length > 8)\">, </span>\r\n                            </span>\r\n                            <div *ngIf=\"lotteryService.currentLotteryInfo.myEntries.length > 8\">\r\n                                (+{{ticketCount(lotteryService.currentLotteryInfo.myEntries.slice(8))}}\r\n                                {{'more-tickets' | translate}})\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '2'\">\r\n                        <div class=\"title\">\r\n                            {{'mini-pool-winner' | translate | uppercase}}\r\n                        </div>\r\n                        <div class=\"text-content\">\r\n                            <!-- 350 Winners -->\r\n                        </div>\r\n                        <div *ngIf=\"lotteryService.currentLotteryInfo.winners.minipool.isDrawing\"\r\n                            class=\"minipool-question\"\r\n                            (click)=\"lotteryService.drawMinipool()\">\r\n                            <img class=\"chest\" src=\"../../../assets/images/minipool-chest.png\">\r\n                        </div>\r\n                        <ng-container *ngIf=\"!lotteryService.currentLotteryInfo.winners.minipool.isDrawing\" class=\"minipool-question\">\r\n                            <div class=\"bonus-section\" *ngIf=\"lotteryService.currentLotteryInfo.winners.minipool.winningAmount\">\r\n                                <div class=\"bonus-container\">\r\n                                    <div class=\"minipool-winner\">\r\n                                        {{'you-won' | translate | uppercase}}!\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"bonus-container\">\r\n                                    <div class=\"amount\">\r\n                                        +{{lotteryService.currentLotteryInfo.winners.minipool.winningAmount}} POST\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"bonus-section no-bonus\" *ngIf=\"!lotteryService.currentLotteryInfo.winners.minipool.winningAmount\">\r\n                                <div>{{'no-bonus-winnings' | translate | uppercase}}</div>\r\n                                <div>{{'try-again-next-time' | translate | uppercase}}!</div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel right-panel\">\r\n            <div>\r\n                <div class=\"label\">\r\n                    {{'total-tickets' | translate}}\r\n                </div>\r\n                <div class=\"total-tickets\">\r\n                    {{lotteryService.availablePrizePool}}\r\n                    <img class=\"icon-img large\" src=\"../../../assets/images/svgs/icon-ticket-yellow.svg\">\r\n                </div>\r\n                <div class=\"label small\">\r\n                    {{'my-tickets' | translate}}\r\n                </div>\r\n                <div class=\"my-tickets\">\r\n                    {{ticketCount(lotteryService.currentLotteryInfo.myEntries)}}\r\n                    <img class=\"icon-img\" src=\"../../../assets/images/svgs/icon-ticket-blue.svg\">\r\n                </div>\r\n                <div class=\"label small\">\r\n                    {{'see-all-ticket-entries' | translate}}\r\n                    <img class=\"icon-img\" [routerLink]=\"['/my-entries']\" src=\"../../../assets/images/svgs/icon-redirect.svg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home\" *ngIf=\"lotteryService.currentLotteryInfo\">\r\n    <app-main-header></app-main-header>\r\n    <div class=\"home-content\">\r\n        <app-block-chain-info></app-block-chain-info>\r\n        <app-drawing-info></app-drawing-info>\r\n        <div *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus !== '2'\" class=\"buy-ticket-input\">\r\n            <app-buy-ticket-input></app-buy-ticket-input>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-play/how-to-play.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-play/how-to-play.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header [title]=\"'how-to-play' | translate\"></app-account-header>\r\n<div class=\"how-to-play\">\r\n    <div class=\"title\">\r\n        {{'fair-chance-guarantee' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'fair-chance-guarantee-etc' | translate}}\r\n    </div>\r\n    <div class=\"title\">\r\n        {{'depositing-funds' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'depositing-funds-etc' | translate}}\r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        {{'buying-tickets' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'buying-tickets-etc' | translate}}\r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        {{'winning' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'winning-etc' | translate}}\r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        {{'withdrawing-funds' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'withdrawing-funds-etc' | translate}}\r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        {{'payouts' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'payouts-etc' | translate}}\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-entries/my-entries.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-entries/my-entries.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header [title]=\"'all-tickets' | translate\"></app-account-header>\r\n\r\n<div class=\"my-entries\">\r\n    <div class=\"info\">{{'pool-opened' | translate}} {{lotteryService.currentLotteryInfo.openedDate | date : 'MM-dd-yyyy H:mm'}}</div>\r\n    <div class=\"info\">{{'block' | translate}} {{lotteryService.currentLotteryInfo.targetBlockHeight}}</div>\r\n\r\n    <div class=\"header\">\r\n        <div class=\"text\">{{'my-tickets' | translate}}</div>\r\n        <i class=\"icon-chevronright\"\r\n                    [ngClass]=\"[sortMyEntries ? 'chevron-up' : 'chevron-down']\"\r\n                    (click)=\"toggleMyEntries()\"></i>\r\n    </div>\r\n    <div class=\"data-container\">    \r\n        <div class=\"data\" *ngFor=\"let entry of sortedMyEntries()\">\r\n            <div>\r\n                <div class=\"username\">\r\n                    {{entry.userName}}\r\n                </div>\r\n                <div class=\"date\">\r\n                    {{entry.date | date : 'MM-dd-yyyy H:mm'}}\r\n                </div>\r\n            </div>\r\n            <div>\r\n                #{{entry.start}}<ng-container *ngIf=\"entry.end !== entry.start\">-#{{entry.end}}</ng-container>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"info no-further-activity\">{{'no-further-activity' | translate}}</div>\r\n    </div>\r\n\r\n\r\n    <div class=\"header\">\r\n        <div class=\"text\">{{'all-tickets' | translate}}</div>\r\n        <i class=\"icon-chevronright\"\r\n                    [ngClass]=\"[sortAllEntries ? 'chevron-up' : 'chevron-down']\"\r\n                    (click)=\"toggleAllEntries()\"></i>\r\n    </div>\r\n    <div class=\"data-container\">\r\n        <div class=\"data\" *ngFor=\"let entry of sortedAllEntries()\">\r\n            <div>\r\n                <div class=\"username\">\r\n                    {{entry.userName}}\r\n                </div>\r\n                <div class=\"date\">\r\n                    {{entry.date | date : 'MM-dd-yyyy H:mm'}}\r\n                </div>\r\n            </div>\r\n            <div>\r\n                #{{entry.start}}<ng-container *ngIf=\"entry.end !== entry.start\">-#{{entry.end}}</ng-container>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"info no-further-activity\">{{'no-further-activity' | translate}}</div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout-history-item/payout-history-item.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout-history-item/payout-history-item.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"payout-history-item\">\n    <div class=\"item-row info-row\"> \n        <div>{{payoutItem.user}}</div>\n        <div class=\"amount\">\n            <div class=\"place-icon\" [ngClass]=\"[place]\"></div>\n            {{payoutItem.prize}}\n            POST\n        </div>\n    </div>\n    <div class=\"item-row info-two-row\">\n        <div>{{payoutItem.time | date: 'MM-dd-yyyy H:mm'}}</div>\n        <div>\n            {{'ticket'| translate}}\n            #{{payoutItem.ticket}}\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-account-header [title]=\"'payouts' | translate | uppercase\"></app-account-header>\n\n<div class=\"action-container\">\n    <button class=\"app-button\" *ngFor=\"let place of placeMap\" (click)=\"selectRank(place.rank)\">{{place.name}}</button>    \n</div>\n<div class=\"payout\"\ninfiniteScroll\n[infiniteScrollDistance]=\"1\"\n[infiniteScrollThrottle]=\"50\"\n(scrolled)=\"onScroll()\"\n[scrollWindow]=\"false\">\n    <app-payout-history-item \n        [payoutItem]=\"item\" \n        [place]=\"getPlace(item.prize)\" \n        *ngFor=\"let item of payoutData[currentLevel].data\"></app-payout-history-item>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/account/account-history/account-history.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/account/account-history/account-history.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".history {\n  color: white;\n}\n.history .select-type {\n  display: flex;\n  justify-content: center;\n  margin: 24px 0 24px;\n}\n.history .select-type .select-box {\n  border: 2px solid #636363;\n  background-color: #2a2d32;\n  border-radius: 18px;\n  padding: 12px 32px;\n}\n.history .history-table {\n  font-size: 14px;\n  padding: 0 16px;\n}\n.history .history-table .tablerow {\n  height: 40px;\n  width: 100%;\n  overflow: hidden;\n  transition: height 0.3s;\n  border-top: 1px solid #2c3033;\n}\n.history .history-table .tablerow:last-child {\n  border-bottom: 1px solid #2c3033;\n}\n.history .history-table .tablerow .itemrow {\n  display: flex;\n  padding: 12px 0;\n}\n.history .history-table .tablerow.isExpanded {\n  height: 170px;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\n.history .history-table .tablerow .icon {\n  width: 25px;\n  flex-basis: 25px;\n  font-size: 14px;\n}\n.history .history-table .tablerow .date {\n  flex-basis: 35%;\n  color: #5c5b60;\n}\n.history .history-table .tablerow .type {\n  padding-left: 12px;\n  flex-basis: 15%;\n}\n.history .history-table .tablerow .amount {\n  text-align: right;\n  padding-right: 16px;\n  flex-grow: 1;\n}\n.history .history-table .tablerow .address {\n  display: flex;\n  margin-bottom: 12px;\n}\n.history .history-table .tablerow .address:first-child {\n  margin-top: 12px;\n  margin-bottom: 16px;\n}\n.history .history-table .tablerow .address .label {\n  color: #5c5b60;\n}\n.history .history-table .tablerow .address .value {\n  font-size: 13px;\n  color: #ffcc01;\n  word-break: break-all;\n  padding: 0 12px;\n}\n.history .history-table .tablerow .address .copy {\n  align-self: center;\n  font-size: 20px;\n  color: #5c5b60;\n}\n.history .history-table .closerow {\n  padding: 6px 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.history .no-futher-activity {\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LWhpc3RvcnkvRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxcYWNjb3VudFxcYWNjb3VudC1oaXN0b3J5XFxhY2NvdW50LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FjY291bnQvYWNjb3VudC1oaXN0b3J5L2FjY291bnQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFUjtBREFRO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFWjtBREVJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNBUjtBREVRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUNBWjtBRENZO0VBQ0ksZ0NBQUE7QUNDaEI7QURFWTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDQWhCO0FER1k7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0FDRGhCO0FESVk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRmhCO0FESVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0ZoQjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDRmhCO0FESVk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZoQjtBREtZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSGhCO0FESWdCO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZwQjtBRElnQjtFQUNJLGNBQUE7QUNGcEI7QURJZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0ZwQjtBRElnQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGcEI7QURPUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNMWjtBRFVJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDUlIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQtaGlzdG9yeS9hY2NvdW50LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlzdG9yeSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAuc2VsZWN0LXR5cGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgMjRweDtcclxuXHJcbiAgICAgICAgLnNlbGVjdC1ib3gge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNjM2MzYzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDMyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oaXN0b3J5LXRhYmxlIHsgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICAgICAgLnRhYmxlcm93IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4zcztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyYzMwMzM7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjMzAzMztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW1yb3cge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pc0V4cGFuZGVkIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDM1JTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWM1YjYwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50eXBlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDE1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYW1vdW50IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWM1YjYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmNjMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb3B5IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWM1YjYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2Vyb3cge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSAgIFxyXG5cclxuICAgIC5uby1mdXRoZXItYWN0aXZpdHkge1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59IiwiLmhpc3Rvcnkge1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGlzdG9yeSAuc2VsZWN0LXR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyNHB4IDAgMjRweDtcbn1cbi5oaXN0b3J5IC5zZWxlY3QtdHlwZSAuc2VsZWN0LWJveCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MzYzNjM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDEycHggMzJweDtcbn1cbi5oaXN0b3J5IC5oaXN0b3J5LXRhYmxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4uaGlzdG9yeSAuaGlzdG9yeS10YWJsZSAudGFibGVyb3cge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyYzMwMzM7XG59XG4uaGlzdG9yeSAuaGlzdG9yeS10YWJsZSAudGFibGVyb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmMzMDMzO1xufVxuLmhpc3RvcnkgLmhpc3RvcnktdGFibGUgLnRhYmxlcm93IC5pdGVtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuLmhpc3RvcnkgLmhpc3RvcnktdGFibGUgLnRhYmxlcm93LmlzRXhwYW5kZWQge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5oaXN0b3J5IC5oaXN0b3J5LXRhYmxlIC50YWJsZXJvdyAuaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBmbGV4LWJhc2lzOiAyNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaGlzdG9yeSAuaGlzdG9yeS10YWJsZSAudGFibGVyb3cgLmRhdGUge1xuICBmbGV4LWJhc2lzOiAzNSU7XG4gIGNvbG9yOiAjNWM1YjYwO1xufVxuLmhpc3RvcnkgLmhpc3RvcnktdGFibGUgLnRhYmxlcm93IC50eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBmbGV4LWJhc2lzOiAxNSU7XG59XG4uaGlzdG9yeSAuaGlzdG9yeS10YWJsZSAudGFibGVyb3cgLmFtb3VudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4uaGlzdG9yeSAuaGlzdG9yeS10YWJsZSAudGFibGVyb3cgLmFkZHJlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmhpc3RvcnkgLmhpc3RvcnktdGFibGUgLnRhYmxlcm93IC5hZGRyZXNzOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5oaXN0b3J5IC5oaXN0b3J5LXRhYmxlIC50YWJsZXJvdyAuYWRkcmVzcyAubGFiZWwge1xuICBjb2xvcjogIzVjNWI2MDtcbn1cbi5oaXN0b3J5IC5oaXN0b3J5LXRhYmxlIC50YWJsZXJvdyAuYWRkcmVzcyAudmFsdWUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZjYzAxO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cbi5oaXN0b3J5IC5oaXN0b3J5LXRhYmxlIC50YWJsZXJvdyAuYWRkcmVzcyAuY29weSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzVjNWI2MDtcbn1cbi5oaXN0b3J5IC5oaXN0b3J5LXRhYmxlIC5jbG9zZXJvdyB7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhpc3RvcnkgLm5vLWZ1dGhlci1hY3Rpdml0eSB7XG4gIGhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/account-history/account-history.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/account/account-history/account-history.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccountHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountHistoryComponent", function() { return AccountHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lottery.service */ "./src/app/services/lottery.service.ts");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");




let AccountHistoryComponent = class AccountHistoryComponent {
    constructor(lotteryService, accountService) {
        this.lotteryService = lotteryService;
        this.accountService = accountService;
        this.typeMap = {
            1: 'buy',
            2: 'withdraw',
            3: 'deposit',
            4: 'win'
        };
        this.history = [];
    }
    ngOnInit() {
        this.accountService.getAccountActivity(1, 20).subscribe((data) => {
            if (data.code === 200) {
                this.history = data.msg;
            }
        });
    }
};
AccountHistoryComponent.ctorParameters = () => [
    { type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
];
AccountHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-history/account-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-history.component.scss */ "./src/app/account/account-history/account-history.component.scss")).default]
    })
], AccountHistoryComponent);



/***/ }),

/***/ "./src/app/account/account-settings/account-settings.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/account/account-settings/account-settings.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overlay.show {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  transition: background-color 0.3s;\n  z-index: 10;\n}\n\n.account-settings {\n  font-weight: 500;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 80vw;\n  max-width: 600px;\n  transform: translateX(-100%);\n  transition: transform 0.3s;\n  background-color: #2a2d32;\n  text-align: center;\n  z-index: 11;\n  color: #ffcc01;\n  padding-bottom: 5vh;\n}\n\n.account-settings.show {\n  transform: translateX(0);\n}\n\n.account-settings .account-container {\n  height: 100%;\n  max-height: 750px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.account-settings .header {\n  text-align: left;\n  padding: 16px;\n  width: 100%;\n  position: relative;\n  color: white;\n}\n\n.account-settings .header .language-select {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-45%, -50%);\n}\n\n.account-settings .header .close {\n  font-size: 28px;\n}\n\n.account-settings .info-container {\n  position: relative;\n  height: 30vh;\n  max-height: 200px;\n}\n\n.account-settings .info-container .background {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -2;\n}\n\n.account-settings .info-container .info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100%;\n}\n\n.account-settings .info-container .info .label {\n  color: white;\n}\n\n.account-settings .info-container .info .username {\n  font-size: 28px;\n}\n\n.account-settings .link {\n  font-size: 24px;\n  padding: 8px 24px;\n}\n\n.account-settings .link.logout {\n  color: #605f64;\n}\n\n.account-settings .link.how-to-play {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LXNldHRpbmdzL0U6XFxVc2Vyc1xcU3lsdmVzdGVyXFxEZXNrdG9wXFxibG9ja2NoYWluLWxvdHRlcnkvc3JjXFxhcHBcXGFjY291bnRcXGFjY291bnQtc2V0dGluZ3NcXGFjY291bnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FjY291bnQvYWNjb3VudC1zZXR0aW5ncy9hY2NvdW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQ0FSOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDREo7O0FER0k7RUFDSSx3QkFBQTtBQ0RSOztBRElJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNIUjs7QURNSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNKUjs7QURNUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0paOztBRE9RO0VBQ0ksZUFBQTtBQ0xaOztBRFNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNQUjs7QURTUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNQWjs7QURVUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ1JaOztBRFVZO0VBQ0ksWUFBQTtBQ1JoQjs7QURXWTtFQUNJLGVBQUE7QUNUaEI7O0FEa0JJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDaEJSOztBRGtCUTtFQUNJLGNBQUE7QUNoQlo7O0FEbUJRO0VBQ0ksWUFBQTtBQ2pCWiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC1zZXR0aW5ncy9hY2NvdW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gICAgJi5zaG93IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwgLjgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWNjb3VudC1zZXR0aW5ncyB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDMyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgICBjb2xvcjogI2ZmY2MwMTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XHJcblxyXG4gICAgJi5zaG93IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjY291bnQtY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNzUwcHg7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgIC5sYW5ndWFnZS1zZWxlY3Qge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00NSUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IC0yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuYW1vdW50IHtcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDI0cHg7XHJcblxyXG4gICAgICAgICYubG9nb3V0IHtcclxuICAgICAgICAgICAgY29sb3I6ICM2MDVmNjQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmhvdy10by1wbGF5IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5vdmVybGF5LnNob3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYWNjb3VudC1zZXR0aW5ncyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA4MHZ3O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMTtcbiAgY29sb3I6ICNmZmNjMDE7XG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XG59XG4uYWNjb3VudC1zZXR0aW5ncy5zaG93IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLmFjY291bnQtc2V0dGluZ3MgLmFjY291bnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA3NTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFjY291bnQtc2V0dGluZ3MgLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5oZWFkZXIgLmxhbmd1YWdlLXNlbGVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTUwJSk7XG59XG4uYWNjb3VudC1zZXR0aW5ncyAuaGVhZGVyIC5jbG9zZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5pbmZvLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMHZoO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5pbmZvLWNvbnRhaW5lciAuYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAtMjtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5pbmZvLWNvbnRhaW5lciAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYWNjb3VudC1zZXR0aW5ncyAuaW5mby1jb250YWluZXIgLmluZm8gLmxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFjY291bnQtc2V0dGluZ3MgLmluZm8tY29udGFpbmVyIC5pbmZvIC51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5saW5rIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiA4cHggMjRweDtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5saW5rLmxvZ291dCB7XG4gIGNvbG9yOiAjNjA1ZjY0O1xufVxuLmFjY291bnQtc2V0dGluZ3MgLmxpbmsuaG93LXRvLXBsYXkge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/account/account-settings/account-settings.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/account/account-settings/account-settings.component.ts ***!
  \************************************************************************/
/*! exports provided: AccountSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function() { return AccountSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let AccountSettingsComponent = class AccountSettingsComponent {
    constructor(authService, accountService) {
        this.authService = authService;
        this.accountService = accountService;
        this.showAccount = false;
    }
    ngOnInit() {
        this.accountService.getShowSettingsObs()
            .subscribe(data => {
            this.showAccount = data;
        });
    }
    close(openOnReturn) {
        this.accountService.setAccountSettings(false);
        this.accountService.openOnReturn = openOnReturn;
    }
};
AccountSettingsComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
AccountSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-settings/account-settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-settings.component.scss */ "./src/app/account/account-settings/account-settings.component.scss")).default]
    })
], AccountSettingsComponent);



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/app-common.module */ "./src/app/common/app-common.module.ts");
/* harmony import */ var _account_history_account_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-history/account-history.component */ "./src/app/account/account-history/account-history.component.ts");
/* harmony import */ var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-settings/account-settings.component */ "./src/app/account/account-settings/account-settings.component.ts");
/* harmony import */ var _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deposit/deposit.component */ "./src/app/account/deposit/deposit.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-account-orientation/new-account-orientation.component */ "./src/app/account/new-account-orientation/new-account-orientation.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/account/register/register.component.ts");
/* harmony import */ var _two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./two-factor/two-factor.component */ "./src/app/account/two-factor/two-factor.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./withdraw/withdraw.component */ "./src/app/account/withdraw/withdraw.component.ts");




// Components








let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _account_history_account_history_component__WEBPACK_IMPORTED_MODULE_4__["AccountHistoryComponent"],
            _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsComponent"],
            _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__["DepositComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_8__["NewAccountOrientationComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_10__["TwoFactorComponent"],
            _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_11__["WithdrawComponent"],
        ],
        imports: [
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_8__["NewAccountOrientationComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        ]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/account/authguard.guard.ts":
/*!********************************************!*\
  !*** ./src/app/account/authguard.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!(this.authService.user && this.authService.user.token)) {
            this.router.navigate(['/home']);
            return false;
        }
        // you can save redirect url so after authing we can move them back to the page they requested
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/account/deposit/deposit.component.scss":
/*!********************************************************!*\
  !*** ./src/app/account/deposit/deposit.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".deposit {\n  text-align: center;\n  padding: 0 16px 24px;\n}\n.deposit .qr-container {\n  margin-top: 12px;\n  height: 45vw;\n  max-height: 250px;\n}\n.deposit .qr-container .qr-code {\n  display: inline-block;\n  height: 100%;\n  border-radius: 12px;\n  background-color: white;\n}\n.deposit .qr-container .qr-code img {\n  height: 100%;\n}\n.deposit .btn-container {\n  display: flex;\n  justify-content: space-between;\n}\n.deposit .btn-container button.app-button {\n  font-size: 15px !important;\n  flex-basis: 49%;\n}\n.deposit .message {\n  padding: 0 40px;\n  margin-top: 24px;\n  color: white;\n  font-size: 16px;\n  line-height: 18px;\n}\n.deposit .address {\n  word-break: break-all;\n  color: #ffcc00;\n  background-color: #2a2e31;\n  border: 2px solid #5d6164;\n  font-size: 16px;\n  border-radius: 12px;\n  padding: 12px;\n  margin: 24px 0 12px;\n  display: flex;\n  justify-content: space-between;\n}\n.deposit .icon-documentcopy {\n  margin-left: 12px;\n}\n.deposit .amount {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 12px;\n  color: #ffcc00;\n}\n.deposit .amount .available {\n  color: white;\n}\n.deposit .link {\n  margin-top: 32px;\n  color: #ffcc00;\n  font-size: 20px;\n}\n.deposit .deposit-form {\n  margin-top: 16px;\n  display: flex;\n}\n.deposit .deposit-form .app-input {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9kZXBvc2l0L0U6XFxVc2Vyc1xcU3lsdmVzdGVyXFxEZXNrdG9wXFxibG9ja2NoYWluLWxvdHRlcnkvc3JjXFxhcHBcXGFjY291bnRcXGRlcG9zaXRcXGRlcG9zaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FjY291bnQvZGVwb3NpdC9kZXBvc2l0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQVE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRVo7QUREWTtFQUNJLFlBQUE7QUNHaEI7QURFSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0FSO0FERVE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUNBWjtBRElJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FES0k7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDSFI7QURNSTtFQUNJLGlCQUFBO0FDSlI7QURPSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0xSO0FETVE7RUFDSSxZQUFBO0FDSlo7QURRSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNOUjtBRFNJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDUE47QURRTTtFQUNFLGtCQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2RlcG9zaXQvZGVwb3NpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXBvc2l0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTZweCAyNHB4O1xyXG5cclxuICAgIC5xci1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXZ3O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIC5xci1jb2RlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgYnV0dG9uLmFwcC1idXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNDklO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJlMzE7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzVkNjE2NDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMjRweCAwIDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24tZG9jdW1lbnRjb3B5IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYW1vdW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgIC5hdmFpbGFibGUge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVwb3NpdC1mb3JtIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLmFwcC1pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmRlcG9zaXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTZweCAyNHB4O1xufVxuLmRlcG9zaXQgLnFyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGhlaWdodDogNDV2dztcbiAgbWF4LWhlaWdodDogMjUwcHg7XG59XG4uZGVwb3NpdCAucXItY29udGFpbmVyIC5xci1jb2RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmRlcG9zaXQgLnFyLWNvbnRhaW5lciAucXItY29kZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGVwb3NpdCAuYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kZXBvc2l0IC5idG4tY29udGFpbmVyIGJ1dHRvbi5hcHAtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtYmFzaXM6IDQ5JTtcbn1cbi5kZXBvc2l0IC5tZXNzYWdlIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4uZGVwb3NpdCAuYWRkcmVzcyB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgY29sb3I6ICNmZmNjMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJlMzE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ZDYxNjQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTJweDtcbiAgbWFyZ2luOiAyNHB4IDAgMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRlcG9zaXQgLmljb24tZG9jdW1lbnRjb3B5IHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uZGVwb3NpdCAuYW1vdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBjb2xvcjogI2ZmY2MwMDtcbn1cbi5kZXBvc2l0IC5hbW91bnQgLmF2YWlsYWJsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kZXBvc2l0IC5saW5rIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgY29sb3I6ICNmZmNjMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5kZXBvc2l0IC5kZXBvc2l0LWZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRlcG9zaXQgLmRlcG9zaXQtZm9ybSAuYXBwLWlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/deposit/deposit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/deposit/deposit.component.ts ***!
  \******************************************************/
/*! exports provided: DepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositComponent", function() { return DepositComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let DepositComponent = class DepositComponent {
    constructor(authService) {
        this.authService = authService;
        this.depositAmount = 0;
    }
    deposit() {
        this.authService.depositAmount(this.depositAmount);
        this.depositAmount = 0;
    }
    ngOnInit() {
    }
};
DepositComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
DepositComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deposit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deposit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/deposit/deposit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deposit.component.scss */ "./src/app/account/deposit/deposit.component.scss")).default]
    })
], DepositComponent);



/***/ }),

/***/ "./src/app/account/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  padding: 16px;\n}\n.login .logo {\n  color: white;\n  height: 25vh;\n  line-height: 25vh;\n  font-size: 40px;\n  color: #fccd02;\n  text-align: center;\n}\n.login .logo .logo-image {\n  height: 100%;\n}\n.login .input-form .input-row {\n  margin-bottom: 20px;\n}\n.login .register {\n  margin-top: 12px;\n  color: #fccd02;\n  text-align: center;\n  font-size: 18px;\n  cursor: pointer;\n}\n.language-container {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9FOlxcVXNlcnNcXFN5bHZlc3RlclxcRGVza3RvcFxcYmxvY2tjaGFpbi1sb3R0ZXJ5L3NyY1xcYXBwXFxhY2NvdW50XFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURBSTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ1I7QURDUTtFQUNFLFlBQUE7QUNDVjtBRElRO0VBQ0ksbUJBQUE7QUNGWjtBRE1JO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pSO0FEUUE7RUFDRSxrQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgLmxvZ28ge1xyXG5cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXZoO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogI2ZjY2QwMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5sb2dvLWltYWdlIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWZvcm0ge1xyXG4gICAgICAgIC5pbnB1dC1yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNmY2NkMDI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIubG9naW4ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmxvZ2luIC5sb2dvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDI1dmg7XG4gIGxpbmUtaGVpZ2h0OiAyNXZoO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjZmNjZDAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4gLmxvZ28gLmxvZ28taW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4gLmlucHV0LWZvcm0gLmlucHV0LXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubG9naW4gLnJlZ2lzdGVyIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgY29sb3I6ICNmY2NkMDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sYW5ndWFnZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/account/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/lottery.service */ "./src/app/services/lottery.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, lotteryService, router) {
        this.authService = authService;
        this.lotteryService = lotteryService;
        this.router = router;
        this.isLoggingIn = false;
        this.loginObj = {
            password: 'test123',
            passwordType: 'password',
            userName: 'sylvester'
        };
    }
    ngOnInit() {
    }
    infoValid() {
        return this.loginObj.password && this.loginObj.userName;
    }
    login() {
        if (this.infoValid()) {
            this.authService.login(this.loginObj)
                .subscribe(data => {
                if (data) {
                    this.lotteryService.clearLotteryObj();
                    this.lotteryService.startStatusCheckInterval();
                    this.router.navigate(['/home']);
                }
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_4__["LotteryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/account/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/account/new-account-orientation/new-account-orientation.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/account/new-account-orientation/new-account-orientation.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orientation {\n  padding: 16px;\n  color: white;\n}\n.orientation .message {\n  margin-top: 2vh;\n  padding-bottom: 20px;\n  white-space: pre-wrap;\n  font-size: 20px;\n}\n.orientation .deposit-funds {\n  margin-top: 10vh;\n}\n.orientation .connect-2fa {\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: #fccd02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9uZXctYWNjb3VudC1vcmllbnRhdGlvbi9FOlxcVXNlcnNcXFN5bHZlc3RlclxcRGVza3RvcFxcYmxvY2tjaGFpbi1sb3R0ZXJ5L3NyY1xcYXBwXFxhY2NvdW50XFxuZXctYWNjb3VudC1vcmllbnRhdGlvblxcbmV3LWFjY291bnQtb3JpZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FjY291bnQvbmV3LWFjY291bnQtb3JpZW50YXRpb24vbmV3LWFjY291bnQtb3JpZW50YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDUjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L25ldy1hY2NvdW50LW9yaWVudGF0aW9uL25ldy1hY2NvdW50LW9yaWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yaWVudGF0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXBvc2l0LWZ1bmRzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb25uZWN0LTJmYSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmNjZDAyO1xyXG4gICAgfVxyXG59IiwiLm9yaWVudGF0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm9yaWVudGF0aW9uIC5tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ub3JpZW50YXRpb24gLmRlcG9zaXQtZnVuZHMge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xufVxuLm9yaWVudGF0aW9uIC5jb25uZWN0LTJmYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI2ZjY2QwMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/account/new-account-orientation/new-account-orientation.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/account/new-account-orientation/new-account-orientation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NewAccountOrientationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAccountOrientationComponent", function() { return NewAccountOrientationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/navigation.service */ "./src/app/services/navigation.service.ts");





let NewAccountOrientationComponent = class NewAccountOrientationComponent {
    constructor(authService, location, navigationService) {
        this.authService = authService;
        this.location = location;
        this.navigationService = navigationService;
    }
    ngOnInit() {
    }
};
NewAccountOrientationComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"] }
];
NewAccountOrientationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-account-orientation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-account-orientation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/new-account-orientation/new-account-orientation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-account-orientation.component.scss */ "./src/app/account/new-account-orientation/new-account-orientation.component.scss")).default]
    })
], NewAccountOrientationComponent);



/***/ }),

/***/ "./src/app/account/register/register.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/account/register/register.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  padding: 16px;\n}\n.register .info {\n  color: white;\n  margin: 12px 0 24px;\n  font-size: 21px;\n}\n.register .input-form .input-row {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9FOlxcVXNlcnNcXFN5bHZlc3RlclxcRGVza3RvcFxcYmxvY2tjaGFpbi1sb3R0ZXJ5L3NyY1xcYXBwXFxhY2NvdW50XFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNFUjtBREVRO0VBQ0ksbUJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIC5pbmZvIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDAgMjRweDtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWZvcm0ge1xyXG4gICAgICAgIC5pbnB1dC1yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5yZWdpc3RlciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ucmVnaXN0ZXIgLmluZm8ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTJweCAwIDI0cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbi5yZWdpc3RlciAuaW5wdXQtZm9ybSAuaW5wdXQtcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/account/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let RegisterComponent = class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.registrationObj = {
            userName: null,
            password: null,
            passwordType: 'password',
            password2: null,
            password2Type: 'password'
        };
    }
    ngOnInit() {
    }
    infoValid() {
        return this.registrationObj.userName &&
            this.registrationObj.password &&
            this.registrationObj.password2 &&
            this.registrationObj.password === this.registrationObj.password2;
    }
    register() {
        if (this.infoValid()) {
            this.authService.register(this.registrationObj)
                .subscribe(data => {
                if (data) {
                    this.router.navigate(['/orientation']);
                }
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/account/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/account/two-factor/two-factor.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/account/two-factor/two-factor.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".two-factor {\n  padding: 12px 16px;\n  color: white;\n}\n.two-factor .step-0 {\n  text-align: center;\n}\n.two-factor .step-0 .qr-container {\n  height: 45vw;\n  max-height: 250px;\n}\n.two-factor .step-0 .qr-container .qr-code {\n  display: inline-block;\n  height: 100%;\n  border-radius: 12px;\n  background-color: white;\n}\n.two-factor .step-0 .qr-container .qr-code img {\n  height: 100%;\n}\n.two-factor .step-0 .address {\n  word-break: break-all;\n  color: #ffcc00;\n  background-color: #2a2e31;\n  border: 2px solid #5d6164;\n  font-size: 16px;\n  border-radius: 12px;\n  padding: 12px;\n  margin: 12px 0;\n}\n.two-factor .step-0 .icon-documentcopy {\n  margin-left: 12px;\n}\n.two-factor .confirmation {\n  height: 180px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.two-factor .message {\n  padding: 0 12px;\n  margin-top: 6px;\n  font-size: 16px;\n  line-height: 18px;\n}\n.two-factor .link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 24px;\n  color: #ffcc00;\n  font-size: 20px;\n}\n.two-factor .link i {\n  margin-left: 12px;\n}\n.two-factor .link.extra-margin {\n  margin-top: 36px;\n}\n.two-factor .row {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC90d28tZmFjdG9yL0U6XFxVc2Vyc1xcU3lsdmVzdGVyXFxEZXNrdG9wXFxibG9ja2NoYWluLWxvdHRlcnkvc3JjXFxhcHBcXGFjY291bnRcXHR3by1mYWN0b3JcXHR3by1mYWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FjY291bnQvdHdvLWZhY3Rvci90d28tZmFjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0FDRVI7QUREUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0daO0FERlk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSWhCO0FESGdCO0VBQ0ksWUFBQTtBQ0twQjtBREFRO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRVo7QURDUTtFQUNJLGlCQUFBO0FDQ1o7QURHSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRFI7QURJSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRlI7QURLSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0hSO0FESVE7RUFDSSxpQkFBQTtBQ0ZaO0FES1E7RUFDSSxnQkFBQTtBQ0haO0FET0k7RUFDSSxnQkFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC90d28tZmFjdG9yL3R3by1mYWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHdvLWZhY3RvciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAuc3RlcC0wIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLnFyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDV2dztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIC5xci1jb2RlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZTMxO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNWQ2MTY0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTJweCAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5pY29uLWRvY3VtZW50Y29weSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29uZmlybWF0aW9uIHtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAubGluayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZXh0cmEtbWFyZ2luIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxufSIsIi50d28tZmFjdG9yIHtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4udHdvLWZhY3RvciAuc3RlcC0wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnR3by1mYWN0b3IgLnN0ZXAtMCAucXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0NXZ3O1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cbi50d28tZmFjdG9yIC5zdGVwLTAgLnFyLWNvbnRhaW5lciAucXItY29kZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi50d28tZmFjdG9yIC5zdGVwLTAgLnFyLWNvbnRhaW5lciAucXItY29kZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udHdvLWZhY3RvciAuc3RlcC0wIC5hZGRyZXNzIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBjb2xvcjogI2ZmY2MwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmUzMTtcbiAgYm9yZGVyOiAycHggc29saWQgIzVkNjE2NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW46IDEycHggMDtcbn1cbi50d28tZmFjdG9yIC5zdGVwLTAgLmljb24tZG9jdW1lbnRjb3B5IHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4udHdvLWZhY3RvciAuY29uZmlybWF0aW9uIHtcbiAgaGVpZ2h0OiAxODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50d28tZmFjdG9yIC5tZXNzYWdlIHtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4udHdvLWZhY3RvciAubGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBjb2xvcjogI2ZmY2MwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnR3by1mYWN0b3IgLmxpbmsgaSB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLnR3by1mYWN0b3IgLmxpbmsuZXh0cmEtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi50d28tZmFjdG9yIC5yb3cge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/account/two-factor/two-factor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/two-factor/two-factor.component.ts ***!
  \************************************************************/
/*! exports provided: TwoFactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoFactorComponent", function() { return TwoFactorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let TwoFactorComponent = class TwoFactorComponent {
    constructor(location) {
        this.location = location;
        this.address = "123k123j1k23j-12-d123d-12dk1-23dk1-23kd12-3d123123d123-d132";
        this.step = 0;
        this.navBack = () => {
            if (this.step === 0) {
                this.location.back();
            }
            else {
                this.step--;
            }
        };
    }
    ngOnInit() {
    }
    getTitle() {
        switch (this.step) {
            case 0:
                return 'bind-2fa';
            case 1:
                return '2fa-verification';
        }
    }
    confirmCode() {
        this.step = 2;
    }
};
TwoFactorComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
TwoFactorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-two-factor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./two-factor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/two-factor/two-factor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./two-factor.component.scss */ "./src/app/account/two-factor/two-factor.component.scss")).default]
    })
], TwoFactorComponent);



/***/ }),

/***/ "./src/app/account/withdraw/withdraw.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/account/withdraw/withdraw.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".withdraw {\n  padding: 0 24px;\n}\n.withdraw .message {\n  font-size: 19px;\n  color: white;\n  margin: 16px 0 20px;\n}\n.withdraw .amount {\n  display: flex;\n  justify-content: space-between;\n  color: #ffcc00;\n  margin-bottom: 16px;\n}\n.withdraw .amount .available {\n  color: white;\n}\n.withdraw .withdraw-address {\n  border: 2px solid #636363;\n  background-color: #2a2d32;\n  border-radius: 12px;\n  height: 70px;\n  position: relative;\n  padding: 12px;\n  font-size: 16px;\n  color: #ffcc00;\n  word-break: break-all;\n}\n.withdraw .withdraw-address .placeholder {\n  font-size: 20px;\n  color: #636363;\n}\n.withdraw .withdraw-address i {\n  font-size: 20px;\n  color: #ffcc00;\n  position: absolute;\n  top: 8px;\n  right: 12px;\n}\n.withdraw .row {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC93aXRoZHJhdy9FOlxcVXNlcnNcXFN5bHZlc3RlclxcRGVza3RvcFxcYmxvY2tjaGFpbi1sb3R0ZXJ5L3NyY1xcYXBwXFxhY2NvdW50XFx3aXRoZHJhd1xcd2l0aGRyYXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FjY291bnQvd2l0aGRyYXcvd2l0aGRyYXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNFUjtBRENJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUlBLG1CQUFBO0FDRlI7QUREUTtFQUNJLFlBQUE7QUNHWjtBREVJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNBUjtBREVRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNBWjtBREdRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDRFo7QURLSTtFQUNJLG1CQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3dpdGhkcmF3L3dpdGhkcmF3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpdGhkcmF3IHtcclxuICAgIHBhZGRpbmc6IDAgMjRweDsgXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDE2cHggMCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbW91bnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgIC5hdmFpbGFibGUge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndpdGhkcmF3LWFkZHJlc3Mge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM2MzYzNjM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cclxuICAgICAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjM2MzYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG59IiwiLndpdGhkcmF3IHtcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuLndpdGhkcmF3IC5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTZweCAwIDIwcHg7XG59XG4ud2l0aGRyYXcgLmFtb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNmZmNjMDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ud2l0aGRyYXcgLmFtb3VudCAuYXZhaWxhYmxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLndpdGhkcmF3IC53aXRoZHJhdy1hZGRyZXNzIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzYzNjM2MztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmNjMDA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi53aXRoZHJhdyAud2l0aGRyYXctYWRkcmVzcyAucGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xufVxuLndpdGhkcmF3IC53aXRoZHJhdy1hZGRyZXNzIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZjYzAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogMTJweDtcbn1cbi53aXRoZHJhdyAucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/account/withdraw/withdraw.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/withdraw/withdraw.component.ts ***!
  \********************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let WithdrawComponent = class WithdrawComponent {
    constructor(authService) {
        this.authService = authService;
        this.showIcon = false;
        this.address = "";
        this.amount = 0;
        this.message = '';
    }
    ngOnInit() {
    }
    withdraw() {
        this.authService.withdraw(this.amount)
            .subscribe((data) => {
            if (data.code === 200) {
                this.amount = 0;
                this.message = 'success';
                this.authService.user.amountAvailable = parseFloat(data.msg.balance);
            }
            else {
                this.message = 'an-error-has-occurred';
            }
        });
    }
};
WithdrawComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
WithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-withdraw',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./withdraw.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/withdraw/withdraw.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./withdraw.component.scss */ "./src/app/account/withdraw/withdraw.component.scss")).default]
    })
], WithdrawComponent);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-container {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100vw;\n}\n.main-container .main-content {\n  width: 100%;\n  height: 100%;\n  flex-basis: 100%;\n  max-width: 650px;\n  overflow: hidden;\n  position: relative;\n}\n.main-container .animated-background {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 100px;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURFSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuXHJcbiAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbmltYXRlZC1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDEwMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG59IiwiLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuLm1haW4tY29udGFpbmVyIC5tYWluLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbi1jb250YWluZXIgLmFuaW1hdGVkLWJhY2tncm91bmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTAwcHg7XG4gIHotaW5kZXg6IC0xO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    isHome() {
        return this.router.url.indexOf('home') !== -1;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/app-common.module */ "./src/app/common/app-common.module.ts");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _how_to_play_how_to_play_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./how-to-play/how-to-play.module */ "./src/app/how-to-play/how-to-play.module.ts");
/* harmony import */ var _my_entries_my_entries_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-entries/my-entries.module */ "./src/app/my-entries/my-entries.module.ts");
/* harmony import */ var _payout_payout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payout/payout.module */ "./src/app/payout/payout.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_block_chain_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/block-chain.service */ "./src/app/services/block-chain.service.ts");
/* harmony import */ var _services_lottery_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/lottery.service */ "./src/app/services/lottery.service.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/navigation.service */ "./src/app/services/navigation.service.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _services_payout_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/payout.service */ "./src/app/services/payout.service.ts");
/* harmony import */ var _common_window_ref__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/window-ref */ "./src/app/common/window-ref.ts");






// Modules








// Components

// Services








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
        ],
        imports: [
            _account_account_module__WEBPACK_IMPORTED_MODULE_6__["AccountModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
            _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
            _how_to_play_how_to_play_module__WEBPACK_IMPORTED_MODULE_10__["HowToPlayModule"],
            _my_entries_my_entries_module__WEBPACK_IMPORTED_MODULE_11__["MyEntriesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _payout_payout_module__WEBPACK_IMPORTED_MODULE_12__["PayoutModule"]
        ],
        providers: [
            _services_account_service__WEBPACK_IMPORTED_MODULE_15__["AccountService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
            _services_block_chain_service__WEBPACK_IMPORTED_MODULE_17__["BlockChainService"],
            _services_lottery_service__WEBPACK_IMPORTED_MODULE_18__["LotteryService"],
            _services_navigation_service__WEBPACK_IMPORTED_MODULE_19__["NavigationService"],
            _services_payout_service__WEBPACK_IMPORTED_MODULE_21__["PayoutService"],
            _services_translate_service__WEBPACK_IMPORTED_MODULE_20__["TranslateService"],
            _common_window_ref__WEBPACK_IMPORTED_MODULE_22__["WindowRef"],
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"]
            }
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/account-header/account-header.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/common/account-header/account-header.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".simple-return {\n  text-align: right;\n  height: 50px;\n  padding: 16px 16px 16px 0;\n}\n.simple-return i {\n  font-size: 20px;\n  color: white;\n}\n.account-header {\n  font-weight: 500;\n  padding: 16px;\n  height: 50px;\n  position: -webkit-sticky;\n  position: sticky;\n  background-color: #2a2d32;\n  color: white;\n  display: flex;\n  align-content: center;\n  top: 0;\n}\n.account-header i {\n  color: #ffcc00;\n  font-size: 20px;\n}\n.account-header .title {\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FjY291bnQtaGVhZGVyL0U6XFxVc2Vyc1xcU3lsdmVzdGVyXFxEZXNrdG9wXFxibG9ja2NoYWluLWxvdHRlcnkvc3JjXFxhcHBcXGNvbW1vblxcYWNjb3VudC1oZWFkZXJcXGFjY291bnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vYWNjb3VudC1oZWFkZXIvYWNjb3VudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQ0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NSO0FER0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLE1BQUE7QUNBSjtBRENJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDUjtBRENJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2FjY291bnQtaGVhZGVyL2FjY291bnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbXBsZS1yZXR1cm4ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAwO1xyXG5cclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY2NvdW50LWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDMyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLnNpbXBsZS1yZXR1cm4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAwO1xufVxuLnNpbXBsZS1yZXR1cm4gaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWNjb3VudC1oZWFkZXIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0b3A6IDA7XG59XG4uYWNjb3VudC1oZWFkZXIgaSB7XG4gIGNvbG9yOiAjZmZjYzAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYWNjb3VudC1oZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/account-header/account-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/account-header/account-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: AccountHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountHeaderComponent", function() { return AccountHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let AccountHeaderComponent = class AccountHeaderComponent {
    constructor(location) {
        this.location = location;
        this.simpleReturn = false;
        this.title = '';
        this.navigateBack = () => {
            this.location.back();
        };
    }
    ngOnInit() {
    }
};
AccountHeaderComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AccountHeaderComponent.prototype, "simpleReturn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AccountHeaderComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AccountHeaderComponent.prototype, "navigateBack", void 0);
AccountHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/account-header/account-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-header.component.scss */ "./src/app/common/account-header/account-header.component.scss")).default]
    })
], AccountHeaderComponent);



/***/ }),

/***/ "./src/app/common/animated-background/animated-background.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/common/animated-background/animated-background.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-container {\n  height: 100%;\n  overflow: hidden;\n  background: linear-gradient(to bottom right, #231991, #26362e);\n}\n.background-container svg {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLWJhY2tncm91bmQvRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxhbmltYXRlZC1iYWNrZ3JvdW5kXFxhbmltYXRlZC1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtYmFja2dyb3VuZC9hbmltYXRlZC1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOERBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLWJhY2tncm91bmQvYW5pbWF0ZWQtYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzIzMTk5MSwgIzI2MzYyZSk7XHJcbiAgICBzdmcge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSIsIi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzIzMTk5MSwgIzI2MzYyZSk7XG59XG4uYmFja2dyb3VuZC1jb250YWluZXIgc3ZnIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/animated-background/animated-background.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/common/animated-background/animated-background.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AnimatedBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedBackgroundComponent", function() { return AnimatedBackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnimatedBackgroundComponent = class AnimatedBackgroundComponent {
    constructor() {
        this.width = '115vh';
    }
    ngAfterViewInit() {
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        document.querySelectorAll('#bg-animation > *').forEach(function (el) {
            let pathLength = getRndInteger(20, 30);
            if (Math.random() > 5) {
                gsap.to(el, getRndInteger(30, 35), { x: pathLength, y: -(pathLength * Math.tan(28.65 * Math.PI / 180)), repeat: -1, yoyo: true, ease: 'sine.inOut' }).play(getRndInteger(15, 30));
            }
            else {
                gsap.to(el, getRndInteger(20, 25), { x: pathLength, y: -(pathLength * Math.tan(28.65 * Math.PI / 180)), repeat: -1, yoyo: true, ease: 'sine.inOut' }).play(getRndInteger(15, 30));
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnimatedBackgroundComponent.prototype, "width", void 0);
AnimatedBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animated-background',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animated-background.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-background/animated-background.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animated-background.component.scss */ "./src/app/common/animated-background/animated-background.component.scss")).default]
    })
], AnimatedBackgroundComponent);



/***/ }),

/***/ "./src/app/common/animated-coins/animated-coins.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/common/animated-coins/animated-coins.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("svg {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLWNvaW5zL0U6XFxVc2Vyc1xcU3lsdmVzdGVyXFxEZXNrdG9wXFxibG9ja2NoYWluLWxvdHRlcnkvc3JjXFxhcHBcXGNvbW1vblxcYW5pbWF0ZWQtY29pbnNcXGFuaW1hdGVkLWNvaW5zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtY29pbnMvYW5pbWF0ZWQtY29pbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtY29pbnMvYW5pbWF0ZWQtY29pbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4iLCJzdmcge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/animated-coins/animated-coins.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/animated-coins/animated-coins.component.ts ***!
  \*******************************************************************/
/*! exports provided: AnimatedCoinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedCoinsComponent", function() { return AnimatedCoinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnimatedCoinsComponent = class AnimatedCoinsComponent {
    constructor() { }
    ngOnInit() {
        this.animate();
    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomFloatBetween(minValue, maxValue, precision) {
        if (typeof (precision) == 'undefined') {
            precision = 2;
        }
        return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
    }
    animate() {
        document.querySelectorAll('svg path, svg g').forEach((el) => {
            el.removeAttribute('data-name');
        });
        document.querySelectorAll('svg [id*="_Group"], svg [id*="_Path"]').forEach((el) => {
            el.removeAttribute('id');
        });
        TweenLite.randomEase = Sine.easeInOut;
        const coinsAnimation = new TimelineMax({
            repeat: -1,
            repeatDelay: 1.5
        });
        coinsAnimation
            .to('#coins-animation #coins-parts', .5, { opacity: 1 });
        document.querySelectorAll('#coins-animation #coins-parts g').forEach((el, index) => {
            let ntl = new TimelineMax({});
            const hor = this.getRndInteger(-400, 400);
            const vert = this.getRndInteger(200, 800);
            const timeEl = this.randomFloatBetween(2, 3, 2);
            const elDur = this.randomFloatBetween(0.8, 1.5, 2);
            let offsetTimeEl = '-=' + timeEl / 3;
            ntl
                .to(el, timeEl, { x: hor }, 0)
                .fromTo(el, timeEl / 3, { y: 100 }, { y: -vert, ease: 'power3.out' }, 0)
                .to(el, timeEl / 1.5, { y: 100, ease: 'power1.in' }, timeEl / 3)
                //.to(el.children, timeEl, {transformOrigin: '50% 50%', scale: 3, ease: 'sine.in'}, 0)
                .to(el, .5, { opacity: 0 }, offsetTimeEl)
                .to(el, elDur, { transformOrigin: '50% 50%', rotation: Math.random() > .5 ? -360 : 360, repeat: 1.5, ease: 'linear' }, 0)
                .to(el, elDur, { transformOrigin: '50% 50%', scaleX: this.randomFloatBetween(.3, .8, 2), repeat: 7, yoyo: true, ease: 'linear' }, 0);
            coinsAnimation.add(ntl, 0);
        });
    }
};
AnimatedCoinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animated-coins',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animated-coins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-coins/animated-coins.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animated-coins.component.scss */ "./src/app/common/animated-coins/animated-coins.component.scss")).default]
    })
], AnimatedCoinsComponent);



/***/ }),

/***/ "./src/app/common/animated-confetti/animated-confetti.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/common/animated-confetti/animated-confetti.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("svg {\n  width: 100%;\n  position: absolute;\n  pointer-events: none;\n  z-index: 200;\n  left: 0;\n  bottom: -15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLWNvbmZldHRpL0U6XFxVc2Vyc1xcU3lsdmVzdGVyXFxEZXNrdG9wXFxibG9ja2NoYWluLWxvdHRlcnkvc3JjXFxhcHBcXGNvbW1vblxcYW5pbWF0ZWQtY29uZmV0dGlcXGFuaW1hdGVkLWNvbmZldHRpLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtY29uZmV0dGkvYW5pbWF0ZWQtY29uZmV0dGkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLWNvbmZldHRpL2FuaW1hdGVkLWNvbmZldHRpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMTUlO1xyXG59XHJcbiIsInN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAyMDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTE1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common/animated-confetti/animated-confetti.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common/animated-confetti/animated-confetti.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnimatedConfettiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedConfettiComponent", function() { return AnimatedConfettiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnimatedConfettiComponent = class AnimatedConfettiComponent {
    constructor() { }
    ngOnInit() {
        this.startAnimation();
    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomFloatBetween(minValue, maxValue, precision) {
        if (typeof (precision) == 'undefined') {
            precision = 2;
        }
        return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
    }
    startAnimation() {
        document.querySelectorAll('svg path, svg g').forEach((el) => {
            el.removeAttribute('data-name');
        });
        document.querySelectorAll('svg [id*="_Group"], svg [id*="_Path"]').forEach((el) => {
            el.removeAttribute('id');
        });
        TweenLite.randomEase = Sine.easeInOut;
        const confetti = new TimelineMax({
            repeat: 0,
            repeatDelay: 1.5
        });
        confetti
            .to('#confetti #confetti-particles', .5, { opacity: 1 });
        document.querySelectorAll('#confetti #confetti-particles rect').forEach((el, index) => {
            let ntl = new TimelineMax({});
            const hor = this.getRndInteger(-400, 400);
            const vert = this.getRndInteger(200, 800);
            const timeEl = this.randomFloatBetween(2, 3, 2);
            const elDur = this.randomFloatBetween(0.8, 1.5, 2);
            const offsetTimeEl = '-=' + timeEl / 3;
            ntl
                .to(el, timeEl, { x: hor }, 0)
                .fromTo(el, timeEl / 3, { y: 100 }, { y: -vert, ease: 'power3.out' }, 0)
                .to(el, timeEl / 2, { y: 100, ease: 'power1.in' }, timeEl / 3)
                .to(el, .5, { opacity: 0 }, offsetTimeEl)
                .to(el, elDur, { transformOrigin: '50% 50%', rotation: Math.random() > .5 ? -360 : 360, repeat: 1.5, ease: 'linear' }, 0);
            confetti.add(ntl, 0);
        });
    }
};
AnimatedConfettiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animated-confetti',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animated-confetti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-confetti/animated-confetti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animated-confetti.component.scss */ "./src/app/common/animated-confetti/animated-confetti.component.scss")).default]
    })
], AnimatedConfettiComponent);



/***/ }),

/***/ "./src/app/common/animated-question/animated-question.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/common/animated-question/animated-question.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("svg {\n  height: 100%;\n}\n\n#questionmark-button {\n  overflow: visible;\n}\n\n@-webkit-keyframes move-questionmark {\n  0% {\n    transform: scale(0);\n  }\n  30%, 100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes move-questionmark {\n  0% {\n    transform: scale(0);\n  }\n  30%, 100% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes fade-questionmark {\n  0%, 70% {\n    opacity: 1;\n  }\n  90%, 100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fade-questionmark {\n  0%, 70% {\n    opacity: 1;\n  }\n  90%, 100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes fade-circles-1 {\n  0%, 10%, 55%, 100% {\n    opacity: 0;\n  }\n  23.5%, 41.5% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-circles-1 {\n  0%, 10%, 55%, 100% {\n    opacity: 0;\n  }\n  23.5%, 41.5% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fade-circles-2 {\n  0%, 17.5%, 62.5%, 100% {\n    opacity: 0;\n  }\n  31%, 49% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-circles-2 {\n  0%, 17.5%, 62.5%, 100% {\n    opacity: 0;\n  }\n  31%, 49% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes move-circles-1 {\n  0%, 10% {\n    transform: scale(0.2) rotate(-20deg);\n  }\n  55%, 100% {\n    transform: scale(0.8);\n  }\n}\n\n@keyframes move-circles-1 {\n  0%, 10% {\n    transform: scale(0.2) rotate(-20deg);\n  }\n  55%, 100% {\n    transform: scale(0.8);\n  }\n}\n\n@-webkit-keyframes move-circles-2 {\n  0%, 17.5% {\n    transform: scale(0.2) rotate(-20deg);\n  }\n  62.5%, 100% {\n    transform: scale(0.8);\n  }\n}\n\n@keyframes move-circles-2 {\n  0%, 17.5% {\n    transform: scale(0.2) rotate(-20deg);\n  }\n  62.5%, 100% {\n    transform: scale(0.8);\n  }\n}\n\n@-webkit-keyframes scale-down-1 {\n  0%, 10%, 55%, 100% {\n    transform: scale(0);\n  }\n  28%, 41.5% {\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-down-1 {\n  0%, 10%, 55%, 100% {\n    transform: scale(0);\n  }\n  28%, 41.5% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes scale-down-2 {\n  0%, 15%, 60%, 100% {\n    transform: scale(0);\n  }\n  33%, 46.5% {\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-down-2 {\n  0%, 15%, 60%, 100% {\n    transform: scale(0);\n  }\n  33%, 46.5% {\n    transform: scale(1);\n  }\n}\n\n#questionmark-button #main-questionmark {\n  transform-origin: 12.81px 12.493px;\n  transform: scale(0.5);\n  -webkit-animation: move-questionmark 2s cubic-bezier(0.34, 1.56, 0.64, 1) both infinite, fade-questionmark 2s linear both infinite;\n  animation: move-questionmark 2s cubic-bezier(0.34, 1.56, 0.64, 1) both infinite, fade-questionmark 2s linear both infinite;\n}\n\n#questionmark-button #circles-around {\n  transform-origin: 12.81px 12.493px;\n  -webkit-animation: move-circles-1 2s ease-out both infinite, fade-circles-1 2s ease-out both infinite;\n  animation: move-circles-1 2s ease-out both infinite, fade-circles-1 2s ease-out both infinite;\n}\n\n#questionmark-button #circles-around-2 {\n  transform-origin: 12.81px 12.493px;\n  -webkit-animation: move-circles-2 2s ease-out both infinite, fade-circles-2 2s ease-out both infinite;\n  animation: move-circles-2 2s ease-out both infinite, fade-circles-2 2s ease-out both infinite;\n}\n\n#questionmark-button #circles-around circle {\n  -webkit-animation: scale-down-1 2s ease-in-out both infinite;\n  animation: scale-down-1 2s ease-in-out both infinite;\n}\n\n#questionmark-button #circles-around-2 circle {\n  -webkit-animation: scale-down-2 2s ease-in-out both infinite;\n  animation: scale-down-2 2s ease-in-out both infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLXF1ZXN0aW9uL0U6XFxVc2Vyc1xcU3lsdmVzdGVyXFxEZXNrdG9wXFxibG9ja2NoYWluLWxvdHRlcnkvc3JjXFxhcHBcXGNvbW1vblxcYW5pbWF0ZWQtcXVlc3Rpb25cXGFuaW1hdGVkLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtcXVlc3Rpb24vYW5pbWF0ZWQtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDSSxZQUFBO0FDQVY7O0FERU07RUFDRSxpQkFBQTtBQ0NSOztBREVNO0VBQ0U7SUFFVSxtQkFBQTtFQ0NoQjtFRENNO0lBRVUsbUJBQUE7RUNDaEI7QUFDRjs7QURFTTtFQUNFO0lBRVUsbUJBQUE7RUNBaEI7RURFTTtJQUVVLG1CQUFBO0VDQWhCO0FBQ0Y7O0FER007RUFDRTtJQUNFLFVBQUE7RUNEUjtFREdNO0lBQ0UsVUFBQTtFQ0RSO0FBQ0Y7O0FESU07RUFDRTtJQUNFLFVBQUE7RUNGUjtFRElNO0lBQ0UsVUFBQTtFQ0ZSO0FBQ0Y7O0FES007RUFDRTtJQUNFLFVBQUE7RUNIUjtFREtNO0lBQ0UsVUFBQTtFQ0hSO0FBQ0Y7O0FETU07RUFDRTtJQUNFLFVBQUE7RUNKUjtFRE1NO0lBQ0UsVUFBQTtFQ0pSO0FBQ0Y7O0FET007RUFDRTtJQUNFLFVBQUE7RUNMUjtFRE9NO0lBQ0UsVUFBQTtFQ0xSO0FBQ0Y7O0FEUU07RUFDRTtJQUNFLFVBQUE7RUNOUjtFRFFNO0lBQ0UsVUFBQTtFQ05SO0FBQ0Y7O0FEU007RUFDRTtJQUVVLG9DQUFBO0VDUGhCO0VEU007SUFFVSxxQkFBQTtFQ1BoQjtBQUNGOztBRFVNO0VBQ0U7SUFFVSxvQ0FBQTtFQ1JoQjtFRFVNO0lBRVUscUJBQUE7RUNSaEI7QUFDRjs7QURXTTtFQUNFO0lBRVUsb0NBQUE7RUNUaEI7RURXTTtJQUVVLHFCQUFBO0VDVGhCO0FBQ0Y7O0FEWU07RUFDRTtJQUVVLG9DQUFBO0VDVmhCO0VEWU07SUFFVSxxQkFBQTtFQ1ZoQjtBQUNGOztBRGFNO0VBQ0U7SUFFVSxtQkFBQTtFQ1hoQjtFRGFNO0lBRVUsbUJBQUE7RUNYaEI7QUFDRjs7QURjTTtFQUNFO0lBRVUsbUJBQUE7RUNaaEI7RURjTTtJQUVVLG1CQUFBO0VDWmhCO0FBQ0Y7O0FEZU07RUFDRTtJQUVVLG1CQUFBO0VDYmhCO0VEZU07SUFFVSxtQkFBQTtFQ2JoQjtBQUNGOztBRGdCTTtFQUNFO0lBRVUsbUJBQUE7RUNkaEI7RURnQk07SUFFVSxtQkFBQTtFQ2RoQjtBQUNGOztBRGlCTTtFQUdVLGtDQUFBO0VBR0EscUJBQUE7RUFDUixrSUFBQTtFQUNRLDBIQUFBO0FDZmhCOztBRGtCTTtFQUdVLGtDQUFBO0VBQ1IscUdBQUE7RUFDUSw2RkFBQTtBQ2ZoQjs7QURrQk07RUFHVSxrQ0FBQTtFQUNSLHFHQUFBO0VBQ1EsNkZBQUE7QUNmaEI7O0FEa0JNO0VBQ0UsNERBQUE7RUFDUSxvREFBQTtBQ2ZoQjs7QURrQk07RUFDRSw0REFBQTtFQUNRLG9EQUFBO0FDZmhCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLXF1ZXN0aW9uL2FuaW1hdGVkLXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgI3F1ZXN0aW9ubWFyay1idXR0b24ge1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS1xdWVzdGlvbm1hcmsge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzAlLCAxMDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgbW92ZS1xdWVzdGlvbm1hcmsge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzAlLCAxMDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLXF1ZXN0aW9ubWFyayB7XHJcbiAgICAgICAgMCUsIDcwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICA5MCUsIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgZmFkZS1xdWVzdGlvbm1hcmsge1xyXG4gICAgICAgIDAlLCA3MCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOTAlLCAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1jaXJjbGVzLTEge1xyXG4gICAgICAgIDAlLCAxMCUsIDU1JSwgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAyMy41JSwgNDEuNSUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBrZXlmcmFtZXMgZmFkZS1jaXJjbGVzLTEge1xyXG4gICAgICAgIDAlLCAxMCUsIDU1JSwgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAyMy41JSwgNDEuNSUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWNpcmNsZXMtMiB7XHJcbiAgICAgICAgMCUsIDE3LjUlLCAgNjIuNSUsIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzElLCA0OSUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgZmFkZS1jaXJjbGVzLTIge1xyXG4gICAgICAgIDAlLCAxNy41JSwgIDYyLjUlLCAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDMxJSwgNDklIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS1jaXJjbGVzLTEge1xyXG4gICAgICAgIDAlLCAxMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4yKSByb3RhdGUoLTIwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMikgcm90YXRlKC0yMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDU1JSwgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBrZXlmcmFtZXMgbW92ZS1jaXJjbGVzLTEge1xyXG4gICAgICAgIDAlLCAxMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4yKSByb3RhdGUoLTIwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMikgcm90YXRlKC0yMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDU1JSwgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWNpcmNsZXMtMiB7XHJcbiAgICAgICAgMCUsIDE3LjUlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMikgcm90YXRlKC0yMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjIpIHJvdGF0ZSgtMjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA2Mi41JSwgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgbW92ZS1jaXJjbGVzLTIge1xyXG4gICAgICAgIDAlLCAxNy41JSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjIpIHJvdGF0ZSgtMjBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4yKSByb3RhdGUoLTIwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNjIuNSUsIDEwMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGUtZG93bi0xIHtcclxuICAgICAgICAwJSwgMTAlLCA1NSUsIDEwMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAyOCUsIDQxLjUlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBrZXlmcmFtZXMgc2NhbGUtZG93bi0xIHtcclxuICAgICAgICAwJSwgMTAlLCA1NSUsIDEwMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAyOCUsIDQxLjUlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS1kb3duLTIge1xyXG4gICAgICAgIDAlLCAxNSUsIDYwJSwgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDMzJSwgNDYuNSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzY2FsZS1kb3duLTIge1xyXG4gICAgICAgIDAlLCAxNSUsIDYwJSwgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDMzJSwgNDYuNSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI3F1ZXN0aW9ubWFyay1idXR0b24gI21haW4tcXVlc3Rpb25tYXJrIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjUpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguNSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS1xdWVzdGlvbm1hcmsgMnMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGJvdGggaW5maW5pdGUsIGZhZGUtcXVlc3Rpb25tYXJrIDJzIGxpbmVhciBib3RoIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBtb3ZlLXF1ZXN0aW9ubWFyayAycyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgYm90aCBpbmZpbml0ZSwgZmFkZS1xdWVzdGlvbm1hcmsgMnMgbGluZWFyIGJvdGggaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICNxdWVzdGlvbm1hcmstYnV0dG9uICNjaXJjbGVzLWFyb3VuZCB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtY2lyY2xlcy0xIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGUsIGZhZGUtY2lyY2xlcy0xIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IG1vdmUtY2lyY2xlcy0xIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGUsIGZhZGUtY2lyY2xlcy0xIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICNxdWVzdGlvbm1hcmstYnV0dG9uICNjaXJjbGVzLWFyb3VuZC0yIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS1jaXJjbGVzLTIgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZSwgZmFkZS1jaXJjbGVzLTIgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1jaXJjbGVzLTIgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZSwgZmFkZS1jaXJjbGVzLTIgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI3F1ZXN0aW9ubWFyay1idXR0b24gI2NpcmNsZXMtYXJvdW5kIGNpcmNsZSB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLWRvd24tMSAycyBlYXNlLWluLW91dCBib3RoIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzY2FsZS1kb3duLTEgMnMgZWFzZS1pbi1vdXQgYm90aCBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI3F1ZXN0aW9ubWFyay1idXR0b24gI2NpcmNsZXMtYXJvdW5kLTIgY2lyY2xlIHtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtZG93bi0yIDJzIGVhc2UtaW4tb3V0IGJvdGggaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHNjYWxlLWRvd24tMiAycyBlYXNlLWluLW91dCBib3RoIGluZmluaXRlO1xyXG4gICAgICB9Iiwic3ZnIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcXVlc3Rpb25tYXJrLWJ1dHRvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS1xdWVzdGlvbm1hcmsge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMzAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlLXF1ZXN0aW9ubWFyayB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAzMCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1xdWVzdGlvbm1hcmsge1xuICAwJSwgNzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDkwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlLXF1ZXN0aW9ubWFyayB7XG4gIDAlLCA3MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgOTAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1jaXJjbGVzLTEge1xuICAwJSwgMTAlLCA1NSUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjMuNSUsIDQxLjUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtY2lyY2xlcy0xIHtcbiAgMCUsIDEwJSwgNTUlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDIzLjUlLCA0MS41JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtY2lyY2xlcy0yIHtcbiAgMCUsIDE3LjUlLCA2Mi41JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAzMSUsIDQ5JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlLWNpcmNsZXMtMiB7XG4gIDAlLCAxNy41JSwgNjIuNSUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMzElLCA0OSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWNpcmNsZXMtMSB7XG4gIDAlLCAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKSByb3RhdGUoLTIwZGVnKTtcbiAgfVxuICA1NSUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlLWNpcmNsZXMtMSB7XG4gIDAlLCAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKSByb3RhdGUoLTIwZGVnKTtcbiAgfVxuICA1NSUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtY2lyY2xlcy0yIHtcbiAgMCUsIDE3LjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yKSByb3RhdGUoLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMikgcm90YXRlKC0yMGRlZyk7XG4gIH1cbiAgNjIuNSUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlLWNpcmNsZXMtMiB7XG4gIDAlLCAxNy41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMikgcm90YXRlKC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHJvdGF0ZSgtMjBkZWcpO1xuICB9XG4gIDYyLjUlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS1kb3duLTEge1xuICAwJSwgMTAlLCA1NSUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDI4JSwgNDEuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNjYWxlLWRvd24tMSB7XG4gIDAlLCAxMCUsIDU1JSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMjglLCA0MS41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS1kb3duLTIge1xuICAwJSwgMTUlLCA2MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDMzJSwgNDYuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNjYWxlLWRvd24tMiB7XG4gIDAlLCAxNSUsIDYwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMzMlLCA0Ni41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiNxdWVzdGlvbm1hcmstYnV0dG9uICNtYWluLXF1ZXN0aW9ubWFyayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLXF1ZXN0aW9ubWFyayAycyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgYm90aCBpbmZpbml0ZSwgZmFkZS1xdWVzdGlvbm1hcmsgMnMgbGluZWFyIGJvdGggaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbW92ZS1xdWVzdGlvbm1hcmsgMnMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGJvdGggaW5maW5pdGUsIGZhZGUtcXVlc3Rpb25tYXJrIDJzIGxpbmVhciBib3RoIGluZmluaXRlO1xufVxuXG4jcXVlc3Rpb25tYXJrLWJ1dHRvbiAjY2lyY2xlcy1hcm91bmQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS1jaXJjbGVzLTEgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZSwgZmFkZS1jaXJjbGVzLTEgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLWNpcmNsZXMtMSAycyBlYXNlLW91dCBib3RoIGluZmluaXRlLCBmYWRlLWNpcmNsZXMtMSAycyBlYXNlLW91dCBib3RoIGluZmluaXRlO1xufVxuXG4jcXVlc3Rpb25tYXJrLWJ1dHRvbiAjY2lyY2xlcy1hcm91bmQtMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLWNpcmNsZXMtMiAycyBlYXNlLW91dCBib3RoIGluZmluaXRlLCBmYWRlLWNpcmNsZXMtMiAycyBlYXNlLW91dCBib3RoIGluZmluaXRlO1xuICBhbmltYXRpb246IG1vdmUtY2lyY2xlcy0yIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGUsIGZhZGUtY2lyY2xlcy0yIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGU7XG59XG5cbiNxdWVzdGlvbm1hcmstYnV0dG9uICNjaXJjbGVzLWFyb3VuZCBjaXJjbGUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtZG93bi0xIDJzIGVhc2UtaW4tb3V0IGJvdGggaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc2NhbGUtZG93bi0xIDJzIGVhc2UtaW4tb3V0IGJvdGggaW5maW5pdGU7XG59XG5cbiNxdWVzdGlvbm1hcmstYnV0dG9uICNjaXJjbGVzLWFyb3VuZC0yIGNpcmNsZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS1kb3duLTIgMnMgZWFzZS1pbi1vdXQgYm90aCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzY2FsZS1kb3duLTIgMnMgZWFzZS1pbi1vdXQgYm90aCBpbmZpbml0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common/animated-question/animated-question.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common/animated-question/animated-question.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnimatedQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedQuestionComponent", function() { return AnimatedQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnimatedQuestionComponent = class AnimatedQuestionComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnimatedQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animated-question',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animated-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-question/animated-question.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animated-question.component.scss */ "./src/app/common/animated-question/animated-question.component.scss")).default]
    })
], AnimatedQuestionComponent);



/***/ }),

/***/ "./src/app/common/animated-tickets/animated-tickets.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/common/animated-tickets/animated-tickets.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLXRpY2tldHMvRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxhbmltYXRlZC10aWNrZXRzXFxhbmltYXRlZC10aWNrZXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtdGlja2V0cy9hbmltYXRlZC10aWNrZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLXRpY2tldHMvYW5pbWF0ZWQtdGlja2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4iLCJzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common/animated-tickets/animated-tickets.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/animated-tickets/animated-tickets.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnimatedTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedTicketsComponent", function() { return AnimatedTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnimatedTicketsComponent = class AnimatedTicketsComponent {
    constructor() { }
    ngOnInit() {
        this.startAnimation();
    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomFloatBetween(minValue, maxValue, precision) {
        if (typeof (precision) === 'undefined') {
            precision = 2;
        }
        return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
    }
    startAnimation() {
        document.querySelectorAll('svg path, svg g').forEach((el) => {
            el.removeAttribute('data-name');
        });
        document.querySelectorAll('svg [id*="_Group"], svg [id*="_Path"]').forEach((el) => {
            el.removeAttribute('id');
        });
        TweenLite.randomEase = Sine.easeInOut;
        const confetti = new TimelineMax({
            repeat: 0,
        });
        confetti
            .to('#tickets-animation #tickets', .5, { opacity: 1 });
        document.querySelectorAll('#tickets-animation #tickets path').forEach((el, index) => {
            let ntl = new TimelineMax({});
            let hor = this.getRndInteger(-400, 400);
            let vert = this.getRndInteger(200, 800);
            let timeEl = this.randomFloatBetween(2, 3, 2);
            let elDur = this.randomFloatBetween(0.8, 1.5, 2);
            let offsetTimeEl = '-=' + timeEl / 3;
            ntl
                .to(el, timeEl, { x: hor }, 0)
                .fromTo(el, timeEl / 2, { y: 100 }, { y: -vert, ease: 'sine.out' }, 0)
                .to(el, timeEl / 2, { y: 100, ease: 'power1.in' }, timeEl / 2)
                .to(el, .5, { opacity: 0 }, offsetTimeEl)
                .to(el, elDur, { transformOrigin: '50% 50%', rotation: Math.random() > .5 ? -360 : 360, repeat: 1.5, ease: Power0.easeNone }, 0);
            confetti.add(ntl, 0);
        });
    }
};
AnimatedTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animated-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animated-tickets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-tickets/animated-tickets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animated-tickets.component.scss */ "./src/app/common/animated-tickets/animated-tickets.component.scss")).default]
    })
], AnimatedTicketsComponent);



/***/ }),

/***/ "./src/app/common/app-common.module.ts":
/*!*********************************************!*\
  !*** ./src/app/common/app-common.module.ts ***!
  \*********************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var _account_header_account_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-header/account-header.component */ "./src/app/common/account-header/account-header.component.ts");
/* harmony import */ var _animated_background_animated_background_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animated-background/animated-background.component */ "./src/app/common/animated-background/animated-background.component.ts");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-header/main-header.component */ "./src/app/common/main-header/main-header.component.ts");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/translate.pipe */ "./src/app/pipes/translate.pipe.ts");
/* harmony import */ var _pool_select_pool_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pool-select/pool-select.component */ "./src/app/common/pool-select/pool-select.component.ts");
/* harmony import */ var _buy_ticket_input_buy_ticket_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./buy-ticket-input/buy-ticket-input.component */ "./src/app/common/buy-ticket-input/buy-ticket-input.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _language_select_language_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./language-select/language-select.component */ "./src/app/common/language-select/language-select.component.ts");
/* harmony import */ var _winner_panel_winner_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./winner-panel/winner-panel.component */ "./src/app/common/winner-panel/winner-panel.component.ts");
/* harmony import */ var _animated_question_animated_question_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./animated-question/animated-question.component */ "./src/app/common/animated-question/animated-question.component.ts");
/* harmony import */ var _animated_tickets_animated_tickets_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./animated-tickets/animated-tickets.component */ "./src/app/common/animated-tickets/animated-tickets.component.ts");
/* harmony import */ var _animated_confetti_animated_confetti_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./animated-confetti/animated-confetti.component */ "./src/app/common/animated-confetti/animated-confetti.component.ts");
/* harmony import */ var _animated_coins_animated_coins_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./animated-coins/animated-coins.component */ "./src/app/common/animated-coins/animated-coins.component.ts");
/* harmony import */ var _block_chain_info_block_chain_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./block-chain-info/block-chain-info.component */ "./src/app/common/block-chain-info/block-chain-info.component.ts");








// Components



// Pipes











let AppCommonModule = class AppCommonModule {
};
AppCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _account_header_account_header_component__WEBPACK_IMPORTED_MODULE_8__["AccountHeaderComponent"],
            _animated_background_animated_background_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedBackgroundComponent"],
            _animated_question_animated_question_component__WEBPACK_IMPORTED_MODULE_17__["AnimatedQuestionComponent"],
            _animated_tickets_animated_tickets_component__WEBPACK_IMPORTED_MODULE_18__["AnimatedTicketsComponent"],
            _animated_confetti_animated_confetti_component__WEBPACK_IMPORTED_MODULE_19__["AnimatedConfettiComponent"],
            _animated_coins_animated_coins_component__WEBPACK_IMPORTED_MODULE_20__["AnimatedCoinsComponent"],
            _block_chain_info_block_chain_info_component__WEBPACK_IMPORTED_MODULE_21__["BlockChainInfoComponent"],
            _buy_ticket_input_buy_ticket_input_component__WEBPACK_IMPORTED_MODULE_13__["BuyTicketInputComponent"],
            _language_select_language_select_component__WEBPACK_IMPORTED_MODULE_15__["LanguageSelectComponent"],
            _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_10__["MainHeaderComponent"],
            _pool_select_pool_select_component__WEBPACK_IMPORTED_MODULE_12__["PoolSelectComponent"],
            _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"],
            _winner_panel_winner_panel_component__WEBPACK_IMPORTED_MODULE_16__["WinnerPanelComponent"],
        ],
        imports: [
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]
        ],
        exports: [
            _account_header_account_header_component__WEBPACK_IMPORTED_MODULE_8__["AccountHeaderComponent"],
            _animated_background_animated_background_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedBackgroundComponent"],
            _animated_coins_animated_coins_component__WEBPACK_IMPORTED_MODULE_20__["AnimatedCoinsComponent"],
            _animated_confetti_animated_confetti_component__WEBPACK_IMPORTED_MODULE_19__["AnimatedConfettiComponent"],
            _animated_question_animated_question_component__WEBPACK_IMPORTED_MODULE_17__["AnimatedQuestionComponent"],
            _animated_tickets_animated_tickets_component__WEBPACK_IMPORTED_MODULE_18__["AnimatedTicketsComponent"],
            _block_chain_info_block_chain_info_component__WEBPACK_IMPORTED_MODULE_21__["BlockChainInfoComponent"],
            _buy_ticket_input_buy_ticket_input_component__WEBPACK_IMPORTED_MODULE_13__["BuyTicketInputComponent"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"],
            _language_select_language_select_component__WEBPACK_IMPORTED_MODULE_15__["LanguageSelectComponent"],
            _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_10__["MainHeaderComponent"],
            _pool_select_pool_select_component__WEBPACK_IMPORTED_MODULE_12__["PoolSelectComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"],
            _winner_panel_winner_panel_component__WEBPACK_IMPORTED_MODULE_16__["WinnerPanelComponent"]
        ]
    })
], AppCommonModule);



/***/ }),

/***/ "./src/app/common/block-chain-info/block-chain-info.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/common/block-chain-info/block-chain-info.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block-chain-container {\n  scroll-behavior: smooth;\n  background-color: #00000088;\n  height: 84px;\n  font-size: 12px;\n  overflow: hidden;\n  color: #9194ad;\n  width: 100%;\n}\n.block-chain-container.selected {\n  padding: 12px;\n  font-size: 14px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: #DDD;\n}\n.block-chain-container.selected .hash {\n  font-weight: bold;\n}\n.block-chain-container .block-chain-info {\n  width: 100%;\n}\n.block-chain-container .block-chain-info .hash {\n  max-width: 50%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  direction: rtl;\n}\n.block-chain-container .block-chain-info .block-chain-row {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-evenly;\n}\n.block-chain-container .block-chain-info .block-chain-row:hover {\n  color: #BBB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Jsb2NrLWNoYWluLWluZm8vRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxibG9jay1jaGFpbi1pbmZvXFxibG9jay1jaGFpbi1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vYmxvY2stY2hhaW4taW5mby9ibG9jay1jaGFpbi1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFdBQUE7QUNDUjtBRENRO0VBQ0ksaUJBQUE7QUNDWjtBREdJO0VBQ0ksV0FBQTtBQ0RSO0FERVE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0FaO0FER1E7RUFDSSxlQUFBO0VBSUEsYUFBQTtFQUNBLDZCQUFBO0FDSlo7QURBWTtFQUNJLFdBQUE7QUNFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYmxvY2stY2hhaW4taW5mby9ibG9jay1jaGFpbi1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLWNoYWluLWNvbnRhaW5lciB7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4ODtcclxuICAgIGhlaWdodDogODRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogIzkxOTRhZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgY29sb3I6ICNEREQ7XHJcblxyXG4gICAgICAgIC5oYXNoIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ibG9jay1jaGFpbi1pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuaGFzaCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmJsb2NrLWNoYWluLXJvdyB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0JCQjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmJsb2NrLWNoYWluLWNvbnRhaW5lciB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODg7XG4gIGhlaWdodDogODRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogIzkxOTRhZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmxvY2stY2hhaW4tY29udGFpbmVyLnNlbGVjdGVkIHtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBjb2xvcjogI0RERDtcbn1cbi5ibG9jay1jaGFpbi1jb250YWluZXIuc2VsZWN0ZWQgLmhhc2gge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ibG9jay1jaGFpbi1jb250YWluZXIgLmJsb2NrLWNoYWluLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ibG9jay1jaGFpbi1jb250YWluZXIgLmJsb2NrLWNoYWluLWluZm8gLmhhc2gge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuLmJsb2NrLWNoYWluLWNvbnRhaW5lciAuYmxvY2stY2hhaW4taW5mbyAuYmxvY2stY2hhaW4tcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5ibG9jay1jaGFpbi1jb250YWluZXIgLmJsb2NrLWNoYWluLWluZm8gLmJsb2NrLWNoYWluLXJvdzpob3ZlciB7XG4gIGNvbG9yOiAjQkJCO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/block-chain-info/block-chain-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/block-chain-info/block-chain-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlockChainInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockChainInfoComponent", function() { return BlockChainInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_block_chain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/block-chain.service */ "./src/app/services/block-chain.service.ts");





let BlockChainInfoComponent = class BlockChainInfoComponent {
    constructor(blockChainService) {
        this.blockChainService = blockChainService;
        this.getLatestSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.getBlockSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    openTab(block) {
        window.open(`https://etherscan.io/block/${block}`, '_blank');
    }
    ngOnInit() {
    }
    parseNumber(string) {
        return parseInt(string, 16);
    }
    parseDate(dateString) {
        return new Date(parseInt(dateString, 16) * 1000);
    }
    ngAfterViewInit() {
    }
};
BlockChainInfoComponent.ctorParameters = () => [
    { type: src_app_services_block_chain_service__WEBPACK_IMPORTED_MODULE_4__["BlockChainService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollable', { static: false })
], BlockChainInfoComponent.prototype, "scrollable", void 0);
BlockChainInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-chain-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-chain-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/block-chain-info/block-chain-info.component.html")).default,
        animations: [
            [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*', opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            height: '0',
                            transform: 'translateY(-15px)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', height: '*' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'opacity': '1' }))
                        ])
                    ])
                ])
            ]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-chain-info.component.scss */ "./src/app/common/block-chain-info/block-chain-info.component.scss")).default]
    })
], BlockChainInfoComponent);



/***/ }),

/***/ "./src/app/common/buy-ticket-input/buy-ticket-input.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/common/buy-ticket-input/buy-ticket-input.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buy-ticket-input {\n  color: #ffcc01;\n}\n.buy-ticket-input .counter {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.buy-ticket-input .counter .wrapper {\n  padding: 12px 0;\n}\n.buy-ticket-input .counter .wrapper.line-wrapper {\n  flex-grow: 1;\n}\n.buy-ticket-input .counter .node {\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  border: 2px solid #636363;\n}\n.buy-ticket-input .counter .line {\n  border: 1px solid #636363;\n}\n.buy-ticket-input .counter .node.active, .buy-ticket-input .counter .line.active {\n  border-color: #ffcc01;\n}\n.buy-ticket-input .available-currency {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  margin: 16px 0;\n}\n.buy-ticket-input .available-currency .label {\n  color: white;\n}\n.buy-ticket-input .message {\n  font-size: 30px;\n  text-align: center;\n  margin-top: 10vh;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2J1eS10aWNrZXQtaW5wdXQvRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxidXktdGlja2V0LWlucHV0XFxidXktdGlja2V0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vYnV5LXRpY2tldC1pbnB1dC9idXktdGlja2V0LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxlQUFBO0FDQ1o7QURBWTtFQUNJLFlBQUE7QUNFaEI7QURDUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaO0FER1k7RUFDSSxxQkFBQTtBQ0RoQjtBREtJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIUjtBRElRO0VBQ0ksWUFBQTtBQ0ZaO0FETUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9idXktdGlja2V0LWlucHV0L2J1eS10aWNrZXQtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV5LXRpY2tldC1pbnB1dCB7XHJcbiAgICBjb2xvcjogI2ZmY2MwMTtcclxuICAgIFxyXG4gICAgLmNvdW50ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICAgICAgJi5saW5lLXdyYXBwZXIgeyBcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubm9kZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM2MzYzNjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzYzNjM2MztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ub2RlLCAubGluZSB7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmY2MwMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hdmFpbGFibGUtY3VycmVuY3kge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn0iLCIuYnV5LXRpY2tldC1pbnB1dCB7XG4gIGNvbG9yOiAjZmZjYzAxO1xufVxuLmJ1eS10aWNrZXQtaW5wdXQgLmNvdW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmJ1eS10aWNrZXQtaW5wdXQgLmNvdW50ZXIgLndyYXBwZXIge1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4uYnV5LXRpY2tldC1pbnB1dCAuY291bnRlciAud3JhcHBlci5saW5lLXdyYXBwZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uYnV5LXRpY2tldC1pbnB1dCAuY291bnRlciAubm9kZSB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MzYzNjM7XG59XG4uYnV5LXRpY2tldC1pbnB1dCAuY291bnRlciAubGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MzYzNjM7XG59XG4uYnV5LXRpY2tldC1pbnB1dCAuY291bnRlciAubm9kZS5hY3RpdmUsIC5idXktdGlja2V0LWlucHV0IC5jb3VudGVyIC5saW5lLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmY2MwMTtcbn1cbi5idXktdGlja2V0LWlucHV0IC5hdmFpbGFibGUtY3VycmVuY3kge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG4uYnV5LXRpY2tldC1pbnB1dCAuYXZhaWxhYmxlLWN1cnJlbmN5IC5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5idXktdGlja2V0LWlucHV0IC5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common/buy-ticket-input/buy-ticket-input.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/buy-ticket-input/buy-ticket-input.component.ts ***!
  \***********************************************************************/
/*! exports provided: BuyTicketInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyTicketInputComponent", function() { return BuyTicketInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/lottery.service */ "./src/app/services/lottery.service.ts");




let BuyTicketInputComponent = class BuyTicketInputComponent {
    constructor(authService, lotteryService) {
        this.authService = authService;
        this.lotteryService = lotteryService;
        this.showAnimation = false;
        this.amount = 0;
        this.ratio = 1;
    }
    ngOnInit() {
    }
    buyTickets() {
        if (this.amount > 0 && this.amount <= this.authService.user.amountAvailable) {
            this.lotteryService.buyTicket(this.amount)
                .subscribe(() => {
            });
            this.showAnimation = true;
            setTimeout(() => {
                this.showAnimation = false;
            }, 2000);
        }
    }
    checkValue() {
        if (this.amount > this.authService.user.amountAvailable) {
            this.amount = this.authService.user.amountAvailable;
        }
    }
    setRatio(numerator) {
        const diff = this.lotteryService.currentLotteryInfo.availablePrizePool - this.lotteryService.currentLotteryInfo.currentEntries;
        this.ratio = numerator;
        this.amount = Math.ceil(numerator / 4 * (this.authService.user.amountAvailable > diff ? diff : this.authService.user.amountAvailable));
    }
    isWithinRatio(numerator) {
        const diff = this.lotteryService.currentLotteryInfo.availablePrizePool - this.lotteryService.currentLotteryInfo.currentEntries;
        var denoninator = this.authService.user.amountAvailable > diff ? diff : this.authService.user.amountAvailable;
        const percent = this.amount / denoninator;
        if (percent === 0) {
            return false;
        }
        if (numerator === 1 && this.amount !== 0) {
            return true;
        }
        return (numerator / 4) <= percent;
    }
    authorize() {
        this.authService.authorize();
    }
};
BuyTicketInputComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_3__["LotteryService"] }
];
BuyTicketInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buy-ticket-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buy-ticket-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/buy-ticket-input/buy-ticket-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buy-ticket-input.component.scss */ "./src/app/common/buy-ticket-input/buy-ticket-input.component.scss")).default]
    })
], BuyTicketInputComponent);



/***/ }),

/***/ "./src/app/common/language-select/language-select.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/common/language-select/language-select.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".language-select {\n  display: inline-block;\n}\n.language-select .language-container {\n  min-width: 120px;\n  display: flex;\n  text-align: left;\n}\n.language-select .flag {\n  height: 20px;\n  margin-right: 0.6rem;\n}\n.language-select.dark-background ::ng-deep .mat-select-arrow, .language-select.dark-background ::ng-deep .mat-select-value {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xhbmd1YWdlLXNlbGVjdC9FOlxcVXNlcnNcXFN5bHZlc3RlclxcRGVza3RvcFxcYmxvY2tjaGFpbi1sb3R0ZXJ5L3NyY1xcYXBwXFxjb21tb25cXGxhbmd1YWdlLXNlbGVjdFxcbGFuZ3VhZ2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vbGFuZ3VhZ2Utc2VsZWN0L2xhbmd1YWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURDSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ047QURFSTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ0FOO0FES1E7RUFDRSxZQUFBO0FDSFYiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbGFuZ3VhZ2Utc2VsZWN0L2xhbmd1YWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZS1zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIFxyXG4gICAgLmxhbmd1YWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZmxhZyB7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAuNnJlbTtcclxuICAgIH1cclxuICBcclxuICAgICYuZGFyay1iYWNrZ3JvdW5kIHtcclxuICAgICAgOjpuZy1kZWVwICB7XHJcbiAgICAgICAgLm1hdC1zZWxlY3QtYXJyb3csIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmxhbmd1YWdlLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5sYW5ndWFnZS1zZWxlY3QgLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubGFuZ3VhZ2Utc2VsZWN0IC5mbGFnIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcbn1cbi5sYW5ndWFnZS1zZWxlY3QuZGFyay1iYWNrZ3JvdW5kIDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdywgLmxhbmd1YWdlLXNlbGVjdC5kYXJrLWJhY2tncm91bmQgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/language-select/language-select.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/common/language-select/language-select.component.ts ***!
  \*********************************************************************/
/*! exports provided: LanguageSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSelectComponent", function() { return LanguageSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate.service */ "./src/app/services/translate.service.ts");



let LanguageSelectComponent = class LanguageSelectComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.languageOptions = this.translateService.languages;
    }
    setTranslation() {
        this.translateService.setCurrentLanguage = this.translation;
    }
    ngOnInit() {
        if (!this.translation) {
            this.translation = this.translateService.currentLanguage;
        }
    }
};
LanguageSelectComponent.ctorParameters = () => [
    { type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LanguageSelectComponent.prototype, "translation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LanguageSelectComponent.prototype, "darkBackground", void 0);
LanguageSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./language-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/language-select/language-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./language-select.component.scss */ "./src/app/common/language-select/language-select.component.scss")).default]
    })
], LanguageSelectComponent);



/***/ }),

/***/ "./src/app/common/main-header/main-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/common/main-header/main-header.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 55px;\n  background-color: #2a2d32;\n  padding: 0 12px;\n}\n.main-header .icon-container {\n  overflow: hidden;\n}\n.main-header .menu-icon {\n  color: #ffcc01;\n  font-size: 38px;\n  position: relative;\n  right: 6px;\n}\n.main-header .icon-chevronright {\n  font-size: 23px;\n}\n.main-header .icon-chevronright:active {\n  background: none;\n}\n.main-header .icon-chevronright .chevron-down:before {\n  transform: rotate(90deg) translateX(3px);\n}\n.main-header .icon-chevronright .chevron-up:before {\n  transform: rotate(-90deg) translateX(3px);\n}\n.main-header .right-section-container {\n  position: relative;\n  height: 80%;\n}\n.main-header .right-section-container .option-overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n.main-header .right-section-container .options {\n  border-radius: 16px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  height: 0;\n  transition: height 0.5s;\n  opacity: 0;\n  overflow: hidden;\n}\n.main-header .right-section-container .options.show {\n  height: 295px;\n  opacity: 1;\n  box-shadow: 0px 0px 15px 6px black;\n}\n.main-header .right-section-container .options .option-placeholder {\n  height: 45px;\n  background-color: #cf1942;\n}\n.main-header .right-section-container .options .option {\n  color: white;\n  font-weight: 500;\n  padding: 6px 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 26px;\n  position: relative;\n  cursor: pointer;\n}\n.main-header .right-section-container .options .option img {\n  height: 38px;\n}\n.main-header .right-section-container .options .option:last-child {\n  border-radius: 0 0 16px 16px;\n}\n.main-header .icon-placeholder {\n  width: 55px;\n  flex-basis: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-header .icon-placeholder .icon-img {\n  height: 90%;\n}\n.main-header .right-section {\n  border-radius: 16px;\n  padding: 2px 0;\n  display: flex;\n  position: relative;\n  height: 100%;\n  z-index: 3;\n  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.5);\n}\n.main-header .right-section .section-content {\n  text-align: center;\n  padding: 0 12px;\n}\n.main-header .right-section .section-content .subtitle {\n  font-weight: 500;\n  font-size: 11px;\n}\n.main-header .right-section .section-content .content {\n  font-weight: 500;\n  font-size: 26px;\n  line-height: 22px;\n}\n.main-header .percentage {\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL21haW4taGVhZGVyL0U6XFxVc2Vyc1xcU3lsdmVzdGVyXFxEZXNrdG9wXFxibG9ja2NoYWluLWxvdHRlcnkvc3JjXFxhcHBcXGNvbW1vblxcbWFpbi1oZWFkZXJcXG1haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7QUNDUjtBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNBUjtBREdJO0VBQ0ksZUFBQTtBQ0RSO0FERVE7RUFDRSxnQkFBQTtBQ0FWO0FERVE7RUFDSSx3Q0FBQTtBQ0FaO0FERVE7RUFDSSx5Q0FBQTtBQ0FaO0FESUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNGUjtBRElRO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QUNGWjtBRE9RO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNMWjtBRE9ZO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQ0xoQjtBRFFZO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDTmhCO0FEU1k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtBQ1JoQjtBRFNnQjtFQUNJLFlBQUE7QUNQcEI7QURVZ0I7RUFDSSw0QkFBQTtBQ1JwQjtBRGNJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNaUjtBRGFRO0VBQ0ksV0FBQTtBQ1haO0FEZUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO0FDYlI7QURlUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ2JaO0FEZVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNiaEI7QURlWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDYmhCO0FEa0JJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ2hCTiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcblxyXG4gICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZjYzAxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbi1jaGV2cm9ucmlnaHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGV2cm9uLWRvd246YmVmb3JlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVgoM3B4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZXZyb24tdXA6YmVmb3JlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVYKDNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG5cclxuICAgICAgICAub3B0aW9uLW92ZXJsYXkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC41KTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcblxyXG4vLyBUT0RPOiBBZGQgYW5pbWF0aW9ucyBmb3Igd2hlbiBpdCBjbG9zZXMhXHJcblxyXG4gICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuNXM7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAmLnNob3cge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOTVweDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggNnB4IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAub3B0aW9uLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjE5NDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5vcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNnB4IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24tcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDU1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5pY29uLWltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtc2VjdGlvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cclxuICAgICAgICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEycHg7XHJcblxyXG4gICAgICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBlcmNlbnRhZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4iLCIubWFpbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuLm1haW4taGVhZGVyIC5pY29uLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi1oZWFkZXIgLm1lbnUtaWNvbiB7XG4gIGNvbG9yOiAjZmZjYzAxO1xuICBmb250LXNpemU6IDM4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDZweDtcbn1cbi5tYWluLWhlYWRlciAuaWNvbi1jaGV2cm9ucmlnaHQge1xuICBmb250LXNpemU6IDIzcHg7XG59XG4ubWFpbi1oZWFkZXIgLmljb24tY2hldnJvbnJpZ2h0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ubWFpbi1oZWFkZXIgLmljb24tY2hldnJvbnJpZ2h0IC5jaGV2cm9uLWRvd246YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVgoM3B4KTtcbn1cbi5tYWluLWhlYWRlciAuaWNvbi1jaGV2cm9ucmlnaHQgLmNoZXZyb24tdXA6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVYKDNweCk7XG59XG4ubWFpbi1oZWFkZXIgLnJpZ2h0LXNlY3Rpb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDgwJTtcbn1cbi5tYWluLWhlYWRlciAucmlnaHQtc2VjdGlvbi1jb250YWluZXIgLm9wdGlvbi1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTtcbn1cbi5tYWluLWhlYWRlciAucmlnaHQtc2VjdGlvbi1jb250YWluZXIgLm9wdGlvbnMge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi1oZWFkZXIgLnJpZ2h0LXNlY3Rpb24tY29udGFpbmVyIC5vcHRpb25zLnNob3cge1xuICBoZWlnaHQ6IDI5NXB4O1xuICBvcGFjaXR5OiAxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggNnB4IGJsYWNrO1xufVxuLm1haW4taGVhZGVyIC5yaWdodC1zZWN0aW9uLWNvbnRhaW5lciAub3B0aW9ucyAub3B0aW9uLXBsYWNlaG9sZGVyIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YxOTQyO1xufVxuLm1haW4taGVhZGVyIC5yaWdodC1zZWN0aW9uLWNvbnRhaW5lciAub3B0aW9ucyAub3B0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA2cHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWhlYWRlciAucmlnaHQtc2VjdGlvbi1jb250YWluZXIgLm9wdGlvbnMgLm9wdGlvbiBpbWcge1xuICBoZWlnaHQ6IDM4cHg7XG59XG4ubWFpbi1oZWFkZXIgLnJpZ2h0LXNlY3Rpb24tY29udGFpbmVyIC5vcHRpb25zIC5vcHRpb246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNnB4IDE2cHg7XG59XG4ubWFpbi1oZWFkZXIgLmljb24tcGxhY2Vob2xkZXIge1xuICB3aWR0aDogNTVweDtcbiAgZmxleC1iYXNpczogNTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbi1oZWFkZXIgLmljb24tcGxhY2Vob2xkZXIgLmljb24taW1nIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG4ubWFpbi1oZWFkZXIgLnJpZ2h0LXNlY3Rpb24ge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAycHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDM7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLm1haW4taGVhZGVyIC5yaWdodC1zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cbi5tYWluLWhlYWRlciAucmlnaHQtc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC5zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluLWhlYWRlciAucmlnaHQtc2VjdGlvbiAuc2VjdGlvbi1jb250ZW50IC5jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5tYWluLWhlYWRlciAucGVyY2VudGFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common/main-header/main-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/main-header/main-header.component.ts ***!
  \*************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/lottery.service */ "./src/app/services/lottery.service.ts");




let MainHeaderComponent = class MainHeaderComponent {
    constructor(accountService, lotteryService) {
        this.accountService = accountService;
        this.lotteryService = lotteryService;
    }
    ngOnInit() {
    }
    openOptions() {
        this.showOptions = !this.showOptions;
    }
    setOption(option) {
        this.showOptions = false;
        this.lotteryService.selectedOption = option;
    }
    showAccount() {
        this.accountService.setAccountSettings(true);
    }
};
MainHeaderComponent.ctorParameters = () => [
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] },
    { type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_3__["LotteryService"] }
];
MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/main-header/main-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-header.component.scss */ "./src/app/common/main-header/main-header.component.scss")).default]
    })
], MainHeaderComponent);



/***/ }),

/***/ "./src/app/common/pool-select/pool-select.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/common/pool-select/pool-select.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9wb29sLXNlbGVjdC9wb29sLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/common/pool-select/pool-select.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/pool-select/pool-select.component.ts ***!
  \*************************************************************/
/*! exports provided: PoolSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolSelectComponent", function() { return PoolSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PoolSelectComponent = class PoolSelectComponent {
    constructor() { }
    ngOnInit() {
    }
};
PoolSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pool-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pool-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/pool-select/pool-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pool-select.component.scss */ "./src/app/common/pool-select/pool-select.component.scss")).default]
    })
], PoolSelectComponent);



/***/ }),

/***/ "./src/app/common/window-ref.ts":
/*!**************************************!*\
  !*** ./src/app/common/window-ref.ts ***!
  \**************************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


function _window() {
    // return the global native browser window object
    return window;
}
let WindowRef = class WindowRef {
    get nativeWindow() {
        return _window();
    }
};
WindowRef = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WindowRef);



/***/ }),

/***/ "./src/app/common/winner-panel/winner-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/winner-panel/winner-panel.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".winner-panel {\n  border-radius: 16px;\n  letter-spacing: 0;\n}\n.winner-panel.place-0 {\n  background-color: #ffcc00;\n  color: black;\n  min-height: 45px;\n}\n.winner-panel.place-1 {\n  color: black;\n  background-color: #07f79a;\n  min-height: 83px;\n}\n.winner-panel.place-2 {\n  color: white;\n  background-color: #7b16e3;\n  min-height: 83px;\n}\n.winner-panel.place-3 {\n  background-color: #2977d7;\n  color: white;\n  min-height: 83px;\n}\n.winner-panel.place-4 {\n  color: white;\n  background-color: #762846;\n  min-height: 83px;\n}\n.winner-panel.place-5 {\n  color: white;\n  background-color: #d36d12;\n  min-height: 83px;\n}\n.winner-panel .winner-container {\n  display: flex;\n}\n.winner-panel .place {\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  padding: 0 16px;\n}\n.winner-panel .first-ticket {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px;\n  text-align: center;\n  flex-basis: 100%;\n}\n.winner-panel .first-ticket .winnings {\n  flex-basis: 40%;\n  padding-right: 12px;\n}\n.winner-panel .first-ticket .username {\n  font-size: 15px;\n}\n.winner-panel .first-ticket .number {\n  font-size: 12px;\n}\n.winner-panel .table-container {\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n}\n.winner-panel .table-container .ticket {\n  padding: 2px;\n  text-align: center;\n  flex-basis: 49%;\n}\n.winner-panel .table-container .ticket .username {\n  font-size: 12px;\n  line-height: 12px;\n}\n.winner-panel .table-container .ticket .number {\n  font-size: 10px;\n  line-height: 11px;\n}\n.winner-panel .table-container .ticket .you-won {\n  color: black;\n  background-color: #FFCC00;\n  border-radius: 10px;\n  font-size: 9px;\n  padding: 1px 2px;\n}\n.winner-panel .winnings {\n  flex-basis: 100% !important;\n  padding-right: 16px;\n  text-align: left;\n  justify-content: space-between;\n  display: flex;\n}\n.winner-panel .winnings .amount {\n  display: inline-block;\n  font-size: 11px;\n  color: white;\n  padding: 3px 12px;\n  background-color: #2b3036;\n  border-radius: 10px;\n  margin-bottom: 4px;\n}\n.winner-panel .winnings .dots {\n  color: white;\n  font-size: 44px;\n  line-height: 0;\n}\n.winner-panel .winnings .count {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3dpbm5lci1wYW5lbC9FOlxcVXNlcnNcXFN5bHZlc3RlclxcRGVza3RvcFxcYmxvY2tjaGFpbi1sb3R0ZXJ5L3NyY1xcYXBwXFxjb21tb25cXHdpbm5lci1wYW5lbFxcd2lubmVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vd2lubmVyLXBhbmVsL3dpbm5lci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREFJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRENJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBREVJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREdJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRElJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBREtJO0VBQ0ksYUFBQTtBQ0hSO0FETUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pSO0FET0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTFI7QURNUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0paO0FET1E7RUFDSSxlQUFBO0FDTFo7QURPUTtFQUNJLGVBQUE7QUNMWjtBRFVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDUlI7QURTUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNQWjtBRFFZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDTmhCO0FEUVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNOaEI7QURRWTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTmhCO0FEV0k7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNUUjtBRFVRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDUlo7QURXUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1RaO0FEWVE7RUFDSSxlQUFBO0FDVloiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vd2lubmVyLXBhbmVsL3dpbm5lci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aW5uZXItcGFuZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgJi5wbGFjZS0wIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtaW4taGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYucGxhY2UtMSB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2Y3OWE7XHJcbiAgICAgICAgbWluLWhlaWdodDogODNweDtcclxuICAgIH1cclxuXHJcbiAgICAmLnBsYWNlLTIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxNmUzO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgzcHg7XHJcbiAgICB9XHJcbiAgICAmLnBsYWNlLTMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTc3ZDc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wbGFjZS00IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2Mjg0NjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4M3B4O1xyXG4gICAgfVxyXG5cclxuICAgICYucGxhY2UtNSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzZkMTI7XHJcbiAgICAgICAgbWluLWhlaWdodDogODNweDtcclxuICAgIH1cclxuXHJcbiAgICAud2lubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAucGxhY2Uge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlyc3QtdGlja2V0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAud2lubmluZ3Mge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA0MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlcm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5udW1iZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudGFibGUtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgLnRpY2tldCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA0OSU7XHJcbiAgICAgICAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnVtYmVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC55b3Utd29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNDMDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53aW5uaW5ncyB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuYW1vdW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjMwMzY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb3RzIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3VudCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLndpbm5lci1wYW5lbCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS0wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBtaW4taGVpZ2h0OiA0NXB4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS0xIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdmNzlhO1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS0yIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxNmUzO1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NzdkNztcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS00IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYyODQ2O1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS01IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM2ZDEyO1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbCAud2lubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2lubmVyLXBhbmVsIC5wbGFjZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLndpbm5lci1wYW5lbCAuZmlyc3QtdGlja2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1iYXNpczogMTAwJTtcbn1cbi53aW5uZXItcGFuZWwgLmZpcnN0LXRpY2tldCAud2lubmluZ3Mge1xuICBmbGV4LWJhc2lzOiA0MCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG4ud2lubmVyLXBhbmVsIC5maXJzdC10aWNrZXQgLnVzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLndpbm5lci1wYW5lbCAuZmlyc3QtdGlja2V0IC5udW1iZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ud2lubmVyLXBhbmVsIC50YWJsZS1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi53aW5uZXItcGFuZWwgLnRhYmxlLWNvbnRhaW5lciAudGlja2V0IHtcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtYmFzaXM6IDQ5JTtcbn1cbi53aW5uZXItcGFuZWwgLnRhYmxlLWNvbnRhaW5lciAudGlja2V0IC51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG4ud2lubmVyLXBhbmVsIC50YWJsZS1jb250YWluZXIgLnRpY2tldCAubnVtYmVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi53aW5uZXItcGFuZWwgLnRhYmxlLWNvbnRhaW5lciAudGlja2V0IC55b3Utd29uIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQzAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDlweDtcbiAgcGFkZGluZzogMXB4IDJweDtcbn1cbi53aW5uZXItcGFuZWwgLndpbm5pbmdzIHtcbiAgZmxleC1iYXNpczogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2lubmVyLXBhbmVsIC53aW5uaW5ncyAuYW1vdW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjMwMzY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi53aW5uZXItcGFuZWwgLndpbm5pbmdzIC5kb3RzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuLndpbm5lci1wYW5lbCAud2lubmluZ3MgLmNvdW50IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/winner-panel/winner-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/winner-panel/winner-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: WinnerPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerPanelComponent", function() { return WinnerPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_constants_placeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/placeMap */ "./src/app/constants/placeMap.ts");




let WinnerPanelComponent = class WinnerPanelComponent {
    constructor(router) {
        this.router = router;
        this.placeMap = src_app_constants_placeMap__WEBPACK_IMPORTED_MODULE_3__["PlaceMap"];
    }
    ngOnInit() {
    }
    goToWinnings() {
        this.router.navigate(['/payout-history'], {
            queryParams: {
                level: this.place + 1
            }
        });
    }
};
WinnerPanelComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WinnerPanelComponent.prototype, "winnerInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WinnerPanelComponent.prototype, "place", void 0);
WinnerPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-winner-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./winner-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/winner-panel/winner-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./winner-panel.component.scss */ "./src/app/common/winner-panel/winner-panel.component.scss")).default]
    })
], WinnerPanelComponent);



/***/ }),

/***/ "./src/app/constants/cn.ts":
/*!*********************************!*\
  !*** ./src/app/constants/cn.ts ***!
  \*********************************/
/*! exports provided: ChineseTranslations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChineseTranslations", function() { return ChineseTranslations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ChineseTranslations = {
    '2fa-verification': '2FA验证',
    '6-digit-code': '6位数代码',
    'all-tickets': '入票总数',
    'an-error-has-occurred': '发生了错误。',
    'available': '可用余额',
    'balance': '余额',
    'bind-2fa': '绑定2FA',
    'block': '封锁',
    'blocks': '封锁',
    'buy': '购买',
    'buy-tickets': '购买 {0} 票',
    'buying-tickets': '购买彩票',
    'buying-tickets-etc': '在主页上，您可以使用可用的资金购买彩票。购买彩票后，您必须等到满足奖池要求之后才能选出中奖者。',
    'confirm': '确认',
    'connect-2fa': '连接2FA',
    'copy-address': '复制地址',
    'copy-account': '复制帐户',
    'copy-code': '复制代码',
    'copy-memo': '复制备忘录',
    'create-new-account': '建立新帐户',
    'current-tickets': '当前票',
    'current-users-entered': '当前加入的玩家',
    'deposit': '存款',
    'depositing-any-other-asset-here-may-result-in-permanent-loss': '在此处存放任何其他资产可能会导致永久损失。',
    'deposit-funds': '存款资金',
    'depositing-funds': '存入资金',
    'depositing-funds-etc': '您必须按照“存款”页面上的说明将资金存入您的钱包。',
    'drawing-begins-after-tickets': '累计 {0} 票后开始抽奖',
    'drawing-begins-after-users-enter': ' {0} 名用户加入后开始抽奖',
    'drawing-begins-in': '开奖倒计时',
    'enter-your-2fa-code-and-press-confirm-to-bind-your-account': '输入您的2FA代码，然后按“确认”以绑定您的帐户。',
    'fair-chance-guarantee': '公平竞争',
    'fair-chance-guarantee-etc': '该游戏的结果是通过区块链智能合约技术自动生成的，无法更改。所有结果均为最终结果，概不退还。每个区块都可以通过区块链浏览器进行验证。',
    'finished': '完成',
    'from': '来源',
    'hello': '你好',
    'hi-your-new-account-is-ready': '嗨 {0},\n 您的新帐户已准备就绪！',
    'history': '历史记录',
    'how-to-play': '游戏规则',
    'link': '连接',
    'login': '登录',
    'login-register-to-play': '登录 / 注册',
    'login-register-to-play-now': '登录 / 注册以马上玩！',
    'logo': '../../../assets/images/CN-luckystrike-min.png',
    'logout': '登出',
    'max-buy': '买入上限',
    'mini-pool-winner': '迷你奖池优胜者',
    'more-tickets': '更多票',
    'my-ticket-ids': '我的彩票编号',
    'my-tickets': '我的彩票',
    'my-winnings': '我的奖金',
    'next-pool-starts-in': '下一个奖池开始于',
    'next-step': '下一步',
    'no-bonus-winnings': '没有特别奖金',
    'no-further-activity': '没有进一步的动态',
    'now-drawing-winners': '正在抽中奖者',
    'once-your-account-is-bound-you-can-not-view-this-code-again': '绑定帐户后，您将无法再次查看此代码。',
    'only-deposit-post-to-this-address': '请仅将POST存入此地址。如在此处存放任何其他资产可能会永久损失。',
    'optional': '可选',
    'password': '密码',
    'payout-history': '奖金历史',
    'payouts': '奖金支出',
    'payouts-etc': '一等头奖 = 彩池的15％（1名）\n 二等奖 = 彩池的25％（由5名获奖者平分）\n 三等奖 = 奖池的10％（由10名获奖者平分）\n特别奖金 = 奖池的35％（由350名获奖者平分',
    'play-now': '即刻开玩',
    'please-backup-this-code-somewhere': '请将此代码备份到某处。',
    'please-confirm-your-withdrawal-address': '请确认您的提款地址',
    'please-login-through-the-app': '请通过应用程序登录',
    'pool-opened': '奖池开了',
    'prize-pool': '奖池',
    'register-new-account': '注册新帐号',
    'remember-your-profile-is-anonymous-etc': '请记住：您的个人资料是匿名的，这意味着如果您忘记密码，我们将无法恢复您的帐户。若启用2FA可获得额外的安全性！',
    'scan-this-code-with-your-2fa-app': '使用2FA应用程序扫描此代码。请将此代码备份到某处。绑定帐户后，您将无法再次查看此代码。',
    'see-all-ticket-entries': '查看所有入项票数',
    'sign-up-for-an-anonymous-acount-and-start-playing-today': '立即注册一个匿名帐户并开始游戏!',
    'submit-withdrawal': '申请提款',
    'success': '成功',
    'target-block-height': '区块数量',
    'ticket': '彩票',
    'ticket-entry-limit-reached': '本期投注已截止',
    'total-tickets': '区块数量',
    'try-again-next-time': '再试一次',
    'username': '用户名',
    'win': '赢得',
    'winners': '优胜者',
    'winning': '中奖',
    'winning-etc': '当您中奖时，您的奖金将自动添加到您的可用余额中。',
    'withdraw': '提款',
    'withdrawing-funds': '提取资金',
    'withdrawing-funds-etc': '您可以通过“提款”页面提款。请按照说明进行操作，并确保验证您的提款地址。',
    'withdraw-process-usually-takes-about-1-hour-or-less': '提款过程通常需要大约1小时或更短。',
    'withdrawal-address': '提款地址',
    'withdrawal-amount': '提款金额',
    'work-in-progress': '工作正在进行中',
    'you-won': '你赢了！',
    'your-account-is-now-bound': '您的帐户现已绑定。'
};


/***/ }),

/***/ "./src/app/constants/placeMap.ts":
/*!***************************************!*\
  !*** ./src/app/constants/placeMap.ts ***!
  \***************************************/
/*! exports provided: PlaceMap, PlaceMapArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceMap", function() { return PlaceMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceMapArr", function() { return PlaceMapArr; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const PlaceMap = {
    0: {
        name: '1st',
        winnerCount: 1,
        rank: 1
    },
    1: {
        name: '2nd',
        winnerCount: 4,
        rank: 2
    },
    2: {
        name: '3rd',
        winnerCount: 20,
        rank: 3
    },
    3: {
        name: '4th',
        winnerCount: 100,
        rank: 4
    },
    4: {
        name: '5th',
        winnerCount: 200,
        rank: 5
    },
    5: {
        name: '6th',
        winnerCount: 10000,
        rank: 6
    }
};
const PlaceMapArr = [
    {
        name: '1st',
        winnerCount: 1,
        rank: 1
    },
    {
        name: '2nd',
        winnerCount: 4,
        rank: 2
    },
    {
        name: '3rd',
        winnerCount: 20,
        rank: 3
    },
    {
        name: '4th',
        winnerCount: 100,
        rank: 4
    },
    {
        name: '5th',
        winnerCount: 200,
        rank: 5
    },
    {
        name: '6th',
        winnerCount: 10000,
        rank: 6
    }
];


/***/ }),

/***/ "./src/app/constants/us.ts":
/*!*********************************!*\
  !*** ./src/app/constants/us.ts ***!
  \*********************************/
/*! exports provided: EnglishTranslations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnglishTranslations", function() { return EnglishTranslations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const EnglishTranslations = {
    '2fa-verification': '2FA Verification',
    '6-digit-code': '6-Digit Code',
    'all-tickets': 'All Tickets',
    'an-error-has-occurred': 'An error has occurred.',
    'available': 'Available',
    'balance': 'Balance',
    'bind-2fa': 'Bind 2FA',
    'block': 'Block',
    'blocks': 'Blocks',
    'buy': 'Buy',
    'buy-tickets': 'Buy {0} tickets',
    'buying-tickets': 'Buying Tickets',
    'buying-tickets-etc': 'On the main page, you can buy tickets using your available funds. Once a ticket is purchased, you must wait until the requirements for the prize pool are fulfilled before the winners will be drawn',
    'confirm': 'Confirm',
    'connect-2fa': 'Connect 2FA',
    'copy-address': 'Copy Address',
    'copy-account': 'Copy Account',
    'copy-code': 'Copy Code',
    'copy-memo': 'Copy Memo',
    'create-new-account': 'Create New Account',
    'current-tickets': 'Current Tickets',
    'deposit': 'Deposit',
    'depositing-any-other-asset-here-may-result-in-permanent-loss': 'Depositing any other assets here may result in permanent loss',
    'deposit-funds': 'Deposit Funds',
    'depositing-funds': 'Depositing Funds',
    'depositing-funds-etc': 'You must deposit funds into your wallet by following the instructions on the "Deposit" page',
    'drawing-begins-after-tickets': 'Drawing Begins \n After {0} Tickets',
    'drawing-begins-in': 'Drawing Begins In',
    'enter-your-2fa-code-and-press-confirm-to-bind-your-account': 'Enter you 2FA code and press \"confirm\" to bind your account',
    'fair-chance-guarantee': 'Fair Chance Guarantee',
    'fair-chance-guarantee-etc': 'The results of this game are generated automatically through blockchain smart-contract technology and cannot be changed. All results are final and nonrefundable. Each block can be verified through the blockchain explorer.',
    'finished': 'Finished',
    'from': 'From',
    'hello': 'Hello',
    'hi-your-new-account-is-ready': 'Hi {0},\nYour new account is ready',
    'history': 'History',
    'how-to-play': 'How to Play',
    'link': 'Link',
    'login': 'Login',
    'login-register-to-play': 'Login / Register to Play',
    'login-register-to-play-now': 'Login / Register to Play Now',
    'logo': '../../../assets/images/EN-luckystrike-min.png',
    'logout': 'Logout',
    'max-buy': 'Max Buy',
    'mini-pool-winner': 'Mini Pool Winner',
    'more-tickets': 'More Tickets',
    'my-ticket-ids': 'My Ticket IDs',
    'my-tickets': 'My Tickets',
    'my-winnings': 'My Winnings',
    'next-pool-starts-in': 'Next Pool Starts In',
    'next-step': 'Next Step',
    'no-bonus-winnings': 'No Bonus Winnings',
    'no-further-activity': 'No Further Activity',
    'now-drawing-winners': 'Now Drawing Winners',
    'once-your-account-is-bound-you-can-not-view-this-code-again': 'Once your account is bound, you can not view this code again',
    'only-deposit-post-to-this-address': 'Only deposit POST to this address',
    'optional': 'Optional',
    'password': 'Password',
    'payout-history': 'Payout History',
    'payouts': 'Payouts',
    'payouts-etc': '1st Prize = 15% of the pool (1 winner)\n2nd Prize = 25% of the pool (split between 5 winners)\n3rd Prize = 10% of the pool (split between 10 winners)\nBONUS Prize = 35% of the pool (split between 350 winners) ',
    'pool-opened': 'Pool opened',
    'play-now': 'Play Now',
    'please-backup-this-code-somewhere': 'Please backup this code somewhere',
    'please-confirm-your-withdrawal-address': 'Please confirm your withdrawal address',
    'please-login-through-the-app': 'Please Login Through the App',
    'prize-pool': 'Prize Pool',
    'register-new-account': 'Register New Account',
    'remember-your-profile-is-anonymous-etc': 'Remember: your profile is anonymous, which means we can\'t recover your account if you forget your password. Enable 2FA for extra security',
    'scan-this-code-with-your-2fa-app': 'Scan this code with your 2FA app',
    'see-all-ticket-entries': 'See all ticket entries',
    'sign-up-for-an-anonymous-acount-and-start-playing-today': 'Sign up for an anonymous account and start playing today',
    'submit-withdrawal': 'Submit Withdrawal',
    'success': 'Success',
    'target-block-height': 'Target Block Height',
    'ticket': 'Ticket',
    'ticket-entry-limit-reached': 'Ticket Entry Limit Reached',
    'total-tickets': 'Total Tickets',
    'try-again-next-time': 'Try again next time',
    'username': 'Username',
    'win': 'Win',
    'winners': 'Winners',
    'winning': 'Winning',
    'winning-etc': 'When you win, your winnings will be automatically added to your available balance',
    'withdraw': 'Withdraw',
    'withdrawing-funds': 'Withdrawing Funds',
    'withdrawing-funds-etc': 'You can withdraw funds through the "Withdraw" page. Follow the instructions and make sure to verify your vithdrawal address',
    'withdraw-process-usually-takes-about-1-hour-or-less': 'Withdraw process usually takes about 1 hour or less',
    'withdrawal-address': 'Withdrawal Address',
    'withdrawal-amount': 'Withdrawal Amount',
    'work-in-progress': 'Work in Progress',
    'you-won': 'YOU WON!',
    'your-account-is-now-bound': 'Your account is now bound'
};


/***/ }),

/***/ "./src/app/home/drawing-info/drawing-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/drawing-info/drawing-info.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drawing-info {\n  text-align: center;\n  color: white;\n  letter-spacing: 1px;\n}\n.drawing-info .heading {\n  white-space: pre-wrap;\n  font-weight: 400;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  line-height: 28px;\n  height: 70px;\n  font-size: 27px;\n  margin-bottom: 22px;\n}\n.drawing-info .heading.small {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 6px;\n  margin-bottom: 0;\n}\n.drawing-info .subheading {\n  margin-top: 40px;\n  font-size: 18px;\n}\n.drawing-info .subtitle {\n  font-size: 18px;\n}\n.drawing-info .value {\n  font-size: 50px;\n  line-height: 46px;\n}\n.drawing-info .value .small {\n  font-weight: 300;\n  font-size: 16px;\n  margin-top: 16px;\n}\n.drawing-info .winnings-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n}\n.drawing-info .winnings-container .winning-panel {\n  margin-top: 8px;\n  padding: 0 16px;\n  transform: translateX(0);\n  transition: transform 1s;\n}\n.drawing-info .winnings-container .winning-panel.isHidden {\n  transform: translateX(100vw);\n}\n.drawing-info .winnings-container .hideText {\n  visibility: hidden;\n}\n.drawing-info .my-winnings {\n  padding: 12px 8px;\n  background-color: #2a2d32;\n  display: flex;\n  justify-content: space-between;\n  height: 65px;\n  border-radius: 16px;\n}\n.drawing-info .my-winnings .winning-icon {\n  height: 100%;\n  width: 60px;\n}\n.drawing-info .my-winnings .winning-icon img {\n  height: 100%;\n}\n.drawing-info .my-winnings .label {\n  color: white;\n  font-size: 14px;\n}\n.drawing-info .my-winnings .amount {\n  color: #ffcc00;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kcmF3aW5nLWluZm8vRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxcaG9tZVxcZHJhd2luZy1pbmZvXFxkcmF3aW5nLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvZHJhd2luZy1pbmZvL2RyYXdpbmctaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ1o7QURHSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FESUk7RUFDSSxlQUFBO0FDRlI7QURLSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0hSO0FES1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0haO0FET0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTFI7QURPUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtBQ0xaO0FET1k7RUFDSSw0QkFBQTtBQ0xoQjtBRFNRO0VBQ0Usa0JBQUE7QUNQVjtBRFlJO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1ZSO0FEWVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1ZaO0FEV1k7RUFDSSxZQUFBO0FDVGhCO0FEYVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ1haO0FEYVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1haIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9kcmF3aW5nLWluZm8vZHJhd2luZy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdpbmctaW5mbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcblxyXG4gICAgICAgICYuc21hbGwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3ViaGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZhbHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XHJcblxyXG4gICAgICAgIC5zbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndpbm5pbmdzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC53aW5uaW5nLXBhbmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG5cclxuICAgICAgICAgICAgJi5pc0hpZGRlbiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlkZVRleHQge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLm15LXdpbm5pbmdzIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDMyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cclxuICAgICAgICAud2lubmluZy1pY29uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbW91bnQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmY2MwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuZHJhd2luZy1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uZHJhd2luZy1pbmZvIC5oZWFkaW5nIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250LXNpemU6IDI3cHg7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG4uZHJhd2luZy1pbmZvIC5oZWFkaW5nLnNtYWxsIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5kcmF3aW5nLWluZm8gLnN1YmhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZHJhd2luZy1pbmZvIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5kcmF3aW5nLWluZm8gLnZhbHVlIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNDZweDtcbn1cbi5kcmF3aW5nLWluZm8gLnZhbHVlIC5zbWFsbCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5kcmF3aW5nLWluZm8gLndpbm5pbmdzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZHJhd2luZy1pbmZvIC53aW5uaW5ncy1jb250YWluZXIgLndpbm5pbmctcGFuZWwge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG4uZHJhd2luZy1pbmZvIC53aW5uaW5ncy1jb250YWluZXIgLndpbm5pbmctcGFuZWwuaXNIaWRkZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xufVxuLmRyYXdpbmctaW5mbyAud2lubmluZ3MtY29udGFpbmVyIC5oaWRlVGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5kcmF3aW5nLWluZm8gLm15LXdpbm5pbmdzIHtcbiAgcGFkZGluZzogMTJweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA2NXB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLmRyYXdpbmctaW5mbyAubXktd2lubmluZ3MgLndpbm5pbmctaWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDYwcHg7XG59XG4uZHJhd2luZy1pbmZvIC5teS13aW5uaW5ncyAud2lubmluZy1pY29uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kcmF3aW5nLWluZm8gLm15LXdpbm5pbmdzIC5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRyYXdpbmctaW5mbyAubXktd2lubmluZ3MgLmFtb3VudCB7XG4gIGNvbG9yOiAjZmZjYzAwO1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/drawing-info/drawing-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/drawing-info/drawing-info.component.ts ***!
  \*************************************************************/
/*! exports provided: DrawingInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingInfoComponent", function() { return DrawingInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lottery.service */ "./src/app/services/lottery.service.ts");
/* harmony import */ var src_app_services_block_chain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/block-chain.service */ "./src/app/services/block-chain.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





let DrawingInfoComponent = class DrawingInfoComponent {
    constructor(authService, blockchainService, lotteryService) {
        this.authService = authService;
        this.blockchainService = blockchainService;
        this.lotteryService = lotteryService;
        this.myWinningsIncrement = 0;
        this.incrementInterval = 500;
    }
    ngOnInit() {
        this.monitorWinnings();
    }
    monitorWinnings() {
        this.checkWinningInterval = setTimeout(() => {
            if (this.lotteryService.currentLotteryInfo.lotteryStatus !== '2') {
                this.incrementInterval = 500;
                this.myWinningsIncrement = 0;
            }
            else {
                this.incrementInterval = 20;
                const winners = this.lotteryService.currentLotteryInfo.winners;
                let myWinnings = winners.minipool.winningAmount;
                winners.main.forEach(item => {
                    if (item && item.myWinnings) {
                        myWinnings += item.myWinnings;
                    }
                });
                if (!myWinnings || this.myWinningsIncrement >= myWinnings) {
                    this.myWinningsIncrement = this.myWinningsIncrement;
                    this.incrementInterval = 500;
                }
                else if (this.myWinningsIncrement < myWinnings) {
                    this.myWinningsIncrement += 1;
                }
            }
            this.monitorWinnings();
        }, this.incrementInterval);
    }
    getRemainingBlocks() {
        if (this.blockchainService.rollingLog && this.blockchainService.rollingLog.length && this.lotteryService.currentLotteryInfo.targetBlockHeight) {
            const count = this.lotteryService.currentLotteryInfo.targetBlockHeight - parseInt(this.blockchainService.rollingLog[0].number, 16);
            if (count < 0) {
                return 0;
            }
            return count;
        }
        else
            return '....';
    }
    finalizeWinning() {
        const winners = this.lotteryService.currentLotteryInfo.winners;
        this.myWinningsIncrement = winners.minipool.winningAmount;
        winners.main.forEach(item => {
            if (item && item.myWinnings) {
                this.myWinningsIncrement += item.myWinnings;
            }
        });
    }
    ngOnDestroy() {
        if (this.checkWinningInterval) {
            clearTimeout(this.checkWinningInterval);
        }
    }
};
DrawingInfoComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_block_chain_service__WEBPACK_IMPORTED_MODULE_3__["BlockChainService"] },
    { type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"] }
];
DrawingInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drawing-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drawing-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/drawing-info/drawing-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drawing-info.component.scss */ "./src/app/home/drawing-info/drawing-info.component.scss")).default]
    })
], DrawingInfoComponent);



/***/ }),

/***/ "./src/app/home/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block-info {\n  position: absolute;\n  top: -17px;\n  right: 12px;\n  color: #a3acb5;\n  font-size: 12px;\n  background-color: transparent;\n}\n\n.footer {\n  position: relative;\n}\n\n.footer .panels {\n  display: flex;\n  text-align: center;\n  background-color: #1c2023;\n}\n\n.footer .panels .panel {\n  padding: 8px 4px;\n  flex-basis: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (min-height: 700px) {\n  .footer .panels .panel {\n    padding-bottom: 4vh;\n  }\n}\n\n.footer .panels .left-panel {\n  border-right: 1px solid #2b2f32;\n  font-weight: 500;\n}\n\n.footer .panels .left-panel .title {\n  color: #fccd02;\n  font-size: 18px;\n  margin-bottom: 3px;\n}\n\n.footer .panels .left-panel .text-content {\n  color: white;\n}\n\n.footer .panels .left-panel .bonus-section {\n  height: 50%;\n  padding-top: 3px;\n}\n\n.footer .panels .left-panel .bonus-section .bonus-container {\n  text-align: center;\n}\n\n.footer .panels .left-panel .bonus-section .minipool-winner {\n  display: inline-block;\n  font-weight: bold;\n  background-color: #fccd02;\n  border-radius: 14px;\n  padding: 2px 12px;\n}\n\n.footer .panels .left-panel .bonus-section .amount {\n  font-weight: 500;\n  display: inline-block;\n  background-color: #2a2d32;\n  color: white;\n  font-size: 12px;\n  margin-top: 4px;\n  border-radius: 16px;\n  padding: 2px 6px;\n}\n\n.footer .panels .left-panel .no-bonus {\n  color: #67666b;\n  line-height: 18px;\n  font-size: 16px;\n}\n\n.footer .panels .left-panel .minipool-question {\n  height: 60px;\n  border-radius: 14px;\n  margin-top: 4px;\n  background-color: #109df5;\n  color: white;\n  font-weight: bold;\n  font-size: 34px;\n}\n\n.footer .panels .left-panel .minipool-question .chest {\n  height: 54px;\n  margin-top: 3px;\n  display: inline-block;\n  -webkit-animation: rotation 1.5s infinite linear;\n          animation: rotation 1.5s infinite linear;\n}\n\n@-webkit-keyframes rotation {\n  25% {\n    transform: rotate(15deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(-15deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes rotation {\n  25% {\n    transform: rotate(15deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(-15deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.footer .panels .right-panel {\n  border-left: 1px solid #2b2f32;\n  color: #636267;\n  font-weight: 500;\n}\n\n.footer .panels .right-panel .my-tickets {\n  color: white;\n  font-size: 20px;\n}\n\n.footer .panels .right-panel .total-tickets {\n  color: white;\n  line-height: 34px;\n  font-size: 28px;\n}\n\n.footer .panels .right-panel .total-tickets .icon-img.large {\n  margin-left: 0px;\n}\n\n.footer .panels .right-panel .label {\n  font-size: 14px;\n  line-height: 14px;\n}\n\n.footer .panels .right-panel .label.small {\n  font-size: 12px;\n  height: 13px;\n}\n\n.footer .panels .right-panel .icon-img {\n  margin-left: 4px;\n  height: 13px;\n}\n\n.footer .panels .right-panel .icon-img.large {\n  height: 22px;\n}\n\n.footer .panels .right-panel .icon-redirect {\n  color: #1499e3;\n  margin-left: 4px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb290ZXIvRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxcaG9tZVxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREFJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNFUjs7QURBUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRVo7O0FEQVk7RUFQSjtJQVFRLG1CQUFBO0VDR2Q7QUFDRjs7QURBUTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7QUNFWjs7QUREWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHaEI7O0FEQVk7RUFDSSxZQUFBO0FDRWhCOztBRENZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ2hCOztBRENnQjtFQUNJLGtCQUFBO0FDQ3BCOztBREVnQjtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBcEI7O0FER2dCO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RwQjs7QURLWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNIaEI7O0FETVk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSmhCOztBRE1nQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0FDSnBCOztBRE9vQjtFQUNJO0lBQ0ksd0JBQUE7RUNMMUI7RURPc0I7SUFDSSx1QkFBQTtFQ0wxQjtFRE9zQjtJQUNJLHlCQUFBO0VDTDFCO0VET3NCO0lBQ0ksdUJBQUE7RUNMMUI7QUFDRjs7QURQb0I7RUFDSTtJQUNJLHdCQUFBO0VDTDFCO0VET3NCO0lBQ0ksdUJBQUE7RUNMMUI7RURPc0I7SUFDSSx5QkFBQTtFQ0wxQjtFRE9zQjtJQUNJLHVCQUFBO0VDTDFCO0FBQ0Y7O0FEWVE7RUFDSSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1ZaOztBRFlZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNWaEI7O0FEWVk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDVmhCOztBRFdnQjtFQUNFLGdCQUFBO0FDVGxCOztBRGFZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDWGhCOztBRFlnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDVnBCOztBRGFZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDWGhCOztBRGFnQjtFQUNJLFlBQUE7QUNYcEI7O0FEZVk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDYmhCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ibG9jay1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTE3cHg7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIGNvbG9yOiAjYTNhY2I1O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAucGFuZWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMDIzO1xyXG5cclxuICAgICAgICAucGFuZWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGVmdC1wYW5lbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyYjJmMzI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZjY2QwMjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib251cy1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuYm9udXMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1pbmlwb29sLXdpbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2NkMDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYW1vdW50IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDMyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5vLWJvbnVzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjc2NjZiO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5taW5pcG9vbC1xdWVzdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOWRmNTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5jaGVzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxLjVzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMjUlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgNzUlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1wYW5lbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzJiMmYzMjtcclxuICAgICAgICAgICAgY29sb3I6ICM2MzYyNjc7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAubXktdGlja2V0cyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRvdGFsLXRpY2tldHMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAuaWNvbi1pbWcubGFyZ2Uge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29uLWltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICYubGFyZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmljb24tcmVkaXJlY3Qge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxNDk5ZTM7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5ibG9jay1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xN3B4O1xuICByaWdodDogMTJweDtcbiAgY29sb3I6ICNhM2FjYjU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vdGVyIC5wYW5lbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzIwMjM7XG59XG4uZm9vdGVyIC5wYW5lbHMgLnBhbmVsIHtcbiAgcGFkZGluZzogOHB4IDRweDtcbiAgZmxleC1iYXNpczogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3MDBweCkge1xuICAuZm9vdGVyIC5wYW5lbHMgLnBhbmVsIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHZoO1xuICB9XG59XG4uZm9vdGVyIC5wYW5lbHMgLmxlZnQtcGFuZWwge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMmIyZjMyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvb3RlciAucGFuZWxzIC5sZWZ0LXBhbmVsIC50aXRsZSB7XG4gIGNvbG9yOiAjZmNjZDAyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5mb290ZXIgLnBhbmVscyAubGVmdC1wYW5lbCAudGV4dC1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvb3RlciAucGFuZWxzIC5sZWZ0LXBhbmVsIC5ib251cy1zZWN0aW9uIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLmxlZnQtcGFuZWwgLmJvbnVzLXNlY3Rpb24gLmJvbnVzLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXIgLnBhbmVscyAubGVmdC1wYW5lbCAuYm9udXMtc2VjdGlvbiAubWluaXBvb2wtd2lubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjY2QwMjtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogMnB4IDEycHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLmxlZnQtcGFuZWwgLmJvbnVzLXNlY3Rpb24gLmFtb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMnB4IDZweDtcbn1cbi5mb290ZXIgLnBhbmVscyAubGVmdC1wYW5lbCAubm8tYm9udXMge1xuICBjb2xvcjogIzY3NjY2YjtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5mb290ZXIgLnBhbmVscyAubGVmdC1wYW5lbCAubWluaXBvb2wtcXVlc3Rpb24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOWRmNTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuLmZvb3RlciAucGFuZWxzIC5sZWZ0LXBhbmVsIC5taW5pcG9vbC1xdWVzdGlvbiAuY2hlc3Qge1xuICBoZWlnaHQ6IDU0cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbmltYXRpb246IHJvdGF0aW9uIDEuNXMgaW5maW5pdGUgbGluZWFyO1xufVxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG4uZm9vdGVyIC5wYW5lbHMgLnJpZ2h0LXBhbmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMmIyZjMyO1xuICBjb2xvcjogIzYzNjI2NztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb290ZXIgLnBhbmVscyAucmlnaHQtcGFuZWwgLm15LXRpY2tldHMge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5mb290ZXIgLnBhbmVscyAucmlnaHQtcGFuZWwgLnRvdGFsLXRpY2tldHMge1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLnJpZ2h0LXBhbmVsIC50b3RhbC10aWNrZXRzIC5pY29uLWltZy5sYXJnZSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLnJpZ2h0LXBhbmVsIC5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLnJpZ2h0LXBhbmVsIC5sYWJlbC5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuLmZvb3RlciAucGFuZWxzIC5yaWdodC1wYW5lbCAuaWNvbi1pbWcge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBoZWlnaHQ6IDEzcHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLnJpZ2h0LXBhbmVsIC5pY29uLWltZy5sYXJnZSB7XG4gIGhlaWdodDogMjJweDtcbn1cbi5mb290ZXIgLnBhbmVscyAucmlnaHQtcGFuZWwgLmljb24tcmVkaXJlY3Qge1xuICBjb2xvcjogIzE0OTllMztcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/lottery.service */ "./src/app/services/lottery.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let FooterComponent = class FooterComponent {
    constructor(authService, lotteryService) {
        this.authService = authService;
        this.lotteryService = lotteryService;
    }
    ngOnInit() {
    }
    ticketCount(ticketArr) {
        let count = 0;
        if (ticketArr && ticketArr.length) {
            ticketArr.forEach(item => { count += item.count; });
        }
        return count || 0;
    }
    authorize() {
        this.authService.authorize();
    }
};
FooterComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/home/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.home .home-content {\n  font-weight: 500;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: 0;\n  padding-bottom: 16px;\n  position: relative;\n  overflow-y: auto;\n}\n.home .buy-ticket-input {\n  margin-top: 20px;\n  padding: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcVXNlcnNcXFN5bHZlc3RlclxcRGVza3RvcFxcYmxvY2tjaGFpbi1sb3R0ZXJ5L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ1I7QURFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmhvbWUtY29udGVudHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnV5LXRpY2tldC1pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbn0iLCIuaG9tZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ob21lIC5ob21lLWNvbnRlbnQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBtaW4taGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmhvbWUgLmJ1eS10aWNrZXQtaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lottery.service */ "./src/app/services/lottery.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/account.service */ "./src/app/services/account.service.ts");




let HomeComponent = class HomeComponent {
    constructor(accountService, lotteryService) {
        this.accountService = accountService;
        this.lotteryService = lotteryService;
    }
    ngOnInit() {
        this.accountService.setAccountSettings(this.accountService.openOnReturn);
        this.accountService.openOnReturn = false;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: _services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/app-common.module */ "./src/app/common/app-common.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _drawing_info_drawing_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawing-info/drawing-info.component */ "./src/app/home/drawing-info/drawing-info.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/home/footer/footer.component.ts");




// Components



let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _drawing_info_drawing_info_component__WEBPACK_IMPORTED_MODULE_5__["DrawingInfoComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
        ],
        imports: [
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/how-to-play/how-to-play.component.scss":
/*!********************************************************!*\
  !*** ./src/app/how-to-play/how-to-play.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".how-to-play {\n  color: white;\n  padding: 16px;\n  font-size: 14px;\n}\n.how-to-play .title {\n  font-weight: 500;\n}\n.how-to-play .text {\n  font-weight: 200;\n  margin-bottom: 20px;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93LXRvLXBsYXkvRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxcaG93LXRvLXBsYXlcXGhvdy10by1wbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob3ctdG8tcGxheS9ob3ctdG8tcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2hvdy10by1wbGF5L2hvdy10by1wbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdy10by1wbGF5IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICB9XHJcbn1cclxuIiwiLmhvdy10by1wbGF5IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaG93LXRvLXBsYXkgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ob3ctdG8tcGxheSAudGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/how-to-play/how-to-play.component.ts":
/*!******************************************************!*\
  !*** ./src/app/how-to-play/how-to-play.component.ts ***!
  \******************************************************/
/*! exports provided: HowToPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToPlayComponent", function() { return HowToPlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HowToPlayComponent = class HowToPlayComponent {
    constructor() { }
    ngOnInit() {
    }
};
HowToPlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-how-to-play',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./how-to-play.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-play/how-to-play.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./how-to-play.component.scss */ "./src/app/how-to-play/how-to-play.component.scss")).default]
    })
], HowToPlayComponent);



/***/ }),

/***/ "./src/app/how-to-play/how-to-play.module.ts":
/*!***************************************************!*\
  !*** ./src/app/how-to-play/how-to-play.module.ts ***!
  \***************************************************/
/*! exports provided: HowToPlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToPlayModule", function() { return HowToPlayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _how_to_play_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how-to-play.component */ "./src/app/how-to-play/how-to-play.component.ts");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/app-common.module */ "./src/app/common/app-common.module.ts");





let HowToPlayModule = class HowToPlayModule {
};
HowToPlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_how_to_play_component__WEBPACK_IMPORTED_MODULE_3__["HowToPlayComponent"]],
        imports: [
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], HowToPlayModule);



/***/ }),

/***/ "./src/app/models/lottery/available-prize-pool.ts":
/*!********************************************************!*\
  !*** ./src/app/models/lottery/available-prize-pool.ts ***!
  \********************************************************/
/*! exports provided: PrizePool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizePool", function() { return PrizePool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PrizePool {
    constructor(prize, gameId, lotteryStatus = "0", currentEntries = 0, myEntries, targetBlockHeight) {
        this.openedDate = new Date();
        this.availablePrizePool = prize;
        this.lotteryStatus = lotteryStatus;
        this.countDown = 60;
        this.gameId = gameId;
        this.myEntries = myEntries;
        this.targetBlockHeight = targetBlockHeight;
        this.allEntries = [];
        this.currentEntries = currentEntries;
        this.winners = {
            main: [],
            //   first: new WinnerInfo(),
            //   second: new WinnerInfo(),
            //   third: new WinnerInfo(),
            minipool: {
                isDrawing: true,
                winningAmount: 0,
            },
        };
    }
}


/***/ }),

/***/ "./src/app/models/lottery/lottery-obj.ts":
/*!***********************************************!*\
  !*** ./src/app/models/lottery/lottery-obj.ts ***!
  \***********************************************/
/*! exports provided: LotteryObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryObj", function() { return LotteryObj; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LotteryObj {
}


/***/ }),

/***/ "./src/app/models/lottery/my-entries.ts":
/*!**********************************************!*\
  !*** ./src/app/models/lottery/my-entries.ts ***!
  \**********************************************/
/*! exports provided: MyEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEntries", function() { return MyEntries; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MyEntries {
}


/***/ }),

/***/ "./src/app/models/lottery/ticket.ts":
/*!******************************************!*\
  !*** ./src/app/models/lottery/ticket.ts ***!
  \******************************************/
/*! exports provided: Ticket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Ticket {
    constructor(ticket, userName, amount, isMine) {
        this.ticketNumber = ticket;
        this.userName = userName;
        this.isMine = isMine;
        this.amount = amount;
    }
}


/***/ }),

/***/ "./src/app/models/lottery/winner-info.ts":
/*!***********************************************!*\
  !*** ./src/app/models/lottery/winner-info.ts ***!
  \***********************************************/
/*! exports provided: WinnerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerInfo", function() { return WinnerInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class WinnerInfo {
    constructor(preDisplayWinnings = 0) {
        this.tickets = [];
        this.preDisplayWinnings = preDisplayWinnings;
        this.myWinnings = 0;
        this.isDrawing = true;
    }
}


/***/ }),

/***/ "./src/app/my-entries/my-entries.component.scss":
/*!******************************************************!*\
  !*** ./src/app/my-entries/my-entries.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-entries {\n  font-weight: 500;\n}\n.my-entries .info {\n  color: #68676c;\n  padding: 12px 0 6px;\n  text-align: center;\n}\n.my-entries .header {\n  background-color: #2a2d32;\n  position: relative;\n  width: 100%;\n  height: 45px;\n  padding-right: 16px;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.my-entries .header .text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.my-entries .data-container {\n  max-height: 40vh;\n  overflow-y: auto;\n}\n.my-entries .data {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid #2a2d32;\n  color: white;\n  padding: 4px 12px;\n}\n.my-entries .data .username {\n  color: #22a0ea;\n}\n.my-entries .data .date {\n  color: #68676c;\n}\n.my-entries .no-further-activity {\n  margin-top: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktZW50cmllcy9FOlxcVXNlcnNcXFN5bHZlc3RlclxcRGVza3RvcFxcYmxvY2tjaGFpbi1sb3R0ZXJ5L3NyY1xcYXBwXFxteS1lbnRyaWVzXFxteS1lbnRyaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9teS1lbnRyaWVzL215LWVudHJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQ0k7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURFUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0FaO0FESUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRlI7QURLSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIUjtBREtRO0VBQ0ksY0FBQTtBQ0haO0FES1E7RUFDSSxjQUFBO0FDSFo7QURPSTtFQUNJLGVBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL215LWVudHJpZXMvbXktZW50cmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1lbnRyaWVzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgY29sb3I6ICM2ODY3NmM7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG5cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDB2aDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXRhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhMmQzMjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcblxyXG4gICAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjJhMGVhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjg2NzZjO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm8tZnVydGhlci1hY3Rpdml0eSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgfVxyXG59IiwiLm15LWVudHJpZXMge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm15LWVudHJpZXMgLmluZm8ge1xuICBjb2xvcjogIzY4Njc2YztcbiAgcGFkZGluZzogMTJweCAwIDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm15LWVudHJpZXMgLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLm15LWVudHJpZXMgLmhlYWRlciAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubXktZW50cmllcyAuZGF0YS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA0MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm15LWVudHJpZXMgLmRhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhMmQzMjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbn1cbi5teS1lbnRyaWVzIC5kYXRhIC51c2VybmFtZSB7XG4gIGNvbG9yOiAjMjJhMGVhO1xufVxuLm15LWVudHJpZXMgLmRhdGEgLmRhdGUge1xuICBjb2xvcjogIzY4Njc2Yztcbn1cbi5teS1lbnRyaWVzIC5uby1mdXJ0aGVyLWFjdGl2aXR5IHtcbiAgbWFyZ2luLXRvcDogNXZoO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/my-entries/my-entries.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-entries/my-entries.component.ts ***!
  \****************************************************/
/*! exports provided: MyEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEntriesComponent", function() { return MyEntriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lottery.service */ "./src/app/services/lottery.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let MyEntriesComponent = class MyEntriesComponent {
    constructor(authService, lotteryService) {
        this.authService = authService;
        this.lotteryService = lotteryService;
        this.sortMyEntries = false;
        this.sortAllEntries = false;
    }
    ngOnInit() {
    }
    toggleMyEntries() {
        this.sortMyEntries = !this.sortMyEntries;
    }
    toggleAllEntries() {
        this.sortAllEntries = !this.sortAllEntries;
    }
    sortedMyEntries() {
        return this.lotteryService.currentLotteryInfo.myEntries
            .sort((a, b) => {
            return this.sortMyEntries ? a.start - b.start : b.start - a.start;
        });
    }
    sortedAllEntries() {
        return this.lotteryService.currentLotteryInfo.allEntries
            .sort((a, b) => {
            return this.sortAllEntries ? a.start - b.start : b.start - a.start;
        });
    }
};
MyEntriesComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"] }
];
MyEntriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-entries',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-entries.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-entries/my-entries.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-entries.component.scss */ "./src/app/my-entries/my-entries.component.scss")).default]
    })
], MyEntriesComponent);



/***/ }),

/***/ "./src/app/my-entries/my-entries.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-entries/my-entries.module.ts ***!
  \*************************************************/
/*! exports provided: MyEntriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEntriesModule", function() { return MyEntriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/app-common.module */ "./src/app/common/app-common.module.ts");
/* harmony import */ var _my_entries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-entries.component */ "./src/app/my-entries/my-entries.component.ts");




// Components

let MyEntriesModule = class MyEntriesModule {
};
MyEntriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _my_entries_component__WEBPACK_IMPORTED_MODULE_4__["MyEntriesComponent"]
        ],
        imports: [
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], MyEntriesModule);



/***/ }),

/***/ "./src/app/payout/payout-history-item/payout-history-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/payout/payout-history-item/payout-history-item.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".payout-history-item {\n  padding: 12px 0;\n  border-bottom: 1px solid #2c3033;\n  font-weight: 500;\n}\n.payout-history-item .place-icon {\n  height: 9px;\n  width: 9px;\n  border-radius: 50%;\n  margin-right: 6px;\n  margin-bottom: 2px;\n}\n.payout-history-item .place-icon.first {\n  background-color: #fbd102;\n}\n.payout-history-item .place-icon.second {\n  background-color: #08f69a;\n}\n.payout-history-item .place-icon.third {\n  background-color: #7d0ef0;\n}\n.payout-history-item .item-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.payout-history-item .info-row {\n  color: white;\n  margin-bottom: 4px;\n}\n.payout-history-item .info-row .amount {\n  display: flex;\n  align-items: center;\n}\n.payout-history-item .info-two-row {\n  color: #636267;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5b3V0L3BheW91dC1oaXN0b3J5LWl0ZW0vRTpcXFVzZXJzXFxTeWx2ZXN0ZXJcXERlc2t0b3BcXGJsb2NrY2hhaW4tbG90dGVyeS9zcmNcXGFwcFxccGF5b3V0XFxwYXlvdXQtaGlzdG9yeS1pdGVtXFxwYXlvdXQtaGlzdG9yeS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXlvdXQvcGF5b3V0LWhpc3RvcnktaXRlbS9wYXlvdXQtaGlzdG9yeS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0kseUJBQUE7QUNHWjtBRERRO0VBQ0kseUJBQUE7QUNHWjtBRERRO0VBQ0kseUJBQUE7QUNHWjtBRENJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQVI7QURFUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0FaO0FESUk7RUFDSSxjQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYXlvdXQvcGF5b3V0LWhpc3RvcnktaXRlbS9wYXlvdXQtaGlzdG9yeS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW91dC1oaXN0b3J5LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYzMwMzM7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLnBsYWNlLWljb24ge1xyXG4gICAgICAgIGhlaWdodDogOXB4O1xyXG4gICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICAmLmZpcnN0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZDEwMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zZWNvbmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhmNjlhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudGhpcmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QwZWYwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1yb3cge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gICAgICAgIC5hbW91bnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5mby10d28tcm93IHtcclxuICAgICAgICBjb2xvcjogIzYzNjI2NztcclxuICAgIH1cclxufSIsIi5wYXlvdXQtaGlzdG9yeS1pdGVtIHtcbiAgcGFkZGluZzogMTJweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjMzAzMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wYXlvdXQtaGlzdG9yeS1pdGVtIC5wbGFjZS1pY29uIHtcbiAgaGVpZ2h0OiA5cHg7XG4gIHdpZHRoOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5wYXlvdXQtaGlzdG9yeS1pdGVtIC5wbGFjZS1pY29uLmZpcnN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZDEwMjtcbn1cbi5wYXlvdXQtaGlzdG9yeS1pdGVtIC5wbGFjZS1pY29uLnNlY29uZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGY2OWE7XG59XG4ucGF5b3V0LWhpc3RvcnktaXRlbSAucGxhY2UtaWNvbi50aGlyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDBlZjA7XG59XG4ucGF5b3V0LWhpc3RvcnktaXRlbSAuaXRlbS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGF5b3V0LWhpc3RvcnktaXRlbSAuaW5mby1yb3cge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5wYXlvdXQtaGlzdG9yeS1pdGVtIC5pbmZvLXJvdyAuYW1vdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXlvdXQtaGlzdG9yeS1pdGVtIC5pbmZvLXR3by1yb3cge1xuICBjb2xvcjogIzYzNjI2Nztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/payout/payout-history-item/payout-history-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/payout/payout-history-item/payout-history-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PayoutHistoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutHistoryItemComponent", function() { return PayoutHistoryItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PayoutHistoryItemComponent = class PayoutHistoryItemComponent {
    constructor() {
        this.place = '';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PayoutHistoryItemComponent.prototype, "payoutItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PayoutHistoryItemComponent.prototype, "place", void 0);
PayoutHistoryItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payout-history-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payout-history-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout-history-item/payout-history-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payout-history-item.component.scss */ "./src/app/payout/payout-history-item/payout-history-item.component.scss")).default]
    })
], PayoutHistoryItemComponent);



/***/ }),

/***/ "./src/app/payout/payout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/payout/payout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".payout {\n  padding: 0 24px;\n  height: calc(100% - 51px);\n  overflow-y: auto;\n}\n\n.action-container {\n  margin: 16px 8px 8px;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.action-container button.app-button {\n  line-height: 12px;\n  min-height: auto;\n  min-width: auto;\n  height: auto;\n  width: auto;\n  font-size: 12px;\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5b3V0L0U6XFxVc2Vyc1xcU3lsdmVzdGVyXFxEZXNrdG9wXFxibG9ja2NoYWluLWxvdHRlcnkvc3JjXFxhcHBcXHBheW91dFxccGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXlvdXQvcGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3BheW91dC9wYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5b3V0IHtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTFweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDE2cHggOHB4IDhweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgYnV0dG9uLmFwcC1idXR0b24ge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgIH1cclxufSIsIi5wYXlvdXQge1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTFweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxNnB4IDhweCA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmFjdGlvbi1jb250YWluZXIgYnV0dG9uLmFwcC1idXR0b24ge1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxNSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/payout/payout.component.ts":
/*!********************************************!*\
  !*** ./src/app/payout/payout.component.ts ***!
  \********************************************/
/*! exports provided: PayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutComponent", function() { return PayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_payout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/payout.service */ "./src/app/services/payout.service.ts");
/* harmony import */ var _services_lottery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/lottery.service */ "./src/app/services/lottery.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants_placeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/placeMap */ "./src/app/constants/placeMap.ts");






let PayoutComponent = class PayoutComponent {
    constructor(route, lotteryService, payoutService) {
        this.route = route;
        this.lotteryService = lotteryService;
        this.payoutService = payoutService;
        this.currentGameId = this.lotteryService.lastGameId;
        this.payoutData = {};
        this.placeMap = _constants_placeMap__WEBPACK_IMPORTED_MODULE_5__["PlaceMapArr"];
        this.rankingMap = {
            first: 0,
            second: 0,
            third: 0
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.currentLevel = params.level || '1';
            this.getData(this.currentLevel);
        });
    }
    selectRank(rank) {
        this.currentLevel = rank;
        if (!this.payoutData[rank]) {
            this.getData(rank);
        }
    }
    getData(level) {
        if (this.currentGameId != this.lotteryService.lastGameId) {
            this.payoutData = {};
            this.currentGameId = this.lotteryService.lastGameId;
        }
        if (!this.payoutData[level]) {
            this.payoutData[level] = {
                data: [],
                page: 1,
                isEnded: false
            };
        }
        if (this.lotteryService && this.lotteryService.lastGameId) {
            this.payoutService.getPayoutHistory(this.lotteryService.lastGameId, level, this.payoutData[level].page, 100)
                .subscribe((data) => {
                console.log(3, data);
                this.payoutData[level].page++;
                this.payoutData[level].data = data.msg;
                this.payoutData[level].data.forEach(item => {
                    this.setPlaceMap(item.prize);
                });
            });
        }
        else {
            setTimeout(() => {
                this.getData(level);
            }, 100);
        }
    }
    getPlace(amount) {
        switch (amount) {
            case this.rankingMap.first:
                return 'first';
            case this.rankingMap.second:
                return 'second';
            case this.rankingMap.third:
                return 'third';
            default:
                return '';
        }
    }
    setPlaceMap(amount) {
        if (amount === this.rankingMap.first ||
            amount === this.rankingMap.second ||
            amount === this.rankingMap.third ||
            amount < this.rankingMap.third) {
            return;
        }
        if (amount > this.rankingMap.first) {
            this.rankingMap.third = this.rankingMap.second;
            this.rankingMap.second = this.rankingMap.first;
            this.rankingMap.first = amount;
        }
        else if (amount > this.rankingMap.second) {
            this.rankingMap.third = this.rankingMap.second;
            this.rankingMap.second = amount;
        }
        else {
            this.rankingMap.third = amount;
        }
    }
    onScroll() {
        this.payoutData[this.currentLevel].page++;
        this.payoutService.getPayoutHistory(this.lotteryService.lastGameId, this.currentLevel, this.payoutData[this.currentLevel].page, 100)
            .subscribe((data) => {
            const arr = data.msg;
            arr.forEach(item => {
                if (!this.payoutData[this.currentLevel].data.find(dup => {
                    return dup.user === item.user &&
                        dup.ticket === item.ticket &&
                        dup.time === item.time;
                })) {
                    this.payoutData[this.currentLevel].data.push(item);
                }
            });
        });
    }
};
PayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_lottery_service__WEBPACK_IMPORTED_MODULE_3__["LotteryService"] },
    { type: _services_payout_service__WEBPACK_IMPORTED_MODULE_2__["PayoutService"] }
];
PayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payout.component.scss */ "./src/app/payout/payout.component.scss")).default]
    })
], PayoutComponent);



/***/ }),

/***/ "./src/app/payout/payout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/payout/payout.module.ts ***!
  \*****************************************/
/*! exports provided: PayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutModule", function() { return PayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/app-common.module */ "./src/app/common/app-common.module.ts");
/* harmony import */ var _payout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payout.component */ "./src/app/payout/payout.component.ts");
/* harmony import */ var _payout_history_item_payout_history_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payout-history-item/payout-history-item.component */ "./src/app/payout/payout-history-item/payout-history-item.component.ts");






let PayoutModule = class PayoutModule {
};
PayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _payout_history_item_payout_history_item_component__WEBPACK_IMPORTED_MODULE_5__["PayoutHistoryItemComponent"],
            _payout_component__WEBPACK_IMPORTED_MODULE_4__["PayoutComponent"]
        ],
        imports: [
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _payout_component__WEBPACK_IMPORTED_MODULE_4__["PayoutComponent"]
        ]
    })
], PayoutModule);



/***/ }),

/***/ "./src/app/pipes/translate.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


// Services


let TranslatePipe = class TranslatePipe {
    constructor(translateService) {
        this.translateService = translateService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    transform(key, args) {
        if (!key) {
            return '';
        }
        const processedKey = key.toLowerCase().replace(/ /g, '-');
        if (this.translateService.translations[this.translateService.currentLanguage] &&
            this.translateService.translations[this.translateService.currentLanguage][processedKey]) {
            return this.processString(this.translateService.translations[this.translateService.currentLanguage][processedKey], args);
        }
        return key;
    }
    processString(str, args) {
        if (!str || !args) {
            return str || '';
        }
        args.forEach((fill, i) => {
            str = str.replace('{' + i + '}', fill);
        });
        return str;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
TranslatePipe.ctorParameters = () => [
    { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'translate',
        pure: false
    })
], TranslatePipe);



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _account_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account/login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _account_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account/register/register.component */ "./src/app/account/register/register.component.ts");
/* harmony import */ var _account_new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../account/new-account-orientation/new-account-orientation.component */ "./src/app/account/new-account-orientation/new-account-orientation.component.ts");
/* harmony import */ var _account_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../account/deposit/deposit.component */ "./src/app/account/deposit/deposit.component.ts");
/* harmony import */ var _account_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../account/two-factor/two-factor.component */ "./src/app/account/two-factor/two-factor.component.ts");
/* harmony import */ var _account_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../account/withdraw/withdraw.component */ "./src/app/account/withdraw/withdraw.component.ts");
/* harmony import */ var _account_account_history_account_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../account/account-history/account-history.component */ "./src/app/account/account-history/account-history.component.ts");
/* harmony import */ var _payout_payout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../payout/payout.component */ "./src/app/payout/payout.component.ts");
/* harmony import */ var _how_to_play_how_to_play_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../how-to-play/how-to-play.component */ "./src/app/how-to-play/how-to-play.component.ts");
/* harmony import */ var _my_entries_my_entries_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../my-entries/my-entries.component */ "./src/app/my-entries/my-entries.component.ts");
/* harmony import */ var _account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../account/authguard.guard */ "./src/app/account/authguard.guard.ts");















const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    // Auth
    {
        path: 'login',
        component: _account_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _account_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'orientation',
        component: _account_new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_6__["NewAccountOrientationComponent"]
    },
    // Account
    {
        path: 'deposit',
        component: _account_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__["DepositComponent"],
    },
    {
        path: 'withdraw',
        component: _account_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_9__["WithdrawComponent"],
    },
    {
        path: 'account-history',
        component: _account_account_history_account_history_component__WEBPACK_IMPORTED_MODULE_10__["AccountHistoryComponent"],
        canActivate: [_account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: '2fa',
        component: _account_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_8__["TwoFactorComponent"],
        canActivate: [_account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: 'payout-history',
        component: _payout_payout_component__WEBPACK_IMPORTED_MODULE_11__["PayoutComponent"]
    },
    {
        path: 'my-entries',
        component: _my_entries_my_entries_component__WEBPACK_IMPORTED_MODULE_13__["MyEntriesComponent"],
        canActivate: [_account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    {
        path: 'how-to-play',
        component: _how_to_play_how_to_play_component__WEBPACK_IMPORTED_MODULE_12__["HowToPlayComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let AccountService = class AccountService {
    constructor(authService, httpClient) {
        this.authService = authService;
        this.httpClient = httpClient;
        this.showAccountSettings = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.openOnReturn = false;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
    }
    getShowSettingsObs() {
        return this.showAccountSettings.asObservable();
    }
    setAccountSettings(show) {
        this.showAccountSettings.next(show);
    }
    getAccountActivity(page, offset) {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                .set('token', this.authService.user.token)
        };
        let request = new URLSearchParams();
        request.set('page', page.toString());
        request.set('offset', offset.toString());
        return this.httpClient.post(`${this.url}/account/activity`, request.toString(), options);
    }
};
AccountService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AccountService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-md5 */ "./node_modules/js-md5/src/md5.js");
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_md5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_window_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/window-ref */ "./src/app/common/window-ref.ts");








let AuthService = class AuthService {
    constructor(httpClient, windowRef) {
        this.httpClient = httpClient;
        this.windowRef = windowRef;
        this.isLoggedIn = false;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.user = {
            userName: null,
            amountAvailable: null,
            appToken: null,
            token: null,
            blockHeight: null,
            depositAccount: null,
            memo: null
        };
        this.appKey = 'btopen8yg2dfaau4x';
        this.authorize();
        if (this.windowRef.nativeWindow) {
            this.windowRef.nativeWindow.SyncCallback = (method, data) => {
                const dataObj = JSON.parse(data);
                switch (method) {
                    case 'Authorizedlogin':
                        if (dataObj.status !== 'ok' || !dataObj.callback) {
                            return;
                        }
                        this.user.appToken = dataObj.callback.token;
                        this.loginWithToken(dataObj.callback.userMail, dataObj.callback.token);
                        break;
                    case 'Recharge':
                        alert(dataObj.message);
                        break;
                }
            };
        }
    }
    authorize() {
        const data = JSON.stringify({
            appkey: this.appKey
        });
        this.sendAppMessage('Authorizedlogin', data);
    }
    depositAmount(amount) {
        const data = JSON.stringify({
            appkey: this.appKey,
            token: this.user.appToken,
            orderNo: Math.random() * 1000 + '' + Date.now(),
            amount: amount.toString(),
            currencyTag: 'BTOK'
        });
        this.sendAppMessage('Recharge', data);
    }
    getAccountTotal() {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                .set('token', this.user.token)
        };
        let request = new URLSearchParams();
        return this.httpClient.post(`${this.url}/account/getAccountInfo`, request.toString(), options);
    }
    withdraw(amount) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
                .set("token", this.user.token)
        };
        const request = new URLSearchParams();
        request.set('amount', amount.toString());
        return this.httpClient.post(`${this.url}/account/withdraw`, request.toString(), options);
    }
    sendAppMessage(action, data) {
        if (this.windowRef.nativeWindow.isIOS) {
            this.windowRef.nativeWindow.webkit.messageHandlers.SyncSendMsg.postMessage([action, data]);
        }
        else {
            if (this.windowRef.nativeWindow.android) {
                this.windowRef.nativeWindow.android.SyncSendMsg(action, data);
            }
            else {
                // alert('Open this app in Bittok!');
            }
        }
    }
    loginWithToken(userMail, token) {
        this.isLoggedIn = false;
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        const request = new URLSearchParams();
        request.set('email', userMail);
        request.set('token', token);
        this.httpClient.post(`${this.url}/passport/getToken`, request.toString(), options)
            .subscribe((results) => {
            if (results.code === 200) {
                if (results && results.msg) {
                    this.user.amountAvailable = parseFloat(results.msg.balance) || 0;
                    this.user.token = results.msg.token;
                }
                this.isLoggedIn = true;
                return this.user;
            }
            if (this.accountUpdateInterval) {
                clearInterval(this.accountUpdateInterval);
            }
            this.accountUpdateInterval = setInterval(() => {
                if (this.accountUpdateSub) {
                    this.accountUpdateSub.unsubscribe();
                }
                this.accountUpdateSub = this.getAccountTotal()
                    .subscribe((response) => {
                    if (response.code === 200) {
                        this.user.amountAvailable = parseFloat(response.msg.balance);
                    }
                });
            }, 30000);
        }, (err) => {
            alert('error ' + JSON.stringify(err));
        });
    }
    login(loginObj) {
        this.isLoggedIn = false;
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        const request = new URLSearchParams();
        request.set('username', loginObj.userName);
        if (loginObj.userName.toLowerCase() === 'sylvester') {
            request.set('password', loginObj.password);
        }
        else {
            request.set('password', js_md5__WEBPACK_IMPORTED_MODULE_3___default()(loginObj.password));
        }
        return this.httpClient.post(`${this.url}/passport/login`, request.toString(), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((results) => {
            if (results.code === 200) {
                this.user.userName = loginObj.userName;
                if (results && results.msg) {
                    this.user.amountAvailable = parseFloat(results.msg.balance) || 0;
                    this.user.token = results.msg.token;
                    this.user.memo = results.msg.memo;
                    this.user.depositAccount = results.msg.depositaccount;
                }
                this.isLoggedIn = true;
                return this.user;
            }
        }));
    }
    register(registrationObj) {
        this.isLoggedIn = false;
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        let request = new URLSearchParams();
        request.set('username', registrationObj.userName);
        request.set('password', js_md5__WEBPACK_IMPORTED_MODULE_3___default()(registrationObj.password));
        return this.httpClient.post(`${this.url}/passport/register`, request.toString(), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((results) => {
            if (results.code === 200) {
                return this.login(registrationObj);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _common_window_ref__WEBPACK_IMPORTED_MODULE_7__["WindowRef"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/block-chain.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/block-chain.service.ts ***!
  \*************************************************/
/*! exports provided: BlockChainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockChainService", function() { return BlockChainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let BlockChainService = class BlockChainService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].etherscanUrl;
        this.apiKey = '4Z4DB6ZJBZ3E49XWIXJBY3ED44P5ZDDPHI';
        this.getLatestBlockSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.getBlockSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.rollingLog = [];
        this.currentBlock = null;
        this.isSingleRow = false;
        this.startLog();
    }
    startLog() {
        this.isSingleRow = false;
        if (!(this.rollingLog && this.rollingLog.length)) {
            if (this.getLatestBlockSub) {
                this.getLatestBlockSub.unsubscribe();
            }
            this.getLatestBlockSub = this.getLatestBlock().subscribe((response) => {
                this.currentBlock = (parseInt(response.result, 16) + 1).toString(16);
                if (this.getBlockSub) {
                    this.getBlockSub.unsubscribe();
                }
                this.getBlockSub = this.getSpecificBlock(response.result)
                    .subscribe((response) => {
                    if (response.result) {
                        this.rollingLog.push(response.result);
                    }
                });
            });
        }
        if (!this.rollingInterval) {
            this.rollingInterval = setInterval(() => {
                if (this.getBlockSub) {
                    this.getBlockSub.unsubscribe();
                }
                this.getBlockSub = this.getSpecificBlock('0x' + this.currentBlock)
                    .subscribe((response) => {
                    if (response.result) {
                        this.currentBlock = (parseInt(this.currentBlock, 16) + 1).toString(16);
                        this.rollingLog.unshift(response.result);
                        if (this.rollingLog.length > 20) {
                            this.rollingLog.pop();
                        }
                    }
                });
            }, 2000);
        }
    }
    stopLog() {
        clearInterval(this.rollingInterval);
        this.rollingInterval = null;
        this.rollingLog = [];
    }
    setSingleBlock(blockNumber) {
        this.isSingleRow = true;
        this.stopLog();
        this.getSpecificBlock('0x' + blockNumber.toString(16))
            .subscribe((response) => {
            if (response.result) {
                this.rollingLog = [response.result];
            }
        });
    }
    getLatestBlock() {
        const url = `${this.url}?module=proxy&action=eth_blockNumber&apikey=${this.apiKey}`;
        return this.httpClient.get(url);
    }
    getSpecificBlock(tagNumber) {
        const url = `${this.url}?module=proxy&action=eth_getBlockByNumber&tag=${tagNumber}&boolean=true&apikey=${this.apiKey}`;
        return this.httpClient.get(url);
    }
};
BlockChainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BlockChainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BlockChainService);



/***/ }),

/***/ "./src/app/services/lottery.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/lottery.service.ts ***!
  \*********************************************/
/*! exports provided: LotteryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryService", function() { return LotteryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_lottery_lottery_obj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/lottery/lottery-obj */ "./src/app/models/lottery/lottery-obj.ts");
/* harmony import */ var _models_lottery_available_prize_pool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/lottery/available-prize-pool */ "./src/app/models/lottery/available-prize-pool.ts");
/* harmony import */ var _models_lottery_my_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/lottery/my-entries */ "./src/app/models/lottery/my-entries.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_lottery_winner_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/lottery/winner-info */ "./src/app/models/lottery/winner-info.ts");
/* harmony import */ var _models_lottery_ticket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/lottery/ticket */ "./src/app/models/lottery/ticket.ts");
/* harmony import */ var _block_chain_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-chain.service */ "./src/app/services/block-chain.service.ts");













let LotteryService = class LotteryService {
    constructor(authService, blockChainService, httpClient) {
        this.authService = authService;
        this.blockChainService = blockChainService;
        this.httpClient = httpClient;
        this.lotteryObj = new _models_lottery_lottery_obj__WEBPACK_IMPORTED_MODULE_2__["LotteryObj"]();
        this.options = [
            // {
            //   icon: '../../../assets/images/icon-pool-1.png',
            //   value: 1000,
            //   background: '#cf1942'
            // },
            // {
            //   icon: "../../../assets/images/icon-pool-2.png",
            //   color: "#5a4a0e",
            //   value: 10000,
            //   background: "#e5b902",
            // },
            {
                icon: '../../../assets/images/icon-pool-3.png',
                value: 100000,
                background: '#6a13c2'
            },
        ];
        this.selectedOption = this.options[0];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].url;
        this.statusSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.entrySubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.setAvailablePrizePool = (msg) => {
            let prizePool = msg.entrylimit;
            let gameId = msg.gameid;
            let lotteryStatus = msg.status.toString();
            let currentEntries = msg.currententry;
            let currentStatus;
            this.availablePrizePool = prizePool;
            let myEntries = [];
            if (msg.mytickets) {
                myEntries = msg.mytickets.map((ticket) => {
                    let entry = new _models_lottery_my_entries__WEBPACK_IMPORTED_MODULE_4__["MyEntries"]();
                    entry.userName = ticket.user;
                    entry.start = parseInt(ticket.start, 10);
                    entry.end = parseInt(ticket.end, 10);
                    entry.count = entry.end - entry.start + 1;
                    return entry;
                });
            }
            if (!this.lotteryObj[prizePool]) {
                this.lotteryObj[prizePool] = new _models_lottery_available_prize_pool__WEBPACK_IMPORTED_MODULE_3__["PrizePool"](prizePool, gameId, lotteryStatus, currentEntries, myEntries, msg.targetblockheight);
            }
            else {
                currentStatus = this.lotteryObj[prizePool].lotteryStatus;
                this.lotteryObj[prizePool].gameId = gameId;
                this.lotteryObj[prizePool].currentEntries = currentEntries;
                this.lotteryObj[prizePool].lotteryStatus = lotteryStatus;
                this.lotteryObj[prizePool].myEntries = myEntries;
                this.lotteryObj[prizePool].targetBlockHeight = msg.targetblockheight;
            }
            if (currentStatus !== lotteryStatus) {
                switch (lotteryStatus) {
                    case "0":
                        break;
                    case "1":
                        break;
                    case "2":
                        clearInterval(this.checkStatusInterval);
                        this.setPrizePool(msg);
                        this.setDrawWinners(prizePool);
                        // this.blockChainService.setSingleBlock(msg.targetblockheight);
                        this.blockChainService.stopLog();
                        this.finishPendingProcess(prizePool);
                        break;
                }
            }
        };
        this.startPendingProcess = (prizePool) => {
            const currentPrizePool = this.lotteryObj[prizePool];
            if (currentPrizePool.lotteryStatus !== "0") {
                return;
            }
            this.setLotteryStatus("1", prizePool);
        };
        this.finishPendingProcess = (prizePool) => {
            const currentPrizePool = this.lotteryObj[prizePool];
            currentPrizePool.countDown = 60;
            this.lastGameId = this.currentLotteryInfo.gameId;
            if (currentPrizePool.countDownInterval) {
                clearInterval(currentPrizePool.countDownInterval);
            }
            currentPrizePool.countDownInterval = setInterval(() => {
                if (currentPrizePool.countDown <= 1) {
                    clearInterval(currentPrizePool.countDownInterval);
                    this.startStatusCheckInterval();
                    this.blockChainService.startLog();
                }
                this.lotteryObj[prizePool].countDown--;
            }, 1000);
        };
        this.startStatusCheckInterval();
    }
    set lastGameId(value) {
        if (value) {
            this._lastGameId = value.toString();
        }
    }
    get lastGameId() {
        if (this._lastGameId) {
            return this._lastGameId.toString();
        }
        if (this.currentLotteryInfo && this.currentLotteryInfo.gameId) {
            return (parseInt(this.currentLotteryInfo.gameId, 10) - 1).toString();
        }
        return null;
    }
    startStatusCheckInterval() {
        if (this.checkStatusInterval) {
            clearInterval(this.checkStatusInterval);
        }
        if (this.statusSubscription) {
            this.statusSubscription.unsubscribe();
        }
        this.statusSubscription = this.checkGameStatus().subscribe(() => { });
        this.checkStatusInterval = setInterval(() => {
            this.statusSubscription.unsubscribe();
            this.statusSubscription = this.checkGameStatus().subscribe(() => { });
        }, 3000);
    }
    get currentLotteryInfo() {
        return this.lotteryObj[this.availablePrizePool];
    }
    clearLotteryObj() {
        this.lotteryObj = new _models_lottery_lottery_obj__WEBPACK_IMPORTED_MODULE_2__["LotteryObj"]();
    }
    getLotteryInfo(prizePool) {
        return this.lotteryObj[prizePool] || null;
    }
    checkGameStatus() {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]()
                .set("Content-Type", "application/x-www-form-urlencoded")
                .set("token", this.authService.user.token || "anonymous"),
        };
        let request = new URLSearchParams();
        request.set("type", "active");
        return this.httpClient
            .post(`${this.url}/game/status`, request.toString(), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((results) => {
            if (results) {
                this.setAvailablePrizePool(results);
                return results;
            }
            return null;
        }));
    }
    clearWinners() {
        this.currentLotteryInfo.winners.main = [];
        this.currentLotteryInfo.winners.minipool.isDrawing = false;
        this.currentLotteryInfo.winners.minipool.winningAmount = 0;
    }
    setPrizePool(msg) {
        const prizeList = msg.prizelist;
        this.clearWinners();
        if (prizeList) {
            prizeList.forEach((prize, i) => {
                if (!this.currentLotteryInfo.winners.main[i]) {
                    this.currentLotteryInfo.winners.main[i] = new _models_lottery_winner_info__WEBPACK_IMPORTED_MODULE_10__["WinnerInfo"](parseFloat(msg.myprizelist.find(item => item.win === i + 1).amount));
                }
                prize.forEach((item) => {
                    this.currentLotteryInfo.winners.main[i].tickets.push(new _models_lottery_ticket__WEBPACK_IMPORTED_MODULE_11__["Ticket"](item.ticket, item.user, item.prize, item.user === (this.authService.user && this.authService.user.userName)));
                });
            });
        }
        this.currentLotteryInfo.winners.minipool.winningPreDisplay = parseFloat(msg.myprizelist.find(item => item.win === 7).amount);
    }
    setDrawWinners(prizePool) {
        const currentPrizePool = this.lotteryObj[prizePool];
        currentPrizePool.winners.main.forEach((item, i) => {
            item.isDrawing = true;
            setTimeout(() => {
                item.myWinnings = item.preDisplayWinnings;
                item.isDrawing = false;
            }, 500 * (i + 1));
        });
        currentPrizePool.winners.minipool.isDrawing = true;
    }
    checkIfEntryMatches(entries, num) {
        for (let i = 0; i < entries.length; i++) {
            if (entries[i].start <= num && entries[i].end >= num) {
                return entries[i];
            }
        }
        return null;
    }
    setLotteryStatus(status, prizePool) {
        this.lotteryObj[prizePool].lotteryStatus = status;
    }
    buyTicket(amount) {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]()
                .set("Content-Type", "application/x-www-form-urlencoded")
                .set("token", this.authService.user.token),
        };
        let request = new URLSearchParams();
        request.set("amount", amount.toString());
        request.set("gameid", this.currentLotteryInfo.gameId);
        return this.httpClient
            .post(`${this.url}/bets/buyTickets`, request.toString(), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((results) => {
            if (results.code === 200) {
                this.authService.user.amountAvailable = parseFloat(results.msg.balance);
                this.startStatusCheckInterval();
                return results.msg;
            }
            return null;
        }));
    }
    setMinipool() {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]()
                .set("Content-Type", "application/x-www-form-urlencoded")
                .set("token", this.authService.user.token),
        };
        let request = new URLSearchParams();
        request.set("gameid", this.currentLotteryInfo.gameId);
        return this.httpClient
            .post(`${this.url}/getBonusPrizeList`, request.toString(), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((results) => {
            if (results.code === 200) {
                return results;
            }
            return null;
        }));
    }
    drawMinipool() {
        const prizePool = this.lotteryObj[this.availablePrizePool];
        prizePool.winners.minipool.isDrawing = false;
        prizePool.winners.minipool.winningAmount = prizePool.winners.minipool.winningPreDisplay;
    }
    ngOnDestroy() {
        clearInterval(this.checkStatusInterval);
    }
};
LotteryService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _block_chain_service__WEBPACK_IMPORTED_MODULE_12__["BlockChainService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
LotteryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LotteryService);



/***/ }),

/***/ "./src/app/services/navigation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let NavigationService = class NavigationService {
    constructor(router) {
        this.router = router;
        this.previousRoute = '';
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()).subscribe((e) => {
            this.previousRoute = e[0].urlAfterRedirects; // previous url
        });
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavigationService);



/***/ }),

/***/ "./src/app/services/payout.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/payout.service.ts ***!
  \********************************************/
/*! exports provided: PayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayoutService", function() { return PayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let PayoutService = class PayoutService {
    constructor(authService, httpClient) {
        this.authService = authService;
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
    }
    getPayoutHistory(gameid, level, page, offset) {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
            // .set('token', this.authService.user.token)
        };
        let request = new URLSearchParams();
        request.set('gameid', gameid);
        request.set('page', page.toString());
        request.set('offset', offset.toString());
        request.set('level', level.toString());
        return this.httpClient.post(`${this.url}/game/getPrizeList`, request.toString(), options);
    }
};
PayoutService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PayoutService);



/***/ }),

/***/ "./src/app/services/translate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/translate.service.ts ***!
  \***********************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constants_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/cn */ "./src/app/constants/cn.ts");
/* harmony import */ var _constants_us__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/us */ "./src/app/constants/us.ts");



// Constants


let TranslateService = class TranslateService {
    constructor() {
        this.translations = {
            'us': _constants_us__WEBPACK_IMPORTED_MODULE_4__["EnglishTranslations"],
            'cn': _constants_cn__WEBPACK_IMPORTED_MODULE_3__["ChineseTranslations"]
        };
        this._languages = [
            {
                language: 'us',
                text: 'English',
                image: './assets/images/flags/us.svg'
            },
            {
                language: 'cn',
                text: '中文',
                image: './assets/images/flags/cn.svg'
            }
        ];
        this._currentLanguage = this.getStoredLanguage();
        this._onLanguageChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get languages() {
        return JSON.parse(JSON.stringify(this._languages));
    }
    get currentLanguage() {
        return this._currentLanguage;
    }
    get onLanguageChange() {
        return this._onLanguageChange.asObservable();
    }
    set setCurrentLanguage(language) {
        if (!language || !this._languages.find(lang => lang.language === language)) {
            return;
        }
        localStorage.setItem('lang', language);
        this._currentLanguage = language;
        this._onLanguageChange.next(language);
    }
    getStoredLanguage() {
        const lang = localStorage.getItem('lang');
        if (lang && this._languages.find(language => language.language === lang)) {
            return lang;
        }
        return 'cn';
    }
    getFlagImage(country) {
        const countryObj = this._languages.find(lang => lang.language === country);
        if (countryObj) {
            return countryObj.image;
        }
    }
};
TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TranslateService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    url: 'https://api.luckystrike.one/api',
    etherscanUrl: 'https://api-cn.etherscan.com/api'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Users\Sylvester\Desktop\blockchain-lottery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map