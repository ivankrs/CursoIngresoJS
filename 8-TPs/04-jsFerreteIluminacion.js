/*
Ivan Keumurdji
Tp nº4-	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
 	var cantLampara;

 	var producMarca;

 	var precio;

 	var precioDesc;

 	var ingresosBrutos;

 	cantLampara = document.getElementById('txtIdCantidad').value;

 	cantLampara = parseInt(cantLampara);

 	producMarca = document.getElementById('Marca').value;

 	precio = cantLampara * 35;

 	/*precioDesc = precio - (precio *50 /100);

	alert(cantLampara);

 	alert(producMarca); */


 	if(cantLampara > 5)
 	{
 		precioDesc = precio - (precio * 0.50);
 	}
 	else
 	{

 		if(cantLampara == 5 /*&& producMarca == ArgentinaLuz*/)
 		{
 			if(producMarca == "ArgentinaLuz")
 			{
 				precioDesc = precio - (precio * 0.40);
 			}
 			else
 			{
 				precioDesc = precio - (precio * 0.30);
 			}
 		}
 		/*else
 		{
 			if(cantLampara == 4)
 			{
 				if(producMarca == "ArgentinaLuz" || producMarca == "FelipeLamparas")
 				{
 					precioDesc = precio - (precio * 0.25);
 				}
 				else
 				{
 					precioDesc = precio - (precio * 0.20);
 				}
 			}
 			else
 			{
 				if(cantLampara == 3)
 				{
 					if(producMarca == "ArgentinaLuz")
 					{
 						precioDesc = precio - (precio * 0.15);
 					}
 					else
 					{
 						if(producMarca =="FelipeLamparas")
 						{
 							precioDesc = precio - (precio * 0.10);
 						}
 						else
 						{
 							precioDesc = precio - (precio * 0.05);
 						}
 					}
 				}
 			}
 		}*/
 		
 	}


 	txtIdprecioDescuento.value = precioDesc;

 	/*if(precioDesc > 120)
 	{
 		ingresosBrutos = precioDesc * 0.10;

 		alert("IIBB Usted pago es: " + ingresosBrutos);
 	}*/
 
}
