(function(){

    //creando nodo
    var botonReiniciar = document.createElement("button");
    botonReiniciar.textContent="Reiniciar"

    //Agregando nodo 

    var divContenedor = document.getElementById("contenedorSalir");
        divContenedor.appendChild(botonReiniciar);
    
     //funcion rendirse 
     rendirse =()=>{
        location.href = "index.html";
     }
     
     //Agregando evento 
     botonReiniciar.addEventListener("click",rendirse);
     
})();

