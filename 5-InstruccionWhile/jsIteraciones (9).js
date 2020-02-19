function mostrar()
{

	var contador = 0;

	var max;

	var min;
	// declarar variables
	
	var respuesta = true;

	while (respuesta)
	{  
   	var numero = prompt("ingrese un nùmero.");

	numero = parseInt(numero);}


	 while (isNaN(numero)) {
		 numero = prompt("Ingrese un nùmero valido");

		 numero = parseInt(numero);
	} 

	if (numero > max){
		max = numero;
	}

	if (numero < min){
		min = numero;
	}

	document.getElementById("maximo") = max;
	document.getElementById("minimo") = min;




}//FIN DE LA FUNCIÓN