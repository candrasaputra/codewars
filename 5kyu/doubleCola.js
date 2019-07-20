function whoIsNext(names, r) {
    let flag = true;

    let distance = names.length;
    let rangeStart = 1;
    let rangeEnd = names.length;
    let pertumbuhan = 1;
    while (flag) {
        if (rangeEnd >= r) {
            flag = false;
        } else {
            distance = distance * 2;
            pertumbuhan = pertumbuhan * 2;
            rangeStart = rangeEnd+1;
            rangeEnd = rangeEnd + distance;
        }
    }

    return ((r - rangeStart) === 0) ? names[0] : names[Math.floor((r - rangeStart) / pertumbuhan)];
}

let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
// console.log(whoIsNext(names, 1)); // Sheldon
// console.log(whoIsNext(names, 52)); // Penny
console.log(whoIsNext(names, 7230702951)); // Leonard