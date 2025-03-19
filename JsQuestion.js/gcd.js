//Define--> The Greatest Common Divisor (GCD) or Highest Common Factor (HCF) of two numbers is the largest number that divides both of them without leaving a remainder.
//For Example:-
// GCD of (24, 36) = 12
// (Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24)
// (Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36)
// Common factors: 1, 2, 3, 4, 6, 12 → Highest is 12

//Here we will use Euclidean Algorithm i.e. gcd(n1,n2)=gcd((n1-n2),n2)

function gcd(a,b){
    while(a>0&&b>0){
                if(a>b) a=a%b;
                else b=b%a;
            }
            if(a==0) return b;
            return a;
            //return a==0?b:a;
        }
console.log(gcd(9,12));