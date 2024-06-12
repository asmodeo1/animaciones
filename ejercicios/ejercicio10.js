function cambiarTamanho() {
    const texto = document.getElementById("texto");
    //No es necesario pues ya lo tenemos en CSS: texto.style.transition = "font-size 2s";
    texto.classList.toggle("agrandar");
}

document.getElementById("agrandar").addEventListener("click", cambiarTamanho);