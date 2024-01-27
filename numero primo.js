//Escribe un bucle para encontrar y mostrar todos los números primos entre 1 y 20.

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

console.log(isPrime(2));

for (let i = 1; i <= 20; i++) {
    if (isPrime(i)) console.log(i);
    else console.log ( `${i} No es primo`);
}
