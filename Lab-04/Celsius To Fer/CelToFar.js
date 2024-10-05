/*
Write a function convertToFahrenheit that converts Celsius         temperature to Fahrenheit.
Formula: Fahrenheit = (Celsius * 9/5) + 32
*/
function temp(cel){
    return (cel * 9/5) + 32;
}

let Input = parseInt(prompt("Enter The Temp in Celsius: "));
console.log(temp(Input));