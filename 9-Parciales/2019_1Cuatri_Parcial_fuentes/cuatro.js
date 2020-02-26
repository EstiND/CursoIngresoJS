function mostrar()
{
    var numero = prompt("Ingrese un nùmero.");
    var numero2 = prompt("Ingrese otro nùmero");
    var resultado;
    
    if (numero == numero2){
        resultado = numero + numero2;
        alert("Los nùmeros concatenados son" + resultado);
    }
    else {
    numero = parseInt(numero);
    
    numero2 = parseInt(numero2);
    
    resultado = numero + numero2;
    
    resultado = parseInt(resultado);
    
    alert("El resultado de la suma es " + resultado);}

    if (numero > numero2) {
    numero = parseInt(numero);

    numero2 = parseInt(numero2);

    resultado = numero - numero2;

    resultado = parseInt(resultado);
    if (resultado > 10) {
        alert("El resultado de la resta  es " + resultado + " y supero el 10");
    } else {
        alert("El resultado la resta es " + resultado);
    }
} 

}
