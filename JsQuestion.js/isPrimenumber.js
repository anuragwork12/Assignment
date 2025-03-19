//Define--> A prime number is a number greater than 1 that has only two factors: 1 and itself.
//Example: 2, 3, 5, 7, 11, 13, 17... are prime numbers.

function isPrime(n) {
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

let num = 13;
console.log(isPrime(num)); 

