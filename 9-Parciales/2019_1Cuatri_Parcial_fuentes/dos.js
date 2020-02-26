function mostrar()
{ var nombre;
  var nombre2;
  var peso;
  var peso2;
  var resultado;

  nombre = prompt("Ingrese su nombre");
  nombre2 = prompt("Ingrese el nombre de su pareja");

  peso = prompt("Ingrese su peso");
  peso2 = prompt("Ingrese el peso de su pareja");
  peso = parseInt(peso);
  peso2 = parseInt(peso2);
  resultado = peso + peso2;

  alert("Ustedes se llaman " + nombre + " y " + nombre2 + " pesan " + peso + " y " + peso2 + " kilos, que sumados son " + resultado + " kilos y el promedio de peso " + resultado / 2 +".")
  
}
