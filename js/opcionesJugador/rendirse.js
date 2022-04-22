(function(){
    //Variables creadas como nodo 
    var botonSalir = document.createElement("button");
    botonSalir.textContent="Rendirse"
    botonSalir.className="boton_verificar"

    //Agregando nodo 
    var divContenedor = document.getElementById("contenedor");
        divContenedor.appendChild(botonSalir);

     //funcion rendirse 
     rendirse =()=>{
        location.href = "final.html";
     }
     
     //Agregando evento 
     botonSalir.addEventListener("click",rendirse);
     
})();

