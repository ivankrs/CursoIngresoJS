/*
Ivan Keumurdji
Ejercicio switch nº8- Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	var destinoIngresado 

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado){
		case "Cataratas":
		case "Mar del plata":
			alert("En el destino hace CALOR");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("En el destino hace FRIO");
			break;
	}
}