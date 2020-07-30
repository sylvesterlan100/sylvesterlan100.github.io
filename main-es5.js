function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-history/account-history.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-history/account-history.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountHistoryAccountHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [title]=\"'account-history' | translate\"></app-account-header>\r\n\r\n<div class=\"history account-history\">\r\n  <mat-tab-group animationDuration=\"0ms\">\r\n    <mat-tab [label]=\"'deposit' | translate\">\r\n      <div class=\"history-table\"\r\n      infiniteScroll\r\n      [infiniteScrollDistance]=\"1\"\r\n      [infiniteScrollThrottle]=\"50\"\r\n      (scrolled)=\"onDepositScroll()\"\r\n      [scrollWindow]=\"false\">\r\n        <ng-container *ngFor=\"let data of depositHistory\">\r\n            <div class=\"tablerow\" [ngClass]=\"{isExpanded : data.isExpanded}\">\r\n                <div class=\"itemrow\">\r\n                    <div class=\"date\">{{(data.time * 1000) | date: 'MM-dd-yyyy H:mm'}}</div>\r\n                    <div class=\"amount\">\r\n                        + {{data.amount | toNumber | number: '0.0-4'}} BTOK\r\n                    </div>\r\n                    <!-- <div class=\"icon\"><i *ngIf=\"!data.isExpanded\" class=\"icon-chevronright chevron-down\" (click)=\"data.isExpanded = true\"></i></div> -->\r\n                </div>\r\n                <!-- <div>\r\n                   <div class=\"address\">\r\n                       <div class=\"label\">\r\n                           {{'from'|translate}}:\r\n                       </div>\r\n                       <div class=\"value\">\r\n                            {{data.fromAddress}}\r\n                       </div>\r\n                       <div class=\"copy\">\r\n                           <i class=\"icon-documentcopy\"></i>\r\n                       </div>\r\n                   </div>\r\n                   <div class=\"address\">\r\n                        <div class=\"label\">\r\n                            {{'TXID'|translate}}:\r\n                        </div>\r\n                        <div class=\"value\">\r\n                            {{data.txid}}\r\n                        </div>\r\n                        <div class=\"copy\">\r\n                            <i class=\"icon-documentcopy\"></i>\r\n                        </div>\r\n                   </div>\r\n                </div> -->\r\n                <!-- <div class=\"closerow\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"icon-chevronright chevron-up\" *ngIf=\"data.isExpanded\" (click)=\"data.isExpanded = false\"></i>\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <div class=\"no-futher-activity\">\r\n        <div *ngIf=\"!isLoadingDeposit\">\r\n            {{'no-further-activity' | translate}}\r\n        </div>\r\n        <mat-spinner diameter=\"42\" *ngIf=\"isLoadingDeposit\"></mat-spinner>\r\n    </div>\r\n    </mat-tab>\r\n    <mat-tab [label]=\"'withdraw' | translate\">\r\n      <div class=\"history-table\"\r\n      infiniteScroll\r\n      [infiniteScrollDistance]=\"1\"\r\n      [infiniteScrollThrottle]=\"50\"\r\n      (scrolled)=\"onWithdrawScroll()\"\r\n      [scrollWindow]=\"false\">\r\n        <ng-container *ngFor=\"let data of withdrawHistory\">\r\n            <div class=\"tablerow\" [ngClass]=\"{isExpanded : data.isExpanded}\">\r\n                <div class=\"itemrow\">\r\n                    <div class=\"date\">{{(data.time * 1000) | date: 'MM-dd-yyyy H:mm'}}</div>\r\n                    <div class=\"amount\">\r\n                        - {{data.amount | toNumber | number: '0.0-4'}} BTOK\r\n                        <div class=\"pending\">\r\n                          <i *ngIf=\"data.status === 0\" class=\"icon-watch4\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"icon\"><i *ngIf=\"!data.isExpanded\" class=\"icon-chevronright chevron-down\" (click)=\"data.isExpanded = true\"></i></div> -->\r\n                </div>\r\n                <!-- <div>\r\n                   <div class=\"address\">\r\n                       <div class=\"label\">\r\n                           {{'from'|translate}}:\r\n                       </div>\r\n                       <div class=\"value\">\r\n                            {{data.fromAddress}}\r\n                       </div>\r\n                       <div class=\"copy\">\r\n                           <i class=\"icon-documentcopy\"></i>\r\n                       </div>\r\n                   </div>\r\n                   <div class=\"address\">\r\n                        <div class=\"label\">\r\n                            {{'TXID'|translate}}:\r\n                        </div>\r\n                        <div class=\"value\">\r\n                            {{data.txid}}\r\n                        </div>\r\n                        <div class=\"copy\">\r\n                            <i class=\"icon-documentcopy\"></i>\r\n                        </div>\r\n                   </div>\r\n                </div> -->\r\n                <!-- <div class=\"closerow\">\r\n                    <div class=\"icon\">\r\n                        <i class=\"icon-chevronright chevron-up\" *ngIf=\"data.isExpanded\" (click)=\"data.isExpanded = false\"></i>\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <div class=\"no-futher-activity\">\r\n        <div *ngIf=\"!isLoadingWithdrawal\">\r\n            {{'no-further-activity' | translate}}\r\n        </div>\r\n        <mat-spinner diameter=\"42\" *ngIf=\"isLoadingWithdrawal\"></mat-spinner>\r\n    </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-settings/account-settings.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-settings/account-settings.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountSettingsAccountSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"overlay\"  [ngClass]=\"{show: showAccount}\" (click)=\"close()\"></div>\r\n<div class=\"account-settings\" [ngClass]=\"{show: showAccount}\">\r\n    <div class=\"account-container\">\r\n        <div>\r\n            <div class=\"header\">\r\n                <i class=\"icon-close close\" (click)=\"close()\"></i>\r\n                <app-language-select class=\"language-select\" [darkBackground]=\"true\"></app-language-select>\r\n            </div>\r\n            <div class=\"info-container\">\r\n                <div class=\"background\">\r\n                    <app-animated-background [width]=\"'100%'\"></app-animated-background>\r\n                </div>\r\n                <div class=\"info\">\r\n                    <div *ngIf=\"authService.isLoggedIn\">\r\n                        <div class=\"label\">{{'hello'|translate}},</div>\r\n                        <div class=\"username\">{{authService.user.userName}}</div>\r\n                    </div>\r\n                    <div *ngIf=\"!authService.isLoggedIn\"\r\n                        class=\"label\"\r\n                        (click)=\"close()\"\r\n                    >\r\n                        {{'please-login-through-the-app' | translate}}\r\n                    </div>\r\n                    <div>\r\n                        <div class=\"label\">{{'balance'|translate}}</div>\r\n                        <div class=\"amount\">\r\n                            {{(!authService.isLoggedIn ? '0' : authService.user.amountAvailable) | toNumber | number : '0.0-4'}} BTOK\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngIf=\"!authService.isLoggedIn\">\r\n            <div class=\"link\" (click)=\"close()\">\r\n                {{'deposit' | translate}}\r\n            </div>\r\n            <div class=\"link\" (click)=\"close()\">\r\n                {{'account-history' | translate}}\r\n            </div>\r\n            <div class=\"link\" [routerLink]=\"['/winning-history']\" (click)=\"close(true)\">\r\n                {{'winnings-history' | translate}}\r\n            </div>\r\n            <div class=\"link\" [routerLink]=\"['/payout-history']\" (click)=\"close(true)\">\r\n                {{'payout-history' | translate}}\r\n            </div>\r\n            <div class=\"link\" (click)=\"close()\">\r\n                <button class=\"app-button dark-text\">\r\n                    {{'please-login-through-the-app' | translate}}!\r\n                </button>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"authService.isLoggedIn\">\r\n            <div class=\"link\" [routerLink]=\"['/account-history']\" (click)=\"close(true)\">\r\n                {{'account-history' | translate}}\r\n            </div>\r\n            <div class=\"link\" [routerLink]=\"['/winning-history']\" (click)=\"close(true)\">\r\n                {{'winnings-history' | translate}}\r\n            </div>\r\n            <div class=\"link\" [routerLink]=\"['/deposit']\" (click)=\"close(true)\">\r\n                {{'deposit' | translate}}\r\n            </div>\r\n            <div class=\"link\" [routerLink]=\"['/payout-history']\" (click)=\"close(true)\">\r\n                {{'payout-history' | translate}}\r\n            </div>\r\n        </ng-container>\r\n        <div class=\"link how-to-play\" [routerLink]=\"['/how-to-play']\" (click)=\"close(true)\">\r\n            {{'how-to-play' | translate}}\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/deposit/deposit.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/deposit/deposit.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountDepositDepositComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [title]=\"'deposit-funds' | translate\"></app-account-header>\r\n<div class=\"deposit\">\r\n    <!-- <div class=\"qr-container\">\r\n        <div class=\"qr-code\">\r\n            <img src=\"../../../assets/images/sample/qrcode.png\" alt=\"\">\r\n        </div>\r\n    </div> -->\r\n    <ng-container *ngIf=\"authService.user.depositAccount\">\r\n      <div class=\"message\">\r\n          <div>\r\n              {{'only-deposit-post-to-this-address' | translate}}.\r\n          </div>\r\n          <div>\r\n              {{'depositing-any-other-asset-here-may-result-in-permanent-loss' | translate}}.\r\n          </div>\r\n      </div>\r\n      <div class=\"address copy-pastable\">\r\n          <div>\r\n              {{authService.user.depositAccount}}\r\n          </div>\r\n          <div>\r\n              {{authService.user.memo}}\r\n          </div>\r\n      </div>\r\n      <div class=\"btn-container\">\r\n          <button class=\"app-button\" ngxClipboard [cbContent]=\"authService.user.depositAccount\">\r\n              {{'copy-account' | translate | uppercase}}\r\n              <i class=\"icon-documentcopy\"></i>\r\n          </button>\r\n          <button class=\"app-button\" ngxClipboard [cbContent]=\"authService.user.memo\">\r\n              {{'copy-memo' | translate | uppercase}}\r\n              <i class=\"icon-documentcopy\"></i>\r\n          </button>\r\n      </div>\r\n    </ng-container>\r\n    <div class=\"deposit-form\">\r\n      <input class=\"app-input\"\r\n        step=\".0001\"\r\n        type=\"number\"\r\n        (focus)=\"depositAmount = !depositAmount ? null : depositAmount\"\r\n        [(ngModel)]=\"depositAmount\"\r\n        (blur)=\"updateAmount()\"\r\n        (ngModelChange)=\"updateAmount()\">\r\n      <button class=\"app-button\" (click)=\"deposit()\">\r\n        {{'deposit' | translate | uppercase}}\r\n      </button>\r\n    </div>\r\n    <div class=\"amount\">\r\n        <div class=\"available\">{{'available' | translate}}</div>\r\n        <div>{{authService.user.amountAvailable | toNumber | number : '0.0-4'}} BTOK</div>\r\n    </div>\r\n    <div class=\"link\" [routerLink]=\"['/account-history']\">\r\n        {{'history' | translate}}\r\n    </div>\r\n    <div class=\"link\" [routerLink]=\"['/withdraw']\">\r\n        {{'withdraw' | translate}}\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [simpleReturn]=\"true\"></app-account-header>\r\n<div class=\"login\">\r\n    <div class=\"logo\">\r\n      <img class=\"logo-image\" src=\"{{'logo' | translate}}\" alt=\"\">\r\n    </div>\r\n    <div class=\"input-form\">\r\n        <div class=\"input-row\">\r\n            <input type=\"text\"\r\n                [(ngModel)]=\"loginObj.userName\"\r\n                class=\"app-input\"\r\n                [placeholder]=\"'username'|translate\">\r\n        </div>\r\n        <div class=\"input-row app-input-group\">\r\n            <input [type]=\"loginObj.passwordType\" class=\"app-input\" [(ngModel)]=\"loginObj.password\" [placeholder]=\"'password'|translate\">\r\n            <div class=\"append\">\r\n                <i *ngIf=\"loginObj.passwordType === 'text'\"\r\n                    (click)=\"loginObj.passwordType = 'password'\"\r\n                    class=\"icon-eyeslash\"></i>\r\n                <i *ngIf=\"loginObj.passwordType === 'password'\"\r\n                    (click)=\"loginObj.passwordType = 'text'\"\r\n                    class=\"icon-eyenormal\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"input-row\">\r\n            <button [disabled]=\"!infoValid()\" class=\"app-button\" (click)=\"login()\">\r\n                {{'login' | translate | uppercase}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"register\" [routerLink]=\"['/register']\">\r\n        {{'create-new-account' | translate}}\r\n    </div>\r\n</div>\r\n<div class=\"language-container\">\r\n  <app-language-select class=\"language-select\" [darkBackground]=\"true\"></app-language-select>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/new-account-orientation/new-account-orientation.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/new-account-orientation/new-account-orientation.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountNewAccountOrientationNewAccountOrientationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [simpleReturn]=\"true\"></app-account-header>\r\n\r\n<div class=\"orientation\">\r\n    <div class=\"message\">{{'hi-your-new-account-is-ready' | translate: [authService.user.userName]}}\r\n        <br>\r\n        <br>{{'remember-your-profile-is-anonymous-etc' | translate}}! ({{'optional' | translate}})\r\n    </div>\r\n    \r\n    <div class=\"deposit-funds\">\r\n        <button class=\"app-button\" [routerLink]=\"['/deposit']\"> {{'deposit-funds' | translate | uppercase}}</button>\r\n    </div>\r\n    \r\n    <!-- <div class=\"connect-2fa\">\r\n        {{'connect-2fa' | translate}}  ({{'optional' | translate}})\r\n    </div> -->\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [simpleReturn]=\"true\"></app-account-header>\r\n<div class=\"register\">\r\n    <div class=\"info\">\r\n        {{'sign-up-for-an-anonymous-acount-and-start-playing-today' | translate}}.\r\n    </div>\r\n    <div class=\"input-form\">\r\n        <div class=\"input-row\">\r\n            <input type=\"text\" \r\n                [(ngModel)]=\"registrationObj.userName\"\r\n                class=\"app-input\" \r\n                [placeholder]=\"'username'|translate\">\r\n        </div>\r\n        <div class=\"input-row app-input-group\">\r\n            <input [type]=\"registrationObj.passwordType\" class=\"app-input\" [(ngModel)]=\"registrationObj.password\" [placeholder]=\"'password'|translate\">\r\n            <div class=\"append\">\r\n                <i *ngIf=\"registrationObj.passwordType === 'text'\" \r\n                    (click)=\"registrationObj.passwordType = 'password'\" \r\n                    class=\"icon-eyeslash\"></i>\r\n                <i *ngIf=\"registrationObj.passwordType === 'password'\" \r\n                    (click)=\"registrationObj.passwordType = 'text'\" \r\n                    class=\"icon-eyenormal\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"input-row app-input-group\">\r\n            <input [type]=\"registrationObj.password2Type\" class=\"app-input\" [(ngModel)]=\"registrationObj.password2\" [placeholder]=\"'password'|translate\">\r\n            <div class=\"append\">\r\n                <i *ngIf=\"registrationObj.password2Type === 'text'\" \r\n                    (click)=\"registrationObj.password2Type = 'password'\" \r\n                    class=\"icon-eyeslash\"></i>\r\n                <i *ngIf=\"registrationObj.password2Type === 'password'\" \r\n                    (click)=\"registrationObj.password2Type = 'text'\" \r\n                    class=\"icon-eyenormal\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"input-row\">\r\n            <button class=\"app-button\" [disabled]=\"!infoValid()\" (click)=\"register()\">\r\n                {{'register-new-account' | translate}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/two-factor/two-factor.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/two-factor/two-factor.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountTwoFactorTwoFactorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header *ngIf=\"step < 2\" [navigateBack]=\"navBack\" [title]=\"getTitle() | translate | uppercase\"></app-account-header>\r\n<div class=\"two-factor\">\r\n    <div *ngIf=\"step === 0\" class=\"step-0\">\r\n        <div class=\"qr-container\">\r\n            <div class=\"qr-code\">\r\n                <img src=\"../../../assets/images/sample/qrcode.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"message\">\r\n            <div>\r\n                {{'scan-this-code-with-your-2fa-app' | translate}}.\r\n            </div>\r\n            <div>\r\n                {{'please-backup-this-code-somewhere' | translate}}.\r\n            </div>\r\n            <div>\r\n                {{'once-your-account-is-bound-you-can-not-view-this-code-again' | translate}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"address copy-pastable\">\r\n            {{address}}\r\n        </div>\r\n\r\n        <div>\r\n            <button class=\"app-button\">\r\n                {{'copy-code' | translate | uppercase}}\r\n                <i class=\"icon-documentcopy\"></i>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"link\" (click)=\"step=1\">\r\n            {{'next-step' | translate | uppercase}} \r\n            <i class=\"icon-chevronright\"></i>\r\n        </div>\r\n    </div>\r\n    <ng-container *ngIf=\"step === 1\">\r\n        <div class=\"message\">\r\n            {{'enter-your-2fa-code-and-press-confirm-to-bind-your-account' | translate}}.\r\n        </div>\r\n        <input class=\"app-input row\" [placeholder]=\"'6-digit-code' | translate\" type=\"text\">\r\n        <button class=\"app-button row\" (click)=\"confirmCode(2)\">{{'confirm' | translate | uppercase}}</button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"step === 2\">\r\n        <div class=\"confirmation\">\r\n            <div class=\"success-message\">\r\n                {{'success' | translate}}!\r\n                <br>\r\n                <br>\r\n                {{'your-account-is-now-bound' | translate}}\r\n            </div>\r\n        </div>\r\n        <button class=\"app-button\">\r\n            {{'finished' | translate | uppercase}}\r\n        </button>\r\n        <div class=\"link extra-margin\">\r\n            {{'deposit' | translate | uppercase}}\r\n        </div>\r\n        <div class=\"link extra-margin\">\r\n            {{'play-now' | translate | uppercase}}\r\n        </div>\r\n    </ng-container>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/winning-history/winning-history.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/winning-history/winning-history.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountWinningHistoryWinningHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [title]=\"'winnings-history' | translate\"></app-account-header>\r\n<div class=\"winning-history history\">\r\n  <mat-tab-group animationDuration=\"0ms\">\r\n    <mat-tab [label]=\"'winnings-history' | translate\">\r\n      <div class=\"history-table\"\r\n        infiniteScroll\r\n        [infiniteScrollDistance]=\"1\"\r\n        [infiniteScrollThrottle]=\"50\"\r\n        (scrolled)=\"onRewardScroll()\"\r\n        [scrollWindow]=\"false\">\r\n          <ng-container *ngFor=\"let data of rewardHistory\">\r\n              <div class=\"tablerow\" [ngClass]=\"{isExpanded : data.isExpanded}\">\r\n                  <div class=\"itemrow\">\r\n                    <div>\r\n                    </div>\r\n                      <div class=\"ticket\">#{{data.ticket}}</div>\r\n                      <div class=\"date\">{{(data.time * 1000) | date: 'MM-dd-yyyy H:mm'}}</div>\r\n                      <div class=\"amount\">\r\n                          + {{data.prize | toNumber | number: '0.0-4'}} BTOK\r\n                      </div>\r\n                      <!-- <div class=\"icon\"><i *ngIf=\"!data.isExpanded\" class=\"icon-chevronright chevron-down\" (click)=\"data.isExpanded = true\"></i></div> -->\r\n                  </div>\r\n                  <!-- <div>\r\n                    <div class=\"address\">\r\n                        <div class=\"label\">\r\n                            {{'from'|translate}}:\r\n                        </div>\r\n                        <div class=\"value\">\r\n                              {{data.fromAddress}}\r\n                        </div>\r\n                        <div class=\"copy\">\r\n                            <i class=\"icon-documentcopy\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"address\">\r\n                          <div class=\"label\">\r\n                              {{'TXID'|translate}}:\r\n                          </div>\r\n                          <div class=\"value\">\r\n                              {{data.txid}}\r\n                          </div>\r\n                          <div class=\"copy\">\r\n                              <i class=\"icon-documentcopy\"></i>\r\n                          </div>\r\n                    </div>\r\n                  </div> -->\r\n                  <!-- <div class=\"closerow\">\r\n                      <div class=\"icon\">\r\n                          <i class=\"icon-chevronright chevron-up\" *ngIf=\"data.isExpanded\" (click)=\"data.isExpanded = false\"></i>\r\n                      </div>\r\n                  </div> -->\r\n            </div>\r\n        </ng-container>\r\n\r\n        <div class=\"no-futher-activity\">\r\n          <div *ngIf=\"!isLoadingReward\">\r\n              {{'no-further-activity' | translate}}\r\n          </div>\r\n          <mat-spinner diameter=\"42\" *ngIf=\"isLoadingReward\"></mat-spinner>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab [label]=\"'betting-history' | translate\">\r\n      <div class=\"history-table\"\r\n        infiniteScroll\r\n        [infiniteScrollDistance]=\"1\"\r\n        [infiniteScrollThrottle]=\"50\"\r\n        (scrolled)=\"onBetScroll()\"\r\n        [scrollWindow]=\"false\">\r\n          <ng-container *ngFor=\"let data of betHistory\">\r\n              <div class=\"tablerow\" [ngClass]=\"{isExpanded : data.isExpanded}\">\r\n                  <div class=\"itemrow\">\r\n                      <div class=\"ticket\">#{{data.start}} <ng-container *ngIf=\"data.end && data.end !== data.start\">- {{data.end}}</ng-container></div>\r\n                      <div class=\"date\">{{(data.time * 1000) | date: 'MM-dd-yyyy H:mm'}}</div>\r\n                      <div class=\"amount\">\r\n                          - {{data.cost | toNumber | number: '0.0-4'}} BTOK\r\n                      </div>\r\n                      <!-- <div class=\"icon\"><i *ngIf=\"!data.isExpanded\" class=\"icon-chevronright chevron-down\" (click)=\"data.isExpanded = true\"></i></div> -->\r\n                    </div>\r\n                  <!-- <div>\r\n                    <div class=\"address\">\r\n                        <div class=\"label\">\r\n                            {{'from'|translate}}:\r\n                        </div>\r\n                        <div class=\"value\">\r\n                              {{data.fromAddress}}\r\n                        </div>\r\n                        <div class=\"copy\">\r\n                            <i class=\"icon-documentcopy\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"address\">\r\n                          <div class=\"label\">\r\n                              {{'TXID'|translate}}:\r\n                          </div>\r\n                          <div class=\"value\">\r\n                              {{data.txid}}\r\n                          </div>\r\n                          <div class=\"copy\">\r\n                              <i class=\"icon-documentcopy\"></i>\r\n                          </div>\r\n                    </div>\r\n                  </div> -->\r\n                  <!-- <div class=\"closerow\">\r\n                      <div class=\"icon\">\r\n                          <i class=\"icon-chevronright chevron-up\" *ngIf=\"data.isExpanded\" (click)=\"data.isExpanded = false\"></i>\r\n                      </div>\r\n                  </div> -->\r\n            </div>\r\n        </ng-container>\r\n\r\n        <div class=\"no-futher-activity\">\r\n          <div *ngIf=\"!isLoadingBets\">\r\n              {{'no-further-activity' | translate}}\r\n          </div>\r\n          <mat-spinner diameter=\"42\" *ngIf=\"isLoadingBets\"></mat-spinner>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/withdraw/withdraw.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/withdraw/withdraw.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountWithdrawWithdrawComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [title]=\"'withdraw' | translate\"></app-account-header>\r\n<div class=\"withdraw\">\r\n    <div class=\"message\">\r\n        {{'withdraw-process-usually-takes-about-1-hour-or-less' | translate}}.\r\n    </div>\r\n    <div class=\"amount\">\r\n        <div class=\"available\">{{'available' | translate}}</div>\r\n        <div>{{authService.user.amountAvailable | toNumber | number : '0.0-4'}} BTOK</div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <input type=\"number\" step=\".0001\" [(ngModel)]=\"amount\" (ngModelChange)=\"updateAmount()\" (blur)=\"updateAmount()\" [placeholder]=\"'withdrawal-amount'|translate\" class=\"app-input\">\r\n    </div>\r\n    <!-- <div class=\"row\">\r\n        <div class=\"withdraw-address\">\r\n            <div *ngIf=\"!showIcon\" class=\"placeholder\">\r\n                {{'withdrawal-address' | translate}}...\r\n            </div>\r\n            <i *ngIf=\"!showIcon\" class=\"icon-qrcode\" (click)=\"showIcon = true\"></i>\r\n            <div *ngIf=\"showIcon\">\r\n                {{address || 'work-in-progress' | translate}}\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"row\">\r\n        <button [disabled]=\"isLoading\" class=\"app-button\" (click)=\"withdraw()\">{{'submit-withdrawal' | translate | uppercase}}</button>\r\n    </div>\r\n    <div class=\"message\">\r\n        {{message | translate}}\r\n    </div>\r\n    <!-- <div class=\"message\">\r\n        {{'please-confirm-your-withdrawal-address' | translate}}\r\n    </div> -->\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-container\">\r\n  <div class=\"main-content\">\r\n    <div class=\"animated-background\">\r\n        <app-animated-background *ngIf=\"isHome()\"></app-animated-background>\r\n    </div>  \r\n    <app-account-settings></app-account-settings>\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/account-header/account-header.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/account-header/account-header.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonAccountHeaderAccountHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"simpleReturn\" class=\"simple-return\">\r\n    <i class=\"icon-close\" (click)=\"navigateBack()\"></i>\r\n</div>\r\n<div  class=\"account-header\" *ngIf=\"!simpleReturn\">\r\n    <i class=\"icon-chevronleft\" (click)=\"navigateBack()\"></i>\r\n    <span class=\"title\">\r\n        {{title}}\r\n    </span>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-background/animated-background.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-background/animated-background.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonAnimatedBackgroundAnimatedBackgroundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"background-container\">\r\n    <svg [ngStyle]=\"{'width': width}\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 436.924 291.282\">\r\n        <defs>\r\n          <linearGradient id=\"linear-gradient\" x1=\"380.439\" y1=\"338.678\" x2=\"56.484\" y2=\"-47.396\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#26352a\"/>\r\n            <stop offset=\"1\" stop-color=\"#2923ac\"/>\r\n          </linearGradient>\r\n          <linearGradient id=\"linear-gradient-2\" x1=\"99.464\" y1=\"37.273\" x2=\"192.622\" y2=\"37.273\" gradientUnits=\"userSpaceOnUse\">\r\n            <stop offset=\"0\" stop-color=\"#289cc7\"/>\r\n            <stop offset=\"1\" stop-color=\"#2a42e3\"/>\r\n          </linearGradient>\r\n          <linearGradient id=\"linear-gradient-3\" x1=\"-29.545\" y1=\"134.468\" x2=\"103.353\" y2=\"134.468\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-4\" x1=\"-70.68\" y1=\"183.173\" x2=\"152.889\" y2=\"183.173\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-5\" x1=\"43.504\" y1=\"203.105\" x2=\"153.765\" y2=\"203.105\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-6\" x1=\"-57.121\" y1=\"296.434\" x2=\"75.777\" y2=\"296.434\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-7\" x1=\"174.139\" y1=\"110.41\" x2=\"247.117\" y2=\"110.41\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-8\" x1=\"94.117\" y1=\"210.612\" x2=\"317.687\" y2=\"210.612\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-9\" x1=\"287.366\" y1=\"28.83\" x2=\"361.222\" y2=\"28.83\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-10\" x1=\"326.25\" y1=\"46.842\" x2=\"447.368\" y2=\"46.842\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-11\" x1=\"347.406\" y1=\"142.543\" x2=\"468.524\" y2=\"142.543\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-12\" x1=\"392.869\" y1=\"55.202\" x2=\"452.602\" y2=\"55.202\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-13\" x1=\"335.684\" y1=\"106.903\" x2=\"407.681\" y2=\"106.903\" xlink:href=\"#linear-gradient-2\"/>\r\n          <linearGradient id=\"linear-gradient-14\" x1=\"415.528\" y1=\"61.707\" x2=\"536.646\" y2=\"61.707\" xlink:href=\"#linear-gradient-2\"/>\r\n        </defs>\r\n        <g id=\"bg-animation\">\r\n          <g>\r\n            <rect x=\"-112.028\" y=\"108.826\" width=\"173.062\" height=\"28.982\" rx=\"14.491\" transform=\"translate(-62.727 3.021) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"52.926\" y=\"47.475\" width=\"65.626\" height=\"28.982\" rx=\"14.491\" transform=\"translate(-19.265 49.113) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <g>\r\n            <rect x=\"150.075\" y=\"138.811\" width=\"69.709\" height=\"14.571\" rx=\"7.285\" transform=\"translate(-47.561 107.48) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"216.518\" y=\"114.099\" width=\"26.434\" height=\"14.571\" rx=\"7.285\" transform=\"translate(-30.055 126.045) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <g>\r\n            <rect x=\"-56.693\" y=\"254.321\" width=\"69.709\" height=\"14.571\" rx=\"7.285\" transform=\"translate(-129.059 21.984) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"9.75\" y=\"229.609\" width=\"26.434\" height=\"14.571\" rx=\"7.285\" transform=\"translate(-111.553 40.55) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <g>\r\n            <rect x=\"180.855\" y=\"236.656\" width=\"113.413\" height=\"21.156\" rx=\"10.578\" transform=\"translate(-89.861 145.475) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"288.954\" y=\"196.452\" width=\"43.006\" height=\"21.156\" rx=\"10.578\" transform=\"translate(-61.379 175.68) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <g>\r\n            <rect x=\"11.311\" y=\"61.659\" width=\"10.995\" height=\"5.409\" rx=\"2.704\" transform=\"translate(-28.994 16.121) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"21.659\" y=\"55.952\" width=\"10.995\" height=\"5.409\" rx=\"2.704\" transform=\"translate(-24.951 20.409) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"32.007\" y=\"50.245\" width=\"10.995\" height=\"5.409\" rx=\"2.704\" transform=\"translate(-20.908 24.697) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"42.354\" y=\"44.538\" width=\"10.995\" height=\"5.409\" rx=\"2.704\" transform=\"translate(-16.865 28.985) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <path d=\"M68.963,122.843-111.853,222.57a6.766,6.766,0,0,1-9.192-2.657h0a6.767,6.767,0,0,1,2.657-9.193L62.428,110.994a6.766,6.766,0,0,1,9.192,2.657h0A6.765,6.765,0,0,1,68.963,122.843Z\" fill=\"#233d1e\"/>\r\n          <path d=\"M150.582,77.828l-61.21,33.759a6.765,6.765,0,0,1-9.192-2.657h0a6.765,6.765,0,0,1,2.657-9.192l61.21-33.76a6.766,6.766,0,0,1,9.192,2.657h0A6.767,6.767,0,0,1,150.582,77.828Z\" fill=\"#233d1e\"/>\r\n          <path d=\"M212.2,69.648,161.166,97.8a1.911,1.911,0,0,1-2.595-.75h0a1.911,1.911,0,0,1,.75-2.595L210.359,66.3a1.909,1.909,0,0,1,2.595.75h0A1.909,1.909,0,0,1,212.2,69.648Z\" fill=\"#233d1e\"/>\r\n          <path d=\"M235.242,56.942l-17.277,9.529a1.909,1.909,0,0,1-2.595-.75h0a1.911,1.911,0,0,1,.75-2.6L233.4,53.6a1.911,1.911,0,0,1,2.595.75h0A1.909,1.909,0,0,1,235.242,56.942Z\" fill=\"#233d1e\"/>\r\n          <g>\r\n            <rect x=\"60.997\" y=\"131.827\" width=\"62.106\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-53.142 61.086) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"120.192\" y=\"109.811\" width=\"23.551\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-37.545 77.627) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <g>\r\n            <rect x=\"219.992\" y=\"216.172\" width=\"62.106\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-74.105 148.361) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"279.188\" y=\"194.156\" width=\"23.551\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-58.508 164.902) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <g>\r\n            <rect x=\"184.531\" y=\"161.448\" width=\"62.106\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-52.086 124.43) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"243.727\" y=\"139.432\" width=\"23.551\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-36.489 140.971) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <g>\r\n            <rect x=\"51.701\" y=\"234.709\" width=\"62.106\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-103.985 69.39) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"110.896\" y=\"212.692\" width=\"23.551\" height=\"3.82\" rx=\"1.91\" transform=\"translate(-88.388 85.931) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <path d=\"M75.267,42.966,24.229,71.115a1.909,1.909,0,0,1-2.594-.75h0a1.909,1.909,0,0,1,.75-2.595L73.423,39.621a1.909,1.909,0,0,1,2.594.75h0A1.909,1.909,0,0,1,75.267,42.966Z\" fill=\"#233d1e\"/>\r\n          <path d=\"M98.305,30.259,81.028,39.788a1.909,1.909,0,0,1-2.595-.75h0a1.91,1.91,0,0,1,.75-2.594l17.278-9.529a1.908,1.908,0,0,1,2.594.75h0A1.908,1.908,0,0,1,98.305,30.259Z\" fill=\"#233d1e\"/>\r\n          <path d=\"M192.329,12.585a2.354,2.354,0,0,1-.925,3.2l-10.031,5.533a2.355,2.355,0,1,0,2.274,4.124l4.286-2.364a2.355,2.355,0,1,1,2.275,4.124L114.116,69.169a2.355,2.355,0,0,1-2.274-4.124l10.839-5.979,1.525-.841L169.213,33.4a2.355,2.355,0,1,0-2.274-4.124L121.932,54.1a2.355,2.355,0,0,1-2.275-4.124l8.785-4.845,4.031-2.223a2.355,2.355,0,1,0-2.274-4.124l-4.032,2.223L113.7,47.883l-5,2.758a2.355,2.355,0,0,1-2.275-4.124l5-2.758,12.464-6.875,4.031-2.223a2.355,2.355,0,1,0-2.274-4.124l-4.032,2.223a2.355,2.355,0,0,1-2.274-4.124l47.377-26.13A2.355,2.355,0,0,1,169,6.63l-8.93,4.925-.682.376a2.448,2.448,0,0,1,.358-.157,2.352,2.352,0,0,0,2.241,4.063,2.352,2.352,0,0,1-.324.218l.681-.376,4.38-2.415a2.355,2.355,0,1,1,2.274,4.124L157.908,23.5,153.5,25.933a2.355,2.355,0,0,1-2.275-4.124l2.7-1.491,1.7-.94a2.355,2.355,0,0,0-2.274-4.124l-1.7.94-13.541,7.468-1.251.69a2.355,2.355,0,0,0,2.274,4.124l1.252-.69,3.493-1.926a2.355,2.355,0,1,1,2.274,4.124l-3.493,1.926-1.251.69a2.355,2.355,0,0,0,2.274,4.124l1.252-.69,15.244-8.408L189.13,11.66A2.354,2.354,0,0,1,192.329,12.585Zm-20.808-1.969a2.355,2.355,0,1,0,3.2.924A2.354,2.354,0,0,0,171.521,10.616Zm-64.885,57.3a2.355,2.355,0,1,0,3.2.924A2.354,2.354,0,0,0,106.636,67.916Zm-3.68-14.106a2.355,2.355,0,1,0-3.2-.925A2.355,2.355,0,0,0,102.956,53.81ZM178.6,12.091a2.355,2.355,0,1,0-3.2-.924A2.354,2.354,0,0,0,178.6,12.091Z\" fill=\"url(#linear-gradient-2)\"/>\r\n          <path d=\"M102.473,105.038a7.063,7.063,0,0,1-2.773,9.595L-5.244,172.513a7.063,7.063,0,0,1-9.6-2.773,7.062,7.062,0,0,1,2.774-9.595L7.994,149.081l7.614-4.2a7.062,7.062,0,0,0-6.822-12.368l-7.613,4.2a7.062,7.062,0,0,1-9.6-2.773,7.062,7.062,0,0,1,2.773-9.595l35.316-19.478a7.062,7.062,0,1,1,6.822,12.368l-9.14,5.041a7.062,7.062,0,1,0,6.821,12.368l9.14-5.041,26.176-14.437,23.392-12.9A7.063,7.063,0,0,1,102.473,105.038Zm-51.282,4.088a7.062,7.062,0,1,0-9.6-2.773A7.062,7.062,0,0,0,51.191,109.126Zm14.435-7.962a7.062,7.062,0,1,0-9.594-2.773A7.062,7.062,0,0,0,65.626,101.164Zm-91.518,66.607a7.063,7.063,0,0,0-2.774,9.6,7.063,7.063,0,0,0,9.595,2.773,7.063,7.063,0,0,0,2.774-9.595A7.063,7.063,0,0,0-25.892,167.771Z\" fill=\"url(#linear-gradient-3)\"/>\r\n          <path d=\"M152.45,113.7a3.53,3.53,0,0,1-1.387,4.8L95.52,149.128,38.446,180.607l-6.775,3.737a3.53,3.53,0,0,0-1.387,4.8h0a3.531,3.531,0,0,0,4.8,1.387l6.774-3.737,36.752-20.27a3.531,3.531,0,1,1,3.411,6.184L-65.443,254.036a3.531,3.531,0,0,1-4.8-1.387,3.53,3.53,0,0,1,1.387-4.8L-39.4,231.6l31.361-17.3,32.489-17.919a3.531,3.531,0,0,0,1.387-4.8h0a3.531,3.531,0,0,0-4.8-1.387l-32.489,17.919-4.032,2.224a3.53,3.53,0,0,1-4.8-1.387,3.531,3.531,0,0,1,1.386-4.8l7.689-4.241,2.2-1.212a3.53,3.53,0,0,0,1.387-4.8,3.531,3.531,0,0,0-4.8-1.387l-2.2,1.212-50.275,27.728a3.531,3.531,0,0,1-4.8-1.386,3.531,3.531,0,0,1,1.387-4.8L42.831,153.992a3.531,3.531,0,1,1,3.411,6.184l-6.594,3.637-3.292,1.816a3.531,3.531,0,0,0,3.411,6.184L43.059,170l60.558-33.4,44.035-24.288A3.531,3.531,0,0,1,152.45,113.7ZM53.311,156.278a3.531,3.531,0,1,0-4.8-1.387A3.531,3.531,0,0,0,53.311,156.278Zm32.737,6.14a3.531,3.531,0,1,0,4.8,1.387A3.531,3.531,0,0,0,86.048,162.418Zm7.722-4.259a3.531,3.531,0,1,0,4.8,1.386A3.531,3.531,0,0,0,93.77,158.159ZM-21.751,209.775a3.53,3.53,0,0,0-4.8-1.387,3.531,3.531,0,0,0-1.387,4.8,3.532,3.532,0,0,0,4.8,1.386A3.531,3.531,0,0,0-21.751,209.775Z\" fill=\"url(#linear-gradient-4)\"/>\r\n          <path d=\"M153.417,173.886a2.786,2.786,0,0,1-1.094,3.786l-11.873,6.549a2.787,2.787,0,1,0,2.692,4.881l5.073-2.8a2.787,2.787,0,0,1,2.692,4.881l-90.06,49.671a2.787,2.787,0,1,1-2.692-4.881L70.984,228.9l1.805-1,53.269-29.38a2.787,2.787,0,1,0-2.692-4.881L70.1,223.023a2.787,2.787,0,0,1-2.692-4.881l10.4-5.735,4.772-2.631a2.787,2.787,0,0,0-2.692-4.881l-4.772,2.631-14.752,8.137-5.92,3.265a2.787,2.787,0,0,1-2.692-4.881l5.919-3.265,14.753-8.137,4.772-2.631a2.787,2.787,0,0,0-2.692-4.881l-4.772,2.631a2.787,2.787,0,1,1-2.692-4.881l56.074-30.927a2.787,2.787,0,1,1,2.692,4.881l-10.57,5.83-.806.445a2.679,2.679,0,0,1,.423-.186,2.783,2.783,0,0,0,2.652,4.808,2.764,2.764,0,0,1-.383.259l.806-.445,5.184-2.859a2.787,2.787,0,0,1,2.692,4.881l-13.121,7.237-5.217,2.877a2.787,2.787,0,1,1-2.692-4.881l3.2-1.765,2.017-1.112a2.787,2.787,0,1,0-2.692-4.881l-2.017,1.112L89.25,187l-1.481.817a2.787,2.787,0,0,0,2.692,4.881l1.481-.817,4.134-2.28a2.787,2.787,0,1,1,2.692,4.881l-4.134,2.28-1.481.817a2.787,2.787,0,0,0,2.692,4.881l1.481-.817,18.043-9.951,34.262-18.9A2.787,2.787,0,0,1,153.417,173.886Zm-24.628-2.331a2.787,2.787,0,1,0,3.787,1.094A2.786,2.786,0,0,0,128.789,171.555Zm-76.8,67.819a2.787,2.787,0,1,0,3.787,1.094A2.786,2.786,0,0,0,51.993,239.374Zm-4.355-16.7a2.787,2.787,0,1,0-3.787-1.094A2.786,2.786,0,0,0,47.638,222.678ZM137.165,173.3a2.787,2.787,0,1,0-3.787-1.094A2.788,2.788,0,0,0,137.165,173.3Z\" fill=\"url(#linear-gradient-5)\"/>\r\n          <path d=\"M74.9,267.005a7.062,7.062,0,0,1-2.774,9.594L-32.819,334.48a7.063,7.063,0,0,1-9.595-2.774,7.063,7.063,0,0,1,2.773-9.6l20.06-11.063,7.613-4.2a7.063,7.063,0,0,0,2.774-9.595,7.063,7.063,0,0,0-9.6-2.774l-7.614,4.2A7.063,7.063,0,0,1-36,295.906a7.063,7.063,0,0,1,2.774-9.6L2.092,266.833A7.063,7.063,0,0,1,8.913,279.2l-9.14,5.041A7.062,7.062,0,0,0,6.6,296.611l9.14-5.041,26.176-14.437,23.392-12.9A7.062,7.062,0,0,1,74.9,267.005Zm-51.283,4.088a7.062,7.062,0,1,0-9.594-2.774A7.063,7.063,0,0,0,23.615,271.093Zm14.436-7.962a7.062,7.062,0,1,0-9.6-2.773A7.062,7.062,0,0,0,38.051,263.131Zm-91.519,66.606a7.063,7.063,0,0,0-2.773,9.595,7.063,7.063,0,0,0,9.595,2.774,7.063,7.063,0,0,0,2.773-9.595A7.062,7.062,0,0,0-53.468,329.737Z\" fill=\"url(#linear-gradient-6)\"/>\r\n          <path d=\"M246.634,94.249a3.878,3.878,0,0,1-1.523,5.269L187.483,131.3a3.878,3.878,0,0,1-3.746-6.792l11.016-6.076,4.181-2.306a3.878,3.878,0,1,0-3.746-6.791l-4.181,2.306a3.878,3.878,0,0,1-3.746-6.792l19.393-10.7a3.878,3.878,0,1,1,3.746,6.792l-5.019,2.768a3.878,3.878,0,1,0,3.746,6.792l5.019-2.769,14.374-7.927,12.845-7.085A3.877,3.877,0,0,1,246.634,94.249Zm-28.161,2.245a3.878,3.878,0,1,0-5.268-1.523A3.878,3.878,0,0,0,218.473,96.494Zm7.928-4.372a3.878,3.878,0,1,0-5.269-1.523A3.879,3.879,0,0,0,226.4,92.122ZM176.145,128.7a3.878,3.878,0,1,0,5.269,1.523A3.878,3.878,0,0,0,176.145,128.7Z\" fill=\"url(#linear-gradient-7)\"/>\r\n          <path d=\"M317.247,141.136a3.531,3.531,0,0,1-1.387,4.8l-55.542,30.634-57.075,31.479-6.775,3.736a3.531,3.531,0,0,0-1.387,4.8h0a3.531,3.531,0,0,0,4.8,1.387l6.774-3.736,36.752-20.27a3.531,3.531,0,1,1,3.411,6.184L99.355,281.475a3.531,3.531,0,1,1-3.411-6.184L125.4,259.044l31.36-17.3,32.489-17.919a3.531,3.531,0,0,0,1.387-4.8h0a3.531,3.531,0,0,0-4.8-1.386l-32.489,17.918-4.032,2.224a3.531,3.531,0,1,1-3.41-6.184l7.688-4.24,2.2-1.212a3.531,3.531,0,1,0-3.411-6.184l-2.2,1.212L99.912,248.907a3.531,3.531,0,1,1-3.411-6.184l111.128-61.291a3.531,3.531,0,1,1,3.41,6.184l-6.593,3.637-3.292,1.815a3.531,3.531,0,1,0,3.41,6.184l3.292-1.815,60.558-33.4,44.035-24.287A3.532,3.532,0,0,1,317.247,141.136Zm-99.139,42.581a3.531,3.531,0,1,0-4.8-1.386A3.531,3.531,0,0,0,218.108,183.717Zm32.737,6.14a3.531,3.531,0,1,0,4.8,1.387A3.532,3.532,0,0,0,250.845,189.857Zm7.723-4.259a3.531,3.531,0,1,0,4.8,1.387A3.531,3.531,0,0,0,258.568,185.6ZM143.047,237.214a3.531,3.531,0,1,0-1.387,4.8A3.532,3.532,0,0,0,143.047,237.214Z\" fill=\"url(#linear-gradient-8)\"/>\r\n          <path d=\"M388.693,2.441l-68.348,37.7a7.852,7.852,0,0,1-10.666-3.083h0a7.851,7.851,0,0,1,3.083-10.666l68.348-37.7a7.851,7.851,0,0,1,10.666,3.082h0A7.85,7.85,0,0,1,388.693,2.441Z\" fill=\"#233d1e\"/>\r\n          <g>\r\n            <rect x=\"329.083\" y=\"87.207\" width=\"37.765\" height=\"7.894\" rx=\"3.947\" transform=\"translate(-0.752 179.385) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"365.078\" y=\"73.819\" width=\"14.32\" height=\"7.894\" rx=\"3.947\" transform=\"translate(8.732 189.443) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <path d=\"M339.326-.54,313.169,13.886a3.947,3.947,0,0,1-5.362-1.549h0a3.947,3.947,0,0,1,1.55-5.363L335.513-7.452a3.947,3.947,0,0,1,5.362,1.55h0A3.946,3.946,0,0,1,339.326-.54Z\" fill=\"#233d1e\"/>\r\n          <g>\r\n            <rect x=\"424.758\" y=\"27.812\" width=\"5.957\" height=\"2.93\" rx=\"1.465\" transform=\"matrix(0.876, -0.483, 0.483, 0.876, 39.051, 210.216)\" fill=\"#233d1e\"/>\r\n            <rect x=\"430.364\" y=\"24.72\" width=\"5.957\" height=\"2.93\" rx=\"1.465\" transform=\"translate(41.241 212.539) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"435.97\" y=\"21.628\" width=\"5.957\" height=\"2.93\" rx=\"1.465\" transform=\"translate(43.431 214.862) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <path d=\"M401.9,14.159,303.945,68.185a3.665,3.665,0,0,1-4.98-1.44h0a3.666,3.666,0,0,1,1.439-4.98L398.36,7.739a3.665,3.665,0,0,1,4.98,1.44h0A3.665,3.665,0,0,1,401.9,14.159Z\" fill=\"#233d1e\"/>\r\n          <path d=\"M446.118-10.229,412.958,8.06a3.665,3.665,0,0,1-4.98-1.439h0a3.665,3.665,0,0,1,1.439-4.98l33.16-18.289a3.666,3.666,0,0,1,4.98,1.439h0A3.665,3.665,0,0,1,446.118-10.229Z\" fill=\"#233d1e\"/>\r\n          <g>\r\n            <rect x=\"389.384\" y=\"76.507\" width=\"33.645\" height=\"2.069\" rx=\"1.035\" transform=\"translate(13.064 205.821) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"421.453\" y=\"64.579\" width=\"12.758\" height=\"2.069\" rx=\"1.035\" transform=\"translate(21.514 214.781) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <g>\r\n            <rect x=\"368.125\" y=\"129.656\" width=\"33.645\" height=\"2.069\" rx=\"1.035\" transform=\"translate(-15.248 202.163) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n            <rect x=\"400.194\" y=\"117.728\" width=\"12.758\" height=\"2.069\" rx=\"1.035\" transform=\"translate(-6.798 211.123) rotate(-28.878)\" fill=\"#233d1e\"/>\r\n          </g>\r\n          <path d=\"M360.989,9.258a1.866,1.866,0,0,1-.733,2.536L352.3,16.181a1.867,1.867,0,0,0,1.8,3.269l3.4-1.874a1.867,1.867,0,1,1,1.8,3.269L298.983,54.117a1.867,1.867,0,1,1-1.8-3.27l8.593-4.739,1.209-.667,35.681-19.68a1.867,1.867,0,1,0-1.8-3.269L305.179,42.171a1.867,1.867,0,0,1-1.8-3.269l6.964-3.841,3.2-1.763a1.867,1.867,0,0,0-1.8-3.27l-3.2,1.763-9.882,5.45-3.965,2.187a1.867,1.867,0,0,1-1.8-3.269l3.965-2.187,9.882-5.45,3.2-1.763a1.867,1.867,0,1,0-1.8-3.269l-3.2,1.762a1.867,1.867,0,0,1-1.8-3.269l37.56-20.716a1.867,1.867,0,0,1,1.8,3.27l-7.08,3.905-.54.3a1.862,1.862,0,0,1,.283-.125,1.865,1.865,0,0,0,1.777,3.221,1.924,1.924,0,0,1-.257.173l.541-.3L340.685,9.8a1.867,1.867,0,1,1,1.8,3.27L333.7,17.913l-3.494,1.927a1.867,1.867,0,1,1-1.8-3.269l2.144-1.183,1.351-.745a1.867,1.867,0,1,0-1.8-3.269l-1.351.745-10.735,5.92-.992.548a1.867,1.867,0,0,0,1.8,3.269l.992-.547,2.769-1.527a1.867,1.867,0,1,1,1.8,3.269l-2.769,1.527-.992.548a1.867,1.867,0,1,0,1.8,3.269l.992-.547L335.5,21.182,358.453,8.525A1.866,1.866,0,0,1,360.989,9.258ZM344.492,7.7a1.867,1.867,0,1,0,2.537.733A1.866,1.866,0,0,0,344.492,7.7Zm-51.44,45.426a1.867,1.867,0,1,0,2.537.733A1.868,1.868,0,0,0,293.052,53.123ZM290.135,41.94a1.867,1.867,0,1,0-2.536-.733A1.866,1.866,0,0,0,290.135,41.94ZM350.1,8.866a1.867,1.867,0,1,0-2.536-.733A1.867,1.867,0,0,0,350.1,8.866Z\" fill=\"url(#linear-gradient-9)\"/>\r\n          <path d=\"M447.13,9.2a1.914,1.914,0,0,1-.752,2.6l-30.09,16.6-30.92,17.054-3.67,2.024a1.913,1.913,0,0,0-.751,2.6h0a1.913,1.913,0,0,0,2.6.751l3.67-2.024,19.91-10.981a1.913,1.913,0,1,1,1.848,3.35l-79.887,44.06a1.913,1.913,0,1,1-1.847-3.35l15.958-8.8,16.99-9.37L377.788,54a1.913,1.913,0,0,0,.752-2.6h0a1.913,1.913,0,0,0-2.6-.752l-17.6,9.708-2.184,1.2a1.913,1.913,0,0,1-1.848-3.351l4.165-2.3,1.19-.656a1.913,1.913,0,0,0-1.848-3.351l-1.19.657L329.389,67.588a1.913,1.913,0,0,1-1.848-3.351l60.2-33.2a1.913,1.913,0,0,1,1.848,3.351l-3.572,1.97-1.783.983a1.913,1.913,0,1,0,1.847,3.351l1.784-.984L420.674,21.61,444.531,8.452A1.913,1.913,0,0,1,447.13,9.2ZM393.421,32.272a1.913,1.913,0,1,0-2.6-.752A1.914,1.914,0,0,0,393.421,32.272ZM411.157,35.6a1.913,1.913,0,1,0,2.6.751A1.914,1.914,0,0,0,411.157,35.6Zm4.183-2.308a1.913,1.913,0,1,0,2.6.752A1.913,1.913,0,0,0,415.34,33.29ZM352.757,61.253a1.913,1.913,0,1,0-.751,2.6A1.913,1.913,0,0,0,352.757,61.253Z\" fill=\"url(#linear-gradient-10)\"/>\r\n          <path d=\"M468.286,104.905a1.913,1.913,0,0,1-.752,2.6l-30.09,16.6-30.92,17.054-3.67,2.024a1.913,1.913,0,0,0-.751,2.6h0a1.912,1.912,0,0,0,2.6.751l3.67-2.024,19.91-10.981a1.913,1.913,0,1,1,1.848,3.35l-79.886,44.061a1.913,1.913,0,0,1-1.848-3.351l15.958-8.8,16.99-9.371,17.6-9.707a1.913,1.913,0,0,0,.751-2.6h0a1.912,1.912,0,0,0-2.6-.751l-17.6,9.707-2.184,1.2a1.913,1.913,0,1,1-1.848-3.35l4.165-2.3,1.19-.656a1.913,1.913,0,1,0-1.847-3.35l-1.191.656-27.236,15.022a1.913,1.913,0,1,1-1.847-3.35l60.2-33.2a1.913,1.913,0,1,1,1.848,3.35l-3.572,1.97-1.783.984a1.913,1.913,0,1,0,1.847,3.35l1.784-.984,32.807-18.094,23.856-13.157A1.913,1.913,0,0,1,468.286,104.905Zm-53.709,23.068a1.913,1.913,0,1,0-2.6-.751A1.913,1.913,0,0,0,414.577,127.973Zm17.736,3.326a1.913,1.913,0,1,0,2.6.751A1.912,1.912,0,0,0,432.313,131.3Zm4.183-2.307a1.913,1.913,0,1,0,2.6.751A1.913,1.913,0,0,0,436.5,128.992Zm-62.583,27.962a1.913,1.913,0,1,0-.751,2.6A1.913,1.913,0,0,0,373.913,156.954Z\" fill=\"url(#linear-gradient-11)\"/>\r\n          <path d=\"M452.414,39.372a1.51,1.51,0,0,1-.593,2.052l-6.432,3.547a1.51,1.51,0,1,0,1.459,2.645L449.6,46.1a1.51,1.51,0,0,1,1.458,2.644l-48.789,26.91a1.51,1.51,0,1,1-1.459-2.645l6.95-3.833.978-.539L437.593,52.72a1.51,1.51,0,0,0-1.459-2.644L407.276,65.992a1.51,1.51,0,1,1-1.458-2.644l5.632-3.107,2.585-1.425a1.51,1.51,0,0,0-1.458-2.645L409.992,57.6,402,62.005l-3.207,1.769a1.51,1.51,0,1,1-1.459-2.645l3.207-1.768,7.992-4.408,2.585-1.426a1.51,1.51,0,0,0-1.458-2.644l-2.585,1.426a1.51,1.51,0,0,1-1.458-2.645L435.994,32.91a1.51,1.51,0,1,1,1.459,2.644l-5.726,3.158-.437.241a1.548,1.548,0,0,1,.229-.1,1.508,1.508,0,0,0,1.437,2.605,1.518,1.518,0,0,1-.208.141l.437-.241,2.808-1.549a1.51,1.51,0,0,1,1.458,2.644l-7.107,3.92-2.827,1.559a1.51,1.51,0,1,1-1.458-2.644l1.733-.956,1.093-.6a1.51,1.51,0,0,0-1.458-2.644l-1.093.6-8.682,4.789-.8.442a1.51,1.51,0,0,0,1.458,2.645l.8-.443,2.24-1.235a1.51,1.51,0,0,1,1.458,2.644l-2.239,1.235-.8.443a1.51,1.51,0,0,0,1.459,2.644l.8-.442,9.775-5.391L450.363,38.78A1.509,1.509,0,0,1,452.414,39.372ZM439.072,38.11a1.51,1.51,0,1,0,2.051.593A1.509,1.509,0,0,0,439.072,38.11Zm-41.6,36.74a1.51,1.51,0,1,0,2.052.593A1.511,1.511,0,0,0,397.468,74.85Zm-2.359-9.044a1.51,1.51,0,1,0-2.052-.593A1.512,1.512,0,0,0,395.109,65.806Zm48.5-26.75a1.51,1.51,0,1,0-2.051-.593A1.51,1.51,0,0,0,443.609,39.056Z\" fill=\"url(#linear-gradient-12)\"/>\r\n          <path d=\"M407.2,90.96a3.826,3.826,0,0,1-1.5,5.2l-56.853,31.356a3.826,3.826,0,0,1-3.7-6.7l10.868-5.994,4.124-2.275a3.826,3.826,0,1,0-3.695-6.7l-4.125,2.275a3.826,3.826,0,1,1-3.695-6.7l19.132-10.552a3.826,3.826,0,0,1,3.695,6.7l-4.951,2.731a3.826,3.826,0,1,0,3.7,6.7l4.952-2.731,14.181-7.821,12.672-6.99A3.827,3.827,0,0,1,407.2,90.96Zm-27.782,2.215a3.826,3.826,0,1,0-5.2-1.5A3.827,3.827,0,0,0,379.422,93.175Zm7.821-4.314a3.826,3.826,0,1,0-5.2-1.5A3.825,3.825,0,0,0,387.243,88.861Zm-49.58,36.084a3.826,3.826,0,1,0,5.2,1.5A3.826,3.826,0,0,0,337.663,124.945Z\" fill=\"url(#linear-gradient-13)\"/>\r\n          <path d=\"M536.408,24.069a1.913,1.913,0,0,1-.752,2.6l-30.09,16.6-30.92,17.054-3.67,2.024a1.913,1.913,0,0,0-.751,2.6h0a1.912,1.912,0,0,0,2.6.751l3.67-2.024L496.4,52.686a1.913,1.913,0,1,1,1.848,3.35L418.365,100.1a1.913,1.913,0,0,1-1.847-3.351l15.958-8.8,16.99-9.371,17.6-9.707a1.913,1.913,0,0,0,.751-2.6h0a1.912,1.912,0,0,0-2.6-.751l-17.6,9.707-2.184,1.2a1.913,1.913,0,0,1-1.848-3.35l4.165-2.3,1.19-.656a1.913,1.913,0,1,0-1.847-3.35l-1.191.656L418.667,82.453a1.913,1.913,0,0,1-1.848-3.35l60.2-33.2a1.913,1.913,0,1,1,1.848,3.35l-3.572,1.97-1.783.983a1.913,1.913,0,1,0,1.847,3.351l1.784-.984,32.807-18.094,23.856-13.158A1.914,1.914,0,0,1,536.408,24.069ZM482.7,47.137a1.913,1.913,0,1,0-2.6-.751A1.913,1.913,0,0,0,482.7,47.137Zm17.736,3.326a1.913,1.913,0,1,0,2.6.751A1.912,1.912,0,0,0,500.435,50.463Zm4.183-2.307a1.913,1.913,0,1,0,2.6.751A1.913,1.913,0,0,0,504.618,48.156ZM442.035,76.118a1.913,1.913,0,1,0-.751,2.6A1.913,1.913,0,0,0,442.035,76.118Z\" fill=\"url(#linear-gradient-14)\"/>\r\n          <path d=\"M148.516,96.3l-.489-.895L263.289,32.427l.488.9Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M85.072,96.3l-.488-.895L199.846,32.427l.488.9Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M202.011,300.285l-.488-.9,115.262-62.977.488.895Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M260.3,276.455l-.489-.895,115.262-62.977.489.894Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M72.259,251.393l-.489-.9,115.262-62.977.489.9Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M45.966,197.6l-.489-.9,115.262-62.977.489.894Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M231.958,137.776l-.489-.9,45.665-24.951.489.895Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M64.591,37.871l-.489-.9,45.665-24.951.489.895Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M410.05,158.251l-.489-.9,45.665-24.95.489.894Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M275.189,16.908l-.489-.895,45.665-24.95.489.894Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M284.93,15.372l-.489-.895,45.665-24.95.489.894Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M296.538,75.934l-.489-.895,45.665-24.951.489.895Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M366.782,120.177l-.489-.894,45.665-24.951.489.9Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M337.68,163.805l-.489-.894,55.262-30.195.489.895Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M409.537,44.822l-.489-.9L464.31,13.732l.489.9Z\" fill=\"#a235c8\"/>\r\n          <path d=\"M-58.88,84.276l-.488-.895L55.893,20.4l.489.895Z\" fill=\"#a235c8\"/>\r\n        </g>\r\n      </svg>\r\n</div>\r\n\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-candies/animated-candies.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-candies/animated-candies.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonAnimatedCandiesAnimatedCandiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<svg id=\"candies-animation\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\r\n  <g id=\"candies\" style=\"opacity: 0\">\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M423.84,781.14c-3.71,4.26-4.29,9.82-1.3,12.43l0,0L417,800l-58.78-51.26,5.57-6.39c3,2.61,8.41,1.27,12.12-3s4.3-9.81,1.31-12.42l5.74-6.58,58.78,51.26L436,778.21l0-.05C433,775.55,427.55,776.89,423.84,781.14Z\" fill=\"#ffcd05\"/>\r\n  </g>\r\n</svg>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-coins/animated-coins.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-coins/animated-coins.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonAnimatedCoinsAnimatedCoinsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<svg id=\"coins-animation\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\r\n  <g id=\"coins-parts\" style=\"opacity: 0;\">\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n    <g>\r\n      <circle cx=\"400\" cy=\"784.53\" r=\"30\" fill=\"#ffde17\"/>\r\n    </g>\r\n  </g>\r\n</svg>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-confetti/animated-confetti.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-confetti/animated-confetti.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonAnimatedConfettiAnimatedConfettiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<svg id=\"candies-animation\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\r\n  <g id=\"candies-group\">\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n    <path d=\"M435.33,780.47a6.4,6.4,0,0,1-1.54,4.18,6.37,6.37,0,0,1,1.54,4.17,6.45,6.45,0,0,1-6.44,6.44,6.38,6.38,0,0,1-2.79-.64,81,81,0,0,1-9.05-4.63,19.53,19.53,0,0,1-34.1,0,81,81,0,0,1-9.05,4.63,6.38,6.38,0,0,1-2.79.64,6.45,6.45,0,0,1-6.44-6.44,6.37,6.37,0,0,1,1.54-4.17,6.43,6.43,0,0,1,0-8.35,6.37,6.37,0,0,1-1.54-4.17,6.45,6.45,0,0,1,6.44-6.44,6.24,6.24,0,0,1,2.79.64A81.93,81.93,0,0,1,383,771a19.53,19.53,0,0,1,34.1,0,81.93,81.93,0,0,1,9.05-4.63,6.24,6.24,0,0,1,2.79-.64,6.45,6.45,0,0,1,6.44,6.44,6.37,6.37,0,0,1-1.54,4.17A6.39,6.39,0,0,1,435.33,780.47Z\" fill=\"#ffcd05\"/>\r\n  </g>\r\n</svg>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-question/animated-question.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-question/animated-question.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonAnimatedQuestionAnimatedQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <svg id=\"questionmark-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25.62 24.99\">\r\n    <g id=\"circles-around\">\r\n      <circle cx=\"10.27\" cy=\"0.92\" r=\"0.5\" fill=\"#ff0060\" style=\"transform-origin: 10.27px 0.92px;\"></circle>\r\n      <circle cx=\"2.83\" cy=\"6.1\" r=\"0.5\" fill=\"#00c0ff\" style=\"transform-origin: 2.83px 6.1px;\"></circle>\r\n      <circle cx=\"1.23\" cy=\"15.03\" r=\"0.5\" fill=\"#9000ff\" style=\"transform-origin: 1.23px 15.03px;\"></circle>\r\n      <circle cx=\"6.42\" cy=\"22.47\" r=\"0.5\" fill=\"#ffb400\" style=\"transform-origin: 6.42px 22.47px;\"></circle>\r\n      <circle cx=\"15.35\" cy=\"24.07\" r=\"0.5\" fill=\"#9000ff\" style=\"transform-origin: 15.35px 24.07px;\"></circle>\r\n      <circle cx=\"22.79\" cy=\"18.88\" r=\"0.5\" fill=\"#00c0ff\" style=\"transform-origin: 22.79px 18.88px;\"></circle>\r\n      <circle cx=\"24.39\" cy=\"9.96\" r=\"0.5\" fill=\"#ff0060\" style=\"transform-origin: 24.39px 9.96px;\"></circle>\r\n      <circle cx=\"19.2\" cy=\"2.51\" r=\"0.5\" fill=\"#ffb400\" style=\"transform-origin: 19.2px 2.51px;\"></circle>\r\n    </g>\r\n    <g id=\"circles-around-2\">\r\n      <circle cx=\"19.05\" cy=\"5.16\" r=\"0.41\" fill=\"#9000ff\" style=\"transform-origin: 19.05px 5.16px;\"></circle>\r\n      <circle cx=\"12.03\" cy=\"2.9\" r=\"0.41\" fill=\"#00c0ff\" style=\"transform-origin: 12.03px 2.9px;\"></circle>\r\n      <circle cx=\"5.47\" cy=\"6.26\" r=\"0.41\" fill=\"#9000ff\" style=\"transform-origin: 5.47px 6.26px;\"></circle>\r\n      <circle cx=\"3.21\" cy=\"13.27\" r=\"0.41\" fill=\"#ffb400\" style=\"transform-origin: 3.21px 13.27px;\"></circle>\r\n      <circle cx=\"6.57\" cy=\"19.83\" r=\"0.41\" fill=\"#ff0060\" style=\"transform-origin: 6.57px 19.83px;\"></circle>\r\n      <circle cx=\"13.59\" cy=\"22.09\" r=\"0.41\" fill=\"#00c0ff\" style=\"transform-origin: 13.59px 22.09px;\"></circle>\r\n      <circle cx=\"20.15\" cy=\"18.73\" r=\"0.41\" fill=\"#ff0060\" style=\"transform-origin: 20.15px 18.73px;\"></circle>\r\n      <circle cx=\"22.41\" cy=\"11.72\" r=\"0.41\" fill=\"#ffb400\" style=\"transform-origin: 22.41px 11.72px;\"></circle>\r\n    </g>\r\n    <path id=\"main-questionmark\" d=\"M11.36,15.3a5.94,5.94,0,0,1,.33-2.19,4.44,4.44,0,0,1,1.22-1.6,6.49,6.49,0,0,0,1.18-1.29,2.08,2.08,0,0,0,.29-1.05q0-1.65-1.53-1.65A1.54,1.54,0,0,0,11.69,8a1.75,1.75,0,0,0-.45,1.24H8.4A3.77,3.77,0,0,1,9.61,6.26,4.72,4.72,0,0,1,12.85,5.2a4.75,4.75,0,0,1,3.23,1,3.59,3.59,0,0,1,1.14,2.84,3.42,3.42,0,0,1-.37,1.57,6.37,6.37,0,0,1-1.3,1.64l-.8.76a2.73,2.73,0,0,0-.85,1.68l0,.6Zm-.29,3a1.41,1.41,0,0,1,.45-1.08,1.58,1.58,0,0,1,1.14-.43,1.61,1.61,0,0,1,1.14.43,1.51,1.51,0,0,1,0,2.14,1.6,1.6,0,0,1-1.15.42,1.58,1.58,0,0,1-1.15-.42A1.41,1.41,0,0,1,11.07,18.3Z\" fill=\"#fff\"></path>\r\n  </svg>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/block-chain-info/block-chain-info.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/block-chain-info/block-chain-info.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonBlockChainInfoBlockChainInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"block-chain-container\" [ngClass]=\"{'selected': blockChainService.isSingleRow}\" #scrollable>\r\n    <div class=\"block-chain-info\">\r\n        <div class=\"block-chain-row\" [@slideInOut] *ngFor=\"let block of blockChainService.rollingLog\" (click)=\"openTab(parseNumber(block.number))\">\r\n            <div>{{parseNumber(block.number)}}</div>\r\n            <div class=\"hash\">{{block.hash}}</div>\r\n            <div>{{parseDate(block.timestamp) | date : 'h:mm:ss'}}</div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/buy-candy-input/buy-candy-input.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/buy-candy-input/buy-candy-input.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonBuyCandyInputBuyCandyInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"buy-candy-input\">\r\n    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '0'\">\r\n        <div class=\"counter\">\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(0)\" (dragover)=\"setRatio(0)\">\r\n                <div class=\"node active\"></div>\r\n            </div>\r\n            <div class=\"wrapper line-wrapper\" (mouseup)=\"setRatio(1)\" (dragover)=\"setRatio(1)\">\r\n                <div class=\"line\" [ngClass]=\"{active: isWithinRatio(1)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(1)\" (dragover)=\"setRatio(1)\">\r\n                <div class=\"node\" [ngClass]=\"{active: isWithinRatio(1)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper line-wrapper\" (mouseup)=\"setRatio(2)\" (dragover)=\"setRatio(2)\">\r\n                <div class=\"line\" [ngClass]=\"{active: isWithinRatio(2)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(2)\" (dragover)=\"setRatio(2)\">\r\n                <div class=\"node\" [ngClass]=\"{active: isWithinRatio(2)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper line-wrapper\" (mouseup)=\"setRatio(3)\" (dragover)=\"setRatio(3)\">\r\n                <div class=\"line\" [ngClass]=\"{active: isWithinRatio(3)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(3)\" (dragover)=\"setRatio(3)\">\r\n                <div class=\"node\" [ngClass]=\"{active: isWithinRatio(3)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper line-wrapper\" (mouseup)=\"setRatio(4)\" (dragover)=\"setRatio(4)\">\r\n                <div class=\"line\" [ngClass]=\"{active: isWithinRatio(4)}\"></div>\r\n            </div>\r\n            <div class=\"wrapper\" (mouseup)=\"setRatio(4)\" (dragover)=\"setRatio(4)\">\r\n                <div class=\"node\" [ngClass]=\"{active: isWithinRatio(4)}\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"app-input-group\">\r\n            <input class=\"app-input\"\r\n                type=\"number\"\r\n                step=\".0001\"\r\n                (ngModelChange)=\"updateAmount()\"\r\n                (focus)=\"amount = null\"\r\n                [(ngModel)]=\"amount\"\r\n                (blur)=\"checkValue()\">\r\n            <div class=\"append\" (click)=\"setRatio(4)\">\r\n                {{'max-buy' | translate | uppercase}}\r\n            </div>\r\n        </div>\r\n        <div class=\"available-currency\">\r\n            <div class=\"label\">{{'available' | translate}}</div>\r\n            <div class=\"coin\">\r\n                {{(authService.isLoggedIn ? authService.user.amountAvailable : 0)  | toNumber | number : '0.0-4'}}\r\n            BTOK</div>\r\n        </div>\r\n        <div *ngIf=\"authService.isLoggedIn\">\r\n            <app-animated-candies *ngIf=\"showAnimation\"></app-animated-candies>\r\n            <button\r\n                class=\"app-button\"\r\n                (click)=\"buyCandies()\">\r\n                {{'buy-candies' | translate : [amount || '0']}}\r\n            </button>\r\n        </div>\r\n    </ng-container>\r\n    <div *ngIf=\"!authService.isLoggedIn\">\r\n        <button\r\n            class=\"app-button inverted\"\r\n            (click)=\"authorize()\"\r\n            >\r\n            {{'please-login-through-the-app' | translate | uppercase}}\r\n        </button>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/info-component/info-component.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/info-component/info-component.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonInfoComponentInfoComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"info copy-pastable\">\r\n  <div style=\"margin-top: 12px;\">\r\n    {{date | date: 'hh:m a'}} Info:\r\n  </div>\r\n  <div ngxClipboard [cbContent]=\"data\">\r\n    {{data}}\r\n  </div>\r\n  <button mat-button ngxClipboard [cbContent]=\"data\">Debug</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/language-select/language-select.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/language-select/language-select.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonLanguageSelectLanguageSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"language-select\" [ngClass]=\"{'dark-background': darkBackground}\">\r\n    <div class=\"language-container\">\r\n      <span><img class=\"flag\" [src]=\"translateService.getFlagImage(translation)\" alt=\"\"></span>\r\n      <mat-select class=\"select\"  [(ngModel)]=\"translation\" (ngModelChange)=\"setTranslation()\">\r\n        <mat-option class=\"option\" *ngFor=\"let lang of languageOptions\" [value]=\"lang.language\">\r\n          {{lang.text}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n  </div>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/main-header/main-header.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/main-header/main-header.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonMainHeaderMainHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-header\">\r\n    <div class=\"icon-container\">\r\n        <i class=\"menu-icon icon-list\" (click)=\"showAccount()\"></i>\r\n    </div>\r\n    <div class=\"right-section-container\">\r\n        <div class=\"option-overlay\" *ngIf=\"showOptions\" (click)=\"openOptions()\"></div>\r\n        <div class=\"options\" [ngClass]=\"{show: showOptions}\">\r\n            <div class=\"option-placeholder\"></div>\r\n            <div class=\"option\"\r\n                [ngStyle]=\"{'background-color': option.background, 'color': option.color || 'white'}\"\r\n                *ngFor=\"let option of lotteryService.options\"\r\n                (click)=\"setOption(option)\">\r\n                <div class=\"percentage\" [ngStyle]=\"{'width': ((lotteryService.lotteryObj[option.value].currentEntries / option.value) * 100 + '%') }\"></div>\r\n                <div class=\"icon-placeholder\">\r\n                  <i class=\"icon-checkmark\" *ngIf=\"lotteryService.selectedOption.value == option.value\"></i>\r\n                </div>\r\n                <div *ngIf=\"!lotteryService.getLotteryInfo(option.value) || lotteryService.getLotteryInfo(option.value).lotteryStatus !== '1' \">\r\n                    {{option.value.toLocaleString()}}\r\n                </div>\r\n                <div *ngIf=\"lotteryService.getLotteryInfo(option.value) && lotteryService.getLotteryInfo(option.value).lotteryStatus === '1'\">\r\n                    0:{{lotteryService.getLotteryInfo(option.value).countDown | number: '2.0'}}\r\n                </div>\r\n                <div class=\"icon-placeholder\">\r\n                    <img class=\"icon-img\" [src]=\"option.icon\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"right-section\"\r\n            [ngStyle]=\"{\r\n                'background-color': lotteryService.selectedOption.background,\r\n                'color': lotteryService.selectedOption.color || 'white'}\">\r\n                <div class=\"percentage\" *ngIf=\"(lotteryService.lotteryObj[lotteryService.selectedOption.value].currentEntries / lotteryService.selectedOption.value) !== 1\" [ngStyle]=\"{'width': ((lotteryService.lotteryObj[lotteryService.selectedOption.value].currentEntries / lotteryService.selectedOption.value) * 100 + '%') }\"></div>\r\n            <div class=\"icon-placeholder\">\r\n                <i class=\"icon-chevronright\"\r\n                    *ngIf=\"lotteryService.options.length > 1\"\r\n                    [ngClass]=\"[showOptions ? 'chevron-up' : 'chevron-down']\"\r\n                    (click)=\"openOptions()\"></i>\r\n            </div>\r\n            <div class=\"section-content\" [ngStyle]=\"{'color': lotteryService.selectedOption.color || 'white'}\">\r\n                <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus !== '2'\">\r\n                    <div class=\"subtitle\">\r\n                        {{'prize-pool' | translate}}\r\n                    </div>\r\n                    <div class=\"content\">\r\n                        {{lotteryService.availablePrizePool.toLocaleString()}}\r\n                    </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '2'\">\r\n                    <div class=\"subtitle\">\r\n                        {{'next-pool-starts-in' | translate | uppercase}}\r\n                    </div>\r\n                    <div class=\"content\" (dblclick)=\"lotteryService.currentLotteryInfo.countDown=1\">\r\n                        0:{{lotteryService.currentLotteryInfo.countDown | number: '2.0'}}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"icon-placeholder\">\r\n                <img class=\"icon-img\"\r\n                 [src]=\"lotteryService.selectedOption.icon\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/pool-select/pool-select.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/pool-select/pool-select.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonPoolSelectPoolSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pool-select works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/winner-panel/winner-panel.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/winner-panel/winner-panel.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonWinnerPanelWinnerPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"winner-panel\" [ngClass]=\"['place-'+place]\">\r\n    <div class=\"winner-container\">\r\n        <div class=\"place\">\r\n            {{placeMap[place].name}}\r\n        </div>\r\n        <div *ngIf=\"place === 0\" class=\"first-candy\">\r\n            <div *ngFor=\"let candy of winnerInfo.candies\">\r\n                <div class=\"username\">{{candy.userName}}</div>\r\n                <div class=\"number\">{{'candy' | translate}} #{{candy.candyNumber}}</div>\r\n            </div>\r\n            <div class=\"winnings\" *ngIf=\"winnerInfo.myWinnings\">\r\n                <div class=\"amount\">\r\n                    +{{winnerInfo.myWinnings}} BTOK\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"place !== 0\" class=\"table-container\">\r\n            <div *ngFor=\"let candy of winnerInfo.candies\" class=\"candy\">\r\n                <div class=\"username\">{{candy.userName}}</div>\r\n                <div class=\"number\">\r\n                    {{'candy' | translate}} #{{candy.candyNumber}}&nbsp;\r\n                    <span class=\"you-won\" *ngIf=\"candy.isMine\">{{'you-won' | translate}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"winnings\" *ngIf=\"winnerInfo.myWinnings\">\r\n                <div class=\"amount\">\r\n                    +{{winnerInfo.myWinnings}} BTOK\r\n                </div>\r\n                <div class=\"dots\" *ngIf=\"place > 1\" (click)=\"goToWinnings()\">\r\n                    ...\r\n                </div>\r\n                <div class=\"count\">\r\n                    {{placeMap[place].winnerCount}} {{'winners' | translate}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/drawing-info/drawing-info.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/drawing-info/drawing-info.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeDrawingInfoDrawingInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"drawing-info\">\r\n    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '0'\">\r\n        <div class=\"heading\">\r\n            {{'drawing-begins-after-candies' | translate : [lotteryService.currentLotteryInfo.availablePrizePool.toLocaleString()] | uppercase}}\r\n        </div>\r\n        <div class=\"subtitle\">\r\n            {{'current-candies' | translate | uppercase}}\r\n        </div>\r\n        <div class=\"value\">\r\n            {{lotteryService.currentLotteryInfo.currentEntries.toLocaleString()}}\r\n        </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '1'\">\r\n        <div class=\"heading\">\r\n            {{(getRemainingBlocks() ? 'drawing-begins-in' : 'generating-winners') | translate : [lotteryService.currentLotteryInfo.availablePrizePool.toLocaleString()] | uppercase}}\r\n        </div>\r\n        <div class=\"heading\" *ngIf=\"!getRemainingBlocks()\">\r\n          <mat-spinner diameter=\"42\"></mat-spinner>\r\n        </div>\r\n        <div class=\"value\" *ngIf=\"getRemainingBlocks()\">\r\n            {{getRemainingBlocks()}} {{'blocks' | translate}}\r\n        </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '2'\">\r\n        <div class=\"winnings-container\">\r\n            <div *ngFor=\"let winner of lotteryService.currentLotteryInfo.winners.main; index as i\"\r\n                class=\"winning-panel\"\r\n                [ngClass]=\"{isHidden: winner.isDrawing}\">\r\n                <app-winner-panel [place]=\"i\" [winnerInfo]=\"winner\"></app-winner-panel>\r\n            </div>\r\n            <app-animated-coins *ngIf=\"myWinningsIncrement > 0\"></app-animated-coins>\r\n            <div class=\"winning-panel\" (dblclick)=\"this.finalizeWinning()\">\r\n              <div class=\"my-winnings\">\r\n                  <div class=\"winning-icon\">\r\n                      <img src=\"../../../assets/images/svgs/icon-moneybag.svg\" alt=\"\">\r\n                  </div>\r\n                  <div>\r\n                      <div class=\"label\">\r\n                          {{'my-winnings' | translate | uppercase}}\r\n                      </div>\r\n                      <div class=\"amount\">\r\n                          +{{myWinningsIncrement}}\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"winning-icon\">\r\n                      <img src=\"../../../assets/images/post-logo.png\" alt=\"\">\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/footer/footer.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/footer/footer.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer\">\r\n    <div class=\"panels\">\r\n        <div class=\"panel left-panel\">\r\n          <app-animated-confetti *ngIf=\"lotteryService.currentLotteryInfo.winners.minipool.winningAmount\"></app-animated-confetti>\r\n            <div>\r\n                <ng-container *ngIf=\"!authService.isLoggedIn\">\r\n                    <div class=\"title\">\r\n                        {{'my-candy-ids' | translate | uppercase}}:\r\n                    </div>\r\n                    <div>\r\n                        <!-- <button class=\"app-button dark-text small-text\" (click)=\"authorize()\">\r\n                            {{'login-register-to-play-now' | translate | uppercase}}\r\n                        </button> -->\r\n                    </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"authService.isLoggedIn\">\r\n                    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '0'\r\n                        || lotteryService.currentLotteryInfo.lotteryStatus === '1'\">\r\n                        <div class=\"title\">\r\n                            {{'my-candy-ids' | translate | uppercase}}:\r\n                        </div>\r\n                        <div class=\"text-content\">\r\n                            <span *ngFor=\"let data of lotteryService.currentLotteryInfo.myEntries | slice:0:8; let last=last;\">\r\n                                <span *ngIf=\"data.start !== data.end\">\r\n                                    #{{data.start}} - #{{data.end}}\r\n                                </span>\r\n                                <span *ngIf=\"data.start === data.end\">\r\n                                    #{{data.start}}\r\n                                </span>\r\n                                <span *ngIf=\"!last || (last && lotteryService.currentLotteryInfo.myEntries.length > 8)\">, </span>\r\n                            </span>\r\n                            <div *ngIf=\"lotteryService.currentLotteryInfo.myEntries.length > 8\">\r\n                                (+{{candyCount(lotteryService.currentLotteryInfo.myEntries.slice(8))}}\r\n                                {{'more-candies' | translate}})\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus === '2'\">\r\n                        <div class=\"title\">\r\n                            {{'mini-pool-winner' | translate | uppercase}}\r\n                        </div>\r\n                        <div class=\"text-content\">\r\n                            <!-- 350 Winners -->\r\n                        </div>\r\n                        <div *ngIf=\"lotteryService.currentLotteryInfo.winners.minipool.isDrawing\"\r\n                            class=\"minipool-question\"\r\n                            (click)=\"lotteryService.drawMinipool()\">\r\n                            <img class=\"chest\" src=\"../../../assets/images/minipool-chest.png\">\r\n                        </div>\r\n                        <ng-container *ngIf=\"!lotteryService.currentLotteryInfo.winners.minipool.isDrawing\" class=\"minipool-question\">\r\n                            <div class=\"bonus-section\" *ngIf=\"lotteryService.currentLotteryInfo.winners.minipool.winningAmount\">\r\n                                <div class=\"bonus-container\">\r\n                                    <div class=\"minipool-winner\">\r\n                                        {{'you-won' | translate | uppercase}}!\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"bonus-container\">\r\n                                    <div class=\"amount\">\r\n                                        +{{lotteryService.currentLotteryInfo.winners.minipool.winningAmount}} BTOK\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"bonus-section no-bonus\" *ngIf=\"!lotteryService.currentLotteryInfo.winners.minipool.winningAmount\">\r\n                                <div>{{'no-bonus-winnings' | translate | uppercase}}</div>\r\n                                <div>{{'try-again-next-time' | translate | uppercase}}!</div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel right-panel\">\r\n            <div>\r\n                <div class=\"label\">\r\n                    {{'total-candies' | translate}}\r\n                </div>\r\n                <div class=\"total-candies\">\r\n                    {{lotteryService.availablePrizePool}}\r\n                    <img class=\"icon-img large\" src=\"../../../assets/images/svgs/icon-candy-yellow.svg\">\r\n                </div>\r\n                <div class=\"label small\">\r\n                    {{'my-candies' | translate}}\r\n                </div>\r\n                <div class=\"my-candies\">\r\n                    {{candyCount(lotteryService.currentLotteryInfo.myEntries)}}\r\n                    <img class=\"icon-img\" src=\"../../../assets/images/svgs/icon-candy-blue.svg\">\r\n                </div>\r\n                <div class=\"label small\">\r\n                    {{'see-all-candy-entries' | translate}}\r\n                    <img class=\"icon-img\" [routerLink]=\"['/my-entries']\" src=\"../../../assets/images/svgs/icon-redirect.svg\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"home\" *ngIf=\"lotteryService.currentLotteryInfo\">\r\n    <app-main-header></app-main-header>\r\n    <div class=\"home-content\">\r\n        <app-block-chain-info *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus !== '2'\"></app-block-chain-info>\r\n        <app-drawing-info></app-drawing-info>\r\n        <div *ngIf=\"lotteryService.currentLotteryInfo.lotteryStatus !== '2'\" class=\"buy-candy-input\">\r\n            <app-buy-candy-input></app-buy-candy-input>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-play/how-to-play.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-play/how-to-play.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHowToPlayHowToPlayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [title]=\"'how-to-play' | translate\"></app-account-header>\r\n<div class=\"how-to-play\">\r\n    <div class=\"title\">\r\n        {{'fair-chance-guarantee' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'fair-chance-guarantee-etc' | translate}}\r\n    </div>\r\n    <div class=\"title\">\r\n        {{'depositing-funds' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'depositing-funds-etc' | translate}}\r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        {{'buying-candies' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'buying-candies-etc' | translate}}\r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        {{'winning' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'winning-etc' | translate}}\r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        {{'withdrawing-funds' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'withdrawing-funds-etc' | translate}}\r\n    </div>\r\n\r\n    <div class=\"title\">\r\n        {{'payouts' | translate}}\r\n    </div>\r\n    <div class=\"text\">\r\n        {{'payouts-etc' | translate}}\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-entries/my-entries.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-entries/my-entries.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyEntriesMyEntriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [title]=\"'all-candies' | translate\"></app-account-header>\r\n\r\n<div class=\"my-entries\">\r\n    <div class=\"info\">{{'pool-opened' | translate}} {{lotteryService.currentLotteryInfo.openedDate | date : 'MM-dd-yyyy H:mm'}}</div>\r\n    <div class=\"info\">{{'block' | translate}} {{lotteryService.currentLotteryInfo.targetBlockHeight}}</div>\r\n\r\n    <div class=\"header\">\r\n        <div class=\"text\">{{'my-candies' | translate}}</div>\r\n        <i class=\"icon-chevronright\"\r\n                    [ngClass]=\"[sortMyEntries ? 'chevron-up' : 'chevron-down']\"\r\n                    (click)=\"toggleMyEntries()\"></i>\r\n    </div>\r\n    <div class=\"data-container\">\r\n        <div class=\"data\" *ngFor=\"let entry of sortedMyEntries()\">\r\n            <div>\r\n                <div class=\"username\">\r\n                    {{entry.userName}}\r\n                </div>\r\n                <div class=\"date\">\r\n                    {{entry.date | date : 'MM-dd-yyyy H:mm'}}\r\n                </div>\r\n            </div>\r\n            <div>\r\n                #{{entry.start}}<ng-container *ngIf=\"entry.end !== entry.start\">-#{{entry.end}}</ng-container>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"info no-further-activity\">{{'no-further-activity' | translate}}</div>\r\n    </div>\r\n\r\n<!--\r\n    <div class=\"header\">\r\n        <div class=\"text\">{{'all-candies' | translate}}</div>\r\n        <i class=\"icon-chevronright\"\r\n                    [ngClass]=\"[sortAllEntries ? 'chevron-up' : 'chevron-down']\"\r\n                    (click)=\"toggleAllEntries()\"></i>\r\n    </div>\r\n    <div class=\"data-container\">\r\n        <div class=\"data\" *ngFor=\"let entry of sortedAllEntries()\">\r\n            <div>\r\n                <div class=\"username\">\r\n                    {{entry.userName}}\r\n                </div>\r\n                <div class=\"date\">\r\n                    {{entry.date | date : 'MM-dd-yyyy H:mm'}}\r\n                </div>\r\n            </div>\r\n            <div>\r\n                #{{entry.start}}<ng-container *ngIf=\"entry.end !== entry.start\">-#{{entry.end}}</ng-container>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"info no-further-activity\">{{'no-further-activity' | translate}}</div>\r\n    </div> -->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout-history-item/payout-history-item.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout-history-item/payout-history-item.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPayoutPayoutHistoryItemPayoutHistoryItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"payout-history-item\">\r\n    <div class=\"item-row info-row\">\r\n        <div>{{payoutItem.user}}</div>\r\n        <div class=\"amount\">\r\n            <div class=\"place-icon\" [ngClass]=\"[place]\"></div>\r\n            {{payoutItem.prize}}\r\n            BTOK\r\n        </div>\r\n    </div>\r\n    <div class=\"item-row info-two-row\">\r\n        <div>{{(payoutItem.time * 1000) | date: 'MM-dd-yyyy H:mm'}}</div>\r\n        <div>\r\n            {{'candy'| translate}}\r\n            #{{payoutItem.candy}}\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPayoutPayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-account-header [title]=\"'payouts' | translate | uppercase\"></app-account-header>\r\n\r\n<div class=\"game-control\" *ngIf=\"lastTenGames && lastTenGames.length\">\r\n  <div class=\"control\">\r\n    <i *ngIf=\"hasPreviousGame()\"\r\n    (click)=\"getPreviousGame()\"\r\n    class=\"icon icon-chevronleft\"></i>\r\n  </div>\r\n  <div class=\"date\"> <b>#{{selectedGame.id}}</b> - {{(selectedGame.closetime * 1000) | date: 'M/dd/yyyy H:mm'}}</div>\r\n  <div class=\"control\">\r\n    <i *ngIf=\"hasNextGame()\"\r\n      (click)=\"getNextGame()\"\r\n      class=\"icon icon-chevronright\"></i>\r\n  </div>\r\n</div>\r\n<div class=\"action-container\">\r\n    <button class=\"app-button\" *ngFor=\"let place of placeMap\" (click)=\"selectRank(place.rank)\">{{place.name}}</button>\r\n</div>\r\n<ng-container *ngIf=\"payoutData[currentLevel] && payoutData[currentLevel].data\">\r\n  <div class=\"payout\"\r\n    infiniteScroll\r\n    [infiniteScrollDistance]=\"1\"\r\n    [infiniteScrollThrottle]=\"50\"\r\n    (scrolled)=\"onScroll()\"\r\n    [scrollWindow]=\"false\">\r\n        <app-payout-history-item\r\n            [payoutItem]=\"item\"\r\n            [place]=\"getPlace(item.prize)\"\r\n            *ngFor=\"let item of payoutData[currentLevel].data\"></app-payout-history-item>\r\n  </div>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/account/account-history/account-history.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/account/account-history/account-history.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountAccountHistoryAccountHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".account-history .pending {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  width: 25px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LWhpc3RvcnkvQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxhY2NvdW50XFxhY2NvdW50LWhpc3RvcnlcXGFjY291bnQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LWhpc3RvcnkvYWNjb3VudC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC1oaXN0b3J5L2FjY291bnQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50LWhpc3Rvcnkge1xyXG4gIC5wZW5kaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuIiwiLmFjY291bnQtaGlzdG9yeSAucGVuZGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/account-history/account-history.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/account/account-history/account-history.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AccountHistoryComponent */

  /***/
  function srcAppAccountAccountHistoryAccountHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountHistoryComponent", function () {
      return AccountHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/lottery.service */
    "./src/app/services/lottery.service.ts");
    /* harmony import */


    var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/account.service */
    "./src/app/services/account.service.ts");

    var AccountHistoryComponent = /*#__PURE__*/function () {
      function AccountHistoryComponent(lotteryService, accountService) {
        _classCallCheck(this, AccountHistoryComponent);

        this.lotteryService = lotteryService;
        this.accountService = accountService;
        this.depositHistory = [];
        this.withdrawHistory = [];
        this.depositPageNum = 0;
        this.withdrawPageNum = 0;
        this.isLoadingDeposit = false;
        this.isLoadingWithdrawal = false;
      }

      _createClass(AccountHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.isLoadingDeposit = true;
          this.accountService.getDepositHistory(1, 20).subscribe(function (data) {
            _this.isLoadingDeposit = false;

            if (data.code === 200) {
              _this.depositHistory = data.msg;
            }
          });
          this.isLoadingWithdrawal = true;
          this.accountService.getWithdrawalHistory(1, 20).subscribe(function (data) {
            _this.isLoadingWithdrawal = false;

            if (data.code === 200) {
              _this.withdrawHistory = data.msg;
            }
          });
        }
      }, {
        key: "onDepositScroll",
        value: function onDepositScroll() {
          var _this2 = this;

          this.depositPageNum++;
          this.isLoadingDeposit = true;
          this.accountService.getDepositHistory(this.depositPageNum, 100).subscribe(function (data) {
            var arr = data.msg;
            _this2.isLoadingDeposit = false;
            arr.forEach(function (item) {
              if (!_this2.depositHistory.find(function (dup) {
                return dup.orderno === item.orderno;
              })) {
                _this2.depositHistory.push(item);
              }
            });
          });
        }
      }, {
        key: "onWithdrawScroll",
        value: function onWithdrawScroll() {
          var _this3 = this;

          this.withdrawPageNum++;
          this.isLoadingWithdrawal = true;
          this.accountService.getWithdrawalHistory(this.withdrawPageNum, 100).subscribe(function (data) {
            var arr = data.msg;
            _this3.isLoadingWithdrawal = false;
            arr.forEach(function (item) {
              if (!_this3.withdrawHistory.find(function (dup) {
                return dup.orderno === item.orderno;
              })) {
                _this3.withdrawHistory.push(item);
              }
            });
          });
        }
      }]);

      return AccountHistoryComponent;
    }();

    AccountHistoryComponent.ctorParameters = function () {
      return [{
        type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"]
      }, {
        type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }];
    };

    AccountHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-history/account-history.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-history.component.scss */
      "./src/app/account/account-history/account-history.component.scss"))["default"]]
    })], AccountHistoryComponent);
    /***/
  },

  /***/
  "./src/app/account/account-settings/account-settings.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/account/account-settings/account-settings.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountAccountSettingsAccountSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".overlay.show {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  transition: background-color 0.3s;\n  z-index: 10;\n}\n\n.account-settings {\n  font-weight: 500;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 80vw;\n  max-width: 600px;\n  transform: translateX(-101%);\n  transition: transform 0.3s;\n  background-color: #2a2d32;\n  text-align: center;\n  z-index: 11;\n  color: #ffcc01;\n  padding-bottom: 5vh;\n}\n\n.account-settings.show {\n  transform: translateX(0);\n}\n\n.account-settings .account-container {\n  height: 100%;\n  max-height: 750px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.account-settings .header {\n  text-align: left;\n  padding: 16px;\n  width: 100%;\n  position: relative;\n  color: white;\n}\n\n.account-settings .header .language-select {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-45%, -50%);\n}\n\n.account-settings .header .close {\n  font-size: 28px;\n}\n\n.account-settings .info-container {\n  position: relative;\n  height: 30vh;\n  max-height: 200px;\n}\n\n.account-settings .info-container .background {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -2;\n}\n\n.account-settings .info-container .info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100%;\n}\n\n.account-settings .info-container .info .label {\n  color: white;\n}\n\n.account-settings .info-container .info .username {\n  font-size: 28px;\n}\n\n.account-settings .link {\n  font-size: 22px;\n  padding: 8px 24px;\n}\n\n.account-settings .link.logout {\n  color: #605f64;\n}\n\n.account-settings .link.how-to-play {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LXNldHRpbmdzL0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxcYWNjb3VudFxcYWNjb3VudC1zZXR0aW5nc1xcYWNjb3VudC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LXNldHRpbmdzL2FjY291bnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FDQVI7O0FESUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHSTtFQUNJLHdCQUFBO0FDRFI7O0FESUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0hSOztBRE1JO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0pSOztBRE1RO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDSlo7O0FET1E7RUFDSSxlQUFBO0FDTFo7O0FEU0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1BSOztBRFNRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ1BaOztBRFVRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FDUlo7O0FEVVk7RUFDSSxZQUFBO0FDUmhCOztBRFdZO0VBQ0ksZUFBQTtBQ1RoQjs7QURrQkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNoQlI7O0FEa0JRO0VBQ0ksY0FBQTtBQ2hCWjs7QURtQlE7RUFDSSxZQUFBO0FDakJaIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LXNldHRpbmdzL2FjY291bnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICAmLnNob3cge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLCAuOCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY2NvdW50LXNldHRpbmdzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMSUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIGNvbG9yOiAjZmZjYzAxO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcclxuXHJcbiAgICAmLnNob3cge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuXHJcbiAgICAuYWNjb3VudC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3NTBweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgLmxhbmd1YWdlLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTUwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogLTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlcm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYW1vdW50IHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmsge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMjRweDtcclxuXHJcbiAgICAgICAgJi5sb2dvdXQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYwNWY2NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuaG93LXRvLXBsYXkge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5vdmVybGF5LnNob3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYWNjb3VudC1zZXR0aW5ncyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA4MHZ3O1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMSUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMTtcbiAgY29sb3I6ICNmZmNjMDE7XG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XG59XG4uYWNjb3VudC1zZXR0aW5ncy5zaG93IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLmFjY291bnQtc2V0dGluZ3MgLmFjY291bnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA3NTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFjY291bnQtc2V0dGluZ3MgLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5oZWFkZXIgLmxhbmd1YWdlLXNlbGVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTUwJSk7XG59XG4uYWNjb3VudC1zZXR0aW5ncyAuaGVhZGVyIC5jbG9zZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5pbmZvLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMHZoO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5pbmZvLWNvbnRhaW5lciAuYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAtMjtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5pbmZvLWNvbnRhaW5lciAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYWNjb3VudC1zZXR0aW5ncyAuaW5mby1jb250YWluZXIgLmluZm8gLmxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFjY291bnQtc2V0dGluZ3MgLmluZm8tY29udGFpbmVyIC5pbmZvIC51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5saW5rIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiA4cHggMjRweDtcbn1cbi5hY2NvdW50LXNldHRpbmdzIC5saW5rLmxvZ291dCB7XG4gIGNvbG9yOiAjNjA1ZjY0O1xufVxuLmFjY291bnQtc2V0dGluZ3MgLmxpbmsuaG93LXRvLXBsYXkge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/account-settings/account-settings.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/account/account-settings/account-settings.component.ts ***!
    \************************************************************************/

  /*! exports provided: AccountSettingsComponent */

  /***/
  function srcAppAccountAccountSettingsAccountSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountSettingsComponent", function () {
      return AccountSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/account.service */
    "./src/app/services/account.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var AccountSettingsComponent = /*#__PURE__*/function () {
      function AccountSettingsComponent(authService, accountService) {
        _classCallCheck(this, AccountSettingsComponent);

        this.authService = authService;
        this.accountService = accountService;
        this.showAccount = false;
      }

      _createClass(AccountSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.accountService.getShowSettingsObs().subscribe(function (data) {
            _this4.showAccount = data;
          });
        }
      }, {
        key: "close",
        value: function close(openOnReturn) {
          this.accountService.setAccountSettings(false);
          this.accountService.openOnReturn = openOnReturn;
        }
      }]);

      return AccountSettingsComponent;
    }();

    AccountSettingsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
      }];
    };

    AccountSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account-settings/account-settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-settings.component.scss */
      "./src/app/account/account-settings/account-settings.component.scss"))["default"]]
    })], AccountSettingsComponent);
    /***/
  },

  /***/
  "./src/app/account/account.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/account/account.module.ts ***!
    \*******************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/app-common.module */
    "./src/app/common/app-common.module.ts");
    /* harmony import */


    var _account_history_account_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./account-history/account-history.component */
    "./src/app/account/account-history/account-history.component.ts");
    /* harmony import */


    var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account-settings/account-settings.component */
    "./src/app/account/account-settings/account-settings.component.ts");
    /* harmony import */


    var _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deposit/deposit.component */
    "./src/app/account/deposit/deposit.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/account/login/login.component.ts");
    /* harmony import */


    var _new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./new-account-orientation/new-account-orientation.component */
    "./src/app/account/new-account-orientation/new-account-orientation.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/account/register/register.component.ts");
    /* harmony import */


    var _two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./two-factor/two-factor.component */
    "./src/app/account/two-factor/two-factor.component.ts");
    /* harmony import */


    var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./withdraw/withdraw.component */
    "./src/app/account/withdraw/withdraw.component.ts");
    /* harmony import */


    var _winning_history_winning_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./winning-history/winning-history.component */
    "./src/app/account/winning-history/winning-history.component.ts"); // Components


    var AccountModule = function AccountModule() {
      _classCallCheck(this, AccountModule);
    };

    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_account_history_account_history_component__WEBPACK_IMPORTED_MODULE_4__["AccountHistoryComponent"], _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsComponent"], _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_6__["DepositComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_8__["NewAccountOrientationComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_10__["TwoFactorComponent"], _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_11__["WithdrawComponent"], _winning_history_winning_history_component__WEBPACK_IMPORTED_MODULE_12__["WinningHistoryComponent"]],
      imports: [_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_5__["AccountSettingsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_8__["NewAccountOrientationComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _winning_history_winning_history_component__WEBPACK_IMPORTED_MODULE_12__["WinningHistoryComponent"]]
    })], AccountModule);
    /***/
  },

  /***/
  "./src/app/account/authguard.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/account/authguard.guard.ts ***!
    \********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAccountAuthguardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!(this.authService.user && this.authService.user.token)) {
            this.router.navigate(['/home']);
            return false;
          } // you can save redirect url so after authing we can move them back to the page they requested


          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/account/deposit/deposit.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/account/deposit/deposit.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountDepositDepositComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".deposit {\n  text-align: center;\n  padding: 0 16px 24px;\n}\n.deposit .qr-container {\n  margin-top: 12px;\n  height: 45vw;\n  max-height: 250px;\n}\n.deposit .qr-container .qr-code {\n  display: inline-block;\n  height: 100%;\n  border-radius: 12px;\n  background-color: white;\n}\n.deposit .qr-container .qr-code img {\n  height: 100%;\n}\n.deposit .btn-container {\n  display: flex;\n  justify-content: space-between;\n}\n.deposit .btn-container button.app-button {\n  font-size: 15px !important;\n  flex-basis: 49%;\n}\n.deposit .message {\n  padding: 0 40px;\n  margin-top: 24px;\n  color: white;\n  font-size: 16px;\n  line-height: 18px;\n}\n.deposit .address {\n  word-break: break-all;\n  color: #ffcc00;\n  background-color: #2a2e31;\n  border: 2px solid #5d6164;\n  font-size: 16px;\n  border-radius: 12px;\n  padding: 12px;\n  margin: 24px 0 12px;\n  display: flex;\n  justify-content: space-between;\n}\n.deposit .icon-documentcopy {\n  margin-left: 12px;\n}\n.deposit .amount {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 12px;\n  color: #ffcc00;\n}\n.deposit .amount .available {\n  color: white;\n}\n.deposit .link {\n  margin-top: 32px;\n  color: #ffcc00;\n  font-size: 20px;\n}\n.deposit .deposit-form {\n  margin-top: 16px;\n  display: flex;\n}\n.deposit .deposit-form .app-input {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9kZXBvc2l0L0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxcYWNjb3VudFxcZGVwb3NpdFxcZGVwb3NpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9kZXBvc2l0L2RlcG9zaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURBUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFWjtBRERZO0VBQ0ksWUFBQTtBQ0doQjtBREVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDQVI7QURFUTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQ0FaO0FESUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRlI7QURLSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNIUjtBRE1JO0VBQ0ksaUJBQUE7QUNKUjtBRE9JO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTFI7QURNUTtFQUNJLFlBQUE7QUNKWjtBRFFJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ05SO0FEU0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNQTjtBRFFNO0VBQ0Usa0JBQUE7QUNOUiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZGVwb3NpdC9kZXBvc2l0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlcG9zaXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxNnB4IDI0cHg7XHJcblxyXG4gICAgLnFyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1dnc7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgLnFyLWNvZGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBidXR0b24uYXBwLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA0OSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRyZXNzIHtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmUzMTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNWQ2MTY0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgMTJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbi1kb2N1bWVudGNvcHkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbW91bnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgLmF2YWlsYWJsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmsge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXBvc2l0LWZvcm0ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAuYXBwLWlucHV0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuZGVwb3NpdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNnB4IDI0cHg7XG59XG4uZGVwb3NpdCAucXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgaGVpZ2h0OiA0NXZ3O1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cbi5kZXBvc2l0IC5xci1jb250YWluZXIgLnFyLWNvZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZGVwb3NpdCAucXItY29udGFpbmVyIC5xci1jb2RlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kZXBvc2l0IC5idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRlcG9zaXQgLmJ0bi1jb250YWluZXIgYnV0dG9uLmFwcC1idXR0b24ge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgZmxleC1iYXNpczogNDklO1xufVxuLmRlcG9zaXQgLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5kZXBvc2l0IC5hZGRyZXNzIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBjb2xvcjogI2ZmY2MwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmUzMTtcbiAgYm9yZGVyOiAycHggc29saWQgIzVkNjE2NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW46IDI0cHggMCAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGVwb3NpdCAuaWNvbi1kb2N1bWVudGNvcHkge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5kZXBvc2l0IC5hbW91bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGNvbG9yOiAjZmZjYzAwO1xufVxuLmRlcG9zaXQgLmFtb3VudCAuYXZhaWxhYmxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRlcG9zaXQgLmxpbmsge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBjb2xvcjogI2ZmY2MwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRlcG9zaXQgLmRlcG9zaXQtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGVwb3NpdCAuZGVwb3NpdC1mb3JtIC5hcHAtaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/deposit/deposit.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/account/deposit/deposit.component.ts ***!
    \******************************************************/

  /*! exports provided: DepositComponent */

  /***/
  function srcAppAccountDepositDepositComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepositComponent", function () {
      return DepositComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var DepositComponent = /*#__PURE__*/function () {
      function DepositComponent(authService) {
        _classCallCheck(this, DepositComponent);

        this.authService = authService;
        this.depositAmount = 0;
      }

      _createClass(DepositComponent, [{
        key: "deposit",
        value: function deposit() {
          this.authService.depositAmount(this.depositAmount);
          this.depositAmount = 0;
        }
      }, {
        key: "updateAmount",
        value: function updateAmount() {
          var _this5 = this;

          setTimeout(function () {
            if (_this5.depositAmount === null) {
              return null;
            }

            if (_this5.depositAmount < .0001) {
              _this5.depositAmount = 0;
              return;
            }

            if (_this5.depositAmount) {
              var amountStr = _this5.depositAmount.toString();

              if (amountStr.indexOf('.') === 0) {
                if (amountStr.length > 5) {
                  _this5.depositAmount = parseFloat(amountStr.substr(0, 5));
                }
              } else {
                var arr = amountStr.split('.');

                if (arr[1] && arr[1].length > 4) {
                  arr[1] = arr[1].substr(0, 4);
                }

                _this5.depositAmount = parseFloat(arr.join('.'));
              }
            }
          }, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DepositComponent;
    }();

    DepositComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    DepositComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deposit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deposit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/deposit/deposit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deposit.component.scss */
      "./src/app/account/deposit/deposit.component.scss"))["default"]]
    })], DepositComponent);
    /***/
  },

  /***/
  "./src/app/account/login/login.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/account/login/login.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login {\n  padding: 16px;\n}\n.login .logo {\n  color: white;\n  height: 25vh;\n  line-height: 25vh;\n  font-size: 40px;\n  color: #fccd02;\n  text-align: center;\n}\n.login .logo .logo-image {\n  height: 100%;\n}\n.login .input-form .input-row {\n  margin-bottom: 20px;\n}\n.login .register {\n  margin-top: 12px;\n  color: #fccd02;\n  text-align: center;\n  font-size: 18px;\n  cursor: pointer;\n}\n.language-container {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9DOlxcbG9jYWxkZXZcXG15LXByb2plY3RzXFxjaGF0LWxvdHRlcnkvc3JjXFxhcHBcXGFjY291bnRcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBREFJO0VBRUksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENRO0VBQ0UsWUFBQTtBQ0NWO0FESVE7RUFDSSxtQkFBQTtBQ0ZaO0FETUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSlI7QURRQTtFQUNFLGtCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAubG9nbyB7XHJcblxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1dmg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmNjZDAyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmxvZ28taW1hZ2Uge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZm9ybSB7XHJcbiAgICAgICAgLmlucHV0LXJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZWdpc3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBjb2xvcjogI2ZjY2QwMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5sb2dpbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubG9naW4gLmxvZ28ge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMjV2aDtcbiAgbGluZS1oZWlnaHQ6IDI1dmg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICNmY2NkMDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbiAubG9nbyAubG9nby1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sb2dpbiAuaW5wdXQtZm9ybSAuaW5wdXQtcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5sb2dpbiAucmVnaXN0ZXIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBjb2xvcjogI2ZjY2QwMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/login/login.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/account/login/login.component.ts ***!
    \**************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAccountLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/lottery.service */
    "./src/app/services/lottery.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, lotteryService, router) {
        _classCallCheck(this, LoginComponent);

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

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "infoValid",
        value: function infoValid() {
          return this.loginObj.password && this.loginObj.userName;
        }
      }, {
        key: "login",
        value: function login() {
          var _this6 = this;

          if (this.infoValid()) {
            this.authService.login(this.loginObj).subscribe(function (data) {
              if (data) {
                _this6.lotteryService.clearLotteryObj();

                _this6.lotteryService.startStatusCheckInterval();

                _this6.router.navigate(['/home']);
              }
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_4__["LotteryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/account/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/account/new-account-orientation/new-account-orientation.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/account/new-account-orientation/new-account-orientation.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountNewAccountOrientationNewAccountOrientationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".orientation {\n  padding: 16px;\n  color: white;\n}\n.orientation .message {\n  margin-top: 2vh;\n  padding-bottom: 20px;\n  white-space: pre-wrap;\n  font-size: 20px;\n}\n.orientation .deposit-funds {\n  margin-top: 10vh;\n}\n.orientation .connect-2fa {\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: #fccd02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9uZXctYWNjb3VudC1vcmllbnRhdGlvbi9DOlxcbG9jYWxkZXZcXG15LXByb2plY3RzXFxjaGF0LWxvdHRlcnkvc3JjXFxhcHBcXGFjY291bnRcXG5ldy1hY2NvdW50LW9yaWVudGF0aW9uXFxuZXctYWNjb3VudC1vcmllbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9uZXctYWNjb3VudC1vcmllbnRhdGlvbi9uZXctYWNjb3VudC1vcmllbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FERUk7RUFDSSxnQkFBQTtBQ0FSO0FER0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbmV3LWFjY291bnQtb3JpZW50YXRpb24vbmV3LWFjY291bnQtb3JpZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JpZW50YXRpb24ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlcG9zaXQtZnVuZHMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbm5lY3QtMmZhIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmY2NkMDI7XHJcbiAgICB9XHJcbn0iLCIub3JpZW50YXRpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ub3JpZW50YXRpb24gLm1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5vcmllbnRhdGlvbiAuZGVwb3NpdC1mdW5kcyB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG59XG4ub3JpZW50YXRpb24gLmNvbm5lY3QtMmZhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmNjZDAyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/new-account-orientation/new-account-orientation.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/account/new-account-orientation/new-account-orientation.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: NewAccountOrientationComponent */

  /***/
  function srcAppAccountNewAccountOrientationNewAccountOrientationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewAccountOrientationComponent", function () {
      return NewAccountOrientationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/navigation.service */
    "./src/app/services/navigation.service.ts");

    var NewAccountOrientationComponent = /*#__PURE__*/function () {
      function NewAccountOrientationComponent(authService, location, navigationService) {
        _classCallCheck(this, NewAccountOrientationComponent);

        this.authService = authService;
        this.location = location;
        this.navigationService = navigationService;
      }

      _createClass(NewAccountOrientationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewAccountOrientationComponent;
    }();

    NewAccountOrientationComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]
      }];
    };

    NewAccountOrientationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-account-orientation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-account-orientation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/new-account-orientation/new-account-orientation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-account-orientation.component.scss */
      "./src/app/account/new-account-orientation/new-account-orientation.component.scss"))["default"]]
    })], NewAccountOrientationComponent);
    /***/
  },

  /***/
  "./src/app/account/register/register.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/account/register/register.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".register {\n  padding: 16px;\n}\n.register .info {\n  color: white;\n  margin: 12px 0 24px;\n  font-size: 21px;\n}\n.register .input-form .input-row {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9DOlxcbG9jYWxkZXZcXG15LXByb2plY3RzXFxjaGF0LWxvdHRlcnkvc3JjXFxhcHBcXGFjY291bnRcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VSO0FERVE7RUFDSSxtQkFBQTtBQ0FaIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDEycHggMCAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZm9ybSB7XHJcbiAgICAgICAgLmlucHV0LXJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnJlZ2lzdGVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5yZWdpc3RlciAuaW5mbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMnB4IDAgMjRweDtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuLnJlZ2lzdGVyIC5pbnB1dC1mb3JtIC5pbnB1dC1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/register/register.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/account/register/register.component.ts ***!
    \********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAccountRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authService, router) {
        _classCallCheck(this, RegisterComponent);

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

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "infoValid",
        value: function infoValid() {
          return this.registrationObj.userName && this.registrationObj.password && this.registrationObj.password2 && this.registrationObj.password === this.registrationObj.password2;
        }
      }, {
        key: "register",
        value: function register() {
          var _this7 = this;

          if (this.infoValid()) {
            this.authService.register(this.registrationObj).subscribe(function (data) {
              if (data) {
                _this7.router.navigate(['/orientation']);
              }
            });
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/account/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/account/two-factor/two-factor.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/account/two-factor/two-factor.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountTwoFactorTwoFactorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".two-factor {\n  padding: 12px 16px;\n  color: white;\n}\n.two-factor .step-0 {\n  text-align: center;\n}\n.two-factor .step-0 .qr-container {\n  height: 45vw;\n  max-height: 250px;\n}\n.two-factor .step-0 .qr-container .qr-code {\n  display: inline-block;\n  height: 100%;\n  border-radius: 12px;\n  background-color: white;\n}\n.two-factor .step-0 .qr-container .qr-code img {\n  height: 100%;\n}\n.two-factor .step-0 .address {\n  word-break: break-all;\n  color: #ffcc00;\n  background-color: #2a2e31;\n  border: 2px solid #5d6164;\n  font-size: 16px;\n  border-radius: 12px;\n  padding: 12px;\n  margin: 12px 0;\n}\n.two-factor .step-0 .icon-documentcopy {\n  margin-left: 12px;\n}\n.two-factor .confirmation {\n  height: 180px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.two-factor .message {\n  padding: 0 12px;\n  margin-top: 6px;\n  font-size: 16px;\n  line-height: 18px;\n}\n.two-factor .link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 24px;\n  color: #ffcc00;\n  font-size: 20px;\n}\n.two-factor .link i {\n  margin-left: 12px;\n}\n.two-factor .link.extra-margin {\n  margin-top: 36px;\n}\n.two-factor .row {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC90d28tZmFjdG9yL0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxcYWNjb3VudFxcdHdvLWZhY3RvclxcdHdvLWZhY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC90d28tZmFjdG9yL3R3by1mYWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDR1o7QURGWTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNJaEI7QURIZ0I7RUFDSSxZQUFBO0FDS3BCO0FEQVE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNFWjtBRENRO0VBQ0ksaUJBQUE7QUNDWjtBREdJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNEUjtBRElJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNGUjtBREtJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSFI7QURJUTtFQUNJLGlCQUFBO0FDRlo7QURLUTtFQUNJLGdCQUFBO0FDSFo7QURPSTtFQUNJLGdCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3R3by1mYWN0b3IvdHdvLWZhY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50d28tZmFjdG9yIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC5zdGVwLTAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAucXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXZ3O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgLnFyLWNvZGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJlMzE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM1ZDYxNjQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmljb24tZG9jdW1lbnRjb3B5IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb25maXJtYXRpb24ge1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICBjb2xvcjogI2ZmY2MwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5leHRyYS1tYXJnaW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG59IiwiLnR3by1mYWN0b3Ige1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50d28tZmFjdG9yIC5zdGVwLTAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udHdvLWZhY3RvciAuc3RlcC0wIC5xci1jb250YWluZXIge1xuICBoZWlnaHQ6IDQ1dnc7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xufVxuLnR3by1mYWN0b3IgLnN0ZXAtMCAucXItY29udGFpbmVyIC5xci1jb2RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnR3by1mYWN0b3IgLnN0ZXAtMCAucXItY29udGFpbmVyIC5xci1jb2RlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50d28tZmFjdG9yIC5zdGVwLTAgLmFkZHJlc3Mge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGNvbG9yOiAjZmZjYzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZTMxO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNWQ2MTY0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMTJweCAwO1xufVxuLnR3by1mYWN0b3IgLnN0ZXAtMCAuaWNvbi1kb2N1bWVudGNvcHkge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi50d28tZmFjdG9yIC5jb25maXJtYXRpb24ge1xuICBoZWlnaHQ6IDE4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnR3by1mYWN0b3IgLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi50d28tZmFjdG9yIC5saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGNvbG9yOiAjZmZjYzAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4udHdvLWZhY3RvciAubGluayBpIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4udHdvLWZhY3RvciAubGluay5leHRyYS1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuLnR3by1mYWN0b3IgLnJvdyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account/two-factor/two-factor.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/account/two-factor/two-factor.component.ts ***!
    \************************************************************/

  /*! exports provided: TwoFactorComponent */

  /***/
  function srcAppAccountTwoFactorTwoFactorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwoFactorComponent", function () {
      return TwoFactorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var TwoFactorComponent = /*#__PURE__*/function () {
      function TwoFactorComponent(location) {
        var _this8 = this;

        _classCallCheck(this, TwoFactorComponent);

        this.location = location;
        this.address = "123k123j1k23j-12-d123d-12dk1-23dk1-23kd12-3d123123d123-d132";
        this.step = 0;

        this.navBack = function () {
          if (_this8.step === 0) {
            _this8.location.back();
          } else {
            _this8.step--;
          }
        };
      }

      _createClass(TwoFactorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getTitle",
        value: function getTitle() {
          switch (this.step) {
            case 0:
              return 'bind-2fa';

            case 1:
              return '2fa-verification';
          }
        }
      }, {
        key: "confirmCode",
        value: function confirmCode() {
          this.step = 2;
        }
      }]);

      return TwoFactorComponent;
    }();

    TwoFactorComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    TwoFactorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-two-factor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./two-factor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/two-factor/two-factor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./two-factor.component.scss */
      "./src/app/account/two-factor/two-factor.component.scss"))["default"]]
    })], TwoFactorComponent);
    /***/
  },

  /***/
  "./src/app/account/winning-history/winning-history.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/account/winning-history/winning-history.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountWinningHistoryWinningHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".winning-history .ticket {\n  min-width: 50px;\n  font-weight: bold;\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC93aW5uaW5nLWhpc3RvcnkvQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxhY2NvdW50XFx3aW5uaW5nLWhpc3RvcnlcXHdpbm5pbmctaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC93aW5uaW5nLWhpc3Rvcnkvd2lubmluZy1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvd2lubmluZy1oaXN0b3J5L3dpbm5pbmctaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aW5uaW5nLWhpc3Rvcnkge1xyXG4gIC50aWNrZXQge1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG59XHJcbiIsIi53aW5uaW5nLWhpc3RvcnkgLnRpY2tldCB7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/winning-history/winning-history.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/account/winning-history/winning-history.component.ts ***!
    \**********************************************************************/

  /*! exports provided: WinningHistoryComponent */

  /***/
  function srcAppAccountWinningHistoryWinningHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WinningHistoryComponent", function () {
      return WinningHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/lottery.service */
    "./src/app/services/lottery.service.ts");
    /* harmony import */


    var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/account.service */
    "./src/app/services/account.service.ts");

    var WinningHistoryComponent = /*#__PURE__*/function () {
      function WinningHistoryComponent(lotteryService, accountService) {
        _classCallCheck(this, WinningHistoryComponent);

        this.lotteryService = lotteryService;
        this.accountService = accountService;
        this.rewardHistory = [];
        this.betHistory = [];
        this.rewardPageNum = 0;
        this.betPageNum = 0;
        this.isLoadingReward = false;
        this.isLoadingBets = false;
      }

      _createClass(WinningHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.isLoadingReward = true;
          this.accountService.getRewardHistory(1, 100).subscribe(function (data) {
            _this9.isLoadingReward = false;

            if (data.code === 200) {
              _this9.rewardHistory = data.msg;
            }
          });
          this.accountService.getBetsHistory(1, 100).subscribe(function (data) {
            _this9.isLoadingBets = false;

            if (data.code === 200) {
              _this9.betHistory = data.msg;
            }
          });
        }
      }, {
        key: "onRewardScroll",
        value: function onRewardScroll() {
          var _this10 = this;

          this.rewardPageNum++;
          this.isLoadingReward = true;
          this.accountService.getRewardHistory(this.rewardPageNum, 100).subscribe(function (data) {
            _this10.isLoadingReward = false;
            var arr = data.msg;
            arr.forEach(function (item) {
              if (!_this10.rewardHistory.find(function (dup) {
                return dup.ticket === item.ticket && dup.gameid === item.gameid;
              })) {
                _this10.rewardHistory.push(item);
              }
            });
          });
        }
      }, {
        key: "onBetScroll",
        value: function onBetScroll() {
          var _this11 = this;

          this.betPageNum++;
          this.isLoadingBets = true;
          this.accountService.getBetsHistory(this.betPageNum, 100).subscribe(function (data) {
            _this11.isLoadingBets = false;
            var arr = data.msg;
            arr.forEach(function (item) {
              if (!_this11.betHistory.find(function (dup) {
                return dup.gameid === item.gameid && dup.start === item.start && dup.end === dup.end;
              })) {
                _this11.betHistory.push(item);
              }
            });
          });
        }
      }]);

      return WinningHistoryComponent;
    }();

    WinningHistoryComponent.ctorParameters = function () {
      return [{
        type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"]
      }, {
        type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }];
    };

    WinningHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-winning-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./winning-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/winning-history/winning-history.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./winning-history.component.scss */
      "./src/app/account/winning-history/winning-history.component.scss"))["default"]]
    })], WinningHistoryComponent);
    /***/
  },

  /***/
  "./src/app/account/withdraw/withdraw.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/account/withdraw/withdraw.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountWithdrawWithdrawComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".withdraw {\n  padding: 0 24px;\n}\n.withdraw .message {\n  font-size: 19px;\n  color: white;\n  margin: 16px 0 20px;\n}\n.withdraw .amount {\n  display: flex;\n  justify-content: space-between;\n  color: #ffcc00;\n  margin-bottom: 16px;\n}\n.withdraw .amount .available {\n  color: white;\n}\n.withdraw .withdraw-address {\n  border: 2px solid #636363;\n  background-color: #2a2d32;\n  border-radius: 12px;\n  height: 70px;\n  position: relative;\n  padding: 12px;\n  font-size: 16px;\n  color: #ffcc00;\n  word-break: break-all;\n}\n.withdraw .withdraw-address .placeholder {\n  font-size: 20px;\n  color: #636363;\n}\n.withdraw .withdraw-address i {\n  font-size: 20px;\n  color: #ffcc00;\n  position: absolute;\n  top: 8px;\n  right: 12px;\n}\n.withdraw .row {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC93aXRoZHJhdy9DOlxcbG9jYWxkZXZcXG15LXByb2plY3RzXFxjaGF0LWxvdHRlcnkvc3JjXFxhcHBcXGFjY291bnRcXHdpdGhkcmF3XFx3aXRoZHJhdy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudC93aXRoZHJhdy93aXRoZHJhdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBSUEsbUJBQUE7QUNGUjtBRERRO0VBQ0ksWUFBQTtBQ0daO0FERUk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0FSO0FERVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0FaO0FER1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNEWjtBREtJO0VBQ0ksbUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvd2l0aGRyYXcvd2l0aGRyYXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2l0aGRyYXcge1xyXG4gICAgcGFkZGluZzogMCAyNHB4OyBcclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMTZweCAwIDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgLmF2YWlsYWJsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAud2l0aGRyYXctYWRkcmVzcyB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzYzNjM2MztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDMyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmY2MwMDtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblxyXG4gICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmY2MwMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yb3cge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbn0iLCIud2l0aGRyYXcge1xuICBwYWRkaW5nOiAwIDI0cHg7XG59XG4ud2l0aGRyYXcgLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxNnB4IDAgMjBweDtcbn1cbi53aXRoZHJhdyAuYW1vdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogI2ZmY2MwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi53aXRoZHJhdyAuYW1vdW50IC5hdmFpbGFibGUge1xuICBjb2xvcjogd2hpdGU7XG59XG4ud2l0aGRyYXcgLndpdGhkcmF3LWFkZHJlc3Mge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjM2MzYzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDMyO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmY2MwMDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLndpdGhkcmF3IC53aXRoZHJhdy1hZGRyZXNzIC5wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2MzYzNjM7XG59XG4ud2l0aGRyYXcgLndpdGhkcmF3LWFkZHJlc3MgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmNjMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuLndpdGhkcmF3IC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/account/withdraw/withdraw.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/account/withdraw/withdraw.component.ts ***!
    \********************************************************/

  /*! exports provided: WithdrawComponent */

  /***/
  function srcAppAccountWithdrawWithdrawComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function () {
      return WithdrawComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var WithdrawComponent = /*#__PURE__*/function () {
      function WithdrawComponent(authService) {
        _classCallCheck(this, WithdrawComponent);

        this.authService = authService;
        this.isLoading = false;
        this.showIcon = false;
        this.address = '';
        this.amount = 0;
        this.message = '';
      }

      _createClass(WithdrawComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "withdraw",
        value: function withdraw() {
          var _this12 = this;

          if (this.isLoading) {
            return;
          }

          this.isLoading = true;
          this.authService.withdraw(this.amount).subscribe(function (data) {
            _this12.isLoading = false;

            if (data.code === 200) {
              _this12.amount = 0;
              _this12.message = 'success';
              _this12.authService.user.amountAvailable = parseFloat(data.msg.balance);
            } else {
              _this12.message = 'an-error-has-occurred';
            }
          });
        }
      }, {
        key: "updateAmount",
        value: function updateAmount() {
          var _this13 = this;

          setTimeout(function () {
            if (_this13.amount === null) {
              return null;
            }

            if (_this13.amount < .0001) {
              _this13.amount = 0;
              return;
            }

            if (_this13.amount) {
              var amountStr = _this13.amount.toString();

              if (amountStr.indexOf('.') === 0) {
                if (amountStr.length > 5) {
                  _this13.amount = parseFloat(amountStr.substr(0, 5));
                }
              } else {
                var arr = amountStr.split('.');

                if (arr[1] && arr[1].length > 4) {
                  arr[1] = arr[1].substr(0, 4);
                }

                _this13.amount = parseFloat(arr.join('.'));
              }
            }
          }, 0);
        }
      }]);

      return WithdrawComponent;
    }();

    WithdrawComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    WithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-withdraw',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./withdraw.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/withdraw/withdraw.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./withdraw.component.scss */
      "./src/app/account/withdraw/withdraw.component.scss"))["default"]]
    })], WithdrawComponent);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-container {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100vw;\n}\n.main-container .main-content {\n  width: 100%;\n  height: 100%;\n  flex-basis: 100%;\n  max-width: 650px;\n  overflow: hidden;\n  position: relative;\n}\n.main-container .animated-background {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 100px;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG5cclxuICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNjUwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFuaW1hdGVkLWJhY2tncm91bmQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbn0iLCIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwdnc7XG59XG4ubWFpbi1jb250YWluZXIgLm1haW4tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluLWNvbnRhaW5lciAuYW5pbWF0ZWQtYmFja2dyb3VuZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMDBweDtcbiAgei1pbmRleDogLTE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "isHome",
        value: function isHome() {
          return this.router.url.indexOf('home') !== -1;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _account_account_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./account/account.module */
    "./src/app/account/account.module.ts");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./common/app-common.module */
    "./src/app/common/app-common.module.ts");
    /* harmony import */


    var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./routing/app-routing.module */
    "./src/app/routing/app-routing.module.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _how_to_play_how_to_play_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./how-to-play/how-to-play.module */
    "./src/app/how-to-play/how-to-play.module.ts");
    /* harmony import */


    var _my_entries_my_entries_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./my-entries/my-entries.module */
    "./src/app/my-entries/my-entries.module.ts");
    /* harmony import */


    var _payout_payout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./payout/payout.module */
    "./src/app/payout/payout.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/account.service */
    "./src/app/services/account.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_block_chain_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/block-chain.service */
    "./src/app/services/block-chain.service.ts");
    /* harmony import */


    var _services_lottery_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/lottery.service */
    "./src/app/services/lottery.service.ts");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/navigation.service */
    "./src/app/services/navigation.service.ts");
    /* harmony import */


    var _services_translate_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./services/translate.service */
    "./src/app/services/translate.service.ts");
    /* harmony import */


    var _services_payout_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/payout.service */
    "./src/app/services/payout.service.ts");
    /* harmony import */


    var _common_window_ref__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./common/window-ref */
    "./src/app/common/window-ref.ts"); // Modules
    // Components
    // Services


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
      imports: [_account_account_module__WEBPACK_IMPORTED_MODULE_6__["AccountModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"], _how_to_play_how_to_play_module__WEBPACK_IMPORTED_MODULE_10__["HowToPlayModule"], _my_entries_my_entries_module__WEBPACK_IMPORTED_MODULE_11__["MyEntriesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _payout_payout_module__WEBPACK_IMPORTED_MODULE_12__["PayoutModule"]],
      providers: [_services_account_service__WEBPACK_IMPORTED_MODULE_15__["AccountService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _services_block_chain_service__WEBPACK_IMPORTED_MODULE_17__["BlockChainService"], _services_lottery_service__WEBPACK_IMPORTED_MODULE_18__["LotteryService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_19__["NavigationService"], _services_payout_service__WEBPACK_IMPORTED_MODULE_21__["PayoutService"], _services_translate_service__WEBPACK_IMPORTED_MODULE_20__["TranslateService"], _common_window_ref__WEBPACK_IMPORTED_MODULE_22__["WindowRef"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common/account-header/account-header.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/common/account-header/account-header.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonAccountHeaderAccountHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".simple-return {\n  text-align: right;\n  height: 50px;\n  padding: 16px 16px 16px 0;\n}\n.simple-return i {\n  font-size: 20px;\n  color: white;\n}\n.account-header {\n  font-weight: 500;\n  padding: 16px;\n  height: 50px;\n  position: -webkit-sticky;\n  position: sticky;\n  background-color: #2a2d32;\n  color: white;\n  display: flex;\n  align-content: center;\n  top: 0;\n}\n.account-header i {\n  color: #ffcc00;\n  font-size: 20px;\n}\n.account-header .title {\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FjY291bnQtaGVhZGVyL0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxhY2NvdW50LWhlYWRlclxcYWNjb3VudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9hY2NvdW50LWhlYWRlci9hY2NvdW50LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ1I7QURHQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsTUFBQTtBQ0FKO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYWNjb3VudC1oZWFkZXIvYWNjb3VudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2ltcGxlLXJldHVybiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDA7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmFjY291bnQtaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxufVxyXG4iLCIuc2ltcGxlLXJldHVybiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDA7XG59XG4uc2ltcGxlLXJldHVybiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hY2NvdW50LWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogMDtcbn1cbi5hY2NvdW50LWhlYWRlciBpIHtcbiAgY29sb3I6ICNmZmNjMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5hY2NvdW50LWhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/common/account-header/account-header.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/common/account-header/account-header.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AccountHeaderComponent */

  /***/
  function srcAppCommonAccountHeaderAccountHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountHeaderComponent", function () {
      return AccountHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AccountHeaderComponent = /*#__PURE__*/function () {
      function AccountHeaderComponent(location) {
        var _this14 = this;

        _classCallCheck(this, AccountHeaderComponent);

        this.location = location;
        this.simpleReturn = false;
        this.title = '';

        this.navigateBack = function () {
          _this14.location.back();
        };
      }

      _createClass(AccountHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountHeaderComponent;
    }();

    AccountHeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccountHeaderComponent.prototype, "simpleReturn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccountHeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccountHeaderComponent.prototype, "navigateBack", void 0);
    AccountHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/account-header/account-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-header.component.scss */
      "./src/app/common/account-header/account-header.component.scss"))["default"]]
    })], AccountHeaderComponent);
    /***/
  },

  /***/
  "./src/app/common/animated-background/animated-background.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/common/animated-background/animated-background.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonAnimatedBackgroundAnimatedBackgroundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background-container {\n  height: 100%;\n  overflow: hidden;\n  background: linear-gradient(to bottom right, #231991, #26362e);\n}\n.background-container svg {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLWJhY2tncm91bmQvQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxjb21tb25cXGFuaW1hdGVkLWJhY2tncm91bmRcXGFuaW1hdGVkLWJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9hbmltYXRlZC1iYWNrZ3JvdW5kL2FuaW1hdGVkLWJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4REFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtYmFja2dyb3VuZC9hbmltYXRlZC1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjMxOTkxLCAjMjYzNjJlKTtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59IiwiLmJhY2tncm91bmQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjMxOTkxLCAjMjYzNjJlKTtcbn1cbi5iYWNrZ3JvdW5kLWNvbnRhaW5lciBzdmcge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/common/animated-background/animated-background.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/common/animated-background/animated-background.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AnimatedBackgroundComponent */

  /***/
  function srcAppCommonAnimatedBackgroundAnimatedBackgroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimatedBackgroundComponent", function () {
      return AnimatedBackgroundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnimatedBackgroundComponent = /*#__PURE__*/function () {
      function AnimatedBackgroundComponent() {
        _classCallCheck(this, AnimatedBackgroundComponent);

        this.width = '115vh';
      }

      _createClass(AnimatedBackgroundComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }

          document.querySelectorAll('#bg-animation > *').forEach(function (el) {
            var pathLength = getRndInteger(20, 30);

            if (Math.random() > 5) {
              gsap.to(el, getRndInteger(30, 35), {
                x: pathLength,
                y: -(pathLength * Math.tan(28.65 * Math.PI / 180)),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
              }).play(getRndInteger(15, 30));
            } else {
              gsap.to(el, getRndInteger(20, 25), {
                x: pathLength,
                y: -(pathLength * Math.tan(28.65 * Math.PI / 180)),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
              }).play(getRndInteger(15, 30));
            }
          });
        }
      }]);

      return AnimatedBackgroundComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AnimatedBackgroundComponent.prototype, "width", void 0);
    AnimatedBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-animated-background',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./animated-background.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-background/animated-background.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./animated-background.component.scss */
      "./src/app/common/animated-background/animated-background.component.scss"))["default"]]
    })], AnimatedBackgroundComponent);
    /***/
  },

  /***/
  "./src/app/common/animated-candies/animated-candies.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/common/animated-candies/animated-candies.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonAnimatedCandiesAnimatedCandiesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLWNhbmRpZXMvQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxjb21tb25cXGFuaW1hdGVkLWNhbmRpZXNcXGFuaW1hdGVkLWNhbmRpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9hbmltYXRlZC1jYW5kaWVzL2FuaW1hdGVkLWNhbmRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtY2FuZGllcy9hbmltYXRlZC1jYW5kaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiIsInN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common/animated-candies/animated-candies.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/common/animated-candies/animated-candies.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AnimatedCandiesComponent */

  /***/
  function srcAppCommonAnimatedCandiesAnimatedCandiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimatedCandiesComponent", function () {
      return AnimatedCandiesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnimatedCandiesComponent = /*#__PURE__*/function () {
      function AnimatedCandiesComponent() {
        _classCallCheck(this, AnimatedCandiesComponent);
      }

      _createClass(AnimatedCandiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startAnimation();
        }
      }, {
        key: "getRndInteger",
        value: function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }, {
        key: "randomFloatBetween",
        value: function randomFloatBetween(minValue, maxValue, precision) {
          if (typeof precision === 'undefined') {
            precision = 2;
          }

          return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
        }
      }, {
        key: "startAnimation",
        value: function startAnimation() {
          var _this15 = this;

          document.querySelectorAll('svg path, svg g').forEach(function (el) {
            el.removeAttribute('data-name');
          });
          document.querySelectorAll('svg [id*="_Group"], svg [id*="_Path"]').forEach(function (el) {
            el.removeAttribute('id');
          });
          TweenLite.randomEase = Sine.easeInOut;
          var confetti = new TimelineMax({
            repeat: 0
          });
          confetti.to('#candies-animation #candies', .5, {
            opacity: 1
          });
          document.querySelectorAll('#candies-animation #candies path').forEach(function (el, index) {
            var ntl = new TimelineMax({});

            var hor = _this15.getRndInteger(-400, 400);

            var vert = _this15.getRndInteger(200, 800);

            var timeEl = _this15.randomFloatBetween(2, 3, 2);

            var elDur = _this15.randomFloatBetween(0.8, 1.5, 2);

            var offsetTimeEl = '-=' + timeEl / 3;
            ntl.to(el, timeEl, {
              x: hor
            }, 0).fromTo(el, timeEl / 2, {
              y: 100
            }, {
              y: -vert,
              ease: 'sine.out'
            }, 0).to(el, timeEl / 2, {
              y: 100,
              ease: 'power1.in'
            }, timeEl / 2).to(el, .5, {
              opacity: 0
            }, offsetTimeEl).to(el, elDur, {
              transformOrigin: '50% 50%',
              rotation: Math.random() > .5 ? -360 : 360,
              repeat: 1.5,
              ease: Power0.easeNone
            }, 0);
            confetti.add(ntl, 0);
          });
        }
      }]);

      return AnimatedCandiesComponent;
    }();

    AnimatedCandiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-animated-candies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./animated-candies.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-candies/animated-candies.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./animated-candies.component.scss */
      "./src/app/common/animated-candies/animated-candies.component.scss"))["default"]]
    })], AnimatedCandiesComponent);
    /***/
  },

  /***/
  "./src/app/common/animated-coins/animated-coins.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/common/animated-coins/animated-coins.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonAnimatedCoinsAnimatedCoinsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "svg {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLWNvaW5zL0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxhbmltYXRlZC1jb2luc1xcYW5pbWF0ZWQtY29pbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9hbmltYXRlZC1jb2lucy9hbmltYXRlZC1jb2lucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hbmltYXRlZC1jb2lucy9hbmltYXRlZC1jb2lucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiIsInN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/common/animated-coins/animated-coins.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/common/animated-coins/animated-coins.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AnimatedCoinsComponent */

  /***/
  function srcAppCommonAnimatedCoinsAnimatedCoinsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimatedCoinsComponent", function () {
      return AnimatedCoinsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnimatedCoinsComponent = /*#__PURE__*/function () {
      function AnimatedCoinsComponent() {
        _classCallCheck(this, AnimatedCoinsComponent);
      }

      _createClass(AnimatedCoinsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.animate();
        }
      }, {
        key: "getRndInteger",
        value: function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }, {
        key: "randomFloatBetween",
        value: function randomFloatBetween(minValue, maxValue, precision) {
          if (typeof precision == 'undefined') {
            precision = 2;
          }

          return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
        }
      }, {
        key: "animate",
        value: function animate() {
          var _this16 = this;

          document.querySelectorAll('svg path, svg g').forEach(function (el) {
            el.removeAttribute('data-name');
          });
          document.querySelectorAll('svg [id*="_Group"], svg [id*="_Path"]').forEach(function (el) {
            el.removeAttribute('id');
          });
          TweenLite.randomEase = Sine.easeInOut;
          var coinsAnimation = new TimelineMax({
            repeat: -1,
            repeatDelay: 1.5
          });
          coinsAnimation.to('#coins-animation #coins-parts', .5, {
            opacity: 1
          });
          document.querySelectorAll('#coins-animation #coins-parts g').forEach(function (el, index) {
            var ntl = new TimelineMax({});

            var hor = _this16.getRndInteger(-400, 400);

            var vert = _this16.getRndInteger(200, 800);

            var timeEl = _this16.randomFloatBetween(2, 3, 2);

            var elDur = _this16.randomFloatBetween(0.8, 1.5, 2);

            var offsetTimeEl = '-=' + timeEl / 3;
            ntl.to(el, timeEl, {
              x: hor
            }, 0).fromTo(el, timeEl / 3, {
              y: 100
            }, {
              y: -vert,
              ease: 'power3.out'
            }, 0).to(el, timeEl / 1.5, {
              y: 100,
              ease: 'power1.in'
            }, timeEl / 3) //.to(el.children, timeEl, {transformOrigin: '50% 50%', scale: 3, ease: 'sine.in'}, 0)
            .to(el, .5, {
              opacity: 0
            }, offsetTimeEl).to(el, elDur, {
              transformOrigin: '50% 50%',
              rotation: Math.random() > .5 ? -360 : 360,
              repeat: 1.5,
              ease: 'linear'
            }, 0).to(el, elDur, {
              transformOrigin: '50% 50%',
              scaleX: _this16.randomFloatBetween(.3, .8, 2),
              repeat: 7,
              yoyo: true,
              ease: 'linear'
            }, 0);
            coinsAnimation.add(ntl, 0);
          });
        }
      }]);

      return AnimatedCoinsComponent;
    }();

    AnimatedCoinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-animated-coins',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./animated-coins.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-coins/animated-coins.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./animated-coins.component.scss */
      "./src/app/common/animated-coins/animated-coins.component.scss"))["default"]]
    })], AnimatedCoinsComponent);
    /***/
  },

  /***/
  "./src/app/common/animated-confetti/animated-confetti.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/common/animated-confetti/animated-confetti.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonAnimatedConfettiAnimatedConfettiComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "svg {\n  width: 100%;\n  position: absolute;\n  pointer-events: none;\n  z-index: 200;\n  left: 0;\n  bottom: -15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLWNvbmZldHRpL0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxhbmltYXRlZC1jb25mZXR0aVxcYW5pbWF0ZWQtY29uZmV0dGkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9hbmltYXRlZC1jb25mZXR0aS9hbmltYXRlZC1jb25mZXR0aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtY29uZmV0dGkvYW5pbWF0ZWQtY29uZmV0dGkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiAyMDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNSU7XHJcbn1cclxuIiwic3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDIwMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common/animated-confetti/animated-confetti.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/common/animated-confetti/animated-confetti.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AnimatedConfettiComponent */

  /***/
  function srcAppCommonAnimatedConfettiAnimatedConfettiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimatedConfettiComponent", function () {
      return AnimatedConfettiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnimatedConfettiComponent = /*#__PURE__*/function () {
      function AnimatedConfettiComponent() {
        _classCallCheck(this, AnimatedConfettiComponent);
      }

      _createClass(AnimatedConfettiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startAnimation();
        }
      }, {
        key: "getRndInteger",
        value: function getRndInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }, {
        key: "randomFloatBetween",
        value: function randomFloatBetween(minValue, maxValue, precision) {
          if (typeof precision === 'undefined') {
            precision = 2;
          }

          return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
        }
      }, {
        key: "startAnimation",
        value: function startAnimation() {
          document.querySelectorAll('svg path, svg g').forEach(function (el) {
            el.removeAttribute('data-name');
          });
          document.querySelectorAll('svg [id*="_Group"], svg [id*="_Path"]').forEach(function (el) {
            el.removeAttribute('id');
          });
          TweenLite.randomEase = Sine.easeInOut;
          var confetti = new TimelineMax({
            repeat: 0,
            repeatDelay: 1.5
          });
          confetti.to('#candies-animation #candies-group', .5, {
            opacity: 1
          });
          document.querySelectorAll('#candies-animation #candies-group path').forEach(function (el, index) {
            ntl = new TimelineMax({});
            var hor = this.getRndInteger(-400, 400);
            var vert = this.getRndInteger(200, 800);
            var timeEl = this.randomFloatBetween(2, 3);
            var elDur = this.randomFloatBetween(0.8, 1.5);
            var offsetTimeEl = '-=' + timeEl / 3;
            ntl.to(el, timeEl, {
              x: hor
            }, 0).fromTo(el, timeEl / 2, {
              y: 100
            }, {
              y: -vert,
              ease: 'sine.out'
            }, 0).to(el, timeEl / 2, {
              y: 100,
              ease: 'power1.in'
            }, timeEl / 2).to(el, .5, {
              opacity: 0
            }, offsetTimeEl).to(el, elDur, {
              transformOrigin: '50% 50%',
              rotation: Math.random() > .5 ? -360 : 360,
              repeat: 1.5,
              ease: Power0.easeNone
            }, 0);
            confetti.add(ntl, 0);
          });
        }
      }]);

      return AnimatedConfettiComponent;
    }();

    AnimatedConfettiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-animated-confetti',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./animated-confetti.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-confetti/animated-confetti.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./animated-confetti.component.scss */
      "./src/app/common/animated-confetti/animated-confetti.component.scss"))["default"]]
    })], AnimatedConfettiComponent);
    /***/
  },

  /***/
  "./src/app/common/animated-question/animated-question.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/common/animated-question/animated-question.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonAnimatedQuestionAnimatedQuestionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "svg {\n  height: 100%;\n}\n\n#questionmark-button {\n  overflow: visible;\n}\n\n@-webkit-keyframes move-questionmark {\n  0% {\n    transform: scale(0);\n  }\n  30%, 100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes move-questionmark {\n  0% {\n    transform: scale(0);\n  }\n  30%, 100% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes fade-questionmark {\n  0%, 70% {\n    opacity: 1;\n  }\n  90%, 100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fade-questionmark {\n  0%, 70% {\n    opacity: 1;\n  }\n  90%, 100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes fade-circles-1 {\n  0%, 10%, 55%, 100% {\n    opacity: 0;\n  }\n  23.5%, 41.5% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-circles-1 {\n  0%, 10%, 55%, 100% {\n    opacity: 0;\n  }\n  23.5%, 41.5% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fade-circles-2 {\n  0%, 17.5%, 62.5%, 100% {\n    opacity: 0;\n  }\n  31%, 49% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-circles-2 {\n  0%, 17.5%, 62.5%, 100% {\n    opacity: 0;\n  }\n  31%, 49% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes move-circles-1 {\n  0%, 10% {\n    transform: scale(0.2) rotate(-20deg);\n  }\n  55%, 100% {\n    transform: scale(0.8);\n  }\n}\n\n@keyframes move-circles-1 {\n  0%, 10% {\n    transform: scale(0.2) rotate(-20deg);\n  }\n  55%, 100% {\n    transform: scale(0.8);\n  }\n}\n\n@-webkit-keyframes move-circles-2 {\n  0%, 17.5% {\n    transform: scale(0.2) rotate(-20deg);\n  }\n  62.5%, 100% {\n    transform: scale(0.8);\n  }\n}\n\n@keyframes move-circles-2 {\n  0%, 17.5% {\n    transform: scale(0.2) rotate(-20deg);\n  }\n  62.5%, 100% {\n    transform: scale(0.8);\n  }\n}\n\n@-webkit-keyframes scale-down-1 {\n  0%, 10%, 55%, 100% {\n    transform: scale(0);\n  }\n  28%, 41.5% {\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-down-1 {\n  0%, 10%, 55%, 100% {\n    transform: scale(0);\n  }\n  28%, 41.5% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes scale-down-2 {\n  0%, 15%, 60%, 100% {\n    transform: scale(0);\n  }\n  33%, 46.5% {\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-down-2 {\n  0%, 15%, 60%, 100% {\n    transform: scale(0);\n  }\n  33%, 46.5% {\n    transform: scale(1);\n  }\n}\n\n#questionmark-button #main-questionmark {\n  transform-origin: 12.81px 12.493px;\n  transform: scale(0.5);\n  -webkit-animation: move-questionmark 2s cubic-bezier(0.34, 1.56, 0.64, 1) both infinite, fade-questionmark 2s linear both infinite;\n  animation: move-questionmark 2s cubic-bezier(0.34, 1.56, 0.64, 1) both infinite, fade-questionmark 2s linear both infinite;\n}\n\n#questionmark-button #circles-around {\n  transform-origin: 12.81px 12.493px;\n  -webkit-animation: move-circles-1 2s ease-out both infinite, fade-circles-1 2s ease-out both infinite;\n  animation: move-circles-1 2s ease-out both infinite, fade-circles-1 2s ease-out both infinite;\n}\n\n#questionmark-button #circles-around-2 {\n  transform-origin: 12.81px 12.493px;\n  -webkit-animation: move-circles-2 2s ease-out both infinite, fade-circles-2 2s ease-out both infinite;\n  animation: move-circles-2 2s ease-out both infinite, fade-circles-2 2s ease-out both infinite;\n}\n\n#questionmark-button #circles-around circle {\n  -webkit-animation: scale-down-1 2s ease-in-out both infinite;\n  animation: scale-down-1 2s ease-in-out both infinite;\n}\n\n#questionmark-button #circles-around-2 circle {\n  -webkit-animation: scale-down-2 2s ease-in-out both infinite;\n  animation: scale-down-2 2s ease-in-out both infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2FuaW1hdGVkLXF1ZXN0aW9uL0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxhbmltYXRlZC1xdWVzdGlvblxcYW5pbWF0ZWQtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9hbmltYXRlZC1xdWVzdGlvbi9hbmltYXRlZC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNJLFlBQUE7QUNBVjs7QURFTTtFQUNFLGlCQUFBO0FDQ1I7O0FERU07RUFDRTtJQUVVLG1CQUFBO0VDQ2hCO0VEQ007SUFFVSxtQkFBQTtFQ0NoQjtBQUNGOztBREVNO0VBQ0U7SUFFVSxtQkFBQTtFQ0FoQjtFREVNO0lBRVUsbUJBQUE7RUNBaEI7QUFDRjs7QURHTTtFQUNFO0lBQ0UsVUFBQTtFQ0RSO0VER007SUFDRSxVQUFBO0VDRFI7QUFDRjs7QURJTTtFQUNFO0lBQ0UsVUFBQTtFQ0ZSO0VESU07SUFDRSxVQUFBO0VDRlI7QUFDRjs7QURLTTtFQUNFO0lBQ0UsVUFBQTtFQ0hSO0VES007SUFDRSxVQUFBO0VDSFI7QUFDRjs7QURNTTtFQUNFO0lBQ0UsVUFBQTtFQ0pSO0VETU07SUFDRSxVQUFBO0VDSlI7QUFDRjs7QURPTTtFQUNFO0lBQ0UsVUFBQTtFQ0xSO0VET007SUFDRSxVQUFBO0VDTFI7QUFDRjs7QURRTTtFQUNFO0lBQ0UsVUFBQTtFQ05SO0VEUU07SUFDRSxVQUFBO0VDTlI7QUFDRjs7QURTTTtFQUNFO0lBRVUsb0NBQUE7RUNQaEI7RURTTTtJQUVVLHFCQUFBO0VDUGhCO0FBQ0Y7O0FEVU07RUFDRTtJQUVVLG9DQUFBO0VDUmhCO0VEVU07SUFFVSxxQkFBQTtFQ1JoQjtBQUNGOztBRFdNO0VBQ0U7SUFFVSxvQ0FBQTtFQ1RoQjtFRFdNO0lBRVUscUJBQUE7RUNUaEI7QUFDRjs7QURZTTtFQUNFO0lBRVUsb0NBQUE7RUNWaEI7RURZTTtJQUVVLHFCQUFBO0VDVmhCO0FBQ0Y7O0FEYU07RUFDRTtJQUVVLG1CQUFBO0VDWGhCO0VEYU07SUFFVSxtQkFBQTtFQ1hoQjtBQUNGOztBRGNNO0VBQ0U7SUFFVSxtQkFBQTtFQ1poQjtFRGNNO0lBRVUsbUJBQUE7RUNaaEI7QUFDRjs7QURlTTtFQUNFO0lBRVUsbUJBQUE7RUNiaEI7RURlTTtJQUVVLG1CQUFBO0VDYmhCO0FBQ0Y7O0FEZ0JNO0VBQ0U7SUFFVSxtQkFBQTtFQ2RoQjtFRGdCTTtJQUVVLG1CQUFBO0VDZGhCO0FBQ0Y7O0FEaUJNO0VBR1Usa0NBQUE7RUFHQSxxQkFBQTtFQUNSLGtJQUFBO0VBQ1EsMEhBQUE7QUNmaEI7O0FEa0JNO0VBR1Usa0NBQUE7RUFDUixxR0FBQTtFQUNRLDZGQUFBO0FDZmhCOztBRGtCTTtFQUdVLGtDQUFBO0VBQ1IscUdBQUE7RUFDUSw2RkFBQTtBQ2ZoQjs7QURrQk07RUFDRSw0REFBQTtFQUNRLG9EQUFBO0FDZmhCOztBRGtCTTtFQUNFLDREQUFBO0VBQ1Esb0RBQUE7QUNmaEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYW5pbWF0ZWQtcXVlc3Rpb24vYW5pbWF0ZWQtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgICAgc3ZnIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAjcXVlc3Rpb25tYXJrLWJ1dHRvbiB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLXF1ZXN0aW9ubWFyayB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMCUsIDEwMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBtb3ZlLXF1ZXN0aW9ubWFyayB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMCUsIDEwMCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtcXVlc3Rpb25tYXJrIHtcclxuICAgICAgICAwJSwgNzAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDkwJSwgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBmYWRlLXF1ZXN0aW9ubWFyayB7XHJcbiAgICAgICAgMCUsIDcwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICA5MCUsIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWNpcmNsZXMtMSB7XHJcbiAgICAgICAgMCUsIDEwJSwgNTUlLCAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDIzLjUlLCA0MS41JSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQGtleWZyYW1lcyBmYWRlLWNpcmNsZXMtMSB7XHJcbiAgICAgICAgMCUsIDEwJSwgNTUlLCAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDIzLjUlLCA0MS41JSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtY2lyY2xlcy0yIHtcclxuICAgICAgICAwJSwgMTcuNSUsICA2Mi41JSwgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMSUsIDQ5JSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBmYWRlLWNpcmNsZXMtMiB7XHJcbiAgICAgICAgMCUsIDE3LjUlLCAgNjIuNSUsIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzElLCA0OSUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLWNpcmNsZXMtMSB7XHJcbiAgICAgICAgMCUsIDEwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjIpIHJvdGF0ZSgtMjBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4yKSByb3RhdGUoLTIwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTUlLCAxMDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOCk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQGtleWZyYW1lcyBtb3ZlLWNpcmNsZXMtMSB7XHJcbiAgICAgICAgMCUsIDEwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjIpIHJvdGF0ZSgtMjBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4yKSByb3RhdGUoLTIwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTUlLCAxMDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOCk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtY2lyY2xlcy0yIHtcclxuICAgICAgICAwJSwgMTcuNSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC4yKSByb3RhdGUoLTIwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMikgcm90YXRlKC0yMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDYyLjUlLCAxMDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOCk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBtb3ZlLWNpcmNsZXMtMiB7XHJcbiAgICAgICAgMCUsIDE3LjUlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMikgcm90YXRlKC0yMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjIpIHJvdGF0ZSgtMjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA2Mi41JSwgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjgpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzY2FsZS1kb3duLTEge1xyXG4gICAgICAgIDAlLCAxMCUsIDU1JSwgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDI4JSwgNDEuNSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQGtleWZyYW1lcyBzY2FsZS1kb3duLTEge1xyXG4gICAgICAgIDAlLCAxMCUsIDU1JSwgMTAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDI4JSwgNDEuNSUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLWRvd24tMiB7XHJcbiAgICAgICAgMCUsIDE1JSwgNjAlLCAxMDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzMlLCA0Ni41JSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNjYWxlLWRvd24tMiB7XHJcbiAgICAgICAgMCUsIDE1JSwgNjAlLCAxMDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMzMlLCA0Ni41JSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjcXVlc3Rpb25tYXJrLWJ1dHRvbiAjbWFpbi1xdWVzdGlvbm1hcmsge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguNSk7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLXF1ZXN0aW9ubWFyayAycyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgYm90aCBpbmZpbml0ZSwgZmFkZS1xdWVzdGlvbm1hcmsgMnMgbGluZWFyIGJvdGggaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IG1vdmUtcXVlc3Rpb25tYXJrIDJzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoIGluZmluaXRlLCBmYWRlLXF1ZXN0aW9ubWFyayAycyBsaW5lYXIgYm90aCBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI3F1ZXN0aW9ubWFyay1idXR0b24gI2NpcmNsZXMtYXJvdW5kIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZS1jaXJjbGVzLTEgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZSwgZmFkZS1jaXJjbGVzLTEgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbW92ZS1jaXJjbGVzLTEgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZSwgZmFkZS1jaXJjbGVzLTEgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI3F1ZXN0aW9ubWFyay1idXR0b24gI2NpcmNsZXMtYXJvdW5kLTIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcclxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLWNpcmNsZXMtMiAycyBlYXNlLW91dCBib3RoIGluZmluaXRlLCBmYWRlLWNpcmNsZXMtMiAycyBlYXNlLW91dCBib3RoIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBtb3ZlLWNpcmNsZXMtMiAycyBlYXNlLW91dCBib3RoIGluZmluaXRlLCBmYWRlLWNpcmNsZXMtMiAycyBlYXNlLW91dCBib3RoIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjcXVlc3Rpb25tYXJrLWJ1dHRvbiAjY2lyY2xlcy1hcm91bmQgY2lyY2xlIHtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtZG93bi0xIDJzIGVhc2UtaW4tb3V0IGJvdGggaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHNjYWxlLWRvd24tMSAycyBlYXNlLWluLW91dCBib3RoIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjcXVlc3Rpb25tYXJrLWJ1dHRvbiAjY2lyY2xlcy1hcm91bmQtMiBjaXJjbGUge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS1kb3duLTIgMnMgZWFzZS1pbi1vdXQgYm90aCBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2NhbGUtZG93bi0yIDJzIGVhc2UtaW4tb3V0IGJvdGggaW5maW5pdGU7XHJcbiAgICAgIH0iLCJzdmcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNxdWVzdGlvbm1hcmstYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlLXF1ZXN0aW9ubWFyayB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAzMCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtcXVlc3Rpb25tYXJrIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDMwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLXF1ZXN0aW9ubWFyayB7XG4gIDAlLCA3MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgOTAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtcXVlc3Rpb25tYXJrIHtcbiAgMCUsIDcwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA5MCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWNpcmNsZXMtMSB7XG4gIDAlLCAxMCUsIDU1JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAyMy41JSwgNDEuNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1jaXJjbGVzLTEge1xuICAwJSwgMTAlLCA1NSUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjMuNSUsIDQxLjUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1jaXJjbGVzLTIge1xuICAwJSwgMTcuNSUsIDYyLjUlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDMxJSwgNDklIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtY2lyY2xlcy0yIHtcbiAgMCUsIDE3LjUlLCA2Mi41JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAzMSUsIDQ5JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtY2lyY2xlcy0xIHtcbiAgMCUsIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMikgcm90YXRlKC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHJvdGF0ZSgtMjBkZWcpO1xuICB9XG4gIDU1JSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtY2lyY2xlcy0xIHtcbiAgMCUsIDEwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMikgcm90YXRlKC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHJvdGF0ZSgtMjBkZWcpO1xuICB9XG4gIDU1JSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZS1jaXJjbGVzLTIge1xuICAwJSwgMTcuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHJvdGF0ZSgtMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKSByb3RhdGUoLTIwZGVnKTtcbiAgfVxuICA2Mi41JSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmUtY2lyY2xlcy0yIHtcbiAgMCUsIDE3LjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yKSByb3RhdGUoLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMikgcm90YXRlKC0yMGRlZyk7XG4gIH1cbiAgNjIuNSUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLWRvd24tMSB7XG4gIDAlLCAxMCUsIDU1JSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMjglLCA0MS41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2NhbGUtZG93bi0xIHtcbiAgMCUsIDEwJSwgNTUlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAyOCUsIDQxLjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLWRvd24tMiB7XG4gIDAlLCAxNSUsIDYwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMzMlLCA0Ni41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2NhbGUtZG93bi0yIHtcbiAgMCUsIDE1JSwgNjAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAzMyUsIDQ2LjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuI3F1ZXN0aW9ubWFyay1idXR0b24gI21haW4tcXVlc3Rpb25tYXJrIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtcXVlc3Rpb25tYXJrIDJzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoIGluZmluaXRlLCBmYWRlLXF1ZXN0aW9ubWFyayAycyBsaW5lYXIgYm90aCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlLXF1ZXN0aW9ubWFyayAycyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgYm90aCBpbmZpbml0ZSwgZmFkZS1xdWVzdGlvbm1hcmsgMnMgbGluZWFyIGJvdGggaW5maW5pdGU7XG59XG5cbiNxdWVzdGlvbm1hcmstYnV0dG9uICNjaXJjbGVzLWFyb3VuZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEyLjgxcHggMTIuNDkzcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlLWNpcmNsZXMtMSAycyBlYXNlLW91dCBib3RoIGluZmluaXRlLCBmYWRlLWNpcmNsZXMtMSAycyBlYXNlLW91dCBib3RoIGluZmluaXRlO1xuICBhbmltYXRpb246IG1vdmUtY2lyY2xlcy0xIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGUsIGZhZGUtY2lyY2xlcy0xIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGU7XG59XG5cbiNxdWVzdGlvbm1hcmstYnV0dG9uICNjaXJjbGVzLWFyb3VuZC0yIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMi44MXB4IDEyLjQ5M3B4O1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTIuODFweCAxMi40OTNweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUtY2lyY2xlcy0yIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGUsIGZhZGUtY2lyY2xlcy0yIDJzIGVhc2Utb3V0IGJvdGggaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbW92ZS1jaXJjbGVzLTIgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZSwgZmFkZS1jaXJjbGVzLTIgMnMgZWFzZS1vdXQgYm90aCBpbmZpbml0ZTtcbn1cblxuI3F1ZXN0aW9ubWFyay1idXR0b24gI2NpcmNsZXMtYXJvdW5kIGNpcmNsZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZS1kb3duLTEgMnMgZWFzZS1pbi1vdXQgYm90aCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzY2FsZS1kb3duLTEgMnMgZWFzZS1pbi1vdXQgYm90aCBpbmZpbml0ZTtcbn1cblxuI3F1ZXN0aW9ubWFyay1idXR0b24gI2NpcmNsZXMtYXJvdW5kLTIgY2lyY2xlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLWRvd24tMiAycyBlYXNlLWluLW91dCBib3RoIGluZmluaXRlO1xuICBhbmltYXRpb246IHNjYWxlLWRvd24tMiAycyBlYXNlLWluLW91dCBib3RoIGluZmluaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common/animated-question/animated-question.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/common/animated-question/animated-question.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AnimatedQuestionComponent */

  /***/
  function srcAppCommonAnimatedQuestionAnimatedQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimatedQuestionComponent", function () {
      return AnimatedQuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnimatedQuestionComponent = /*#__PURE__*/function () {
      function AnimatedQuestionComponent() {
        _classCallCheck(this, AnimatedQuestionComponent);
      }

      _createClass(AnimatedQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimatedQuestionComponent;
    }();

    AnimatedQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-animated-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./animated-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/animated-question/animated-question.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./animated-question.component.scss */
      "./src/app/common/animated-question/animated-question.component.scss"))["default"]]
    })], AnimatedQuestionComponent);
    /***/
  },

  /***/
  "./src/app/common/app-common.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/common/app-common.module.ts ***!
    \*********************************************/

  /*! exports provided: AppCommonModule */

  /***/
  function srcAppCommonAppCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppCommonModule", function () {
      return AppCommonModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _account_header_account_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./account-header/account-header.component */
    "./src/app/common/account-header/account-header.component.ts");
    /* harmony import */


    var _animated_background_animated_background_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./animated-background/animated-background.component */
    "./src/app/common/animated-background/animated-background.component.ts");
    /* harmony import */


    var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main-header/main-header.component */
    "./src/app/common/main-header/main-header.component.ts");
    /* harmony import */


    var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../pipes/translate.pipe */
    "./src/app/pipes/translate.pipe.ts");
    /* harmony import */


    var _pool_select_pool_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pool-select/pool-select.component */
    "./src/app/common/pool-select/pool-select.component.ts");
    /* harmony import */


    var _buy_candy_input_buy_candy_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./buy-candy-input/buy-candy-input.component */
    "./src/app/common/buy-candy-input/buy-candy-input.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _language_select_language_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./language-select/language-select.component */
    "./src/app/common/language-select/language-select.component.ts");
    /* harmony import */


    var _winner_panel_winner_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./winner-panel/winner-panel.component */
    "./src/app/common/winner-panel/winner-panel.component.ts");
    /* harmony import */


    var _animated_question_animated_question_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./animated-question/animated-question.component */
    "./src/app/common/animated-question/animated-question.component.ts");
    /* harmony import */


    var _animated_candies_animated_candies_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./animated-candies/animated-candies.component */
    "./src/app/common/animated-candies/animated-candies.component.ts");
    /* harmony import */


    var _animated_confetti_animated_confetti_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./animated-confetti/animated-confetti.component */
    "./src/app/common/animated-confetti/animated-confetti.component.ts");
    /* harmony import */


    var _animated_coins_animated_coins_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./animated-coins/animated-coins.component */
    "./src/app/common/animated-coins/animated-coins.component.ts");
    /* harmony import */


    var _block_chain_info_block_chain_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./block-chain-info/block-chain-info.component */
    "./src/app/common/block-chain-info/block-chain-info.component.ts");
    /* harmony import */


    var _pipes_to_number_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../pipes/to-number.pipe */
    "./src/app/pipes/to-number.pipe.ts");
    /* harmony import */


    var _info_component_info_component_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./info-component/info-component.component */
    "./src/app/common/info-component/info-component.component.ts"); // Components
    // Pipes


    var AppCommonModule = function AppCommonModule() {
      _classCallCheck(this, AppCommonModule);
    };

    AppCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_10__["AccountHeaderComponent"], _animated_background_animated_background_component__WEBPACK_IMPORTED_MODULE_11__["AnimatedBackgroundComponent"], _animated_question_animated_question_component__WEBPACK_IMPORTED_MODULE_19__["AnimatedQuestionComponent"], _animated_candies_animated_candies_component__WEBPACK_IMPORTED_MODULE_20__["AnimatedCandiesComponent"], _animated_confetti_animated_confetti_component__WEBPACK_IMPORTED_MODULE_21__["AnimatedConfettiComponent"], _animated_coins_animated_coins_component__WEBPACK_IMPORTED_MODULE_22__["AnimatedCoinsComponent"], _block_chain_info_block_chain_info_component__WEBPACK_IMPORTED_MODULE_23__["BlockChainInfoComponent"], _buy_candy_input_buy_candy_input_component__WEBPACK_IMPORTED_MODULE_15__["BuyCandyInputComponent"], _language_select_language_select_component__WEBPACK_IMPORTED_MODULE_17__["LanguageSelectComponent"], _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_12__["MainHeaderComponent"], _pool_select_pool_select_component__WEBPACK_IMPORTED_MODULE_14__["PoolSelectComponent"], _pipes_to_number_pipe__WEBPACK_IMPORTED_MODULE_24__["ToNumberPipe"], _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _winner_panel_winner_panel_component__WEBPACK_IMPORTED_MODULE_18__["WinnerPanelComponent"], _info_component_info_component_component__WEBPACK_IMPORTED_MODULE_25__["InfoComponentComponent"]],
      imports: [ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]],
      exports: [_account_header_account_header_component__WEBPACK_IMPORTED_MODULE_10__["AccountHeaderComponent"], _animated_background_animated_background_component__WEBPACK_IMPORTED_MODULE_11__["AnimatedBackgroundComponent"], _animated_coins_animated_coins_component__WEBPACK_IMPORTED_MODULE_22__["AnimatedCoinsComponent"], _animated_confetti_animated_confetti_component__WEBPACK_IMPORTED_MODULE_21__["AnimatedConfettiComponent"], _animated_question_animated_question_component__WEBPACK_IMPORTED_MODULE_19__["AnimatedQuestionComponent"], _animated_candies_animated_candies_component__WEBPACK_IMPORTED_MODULE_20__["AnimatedCandiesComponent"], _block_chain_info_block_chain_info_component__WEBPACK_IMPORTED_MODULE_23__["BlockChainInfoComponent"], _buy_candy_input_buy_candy_input_component__WEBPACK_IMPORTED_MODULE_15__["BuyCandyInputComponent"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _info_component_info_component_component__WEBPACK_IMPORTED_MODULE_25__["InfoComponentComponent"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollModule"], _language_select_language_select_component__WEBPACK_IMPORTED_MODULE_17__["LanguageSelectComponent"], _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_12__["MainHeaderComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _pool_select_pool_select_component__WEBPACK_IMPORTED_MODULE_14__["PoolSelectComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _pipes_to_number_pipe__WEBPACK_IMPORTED_MODULE_24__["ToNumberPipe"], _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _winner_panel_winner_panel_component__WEBPACK_IMPORTED_MODULE_18__["WinnerPanelComponent"]]
    })], AppCommonModule);
    /***/
  },

  /***/
  "./src/app/common/block-chain-info/block-chain-info.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/common/block-chain-info/block-chain-info.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonBlockChainInfoBlockChainInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".block-chain-container {\n  scroll-behavior: smooth;\n  background-color: #00000088;\n  height: 84px;\n  font-size: 12px;\n  overflow: hidden;\n  color: #9194ad;\n  width: 100%;\n}\n.block-chain-container.selected {\n  padding: 12px;\n  font-size: 14px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: #DDD;\n}\n.block-chain-container.selected .hash {\n  font-weight: bold;\n}\n.block-chain-container .block-chain-info {\n  width: 100%;\n}\n.block-chain-container .block-chain-info .hash {\n  max-width: 50%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  direction: rtl;\n}\n.block-chain-container .block-chain-info .block-chain-row {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-evenly;\n}\n.block-chain-container .block-chain-info .block-chain-row:hover {\n  color: #BBB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Jsb2NrLWNoYWluLWluZm8vQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxjb21tb25cXGJsb2NrLWNoYWluLWluZm9cXGJsb2NrLWNoYWluLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9ibG9jay1jaGFpbi1pbmZvL2Jsb2NrLWNoYWluLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEQ1E7RUFDSSxpQkFBQTtBQ0NaO0FER0k7RUFDSSxXQUFBO0FDRFI7QURFUTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQVo7QURHUTtFQUNJLGVBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7QUNKWjtBREFZO0VBQ0ksV0FBQTtBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9ibG9jay1jaGFpbi1pbmZvL2Jsb2NrLWNoYWluLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2stY2hhaW4tY29udGFpbmVyIHtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg4O1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNvbG9yOiAjOTE5NGFkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICBjb2xvcjogI0RERDtcclxuXHJcbiAgICAgICAgLmhhc2gge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJsb2NrLWNoYWluLWluZm8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5oYXNoIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuYmxvY2stY2hhaW4tcm93IHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQkJCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuYmxvY2stY2hhaW4tY29udGFpbmVyIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4ODtcbiAgaGVpZ2h0OiA4NHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAjOTE5NGFkO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ibG9jay1jaGFpbi1jb250YWluZXIuc2VsZWN0ZWQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiAjREREO1xufVxuLmJsb2NrLWNoYWluLWNvbnRhaW5lci5zZWxlY3RlZCAuaGFzaCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJsb2NrLWNoYWluLWNvbnRhaW5lciAuYmxvY2stY2hhaW4taW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJsb2NrLWNoYWluLWNvbnRhaW5lciAuYmxvY2stY2hhaW4taW5mbyAuaGFzaCB7XG4gIG1heC13aWR0aDogNTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlyZWN0aW9uOiBydGw7XG59XG4uYmxvY2stY2hhaW4tY29udGFpbmVyIC5ibG9jay1jaGFpbi1pbmZvIC5ibG9jay1jaGFpbi1yb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmJsb2NrLWNoYWluLWNvbnRhaW5lciAuYmxvY2stY2hhaW4taW5mbyAuYmxvY2stY2hhaW4tcm93OmhvdmVyIHtcbiAgY29sb3I6ICNCQkI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/common/block-chain-info/block-chain-info.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/common/block-chain-info/block-chain-info.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BlockChainInfoComponent */

  /***/
  function srcAppCommonBlockChainInfoBlockChainInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockChainInfoComponent", function () {
      return BlockChainInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_block_chain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/block-chain.service */
    "./src/app/services/block-chain.service.ts");

    var BlockChainInfoComponent = /*#__PURE__*/function () {
      function BlockChainInfoComponent(blockChainService) {
        _classCallCheck(this, BlockChainInfoComponent);

        this.blockChainService = blockChainService;
        this.getLatestSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.getBlockSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
      }

      _createClass(BlockChainInfoComponent, [{
        key: "openTab",
        value: function openTab(block) {
          window.open("https://etherscan.io/block/".concat(block), '_blank');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "parseNumber",
        value: function parseNumber(string) {
          return parseInt(string, 16);
        }
      }, {
        key: "parseDate",
        value: function parseDate(dateString) {
          return new Date(parseInt(dateString, 16) * 1000);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return BlockChainInfoComponent;
    }();

    BlockChainInfoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_block_chain_service__WEBPACK_IMPORTED_MODULE_4__["BlockChainService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollable', {
      "static": false
    })], BlockChainInfoComponent.prototype, "scrollable", void 0);
    BlockChainInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-block-chain-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./block-chain-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/block-chain-info/block-chain-info.component.html"))["default"],
      animations: [[Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '*',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '0',
        transform: 'translateY(-15px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0)',
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        'opacity': '1'
      }))])])])]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./block-chain-info.component.scss */
      "./src/app/common/block-chain-info/block-chain-info.component.scss"))["default"]]
    })], BlockChainInfoComponent);
    /***/
  },

  /***/
  "./src/app/common/buy-candy-input/buy-candy-input.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/common/buy-candy-input/buy-candy-input.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonBuyCandyInputBuyCandyInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buy-candy-input {\n  color: #ffcc01;\n}\n.buy-candy-input .counter {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.buy-candy-input .counter .wrapper {\n  padding: 12px 0;\n}\n.buy-candy-input .counter .wrapper.line-wrapper {\n  flex-grow: 1;\n}\n.buy-candy-input .counter .node {\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  border: 2px solid #636363;\n}\n.buy-candy-input .counter .line {\n  border: 1px solid #636363;\n}\n.buy-candy-input .counter .node.active, .buy-candy-input .counter .line.active {\n  border-color: #ffcc01;\n}\n.buy-candy-input .available-currency {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  margin: 4px 6px 16px;\n}\n.buy-candy-input .available-currency .label {\n  color: white;\n}\n.buy-candy-input .message {\n  font-size: 30px;\n  text-align: center;\n  margin-top: 10vh;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2J1eS1jYW5keS1pbnB1dC9DOlxcbG9jYWxkZXZcXG15LXByb2plY3RzXFxjaGF0LWxvdHRlcnkvc3JjXFxhcHBcXGNvbW1vblxcYnV5LWNhbmR5LWlucHV0XFxidXktY2FuZHktaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9idXktY2FuZHktaW5wdXQvYnV5LWNhbmR5LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQ1E7RUFDSSxlQUFBO0FDQ1o7QURBWTtFQUNJLFlBQUE7QUNFaEI7QURDUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaO0FER1k7RUFDSSxxQkFBQTtBQ0RoQjtBREtJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDSFI7QURJUTtFQUNJLFlBQUE7QUNGWjtBRE1JO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYnV5LWNhbmR5LWlucHV0L2J1eS1jYW5keS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXktY2FuZHktaW5wdXQge1xyXG4gICAgY29sb3I6ICNmZmNjMDE7XHJcblxyXG4gICAgLmNvdW50ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcclxuICAgICAgICAgICAgJi5saW5lLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ub2RlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzYzNjM2MztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjM2MzYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vZGUsIC5saW5lIHtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZjYzAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmF2YWlsYWJsZS1jdXJyZW5jeSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDZweCAxNnB4O1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4iLCIuYnV5LWNhbmR5LWlucHV0IHtcbiAgY29sb3I6ICNmZmNjMDE7XG59XG4uYnV5LWNhbmR5LWlucHV0IC5jb3VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5idXktY2FuZHktaW5wdXQgLmNvdW50ZXIgLndyYXBwZXIge1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4uYnV5LWNhbmR5LWlucHV0IC5jb3VudGVyIC53cmFwcGVyLmxpbmUtd3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5idXktY2FuZHktaW5wdXQgLmNvdW50ZXIgLm5vZGUge1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjM2MzYzO1xufVxuLmJ1eS1jYW5keS1pbnB1dCAuY291bnRlciAubGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MzYzNjM7XG59XG4uYnV5LWNhbmR5LWlucHV0IC5jb3VudGVyIC5ub2RlLmFjdGl2ZSwgLmJ1eS1jYW5keS1pbnB1dCAuY291bnRlciAubGluZS5hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICNmZmNjMDE7XG59XG4uYnV5LWNhbmR5LWlucHV0IC5hdmFpbGFibGUtY3VycmVuY3kge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiA0cHggNnB4IDE2cHg7XG59XG4uYnV5LWNhbmR5LWlucHV0IC5hdmFpbGFibGUtY3VycmVuY3kgLmxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ1eS1jYW5keS1pbnB1dCAubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/common/buy-candy-input/buy-candy-input.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/common/buy-candy-input/buy-candy-input.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BuyCandyInputComponent */

  /***/
  function srcAppCommonBuyCandyInputBuyCandyInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyCandyInputComponent", function () {
      return BuyCandyInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/lottery.service */
    "./src/app/services/lottery.service.ts");

    var BuyCandyInputComponent = /*#__PURE__*/function () {
      function BuyCandyInputComponent(authService, lotteryService) {
        _classCallCheck(this, BuyCandyInputComponent);

        this.authService = authService;
        this.lotteryService = lotteryService;
        this.showAnimation = false;
        this.amount = 0;
        this.ratio = 1;
      }

      _createClass(BuyCandyInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buyCandies",
        value: function buyCandies() {
          var _this17 = this;

          if (this.amount > 0 && this.amount * .01 <= this.authService.user.amountAvailable) {
            this.lotteryService.buyCandy(this.amount).subscribe(function () {});
            this.showAnimation = true;
            setTimeout(function () {
              _this17.showAnimation = false;
            }, 2000);
          }
        }
      }, {
        key: "updateAmount",
        value: function updateAmount(callback) {
          var _this18 = this;

          setTimeout(function () {
            if (_this18.amount === null) {
              return null;
            }

            if (_this18.amount < .0001) {
              _this18.amount = 0;
              return;
            }

            if (_this18.amount) {
              var amountStr = _this18.amount.toString();

              if (amountStr.indexOf('.') === 0) {
                if (amountStr.length > 5) {
                  _this18.amount = parseFloat(amountStr.substr(0, 5));
                }
              } else {
                var arr = amountStr.split('.');

                if (arr[1] && arr[1].length > 4) {
                  arr[1] = arr[1].substr(0, 4);
                }

                _this18.amount = parseFloat(arr.join('.'));
              }
            }

            callback();
          }, 0);
        }
      }, {
        key: "checkValue",
        value: function checkValue() {
          var _this19 = this;

          this.updateAmount(function () {
            if (_this19.amount > _this19.authService.user.amountAvailable / .01) {
              _this19.amount = _this19.authService.user.amountAvailable / .01;
            }
          });
        }
      }, {
        key: "setRatio",
        value: function setRatio(numerator) {
          var diff = this.lotteryService.currentLotteryInfo.availablePrizePool - this.lotteryService.currentLotteryInfo.currentEntries;
          this.ratio = numerator;
          this.amount = Math.ceil(numerator / 4 * (this.authService.user.amountAvailable / .01 > diff ? diff : this.authService.user.amountAvailable / .01));

          if (this.amount < 0) {
            this.amount = 0;
          }
        }
      }, {
        key: "isWithinRatio",
        value: function isWithinRatio(numerator) {
          var diff = this.lotteryService.currentLotteryInfo.availablePrizePool - this.lotteryService.currentLotteryInfo.currentEntries;
          var denoninator = this.authService.user.amountAvailable / .01 > diff ? diff : this.authService.user.amountAvailable / .01;
          var percent = this.amount / denoninator;

          if (percent === 0) {
            return false;
          }

          if (numerator === 1 && this.amount !== 0) {
            return true;
          }

          return numerator / 4 <= percent;
        }
      }, {
        key: "authorize",
        value: function authorize() {
          this.authService.authorize();
        }
      }]);

      return BuyCandyInputComponent;
    }();

    BuyCandyInputComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_3__["LotteryService"]
      }];
    };

    BuyCandyInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buy-candy-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buy-candy-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/buy-candy-input/buy-candy-input.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buy-candy-input.component.scss */
      "./src/app/common/buy-candy-input/buy-candy-input.component.scss"))["default"]]
    })], BuyCandyInputComponent);
    /***/
  },

  /***/
  "./src/app/common/info-component/info-component.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/common/info-component/info-component.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonInfoComponentInfoComponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info {\n  margin-top: 24px;\n  color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2luZm8tY29tcG9uZW50L0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxpbmZvLWNvbXBvbmVudFxcaW5mby1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9pbmZvLWNvbXBvbmVudC9pbmZvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9pbmZvLWNvbXBvbmVudC9pbmZvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvIHtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5pbmZvIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/common/info-component/info-component.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/common/info-component/info-component.component.ts ***!
    \*******************************************************************/

  /*! exports provided: InfoComponentComponent */

  /***/
  function srcAppCommonInfoComponentInfoComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponentComponent", function () {
      return InfoComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var InfoComponentComponent = /*#__PURE__*/function () {
      function InfoComponentComponent(authService) {
        _classCallCheck(this, InfoComponentComponent);

        this.authService = authService;
        this.date = new Date();
      }

      _createClass(InfoComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          setTimeout(function () {
            _this20.data = JSON.stringify(_this20.authService.dataObj);
          }, 2000);
        }
      }]);

      return InfoComponentComponent;
    }();

    InfoComponentComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    InfoComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./info-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/info-component/info-component.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./info-component.component.scss */
      "./src/app/common/info-component/info-component.component.scss"))["default"]]
    })], InfoComponentComponent);
    /***/
  },

  /***/
  "./src/app/common/language-select/language-select.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/common/language-select/language-select.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonLanguageSelectLanguageSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".language-select {\n  display: inline-block;\n}\n.language-select .language-container {\n  min-width: 120px;\n  display: flex;\n  text-align: left;\n}\n.language-select .flag {\n  height: 20px;\n  margin-right: 0.6rem;\n}\n.language-select.dark-background ::ng-deep .mat-select-arrow, .language-select.dark-background ::ng-deep .mat-select-value {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2xhbmd1YWdlLXNlbGVjdC9DOlxcbG9jYWxkZXZcXG15LXByb2plY3RzXFxjaGF0LWxvdHRlcnkvc3JjXFxhcHBcXGNvbW1vblxcbGFuZ3VhZ2Utc2VsZWN0XFxsYW5ndWFnZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9sYW5ndWFnZS1zZWxlY3QvbGFuZ3VhZ2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREVJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FDQU47QURLUTtFQUNFLFlBQUE7QUNIViIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9sYW5ndWFnZS1zZWxlY3QvbGFuZ3VhZ2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmd1YWdlLXNlbGVjdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgXHJcbiAgICAubGFuZ3VhZ2UtY29udGFpbmVyIHtcclxuICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICBcclxuICAgIC5mbGFnIHtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC42cmVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJi5kYXJrLWJhY2tncm91bmQge1xyXG4gICAgICA6Om5nLWRlZXAgIHtcclxuICAgICAgICAubWF0LXNlbGVjdC1hcnJvdywgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiLCIubGFuZ3VhZ2Utc2VsZWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmxhbmd1YWdlLXNlbGVjdCAubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5sYW5ndWFnZS1zZWxlY3QgLmZsYWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMC42cmVtO1xufVxuLmxhbmd1YWdlLXNlbGVjdC5kYXJrLWJhY2tncm91bmQgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93LCAubGFuZ3VhZ2Utc2VsZWN0LmRhcmstYmFja2dyb3VuZCA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/common/language-select/language-select.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/common/language-select/language-select.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LanguageSelectComponent */

  /***/
  function srcAppCommonLanguageSelectLanguageSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageSelectComponent", function () {
      return LanguageSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/translate.service */
    "./src/app/services/translate.service.ts");

    var LanguageSelectComponent = /*#__PURE__*/function () {
      function LanguageSelectComponent(translateService) {
        _classCallCheck(this, LanguageSelectComponent);

        this.translateService = translateService;
        this.languageOptions = this.translateService.languages;
      }

      _createClass(LanguageSelectComponent, [{
        key: "setTranslation",
        value: function setTranslation() {
          this.translateService.setCurrentLanguage = this.translation;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.translation) {
            this.translation = this.translateService.currentLanguage;
          }
        }
      }]);

      return LanguageSelectComponent;
    }();

    LanguageSelectComponent.ctorParameters = function () {
      return [{
        type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LanguageSelectComponent.prototype, "translation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LanguageSelectComponent.prototype, "darkBackground", void 0);
    LanguageSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-language-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./language-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/language-select/language-select.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./language-select.component.scss */
      "./src/app/common/language-select/language-select.component.scss"))["default"]]
    })], LanguageSelectComponent);
    /***/
  },

  /***/
  "./src/app/common/main-header/main-header.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/common/main-header/main-header.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonMainHeaderMainHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 55px;\n  background-color: #2a2d32;\n  padding: 0 12px;\n}\n.main-header .icon-container {\n  overflow: hidden;\n}\n.main-header .menu-icon {\n  color: #ffcc01;\n  font-size: 38px;\n  position: relative;\n  right: 6px;\n}\n.main-header .icon-chevronright {\n  font-size: 23px;\n}\n.main-header .icon-chevronright:active {\n  background: none;\n}\n.main-header .icon-chevronright .chevron-down:before {\n  transform: rotate(90deg) translateX(3px);\n}\n.main-header .icon-chevronright .chevron-up:before {\n  transform: rotate(-90deg) translateX(3px);\n}\n.main-header .right-section-container {\n  position: relative;\n  height: 80%;\n}\n.main-header .right-section-container .option-overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n.main-header .right-section-container .options {\n  border-radius: 16px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  height: 0;\n  transition: height 0.5s;\n  opacity: 0;\n  overflow: hidden;\n}\n.main-header .right-section-container .options.show {\n  height: 295px;\n  opacity: 1;\n  box-shadow: 0px 0px 15px 6px black;\n}\n.main-header .right-section-container .options .option-placeholder {\n  height: 45px;\n  background-color: #cf1942;\n}\n.main-header .right-section-container .options .option {\n  color: white;\n  font-weight: 500;\n  padding: 6px 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 26px;\n  position: relative;\n  cursor: pointer;\n}\n.main-header .right-section-container .options .option img {\n  height: 38px;\n}\n.main-header .right-section-container .options .option:last-child {\n  border-radius: 0 0 16px 16px;\n}\n.main-header .icon-placeholder {\n  width: 55px;\n  flex-basis: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main-header .icon-placeholder .icon-img {\n  height: 90%;\n}\n.main-header .right-section {\n  border-radius: 16px;\n  padding: 2px 0;\n  display: flex;\n  position: relative;\n  height: 100%;\n  z-index: 3;\n  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.5);\n}\n.main-header .right-section .section-content {\n  text-align: center;\n  padding: 0 12px;\n}\n.main-header .right-section .section-content .subtitle {\n  font-weight: 500;\n  font-size: 11px;\n}\n.main-header .right-section .section-content .content {\n  font-weight: 500;\n  font-size: 26px;\n  line-height: 22px;\n}\n.main-header .percentage {\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL21haW4taGVhZGVyL0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxcY29tbW9uXFxtYWluLWhlYWRlclxcbWFpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDSSxnQkFBQTtBQ0NSO0FERUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FSO0FER0k7RUFDSSxlQUFBO0FDRFI7QURFUTtFQUNFLGdCQUFBO0FDQVY7QURFUTtFQUNJLHdDQUFBO0FDQVo7QURFUTtFQUNJLHlDQUFBO0FDQVo7QURJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FESVE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQ0ZaO0FET1E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0xaO0FET1k7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDTGhCO0FEUVk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNOaEI7QURTWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxlQUFBO0FDUmhCO0FEU2dCO0VBQ0ksWUFBQTtBQ1BwQjtBRFVnQjtFQUNJLDRCQUFBO0FDUnBCO0FEY0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1pSO0FEYVE7RUFDSSxXQUFBO0FDWFo7QURlSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7QUNiUjtBRGVRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDYlo7QURlWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ2JoQjtBRGVZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNiaEI7QURrQkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDaEJOIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuXHJcbiAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmNjMDE7XHJcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uLWNoZXZyb25yaWdodCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZXZyb24tZG93bjpiZWZvcmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWCgzcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hldnJvbi11cDpiZWZvcmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVgoM3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LXNlY3Rpb24tY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcblxyXG4gICAgICAgIC5vcHRpb24tb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjUpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbi8vIFRPRE86IEFkZCBhbmltYXRpb25zIGZvciB3aGVuIGl0IGNsb3NlcyFcclxuXHJcbiAgICAgICAgLm9wdGlvbnMge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC41cztcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICYuc2hvdyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI5NXB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCA2cHggYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5vcHRpb24tcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmMTk0MjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE2cHggMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaWNvbi1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLmljb24taW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1zZWN0aW9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA0cHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcblxyXG4gICAgICAgIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuXHJcbiAgICAgICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGVyY2VudGFnZSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcbiIsIi5tYWluLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDMyO1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG4ubWFpbi1oZWFkZXIgLmljb24tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLWhlYWRlciAubWVudS1pY29uIHtcbiAgY29sb3I6ICNmZmNjMDE7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNnB4O1xufVxuLm1haW4taGVhZGVyIC5pY29uLWNoZXZyb25yaWdodCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cbi5tYWluLWhlYWRlciAuaWNvbi1jaGV2cm9ucmlnaHQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5tYWluLWhlYWRlciAuaWNvbi1jaGV2cm9ucmlnaHQgLmNoZXZyb24tZG93bjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWCgzcHgpO1xufVxuLm1haW4taGVhZGVyIC5pY29uLWNoZXZyb25yaWdodCAuY2hldnJvbi11cDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVgoM3B4KTtcbn1cbi5tYWluLWhlYWRlciAucmlnaHQtc2VjdGlvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODAlO1xufVxuLm1haW4taGVhZGVyIC5yaWdodC1zZWN0aW9uLWNvbnRhaW5lciAub3B0aW9uLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxO1xufVxuLm1haW4taGVhZGVyIC5yaWdodC1zZWN0aW9uLWNvbnRhaW5lciAub3B0aW9ucyB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cztcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLWhlYWRlciAucmlnaHQtc2VjdGlvbi1jb250YWluZXIgLm9wdGlvbnMuc2hvdyB7XG4gIGhlaWdodDogMjk1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCA2cHggYmxhY2s7XG59XG4ubWFpbi1oZWFkZXIgLnJpZ2h0LXNlY3Rpb24tY29udGFpbmVyIC5vcHRpb25zIC5vcHRpb24tcGxhY2Vob2xkZXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjE5NDI7XG59XG4ubWFpbi1oZWFkZXIgLnJpZ2h0LXNlY3Rpb24tY29udGFpbmVyIC5vcHRpb25zIC5vcHRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDZweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1haW4taGVhZGVyIC5yaWdodC1zZWN0aW9uLWNvbnRhaW5lciAub3B0aW9ucyAub3B0aW9uIGltZyB7XG4gIGhlaWdodDogMzhweDtcbn1cbi5tYWluLWhlYWRlciAucmlnaHQtc2VjdGlvbi1jb250YWluZXIgLm9wdGlvbnMgLm9wdGlvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE2cHggMTZweDtcbn1cbi5tYWluLWhlYWRlciAuaWNvbi1wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiA1NXB4O1xuICBmbGV4LWJhc2lzOiA1NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYWluLWhlYWRlciAuaWNvbi1wbGFjZWhvbGRlciAuaWNvbi1pbWcge1xuICBoZWlnaHQ6IDkwJTtcbn1cbi5tYWluLWhlYWRlciAucmlnaHQtc2VjdGlvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDJweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ubWFpbi1oZWFkZXIgLnJpZ2h0LXNlY3Rpb24gLnNlY3Rpb24tY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMnB4O1xufVxuLm1haW4taGVhZGVyIC5yaWdodC1zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLnN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW4taGVhZGVyIC5yaWdodC1zZWN0aW9uIC5zZWN0aW9uLWNvbnRlbnQgLmNvbnRlbnQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLm1haW4taGVhZGVyIC5wZXJjZW50YWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common/main-header/main-header.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/common/main-header/main-header.component.ts ***!
    \*************************************************************/

  /*! exports provided: MainHeaderComponent */

  /***/
  function srcAppCommonMainHeaderMainHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function () {
      return MainHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/account.service */
    "./src/app/services/account.service.ts");
    /* harmony import */


    var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/lottery.service */
    "./src/app/services/lottery.service.ts");

    var MainHeaderComponent = /*#__PURE__*/function () {
      function MainHeaderComponent(accountService, lotteryService) {
        _classCallCheck(this, MainHeaderComponent);

        this.accountService = accountService;
        this.lotteryService = lotteryService;
      }

      _createClass(MainHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openOptions",
        value: function openOptions() {
          this.showOptions = !this.showOptions;
        }
      }, {
        key: "setOption",
        value: function setOption(option) {
          this.showOptions = false;
          this.lotteryService.selectedOption = option;
        }
      }, {
        key: "showAccount",
        value: function showAccount() {
          this.accountService.setAccountSettings(true);
        }
      }]);

      return MainHeaderComponent;
    }();

    MainHeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
      }, {
        type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_3__["LotteryService"]
      }];
    };

    MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/main-header/main-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-header.component.scss */
      "./src/app/common/main-header/main-header.component.scss"))["default"]]
    })], MainHeaderComponent);
    /***/
  },

  /***/
  "./src/app/common/pool-select/pool-select.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/common/pool-select/pool-select.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonPoolSelectPoolSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9wb29sLXNlbGVjdC9wb29sLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/common/pool-select/pool-select.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/common/pool-select/pool-select.component.ts ***!
    \*************************************************************/

  /*! exports provided: PoolSelectComponent */

  /***/
  function srcAppCommonPoolSelectPoolSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PoolSelectComponent", function () {
      return PoolSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PoolSelectComponent = /*#__PURE__*/function () {
      function PoolSelectComponent() {
        _classCallCheck(this, PoolSelectComponent);
      }

      _createClass(PoolSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PoolSelectComponent;
    }();

    PoolSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pool-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pool-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/pool-select/pool-select.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pool-select.component.scss */
      "./src/app/common/pool-select/pool-select.component.scss"))["default"]]
    })], PoolSelectComponent);
    /***/
  },

  /***/
  "./src/app/common/window-ref.ts":
  /*!**************************************!*\
    !*** ./src/app/common/window-ref.ts ***!
    \**************************************/

  /*! exports provided: WindowRef */

  /***/
  function srcAppCommonWindowRefTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowRef", function () {
      return WindowRef;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    function _window() {
      // return the global native browser window object
      return window;
    }

    var WindowRef = /*#__PURE__*/function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "nativeWindow",
        get: function get() {
          return _window();
        }
      }]);

      return WindowRef;
    }();

    WindowRef = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], WindowRef);
    /***/
  },

  /***/
  "./src/app/common/winner-panel/winner-panel.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/common/winner-panel/winner-panel.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonWinnerPanelWinnerPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".winner-panel {\n  border-radius: 16px;\n  letter-spacing: 0;\n}\n.winner-panel.place-0 {\n  background-color: #ffcc00;\n  color: black;\n  min-height: 45px;\n}\n.winner-panel.place-1 {\n  color: black;\n  background-color: #07f79a;\n  min-height: 83px;\n}\n.winner-panel.place-2 {\n  color: white;\n  background-color: #7b16e3;\n  min-height: 83px;\n}\n.winner-panel.place-3 {\n  background-color: #2977d7;\n  color: white;\n  min-height: 83px;\n}\n.winner-panel.place-4 {\n  color: white;\n  background-color: #762846;\n  min-height: 83px;\n}\n.winner-panel.place-5 {\n  color: white;\n  background-color: #d36d12;\n  min-height: 83px;\n}\n.winner-panel .winner-container {\n  display: flex;\n}\n.winner-panel .place {\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  padding: 0 16px;\n}\n.winner-panel .first-candy {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px;\n  text-align: center;\n  flex-basis: 100%;\n}\n.winner-panel .first-candy .winnings {\n  flex-basis: 40%;\n  padding-right: 12px;\n}\n.winner-panel .first-candy .username {\n  font-size: 15px;\n}\n.winner-panel .first-candy .number {\n  font-size: 12px;\n}\n.winner-panel .table-container {\n  flex-grow: 1;\n  display: flex;\n  flex-wrap: wrap;\n}\n.winner-panel .table-container .candy {\n  padding: 2px;\n  text-align: center;\n  flex-basis: 49%;\n}\n.winner-panel .table-container .candy .username {\n  font-size: 12px;\n  line-height: 12px;\n}\n.winner-panel .table-container .candy .number {\n  font-size: 10px;\n  line-height: 11px;\n}\n.winner-panel .table-container .candy .you-won {\n  color: black;\n  background-color: #FFCC00;\n  border-radius: 10px;\n  font-size: 9px;\n  padding: 1px 2px;\n}\n.winner-panel .winnings {\n  flex-basis: 100% !important;\n  padding-right: 16px;\n  text-align: left;\n  justify-content: space-between;\n  display: flex;\n}\n.winner-panel .winnings .amount {\n  display: inline-block;\n  font-size: 11px;\n  color: white;\n  padding: 3px 12px;\n  background-color: #2b3036;\n  border-radius: 10px;\n  margin-bottom: 4px;\n}\n.winner-panel .winnings .dots {\n  color: white;\n  font-size: 44px;\n  line-height: 0;\n}\n.winner-panel .winnings .count {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3dpbm5lci1wYW5lbC9DOlxcbG9jYWxkZXZcXG15LXByb2plY3RzXFxjaGF0LWxvdHRlcnkvc3JjXFxhcHBcXGNvbW1vblxcd2lubmVyLXBhbmVsXFx3aW5uZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi93aW5uZXItcGFuZWwvd2lubmVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQ0k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NSO0FERUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER0k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0RSO0FESUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FES0k7RUFDSSxhQUFBO0FDSFI7QURNSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSlI7QURPSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMUjtBRE1RO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDSlo7QURPUTtFQUNJLGVBQUE7QUNMWjtBRE9RO0VBQ0ksZUFBQTtBQ0xaO0FEVUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNSUjtBRFNRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1BaO0FEUVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNOaEI7QURRWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ05oQjtBRFFZO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNOaEI7QURXSTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ1RSO0FEVVE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNSWjtBRFdRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVFo7QURZUTtFQUNJLGVBQUE7QUNWWiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi93aW5uZXItcGFuZWwvd2lubmVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpbm5lci1wYW5lbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAmLnBsYWNlLTAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjMDA7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wbGFjZS0xIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3Zjc5YTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4M3B4O1xyXG4gICAgfVxyXG5cclxuICAgICYucGxhY2UtMiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjE2ZTM7XHJcbiAgICAgICAgbWluLWhlaWdodDogODNweDtcclxuICAgIH1cclxuICAgICYucGxhY2UtMyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NzdkNztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWluLWhlaWdodDogODNweDtcclxuICAgIH1cclxuXHJcbiAgICAmLnBsYWNlLTQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYyODQ2O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wbGFjZS01IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzNmQxMjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4M3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC53aW5uZXItY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGFjZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdC1jYW5keSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgLndpbm5pbmdzIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXJuYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubnVtYmVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5jYW5keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA0OSU7XHJcbiAgICAgICAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnVtYmVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC55b3Utd29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNDMDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53aW5uaW5ncyB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuYW1vdW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjMwMzY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb3RzIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3VudCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLndpbm5lci1wYW5lbCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS0wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBtaW4taGVpZ2h0OiA0NXB4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS0xIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdmNzlhO1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS0yIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxNmUzO1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NzdkNztcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS00IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYyODQ2O1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbC5wbGFjZS01IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM2ZDEyO1xuICBtaW4taGVpZ2h0OiA4M3B4O1xufVxuLndpbm5lci1wYW5lbCAud2lubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2lubmVyLXBhbmVsIC5wbGFjZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLndpbm5lci1wYW5lbCAuZmlyc3QtY2FuZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWJhc2lzOiAxMDAlO1xufVxuLndpbm5lci1wYW5lbCAuZmlyc3QtY2FuZHkgLndpbm5pbmdzIHtcbiAgZmxleC1iYXNpczogNDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuLndpbm5lci1wYW5lbCAuZmlyc3QtY2FuZHkgLnVzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLndpbm5lci1wYW5lbCAuZmlyc3QtY2FuZHkgLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi53aW5uZXItcGFuZWwgLnRhYmxlLWNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLndpbm5lci1wYW5lbCAudGFibGUtY29udGFpbmVyIC5jYW5keSB7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWJhc2lzOiA0OSU7XG59XG4ud2lubmVyLXBhbmVsIC50YWJsZS1jb250YWluZXIgLmNhbmR5IC51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG4ud2lubmVyLXBhbmVsIC50YWJsZS1jb250YWluZXIgLmNhbmR5IC5udW1iZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLndpbm5lci1wYW5lbCAudGFibGUtY29udGFpbmVyIC5jYW5keSAueW91LXdvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0MwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHBhZGRpbmc6IDFweCAycHg7XG59XG4ud2lubmVyLXBhbmVsIC53aW5uaW5ncyB7XG4gIGZsZXgtYmFzaXM6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndpbm5lci1wYW5lbCAud2lubmluZ3MgLmFtb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMDM2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ud2lubmVyLXBhbmVsIC53aW5uaW5ncyAuZG90cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi53aW5uZXItcGFuZWwgLndpbm5pbmdzIC5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/common/winner-panel/winner-panel.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/common/winner-panel/winner-panel.component.ts ***!
    \***************************************************************/

  /*! exports provided: WinnerPanelComponent */

  /***/
  function srcAppCommonWinnerPanelWinnerPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WinnerPanelComponent", function () {
      return WinnerPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_constants_placeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/constants/placeMap */
    "./src/app/constants/placeMap.ts");

    var WinnerPanelComponent = /*#__PURE__*/function () {
      function WinnerPanelComponent(router) {
        _classCallCheck(this, WinnerPanelComponent);

        this.router = router;
        this.placeMap = src_app_constants_placeMap__WEBPACK_IMPORTED_MODULE_3__["PlaceMap"];
      }

      _createClass(WinnerPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToWinnings",
        value: function goToWinnings() {
          this.router.navigate(['/payout-history'], {
            queryParams: {
              level: this.place + 1
            }
          });
        }
      }]);

      return WinnerPanelComponent;
    }();

    WinnerPanelComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WinnerPanelComponent.prototype, "winnerInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WinnerPanelComponent.prototype, "place", void 0);
    WinnerPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-winner-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./winner-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/winner-panel/winner-panel.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./winner-panel.component.scss */
      "./src/app/common/winner-panel/winner-panel.component.scss"))["default"]]
    })], WinnerPanelComponent);
    /***/
  },

  /***/
  "./src/app/constants/cn.ts":
  /*!*********************************!*\
    !*** ./src/app/constants/cn.ts ***!
    \*********************************/

  /*! exports provided: ChineseTranslations */

  /***/
  function srcAppConstantsCnTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChineseTranslations", function () {
      return ChineseTranslations;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ChineseTranslations = {
      '2fa-verification': '2FA验证',
      '6-digit-code': '6位数代码',
      'account-history': '存提历史记录',
      'all-candies': '幸运糖果总数',
      'an-error-has-occurred': '发生了错误。',
      'available': '可用余数',
      'balance': '余数',
      'betting-history': '投票记录',
      'bind-2fa': '绑定2FA',
      'block': '封锁',
      'blocks': '封锁',
      'buy': '购买',
      'buy-candies': '购买 {0} 糖果',
      'buying-candies': '幸运投票',
      'buying-candies-etc': '在主页上，您可以参与幸运投票。目前参与幸运投票的只限BTOK，每投一票需要消耗0.01枚BTOK，可以多投。幸运池会在所有幸运投票票完成之后自动从区块链上选出参与者得到幸运糖果。',
      'confirm': '确认',
      'connect-2fa': '连接2FA',
      'copy-address': '复制地址',
      'copy-account': '复制帐户',
      'copy-code': '复制代码',
      'copy-memo': '复制备忘录',
      'create-new-account': '建立新帐户',
      'current-candies': '当前幸运票糖果',
      'current-users-entered': '当前加入的玩家',
      'deposit': '存入',
      'depositing-any-other-asset-here-may-result-in-permanent-loss': '在此处存放任何其他资产可能会导致永久损失。',
      'deposit-funds': '存入余数',
      'depositing-funds': '存入',
      'depositing-funds-etc': '您必须按照“存入”页面上的说明将资金存入您的钱包。',
      'drawing-begins-after-candies': '累计 {0} 票后开始抽奖',
      'drawing-begins-after-users-enter': ' {0} 名用户加入后开始抽奖',
      'drawing-begins-in': '开奖倒计时',
      'enter-your-2fa-code-and-press-confirm-to-bind-your-account': '输入您的2FA代码，然后按“确认”以绑定您的帐户。',
      'fair-chance-guarantee': '公平竞争',
      'fair-chance-guarantee-etc': '该游戏的结果是通过区块链智能合约技术自动生成的，无法更改。所有结果均为最终结果，概不退还。每个区块都可以通过区块链浏览器进行验证。',
      'finished': '完成',
      'from': '来源',
      'generating-winners': '采摘幸运糖果',
      'hello': '你好',
      'hi-your-new-account-is-ready': '嗨 {0},\n 您的新帐户已准备就绪！',
      'history': '存提历史记录',
      'how-to-play': '游戏规则',
      'link': '连接',
      'login': '登录',
      'login-register-to-play': '登录 / 注册',
      'login-register-to-play-now': '登录 / 注册, 马上参与！',
      'logo': '../../../assets/images/CN-luckystrike-min.png',
      'logout': '登出',
      'max-buy': '最高买入',
      'mini-pool-winner': '迷你幸运池优胜者',
      'more-candies': '购买更多',
      'my-candy-ids': '我的幸运糖果',
      'my-candies': '我的幸运糖果',
      'my-winnings': '我的幸运奖',
      'next-pool-starts-in': '下一个幸运池即将开始于',
      'next-step': '下一步',
      'no-bonus-winnings': '没有幸运奖金',
      'no-further-activity': '没有进一步的动态',
      'now-drawing-winners': '正在抽幸运者',
      'once-your-account-is-bound-you-can-not-view-this-code-again': '绑定帐户后，您将无法再次查看此代码。',
      'only-deposit-post-to-this-address': '请仅将BTOK存入此地址。如在此处存放任何其他资产可能会永久损失。',
      'optional': '可选',
      'password': '密码',
      'payout-history': '幸运奖金历史',
      'payouts': '幸运奖金支出',
      'payouts-etc': '一等幸运糖果 = 80币(1名) \n二等幸运糖果 = 20币(4名) \n三等幸运糖果 = 5币(20名) \n4等幸运糖果 = 0.2币(100名) \n5等幸运糖果 = 0.1币(200名) \n 6等幸运糖果 = 0.02币(10,000名) \n安慰奖 = 0.01币(30,000名)',
      'play-now': '即刻开玩',
      'please-backup-this-code-somewhere': '请将此代码备份到某处。',
      'please-confirm-your-withdrawal-address': '请确认您的提出地址',
      'please-login-through-the-app': '请通过应用程序登录',
      'pool-opened': '幸运池开启',
      'prize-pool': '幸运池',
      'register-new-account': '注册新帐号',
      'remember-your-profile-is-anonymous-etc': '请记住：您的个人资料是匿名的，这意味着如果您忘记密码，我们将无法恢复您的帐户。若启用2FA可获得额外的安全性！',
      'scan-this-code-with-your-2fa-app': '使用2FA应用程序扫描此代码。请将此代码备份到某处。绑定帐户后，您将无法再次查看此代码。',
      'see-all-candy-entries': '查看所有幸运票数',
      'sign-up-for-an-anonymous-acount-and-start-playing-today': '立即注册一个匿名帐户并开始获得好运!',
      'submit-withdrawal': '申请提出',
      'success': '成功',
      'target-block-height': '区块数量',
      'candy': '幸运糖果',
      'candy-entry-limit-reached': '本期购买已截止',
      'total-candies': '幸运票总数',
      'try-again-next-time': '再试一次',
      'username': '用户名',
      'win': '赢得',
      'winners': '幸运糖果优胜者',
      'winning': '幸运结果',
      'winning-etc': '当您得到幸运糖果时，您的糖果将自动添加到您的可用余数中。',
      'winnings-history': '中奖记录',
      'withdraw': '提出',
      'withdrawing-funds': '提取',
      'withdrawing-funds-etc': '您可以通过“提取”页面提取幸运糖果。请按照说明进行操作，并确保验证您的提取地址。幸运糖果支出。',
      'withdraw-process-usually-takes-about-1-hour-or-less': '提出过程通常需要大约1小时或更短。',
      'withdrawal-address': '提出地址',
      'withdrawal-amount': '提出金额',
      'work-in-progress': '工作正在进行中',
      'you-won': '您中奖了！',
      'your-account-is-now-bound': '您的帐户现已绑定。'
    };
    /***/
  },

  /***/
  "./src/app/constants/placeMap.ts":
  /*!***************************************!*\
    !*** ./src/app/constants/placeMap.ts ***!
    \***************************************/

  /*! exports provided: PlaceMap, PlaceMapArr */

  /***/
  function srcAppConstantsPlaceMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceMap", function () {
      return PlaceMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceMapArr", function () {
      return PlaceMapArr;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PlaceMap = {
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
    var PlaceMapArr = [{
      name: '1st',
      winnerCount: 1,
      rank: 1
    }, {
      name: '2nd',
      winnerCount: 4,
      rank: 2
    }, {
      name: '3rd',
      winnerCount: 20,
      rank: 3
    }, {
      name: '4th',
      winnerCount: 100,
      rank: 4
    }, {
      name: '5th',
      winnerCount: 200,
      rank: 5
    }, {
      name: '6th',
      winnerCount: 10000,
      rank: 6
    }];
    /***/
  },

  /***/
  "./src/app/constants/us.ts":
  /*!*********************************!*\
    !*** ./src/app/constants/us.ts ***!
    \*********************************/

  /*! exports provided: EnglishTranslations */

  /***/
  function srcAppConstantsUsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnglishTranslations", function () {
      return EnglishTranslations;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EnglishTranslations = {
      '2fa-verification': '2FA Verification',
      '6-digit-code': '6-Digit Code',
      'account-history': 'Account History',
      'all-candies': 'All Candies',
      'an-error-has-occurred': 'An error has occurred.',
      'available': 'Available',
      'balance': 'Balance',
      'betting-history': 'Betting History',
      'bind-2fa': 'Bind 2FA',
      'block': 'Block',
      'blocks': 'Blocks',
      'buy': 'Buy',
      'buy-candies': 'Buy {0} candies',
      'buying-candies': 'Buying Candies',
      'buying-candies-etc': 'On the main page, you can buy candies using your available funds. Each candy costs 0.01 BTOK. Once candy is purchased, you must wait until the requirements for the prize pool are fulfilled before the winners will be drawn',
      'confirm': 'Confirm',
      'connect-2fa': 'Connect 2FA',
      'copy-address': 'Copy Address',
      'copy-account': 'Copy Account',
      'copy-code': 'Copy Code',
      'copy-memo': 'Copy Memo',
      'create-new-account': 'Create New Account',
      'current-candies': 'Current Candies',
      'deposit': 'Deposit',
      'depositing-any-other-asset-here-may-result-in-permanent-loss': 'Depositing any other assets here may result in permanent loss',
      'deposit-funds': 'Deposit Funds',
      'depositing-funds': 'Depositing Funds',
      'depositing-funds-etc': 'You must deposit funds into your wallet by following the instructions on the "Deposit" page',
      'drawing-begins-after-candies': 'Drawing Begins \n After {0} Candies',
      'drawing-begins-in': 'Drawing Begins In',
      'enter-your-2fa-code-and-press-confirm-to-bind-your-account': 'Enter you 2FA code and press \"confirm\" to bind your account',
      'fair-chance-guarantee': 'Fair Chance Guarantee',
      'fair-chance-guarantee-etc': 'The results of this game are generated automatically through blockchain smart-contract technology and cannot be changed. All results are final and nonrefundable. Each block can be verified through the blockchain explorer.',
      'finished': 'Finished',
      'from': 'From',
      'generating-winners': 'Generating Winners',
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
      'more-candies': 'More Candies',
      'my-candy-ids': 'My Candy IDs',
      'my-candies': 'My Candies',
      'my-winnings': 'My Winnings',
      'next-pool-starts-in': 'Next Pool Starts In',
      'next-step': 'Next Step',
      'no-bonus-winnings': 'No Bonus Winnings',
      'no-further-activity': 'No Further Activity',
      'now-drawing-winners': 'Now Drawing Winners',
      'once-your-account-is-bound-you-can-not-view-this-code-again': 'Once your account is bound, you can not view this code again',
      'only-deposit-post-to-this-address': 'Only deposit BTOK to this address',
      'optional': 'Optional',
      'password': 'Password',
      'payout-history': 'Payout History',
      'payouts': 'Payouts',
      'payouts-etc': '1st Prize = 80 BTOK (1 winner)\n2nd Prize = 20 BTOK (split between 4 winners)\n3rd Prize = 5 BTOK (split between 20 winners)\n4th Prize = .2 BTOK (split between 100 winners)\n5th Prize = .1 BTOK (split between 200 winners)\n6th Prize = .02 BTOK (split between 10,000 winners)\nBONUS Prize = .01 BTOK (split between 30,000 winners)',
      'pool-opened': 'Pool opened',
      'play-now': 'Play Now',
      'please-backup-this-code-somewhere': 'Please backup this code somewhere',
      'please-confirm-your-withdrawal-address': 'Please confirm your withdrawal address',
      'please-login-through-the-app': 'Please Login Through the App',
      'prize-pool': 'Prize Pool',
      'register-new-account': 'Register New Account',
      'remember-your-profile-is-anonymous-etc': 'Remember: your profile is anonymous, which means we can\'t recover your account if you forget your password. Enable 2FA for extra security',
      'scan-this-code-with-your-2fa-app': 'Scan this code with your 2FA app',
      'see-all-candy-entries': 'See all candy entries',
      'sign-up-for-an-anonymous-acount-and-start-playing-today': 'Sign up for an anonymous account and start playing today',
      'submit-withdrawal': 'Submit Withdrawal',
      'success': 'Success',
      'target-block-height': 'Target Block Height',
      'candy': 'Candy',
      'candy-entry-limit-reached': 'Candy Entry Limit Reached',
      'total-candies': 'Total Candies',
      'try-again-next-time': 'Try again next time',
      'username': 'Username',
      'win': 'Win',
      'winners': 'Winners',
      'winning': 'Winning',
      'winnings-history': 'Winnings History',
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
    /***/
  },

  /***/
  "./src/app/home/drawing-info/drawing-info.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/home/drawing-info/drawing-info.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeDrawingInfoDrawingInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".drawing-info {\n  text-align: center;\n  color: white;\n  letter-spacing: 1px;\n}\n.drawing-info .heading {\n  white-space: pre-wrap;\n  font-weight: 400;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  line-height: 28px;\n  height: 70px;\n  font-size: 27px;\n  margin-bottom: 22px;\n}\n.drawing-info .heading.small {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 6px;\n  margin-bottom: 0;\n}\n.drawing-info .subheading {\n  margin-top: 40px;\n  font-size: 18px;\n}\n.drawing-info .subtitle {\n  font-size: 18px;\n}\n.drawing-info .value {\n  font-size: 50px;\n  line-height: 46px;\n}\n.drawing-info .value .small {\n  font-weight: 300;\n  font-size: 16px;\n  margin-top: 16px;\n}\n.drawing-info .winnings-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n}\n.drawing-info .winnings-container .winning-panel {\n  margin-top: 8px;\n  padding: 0 16px;\n  transform: translateX(0);\n  transition: transform 1s;\n}\n.drawing-info .winnings-container .winning-panel.isHidden {\n  transform: translateX(100vw);\n}\n.drawing-info .winnings-container .hideText {\n  visibility: hidden;\n}\n.drawing-info .my-winnings {\n  padding: 12px 8px;\n  background-color: #2a2d32;\n  display: flex;\n  justify-content: space-between;\n  height: 65px;\n  border-radius: 16px;\n}\n.drawing-info .my-winnings .winning-icon {\n  height: 100%;\n  width: 60px;\n}\n.drawing-info .my-winnings .winning-icon img {\n  height: 100%;\n}\n.drawing-info .my-winnings .label {\n  color: white;\n  font-size: 14px;\n}\n.drawing-info .my-winnings .amount {\n  color: #ffcc00;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kcmF3aW5nLWluZm8vQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxob21lXFxkcmF3aW5nLWluZm9cXGRyYXdpbmctaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9kcmF3aW5nLWluZm8vZHJhd2luZy1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDUTtFQUNJLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRFI7QURJSTtFQUNJLGVBQUE7QUNGUjtBREtJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDSFI7QURLUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSFo7QURPSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNMUjtBRE9RO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FDTFo7QURPWTtFQUNJLDRCQUFBO0FDTGhCO0FEU1E7RUFDRSxrQkFBQTtBQ1BWO0FEWUk7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVlI7QURZUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDVlo7QURXWTtFQUNJLFlBQUE7QUNUaEI7QURhUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDWFo7QURhUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDWFoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2RyYXdpbmctaW5mby9kcmF3aW5nLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2luZy1pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuXHJcbiAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdWJoZWFkaW5nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAudmFsdWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcclxuXHJcbiAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud2lubmluZ3MtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLndpbm5pbmctcGFuZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcblxyXG4gICAgICAgICAgICAmLmlzSGlkZGVuIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oaWRlVGV4dCB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubXktd2lubmluZ3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblxyXG4gICAgICAgIC53aW5uaW5nLWljb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFtb3VudCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5kcmF3aW5nLWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5kcmF3aW5nLWluZm8gLmhlYWRpbmcge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cbi5kcmF3aW5nLWluZm8gLmhlYWRpbmcuc21hbGwge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmRyYXdpbmctaW5mbyAuc3ViaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5kcmF3aW5nLWluZm8gLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmRyYXdpbmctaW5mbyAudmFsdWUge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxuLmRyYXdpbmctaW5mbyAudmFsdWUgLnNtYWxsIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmRyYXdpbmctaW5mbyAud2lubmluZ3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kcmF3aW5nLWluZm8gLndpbm5pbmdzLWNvbnRhaW5lciAud2lubmluZy1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbn1cbi5kcmF3aW5nLWluZm8gLndpbm5pbmdzLWNvbnRhaW5lciAud2lubmluZy1wYW5lbC5pc0hpZGRlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XG59XG4uZHJhd2luZy1pbmZvIC53aW5uaW5ncy1jb250YWluZXIgLmhpZGVUZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmRyYXdpbmctaW5mbyAubXktd2lubmluZ3Mge1xuICBwYWRkaW5nOiAxMnB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uZHJhd2luZy1pbmZvIC5teS13aW5uaW5ncyAud2lubmluZy1pY29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNjBweDtcbn1cbi5kcmF3aW5nLWluZm8gLm15LXdpbm5pbmdzIC53aW5uaW5nLWljb24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXdpbmctaW5mbyAubXktd2lubmluZ3MgLmxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZHJhd2luZy1pbmZvIC5teS13aW5uaW5ncyAuYW1vdW50IHtcbiAgY29sb3I6ICNmZmNjMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/drawing-info/drawing-info.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/drawing-info/drawing-info.component.ts ***!
    \*************************************************************/

  /*! exports provided: DrawingInfoComponent */

  /***/
  function srcAppHomeDrawingInfoDrawingInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawingInfoComponent", function () {
      return DrawingInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/lottery.service */
    "./src/app/services/lottery.service.ts");
    /* harmony import */


    var src_app_services_block_chain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/block-chain.service */
    "./src/app/services/block-chain.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var DrawingInfoComponent = /*#__PURE__*/function () {
      function DrawingInfoComponent(authService, blockchainService, lotteryService) {
        _classCallCheck(this, DrawingInfoComponent);

        this.authService = authService;
        this.blockchainService = blockchainService;
        this.lotteryService = lotteryService;
        this.myWinningsIncrement = 0;
        this.incrementInterval = 500;
      }

      _createClass(DrawingInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.monitorWinnings();
        }
      }, {
        key: "monitorWinnings",
        value: function monitorWinnings() {
          var _this21 = this;

          this.checkWinningInterval = setTimeout(function () {
            if (_this21.lotteryService.currentLotteryInfo.lotteryStatus !== '2') {
              _this21.incrementInterval = 500;
              _this21.myWinningsIncrement = 0;
            } else {
              _this21.incrementInterval = 20;
              var winners = _this21.lotteryService.currentLotteryInfo.winners;
              var myWinnings = winners.minipool.winningAmount;
              winners.main.forEach(function (item) {
                if (item && item.myWinnings) {
                  myWinnings += item.myWinnings;
                }
              });

              if (!myWinnings || _this21.myWinningsIncrement >= myWinnings) {
                _this21.myWinningsIncrement = _this21.myWinningsIncrement;
                _this21.incrementInterval = 500;
              } else if (_this21.myWinningsIncrement < myWinnings) {
                _this21.myWinningsIncrement += 1;
              }
            }

            _this21.monitorWinnings();
          }, this.incrementInterval);
        }
      }, {
        key: "getRemainingBlocks",
        value: function getRemainingBlocks() {
          if (this.blockchainService.rollingLog && this.blockchainService.rollingLog.length && this.lotteryService.currentLotteryInfo.targetBlockHeight) {
            var count = this.lotteryService.currentLotteryInfo.targetBlockHeight - parseInt(this.blockchainService.rollingLog[0].number, 16);

            if (count < 0) {
              return 0;
            }

            return count;
          } else {
            return '....';
          }
        }
      }, {
        key: "finalizeWinning",
        value: function finalizeWinning() {
          var _this22 = this;

          var winners = this.lotteryService.currentLotteryInfo.winners;
          this.myWinningsIncrement = winners.minipool.winningAmount;
          winners.main.forEach(function (item) {
            if (item && item.myWinnings) {
              _this22.myWinningsIncrement += item.myWinnings;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.checkWinningInterval) {
            clearTimeout(this.checkWinningInterval);
          }
        }
      }]);

      return DrawingInfoComponent;
    }();

    DrawingInfoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_block_chain_service__WEBPACK_IMPORTED_MODULE_3__["BlockChainService"]
      }, {
        type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"]
      }];
    };

    DrawingInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-drawing-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drawing-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/drawing-info/drawing-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drawing-info.component.scss */
      "./src/app/home/drawing-info/drawing-info.component.scss"))["default"]]
    })], DrawingInfoComponent);
    /***/
  },

  /***/
  "./src/app/home/footer/footer.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/home/footer/footer.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".block-info {\n  position: absolute;\n  top: -17px;\n  right: 12px;\n  color: #a3acb5;\n  font-size: 12px;\n  background-color: transparent;\n}\n\n.footer {\n  position: relative;\n}\n\n.footer .panels {\n  display: flex;\n  text-align: center;\n  background-color: #1c2023;\n}\n\n.footer .panels .panel {\n  padding: 8px 4px;\n  flex-basis: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (min-height: 700px) {\n  .footer .panels .panel {\n    padding-bottom: 4vh;\n  }\n}\n\n.footer .panels .left-panel {\n  border-right: 1px solid #2b2f32;\n  font-weight: 500;\n}\n\n.footer .panels .left-panel .title {\n  color: #fccd02;\n  font-size: 18px;\n  margin-bottom: 3px;\n}\n\n.footer .panels .left-panel .text-content {\n  color: white;\n}\n\n.footer .panels .left-panel .bonus-section {\n  height: 50%;\n  padding-top: 3px;\n}\n\n.footer .panels .left-panel .bonus-section .bonus-container {\n  text-align: center;\n}\n\n.footer .panels .left-panel .bonus-section .minipool-winner {\n  display: inline-block;\n  font-weight: bold;\n  background-color: #fccd02;\n  border-radius: 14px;\n  padding: 2px 12px;\n}\n\n.footer .panels .left-panel .bonus-section .amount {\n  font-weight: 500;\n  display: inline-block;\n  background-color: #2a2d32;\n  color: white;\n  font-size: 12px;\n  margin-top: 4px;\n  border-radius: 16px;\n  padding: 2px 6px;\n}\n\n.footer .panels .left-panel .no-bonus {\n  color: #67666b;\n  line-height: 18px;\n  font-size: 16px;\n}\n\n.footer .panels .left-panel .minipool-question {\n  height: 60px;\n  border-radius: 14px;\n  margin-top: 4px;\n  background-color: #109df5;\n  color: white;\n  font-weight: bold;\n  font-size: 34px;\n}\n\n.footer .panels .left-panel .minipool-question .chest {\n  height: 54px;\n  margin-top: 3px;\n  display: inline-block;\n  -webkit-animation: rotation 1.5s infinite linear;\n          animation: rotation 1.5s infinite linear;\n}\n\n@-webkit-keyframes rotation {\n  25% {\n    transform: rotate(15deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(-15deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes rotation {\n  25% {\n    transform: rotate(15deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(-15deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.footer .panels .right-panel {\n  border-left: 1px solid #2b2f32;\n  color: #636267;\n  font-weight: 500;\n}\n\n.footer .panels .right-panel .my-candies {\n  color: white;\n  font-size: 20px;\n}\n\n.footer .panels .right-panel .total-candies {\n  color: white;\n  line-height: 34px;\n  font-size: 28px;\n}\n\n.footer .panels .right-panel .total-candies .icon-img.large {\n  margin-left: 0px;\n}\n\n.footer .panels .right-panel .label {\n  font-size: 14px;\n  line-height: 14px;\n}\n\n.footer .panels .right-panel .label.small {\n  font-size: 12px;\n  height: 13px;\n}\n\n.footer .panels .right-panel .icon-img {\n  margin-left: 4px;\n  height: 13px;\n}\n\n.footer .panels .right-panel .icon-img.large {\n  height: 22px;\n}\n\n.footer .panels .right-panel .icon-redirect {\n  color: #1499e3;\n  margin-left: 4px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb290ZXIvQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxob21lXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0VSOztBREFRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFWjs7QURBWTtFQVBKO0lBUVEsbUJBQUE7RUNHZDtBQUNGOztBREFRO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtBQ0VaOztBRERZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0doQjs7QURBWTtFQUNJLFlBQUE7QUNFaEI7O0FEQ1k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDaEI7O0FEQ2dCO0VBQ0ksa0JBQUE7QUNDcEI7O0FERWdCO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FwQjs7QURHZ0I7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRHBCOztBREtZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hoQjs7QURNWTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKaEI7O0FETWdCO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7QUNKcEI7O0FET29CO0VBQ0k7SUFDSSx3QkFBQTtFQ0wxQjtFRE9zQjtJQUNJLHVCQUFBO0VDTDFCO0VET3NCO0lBQ0kseUJBQUE7RUNMMUI7RURPc0I7SUFDSSx1QkFBQTtFQ0wxQjtBQUNGOztBRFBvQjtFQUNJO0lBQ0ksd0JBQUE7RUNMMUI7RURPc0I7SUFDSSx1QkFBQTtFQ0wxQjtFRE9zQjtJQUNJLHlCQUFBO0VDTDFCO0VET3NCO0lBQ0ksdUJBQUE7RUNMMUI7QUFDRjs7QURZUTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVlo7O0FEWVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ1ZoQjs7QURZWTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNWaEI7O0FEV2dCO0VBQ0UsZ0JBQUE7QUNUbEI7O0FEYVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNYaEI7O0FEWWdCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNWcEI7O0FEYVk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNYaEI7O0FEYWdCO0VBQ0ksWUFBQTtBQ1hwQjs7QURlWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNiaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJsb2NrLWluZm8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTdweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgY29sb3I6ICNhM2FjYjU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5wYW5lbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzIwMjM7XHJcblxyXG4gICAgICAgIC5wYW5lbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCA0cHg7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0dmg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sZWZ0LXBhbmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzJiMmYzMjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmNjZDAyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJvbnVzLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5ib251cy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWluaXBvb2wtd2lubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjY2QwMjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hbW91bnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm8tYm9udXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NzY2NmI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1pbmlwb29sLXF1ZXN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5ZGY1O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNoZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHJvdGF0aW9uIDEuNXMgaW5maW5pdGUgbGluZWFyO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDI1JSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc1JSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQtcGFuZWwge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMyYjJmMzI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjM2MjY3O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAgICAgLm15LWNhbmRpZXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50b3RhbC1jYW5kaWVzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgLmljb24taW1nLmxhcmdlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbi1pbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmxhcmdlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uLXJlZGlyZWN0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTQ5OWUzO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuYmxvY2staW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTdweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjYTNhY2I1O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3RlciAucGFuZWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMDIzO1xufVxuLmZvb3RlciAucGFuZWxzIC5wYW5lbCB7XG4gIHBhZGRpbmc6IDhweCA0cHg7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzAwcHgpIHtcbiAgLmZvb3RlciAucGFuZWxzIC5wYW5lbCB7XG4gICAgcGFkZGluZy1ib3R0b206IDR2aDtcbiAgfVxufVxuLmZvb3RlciAucGFuZWxzIC5sZWZ0LXBhbmVsIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzJiMmYzMjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5mb290ZXIgLnBhbmVscyAubGVmdC1wYW5lbCAudGl0bGUge1xuICBjb2xvcjogI2ZjY2QwMjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLmxlZnQtcGFuZWwgLnRleHQtY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb290ZXIgLnBhbmVscyAubGVmdC1wYW5lbCAuYm9udXMtc2VjdGlvbiB7XG4gIGhlaWdodDogNTAlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLmZvb3RlciAucGFuZWxzIC5sZWZ0LXBhbmVsIC5ib251cy1zZWN0aW9uIC5ib251cy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyIC5wYW5lbHMgLmxlZnQtcGFuZWwgLmJvbnVzLXNlY3Rpb24gLm1pbmlwb29sLXdpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2NkMDI7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDJweCAxMnB4O1xufVxuLmZvb3RlciAucGFuZWxzIC5sZWZ0LXBhbmVsIC5ib251cy1zZWN0aW9uIC5hbW91bnQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMzI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLmxlZnQtcGFuZWwgLm5vLWJvbnVzIHtcbiAgY29sb3I6ICM2NzY2NmI7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLmxlZnQtcGFuZWwgLm1pbmlwb29sLXF1ZXN0aW9uIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlkZjU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi5mb290ZXIgLnBhbmVscyAubGVmdC1wYW5lbCAubWluaXBvb2wtcXVlc3Rpb24gLmNoZXN0IHtcbiAgaGVpZ2h0OiA1NHB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAxLjVzIGluZmluaXRlIGxpbmVhcjtcbn1cbkBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuLmZvb3RlciAucGFuZWxzIC5yaWdodC1wYW5lbCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzJiMmYzMjtcbiAgY29sb3I6ICM2MzYyNjc7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9vdGVyIC5wYW5lbHMgLnJpZ2h0LXBhbmVsIC5teS1jYW5kaWVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLnJpZ2h0LXBhbmVsIC50b3RhbC1jYW5kaWVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLmZvb3RlciAucGFuZWxzIC5yaWdodC1wYW5lbCAudG90YWwtY2FuZGllcyAuaWNvbi1pbWcubGFyZ2Uge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmZvb3RlciAucGFuZWxzIC5yaWdodC1wYW5lbCAubGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuLmZvb3RlciAucGFuZWxzIC5yaWdodC1wYW5lbCAubGFiZWwuc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMTNweDtcbn1cbi5mb290ZXIgLnBhbmVscyAucmlnaHQtcGFuZWwgLmljb24taW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuLmZvb3RlciAucGFuZWxzIC5yaWdodC1wYW5lbCAuaWNvbi1pbWcubGFyZ2Uge1xuICBoZWlnaHQ6IDIycHg7XG59XG4uZm9vdGVyIC5wYW5lbHMgLnJpZ2h0LXBhbmVsIC5pY29uLXJlZGlyZWN0IHtcbiAgY29sb3I6ICMxNDk5ZTM7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/footer/footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/footer/footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppHomeFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/lottery.service */
    "./src/app/services/lottery.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(authService, lotteryService) {
        _classCallCheck(this, FooterComponent);

        this.authService = authService;
        this.lotteryService = lotteryService;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "candyCount",
        value: function candyCount(candyArr) {
          var count = 0;

          if (candyArr && candyArr.length) {
            candyArr.forEach(function (item) {
              count += item.count;
            });
          }

          return count || 0;
        }
      }, {
        key: "authorize",
        value: function authorize() {
          this.authService.authorize();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/home/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".home {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.home .home-content {\n  font-weight: 500;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: 0;\n  padding-bottom: 16px;\n  position: relative;\n  overflow-y: auto;\n}\n.home .buy-candy-input {\n  margin-top: 20px;\n  padding: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcbG9jYWxkZXZcXG15LXByb2plY3RzXFxjaGF0LWxvdHRlcnkvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuaG9tZS1jb250ZW50e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1eS1jYW5keS1pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmhvbWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaG9tZSAuaG9tZS1jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgbWluLWhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5ob21lIC5idXktY2FuZHktaW5wdXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/lottery.service */
    "./src/app/services/lottery.service.ts");
    /* harmony import */


    var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/account.service */
    "./src/app/services/account.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(accountService, lotteryService) {
        _classCallCheck(this, HomeComponent);

        this.accountService = accountService;
        this.lotteryService = lotteryService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.accountService.setAccountSettings(this.accountService.openOnReturn);
          this.accountService.openOnReturn = false;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
      }, {
        type: _services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/app-common.module */
    "./src/app/common/app-common.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _drawing_info_drawing_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./drawing-info/drawing-info.component */
    "./src/app/home/drawing-info/drawing-info.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/home/footer/footer.component.ts"); // Components


    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _drawing_info_drawing_info_component__WEBPACK_IMPORTED_MODULE_5__["DrawingInfoComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      imports: [_common_app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/how-to-play/how-to-play.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/how-to-play/how-to-play.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHowToPlayHowToPlayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".how-to-play {\n  color: white;\n  padding: 16px;\n  font-size: 14px;\n  height: calc(100vh - 60px);\n  overflow-y: auto;\n}\n.how-to-play .title {\n  font-weight: 500;\n}\n.how-to-play .text {\n  font-weight: 200;\n  margin-bottom: 20px;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93LXRvLXBsYXkvQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxob3ctdG8tcGxheVxcaG93LXRvLXBsYXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvdy10by1wbGF5L2hvdy10by1wbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBRUEsMEJBQUE7RUFDQSxnQkFBQTtBQ0FKO0FEQ0k7RUFDSSxnQkFBQTtBQ0NSO0FERUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2hvdy10by1wbGF5L2hvdy10by1wbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdy10by1wbGF5IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgfVxyXG59XHJcbiIsIi5ob3ctdG8tcGxheSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5ob3ctdG8tcGxheSAudGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmhvdy10by1wbGF5IC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/how-to-play/how-to-play.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/how-to-play/how-to-play.component.ts ***!
    \******************************************************/

  /*! exports provided: HowToPlayComponent */

  /***/
  function srcAppHowToPlayHowToPlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowToPlayComponent", function () {
      return HowToPlayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HowToPlayComponent = /*#__PURE__*/function () {
      function HowToPlayComponent() {
        _classCallCheck(this, HowToPlayComponent);
      }

      _createClass(HowToPlayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HowToPlayComponent;
    }();

    HowToPlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-how-to-play',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./how-to-play.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/how-to-play/how-to-play.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./how-to-play.component.scss */
      "./src/app/how-to-play/how-to-play.component.scss"))["default"]]
    })], HowToPlayComponent);
    /***/
  },

  /***/
  "./src/app/how-to-play/how-to-play.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/how-to-play/how-to-play.module.ts ***!
    \***************************************************/

  /*! exports provided: HowToPlayModule */

  /***/
  function srcAppHowToPlayHowToPlayModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowToPlayModule", function () {
      return HowToPlayModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _how_to_play_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./how-to-play.component */
    "./src/app/how-to-play/how-to-play.component.ts");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/app-common.module */
    "./src/app/common/app-common.module.ts");

    var HowToPlayModule = function HowToPlayModule() {
      _classCallCheck(this, HowToPlayModule);
    };

    HowToPlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_how_to_play_component__WEBPACK_IMPORTED_MODULE_3__["HowToPlayComponent"]],
      imports: [_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], HowToPlayModule);
    /***/
  },

  /***/
  "./src/app/models/lottery/available-prize-pool.ts":
  /*!********************************************************!*\
    !*** ./src/app/models/lottery/available-prize-pool.ts ***!
    \********************************************************/

  /*! exports provided: PrizePool */

  /***/
  function srcAppModelsLotteryAvailablePrizePoolTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrizePool", function () {
      return PrizePool;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PrizePool = function PrizePool(prize, gameId) {
      var lotteryStatus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
      var currentEntries = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var myEntries = arguments.length > 4 ? arguments[4] : undefined;
      var targetBlockHeight = arguments.length > 5 ? arguments[5] : undefined;

      _classCallCheck(this, PrizePool);

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
          winningAmount: 0
        }
      };
    };
    /***/

  },

  /***/
  "./src/app/models/lottery/candy.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/lottery/candy.ts ***!
    \*****************************************/

  /*! exports provided: Candy */

  /***/
  function srcAppModelsLotteryCandyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Candy", function () {
      return Candy;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Candy = function Candy(candy, userName, amount, isMine) {
      _classCallCheck(this, Candy);

      this.candyNumber = candy;
      this.userName = userName;
      this.isMine = isMine;
      this.amount = amount;
    };
    /***/

  },

  /***/
  "./src/app/models/lottery/lottery-obj.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/lottery/lottery-obj.ts ***!
    \***********************************************/

  /*! exports provided: LotteryObj */

  /***/
  function srcAppModelsLotteryLotteryObjTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LotteryObj", function () {
      return LotteryObj;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LotteryObj = function LotteryObj() {
      _classCallCheck(this, LotteryObj);
    };
    /***/

  },

  /***/
  "./src/app/models/lottery/my-entries.ts":
  /*!**********************************************!*\
    !*** ./src/app/models/lottery/my-entries.ts ***!
    \**********************************************/

  /*! exports provided: MyEntries */

  /***/
  function srcAppModelsLotteryMyEntriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEntries", function () {
      return MyEntries;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MyEntries = function MyEntries() {
      _classCallCheck(this, MyEntries);
    };
    /***/

  },

  /***/
  "./src/app/models/lottery/winner-info.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/lottery/winner-info.ts ***!
    \***********************************************/

  /*! exports provided: WinnerInfo */

  /***/
  function srcAppModelsLotteryWinnerInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WinnerInfo", function () {
      return WinnerInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var WinnerInfo = function WinnerInfo() {
      var preDisplayWinnings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      _classCallCheck(this, WinnerInfo);

      this.candies = [];
      this.preDisplayWinnings = preDisplayWinnings;
      this.myWinnings = 0;
      this.isDrawing = true;
    };
    /***/

  },

  /***/
  "./src/app/my-entries/my-entries.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/my-entries/my-entries.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyEntriesMyEntriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-entries {\n  font-weight: 500;\n}\n.my-entries .info {\n  color: #68676c;\n  padding: 12px 0 6px;\n  text-align: center;\n}\n.my-entries .header {\n  background-color: #2a2d32;\n  position: relative;\n  width: 100%;\n  height: 45px;\n  padding-right: 16px;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.my-entries .header .text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.my-entries .data-container {\n  max-height: 40vh;\n  overflow-y: auto;\n}\n.my-entries .data {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid #2a2d32;\n  color: white;\n  padding: 4px 12px;\n}\n.my-entries .data .username {\n  color: #22a0ea;\n}\n.my-entries .data .date {\n  color: #68676c;\n}\n.my-entries .no-further-activity {\n  margin-top: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktZW50cmllcy9DOlxcbG9jYWxkZXZcXG15LXByb2plY3RzXFxjaGF0LWxvdHRlcnkvc3JjXFxhcHBcXG15LWVudHJpZXNcXG15LWVudHJpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL215LWVudHJpZXMvbXktZW50cmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRVI7QURDSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQVo7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBREtJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURLUTtFQUNJLGNBQUE7QUNIWjtBRE9JO0VBQ0ksZUFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvbXktZW50cmllcy9teS1lbnRyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWVudHJpZXMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC5pbmZvIHtcclxuICAgICAgICBjb2xvcjogIzY4Njc2YztcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDAgNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDMyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmEyZDMyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuXHJcbiAgICAgICAgLnVzZXJuYW1lIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyMmEwZWE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2ODY3NmM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uby1mdXJ0aGVyLWFjdGl2aXR5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICB9XHJcbn0iLCIubXktZW50cmllcyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubXktZW50cmllcyAuaW5mbyB7XG4gIGNvbG9yOiAjNjg2NzZjO1xuICBwYWRkaW5nOiAxMnB4IDAgNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXktZW50cmllcyAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQzMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ubXktZW50cmllcyAuaGVhZGVyIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5teS1lbnRyaWVzIC5kYXRhLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDQwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubXktZW50cmllcyAuZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmEyZDMyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xufVxuLm15LWVudHJpZXMgLmRhdGEgLnVzZXJuYW1lIHtcbiAgY29sb3I6ICMyMmEwZWE7XG59XG4ubXktZW50cmllcyAuZGF0YSAuZGF0ZSB7XG4gIGNvbG9yOiAjNjg2NzZjO1xufVxuLm15LWVudHJpZXMgLm5vLWZ1cnRoZXItYWN0aXZpdHkge1xuICBtYXJnaW4tdG9wOiA1dmg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/my-entries/my-entries.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/my-entries/my-entries.component.ts ***!
    \****************************************************/

  /*! exports provided: MyEntriesComponent */

  /***/
  function srcAppMyEntriesMyEntriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEntriesComponent", function () {
      return MyEntriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_lottery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/lottery.service */
    "./src/app/services/lottery.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var MyEntriesComponent = /*#__PURE__*/function () {
      function MyEntriesComponent(authService, lotteryService) {
        _classCallCheck(this, MyEntriesComponent);

        this.authService = authService;
        this.lotteryService = lotteryService;
        this.sortMyEntries = false;
        this.sortAllEntries = false;
      }

      _createClass(MyEntriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleMyEntries",
        value: function toggleMyEntries() {
          this.sortMyEntries = !this.sortMyEntries;
        }
      }, {
        key: "toggleAllEntries",
        value: function toggleAllEntries() {
          this.sortAllEntries = !this.sortAllEntries;
        }
      }, {
        key: "sortedMyEntries",
        value: function sortedMyEntries() {
          var _this23 = this;

          return this.lotteryService.currentLotteryInfo.myEntries.sort(function (a, b) {
            return _this23.sortMyEntries ? a.start - b.start : b.start - a.start;
          });
        }
      }, {
        key: "sortedAllEntries",
        value: function sortedAllEntries() {
          var _this24 = this;

          return this.lotteryService.currentLotteryInfo.allEntries.sort(function (a, b) {
            return _this24.sortAllEntries ? a.start - b.start : b.start - a.start;
          });
        }
      }]);

      return MyEntriesComponent;
    }();

    MyEntriesComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_lottery_service__WEBPACK_IMPORTED_MODULE_2__["LotteryService"]
      }];
    };

    MyEntriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-entries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-entries.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-entries/my-entries.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-entries.component.scss */
      "./src/app/my-entries/my-entries.component.scss"))["default"]]
    })], MyEntriesComponent);
    /***/
  },

  /***/
  "./src/app/my-entries/my-entries.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/my-entries/my-entries.module.ts ***!
    \*************************************************/

  /*! exports provided: MyEntriesModule */

  /***/
  function srcAppMyEntriesMyEntriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEntriesModule", function () {
      return MyEntriesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/app-common.module */
    "./src/app/common/app-common.module.ts");
    /* harmony import */


    var _my_entries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./my-entries.component */
    "./src/app/my-entries/my-entries.component.ts"); // Components


    var MyEntriesModule = function MyEntriesModule() {
      _classCallCheck(this, MyEntriesModule);
    };

    MyEntriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_my_entries_component__WEBPACK_IMPORTED_MODULE_4__["MyEntriesComponent"]],
      imports: [_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], MyEntriesModule);
    /***/
  },

  /***/
  "./src/app/payout/payout-history-item/payout-history-item.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/payout/payout-history-item/payout-history-item.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPayoutPayoutHistoryItemPayoutHistoryItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".payout-history-item {\n  padding: 12px 0;\n  border-bottom: 1px solid #2c3033;\n  font-weight: 500;\n}\n.payout-history-item .place-icon {\n  height: 9px;\n  width: 9px;\n  border-radius: 50%;\n  margin-right: 6px;\n  margin-bottom: 2px;\n}\n.payout-history-item .place-icon.first {\n  background-color: #fbd102;\n}\n.payout-history-item .place-icon.second {\n  background-color: #08f69a;\n}\n.payout-history-item .place-icon.third {\n  background-color: #7d0ef0;\n}\n.payout-history-item .item-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.payout-history-item .info-row {\n  color: white;\n  margin-bottom: 4px;\n}\n.payout-history-item .info-row .amount {\n  display: flex;\n  align-items: center;\n}\n.payout-history-item .info-two-row {\n  color: #636267;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5b3V0L3BheW91dC1oaXN0b3J5LWl0ZW0vQzpcXGxvY2FsZGV2XFxteS1wcm9qZWN0c1xcY2hhdC1sb3R0ZXJ5L3NyY1xcYXBwXFxwYXlvdXRcXHBheW91dC1oaXN0b3J5LWl0ZW1cXHBheW91dC1oaXN0b3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BheW91dC9wYXlvdXQtaGlzdG9yeS1pdGVtL3BheW91dC1oaXN0b3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSx5QkFBQTtBQ0daO0FERFE7RUFDSSx5QkFBQTtBQ0daO0FERFE7RUFDSSx5QkFBQTtBQ0daO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FERUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQVo7QURJSTtFQUNJLGNBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3BheW91dC9wYXlvdXQtaGlzdG9yeS1pdGVtL3BheW91dC1oaXN0b3J5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5b3V0LWhpc3RvcnktaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjMzAzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAucGxhY2UtaWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgd2lkdGg6IDlweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICYuZmlyc3Qge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJkMTAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnNlY29uZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwOGY2OWFcclxuICAgICAgICB9XHJcbiAgICAgICAgJi50aGlyZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZDBlZjBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLXJvdyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHJcbiAgICAgICAgLmFtb3VudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLXR3by1yb3cge1xyXG4gICAgICAgIGNvbG9yOiAjNjM2MjY3O1xyXG4gICAgfVxyXG59IiwiLnBheW91dC1oaXN0b3J5LWl0ZW0ge1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmMzMDMzO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnBheW91dC1oaXN0b3J5LWl0ZW0gLnBsYWNlLWljb24ge1xuICBoZWlnaHQ6IDlweDtcbiAgd2lkdGg6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLnBheW91dC1oaXN0b3J5LWl0ZW0gLnBsYWNlLWljb24uZmlyc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJkMTAyO1xufVxuLnBheW91dC1oaXN0b3J5LWl0ZW0gLnBsYWNlLWljb24uc2Vjb25kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjY5YTtcbn1cbi5wYXlvdXQtaGlzdG9yeS1pdGVtIC5wbGFjZS1pY29uLnRoaXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkMGVmMDtcbn1cbi5wYXlvdXQtaGlzdG9yeS1pdGVtIC5pdGVtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYXlvdXQtaGlzdG9yeS1pdGVtIC5pbmZvLXJvdyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLnBheW91dC1oaXN0b3J5LWl0ZW0gLmluZm8tcm93IC5hbW91bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBheW91dC1oaXN0b3J5LWl0ZW0gLmluZm8tdHdvLXJvdyB7XG4gIGNvbG9yOiAjNjM2MjY3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/payout/payout-history-item/payout-history-item.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/payout/payout-history-item/payout-history-item.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PayoutHistoryItemComponent */

  /***/
  function srcAppPayoutPayoutHistoryItemPayoutHistoryItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayoutHistoryItemComponent", function () {
      return PayoutHistoryItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PayoutHistoryItemComponent = /*#__PURE__*/function () {
      function PayoutHistoryItemComponent() {
        _classCallCheck(this, PayoutHistoryItemComponent);

        this.place = '';
      }

      _createClass(PayoutHistoryItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PayoutHistoryItemComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PayoutHistoryItemComponent.prototype, "payoutItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PayoutHistoryItemComponent.prototype, "place", void 0);
    PayoutHistoryItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payout-history-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payout-history-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout-history-item/payout-history-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payout-history-item.component.scss */
      "./src/app/payout/payout-history-item/payout-history-item.component.scss"))["default"]]
    })], PayoutHistoryItemComponent);
    /***/
  },

  /***/
  "./src/app/payout/payout.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/payout/payout.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPayoutPayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".payout {\n  padding: 0 24px 36px;\n  height: calc(100% - 91px);\n  overflow-y: auto;\n}\n\n.game-control {\n  color: white;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-control .control {\n  width: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.action-container {\n  margin: 8px;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.action-container button.app-button {\n  line-height: 12px;\n  min-height: auto;\n  min-width: auto;\n  height: auto;\n  width: auto;\n  font-size: 12px;\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5b3V0L0M6XFxsb2NhbGRldlxcbXktcHJvamVjdHNcXGNoYXQtbG90dGVyeS9zcmNcXGFwcFxccGF5b3V0XFxwYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BheW91dC9wYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURFSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGF5b3V0L3BheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXlvdXQge1xyXG4gICAgcGFkZGluZzogMCAyNHB4IDM2cHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkxcHgpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmdhbWUtY29udHJvbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5jb250cm9sIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgYnV0dG9uLmFwcC1idXR0b24ge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgIH1cclxufVxyXG4iLCIucGF5b3V0IHtcbiAgcGFkZGluZzogMCAyNHB4IDM2cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gOTFweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5nYW1lLWNvbnRyb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZ2FtZS1jb250cm9sIC5jb250cm9sIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5hY3Rpb24tY29udGFpbmVyIGJ1dHRvbi5hcHAtYnV0dG9uIHtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/payout/payout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/payout/payout.component.ts ***!
    \********************************************/

  /*! exports provided: PayoutComponent */

  /***/
  function srcAppPayoutPayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayoutComponent", function () {
      return PayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_payout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/payout.service */
    "./src/app/services/payout.service.ts");
    /* harmony import */


    var _services_lottery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/lottery.service */
    "./src/app/services/lottery.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _constants_placeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../constants/placeMap */
    "./src/app/constants/placeMap.ts");

    var PayoutComponent = /*#__PURE__*/function () {
      function PayoutComponent(route, lotteryService, payoutService) {
        _classCallCheck(this, PayoutComponent);

        this.route = route;
        this.lotteryService = lotteryService;
        this.payoutService = payoutService;
        this.payoutData = {};
        this.placeMap = _constants_placeMap__WEBPACK_IMPORTED_MODULE_5__["PlaceMapArr"];
        this.rankingMap = {
          first: 0,
          second: 0,
          third: 0
        };
        this.lastTenGames = [];
        this.currentLevel = '1';
      }

      _createClass(PayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.route.queryParams.subscribe(function (params) {
            _this25.currentLevel = params.level || '1';

            _this25.initialize();
          });
        }
      }, {
        key: "initialize",
        value: function initialize() {
          var _this26 = this;

          this.lotteryService.getLastTenGames().subscribe(function (data) {
            if (data && data.msg) {
              _this26.lastTenGames = data.msg;
            }

            if (_this26.lastTenGames && _this26.lastTenGames.length) {
              _this26.selectedGame = _this26.lastTenGames[0];
            }

            _this26.getData(_this26.currentLevel);
          });
        }
      }, {
        key: "hasPreviousGame",
        value: function hasPreviousGame() {
          if (this.lastTenGames && this.lastTenGames.length && this.lastTenGames.indexOf(this.selectedGame) !== -1 && this.lastTenGames[this.lastTenGames.indexOf(this.selectedGame) + 1]) {
            return this.lastTenGames[this.lastTenGames.indexOf(this.selectedGame) + 1];
          }

          return null;
        }
      }, {
        key: "getPreviousGame",
        value: function getPreviousGame() {
          var newGame = this.hasPreviousGame();

          if (newGame) {
            this.selectedGame = newGame;
            this.currentLevel = '1';
            this.payoutData = {};
            this.payoutData[this.currentLevel] = {
              data: [],
              page: 1,
              isEnded: false
            };
            this.getData(this.currentLevel);
          }
        }
      }, {
        key: "hasNextGame",
        value: function hasNextGame() {
          if (this.lastTenGames && this.lastTenGames.length && this.lastTenGames.indexOf(this.selectedGame) > 0 && this.lastTenGames[this.lastTenGames.indexOf(this.selectedGame) - 1]) {
            return this.lastTenGames[this.lastTenGames.indexOf(this.selectedGame) - 1];
          }

          return null;
        }
      }, {
        key: "getNextGame",
        value: function getNextGame() {
          var newGame = this.hasNextGame();

          if (newGame) {
            this.selectedGame = newGame;
            this.currentLevel = '1';
            this.payoutData = {};
            this.payoutData[this.currentLevel] = {
              data: [],
              page: 1,
              isEnded: false
            };
            this.getData(this.currentLevel);
          }
        }
      }, {
        key: "selectRank",
        value: function selectRank(rank) {
          this.currentLevel = rank;

          if (!this.payoutData[rank]) {
            this.getData(rank);
          }
        }
      }, {
        key: "getData",
        value: function getData(level) {
          var _this27 = this;

          if (!this.selectedGame) {
            return;
          }

          if (!this.payoutData[level]) {
            this.payoutData[level] = {
              data: [],
              page: 1,
              isEnded: false
            };
          }

          if (this.lastTenGames && this.lastTenGames.length && this.selectedGame) {
            this.payoutService.getPayoutHistory(this.selectedGame.id.toString(), level, this.payoutData[level].page, 100).subscribe(function (data) {
              _this27.payoutData[level].page++;
              _this27.payoutData[level].data = data.msg;

              _this27.payoutData[level].data.forEach(function (item) {
                _this27.setPlaceMap(item.prize);
              });
            });
          } else {
            setTimeout(function () {
              _this27.getData(level);
            }, 100);
          }
        }
      }, {
        key: "getPlace",
        value: function getPlace(amount) {
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
      }, {
        key: "setPlaceMap",
        value: function setPlaceMap(amount) {
          if (amount === this.rankingMap.first || amount === this.rankingMap.second || amount === this.rankingMap.third || amount < this.rankingMap.third) {
            return;
          }

          if (amount > this.rankingMap.first) {
            this.rankingMap.third = this.rankingMap.second;
            this.rankingMap.second = this.rankingMap.first;
            this.rankingMap.first = amount;
          } else if (amount > this.rankingMap.second) {
            this.rankingMap.third = this.rankingMap.second;
            this.rankingMap.second = amount;
          } else {
            this.rankingMap.third = amount;
          }
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          var _this28 = this;

          this.payoutData[this.currentLevel].page++;
          this.payoutService.getPayoutHistory(this.lotteryService.lastGameId, this.currentLevel, this.payoutData[this.currentLevel].page, 100).subscribe(function (data) {
            var arr = data.msg;
            arr.forEach(function (item) {
              if (!_this28.payoutData[_this28.currentLevel].data.find(function (dup) {
                return dup.user === item.user && dup.candy === item.candy && dup.time === item.time;
              })) {
                _this28.payoutData[_this28.currentLevel].data.push(item);
              }
            });
          });
        }
      }]);

      return PayoutComponent;
    }();

    PayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_lottery_service__WEBPACK_IMPORTED_MODULE_3__["LotteryService"]
      }, {
        type: _services_payout_service__WEBPACK_IMPORTED_MODULE_2__["PayoutService"]
      }];
    };

    PayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payout/payout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payout.component.scss */
      "./src/app/payout/payout.component.scss"))["default"]]
    })], PayoutComponent);
    /***/
  },

  /***/
  "./src/app/payout/payout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/payout/payout.module.ts ***!
    \*****************************************/

  /*! exports provided: PayoutModule */

  /***/
  function srcAppPayoutPayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayoutModule", function () {
      return PayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/app-common.module */
    "./src/app/common/app-common.module.ts");
    /* harmony import */


    var _payout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./payout.component */
    "./src/app/payout/payout.component.ts");
    /* harmony import */


    var _payout_history_item_payout_history_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payout-history-item/payout-history-item.component */
    "./src/app/payout/payout-history-item/payout-history-item.component.ts");

    var PayoutModule = function PayoutModule() {
      _classCallCheck(this, PayoutModule);
    };

    PayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_payout_history_item_payout_history_item_component__WEBPACK_IMPORTED_MODULE_5__["PayoutHistoryItemComponent"], _payout_component__WEBPACK_IMPORTED_MODULE_4__["PayoutComponent"]],
      imports: [_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_payout_component__WEBPACK_IMPORTED_MODULE_4__["PayoutComponent"]]
    })], PayoutModule);
    /***/
  },

  /***/
  "./src/app/pipes/to-number.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/to-number.pipe.ts ***!
    \*****************************************/

  /*! exports provided: ToNumberPipe */

  /***/
  function srcAppPipesToNumberPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToNumberPipe", function () {
      return ToNumberPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToNumberPipe = /*#__PURE__*/function () {
      function ToNumberPipe() {
        _classCallCheck(this, ToNumberPipe);
      }

      _createClass(ToNumberPipe, [{
        key: "transform",
        value: function transform(value) {
          if (typeof value === 'string') {
            return parseFloat(value) || 0;
          }

          return value;
        }
      }]);

      return ToNumberPipe;
    }();

    ToNumberPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'toNumber'
    })], ToNumberPipe);
    /***/
  },

  /***/
  "./src/app/pipes/translate.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/translate.pipe.ts ***!
    \*****************************************/

  /*! exports provided: TranslatePipe */

  /***/
  function srcAppPipesTranslatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
      return TranslatePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/translate.service */
    "./src/app/services/translate.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // Services


    var TranslatePipe = /*#__PURE__*/function () {
      function TranslatePipe(translateService) {
        _classCallCheck(this, TranslatePipe);

        this.translateService = translateService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
      }

      _createClass(TranslatePipe, [{
        key: "transform",
        value: function transform(key, args) {
          if (!key) {
            return '';
          }

          var processedKey = key.toLowerCase().replace(/ /g, '-');

          if (this.translateService.translations[this.translateService.currentLanguage] && this.translateService.translations[this.translateService.currentLanguage][processedKey]) {
            return this.processString(this.translateService.translations[this.translateService.currentLanguage][processedKey], args);
          }

          return key;
        }
      }, {
        key: "processString",
        value: function processString(str, args) {
          if (!str || !args) {
            return str || '';
          }

          args.forEach(function (fill, i) {
            str = str.replace('{' + i + '}', fill);
          });
          return str;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.unsubscribe();
        }
      }]);

      return TranslatePipe;
    }();

    TranslatePipe.ctorParameters = function () {
      return [{
        type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'translate',
      pure: false
    })], TranslatePipe);
    /***/
  },

  /***/
  "./src/app/routing/app-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/routing/app-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _account_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../account/login/login.component */
    "./src/app/account/login/login.component.ts");
    /* harmony import */


    var _account_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../account/register/register.component */
    "./src/app/account/register/register.component.ts");
    /* harmony import */


    var _account_new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../account/new-account-orientation/new-account-orientation.component */
    "./src/app/account/new-account-orientation/new-account-orientation.component.ts");
    /* harmony import */


    var _account_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../account/deposit/deposit.component */
    "./src/app/account/deposit/deposit.component.ts");
    /* harmony import */


    var _account_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../account/two-factor/two-factor.component */
    "./src/app/account/two-factor/two-factor.component.ts");
    /* harmony import */


    var _account_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../account/withdraw/withdraw.component */
    "./src/app/account/withdraw/withdraw.component.ts");
    /* harmony import */


    var _account_account_history_account_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../account/account-history/account-history.component */
    "./src/app/account/account-history/account-history.component.ts");
    /* harmony import */


    var _payout_payout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../payout/payout.component */
    "./src/app/payout/payout.component.ts");
    /* harmony import */


    var _how_to_play_how_to_play_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../how-to-play/how-to-play.component */
    "./src/app/how-to-play/how-to-play.component.ts");
    /* harmony import */


    var _my_entries_my_entries_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../my-entries/my-entries.component */
    "./src/app/my-entries/my-entries.component.ts");
    /* harmony import */


    var _account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../account/authguard.guard */
    "./src/app/account/authguard.guard.ts");
    /* harmony import */


    var _common_info_component_info_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../common/info-component/info-component.component */
    "./src/app/common/info-component/info-component.component.ts");
    /* harmony import */


    var _account_winning_history_winning_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../account/winning-history/winning-history.component */
    "./src/app/account/winning-history/winning-history.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, // Auth
    {
      path: 'login',
      component: _account_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _account_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'orientation',
      component: _account_new_account_orientation_new_account_orientation_component__WEBPACK_IMPORTED_MODULE_6__["NewAccountOrientationComponent"]
    }, // Account
    {
      path: 'deposit',
      component: _account_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__["DepositComponent"],
      canActivate: [_account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    }, {
      path: 'withdraw',
      component: _account_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_9__["WithdrawComponent"],
      canActivate: [_account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    }, {
      path: 'account-history',
      component: _account_account_history_account_history_component__WEBPACK_IMPORTED_MODULE_10__["AccountHistoryComponent"],
      canActivate: [_account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    }, {
      path: 'winning-history',
      component: _account_winning_history_winning_history_component__WEBPACK_IMPORTED_MODULE_16__["WinningHistoryComponent"],
      canActivate: [_account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    }, {
      path: '2fa',
      component: _account_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_8__["TwoFactorComponent"],
      canActivate: [_account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    }, {
      path: 'payout-history',
      component: _payout_payout_component__WEBPACK_IMPORTED_MODULE_11__["PayoutComponent"]
    }, {
      path: 'my-entries',
      component: _my_entries_my_entries_component__WEBPACK_IMPORTED_MODULE_13__["MyEntriesComponent"],
      canActivate: [_account_authguard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    }, {
      path: 'how-to-play',
      component: _how_to_play_how_to_play_component__WEBPACK_IMPORTED_MODULE_12__["HowToPlayComponent"]
    }, {
      path: 'info',
      component: _common_info_component_info_component_component__WEBPACK_IMPORTED_MODULE_15__["InfoComponentComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/services/account.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/account.service.ts ***!
    \*********************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppServicesAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AccountService = /*#__PURE__*/function () {
      function AccountService(authService, httpClient) {
        _classCallCheck(this, AccountService);

        this.authService = authService;
        this.httpClient = httpClient;
        this.showAccountSettings = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.openOnReturn = false;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
      }

      _createClass(AccountService, [{
        key: "getShowSettingsObs",
        value: function getShowSettingsObs() {
          return this.showAccountSettings.asObservable();
        }
      }, {
        key: "setAccountSettings",
        value: function setAccountSettings(show) {
          this.showAccountSettings.next(show);
        }
      }, {
        key: "getAccountActivity",
        value: function getAccountActivity(page, offset) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('token', this.authService.user.token)
          };
          var request = new URLSearchParams();
          request.set('page', page.toString());
          request.set('offset', offset.toString());
          return this.httpClient.post("".concat(this.url, "/account/activity"), request.toString(), options);
        }
      }, {
        key: "getDepositHistory",
        value: function getDepositHistory(page, offset) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('token', this.authService.user.token)
          };
          var request = new URLSearchParams();
          request.set('page', page.toString());
          request.set('offset', offset.toString());
          return this.httpClient.post("".concat(this.url, "/account/getDepositHistory"), request.toString(), options);
        }
      }, {
        key: "getWithdrawalHistory",
        value: function getWithdrawalHistory(page, offset) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('token', this.authService.user.token)
          };
          var request = new URLSearchParams();
          request.set('page', page.toString());
          request.set('offset', offset.toString());
          return this.httpClient.post("".concat(this.url, "/account/getWithdrawalHistory"), request.toString(), options);
        }
      }, {
        key: "getRewardHistory",
        value: function getRewardHistory(page, offset) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('token', this.authService.user.token)
          };
          var request = new URLSearchParams();
          request.set('page', page.toString());
          request.set('offset', offset.toString());
          return this.httpClient.post("".concat(this.url, "/account/getRewardHistory"), request.toString(), options);
        }
      }, {
        key: "getBetsHistory",
        value: function getBetsHistory(page, offset) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('token', this.authService.user.token)
          };
          var request = new URLSearchParams();
          request.set('page', page.toString());
          request.set('offset', offset.toString());
          return this.httpClient.post("".concat(this.url, "/account/getBetsHistory"), request.toString(), options);
        }
      }]);

      return AccountService;
    }();

    AccountService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AccountService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var js_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! js-md5 */
    "./node_modules/js-md5/src/md5.js");
    /* harmony import */


    var js_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_md5__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_window_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/window-ref */
    "./src/app/common/window-ref.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(httpClient, windowRef) {
        var _this29 = this;

        _classCallCheck(this, AuthService);

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

        if (this.windowRef.nativeWindow) {
          this.windowRef.nativeWindow.SyncCallback = function (method, data) {
            var response = JSON.parse(data);

            switch (method) {
              case 'Authorizedlogin':
                if (response.status !== 'ok' || !response.callback) {
                  return;
                }

                _this29.user.appToken = response.callback.token;
                _this29.dataObj = response.callback;

                _this29.loginWithToken();

                break;

              case 'Recharge':
                break;
            }
          };
        }

        this.authorize();
      }

      _createClass(AuthService, [{
        key: "authorize",
        value: function authorize() {
          var data = JSON.stringify({
            appkey: this.appKey
          });
          this.sendAppMessage('Authorizedlogin', data);
        }
      }, {
        key: "depositAmount",
        value: function depositAmount(amount) {
          var data = JSON.stringify({
            appkey: this.appKey,
            token: this.user.appToken,
            orderNo: Math.random() * 1000 + '' + Date.now(),
            amount: amount.toString(),
            currencyTag: 'BTOK'
          });
          this.sendAppMessage('Recharge', data);
        }
      }, {
        key: "getAccountTotal",
        value: function getAccountTotal() {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('token', this.user.token)
          };
          var request = new URLSearchParams();
          return this.httpClient.post("".concat(this.url, "/account/getAccountInfo"), request.toString(), options);
        }
      }, {
        key: "withdraw",
        value: function withdraw(amount) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set("token", this.user.token)
          };
          var request = new URLSearchParams();
          request.set('amount', amount.toFixed(4));
          return this.httpClient.post("".concat(this.url, "/account/withdraw"), request.toString(), options);
        }
      }, {
        key: "sendAppMessage",
        value: function sendAppMessage(action, data) {
          if (/iPad|iPhone|iPod/.test(navigator.platform || "")) {
            window.webkit.messageHandlers.SyncSendMsg.postMessage([action, data]);
          } else {
            if (this.windowRef.nativeWindow.android) {
              this.windowRef.nativeWindow.android.SyncSendMsg(action, data);
            } else {
              alert('Open this app in Bittok! Could not detect Android or IOS');
            }
          }
        }
      }, {
        key: "loginWithToken",
        value: function loginWithToken() {
          var _this30 = this;

          this.isLoggedIn = false;
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          };
          var request = new URLSearchParams();
          request.set('email', this.dataObj.userMail);
          request.set('token', this.dataObj.token);
          this.httpClient.post("".concat(this.url, "/passport/getToken"), request.toString(), options).subscribe(function (results) {
            if (results.code === 200) {
              if (results && results.msg) {
                _this30.user.amountAvailable = parseFloat(results.msg.balance) || 0;
                _this30.user.token = results.msg.token;
              }

              _this30.isLoggedIn = true;
              return _this30.user;
            }

            if (_this30.accountUpdateInterval) {
              clearInterval(_this30.accountUpdateInterval);
            }

            _this30.accountUpdateInterval = setInterval(function () {
              if (_this30.accountUpdateSub) {
                _this30.accountUpdateSub.unsubscribe();
              }

              _this30.accountUpdateSub = _this30.getAccountTotal().subscribe(function (response) {
                if (response.code === 200) {
                  _this30.user.amountAvailable = parseFloat(response.msg.balance);
                }
              });
            }, 30000);
          }, function (err) {
            alert('error ' + JSON.stringify(err));
          });
        }
      }, {
        key: "login",
        value: function login(loginObj) {
          var _this31 = this;

          this.isLoggedIn = false;
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          };
          var request = new URLSearchParams();
          request.set('username', loginObj.userName);

          if (loginObj.userName.toLowerCase() === 'sylvester') {
            request.set('password', loginObj.password);
          } else {
            request.set('password', js_md5__WEBPACK_IMPORTED_MODULE_3___default()(loginObj.password));
          }

          return this.httpClient.post("".concat(this.url, "/passport/login"), request.toString(), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) {
            if (results.code === 200) {
              _this31.user.userName = loginObj.userName;

              if (results && results.msg) {
                _this31.user.amountAvailable = parseFloat(results.msg.balance) || 0;
                _this31.user.token = results.msg.token;
                _this31.user.memo = results.msg.memo;
                _this31.user.depositAccount = results.msg.depositaccount;
              }

              _this31.isLoggedIn = true;
              return _this31.user;
            }
          }));
        }
      }, {
        key: "register",
        value: function register(registrationObj) {
          var _this32 = this;

          this.isLoggedIn = false;
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          };
          var request = new URLSearchParams();
          request.set('username', registrationObj.userName);
          request.set('password', js_md5__WEBPACK_IMPORTED_MODULE_3___default()(registrationObj.password));
          return this.httpClient.post("".concat(this.url, "/passport/register"), request.toString(), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (results) {
            if (results.code === 200) {
              return _this32.login(registrationObj);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _common_window_ref__WEBPACK_IMPORTED_MODULE_7__["WindowRef"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/services/block-chain.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/block-chain.service.ts ***!
    \*************************************************/

  /*! exports provided: BlockChainService */

  /***/
  function srcAppServicesBlockChainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockChainService", function () {
      return BlockChainService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BlockChainService = /*#__PURE__*/function () {
      function BlockChainService(httpClient) {
        _classCallCheck(this, BlockChainService);

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

      _createClass(BlockChainService, [{
        key: "getNextBlock",
        value: function getNextBlock() {
          var _this33 = this;

          if (this.getBlockSub) {
            this.getBlockSub.unsubscribe();
          }

          this.getBlockSub = this.getSpecificBlock('0x' + this.currentBlock).subscribe(function (response) {
            if (response.result) {
              _this33.currentBlock = (parseInt(_this33.currentBlock, 16) + 1).toString(16);

              _this33.rollingLog.unshift(response.result);

              if (_this33.rollingLog.length > 20) {
                _this33.rollingLog.pop();
              }
            }
          });
        }
      }, {
        key: "startLog",
        value: function startLog() {
          var _this34 = this;

          this.isSingleRow = false;

          if (!(this.rollingLog && this.rollingLog.length)) {
            if (this.getLatestBlockSub) {
              this.getLatestBlockSub.unsubscribe();
            }

            this.getLatestBlockSub = this.getLatestBlock().subscribe(function (response) {
              _this34.currentBlock = (parseInt(response.result, 16) + 1).toString(16);

              if (_this34.getBlockSub) {
                _this34.getBlockSub.unsubscribe();
              }

              _this34.getBlockSub = _this34.getSpecificBlock(response.result).subscribe(function (response) {
                if (response.result) {
                  _this34.rollingLog.push(response.result);
                }
              });
            });
          }

          if (!this.rollingInterval) {
            this.rollingInterval = setInterval(function () {
              if (_this34.targetBlock && _this34.targetBlock - parseInt(_this34.rollingLog[0].number, 16) > 50) {
                if (_this34.getLatestBlockSub) {
                  _this34.getLatestBlockSub.unsubscribe();
                }

                _this34.getLatestBlockSub = _this34.getLatestBlock().subscribe(function (response) {
                  _this34.currentBlock = (parseInt(response.result, 16) + 1).toString(16);
                });
              } else {
                _this34.getNextBlock();
              }
            }, 2000);
          }
        }
      }, {
        key: "stopLog",
        value: function stopLog() {
          clearInterval(this.rollingInterval);
          this.rollingInterval = null;
          this.rollingLog = [];
        }
      }, {
        key: "setSingleBlock",
        value: function setSingleBlock(blockNumber) {
          var _this35 = this;

          this.isSingleRow = true;
          this.stopLog();
          this.getSpecificBlock('0x' + blockNumber.toString(16)).subscribe(function (response) {
            if (response.result) {
              _this35.rollingLog = [response.result];
            }
          });
        }
      }, {
        key: "getLatestBlock",
        value: function getLatestBlock() {
          var url = "".concat(this.url, "?module=proxy&action=eth_blockNumber&apikey=").concat(this.apiKey);
          return this.httpClient.get(url);
        }
      }, {
        key: "getSpecificBlock",
        value: function getSpecificBlock(tagNumber) {
          var url = "".concat(this.url, "?module=proxy&action=eth_getBlockByNumber&tag=").concat(tagNumber, "&boolean=true&apikey=").concat(this.apiKey);
          return this.httpClient.get(url);
        }
      }]);

      return BlockChainService;
    }();

    BlockChainService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BlockChainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BlockChainService);
    /***/
  },

  /***/
  "./src/app/services/lottery.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/lottery.service.ts ***!
    \*********************************************/

  /*! exports provided: LotteryService */

  /***/
  function srcAppServicesLotteryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LotteryService", function () {
      return LotteryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_lottery_lottery_obj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/lottery/lottery-obj */
    "./src/app/models/lottery/lottery-obj.ts");
    /* harmony import */


    var _models_lottery_available_prize_pool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/lottery/available-prize-pool */
    "./src/app/models/lottery/available-prize-pool.ts");
    /* harmony import */


    var _models_lottery_my_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/lottery/my-entries */
    "./src/app/models/lottery/my-entries.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_lottery_winner_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../models/lottery/winner-info */
    "./src/app/models/lottery/winner-info.ts");
    /* harmony import */


    var _models_lottery_candy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../models/lottery/candy */
    "./src/app/models/lottery/candy.ts");
    /* harmony import */


    var _block_chain_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./block-chain.service */
    "./src/app/services/block-chain.service.ts");

    var LotteryService = /*#__PURE__*/function () {
      function LotteryService(authService, blockChainService, httpClient) {
        var _this36 = this;

        _classCallCheck(this, LotteryService);

        this.authService = authService;
        this.blockChainService = blockChainService;
        this.httpClient = httpClient;
        this.lotteryObj = new _models_lottery_lottery_obj__WEBPACK_IMPORTED_MODULE_2__["LotteryObj"]();
        this.options = [// {
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
        }];
        this.selectedOption = this.options[0];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].url;
        this.statusSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.entrySubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();

        this.setAvailablePrizePool = function (msg) {
          var prizePool = msg.entrylimit;
          var gameId = msg.gameid;
          var lotteryStatus = msg.status.toString();
          var currentEntries = msg.currententry;
          var currentStatus;
          _this36.availablePrizePool = prizePool;
          var myEntries = [];
          _this36.blockChainService.targetBlock = msg.targetblockheight;

          if (msg.mytickets) {
            myEntries = msg.mytickets.map(function (candy) {
              var entry = new _models_lottery_my_entries__WEBPACK_IMPORTED_MODULE_4__["MyEntries"]();
              entry.userName = candy.user;
              entry.start = parseInt(candy.start, 10);
              entry.end = parseInt(candy.end, 10);
              entry.count = entry.end - entry.start + 1;
              return entry;
            });
          }

          if (!_this36.lotteryObj[prizePool]) {
            _this36.lotteryObj[prizePool] = new _models_lottery_available_prize_pool__WEBPACK_IMPORTED_MODULE_3__["PrizePool"](prizePool, gameId, lotteryStatus, currentEntries, myEntries, msg.targetblockheight);
          } else {
            currentStatus = _this36.lotteryObj[prizePool].lotteryStatus;
            _this36.lotteryObj[prizePool].gameId = gameId;
            _this36.lotteryObj[prizePool].currentEntries = currentEntries;
            _this36.lotteryObj[prizePool].lotteryStatus = lotteryStatus;
            _this36.lotteryObj[prizePool].myEntries = myEntries;
            _this36.lotteryObj[prizePool].targetBlockHeight = msg.targetblockheight;
          }

          if (currentStatus !== lotteryStatus) {
            switch (lotteryStatus) {
              case '0':
                break;

              case '1':
                break;

              case '2':
                clearInterval(_this36.checkStatusInterval);

                _this36.setPrizePool(msg);

                _this36.setDrawWinners(prizePool);

                _this36.blockChainService.stopLog();

                _this36.finishPendingProcess(prizePool);

                break;
            }
          }
        };

        this.startPendingProcess = function (prizePool) {
          var currentPrizePool = _this36.lotteryObj[prizePool];

          if (currentPrizePool.lotteryStatus !== '0') {
            return;
          }

          _this36.setLotteryStatus('1', prizePool);
        };

        this.finishPendingProcess = function (prizePool) {
          var currentPrizePool = _this36.lotteryObj[prizePool];
          currentPrizePool.countDown = 60;
          _this36.lastGameId = _this36.currentLotteryInfo.gameId;

          if (currentPrizePool.countDownInterval) {
            clearInterval(currentPrizePool.countDownInterval);
          }

          currentPrizePool.countDownInterval = setInterval(function () {
            if (currentPrizePool.countDown <= 1) {
              clearInterval(currentPrizePool.countDownInterval);

              _this36.startStatusCheckInterval();

              _this36.authService.loginWithToken();

              _this36.blockChainService.startLog();
            }

            _this36.lotteryObj[prizePool].countDown--;
          }, 1000);
        };

        this.startStatusCheckInterval();
      }

      _createClass(LotteryService, [{
        key: "startStatusCheckInterval",
        value: function startStatusCheckInterval() {
          var _this37 = this;

          if (this.checkStatusInterval) {
            clearInterval(this.checkStatusInterval);
          }

          if (this.statusSubscription) {
            this.statusSubscription.unsubscribe();
          }

          this.statusSubscription = this.checkGameStatus().subscribe(function () {});
          this.checkStatusInterval = setInterval(function () {
            _this37.statusSubscription.unsubscribe();

            _this37.statusSubscription = _this37.checkGameStatus().subscribe(function () {});
          }, 3000);
        }
      }, {
        key: "clearLotteryObj",
        value: function clearLotteryObj() {
          this.lotteryObj = new _models_lottery_lottery_obj__WEBPACK_IMPORTED_MODULE_2__["LotteryObj"]();
        }
      }, {
        key: "getLotteryInfo",
        value: function getLotteryInfo(prizePool) {
          return this.lotteryObj[prizePool] || null;
        }
      }, {
        key: "checkGameStatus",
        value: function checkGameStatus() {
          var _this38 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('token', this.authService.user.token || 'anonymous')
          };
          var request = new URLSearchParams();
          request.set('type', 'active');
          return this.httpClient.post("".concat(this.url, "/game/status"), request.toString(), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (results) {
            if (results) {
              _this38.setAvailablePrizePool(results);

              return results;
            }

            return null;
          }));
        }
      }, {
        key: "clearWinners",
        value: function clearWinners() {
          this.currentLotteryInfo.winners.main = [];
          this.currentLotteryInfo.winners.minipool.isDrawing = false;
          this.currentLotteryInfo.winners.minipool.winningAmount = 0;
        }
      }, {
        key: "setPrizePool",
        value: function setPrizePool(msg) {
          var _this39 = this;

          var prizeList = msg.prizelist;
          this.clearWinners();

          if (prizeList && msg.myprizelist) {
            prizeList.forEach(function (prize, i) {
              if (!_this39.currentLotteryInfo.winners.main[i]) {
                _this39.currentLotteryInfo.winners.main[i] = new _models_lottery_winner_info__WEBPACK_IMPORTED_MODULE_10__["WinnerInfo"](parseFloat(msg.myprizelist.find(function (item) {
                  return item.win === i + 1;
                }).amount));
              }

              prize.forEach(function (item) {
                _this39.currentLotteryInfo.winners.main[i].candies.push(new _models_lottery_candy__WEBPACK_IMPORTED_MODULE_11__["Candy"](item.candy, item.user, item.prize, item.user === (_this39.authService.user && _this39.authService.user.userName)));
              });
            });
            this.currentLotteryInfo.winners.minipool.winningPreDisplay = parseFloat(msg.myprizelist.find(function (item) {
              return item.win === 7;
            }).amount);
          }
        }
      }, {
        key: "setDrawWinners",
        value: function setDrawWinners(prizePool) {
          var currentPrizePool = this.lotteryObj[prizePool];
          currentPrizePool.winners.main.forEach(function (item, i) {
            item.isDrawing = true;
            setTimeout(function () {
              item.myWinnings = item.preDisplayWinnings;
              item.isDrawing = false;
            }, 500 * (i + 1));
          });
          currentPrizePool.winners.minipool.isDrawing = true;
        }
      }, {
        key: "checkIfEntryMatches",
        value: function checkIfEntryMatches(entries, num) {
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].start <= num && entries[i].end >= num) {
              return entries[i];
            }
          }

          return null;
        }
      }, {
        key: "setLotteryStatus",
        value: function setLotteryStatus(status, prizePool) {
          this.lotteryObj[prizePool].lotteryStatus = status;
        }
      }, {
        key: "buyCandy",
        value: function buyCandy(amount) {
          var _this40 = this;

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('token', this.authService.user.token)
          };
          var request = new URLSearchParams();
          request.set('amount', amount.toString());
          request.set('gameid', this.currentLotteryInfo.gameId);
          return this.httpClient.post("".concat(this.url, "/bets/buyTickets"), request.toString(), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (results) {
            if (results.code === 200) {
              _this40.authService.user.amountAvailable = parseFloat(results.msg.balance);

              _this40.startStatusCheckInterval();

              return results.msg;
            }

            return null;
          }));
        }
      }, {
        key: "setMinipool",
        value: function setMinipool() {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('token', this.authService.user.token)
          };
          var request = new URLSearchParams();
          request.set('gameid', this.currentLotteryInfo.gameId);
          return this.httpClient.post("".concat(this.url, "/getBonusPrizeList"), request.toString(), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (results) {
            if (results.code === 200) {
              return results;
            }

            return null;
          }));
        }
      }, {
        key: "getLastTenGames",
        value: function getLastTenGames() {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
          };
          return this.httpClient.post("".concat(this.url, "/game/getLastTenGames"), null, options);
        }
      }, {
        key: "drawMinipool",
        value: function drawMinipool() {
          var prizePool = this.lotteryObj[this.availablePrizePool];
          prizePool.winners.minipool.isDrawing = false;
          prizePool.winners.minipool.winningAmount = prizePool.winners.minipool.winningPreDisplay;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.checkStatusInterval);
        }
      }, {
        key: "lastGameId",
        set: function set(value) {
          if (value) {
            this._lastGameId = value.toString();
          }
        },
        get: function get() {
          if (this._lastGameId) {
            return this._lastGameId.toString();
          }

          if (this.currentLotteryInfo && this.currentLotteryInfo.gameId) {
            return (parseInt(this.currentLotteryInfo.gameId, 10) - 1).toString();
          }

          return null;
        }
      }, {
        key: "currentLotteryInfo",
        get: function get() {
          return this.lotteryObj[this.availablePrizePool];
        }
      }]);

      return LotteryService;
    }();

    LotteryService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _block_chain_service__WEBPACK_IMPORTED_MODULE_12__["BlockChainService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }];
    };

    LotteryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LotteryService);
    /***/
  },

  /***/
  "./src/app/services/navigation.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/navigation.service.ts ***!
    \************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcAppServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var NavigationService = function NavigationService(router) {
      var _this41 = this;

      _classCallCheck(this, NavigationService);

      this.router = router;
      this.previousRoute = '';
      this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
        return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"];
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()).subscribe(function (e) {
        _this41.previousRoute = e[0].urlAfterRedirects; // previous url
      });
    };

    NavigationService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NavigationService);
    /***/
  },

  /***/
  "./src/app/services/payout.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/payout.service.ts ***!
    \********************************************/

  /*! exports provided: PayoutService */

  /***/
  function srcAppServicesPayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayoutService", function () {
      return PayoutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var PayoutService = /*#__PURE__*/function () {
      function PayoutService(authService, httpClient) {
        _classCallCheck(this, PayoutService);

        this.authService = authService;
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
      }

      _createClass(PayoutService, [{
        key: "getPayoutHistory",
        value: function getPayoutHistory(gameid, level, page, offset) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded') // .set('token', this.authService.user.token)

          };
          var request = new URLSearchParams();
          request.set('gameid', gameid);
          request.set('page', page.toString());
          request.set('offset', offset.toString());
          request.set('level', level.toString());
          return this.httpClient.post("".concat(this.url, "/game/getPrizeList"), request.toString(), options);
        }
      }]);

      return PayoutService;
    }();

    PayoutService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    PayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PayoutService);
    /***/
  },

  /***/
  "./src/app/services/translate.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/translate.service.ts ***!
    \***********************************************/

  /*! exports provided: TranslateService */

  /***/
  function srcAppServicesTranslateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateService", function () {
      return TranslateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _constants_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/cn */
    "./src/app/constants/cn.ts");
    /* harmony import */


    var _constants_us__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../constants/us */
    "./src/app/constants/us.ts"); // Constants


    var TranslateService = /*#__PURE__*/function () {
      function TranslateService() {
        _classCallCheck(this, TranslateService);

        this.translations = {
          'us': _constants_us__WEBPACK_IMPORTED_MODULE_4__["EnglishTranslations"],
          'cn': _constants_cn__WEBPACK_IMPORTED_MODULE_3__["ChineseTranslations"]
        };
        this._languages = [{
          language: 'us',
          text: 'English',
          image: './assets/images/flags/us.svg'
        }, {
          language: 'cn',
          text: '中文',
          image: './assets/images/flags/cn.svg'
        }];
        this._currentLanguage = this.getStoredLanguage();
        this._onLanguageChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(TranslateService, [{
        key: "getStoredLanguage",
        value: function getStoredLanguage() {
          var lang = localStorage.getItem('lang');

          if (lang && this._languages.find(function (language) {
            return language.language === lang;
          })) {
            return lang;
          }

          return 'cn';
        }
      }, {
        key: "getFlagImage",
        value: function getFlagImage(country) {
          var countryObj = this._languages.find(function (lang) {
            return lang.language === country;
          });

          if (countryObj) {
            return countryObj.image;
          }
        }
      }, {
        key: "languages",
        get: function get() {
          return JSON.parse(JSON.stringify(this._languages));
        }
      }, {
        key: "currentLanguage",
        get: function get() {
          return this._currentLanguage;
        }
      }, {
        key: "onLanguageChange",
        get: function get() {
          return this._onLanguageChange.asObservable();
        }
      }, {
        key: "setCurrentLanguage",
        set: function set(language) {
          if (!language || !this._languages.find(function (lang) {
            return lang.language === language;
          })) {
            return;
          }

          localStorage.setItem('lang', language);
          this._currentLanguage = language;

          this._onLanguageChange.next(language);
        }
      }]);

      return TranslateService;
    }();

    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TranslateService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\localdev\my-projects\chat-lottery\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map