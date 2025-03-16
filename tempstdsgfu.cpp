int main(){
    int i;
    int count=0;
    int j=1;
    cout<<"Enter a number"<<endl;
    cin>>i;
    while(j<=i){
        if(i%j==0)
        count++;
        j++;
    }
    if(count==2)
    cout<<"Prime No"<<endl;
    else
    cout<<"Composite No"<<endl;
    return 0;

}