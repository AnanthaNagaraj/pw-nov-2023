// class LoginPage{
//      browserName:string;
//      browserVersion:number;
//      browserURL:string;

//     // constructor
//     constructor(bName:string,bversion:number,url:string){
//         this.browserName = bName;
//         this.browserVersion = bversion;
//         this.browserURL = url;
//         console.log(`Browser Name is ${bName}`);
//         console.log(`Browser Version is ${bversion}`);
//         console.log(`URL is ${url}`);
        

//     }

//     signUp(userName:string,password:string):string{
//         return userName+""+password;
//     }
// }


// const lp = new LoginPage("chrome",117,"www.google.com");
// const cred=lp.signUp('ANANTHA','xxxx');
// console.log(cred);


class LoginPage{


    browserName: string;
    browserVersion: number;
    url: string;


    constructor(bName:string, bVersion:number, URL: string){


        this.browserName = bName;
        this.browserVersion = bVersion;
        this.url = URL;
        console.log(`The browser details are: ${bName}, ${bVersion}, ${URL}`);
        
    }


    signUp (username:string, password: string):string{


            return username+ " "+password;
    }
}
