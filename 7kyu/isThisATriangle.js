/*
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

// SOLUSI 1
function isTriangle(a,b,c)
{
    let max = Math.max(a,b,c);

    return ((a+b+c)-max > max) ? true : false; 
}

// SOLUSI 2
// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }

console.log(isTriangle(1,2,2)); // true
console.log(isTriangle(7,2,2)); // false