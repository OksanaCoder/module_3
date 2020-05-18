

// 1) MAX CHAR

var getMax = function (str) {
 var max = 0,
     maxChar = '';
  str.split('').forEach(function(char){
    if(str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
     }
  });
  return maxChar;
};

console.log(getMax("abcccccccd"));
// Given a string, return the character that is most
// commonly used in the string.

// --- Examples
//     maxChar("abcccccccd") === "c"
//     maxChar("apple 1231111") === "1"
/*
2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
function compare (a, b) {
    var y = a.split("").sort().join(""),
        z = b.split("").sort().join("");
    console.log(z === y
        ? a + " and " + b + " are anagrams!"
        : a + " and " + b + " are not anagrams."
    );
}
console.log(compare('wedc', 'ecfg'));
/*
  
3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".

4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
*/
function palindrome(str) {
    const reversed = str
    .split('')
    .reverse()
    .join('');

    return str === reversed;
}
console.log(palindrome("abba"));



/*
5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
*/
function reverseOrder(numb) {
    const reversing = parseFloat(numb
    .toString()
    .split('')
    .reverse()
    .join('')
    )
    * Math.sign(numb)

  return reversing
}
console.log(reverseOrder(-495));

/*
6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####'
*/
function steps(n, i = 1) {
    if (i > n) return;
    console.log('#'.repeat(i) + ' '.repeat(n - i));
    steps(n, i + 1);
  }

console.log(steps(3));
/*
7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
*/
function reverseStr(str) {
    let revStr = str.toString().split('').reverse().join('');
    return revStr
}
console.log(reverseStr('apple!!!'));


/*
8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

*/

function chunk(array, size) {
    const chunked_arr = [];
    let copied = [...array]; // ES6 destructuring
    const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
    for (let i = 0; i < numOfChild; i++) {
      chunked_arr.push(copied.splice(0, size));
    }
    return chunked_arr;
  }
console.log(chunk([1, 2, 3, 4], 2));

/*
9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####'

10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
