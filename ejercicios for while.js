//1 -Ejercicio de clase

		let sexo = "hombre";
		if (sexo == "hombre") {
			console.log("Se llama Juan");
		} else {
			console.log("Se llama Maria");
		}

		//2 -Ejercicio de clase
		let precioInicial = 10000;
		let incremento = 1000;

		for (let i = 1; i <= 100; i++) {
			if (i % 10 == 0) {
				precioInicial += incremento;
			}
		}
		console.log("El precio final es:", precioInicial);

		//3 -Ejercicio clase
		// un for del 1 al 100 y que cada 10 sume 1

		let precio = 0;

		for (let i = 1; i <= 100; i++) {
			if (i % 10 === 0) {
				precio += 1;
			}
			console.log(i, precio);
		}


		// 4 - Ejercicio clase
		//hacer un while del 1 al 100 y que cada 10 sume 1

		let precio = 0;
		let i = 1;

		while (i <= 100) {
			if (i % 10 === 0) {
				precio += 1;
			}
			console.log(i, precio);
			i++;
		}

		

	
	