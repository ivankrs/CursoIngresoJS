function mostrar()
{
	//tomo la edad = txtIdEdad

	var edad

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted tiene " + edad + " años, y ya es mayor de edad.")
	}


	

}//FIN DE LA FUNCIÓN