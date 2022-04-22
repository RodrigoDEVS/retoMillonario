function nuevoJugador(){
    //let jugadores = servicioJugadoresLeer();
    let nombreJugador = document.getElementById("nombre-jugador").value;    
    var nuevo = {_id: jugadores.length, name: nombreJugador, _v: 0, score: 0};
    servicioJugadoresAgregar(nuevo);
    location.href='../html/preguntas.html';    
}

(function(){

    //Crear un nodo
    var listar=document.createElement("input");
    listar.setAttribute("type","button");
    listar.setAttribute("value","Listarjugadores");
    var divContenedor= document.getElementById("opciones");
        divContenedor.appendChild(listar);
    
    //crear promesa 

    var crearPromesa=function(){
        pintarJugadores(servicioJugadoresLeer());
    }
    //evento 

    function pintarJugadores() {
        let cad='<tr><th>Nombre</th><th>Puntaje</th></tr>'
            for(let jugador of servicioJugadoresData){
               cad+= `<tr><td>${jugador.name}</td>
                <td>${jugador.score}</td>`    
            }
    
            
            document.getElementById("tabla1").innerHTML=cad;
    }

    listar.addEventListener("click",crearPromesa);

}());
