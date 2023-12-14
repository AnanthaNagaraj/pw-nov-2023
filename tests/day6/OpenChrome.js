"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpenChrome = /** @class */ (function () {
    function OpenChrome() {
    }
    OpenChrome.prototype.startApp = function () {
        this.browserName;
        console.log('Launch Browser :: ' + this.browserName);
    };
    OpenChrome.prototype.loginCredentials = function (userName, password) {
        return userName + " " + password;
    };
    OpenChrome.prototype.getStatus = function () {
        return true;
    };
    OpenChrome.prototype.click = function () {
        console.log("CLicking on Button");
    };
    return OpenChrome;
}());
var openChrm = new OpenChrome();
openChrm.startApp();
var cred = openChrm.loginCredentials("ANANTHA", "XXXXX");
console.log(cred);
var arrayCredentials = cred.split(' ');
console.log(arrayCredentials[0]);
console.log(arrayCredentials[1]);
console.log(openChrm.getStatus());
openChrm.click();
