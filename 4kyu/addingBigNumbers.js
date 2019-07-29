/* 
Adding Big Numbers
We need to sum big numbers and we require your help.
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99"); -> "110"

Notes
- The input numbers are big.
- The input is a string of only digits
- The numbers are positives
*/

function add(a, b) {
    let aLength = a.length;
    let bLength = b.length;
    a = (bLength > aLength) ? genZero(bLength - aLength) + a : a;
    b = (aLength > bLength) ? genZero(aLength - bLength) + b : b;

    let save = 0;
    let result = '';

    for (let i = a.length - 1; i >= 0; i--) {
        let hit = Number(a[i]) + Number(b[i]) + Number(save);
        let hitToString = String(hit);
        save = (hitToString.length > 1) ? hitToString[0] : 0;
        result = (hitToString.length > 1) ? hitToString[1] + result : hitToString[0] + result;
    }

    if (Number(save) > 0) {
        result = save + result
    }
    return result
}

function genZero(num) {
    let result = '';

    for (let i = 0; i < num; i++) {
        result += '0';
    }

    return result;
}

console.log(add("1", "1")); // 2
console.log(add("123", "456")); // 579
console.log(add("888", "222")); // 1110
console.log(add("1372", "69")); // 1441
console.log(add('63829983432984289347293874', '90938498237058927340892374089')); // 91002328220491911630239667963