const p1 = document.querySelector(`#p1`)
const p2 = document.querySelector(`#p2`)
const p3 = document.querySelector(`#p3`)
const btn1 = document.querySelector(`#btn1`)
const btn2 = document.querySelector(`#btn2`)
const btn3 = document.querySelector(`#btn3`)
const btn4 = document.querySelector(`#btn4`)
const btn5 = document.querySelector(`#btn5`)

let preg = {};
let correcta  = "";
let respuesta = ""; 
console.log(document.readyState)
function randomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cargarPreguntas(){
    (fetch('preguntas.json'))
    .then(resp => resp.json())
    .then(preguntas => {
        //Math.floor(Math.random() * 10);
        preguntas.map(element =>{
            if(element.indice==randomInteger(1, 25)){
                preg = (element)
            }
        })
        correcta=(preg.verdadera)
        console.log(preg.indice)
        document.getElementById('p1').innerHTML = `${preg.pregunta}`

        document.getElementById('btn1').innerHTML = `${preg.resp1}`

        document.getElementById('btn2').innerHTML = `${preg.resp2}`

        document.getElementById('btn3').innerHTML = `${preg.resp3}`

        document.getElementById('btn4').innerHTML = `${preg.resp4}`

        document.getElementById('p2').innerHTML = `Por un valor de: ${preg.premio} Puntos`;
    })
    .catch(error => console.log("Hubo un error: " + error.message))
}
cargarPreguntas();

function imprimirSeleccion1(){
    document.getElementById('p3').innerHTML = `Su Selección es: <br><b>${preg.resp1}</b>`
    document.getElementById('p3').setAttribute('value', `${preg.resp1}`)
    respuesta=(document.getElementById('p3').getAttribute('value'))
    console.log("respuesta: "+respuesta)
    console.log("Correcta: "+ correcta)
}
document.getElementById('btn1').onclick = function(){
    imprimirSeleccion1();
}

function imprimirSeleccion2(){
    document.getElementById('p3').innerHTML = `Su Selección es: <br><b>${preg.resp2}</b>`
    document.getElementById('p3').setAttribute('value', `${preg.resp2}`)
    respuesta=(document.getElementById('p3').getAttribute('value'))
    console.log("respuesta: "+respuesta)
}
document.getElementById('btn2').onclick = function(){
    imprimirSeleccion2();
}

function imprimirSeleccion3(){
    document.getElementById('p3').innerHTML = `Su Selección es: <br><b>${preg.resp3}</b>`
    document.getElementById('p3').setAttribute('value', `${preg.resp3}`)
    respuesta=(document.getElementById('p3').getAttribute('value'))
    console.log("respuesta: "+respuesta)
}
document.getElementById('btn3').onclick = function(){
    imprimirSeleccion3();
}

function imprimirSeleccion4(){
    document.getElementById('p3').innerHTML = `Su Selección es: <br><b>${preg.resp4}</b>`
    document.getElementById('p3').setAttribute('value', `${preg.resp4}`)
    respuesta=(document.getElementById('p3').getAttribute('value'))
    console.log("respuesta: "+respuesta)
}
document.getElementById('btn4').onclick = function(){
    imprimirSeleccion4();
}

function imprimirAlerta(){
    if(respuesta==correcta){
        swal.fire('Respuesta Correcta')
        cargarPreguntas()
    }else{
            Swal.fire({
                icon: 'error',
                title: 'Respuesta Incorrecta',
                text: 'Sigue Intentando',
                showConfirmButton: false,
                timer: 1500
              })
              setTimeout(respuestaError, 2000)    
    }
}

document.getElementById('btn5').onclick = function(){
    imprimirAlerta()
};

function respuestaError(){
    window.location.replace("index.html")    
}

console.log(document.readyState)