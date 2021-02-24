/*
Ivan Keumurdji
Ejercicio while nº9- Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	bandera="es el primero";
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(bandera == "es el primero" || numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(bandera == "es el primero" || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;

			bandera = "no es el primer numero";
		}

		respuesta=prompt("desea continuar Si/No.?");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}