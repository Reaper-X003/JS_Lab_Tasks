/*
Create a JavaScript function that returns an array of only the even numbers from an input array of numbers.
*/

let arr = [1,13,17,24,543,234,452,453,77,657,346];
let even = [];

for(let i = 0; i<arr.length; i++){
    if(arr[i]%2==0){
        even.push(arr[i]);
    }
}

console.log(even);