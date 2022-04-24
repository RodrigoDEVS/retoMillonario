var servicioJugadoresData = []
var jugadorActual = {}
const cookieName='jugadores';
const cookieNameJugadorActual='jugadorActual';

function servicioJugadoresLeer(){
    servicioJugadoresData = JSON.parse(getCookie(cookieName) || '[]');
    return servicioJugadoresData;
}

function servicioJugadoresAgregar(jugador) {
    servicioJugadoresData.push(jugador);
    setCookie(cookieName, JSON.stringify(servicioJugadoresData));
}

function servicioJugadoresBuscarId(jugadorActual){
    var servicioJugadoresData = servicioJugadoresLeer();
         
    for(let jugador of servicioJugadoresData)
    {   
        if(jugador._id === jugadorActual._id)
        {
            var jugadorActual = {
                _id: jugador._id,
                name: jugador.name,
                score: jugador.score,
              };         
        }
    }    
    return jugadorActual;      
}

function servicioJugadoresAgregarJugadorActual(jugador){
    jugadorActual = jugador;
    setCookie(cookieNameJugadorActual, JSON.stringify(jugadorActual));
}

function servicioJugadoresLeerJugadorActual(){
    jugadorActual = JSON.parse(getCookie(cookieNameJugadorActual) || '{}');
    return jugadorActual;
}

function servicioJugadoresCargarPuntajeFinal(jugadorActual){
    let listaJugadores = servicioJugadoresLeer();
    
    listaJugadores.forEach(jugador => {
        if(jugadorActual._id == jugador._id)
        {
            jugador.score = jugadorActual.score;
        }        
    });
    
    setCookie(cookieName, JSON.stringify(listaJugadores));
}