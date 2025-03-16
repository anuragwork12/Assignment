int main(){
    int n;
    cout<<"Enter a number :";
    cin>>n;
    int fact=1;
    // while(n>=1){
    //     fact=fact*n;
    //     n--; //n=n-1;
    // }
    for(n;n>=1;n--){
        fact =fact*n;
    }
    cout<<"Factorial :"<<fact;
    return 0;
}
