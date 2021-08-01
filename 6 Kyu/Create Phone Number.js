/**
* Kata Name : Create Phone Number
* Kyu Level : 6 kyu
* Kata Description : Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*                    Example:
*                    
*                    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*                    
*                    createPhoneNumber(int[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"
*                    
*                    create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
*                    
*                    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
*                    
*                    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
*                    
*                    Kata.createPhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"
*                    
*                    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*                    
*                    createPhoneNumber [1,2,3,4,5,6,7,8,9,0] -- => returns "(123) 456-7890"
*                    
*                    Kata.CreatePhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"
*                    
*                    createPhoneNumber [1; 2; 3; 4; 5; 6; 7; 8; 9; 0] // => returns "(123) 456-7890"
*                    
*                    create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
*                    
*                    Kata.createPhoneNumber(Seq(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) # => returns "(123) 456-7890"
*                    
*                    createPhoneNumber([1,2,3,4,5,6,7,8,9,0]); // => returns "(123) 456-7890"
*                    
*                    createPhoneNumber [1; 2; 3; 4; 5; 6; 7; 8; 9; 0] // => returns "(123) 456-7890"
*                    
*                    (create-phone-number [1 2 3 4 5 6 7 8 9 0]) ;; => returns "(123) 456-7890"
*                    
*                    create_phone_number(&[1,2,3,4,5,6,7,8,9,0]); // returns "(123) 456-7890"
*                    
*                    CreatePhoneNumber([10]uint{1,2,3,4,5,6,7,8,9,0})  // returns "(123) 456-7890"
*                    
*                    create_phone_number(phnum, (const unsigned char[]){1,2,3,4,5,6,7,8,9,0});
*                         phnum <- "(123) 456-7890" 
*                    
*                    phnum:  resb 15
*                    nums:   db  1,2,3,4,5,6,7,8,9,0
*                    
*                    mov rdi, phnum
*                    mov rsi, nums
*                    call create_phone_number  ; RAX <- phnum <- "(123) 456-7890" 
*                    
*                    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*                    
*                    createphonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # -> returns "(123) 456-7890"
*                    
*                    createPhoneNumber( [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] ) // => returns "(123) 456-7890"
*                    
*                    { 1 2 3 4 5 6 7 8 9 0 } create-phone-number ! returns "(123) 456-7890"
*                    
*                    The returned format must be correct in order to complete this challenge. 
*                    Don't forget the space after the closing parentheses!
*/
function createPhoneNumber(numbers){
    let first = numbers.slice(0, 3).join('');
    let second = numbers.slice(3,6).join('');
    let third = numbers.slice(6,10).join('');
    return `(${first}) ${second}-${third}`;
  }