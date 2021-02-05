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
	//largo = parsefloat(largo);

	ancho = parseInt(ancho);
	//ancho = parsefloat(ancho);

	perimetro = 2*largo + 2*ancho;

	alambre = 3*perimetro;

	alert("Debe comprar " + alambre + " metros de alambre.");


}
function Circulo () 
{
	//Tengo que circunferencia dividido diametro es igual a pi(π) => (C/d = π) => (C = π.d)
	//Tengo que diametro es igual a 2 radios => (d = 2r) => (C = π.2r)
	//Entonces circunferencia por 3 es igual a 3 vueltas de alambre.

	var radio;

	var diametro;

	var circunferencia;

	var alambre;

	radio = document.getElementById('txtIdRadio').value;

	radio = parseInt(radio);
	//radio = parsefloat(radio);

	diametro = radio *2;

	circunferencia = diametro * Math.PI;

	//circunferencia = diametro * (3.14159265359);

	alambre = circunferencia * 3;

	//alambre = alambre.toFixed(3);


	alert("Debe comprar " + alambre + " metros de alambre.");


}
function Materiales () 
{
	//Tengo que para un area de 1m por 1m necesito 2bolsas de cemento y 3 bolsas de cal.
	//Entonces A*2bolsas de cemento = cant. de bolsas que necesita  y A*3bolsas de cal = cant. de bolsas que necesita.

	var largo;

	var ancho;

	var area;

	var cemento;

	var cal;

	largo = document.getElementById('txtIdLargo').value;

	ancho = document.getElementById('txtIdAncho').value;

	largo = parseInt(largo);
	//largo = parsefloat(largo);

	ancho = parseInt(ancho);
	//ancho = parsefloat(ancho);

	area = largo * ancho;

	cemento = area * 2;

	cal = area * 3;

	alert("Para el area de " + area + "m², se necesita " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");


}