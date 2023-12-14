class Bicycle{
    //Properties
    brand:string = 'BSA';
    weight:number = 25;
    isElectric = true;
    isGreless = false;

    //Methods
    cycleInfo():void{
        // local variables
        let model:number = 2023;
        console.log(`The brand of Cycle is ${this.brand}`);
        console.log(`The Cycle Model ${model}`);
    }



}

// Calling Method:
const cycleInstance=new Bicycle();
cycleInstance.cycleInfo();