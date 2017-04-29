"use strict";
let jugadaUsuario;
let checkbox = document.getElementById("check");
console.log(checkbox.checked);
let eleccionAnteriorPc="Piedra";
let contadorpartidas=1;

function jugadaAlternativa() {
		if (eleccionAnteriorPc=="Piedra"){
		eleccionAnteriorPc="Papel"
		return "Papel";
	}

	else if (eleccionAnteriorPc=="Papel"){
		eleccionAnteriorPc="Tijera"
		return "Tijera";
	}
	else if (eleccionAnteriorPc=="Tijera"){
		eleccionAnteriorPc="Piedra"
		return "Piedra";
	}}
function obtenerJugadaUsuario(seleccion) {
	console.log(seleccion);
	jugadaUsuario=seleccion;
	jugar()
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
	let jugadaPc;
	let mensaje;
	let mensajeTabla;
	let contenedorMensaje=document.getElementById("resultado");
	if (checkbox.checked) {
		jugadaPc=jugadaAlternativa();
	}
	else {
		 jugadaPc=obtenerJugadaPc();
	}
	if(jugadaUsuario == jugadaPc)
	{
		mensaje = "<h2>¡Empataste!</h2>";
		mensajeTabla="Empate";
	}

	else if(jugadaUsuario == "Piedra" && jugadaPc == "Tijera"
									||
		jugadaUsuario == "Papel" && jugadaPc == "Piedra"
									||
		jugadaUsuario == "Tijera" && jugadaPc == "Papel"

		)
	{
		mensaje = "<h2>¡Ganaste!</h2>";
		mensajeTabla="Usuario";
	}
	//En el resto de posibilidades se pierde.
	else
	{
		mensaje = "<h2>¡Perdiste!</h2>";
		mensajeTabla="Computadora";
	}
	contenedorMensaje.innerHTML = mensaje;
		actualizarTabla(mensajeTabla);
	}
	function actualizarTabla(mensaje) {
		let ganador;
		let resultadoJugada=document.getElementById("tablaResultado");
		let fila=resultadoJugada.insertRow(contadorpartidas);
		let columna1=fila.insertCell(0);
		let columna2=fila.insertCell(1);
		columna1.innerHTML=contadorpartidas;
		columna2.innerHTML=mensaje;

		contadorpartidas++;
	}
