// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Run the tests with the following command:
// npm run test 1.test

function reverse(str) {
    var new_str = str.split('').reverse().join('');
    return new_str;
}

console.log(reverse("Hello this is a test."))

module.exports = reverse;
