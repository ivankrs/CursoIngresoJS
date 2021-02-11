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
//Defino variables globales, para q se puedan tomar en ambas funciones.

var numeroSecreto;


function comenzar()
{
	txtIdIntentos.value = 1;

	numeroSecreto = Math.floor(Math.random()*100 +1);

	alert("Se ha creado un número secreto.");

	console.log(numeroSecreto); 
}

function verificar()
{
	var numeroIngresado;

	var diferencia;

	var contadorIntentos;

	var intentos;

	numeroIngresado = document.getElementById('txtIdNumero').value;

	numeroIngresado = parseInt(numeroIngresado);

	contadorIntentos = document.getElementById('txtIdIntentos').value;

	contadorIntentos = parseInt(contadorIntentos);

	diferencia = numeroSecreto - numeroIngresado;

	alert("Eligió el número: " + numeroIngresado);


	if(diferencia != 0)
	{
		intentos = contadorIntentos + 1 ;

		if(diferencia < 0)
		{
			alert("Se ha pasado del número secreto.");
		}
		else
		{
			if(diferencia > 0)
			{
				alert("Aun le falta para llegar al número secreto.");
			}
		}

		txtIdIntentos.value = intentos;
	}
	else
	{
        alert("Usted es un ganador!!! y en tan solo " + contadorIntentos + " intento/s.");

        txtIdIntentos.value = ("-Comenzar- para volver a jugar");
	}	
}

