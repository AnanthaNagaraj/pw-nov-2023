var MyShoppingCart = /** @class */ (function () {
    function MyShoppingCart() {
        this.mobile = 'SAMSUNG';
        this.dress = 'DRESS';
        this.food = 'IDLY';
    }
    MyShoppingCart.prototype.addItem = function () {
        var chocolate = "5-star";
        console.log("Added ".concat(this.mobile, " to cart"));
        console.log("Added  ".concat(this.dress, " to cart"));
        console.log("Added  ".concat(this.food, " to cart"));
        console.log("Added  ".concat(chocolate, " to cart"));
    };
    MyShoppingCart.prototype.removeItem = function () {
        console.log("Removed ".concat(this.food, " from cart"));
    };
    MyShoppingCart.prototype.checkOut = function (accountName, cardNumber) {
        this.removeItem();
        console.log("Accout Name :: " + accountName);
        console.log("Card Number :: " + cardNumber);
        console.log("Total payment is ".concat(5000.00));
    };
    return MyShoppingCart;
}());
var myCart = new MyShoppingCart();
myCart.addItem();
myCart.checkOut('ANANTHA', 12345);
