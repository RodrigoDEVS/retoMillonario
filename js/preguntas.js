const p1 = document.querySelector(`#p1`)
const p2 = document.querySelector(`#p2`)
const p3 = document.querySelector(`#p3`)
const p4 = document.querySelector(`#p4`)
const btn1 = document.querySelector(`#btn1`)
const btn2 = document.querySelector(`#btn2`)
const btn3 = document.querySelector(`#btn3`)
const btn4 = document.querySelector(`#btn4`)
const btn5 = document.querySelector(`#btn5`)

let preg = {};
let correcta = "";
let respuesta = "";

//Variables creadas como nodo 
var botonSalir = document.createElement("button");
botonSalir.textContent="Rendirse"
botonSalir.className="btn btn-danger"

//Agregando nodo 
var divContenedor = document.getElementById("contenedor");
    divContenedor.appendChild(botonSalir);

let min = 1;
let max = 5;

let puntaje = 0;


function incremento() {
    if (puntaje < 100) {
        min = 1
        max = 5
    } else if (puntaje == 100 && puntaje < 300) {
        min = 6
        max = 10
    } else if (puntaje == 300 && puntaje < 600) {
        min = 11
        max = 15
    } else if (puntaje == 600 && puntaje < 1000) {
        min = 16
        max = 20
    } else if (puntaje == 1000 && puntaje < 1500) {
        min = 21
        max = 25
    }
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cargarPreguntas() {
    (fetch('../data/preguntas.json'))
        .then(resp => resp.json())
        .then(preguntas => {
            incremento();
            let index = randomInteger(min, max);
            preguntas.map(element => {
                if (element.indice == index) {
                    preg = (element);
                }

            })
            console.log("Pregunta No: " + preg.indice);
            console.log("Puntaje Acumulado: " + puntaje);
            PintarNombreJugador();               

            correcta = (preg.verdadera);
            
            document.getElementById('p1').innerHTML = `${preg.pregunta}`

            document.getElementById('btn1').innerHTML = `${preg.resp1}`

            document.getElementById('btn2').innerHTML = `${preg.resp2}`

            document.getElementById('btn3').innerHTML = `${preg.resp3}`

            document.getElementById('btn4').innerHTML = `${preg.resp4}`

            document.getElementById('p2').innerHTML = `Por un valor de: <b>${preg.premio}</b> Puntos`;
        })
        .catch(error => console.log("Hubo un error: " + error.message))
}

function imprimirSeleccion1() {
    document.getElementById('p3').innerHTML = `Su Selección es: <br><b>${preg.resp1}</b></br>`
    document.getElementById('p3').setAttribute('value', `${preg.resp1}`);
    respuesta = (document.getElementById('p3').getAttribute('value'));
    console.log("respuesta: " + respuesta);
    console.log("Correcta: " + correcta);
}
document.getElementById('btn1').onclick = function () {
    imprimirSeleccion1();
}

function imprimirSeleccion2() {
    document.getElementById('p3').innerHTML = `Su Selección es: <br><b>${preg.resp2}</b></br>`
    document.getElementById('p3').setAttribute('value', `${preg.resp2}`)
    respuesta = (document.getElementById('p3').getAttribute('value'))
    console.log("respuesta: " + respuesta)
}
document.getElementById('btn2').onclick = function () {
    imprimirSeleccion2();
}

function imprimirSeleccion3() {
    document.getElementById('p3').innerHTML = `Su Selección es: <br><b>${preg.resp3}</b></br>`
    document.getElementById('p3').setAttribute('value', `${preg.resp3}`)
    respuesta = (document.getElementById('p3').getAttribute('value'))
    console.log("respuesta: " + respuesta)
}
document.getElementById('btn3').onclick = function () {
    imprimirSeleccion3();
}

function imprimirSeleccion4() {
    document.getElementById('p3').innerHTML = `Su Selección es: <br><b>${preg.resp4}</b></br>`
    document.getElementById('p3').setAttribute('value', `${preg.resp4}`)
    respuesta = (document.getElementById('p3').getAttribute('value'))
    console.log("respuesta: " + respuesta)
}
document.getElementById('btn4').onclick = function () {
    imprimirSeleccion4();
}

function imprimirAlerta() {
    if (puntaje == 1500) {  
        swal.fire({
            icon: 'success',
            title: 'Has Ganado',
            text: 'Felicitaciones!!!',
            showConfirmButton: false,
            timer: 2000
        })
        cargarPuntaje(puntaje); 
        setTimeout(terminarJuego, 2500)
    } else if (respuesta == correcta) {
        cargarPuntaje(puntaje);
        swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            showConfirmButton: true,
        })
        cargarPuntaje(puntaje);
        cargarPreguntas()
        if (min == 1) {
            puntaje += 100;
        } else if (min == 6) {
            puntaje += 200;
        } else if (min == 11) {
            puntaje += 300;
        } else if (min == 16) {
            puntaje += 400;
        } else if (min == 21) {
            puntaje += 500;
        }
    } else {
        puntaje=0;
        cargarPuntaje(puntaje);
        console.log("holitas",puntaje);
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: 'Sigue Intentando',
            showConfirmButton: false,
            timer: 1500
        })
        puntaje = 0;
        cargarPuntaje(puntaje);
        setTimeout(respuestaError, 2000)
    }
}

document.getElementById('btn5').onclick = function () {
    imprimirAlerta()
};

function respuestaError() {
    puntaje = 0;
    window.location.replace("../html/final.html")
}

function terminarJuego() {
    
    servicioJugadoresCargarPuntajeFinal(servicioJugadoresLeerJugadorActual());
    window.location.replace("../html/final.html")
}
window.onload = cargarPreguntas()

function PintarNombreJugador(){ 
    let jugadorActual=servicioJugadoresLeerJugadorActual();
    //console.log(jugadorActual);
    document.getElementById('p4').innerHTML = `Jugador: ${jugadorActual.name}`    
}


function cargarPuntaje(puntaje){
    let jugadorActual=servicioJugadoresLeerJugadorActual();
    jugadorActual.score = puntaje;
    console.log(jugadorActual.score);
    servicioJugadoresAgregarJugadorActual(jugadorActual);      
}



 //funcion rendirse 
 rendirse =()=>{
    cargarPuntaje(puntaje);
    location.href = "final.html";
 }
 
 //Agregando evento 
 botonSalir.addEventListener("click",rendirse);