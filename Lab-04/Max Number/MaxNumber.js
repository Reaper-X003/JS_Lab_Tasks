/* 
Write a JavaScript program to find the largest number in an array.
*/

let arr = [1,13,17,24,543,234,452,453,77,657,346];
let max = 0;

for(let i = 0; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
}

console.log(max);