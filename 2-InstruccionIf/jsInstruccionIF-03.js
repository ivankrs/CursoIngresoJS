/*
Ivan Keumurdji
Ejercicio if nº3- Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/
function mostrar()
{
	var edad

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted tiene " + edad + " años, y ya es mayor de edad.");
	} 

	else
	{
		alert("Usted tiene " + edad + " años, es menor de edad.")
	}



}//FIN DE LA FUNCIÓN