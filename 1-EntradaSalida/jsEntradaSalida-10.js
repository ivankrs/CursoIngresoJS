/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var a;

	a = document.getElementById('txtIdImporte').value;

	a = parseInt(a);

	txtIdResultado.value = a - a * 0.25;

}
