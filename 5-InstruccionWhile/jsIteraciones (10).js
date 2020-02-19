function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCero = 0;
	var contadorPares = 0;
	var promedioDePositivos = 0;
    var promedioDeNegativos = 0;
	var diferenciaEntrePositivosYnegativos = 0;
	var respuesta=true;

	while(respuesta)
	{  
   	var numero = prompt("ingrese un nùmero.");

	numero = parseInt(numero);

	respuesta = confirm("Quiere agregar màs nùmeros?");}


	 while (isNaN(numero)) {
		 numero = prompt("Ingrese un nùmero valido");

		 numero = parseInt(numero);}

		 if (numero >= 0) {

			 sumaPositivos += numero;
			 contadorPositivos++;
			
		 }
		 if (numero < 0) {
			 sumaNegativos += numero;
			 contadorNegativos;}

		 if (numero = 0) {
			 contadorCero = numero; 
		 }
         if (numero % 2 == 0) {
			 contadorPares = numero;
		 } 
}//FIN DE LA FUNCIÓN