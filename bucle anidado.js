//Escribe bucles anidados para mostrar el siguiente patrón:

for (let i = 0; i < 4; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += '*';
    }
    console.log(row);
} 