// Define--> A palindrome is a word, number, phrase, or sequence that reads the same forward and backward.
//For Example:-
//121-->Palindrome(same forward and backward)
//123-->Not a Palindrome(123!=321)


// function isPalindrome(n) {
//     let  dup = n, revN=0;
    
//     while (n > 0) {
//         let ld = n % 10;          // Extract last digit
//        revN = (revN * 10) + ld;  // Add last digit to reversed number
//         n = Math.floor(n / 10);    // Remove last digit
//     }

//     return dup === revN;
// }

// // Get input from user by adding this code in html 
// // let num = parseInt(prompt("Enter a number:"));

// let num = 121;
// if (isPalindrome(num)) {
//     console.log("It is a Palindrome");
// } else {
//     console.log("Not a Palindrome");
// }


//Example usage with error handling

function isPalindrome(n) {
    if(typeof n!=='number'){
        throw new Error("Invalid output:Input must be a number.");
    }
    if(!Number.isInteger(n) || n < 9){
        throw new Error("Invalid output:Input must be of atleast of 2 digit.")
    }
    let  dup = n, revN=0;
    
    while (n > 0) {
        let ld = n % 10;          // Extract last digit
       revN = (revN * 10) + ld;  // Add last digit to reversed number
        n = Math.floor(n / 10);    // Remove last digit
    }

    return dup === revN;
}
try {
    
let num = 2;
if (isPalindrome(num)) {
    console.log(`${num} is a Palindrome.`);
} else {
    console.log(`${num} is not a Palindrome.`);
}
} catch (error) {
    console.error(error.message)
}