//Define--> Rearranging its digits in the opposite order.
//For Ex:- 1234--> Reversed Order:4321

function reverseNumber(n) {
    let revN = 0;
    while (n > 0) {
        let lastDigit = n % 10;       // Extract the last digit
        revN = (revN * 10) + lastDigit; // Add to reversed number
        n = Math.floor(n / 10);       // Remove the last digit
    }
    return revN;
}

console.log(reverseNumber(1234));
console.log(reverseNumber(9876)); 