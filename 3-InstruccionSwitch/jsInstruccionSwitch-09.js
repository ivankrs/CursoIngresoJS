/*
Ivan Keumurdji
Ejercicio switch nº9- Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/
function mostrar()
{
	var estacionIngresada;

	var destinoIngresado;

	var tarifaBase;

	var tarifaFinal;

	//var descuento;

	estacionIngresada = document.getElementById('txtIdEstacion').value;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	tarifaBase = 15000;

	//tarifaFinal = tarifaBase - descuento;

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					tarifaFinal = tarifaBase + (tarifaBase * 20/100);
					//alert(tarifaFinal);
					break;
				case "Cataratas":
				case "Mar del plata":
					tarifaFinal = tarifaBase - (tarifaBase * 0.1);
					//alert(tarifaFinal);
					break; 
				case "Cordoba":
					tarifaFinal = tarifaBase - (tarifaBase * 0.2);
					//alert(tarifaFinal);
					break;
					//alert(tarifaFinal);    
			}
		case "Verano":
			switch(destinoIngresado){
				case "Bariloche":
					tarifaFinal = tarifaBase - (tarifaBase * 0.20);
					//alert(tarifaFinal);
					break;
				case "Cataratas":
				case "Mar del plata":
					tarifaFinal = tarifaBase + (tarifaBase * 0.1);
					//alert(tarifaFinal);
					break;
				case "Cordoba":
					tarifaFinal = tarifaBase + (tarifaBase * 0.2);
					//alert(tarifaFinal);
					break;
			}	
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					tarifaFinal = tarifaBase + (tarifaBase * 0.1);
					//alert(tarifaFinal);
					break;
				case "Cordoba":
					tarifaFinal = tarifaBase;
					//alert(tarifaFinal);
					break;
			}
	}		
}