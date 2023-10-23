"use strict";
/////////Variables Globales//////////////
let turno = "X";
let victoriaX = 0;
let victoriaO = 0;

$(document).ready( () =>{
    $("td").on("click", jugada);
    displayTurno();
    displayPuntos();
});


////////Funciones/////////////

//Gestiona el cabio de turnos y llama a la funcion que actualiza el div que hace referencia al jugador activo
function nextMove(){
    if(turno == "X"){
        turno = "O";
    }else{
        turno = "X";
    }
    displayTurno();
}


//Actualiza el div que muestra el jugador activo
function displayTurno(){
    $("#displayTurno").text("Es el turno del juagador " + turno);
}

//Actualiza el div que muestra la puntuacion
function displayPuntos(){
    $("#displayPuntos").text("Jugador X: "+ victoriaX + " puntos | Jugador O: " + victoriaO + " puntos");
}

//Con esta funcion hacemos cada movimiento del juego. Si la casilla ya esta pintada no sera valida y no hara nada, solamente permitira que 
//juguemos en casilla vacias. Despues de cada movimiento se cambia de jugador y se comprueba el estado de la partida(victoria/empate).
function jugada(evento){
    if(evento.target.innerText == ""){
        evento.target.innerText = turno;
        nextMove();
        condicion();
    }
}

//Esta funcion gestiona las victorias y empates.
function condicion() {
    //En este array cargo todas las clases que defini en el html que llaman a las combinaciones de celdas que pueden generar una victoria.
    const condiciones = [".fila1", ".fila2", ".fila3", ".columna1", ".columna2", ".columna3", ".diagonal1", ".diagonal2"]
    //Esta variable impide que se active a la vez un caso de victoria y empate.
    let victory = false;
    //Con este for recorro todas las condiciones de victoria
    for(const condicion of condiciones){
        let linea = $(condicion);
        //Por limitaciones de js no puedo comparar mas de dos valores a la vez por lo que compruebo de dos que los td son identicos y
        //que no estan vacios. Si hacemos 3 en raya llamamos al metodo de victoria
        if (linea.eq(0).text() === linea.eq(1).text() && linea.eq(1).text() === linea.eq(2).text() && linea.eq(0).text() !== "") {
            victory = true;
            victoria();
        }  
    }
    //Aqui compruebo si se ha producido un empate. Si se produce una victoria la variable victory me cierra este if para evitar un comflicto
    //entre victoria y empate.
    if(victory == false){
        const celdas = $("td");
        let completo = true;
        //cargo todas las celdas y si una sola de ellas esta en blanco la variable completo ira a false.
        for(const celda of celdas){
            if($(celda).text() === ""){
                completo = false;
            }
        }
        //si todas las celdas estan llenas se considera un empate y se llama a su metodo.
        if (completo == true){
            empate();
        }
    }
}

//las Funciones empate y victoria son muy similares. Nos indican el ganador o empate, que en breves empezara otra partida y llaman a la
//funcion nuevaPartida.
function empate(){
    $("#displayTurno").text("Empate, Una nueva partida comenzara pronto");
    nuevaPartida();
}
//Victoria hace un cambio de jugador antes de mostrar el mensaje por que se hace un cambio de jugador antes de 
//buscar victoria o empate. Ademas añade y actualiza los puntos.
function victoria(){
    nextMove();
    if(turno == "X"){
        victoriaX ++;
    }else{
        victoriaO ++;
    }
    displayPuntos();
    $("#displayTurno").text("Victoria para el jugador " + turno + ". Una nueva partida comenzara pronto");
    nuevaPartida();
}

//Esta funcion es asincrona para poder hacer este timeout. Cuando se llama a esta funcion damos 5 segundos al jugador para leer el mensaje
//y despues reseteamos los parametros para una nueva partida.
async function nuevaPartida(){
    await new Promise(resolve => setTimeout(resolve, 5000));
    turno = "X";
    displayTurno();
    $("td").text("");
}

