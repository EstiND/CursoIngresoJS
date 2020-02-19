function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta=true;
	
	while (respuesta)

	{ respuesta = confirm("Desea continuar");

	contador = prompt("Ingrese un nùmero."); }

	contador = parseInt(contador);
	
	if (positivo >= contador){
 
    positivo += contador   

	}  
	
else (negativo <= contador) {

    negativo -= contador;


	} 
											
										
									
								
							
						
					

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN