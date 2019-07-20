/*
Strip Comments
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. 

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
    let arr = input.split('\n');
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let flagSave = true;
        let newString = '';

        for (let j = 0; j < arr[i].length; j++) {
            if (markers.filter(marker => marker === arr[i][j]).length > 0) {
                flagSave = false;
            }

            if (flagSave) {
                newString += arr[i][j];
            }
        }
        
        if ((i > 0)) {
            result += '\n';
        }

        result += newString.trim();
    }
    return result;
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])); //"apples, plums\npears\noranges"
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); //"Q\nu\ne"