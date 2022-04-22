

(function () {
  //Crear un nodo
  var listar = document.createElement("input");
  listar.setAttribute("type", "button");
  listar.setAttribute("value", "Listar jugadores");
  var btnnuevoJugador = document.createElement("input");
  btnnuevoJugador.setAttribute("type", "button");
  btnnuevoJugador.setAttribute("value", "Nuevo Jugador");
  
  var divContenedor = document.getElementById("formulario");
  divContenedor.appendChild(listar);
  divContenedor.appendChild(btnnuevoJugador)

  //Funciones 

  function nuevoJugador() {
    let jugadores = servicioJugadoresLeer();
    let nombreJugador = document.getElementById("nombre-jugador").value;
    if(nombreJugador.length>1) {
      var nuevo = { _id: jugadores.length, name: nombreJugador, _v: 0, score: 0 };
      servicioJugadoresAgregar(nuevo);
     location.href = "preguntas.html";
    
    }else {
      return (alert("Agregue el nombre de un jugador"));
     }
  }

  function capturaIdJugador(){
      
  }

  function eliminar(tamaño){
    //Buscando id
    const url="btn";
    for(let i=1; i<=tamaño;i++){
        id=url+i;
            var botoEliminar = document.getElementById(id);
            botoEliminar.addEventListener("click",(event)=>{
                event.target.parentNode.parentNode.remove();
                console.log([i-1]);
            })
            
}

}


  //crear promesa

  var crearPromesa = function () {
    pintarJugadores(servicioJugadoresLeer());
  };
  //evento

  function pintarJugadores() {
    let cont = 1;
    let cad = "<tr><th>Nombre</th><th>Puntaje</th><th>Id</th></tr>";
    for (let jugador of servicioJugadoresData) {
      cad += `<tr><td>${jugador.name}</td>
                <td>${jugador.score}</td>
                <td><input type="button" class="btne" id="btn${cont}" value="Eiminar"></input></td></tr>`;
      cont += 1;
    }

    var tamaño=cont-1;   

    document.getElementById("tabla1").innerHTML = cad;
    eliminar(tamaño)          
     
  }

  listar.addEventListener("click", crearPromesa);
  btnnuevoJugador.addEventListener("click",nuevoJugador);
})();
