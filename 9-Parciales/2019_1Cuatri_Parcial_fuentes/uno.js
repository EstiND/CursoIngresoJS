
function mostrar()
{ var ancho;
  var largo;
  var perimetro;

  ancho = prompt("Ingrese el ancho del rectangulo.");
  
  largo = prompt("Ingrese el largo del rectangulo");

   while (isNaN(numero)) { 
		 numero = prompt("Ingrese un nùmero valido");

   numero = parseInt(numero);}
  
  perimetro = (ancho * 2 + largo * 2);

  alert("El perimetro del rectangulo es " + perimetro);
}
