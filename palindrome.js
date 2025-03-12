//palindrome check
const isPalindrome =(str)=>{
    let reverse ="";
    for(let char = str.length-1; char>=0; char--){
        reverse = reverse + str[char];
    }
    return str==reverse?true:false;
};

console.log(isPalindrome("level"));
