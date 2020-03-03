function mostrar()
{
 
var pasaje = document.getElementById("pasaje").value;
var nombre = prompt("Ingrese su nombre.")
var edad = prompt("Ingrese su edad.");
    edad = parseInt(edad);
var sexo = prompt("Ingrese su sexo utilizando f o m.");
var edadMinimaHombreNacional = 120;
var primeraVeHombreNacional = true;
var edadMaxima;
var edadMinima; 
var sexoMinimo;
var pasajeMinimo;
var primeraVez = true;
var contadorMujeresUrbanoNacional = 0;
var acumulador = 0;
var contadorF;
var promedio;
var acumuladorMi = 0;
var contadorM;
var promedioM;
 do {
     edad = prompt("Ingrese una edad valida.");
     edad = parseInt(edad);} while (isNaN(edad))
     
 do { sexo = prompt("Ingrese su sexo utilizando f o m.") } 
 while (sexo != "f" && sexo != "m")

     if (pasaje == "nacional" && sexo == m){
         if (primeraVeHombreNacional) {
             primeraVeHombreNacional = false;
             edadMinimaHombreNacional = edad; 
         } else if (edad < edadMinimaHombreNacional){
             edadMinimaHombreNacional = nombre;}} 

             if (sexo == f && (pasaje == "nacional" || pasaje == "urbano")) {
                 contadorMujeresUrbanoNacional++;}

             if (sexo == f){
                 acumulador +- edad;
                 contadorF++;

            if (sexo == "m" && pasaje == "internacional"){
                acumuladorMi +- edad;+
                contadorM++;
            }
             }

             if (contadorF > 0){
                 promedio = acumulador / contadorF;
             }    else {
                 promedio = 0;
             } 

console.log(pasaje);
console.log(edad);
console.log(sexo);
console.log(nombre);
}