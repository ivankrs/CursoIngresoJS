/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	var fahrenheit;

	var centígrados;

	fahrenheit = document.getElementById('txtIdTemperatura').value;

	fahrenheit = parseFloat(fahrenheit);

	//(este no va creo)centígrados = fahrenheit - 273.15;
	centígrados = (fahrenheit − 32) × 5/9;

	alert( fahrenheit + " Fahrenheit son " + centígrados + " centígrados.");
}

function CentigradosFahrenheit () 
{
	var fahrenheit;

	var centígrados;

	centígrados = document.getElementById('txtIdTemperatura').value;

	centígrados = parseFloat(centígrados);

	//(este no va creo)fahrenheit = centígrados + 273.15;
	fahrenheit = (centígrados * 9/5) + 32;

	alert( centígrados + " Centígrados son " + fahrenheit + " Fahrenheit.");
}
