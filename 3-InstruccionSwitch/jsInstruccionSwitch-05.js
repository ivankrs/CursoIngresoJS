/*
Ivan Keumurdji
Ejercicio switch nº5- Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana."*/
function mostrar()
{
	var horaDelDia
	horaDelDia = document.getElementById('txtIdHora').value;
	horaDelDia = parseInt(horaDelDia);
	
	switch(horaDelDia){
		case 7:
		case 8: 
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		default:
			alert("No hay nada programado para este horario.");
			break;
	}
}