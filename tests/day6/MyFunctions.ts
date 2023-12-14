function signUp(fName:string,lName:string,email:string,city?:string,age?:number){
    console.log(`${fName} -- ${lName} -- ${email} -- ${city} -- ${age}`);
    

}

//signUp('ANANTHA','N','abc@gmail.com','bang',30);
signUp('ABC','XYZ','abc@gmail.com','',30);


// Default Parameter 
function type(password:string,userName:string='DemoSales'){
    console.log(`user Name ${userName}, ${password} `);
    
}

type('qwerty','ANANTHA');