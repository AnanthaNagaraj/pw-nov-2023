import { Browser, clickAction } from "./MyInterface";


class OpenChrome implements Browser, clickAction{
    
    browserName: String;

    startApp() {
        this.browserName;
        
        console.log('Launch Browser :: '+ this.browserName);
        
    }
    
    loginCredentials(userName: string, password: string): string {
        return userName + " " +password;
    }
    
    getStatus(): boolean {
        return true;
    }
    

    click() {
       console.log("CLicking on Button");
       
    }

}

const openChrm = new OpenChrome();
openChrm.startApp();
const cred =openChrm.loginCredentials("ANANTHA","XXXXX");
console.log(cred);
const arrayCredentials=cred.split(' ');
console.log(arrayCredentials[0]);
console.log(arrayCredentials[1]);

console.log(openChrm.getStatus());

openChrm.click();

