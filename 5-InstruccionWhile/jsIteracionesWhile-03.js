/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var contador;

	claveIngresada = prompt("ingrese el número clave.");

	contador = 0;

	while(claveIngresada != "utn750" && contador != 2)
	{	
		claveIngresada = prompt("intente de nuevo.");

		contador = contador +1;
	}

	if(contador == 2)
	{
		alert("ha superado la cantidad maxima de intentos");
	}
	if(claveIngresada == "utn750")
	{
		alert("ha ingresado");
	}
	//alert("incorrecto");
}
