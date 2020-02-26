function mostrar()
{ 
  var precio = prompt("Ingrese el precio");
  
  var descuento = prompt("Ingrese el descuento");
  
  var total;

  precio = parseInt(precio);
  descuento = parseInt(descuento);

  total = descuento * precio / 100;

  total = parseInt(total);

  total = precio - total;

  document.getElementById("elPrecioFinal").value = total;



}
