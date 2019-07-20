/*
Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples:
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    let arr = str.split(" ");
    
    for (let i = 0; i < arr.length; i++) {
        let strMove = '';
        
        for (let j = 1; j < arr[i].length; j++) {
            strMove += arr[i][j];
        }

        if (allLetter(strMove+arr[i][0])) {
            arr[i] = strMove+arr[i][0]+'ay';
        } else {
            arr[i] = strMove+arr[i][0];
        }
        
    }
    return arr.join(' ');
}

function allLetter(str)
{ 
    let letters = /^[A-Za-z]+$/;

    if(str.match(letters))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('This is my string')); // hisTay siay ymay tringsay