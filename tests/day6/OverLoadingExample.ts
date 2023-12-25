function calculateArea(shape:'Rectangle',width:number,height:number):number;
function calculateArea(shape:'square',width:number):number;
function calculateArea(shape:'square',width:string):number

function calculateArea(shape:'Rectangle'|'square',width:any,height?:number):number{
    if(height==undefined)
    {
        return width;
    }
    return width*height;
}

//
function openApp():void; // open leaftap with chrome browser
function openApp(url:string):void; //open given URL with chrome browser
function openApp(url:string,browser:string):void; //open given URL with given browser


function openApp(url?:string,browser?:string):void{
    if(url===''){
        console.log('open given URL with chrome browser');
    }else if(url===''&&browser===''){
        console.log('open given URL with given browser');
    }else{
        console.log('open leaftap with chrome browser');
        
    }
}

/**
 * Opens the specified URL with the specified browser or opens the default application (LeafTap) with Chrome.
 * @param url - The URL to open. If not provided, a default behavior will be used.
 * @param browser - The browser to use. If not provided, Chrome will be used.
 */
function openApp1(url?: string, browser?: string): void {
    if (!url && !browser) {
        console.log('Open LeafTap with Chrome browser');
    } else if (url && !browser) {
        console.log(`Open the given URL (${url}) with Chrome browser`);
    } else if (url && browser) {
        console.log(`Open the given URL (${url}) with ${browser} browser`);
    } else {
        console.log('Open LeafTap with Chrome browser');
    }
}
