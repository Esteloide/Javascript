//Funció que compti el nombre de “a” d’una frase. Empra la funció charAt

function contarA(texto){
    let count = 0;
    for (let i=0; i<texto.length; i++){
        if (texto.charAt(i)=='a'
        ||texto.charAt(i)=='á') {
    count++;
    }
    return count;
    }
    let frase="la frase es á";
    console.log(""+ contarA(frase));
}
