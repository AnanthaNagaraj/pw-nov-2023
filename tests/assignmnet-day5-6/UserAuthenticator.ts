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

class UserAuthenticator{

  login(userName:string,password:string,url?:string):void{
    console.log(`Entered user Name is ${userName} `);
    console.log(`Entered user Password is ${password} `);
    console.log(`Launching URL is ${url} `);
}

}

const usr_auth = new UserAuthenticator();
usr_auth.login('Test','qwerty');
console.log('-------------------');
usr_auth.login('Test','qwerty','www.google.com');

