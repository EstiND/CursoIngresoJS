function mostrar()
{

	var min;

	var max;

	var random;

	min = 1;

	max = 11;

	random = Math.floor(Math.random() * (max - min)+ min);

	//console.log(random);

	while (random <= 9)

	{ random = (random + 1);

		console.log(random);
		
	alert('iteración while ' + random);}




}//FIN DE LA FUNCIÓN