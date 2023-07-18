let button = window.document.querySelector('input#button');
button.addEventListener('click', tabuada);

function tabuada() {
    let res = document.querySelector('div#result');
    let number = document.querySelector('input#txtnumber');
    let tab = document.querySelector('select');

    if (number.value.length == 0) {
        window.alert('Insira um número para que a tabuada possa funcionar corretamente.')
    } else {
        let n = Number(number.value);
        tab.innerHTML = '';

        for (let i = 1; i <= 10; i++) {
            let opt = document.createElement('option');
            opt.text = `${n} x ${i} = ${n * i}`;
            opt.value = `tab${c}`;
            tab.appendChild(opt);
        }
    }
}