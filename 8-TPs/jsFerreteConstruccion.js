/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largo;

var ancho;

var terreno;

var alambre;

var radio;

function Rectangulo () 
{
    largo = document.getElementById("Largo").value;

    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);

    ancho = parseInt(ancho);

    alambre = (largo * 2 + ancho * 2) * 3;

    alert("Se debe comprar 3 hilos de alambre de " + alambre + " metros cada una");

}
function Circulo () 
{
    largo = document.getElementById("Largo").value;

    ancho = document.getElementById("Radio").value;

    largo = parseInt(largo);

    ancho = parseInt(radio);

    alambre = 2 * Math.pi * radio * 3;

    

    


    alert("Se debe comprar 3 hilos de alambre de " + alambre + " metros cada una");
	
}
function Materiales () 
{
    largo = document.getElementById("Largo").value;

    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);

    ancho = parseInt(ancho);

    alambre = largo + ancho;

    alert("Se debe comprar 3 hilos de alambre de " + alambre / 3 + " metros cada una");
	
}