/*
Ivan Keumurdji
Ejercicio while nº6- Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/
function mostrar()
{
	var contador;
	var acumulador;
	var i;

	acumulador = 0
	i = 0

	while(i < 5)
	{
		contador = prompt("nº");

		contador = parseInt(contador);

		acumulador = acumulador + contador;

		i = i+1;
	}

	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}