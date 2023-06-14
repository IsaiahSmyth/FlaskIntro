/* 
    Reverse Word Order

    Given a string of words (with spaces)
    return a new string with words in reverse sequence.
*/

const str1_1 = "This is a test";
const expected1_1 = "test a is This";

const str2_1 = "hello";
const expected2_1 = "hello";

const str3_1 = "   This  is a   test  ";
const expected3_1 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {



    // Loop in reverse order with the array from the split method.
    



    // Add each word in reverse order to our temp string with concatenation
    // Possibly add the spaces back to the string as they are added? 
    let temp = ''
    let words = wordsStr.split(' ');
    for (var i = words.length - 1; i >= 0; i--) {
        temp += words[i];
        if (i > 0) {
            temp += '';
        }

    }
}
reverseWordOrder(str1_1)
reverseWordOrder(str2_1)
reverseWordOrder(str3_1)
console.log(reverseWordOrder(str1_1));