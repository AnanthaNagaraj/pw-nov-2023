
let browserName = "chrome";
function launchBrowser(browserName)
{
    if(browserName==="chrome"){
        console.log("browser is chrome");
    }else{
        console.log("browser not supported");
    }
}

let testType="smoke"
function executeTest(){
   
    switch (testType) {
        case "sanity":
            console.log("test on sanity");
            break;
         case "regression":
            console.log("test on regression");
           break;
        default: 
            console.log("test on smoke");
            break;
    }
}


launchBrowser();
executeTest();
