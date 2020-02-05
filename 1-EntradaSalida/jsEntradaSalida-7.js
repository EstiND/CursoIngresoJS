/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var dato;
    
    var dato2;

    var total;

    dato = document.getElementById("numeroUno").value;

    dato2 = document.getElementById("numeroDos").value;

    dato = parseInt(dato);

    dato2 = parseInt(dato2);

    total = dato + dato2

    alert("El resultado es " + total);

	
}

function restar()
{	var dato;
    
    var dato2;

    var total;

    dato = document.getElementById("numeroUno").value;

    dato2 = document.getElementById("numeroDos").value;

    dato = parseInt(dato);

    dato2 = parseInt(dato2);

    total = dato - dato2

    alert("El resultado es " + total);

}

function multiplicar()
{ 
	var dato;
    
    var dato2;

    var total;

    dato = document.getElementById("numeroUno").value;

    dato2 = document.getElementById("numeroDos").value;

    dato = parseInt(dato);

    dato2 = parseInt(dato2);

    total = dato * dato2

    alert("El resultado es " + total);
}

function dividir()
{
	var dato;
    
    var dato2;

    var total;

    dato = document.getElementById("numeroUno").value;

    dato2 = document.getElementById("numeroDos").value;

    dato = parseInt(dato);

    dato2 = parseInt(dato2);

    total = dato / dato2

    alert("El resultado es  " + total);
}

