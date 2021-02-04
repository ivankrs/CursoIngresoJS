/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioA;

	var precioB;

	var precioC;

	var precioFinal;

	precioA = document.getElementById('txtIdPrecioUno').value;

	precioB = document.getElementById('txtIdPrecioDos').value;

	precioC = document.getElementById('txtIdPrecioTres').value;

	//precioA = parseInt(precioA);
	precioA = parseFloat(precioA);

	//precioB = parseInt(precioB);
	precioB = parseFloat(precioB);

	//precioC = parseInt(precioC);
	precioC = parseFloat(precioC);

	precioFinal = precioA + precioB + precioC;

	alert("La suma es: " + precioFinal);


}
function Promedio () 
{
	var precioA;

	var precioB;

	var precioC;

	var suma;

	var precioFinal;

	precioA = document.getElementById('txtIdPrecioUno').value;

	precioB = document.getElementById('txtIdPrecioDos').value;

	precioC = document.getElementById('txtIdPrecioTres').value;

	//precioA = parseInt(precioA);
	precioA = parseFloat(precioA);

	//precioB = parseInt(precioB);
	precioB = parseFloat(precioB);

	//precioC = parseInt(precioC);
	precioC = parseFloat(precioC);

	suma = (precioA + precioB + precioC)

	precioFinal = suma / 3;

	alert("El promedio es: " + precioFinal);
}
function PrecioFinal () 
{
	var precioA;

	var precioB;

	var precioC;

	var suma;

	var precioFinal;

	precioA = document.getElementById('txtIdPrecioUno').value;

	precioB = document.getElementById('txtIdPrecioDos').value;

	precioC = document.getElementById('txtIdPrecioTres').value;

	//precioA = parseInt(precioA);
	precioA = parseFloat(precioA);

	//precioB = parseInt(precioB);
	precioB = parseFloat(precioB);

	//precioC = parseInt(precioC);
	precioC = parseFloat(precioC);

	suma = (precioA + precioB + precioC);

	//precioFinal = suma * 1.21;
	precioFinal = suma + ( suma /100 * 21);

	alert("El precio final es: " + precioFinal);
}