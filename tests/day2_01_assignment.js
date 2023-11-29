    /*
Classroom 1

int val = 10; // 1,2,3,4,...10
function for odd or even !!

print odd numbers between 1 to n // 1,3,5,7,9


Classroom 2

int val = 5;
funtion to sum all the values between 1 to n 
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, i need the sum !! 

*/


function printOddNumbers(val){
    for (let i = 0; i <= val; i++) {
        if(i%2 !== 0){
            console.log("Odd Number :"+i);
        }
        
    }

}
printOddNumbers(10);


function numberSum(N) {
    let total = 0;
      for(let i = 1; i <= N; i++){
        total += i;
      }
      console.log(" Sum of Number :: "+total);
  }

numberSum(5);  