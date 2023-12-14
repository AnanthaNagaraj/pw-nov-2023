class MyShoppingCart{
    mobile:string='SAMSUNG';
    dress:string='DRESS';
    food:string= 'IDLY';

    public addItem(){
        let chocolate:string = "5-star";
        console.log(`Added ${this.mobile} to cart`);
        console.log(`Added  ${this.dress} to cart`);
        console.log(`Added  ${this.food} to cart`);
        console.log(`Added  ${chocolate} to cart`);
    }
    private removeItem(){
        console.log(`Removed ${this.food} from cart`);
    }
    public checkOut(accountName:string,cardNumber:number){
        this.removeItem();
        console.log("Accout Name :: " +accountName);
        console.log("Card Number :: " +cardNumber);
        console.log(`Total payment is ${5000.00}`);
    }
}

const myCart = new MyShoppingCart();
myCart.addItem();
myCart.checkOut('ANANTHA',12345);