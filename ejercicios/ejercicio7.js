function moverX() {
    const valor = document.getElementById("valor").value;
    const div = document.getElementsByTagName("div")[0];
    div.style.left = `${valor}px`;
    //div.style.left = valor + "px";
}

function moverY() {
    const valor = document.getElementById("valor").value;
    const div = document.getElementsByTagName("div")[0];
    div.style.top = `${valor}px`;
    //div.style.top = valor + "px";
}

document.getElementById("moverX").addEventListener("click", moverX);
document.getElementById("moverY").addEventListener("click", moverY);