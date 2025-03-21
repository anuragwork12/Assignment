//Define--> Rearranging its digits in the opposite order.
//For Ex:- 1234--> Reversed Order:4321

// function reverseNumber(n) {
//     let revN = 0;
//     while (n > 0) {
//         let lastDigit = n % 10;       // Extract the last digit
//         revN = (revN * 10) + lastDigit; // Add to reversed number
//         n = Math.floor(n / 10);       // Remove the last digit
//     }
//     return revN;
// }

// console.log(reverseNumber(1234));
// console.log(reverseNumber(9876)); 


// Example Usage with Error Handling

function reverseNumber(n) {

    if (typeof n !== 'number') {
        throw new Error("Invalid input: Input must be a number.");
    }
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Invalid input: Please enter a positive integer.");
    }

    let revN = 0;
    while (n > 0) {
        let lastDigit = n % 10;       // Extract the last digit
        revN = (revN * 10) + lastDigit; // Add to reversed number
        n = Math.floor(n / 10);       // Remove the last digit
    }
    return revN;
}

try {
    let num = 4321;
    console.log(`Reverse of ${num} is: ${reverseNumber(num)}`);
    console.log(reverseNumber(1234));  // Output: 4321
    console.log(reverseNumber(9876));  // Output: 6789
    console.log(reverseNumber(-123));  // Throws error
    console.log(reverseNumber(12.34)); // Throws error
    console.log(reverseNumber("1234")); // Throws error
} catch (error) {
    console.error(error.message);
}
