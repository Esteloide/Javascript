let llistaVideojocs = [
    { "id": 1, "title": "The Witcher", "year": 2010, "category": "action", "personaje": ["pepe", "maria", "raul"] },
    { "id": 2, "title": "Fornite", "year": 2009, "category": "shooter", "personaje": ["juan", "toni", "lara"] },
    { "id": 3, "title": "Driver", "year": 2019, "category": "sport", "personaje": ["marc", "lluis", "marta"] },
    { "id": 4, "title": "The last man", "year": 2020, "category": "terror", "personaje": ["tina", "jaime", "david"] }
];

let contador = 0;
for (let game of llistaVideojocs){
    for(var i = 0; i<game.personaje.length; i++){
        contador++;
        console.log(contador+ ":" + game.personaje[i]);
    }
} 