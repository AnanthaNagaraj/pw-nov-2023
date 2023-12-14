function signUp(fName, lName, email, city, age) {
    console.log("".concat(fName, " -- ").concat(lName, " -- ").concat(email, " -- ").concat(city, " -- ").concat(age));
}
//signUp('ANANTHA','N','abc@gmail.com','bang',30);
signUp('ABC', 'XYZ', 'abc@gmail.com', '', 30);
// Default Parameter 
function type(password, userName) {
    if (userName === void 0) { userName = 'DemoSales'; }
    console.log("user Name ".concat(userName, ", ").concat(password, " "));
}
type('qwerty', 'ANANTHA');
