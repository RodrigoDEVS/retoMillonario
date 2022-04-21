const p1 = document.querySelector(`#p1`)
const p2 = document.querySelector(`#p2`)
const p3 = document.querySelector(`#p3`)
const btn1 = document.querySelector(`#btn1`)
const btn2 = document.querySelector(`#btn2`)
const btn3 = document.querySelector(`#btn3`)
const btn4 = document.querySelector(`#btn4`)

let preg = {};

function cargarPreguntas(){
    (fetch('/data/preguntas.json'))
    .then(resp => resp.json())
    .then(preguntas => {
        //Math.floor(Math.random() * 10);
        preguntas.map(element =>{
            if(element.indice==(Math.floor(Math.random() * 25)+1)){
                preg = (element)
            }
        })
        console.log(preg.indice)
        let parrafo1 = document.createElement('p1');
        parrafo1.innerHTML += `${preg.pregunta}`;
        p1.appendChild(parrafo1)

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

        let parrafo2 = document.createElement('p2');
        parrafo2.innerHTML += `Por un valor de: ${preg.premio} Puntos`;
        p2.appendChild(parrafo2)

        let parrafo3 = document.createElement('p3');
        parrafo3.innerHTML += `Su Selección es: <br><b>${preg.verdadera}</b>`;
        p3.appendChild(parrafo3)
    })
    .catch(error => console.log("Hubo un error: " + error.message))
}

cargarPreguntas();