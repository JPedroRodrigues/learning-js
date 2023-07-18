let button = document.querySelector('input#button');
button.addEventListener('click', iteracao);

function iteracao() {
    let inicio = window.document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');

    if (passo.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0) {
        window.alert('Todos os campos precisam ser preenchidos com um número.')
        return;
    }

    if (Number(passo.value) <= 0) {
        window.alert('O passo precisa ser um número maior ou igual a 1.')
        return;
    }

    inicio = Number(inicio.value);
    fim = Number(fim.value);
    passo = Number(passo.value);

    let res = document.querySelector('div#result > p');
    res.innerHTML = 'Contanto:<br>';

    if (inicio < fim) {
        //Contagem crescente
        for (let c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c} &#x1F449 `;
        }
    } else {
        // Contagem decrescente
        for (let c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} &#x1F449 `;
        }
    }
    res.innerHTML += ` &#x1F3C1`;
}   