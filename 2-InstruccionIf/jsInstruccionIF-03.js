function mostrar()
{
	var edad

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted tiene " + edad + " años, y ya es mayor de edad.");
	} 

	else
	{
		alert("Usted tiene " + edad + " años, es menor de edad.")
	}



}//FIN DE LA FUNCIÓN