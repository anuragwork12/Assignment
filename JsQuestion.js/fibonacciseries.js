//Define--> The Fibonacci Series is a sequence of numbers where each term is the sum of the two previous terms, starting from 0 and 1
//For Ex:- fibonacci series of 10
// f(0)=0
// f(1)=1
// f(2)=1+0=1
// f(3)=1+1=2
// f(4)=1+2=3
// f(5)=2+3=5
// f(6)=3+5=8
// So Fibonacci series of 10 is:-0,1,1,2,3,5,8

function fibonacciSeries(n){
    let x,y,z;
    x=0;
    y=1;
    z=0;
    while(z<=n){
        console.log(z);
        x=y;
        y=z;
        z=x+y;
    }
}

let num =10;
fibonacciSeries(num);

