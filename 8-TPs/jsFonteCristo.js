/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{  
 	var numero = document.getElementById("numero");
}

function NumerosPares() {

    var numero = document.getElementById("numero").value;
    var contador = 0;
    numero = parseInt(numero);

    while (isNaN(numero) || numero < 1) 

         numero = prompt("Ingrese un nùmero valido.");
         numero = parseInt(numero);}
         
         while (contador < numero) {
	 
         contador++;}

         if (contador % 2 ==0) {
             console.log(contador);
         }

}

function NumerosImpares() {

    var numero = document.getElementById("numero").value;
    var contador = 0;
    numero = parseInt(numero);

    while (isNaN(numero) || numero < 1) 

         numero = prompt("Ingrese un nùmero valido.");
         numero = parseInt(numero);}
         
         while (contador < numero) {
	 
         contador++;

         if (contador % 2 !=0) {
             console.log(contador);
         }
}

function NumerosDivisibles () {

    var numero;
    var contador;
    var contadorDivisor = 0; 

    while (contador <= 100) {
        contador ++;
    } if (numero % contador == 0) {
        contadorDivisor ++;
    }

}
