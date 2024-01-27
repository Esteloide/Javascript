//Escribe un bucle para calcular el factorial de un número dado.

function factorial (n){
    let result= 1;

    for ( let i=1; i<=n; i++){
        result*= 1;        
    }
    return result;
}
console.log(factorial(5));