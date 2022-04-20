const parrafoActual = document.querySelector(`#p1`)
let preg = {};

function cargarPreguntas(){
    (fetch('preguntas.json'))
    .then(resp => resp.json())
    .then(preguntas => {
        //Math.floor(Math.random() * 10);
        preguntas.map(element =>{
            if(element.indice==(Math.floor(Math.random() * 24)+1)){
                preg = (element)
            }
        })
        console.log(preg.indice)
        let parrafo = document.createElement('p1');
        parrafo.innerHTML += `${preg.pregunta}`;
        parrafoActual.appendChild(parrafo)  
    })
    .catch(error => console.log("Hubo un error: " + error.message))
}

cargarPreguntas();