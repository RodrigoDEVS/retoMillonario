(function(){

    //creando nodo
    var botonReiniciar = document.createElement("input");
    botonReiniciar.setAttribute("type", "button");
    botonReiniciar.setAttribute("value", " Reiniciar juego");

      botonReiniciar.className="boton";
    //Agregando nodo 

    var divContenedor = document.getElementById("formularioId");
        divContenedor.appendChild(botonReiniciar);
    
     //funcion rendirse 
     rendirse =()=>{

        location.href = "index.html";
     }
     
     //Agregando evento 
     botonReiniciar.addEventListener("click",rendirse);
     
})();

