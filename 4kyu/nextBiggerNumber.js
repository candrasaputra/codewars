/*
Next bigger number with the same digits
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBigger(n){
    let newArr = n.toString().split('');
    let indexBigger = getIndexValueBigger(newArr);
    let tmp, tmpi;

    if (indexBigger == -1) return indexBigger;

    let last = newArr.splice(indexBigger);

    let numBigger = last.splice(0, 1)[0];

    for (let i = 0; i < last.length; i++) {
        if (last[i] > numBigger) {
            if (tmp === undefined || last[i] < tmp) {
                tmp = last[i];
                tmpi = i;
            }
        }
    }

    last.splice(tmpi, 1);
    last.push(numBigger);
    last = last.sort();

    let result = Number(newArr.concat([tmp]).concat(last).join(''));

    return result;
}

function getIndexValueBigger(arr) {
    indexBigger = -1;
    for (let i = arr.length-1; i > 0; i--) {
        if (Number(arr[i]) > Number(arr[i-1])) {
            indexBigger = i-1;
            break;
        }
    }

    return indexBigger;
}

console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2391)); // 2931
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(531)); // -1
console.log(nextBigger(21581957621)); // 215819 61257