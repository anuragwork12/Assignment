//Define--> An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
//For Example:-
//n=153-->1^3 + 5^3 + 3^3 = 153 so by definition it is a Armstrong Number
//n=370,371,1634,9474 are few examples

// function isArmstrong(n) {
//     let  dup = n, sum=0;
    
//     while (n > 0) {
//         let ld = n % 10;          // Extract last digit
//         sum = sum+(ld*ld*ld);
//         n = Math.floor(n / 10);    // Remove last digit
//     }

//     return dup === sum;
// }

// // Get input from user by adding this code in html 
// // let num = parseInt(prompt("Enter a number:"));

// let num = 370;
// if (isArmstrong(num)) {
//     console.log("It is a Armstrong");
// } else {
//     console.log("Not a Armstrong");
// }


//Example usage with error handling

function isArmstrong(n) {
    if(typeof n!=='number'){
        throw new Error("Invalid output: Input must be number.");
    }
    if(!Number.isInteger(n) || n < 100 || n > 999){
        throw new Error("Invalid output: Input must be positive integer greater than 0 and must be a 3 digit number.");
    }
    let  dup = n, sum=0;
    
    while (n > 0) {
        let ld = n % 10;          // Extract last digit
        sum = sum+(ld*ld*ld);
        n = Math.floor(n / 10);    // Remove last digit
    }

    return dup === sum;
}

try {
    let num = 7;
if (isArmstrong(num)) {
    console.log(`${num} is an Armstrong number.`);
} else {
    console.log(`${num} is not an Armstrong number.`);
}
} catch (error) {
    console.error(error.message);
}

