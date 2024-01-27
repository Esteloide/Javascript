 //Funció que comprovi si un cadena de text tipus email compleix les següents condicions

 function validarEmail(email){
    let arrayPartsEmail=email.split("@");
    if (arrayPartsEmail.length!=2)return false;

    let usuari=arrayPartsEmail[0];
    let domini=arrayPartsEmail[1];

    if(usuari.length>30) return false;
    if(domini.length>20) return false;
    if(!domini.endsWith("digimon.es")&& !domini.endsWith(".org")) return false;
    return true;
}
 
 console.log("El correo es correcto?", validarEmail("pepe@gmail.com"));
 
 