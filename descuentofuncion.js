//Funció que calculi el total a pagar a partir del preu d’un producte segons els següents requeriments: 

//Si el producte val més de 50 € i menys o igual a 100€, es descomptarà 10 euros.

function calcularPrecio(precio){
    if((precio<50)&& (precio<10))return precio-5;
    else if ((precio>=50)&&(precio<=100))return precio-10;
    else if (precio>100)return preu*0.90;
    else return precio;
}

console.log("El precio final es", calcularPrecio(60));