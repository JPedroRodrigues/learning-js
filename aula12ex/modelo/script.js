function verificar() {
    var data = new Date();
    var ano_atual = data.getFullYear();
    var ano_user = window.document.querySelector('input#txtano');

    if (ano_user.value.length == 0 || ano_user.value < 1907 || Number(ano_user.value) > ano_atual) {
        window.alert('Verifique se o ano foi digitado corretamente e tente novamente.');
    } else {
        var idade = ano_atual - Number(ano_user.value);
        var img = window.document.getElementById('img');
        var gender = window.document.getElementsByName('radgender');
        var res = window.document.querySelector('div#result');

        if (idade >= 0 && idade < 13) {
            res.innerHTML = `Você faz ${idade} em ${ano_atual}.`;
            gender[0].checked ? img.src = 'criança-menino.png' : img.src = 'criança-menina.png';
        }
        else if (idade >= 14 && idade < 18) {
            res.innerHTML = `Você faz ${idade} em ${ano_atual}`;
        }
        else if (idade >= 18 && idade < 60) {
            res.innerHTML = `Você faz ${idade} em ${ano_atual}.<br>Você é um adulto!`;
        }
        else {
            res.innerHTML = `Você faz ${idade} em ${ano_atual}`;
        }
    }
}