/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    var dato;

    var dato2;
    
    var total;

    dato = document.getElementById("numeroUno").value;

    dato2 = document.getElementById("numeroDos").value;

    dato = parseInt(dato);        

    dato2 = parseInt(dato2);

    total = dato + dato2;


    alert("La suma es " + total);


    

}

