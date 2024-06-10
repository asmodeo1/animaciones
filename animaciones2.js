function iniciar() {
    document.getElementById("texto").style.animation = "movimiento 4s infinite alternate";
}

function parar() {
    document.getElementById("texto").style.animationPlayState = "paused";
}

document.getElementById("iniciar").addEventListener("click", iniciar);
document.getElementById("parar").addEventListener("click", parar);
