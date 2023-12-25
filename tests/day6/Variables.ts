// Customized data types

type Point = {
    x: number;
    y: number;
}
let dimension:Point={x:10,y:20};

console.log(dimension.x);
console.log(dimension.y);

type person = {
    aname : string;
    age : number;
    address : boolean
}

let p:person={
    aname:"ANANTHA",
    age:20,
    address:true
};
console.log(p.age);

type supportedBrowser = "Chrome"|"Firefox";
function invokeBrowser(browser:supportedBrowser):void{
    if(browser==='Chrome'){
        console.log('CHROME');
    
    }else if(browser==='Firefox'){
     console.log('FIREFOX');
    }else{
        console.log('Invalid');  
}
}

invokeBrowser('Chrome');