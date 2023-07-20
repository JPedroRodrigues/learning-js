function adicionarNumero() {
    let number = document.querySelector('input#txtnumber');
    let table = document.querySelector('select#tab');

    if  (number.value.length == 0) {
        window.alert('Insira um número para que ele seja adicionado à tabela.');
        return;
    }

    let n = Number(number.value);

    if (n > 200 || n < 1) {
        window.alert('Por favor, insira um número presente no intervalo entre 1 e 100.');
        return;
    }

    let opt = document.createElement('option');
    opt.text = '';
    v.push(n);
    opt.text = `Número ${n} adicionado com sucesso!`;
    table.appendChild(opt);

    let res = document.querySelector('div#result');
    res.innerHTML = `<p>Este é o vetor agora: ${v}</p>`;
}

function analise() {
    let len = v.length;

    if (len == 0) {
        window.alert('Não é possível analisar um vetor vazio.');
        return;
    }

    let soma = v.sum;

    let result = document.querySelector('div#result');

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    p1.innerHTML = `<p>O vetor possui tamanho ${len}</p>`;

    result.appendChild(p1);
}

let envioNumero = window.document.querySelector("input#button");
let analiseVetor = document.querySelector('input#analise');

envioNumero.addEventListener('click', adicionarNumero);
analiseVetor.addEventListener('click', analise);

var v = [];