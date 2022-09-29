function carregar() {

    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var linha = document.getElementById("linha")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerText = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "2.png"
        document.body.style.background = "#79c2f8"


    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "1.png"
        document.body.style.background = "#b27f6a"


    } else {
        // boa noite
        img.src = "0.png"
        document.body.style.background = "#2f75a9"

    }
    
}


