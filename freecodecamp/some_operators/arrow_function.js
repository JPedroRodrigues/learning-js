/*
let magic = function() {
    return new Date();
}
*/

const magic = () => new Date();

/*
var myConcat = function(v1, v2) {
    return v1.concat(v2);
};
*/

const myConcat = (v1, v2) => v1.concat(v2);

console.log(myConcat([1, 2, 3], [4, 5, 6]));