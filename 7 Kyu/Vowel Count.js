/**
* Kata Name : Vowel Count
* Kyu Level : 7 kyu
* Kata Description : Return the number (count) of vowels in the given string. 
*                    We will consider a, e, i, o, u as vowels for this Kata (but not y).
*                    The input string will only consist of lower case letters and/or spaces.
*/
const getCount = str => {
    let s = str.match(/[aeiou]/gi);
    return s ? s.length : 0;
}