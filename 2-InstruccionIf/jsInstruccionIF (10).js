function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

    var min;

	var max;

	var random;

	min = 1;

	max = 11;

	random = Math.floor(Math.random() * (max - min)+ min);

	if (random > 8) {
		alert("Excelente un " + random);

		 	}
    else {

		if (random >= 4)

		alert("Aprobaste con un " + random);
		
		else {
			alert("La proxima se puede un " + random);
		}



	}  
	

}//FIN DE LA FUNCIÓN