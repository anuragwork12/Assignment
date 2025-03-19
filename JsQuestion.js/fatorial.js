//Define--> The factorial of a number n (denoted as n!) is the product of all positive integers from 1 to n
//Formula:- n!=n×(n−1)×(n−2)×...×1
//For Ex:- 5!=5×4×3×2×1=120

function factorial(n){
    let fact=1;
    while(n>=1){
        fact=fact*n;
        n--;
    }
    console.log(fact);
}

let num=5;
factorial(num);