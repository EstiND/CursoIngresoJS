function mostrar()
{
    var numero;

	var numero = prompt("ingrese un número entre 0 y 9");


	numero = parseInt(numero);

	while (numero > 9 || numero < 0) {

		     alert("El nùmero no ingresado no es valido.");

	numero = prompt("ingrese un número entre 0 y 9"); 

	numero = parseInt(numero);}

		

	document.getElementById("Numero").value = numero;
    break; 
	


}//FIN DE LA FUNCIÓN