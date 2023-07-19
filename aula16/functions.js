function par_imp(n) {
    if (n % 2 == 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

function soma(n1=0, n2=0) {
    return n1 + n2;
}

console.log(soma(1, 2));

let res = par_imp(11);
console.log(res);