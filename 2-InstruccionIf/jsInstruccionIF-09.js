/*
Ivan Kemrdji
Ejercicio if nº9- Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.*/
function mostrar()
{
	var random;

	random = Math.floor(Math.random() * 10 + 1);

	alert("El número es: " + random);

	/*if(random != 0)
	{
		alert("El número es: " + random);
	}*/

		

}