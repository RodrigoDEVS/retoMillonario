(function(){

    //creando nodo
    var botonReiniciar = document.createElement("input");
    botonReiniciar.setAttribute("type", "button");
    botonReiniciar.setAttribute("value", " Reiniciar juego");
    

      botonReiniciar.className="boton";
    //Agregando nodo 

    var divContenedor = document.getElementById("formularioId");
        divContenedor.appendChild(botonReiniciar);
        
        
    let puntajeFinal = servicioJugadoresLeerJugadorActual();
    console.log(puntajeFinal);
    document.getElementById('score').innerHTML = `Su puntaje es: ${puntajeFinal.score}`;

     //funcion rendirse 
     reiniciarJuego =()=>{ 
       location.href = "index.html";
     }
     
     //Agregando evento 
     botonReiniciar.addEventListener("click",reiniciarJuego);
     
})();

