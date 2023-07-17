var  button = document.querySelector('input#button');
button.addEventListener('click', iteracao);

function iteracao() {
    var inicio = window.document.querySelector('input#inicio');
    var fim = document.querySelector('input#fim');
    var passo = document.querySelector('input#passo');

    if (passo.value.length == 0) {
        window.alert('A informação "passo" precisa ser inserida.')
        return;
    }

    inicio = Number(inicio.value);
    fim = Number(fim.value);
    passo = Number(passo.value);

    if (inicio > fim) {
        window.alert('O início não pode ser maior do que o fim.')
        return;
    }

    if (inicio < fim && passo <= 0) {
        window.alert('O passo precisa ser um número maior ou igual a 1.')
        return;
    }

    var res = document.querySelector('div#result > p');

    res.innerHTML = '';

    for (var c = inicio; c <= fim; c += passo) {
        res.innerHTML += `${c} &#x1F449 `;
    }
    res.innerHTML += ` &#x1F3C1`;
}   