//Define--> A prime number is a number greater than 1 that has only two factors: 1 and itself.
//Example: 2, 3, 5, 7, 11, 13, 17... are prime numbers.

// function isPrime(n) {
//     let count = 0;
//     let j = 1;

//     while (j <= n) {
//         if (n % j === 0) {
//             count++;
//         }
//         j++;
//     }

//     return count === 2 ? "Prime Number" : "Composite Number";
// }

// let num = 13;
// console.log(isPrime(num)); 


// Example Usage with Error Handling

function isPrime(n) {
    
    if (typeof n !== 'number') {
        throw new Error("Invalid input: Input must be a number.");
    }
    if (!Number.isInteger(n) || n < 2) {
        throw new Error("Invalid input: Please enter an integer greater than or equal to 2.");
    }

    let count = 0;
    let j = 1;

    while (j <= n) {
        if (n % j === 0) {
            count++;
        }
        j++;
    }

    return count === 2 ? "Prime Number" : "Composite Number";
}

try {
    console.log(isPrime(13));  // Output: "Prime Number"
    console.log(isPrime(10));  // Output: "Composite Number"
    console.log(isPrime(1));   // Throws error (1 is not prime)
    console.log(isPrime(-5));  // Throws error
    console.log(isPrime(7.5)); // Throws error
    console.log(isPrime("17")); // Throws error
} catch (error) {
    console.error(error.message);
}
