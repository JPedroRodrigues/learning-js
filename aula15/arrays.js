let v = [2, 3, 1];
console.log(v);

v[3] = 4;
console.log(v);

v.push(5);
console.log(v);

console.log(v.length);

console.log(v.sort());

for (let pos in v) {
    console.log(`Posição ${pos} - elemento ${v[pos]}`);
}

v.push(5);
console.log(v.indexOf(5)); // informa a primeira ocorrência
console.log(v.indexOf(9)); // retorna -1.