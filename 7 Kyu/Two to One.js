/**
* Kata Name : Two to One
* Kyu Level : 7 kyu
* Kata Description : Take 2 strings s1 and s2 including only letters from ato z.
*                    Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*                    Examples:
*                    a = "xyaabbbccccdefww"
*                    b = "xxxxyyyyabklmopq"
*                    longest(a, b) -> "abcdefklmopqwxy"
*                    
*                    a = "abcdefghijklmnopqrstuvwxyz"
*                    longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*                    
*/

let longest = (s1, s2) =>{
    s1a = s1.split('');
    s2a = s2.split('');
    let newArray = s1a.concat(s2a);
    let uniqueCharacters = [...new Set(newArray)];
    return uniqueCharacters.sort().join('');
}