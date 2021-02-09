/*
Ivan Keumurdji
Ejercicio if nº2- Al ingresar una edad debemos informar solo si la persona es mayor de edad.*/
function mostrar()
{

	var edad

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted tiene " + edad + " años, y ya es mayor de edad.")
	}


	

}