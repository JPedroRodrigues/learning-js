/*
const [x, y] = [1, 2, 3, 4, 5, 6];
console.log(x, y);
*/

const [x, y, , z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function remove_first_two_elements(list) {
    const [, , ...arr] = list;

    return arr;
}

const v = remove_first_two_elements(source);
console.log(v);