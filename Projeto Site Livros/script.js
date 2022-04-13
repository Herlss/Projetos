function mudarImagem() {
    var imagem = document.getElementById("ads")
    if (imagem.src.match("imagens/ads-livros.jpg")) {
        imagem.src = "imagens/ads-city.jpg"
    } else {
        imagem.src = "imagens/ads-livros.jpg"
    }
}

function Aparecer() {
    document.getElementById("readbookicon").style.display = "block";
}

function Sumir() {
    document.getElementById("readbookicon").style.display = "none"
}

function escurecerSite() {
    document.getElementsByName("body").style. = "0.8"
}