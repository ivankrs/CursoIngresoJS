function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if(edad >=13 && edad <=17)
	{	
		alert("Usted tiene " + edad + " años, es un adolescente.");

	}


}//FIN DE LA FUNCIÓN