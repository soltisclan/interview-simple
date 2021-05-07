// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Run the tests with the following command:
// npm run test 3.test

function vowels(str) {
    var vowels_array = [];
    str.toLowerCase().split('').forEach(function(char){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            vowels_array.push(char);
        }
    });
    return vowels_array.length
}

console.log(vowels("Hello I am a test string."))
module.exports = vowels;
