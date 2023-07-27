function verificar() {
    var data = new Date();
    var ano_atual = data.getFullYear();
    var ano_user = window.document.querySelector('input#txtano');

    if (ano_user.value.length == 0 || ano_user.value < 1907 || Number(ano_user.value) > ano_atual) {
        window.alert('Verifique se o ano foi digitado corretamente e tente novamente.');
    } else {
        var idade = ano_atual - Number(ano_user.value);
        var gender = window.document.getElementsByName('radgender');
        var res = window.document.querySelector('div#result');

        var sex = '';

        if (gender[0].checked) {
            sex = 'Masculino';
        } else if (gender[1].checked) {
            sex = 'Feminino';
        }

        res.innerHTML = `Gênero: ${sex}.<br>Idade em ${ano_atual}: ${idade}`;

        var img = document.createElement('img');
        img.setAttribute('id', 'img');
        
        if (idade >= 0 && idade < 13) {
            gender[0].checked ? img.setAttribute('src', 'imagens/criança-menino.png') : img.setAttribute('src', 'imagens/criança-menina.png');
        }
        else if (idade >= 14 && idade <= 21) {
            gender[0].checked ? img.setAttribute('src', 'imagens/jovem-homem.png') : img.setAttribute('src', 'imagens/jovem-mulher.png');
        }
        else if (idade >= 22 && idade < 60) {
            gender[0].checked ? img.setAttribute('src', 'imagens/adulto-homem.png') : img.setAttribute('src', 'imagens/adulta-mulher.png');
        }
        else {
            gender[0].checked ? img.setAttribute('src', 'imagens/idoso-homem.png') : img.setAttribute('src', 'imagens/idosa-mulher.png');
        }

        res.appendChild(img);
    }
}