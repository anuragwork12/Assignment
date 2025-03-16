#include<iostream>
using namespace std;


//REVERSE A NUMBER  
// int main(){
//     int n;
//     cin>>n;
//     int revN=0;
//     while(n>0){
//         int ld=n%10;
//         revN=(revN*10)+ld;
//         n=n/10;
//     }
//     cout<<revN;
// }


//CHECK PALINDROME
// int main(){
//     int n;
//     cin>>n;
//     int revN=0;
//     int dup=n;
//     while(n>0){
//         int ld=n%10;
//         revN=(revN*10)+ld;
//         n=n/10;
//     }
//     if(dup==revN){
//         cout<<"It is a Palindrome";
//     }
//     else{
//         cout<<"Not a Palindrome";
//     }
// }


//CHECK ARMSTRONG
// int main(){
//     int n;
//     cin>>n;
//     int sum=0;
//     int dup=n;
//     while(n>0){
//         int ld=n%10;
//         sum =sum+(ld*ld*ld);
//         n=n/10;
//     }
//     if(dup==sum){
//         cout<<"It is a Armstrong Number";
//     }
//     else{
//         cout<<"Not a Armstrong Number";
//     }
// }


//PRINT ALL DIVISIONS
// void printDivisors(int n){
//     for(int i=1;i<=n;i++){
//         if(n%i==0){
//             cout<<i<<" ";
//         }
//     }
// }
// int main(){
//     int n;
//     cin>>n;
//     printDivisors(n);
//     return 0;
// }


//CHECK PRIME NUMBER
// int main(){
//     int i;
//     int count=0;
//     int j=1;
//     cout<<"Enter a number"<<endl;
//     cin>>i;
//     while(j<=i){
//         if(i%j==0)
//         count++;
//         j++;
//     }
//     if(count==2)
//     cout<<"Prime No"<<endl;
//     else
//     cout<<"Composite No"<<endl;
//     return 0;

// }


//FIND GCD OR HCF
// int gcd(int a,int b){
//     while(a>0&&b>0){
//         if(a>b) a=a%b;
//         else b=b%a;
//     }
//     if(a==0) return b;
//     return a;
// }
// int main(){
//     int a,b;
//     cout<<"First Number"<<endl;
//     cin>>a;
//     cout<<"Second Number"<<endl;
//     cin>>b;
//     // int result=gcd(a,b);
//     cout<<"GCD is: "<<gcd(a,b);
//     return 0;
// }


//fIBONACCI SERIES
// int main(){
//     int n,x,y,z;
//     cout<<"Enter a number"<<endl;
//     cin>>n;
//     x=0;
//     y=1;
//     z=0;
//     while(z<=n){
//         cout<<z<<endl;
//         x=y;
//         y=z;
//         z=x+y;
//     }
//     return 0;
// }


//FACTORIAL
// int main(){
//     int n;
//     cout<<"Enter a number :";
//     cin>>n;
//     int fact=1;
//     // while(n>=1){
//     //     fact=fact*n;
//     //     n--; //n=n-1;
//     // }
//     for(n;n>=1;n--){
//         fact =fact*n;
//     }
//     cout<<"Factorial :"<<fact;
//     return 0;
// }


