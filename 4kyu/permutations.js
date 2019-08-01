/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.
Examples:
permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/

function permutations(string) {
    if (string.length === 0) return [''];

    // Tampung semua hasil permutation
    let result = [];

    for (let i = 0; i < string.length; i++) {
        // Ambil perchart sebagai kata awal di tiap perulangan
        let firstChart = string[i];
        let rest = string.slice(0, i) + string.slice(i + 1);

        // Lakukan penggabungan untuk berbagai kemungkinan
        result = result.concat(permutations(rest).map(r => firstChart + r));
    }

    // Hapus semua yang duplikat kemudian return
    return [...new Set(result)];
}

console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // ['ab', 'ba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']