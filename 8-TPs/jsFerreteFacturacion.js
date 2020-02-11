/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var dato;

var dato2;

var dato3;

var total;

function Sumar () 
{

    dato = document.getElementById("PrecioUno").value;

    dato2 = document.getElementById("PrecioDos").value;

    dato3 = document.getElementById("PrecioTres").value;
    

    dato = parseInt(dato);
    
    dato2 = parseInt(dato2);

    dato3 = parseInt(dato3);


    total = dato + dato2 + dato3;

    alert("El valor total es " + total);
}
function Promedio () 
{

    dato = document.getElementById("PrecioUno").value;

    dato2 = document.getElementById("PrecioDos").value;

    dato3 = document.getElementById("PrecioTres").value;
    

    dato = parseInt(dato);
    
    dato2 = parseInt(dato2);

    dato3 = parseInt(dato3);


    total = dato + dato2 + dato3;



    alert("El promedio es " + total / 3);
	
}
function PrecioFinal () 
{

    dato = document.getElementById("PrecioUno").value;

    dato2 = document.getElementById("PrecioDos").value;

    dato3 = document.getElementById("PrecioTres").value;
    

    dato = parseInt(dato);
    
    dato2 = parseInt(dato2);

    dato3 = parseInt(dato3);


    total = dato + dato2 + dato3;

    total = total * ;

    alert("El valor final es " + total);
	
}