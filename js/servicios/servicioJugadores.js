var servicioJugadoresData = []
const cookieName='jugadores';

function servicioJugadoresLeer(){
    servicioJugadoresData = JSON.parse(getCookie(cookieName) || []);
    return servicioJugadoresData;
}

function servicioJugadoresAgregar(jugador) {
    servicioJugadoresData.push(jugador);
    setCookie(cookieName, JSON.stringify(servicioJugadoresData));
}