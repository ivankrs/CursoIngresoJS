/*
Ivan Keumurdji
Tp nº5- Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
function comenzar()
{
	var numeroSecreto; 

	var numeroIngresado;

	var contadorIntentos;

	numeroSecreto = Math.floor(Math.random()*101);

	alert("Se a creado un número secreto");
	console.log(numeroSecreto);

}

function verificar()
{
	var numeroSecreto; 

	var numeroIngresado;

	var contadorIntentos;

	numeroIngresado = document.getElementById('txtIdNumero').value;

	numeroIngresado = parseInt(numeroIngresado);

	alert(numeroIngresado);


	txtIdIntentos.value = 1;

	contadorIntentos = document.getElementById('txtIdIntentos').value;

	contadorIntentos = parseInt(contadorIntentos);

	alert("su " + numeroSecreto);	

	//contadorIntentos = contadorIntentos;

	//txtIdIntentos.value = contadorIntentos;

	alert (contadorIntentos);
	
	
}