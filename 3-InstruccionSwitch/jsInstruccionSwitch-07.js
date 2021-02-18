/*
Ivan Keumurdji
Ejercicio switch nº7- Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
function mostrar()
{
	var destinoIngresado; 

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado){
		case "Bariloche":
			alert("Se encuentra al Oeste");
			break;
		case "Mar del plata":
			alert("Se encuentra al Este");
			break;
		case "Cataratas":
			alert("Se encuentra al Norte");
			break;
		case "Ushuaia":
			alert("Se encuentra al Sur");
			break;
	}
}