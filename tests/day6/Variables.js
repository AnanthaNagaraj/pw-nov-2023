// Customized data types
var dimension = { x: 10, y: 20 };
console.log(dimension.x);
console.log(dimension.y);
var p = {
    aname: "ANANTHA",
    age: 20,
    address: true
};
console.log(p.age);
function invokeBrowser(browser) {
    if (browser === 'Chrome') {
        console.log('CHROME');
    }
    else if (browser === 'Firefox') {
        console.log('FIREFOX');
    }
    else {
        console.log('Invalid');
    }
}
invokeBrowser('Chrome');
