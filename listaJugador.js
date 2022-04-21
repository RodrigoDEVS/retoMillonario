(function(){

    //Crear un nodo
    var listar=document.createElement("input");
    listar.setAttribute("type","button");
    listar.setAttribute("value","Listarjugadores");
    var divContenedor= document.getElementById("opciones");
        divContenedor.appendChild(listar);
    var idtexto=document.createElement("input");
        idtexto.setAttribute("type","text");
        var button = document.createElement("button");
        button.textContent="Eliminar"
          
    
    //crear promesa 

    //fuciones 

    function eliminar(tamaño){
        //Buscando id
        const url="btn";
        for(let i=1; i<=tamaño;i++){
            id=url+i;
                var botoEliminar = document.getElementById(id);
                botoEliminar.addEventListener("click",(event)=>{
                    event.target.parentNode.parentNode.remove();
                })
        
    }
    }

    var crearPromesa=function(){
      
       fetch('jugador.json')
        .then(response =>response.json())
        .then(jugadores=>{
            let cont =1;
            let cad='<tr><th>Nombre</th><th>Puntaje</th><th>Id</th></tr>'
            for(let jugador of jugadores){
               cad+= `<tr><td>${jugador.name}</td>
                <td>${jugador.score}</td>
                <td><input type="button" class="btne" id="btn${cont}" value="Eiminar"></input></td></tr>`
                cont+=1;
        }
        var tamaño=cont-1;   
        document.getElementById("tabla1").innerHTML=cad;
      
      eliminar(tamaño)          
        })
    }

    //evento 

    listar.addEventListener("click",crearPromesa);
    

}());