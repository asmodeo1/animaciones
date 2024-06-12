function animar() {
    const texto = document.getElementById("texto");
    texto.style.animation = "animacion 2s infinite";
}

document.getElementById("animar").addEventListener("click", animar);