const fotos = [
    {foto: "foto1.jpeg", leyenda: "Paisaje otoñal"},
    {foto: "foto2.jpeg", leyenda: "Paisaje veraniego"},
    {foto: "foto3.jpeg", leyenda: "Paisaje montañoso"},
    {foto: "foto4.jpeg", leyenda: "El mar tranquilo"},
    {foto: "foto5.jpeg", leyenda: "Un bosque"}
];
let fotoActual = 0;
function cambiarFoto() {
    if(fotoActual == fotos.length -1) {
        fotoActual = 0;
    } else {
        fotoActual++;
    }
    const foto = document.getElementById("foto");
    foto.src = "imagenes/" + fotos[fotoActual].foto;
    /* Para que la animación se vuelva a ejecutar, tenemos que eliminar
    la clase y volver a añadirla */
    foto.classList.remove("mostrarFoto");
    // Pero hacerlo directamente no funciona. Un truco es la siguiente línea
    foto.offsetWidth
    foto.classList.add("mostrarFoto");
    const leyenda = document.getElementById("leyenda");
    leyenda.textContent = fotos[fotoActual].leyenda;
    leyenda.classList.remove("mostrarLeyenda");
    leyenda.offsetWidth
    leyenda.classList.add("mostrarLeyenda");
}

function mostrarPrimeraFoto() {
    const foto = document.getElementById("foto");
    foto.src = "imagenes/" + fotos[fotoActual].foto;
    const leyenda = document.getElementById("leyenda");
    leyenda.textContent = fotos[fotoActual].leyenda;
}

mostrarPrimeraFoto();
setInterval(cambiarFoto, 3000);

