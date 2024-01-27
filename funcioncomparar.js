 //Funció que retorni el major de dos números.

function compara(num1,num2) {
    if (num1 < num2) {
        return num2;
    }
    if (num1 > num2) {
        return num1;
    }
    if (num1 == num2) {
        return ('null');
    }
}
console.log(compara(50, 150));