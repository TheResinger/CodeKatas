/**
* Kata Name : Stop gninnipS My sdroW
* Kyu Level : 6 kyu
* Kata Description : Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).
*                    
*                    Strings passed in will consist of only letters and spaces.
*                    Spaces will be included only when more than one word is present.
*                    
*                    Examples:
*                    spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
*                    spinWords("This is a test") => "This is a test" 
*                    spinWords("This is another test") => "This is rehtona test"
*                    
*/

let spinWords = string => {
    let stringArray = string.split(' ');
    let outputArray = [];
    stringArray.forEach(word => {
        if(word.length >= 5)
        {
            outputArray.push(word.split('').reverse().join(''));
        } else {
            outputArray.push(word);
        }
    })
    return outputArray.join(' ');  
}
