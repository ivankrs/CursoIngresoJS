/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var a;

	var b;

	var suma;

	a = document.getElementById('txtIdNumeroUno').value;

	b = document.getElementById('txtIdNumeroDos').value;

	a = parseInt(a);

	b = parseInt(b);

	suma = a + b;

	alert("La suma da: " + suma);
}

