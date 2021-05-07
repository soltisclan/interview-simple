// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Run the tests with the following command:
// npm run test 2.test

function reverse(str) {
    new_str = str.split('').reverse().join('');
    return new_str;
}

function palindrome(str) {
    if(str === reverse(str)){
        return true;
    }else{
        return false;
    }
}

console.log(palindrome("abba"))
console.log(palindrome("abb a"))
console.log(palindrome("abcdefg"))

module.exports = palindrome;
