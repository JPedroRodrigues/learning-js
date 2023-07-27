function carregar () {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${min}h.`;

    if (hora >= 6 && hora < 12) {
        img.scr = 'morning.png';
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'afternoon.png';
        document.body.style.background = '#E99E74';
    }
    else if (hora >= 19 && hora <= 23) {
        img.src = 'night.png';
        document.body.style.background = '#2E5866';
    }
    else {
        img.src = 'dawn.png';
        document.body.style.background = '#553766';
    }
}
