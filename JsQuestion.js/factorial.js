//Define--> The factorial of a number n (denoted as n!) is the product of all positive integers from 1 to n
//Formula:- n!=n×(n−1)×(n−2)×...×1
//For Ex:- 5!=5×4×3×2×1=120

// function factorial(n){
//     let fact=1;
//     while(n>=1){
//         fact=fact*n;
//         n--;
//     }
//     console.log(fact);
// }

// let num=5;
// factorial(num);


// Example Usage with Error Handling

function factorial(n) {

    if (typeof n !== 'number') {
        throw new Error("Invalid input: Input must be a number.");
    }
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Invalid input: Please enter a non-negative integer.");
    }

    let fact = 1;
    while (n > 0) {
        fact *= n;
        n--;
    }
    return fact;
}

try {
    let num = 10;
    console.log(`The factorial of ${num} is: ${factorial(num)}`)
    console.log(factorial(5));   // Output: 120
    console.log(factorial(0));   // Output: 1 (Edge case: 0! = 1)
    console.log(factorial(-3));  // Throws error
    console.log(factorial(4.5)); // Throws error
    console.log(factorial("6")); // Throws error
} catch (error) {
    console.error(error.message);
}