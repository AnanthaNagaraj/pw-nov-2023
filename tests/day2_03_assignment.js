/*

1) Find the number of occurances.  // Easy

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum // Medium 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/


const arrNum = [2,4,3,4,2,3,2]
const k = 2

function occuranceOfNumber(arrNum,input){

    let count=0;

    for(let i=0;i<arrNum.length;i++){
         if(arrNum[i]==input)
            {
                 count++;
            }
    }
    console.log(`Number occurance of ${input} is ${count} times`); 
}

occuranceOfNumber(arrNum,k)


//=============
const nums = [2,4,7,8,11,14]; // 
const target = 18;
let sum=0;

for(let i=0;i<=nums.length-1;i++)
{
    for(let j=i+1;j<nums.length-1;j++)
    {
        sum= nums[i]+nums[j];

    if(target==18){
        console.log(nums[i],nums[j]);
    }
}
}