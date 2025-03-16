int gcd(int a,int b){
    while(a>0&&b>0){
        if(a>b) a=a%b;
        else b=b%a;
    }
    if(a==0) return b;
    return a;
}
int main(){
    int a,b;
    cout<<"First Number"<<endl;
    cin>>a;
    cout<<"Second Number"<<endl;
    cin>>b;
    // int result=gcd(a,b);
    cout<<"GCD is: "<<gcd(a,b);
    return 0;
}