 var pregunta  = 1;
 var bandera = 0;
  var ultima=50;
  var respuesta="";

    function contarLineas() {
        var textarea = document.getElementById('txtArea');
        var contenido = textarea.value;
        // Dividir el contenido del textarea en líneas utilizando el salto de línea como separador
        var lineas = contenido.split('\n');
        // Eliminar líneas vacías del conteo
        var lineasNoVacias = lineas.filter(function(linea) {
            return linea.trim() !== '';
            ultima=lineasNoVacias.length;
        });
        // Mostrar el número de líneas
        alert('El textarea tiene ' + lineasNoVacias.length + ' línea(s).');
    }
    
    function siguiente() {
        pregunta= pregunta + 1;
        copiarLinea();
    }

    function atras() {
        pregunta= pregunta - 1;
        copiarLinea();
    }

    function copiarLinea() {
        var textarea = document.getElementById('txtArea');
        var lineaDeseada = pregunta*10; // Cambia esto al número de línea que deseas copiar
        var contenido = textarea.value;
        // Dividir el contenido del textarea en líneas utilizando el salto de línea como separador
        var lineas = contenido.split('\n');
        // Obtener la línea deseada por su índice
        var linea1 = lineas[lineaDeseada - 10] //índices comienzan en 0
        var linea2 = lineas[lineaDeseada - 9]
        var linea3 = lineas[lineaDeseada - 8]
        var linea4 = lineas[lineaDeseada - 7]
        var linea5 = lineas[lineaDeseada - 6]
        var linea6 = lineas[lineaDeseada - 5]
        var linea7 = lineas[lineaDeseada - 4]; 
        document.getElementById('parra1').textContent = linea1;
        document.getElementById('parra2').textContent = linea2;
        document.getElementById('parra3').textContent = linea3;
        document.getElementById('parra4').textContent = linea4;
        document.getElementById('parra5').textContent = linea5;
        document.getElementById('parra6').textContent = linea6;
        document.getElementById('parra7').textContent = linea7;
        if (linea2 == linea7) { respuesta="A"; }
        else if (linea3 == linea7) { respuesta="B";}
        else if (linea4 == linea7) {respuesta="C";}
        else if (linea5 == linea7) {respuesta="D";}
         else  respuesta="E";
         document.getElementById('respuesta').textContent = respuesta;
         var radios = document.getElementsByName('opcion');
         for (var i = 0; i < radios.length; i++) {
             radios[i].checked = false;
         }
         document.getElementById('imagen1').src="";
         document.getElementById('imagen2').src="";
         document.getElementById('imagen3').src="";
         document.getElementById('imagen4').src="";
         document.getElementById('imagen5').src="";

    }

		var responder = function (opcion) {

            var imag1 = document.getElementById('imagen1');
			var imag2 = document.getElementById('imagen2');
			var imag3 = document.getElementById('imagen3');
			var imag4 = document.getElementById('imagen4');
			var imag5 = document.getElementById('imagen5');
            var valor=document.querySelector('input[name=opcion]:checked').value;//encuetra el valor de radio button seleccionado
				 document.getElementById('seleccion').textContent = valor;

             switch (valor) {
                case "A":
                   if (respuesta=="A") { imag1.src='img/bien.jpg';} else imag1.src='img/mal.jpg';
                   break;
                case "B":
                   	if (respuesta=="B") { imag2.src='img/bien.jpg';} else imag2.src='img/mal.jpg';
                    break;
                case "C":
                    if (respuesta=="C") { imag3.src='img/bien.jpg';} else imag3.src='img/mal.jpg';
                    break;
				case "D":
                    if (respuesta=="D") { imag4.src='img/bien.jpg';} else imag4.src='img/mal.jpg'; 
                    break;
				case "E":
                    if (respuesta=="E") { imag5.src='img/bien.jpg';} else imag5.src='img/mal.jpg';
                    break;
               default:
					
            }
	
				
		}