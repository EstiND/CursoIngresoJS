/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
 var numero;
function ComenzarIngreso () 
{  numero = document.getElementById("numero").value;
   numero = parseInt(numero);

       while (isNaN(numero) || numero < 1) 

         numero = prompt("Ingrese un nùmero valido.");
         numero = parseInt(numero);}

function NumerosPares() {
    ComenzarIngreso()
    var contador = 0;
    var contadorDePares = 0;    
    while (contador < numero) {
	 
         contador++;}

         if (contador % 2 ==0) {
             contadorDePares++;}}

function NumerosImpares() {

    ComenzarIngreso()
    var contador = 0;
    var contadorDeImpares = 0;    
    while (contador < numero) {
	 
         contador++;}

         if (contador % 2 !=0) {
             contadorDeImpares++;}}

function NumerosDivisibles () {

     ComenzarIngreso()
    var contador = 0;
    var contadorDePares = 0;    
    while (contador <= 100) {
	 
     contador++;}

         if (contador % 2 ==0) {
         contadorDePares++;}

}
