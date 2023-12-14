interface Browser{
    browserName:String;
    startApp();
    loginCredentials(userName:string,password:string):string;
    getStatus():boolean;
}


interface clickAction{
    click();
}

export {Browser,clickAction}