/*
Ivan Keumurdji
Ejercicio while nº4- Al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while(numeroIngresado < -1 && numeroIngresado > 10)
	{
		alert("No es un número permitido.");

		numeroIngresado = prompt("ingrese un número entre 0 y 10!!!");
	}
	if(numeroIngresado > -1 && numeroIngresado < 10)
	{
		txtIdNumero.value = numeroIngresado;
	}	
}