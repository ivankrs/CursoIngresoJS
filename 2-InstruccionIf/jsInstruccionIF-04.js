/*
Ivan Keumurdji
Ejercicio if nº4- Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/
function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	/*if(edad > 12 && edad < 18)
	{	
		alert("Usted tiene " + edad + " años, es un adolescente.");

	}*/

	if(edad > 12)
	{
		if(edad < 18)
		{
			alert("Usted tiene " + edad + " años, es un adolescente.");
		}
	}


}//FIN DE LA FUNCIÓN