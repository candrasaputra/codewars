/*
Human Readable Time
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
    let timeSeconds = 0;
    let timeMinuts = 0;
    let timeHours = 0;

    timeHours = (seconds >= 3600) ? Math.floor(seconds / 3600) : 0;
    
    seconds = seconds - (timeHours * 3600);

    timeMinuts = (seconds >= 60) ? Math.floor(seconds / 60) : 0;
    
    seconds = seconds - (timeMinuts * 60);

    timeSeconds = (seconds > 0) ? seconds % 60 : 0;

    return addZero(timeHours)+':'+addZero(timeMinuts)+':'+addZero(timeSeconds);
}

function addZero(num) {
    if (num < 10) {
        return '0'+String(num);
    }

    return num;
}

console.log(humanReadable(0)); // 00:00:00
console.log(humanReadable(5)); // 00:00:05
console.log(humanReadable(60)); // 00:01:00
console.log(humanReadable(86399)); // 23:59:59
console.log(humanReadable(359999)); // 99:59:59