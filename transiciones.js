function start(evt) {
    /* Se produce al comenzar la animación pero después del retraso (delay)*/
    console.log("start");
}

function run(evt) {
    /* Se produce al comenzar la animación */
    console.log("run");
}

function end(evt) {
    /* Se produce al terminar la animación */
    console.log("end");
}

document.getElementsByTagName("p")[0].addEventListener("transitionstart", start);
document.getElementsByTagName("p")[0].addEventListener("transitionrun", run);
document.getElementsByTagName("p")[0].addEventListener("transitionend", end);
