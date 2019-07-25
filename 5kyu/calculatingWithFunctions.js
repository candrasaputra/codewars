/* 
Calculating with Functions

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:
- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
*/

function zero(func) { return (func == undefined) ? 0 : func(0) }
function one(func) { return (func == undefined) ? 1 : func(1) }
function two(func) { return (func == undefined) ? 2 : func(2) }
function three(func) { return (func == undefined) ? 3 : func(3) }
function four(func) { return (func == undefined) ? 4 : func(4) }
function five(func) { return (func == undefined) ? 5 : func(5) }
function six(func) { return (func == undefined) ? 6 : func(6) }
function seven(func) { return (func == undefined) ? 7 : func(7) }
function eight(func) { return (func == undefined) ? 8 : func(8) }
function nine(func) { return (func == undefined) ? 9 : func(9) }

function plus(num1) { return function(num2){ return num2 + num1 } }
function minus(num1) { return function(num2){ return num2 - num1 } }
function times(num1) { return function(num2){ return num2 * num1 } }
function dividedBy(num1) { return function(num2){ return (num1 === 0) ? 'error: division by 0' : Math.floor(num2 / num1) } }

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3