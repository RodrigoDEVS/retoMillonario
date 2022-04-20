(function(){

    //Crear un nodo
    var listar=document.createElement("input");
    listar.setAttribute("type","button");
    listar.setAttribute("value","Listarjugadores");
    var divContenedor= document.getElementById("opciones");
        divContenedor.appendChild(listar);
    
    //crear promesa 

    var crearPromesa=function(){
        fetch('jugador.json')
        .then(response =>response.json())
        .then(jugadores=>{
            let cad='<tr><th>Nombre</th><th>Puntaje</th></tr>'
            for(let jugador of jugadores){
               cad+= `<tr><td>${jugador.name}</td>
                <td>${jugador.score}</td>`    
            }

            
        document.getElementById("tabla1").innerHTML=cad;

        })
    }

    //evento 

    listar.addEventListener("click",crearPromesa);

}());