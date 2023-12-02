
/**
 * 1) Move Zeroes:
   Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 */
function pushZeroToLast(arr, len) {
    let count = 0;

    for(let i=0;i<len;i++) {
        if(arr[i]!==0) {
            arr[count++] = arr[i];
        }
    }

    while(count<len) {
        arr[count++] = 0;
    }
}

let arr = [1, 9, 0, 0, 2, 7, 0];
pushZeroToLast(arr, arr.length);
console.log(arr);
console.log("============================================================");

/**
 * Find the maximum and minimum:
 */
let nums = [34, 7, 21, 89, 54, 10, 91, 67];
findMinAndMax(nums);

function findMinAndMax(arrNum) {
    let min = arrNum[0];
    let max = arrNum[0];

    for(let i=0;i<arrNum.length;i++) {
        if(max<arrNum[i]) {
            max = arrNum[i];
        }

        if(min>arrNum[i]) {
            min = arrNum[i];
        }

    }
    console.log(`Min : ${min} and Max : ${max}`);
	console.log("============================================================");
}

/**
 * Remove Duplicates:
 */

let  iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
//let uniqArray = new Set(iputArray);
//console.log(...[uniqArray]);

let  a = [1, 2, 3, 4, 2, 5, 6, 1, 6];
let b = [];
let arrLenght = a.length;
for(let i=0;i<arrLenght;i++ ) {
    if(!b.includes(a[i])) {
        b.push(a[i]);
    }
}
console.log(b);
console.log("============================================================");


/**
 * Array intersection
 */
let nums1 = [1,2,2,1];
let nums2 = [2,2];

let intersectionsArray = nums1.filter((ele) =>{
	return nums2.includes(ele);
});


console.log(...new Set([intersectionsArray]));
