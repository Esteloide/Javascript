//Dada una serie de números, escribe un bucle para calcular y mostrar su suma.

const numbers= [3,7,1,5,9];
let sum = 0;
for (let i= 0; i < numbers.length; i++){
    sum+= numbers[i];
}
console.log(sum);