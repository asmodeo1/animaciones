
let duracion = 2.0;

function start(evt) {
    console.log("start");
}

function end(evt){
    console.log("end"); /* Si la animación es infinita, nunca se producirá */
}

function iteration(evt) {
    console.log("iteration"); /* Si la animación se repite, se produce en cada repetición */
    duracion -= 0.2;
    document.getElementById("par1").style.animationDuration = duracion + "s";
}

document.getElementById("par1").addEventListener("animationstart", start);
document.getElementById("par1").addEventListener("animationiteration", iteration);
document.getElementById("par1").addEventListener("animationend", end);


