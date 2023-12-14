/**
 * ### Assignment 1: Automated Testing of a User Authentication System
 
  Objective:
    Practice integrating classes and methods into a test script for a user authentication system.
    
  Instructions:
    1. Create a class as `UserAuthenticator`
    2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout,
    and password reset.
    3. Create instance of the class and call the methods
 */
var UserAuthenticator = /** @class */ (function () {
    function UserAuthenticator() {
    }
    UserAuthenticator.prototype.login = function (userName, password, url) {
        console.log("Entered user Name is ".concat(userName, " "));
        console.log("Entered user Password is ".concat(password, " "));
        console.log("Launching URL is ".concat(url, " "));
    };
    return UserAuthenticator;
}());
var usr_auth = new UserAuthenticator();
usr_auth.login('Test', 'qwerty');
console.log('-------------------');
usr_auth.login('Test', 'qwerty', 'www.google.com');
