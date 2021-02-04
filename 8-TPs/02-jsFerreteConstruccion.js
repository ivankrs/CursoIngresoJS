/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//Perimetro de un rectangulo = 2base + 2altura => (p = 2b + 2h)
	//Son 3 alambres 1 vuelta => (3alambre * A) o (alambre * 3A)

	var largo;

	var ancho;

	var perimetro;

	var alambre;

	largo = document.getElementById('txtIdLargo').value;

	ancho = document.getElementById('txtIdAncho').value;

	largo = parseInt(largo);

	ancho = parseInt(ancho);

	perimetro = 2*largo + 2*ancho;

	alambre = 3*perimetro;

	alert("Debe comprar " + alambre + " metros de alambre.");


}
function Circulo () 
{
	
}
function Materiales () 
{
	
}