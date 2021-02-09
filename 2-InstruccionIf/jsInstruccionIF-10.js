/*
Ivan Kemrdji
Ejercicio if nº10- Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4.*/
function mostrar()
{
	var random;

	random = Math.floor(Math.random()*11);

	if(random > 8 && random < 11)
	{
		alert("EXCELENTE (" + random +")" );
	}
	else
	{
		if(random > 4 && random < 9 )
		//if(random > 3 && random < 9)
		{
			alert("APROBÓ (" + random + ")" );	
		}
		else
		{
			alert("Vamos, la proxima se puede (" + random + ")" );
		}
	}


}