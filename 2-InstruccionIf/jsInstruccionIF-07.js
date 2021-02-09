/*
Ivan Keumurdji
Ejercicio if nº7- Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{
	
	var edad;

	var estado;

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	estado = document.getElementById('estadoCivil').value;

	//alert("edad: " + edad);
	//alert("estadoCivil: " + estado);

	if(edad < 18)
	{
		if(estado != "Soltero")
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
		/*else
		{
			alert("chau");
		}*/
	}

}