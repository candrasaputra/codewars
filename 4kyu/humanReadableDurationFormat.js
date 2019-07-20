/*
Human readable duration format
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English. 

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

function formatDuration (seconds) {
    let timeSeconds = 0;
    let timeMinuts = 0;
    let timeHours = 0;
    let day = 0;
    let year = 0;

    if (seconds === 0) return 'now';

    timeHours = (seconds >= 3600) ? Math.floor(seconds / 3600) : 0;
    
    seconds = seconds - (timeHours * 3600);

    timeMinuts = (seconds >= 60) ? Math.floor(seconds / 60) : 0;
    
    seconds = seconds - (timeMinuts * 60);

    timeSeconds = (seconds > 0) ? seconds % 60 : 0;

    year= (timeHours >= 8760) ? Math.floor(timeHours / 8760) : 0;

    timeHours = timeHours - (year * 8760);

    day = (timeHours >= 24) ? Math.floor(timeHours / 24) : 0;

    timeHours = timeHours - (day * 24);

    return separator([year, day, timeHours, timeMinuts, timeSeconds]);
}

function separator(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = unit(i, arr[i]);
    }

    let newArr = arr.filter(arr => arr !== '');
    let newString = newArr.join(', ');

    if (newArr.length > 1) {
        var n = newString.lastIndexOf(',');

        newString = newString.slice(0, n) + newString.slice(n).replace(',', ' and');

        return newString;
    } else {
        return newString;
    }
}

function unit(unitIndex, num) {
    let unit;

    if(num === 0) return '';

    switch (unitIndex) {
        case 0: unit = (num > 1) ? 'years' : 'year'; break;
        case 1: unit = (num > 1) ? 'days' : 'day'; break;
        case 2: unit = (num > 1) ? 'hours' : 'hour'; break;
        case 3: unit = (num > 1) ? 'minutes' : 'minute'; break;
        case 4: unit = (num > 1) ? 'seconds' : 'second'; break;
    }

    return num+' '+unit;
}

console.log(formatDuration(1)); // 1 second
console.log(formatDuration(62)); // 1 minute and 2 seconds
console.log(formatDuration(120)); // 2 minutes
console.log(formatDuration(3600)); // 1 hour
console.log(formatDuration(3662)); // 1 hour, 1 minute and 2 seconds