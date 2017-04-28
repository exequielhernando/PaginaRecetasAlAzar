"use strict";
let jugadaUsuario;
let checkbox = document.getElementById("check");
console.log(checkbox.checked);
let eleccionAnteriorPc="Piedra";


function elegirJugadaPc() {
		if (eleccionAnteriorPc=="Piedra"){
		eleccionAnteriorPc="Papel"
		return "Papel";
}
	else if (eleccionAnteriorPc=="Papel"){

	}

	}
}
function obtenerJugadaUsuario(seleccion) {
	console.log(seleccion);
	jugadaUsuario=seleccion;
}
function obtenerJugadaPc(){
	let azar = Math.floor((Math.random()*3)+1);
	let respuesta;
    if (azar == 1) {
        respuesta = "Piedra";
    } else if (azar == 2) {
        respuesta = "Papel";
    } else {
        respuesta = "Tijera";
    }
    return respuesta;
}
function jugar(){
	let jugadaPc=obtenerJugadaPc();
	let mensaje;
	let contenedorMensaje=document.getElementById("resultado");
	while (checkbox.checked) {
		jugadaPc=elegirJugadaPc();

	}
	if(jugadaUsuario == jugadaPc)
	{
		mensaje = "<h2>¡Empataste!</h2>";
	}

	else if(jugadaUsuario == "Piedra" && jugadaPc == "Tijera"
									||
		jugadaUsuario == "Papel" && jugadaPc == "Piedra"
									||
		jugadaUsuario == "Tijera" && jugadaPc == "Papel"

		)
	{
		mensaje = "<h2>¡Ganaste!</h2>";
	}
	//En el resto de posibilidades se pierde.
	else
	{
		mensaje = "<h2>¡Perdiste!</h2>";
	}
	contenedorMensaje.innerHTML = mensaje;
	}
