//Define--> A divisor (or factor) of a number n is any number that divides n without leaving a remainder.
//For Ex:- Divisors of 9 are 1,3,9

function printDivisors(n){
    console.log(`Divisors of &{n}:`);
    for(let i=1; i<=n; i++){
        if(n%i==0){
            console.log(i)
        }
    }
}

let num=15;
printDivisors(num);