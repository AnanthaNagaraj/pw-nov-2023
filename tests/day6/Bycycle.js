var Bicycle = /** @class */ (function () {
    function Bicycle() {
        //Properties
        this.brand = 'BSA';
        this.weight = 25;
        this.isElectric = true;
        this.isGreless = false;
    }
    //Methods
    Bicycle.prototype.cycleInfo = function () {
        // local variables
        var model = 2023;
        console.log("The brand of Cycle is ".concat(this.brand));
        console.log("The Cycle Model ".concat(model));
    };
    return Bicycle;
}());
// Calling Method:
var cycleInstance = new Bicycle();
cycleInstance.cycleInfo();
