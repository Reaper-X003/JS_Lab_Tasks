function display (num1, char, num2){
    if(char == '+'){
        return num1+ num2;
    }
    else if(char =='-'){
        return num2-num1;
    }
    else if(char =='*'){
        return num2*num1;
    }
    else if(char =='/'){
        return num2/num1;
    }
    else{
        return console.log("Invalid Number");
    }
}

let num1 = parseInt(prompt("Enter number 1: "));
let num2 = parseInt(prompt("Enter number 2: "));
let sym = parseInt(prompt("+/-/*/ /: "));

console.log(display(num1,sym, num2));