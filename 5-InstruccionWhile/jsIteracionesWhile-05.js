/*
Ivan Keumurdji
Ejercicio while nº5- Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	sexoIngresado = sexoIngresado.toUpperCase();

	while(sexoIngresado != "F" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("ingrese F ó M .");

		sexoIngresado = sexoIngresado.toUpperCase();

	}



	txtIdSexo.value=sexoIngresado;
}