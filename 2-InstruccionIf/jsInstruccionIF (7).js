function mostrar()
{
//tomo la edad  

var edad;

var estadoCivil;

edad = document.getElementById("edad").value;

edad = document.getElementById("estadoCivil").value;

if (edad <= 17) {
    if (estadoCivil != soltero) {

        alert("Es muy pequeño para NO estar soltero");
    }
                 
	}
//FIN DE LA FUNCIÓN