/*
Valid Parentheses
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100
*/

function validParentheses(parens){
    if (parens.length <= 0 && parens.length > 100) return false;
    if (parens[0] === ')' || parens.length === 1) return false;
    
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(' && count >= 0) count++;
        if (parens[i] === ')') count--;
    }

    return (count === 0) ? true : false;
}

console.log(validParentheses( "()()" )); // true
console.log(validParentheses( "()" )); // true
console.log(validParentheses( "())" )); // false
console.log(validParentheses( ")(()))" )); // false
console.log(validParentheses( ")" )); // false
console.log(validParentheses( "(" )); // false
console.log(validParentheses( "())(" )); // false