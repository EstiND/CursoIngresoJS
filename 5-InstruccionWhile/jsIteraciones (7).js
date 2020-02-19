function mostrar()
{

	var contador = 0;
	
	var acumulador = 0;

	var iterador = 5;

	var respuesta = 'si';

	iterador = prompt("Ingrese la cantidad de nùmeros que quiera ingresar.");

	iterador = parseInt(iterador);
	
	while (contador < iterador)

	{ contador++;
	 
	 var numero = prompt("ingrese un nùmero.");

	 numero = parseInt(numero);


	 while (isNaN(numero)) {
		 numero = prompt("Ingrese un nùmero valido");

		 numero = parseInt(numero);
	 }

	acumulador += numero; }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN