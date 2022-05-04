let regex = /this is a regex/i

let test_string = "Hi! This is a RegEx :)"

// [1] Match a string against a regular expression
console.log(regex.test(test_string))

// [2] Substitute part of a string using a regular expression
console.log(test_string.replace(regex, 'Regular Expressions'))