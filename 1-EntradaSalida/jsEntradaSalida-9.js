/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var saldo;

    var resultado;

    var total;

    var porcentaje;

    sueldo = document.getElementById("sueldo").value;

    sueldo = parseInt(sueldo);

    //aumento = sueldo * 0.1;

    total = (sueldo * 1.1)

    resultado = document.getElementById("resultado").value=total;







	
}
