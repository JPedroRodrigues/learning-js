function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    }
    return false;
}


function inArray(n, v) {
   // Se o índice do número n for identificável 
   if (v.indexOf(Number(n)) != -1) return true;
   return false;
}


function adicionarNumero() {
    let number = document.querySelector('input#txtnumber');
    let table = document.querySelector('select#tab');

    if (isNumber(number.value) && !inArray(number.value, v)) {
        let n = Number(number.value);

        let opt = document.createElement('option');
        v.push(n);
        opt.text = `Número ${n} adicionado com sucesso!`;
        table.appendChild(opt);

        let res = document.querySelector('div#result');
        res.innerHTML = `<p>Este é o vetor agora: [${v}]</p>`;
    } else {
        window.alert('Por favor insira um número que já não tenha sido adicionado previamente.')
    }

    number.value = '';
    number.focus();
}


function analise() {
    if (v.length == 0) {
        window.alert('Não é possível analisar um vetor vazio.');
        return;
    }

    let soma = 0;
    let maior = v[0];
    let menor = v[0];
    
    for (i in v) {
        if (v[i] > maior) maior = v[i];
        else if (v[i] < menor) menor = v[i];
        soma += v[i];
    }

    let result = document.querySelector('div#result');

    result.innerHTML = '';
    result.innerHTML += `<p>Este é o vetor agora: [${v}]</p>`;
    result.innerHTML += `<p>Quantidade de elementos no vetor: ${v.length}</p>`;
    result.innerHTML += `<p>Maior elemento: ${maior}</p>`;
    result.innerHTML += `<p>Menor elemento: ${menor}</p>`;
    result.innerHTML += `<p>Soma dos elementos do vetor: ${soma}</p>`;
    result.innerHTML += `<p>Média dos elementos: ${(soma/v.length).toFixed(2)}</p>`;
}

let envioNumero = window.document.querySelector("input#button");
let analiseVetor = document.querySelector('input#analise');

envioNumero.addEventListener('click', adicionarNumero);
analiseVetor.addEventListener('click', analise);

var v = [];