const parrafoActual = document.querySelector(`#p1`)
const btn1 = document.querySelector(`#btn1`)
const btn2 = document.querySelector(`#btn2`)
const btn3 = document.querySelector(`#btn3`)
const btn4 = document.querySelector(`#btn4`)

let preg = {};

function cargarPreguntas(){
    (fetch('preguntas.json'))
    .then(resp => resp.json())
    .then(preguntas => {
        //Math.floor(Math.random() * 10);
        preguntas.map(element =>{
            if(element.indice==(Math.floor(Math.random() * 25)+1)){
                preg = (element)
            }
        })
        console.log(preg.indice)
        let parrafo = document.createElement('p1');
        parrafo.innerHTML += `${preg.pregunta}`;
        parrafoActual.appendChild(parrafo)

        let boton1 = document.createElement('btn1');
        boton1.innerHTML += `${preg.resp1}`;
        btn1.appendChild(boton1)

        let boton2 = document.createElement('btn2');
        boton2.innerHTML += `${preg.resp2}`;
        btn2.appendChild(boton2)

        let boton3 = document.createElement('btn3');
        boton3.innerHTML += `${preg.resp3}`;
        btn3.appendChild(boton3)

        let boton4 = document.createElement('btn4');
        boton4.innerHTML += `${preg.resp4}`;
        btn4.appendChild(boton4)
    })
    .catch(error => console.log("Hubo un error: " + error.message))
}

cargarPreguntas();