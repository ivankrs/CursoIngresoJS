/*
Ivan keumurdji
Ejercicio switch nº1- Al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiestas!!!."*/
function mostrar()
{
	
	var mesDelAño =txtIdMes.value;
	
	/*if(mesDelAño == "Enero")
	{
		alert("Que comiences bien el año!!!");
	}
	else
	{
		if(mesDelAño == "Marzo")
		{
			alert("A clases!!!");
		}
		else
		{
			if(mesDelAño == "Julio")
			{
				alert("se vienen las vacaciones!!!");
			}
			else
			{
				if(mesDelAño == "Diciembre")
				{
					alert("Felices fiestas!!!");
				}
			}
		}
	}*/

	switch(mesDelAño){
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!!");
			break;
		default:
			alert("No hay nada programado para este mes");
			break;
	}



}