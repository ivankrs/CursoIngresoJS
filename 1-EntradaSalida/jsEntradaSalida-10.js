/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;

	var resultado;

	var descuento;

	importe = document.getElementById('txtIdImporte').value;

	importe = parseInt(importe);

	//txtIdResultado.value = importe - importe * 0.25;

	descuento = importe * 0.25;

	resultado = importe - descuento;

	//resultado = importe * 25/100;

	txtIdResultado.value = resultado;

}
