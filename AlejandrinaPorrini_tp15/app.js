// MICRO-DESAFIO 1:

const peliculasFavoritas = require("./peliculas");

peliculasFavoritas.forEach(peli => {
    console.log(`Título: ${peli.title}`);
    console.log(`Id: ${peli.id}`);
    console.log(`Rating: ${peli.rating}`);
    console.log(`Premios: ${peli.awards}`);
    console.log(`Duración: ${peli.length}`);
    console.log(`Precio: ${peli.price}`);
    console.log(`Género: ${peli.genre}`);
    console.log("//---------------------------//");
});


//----------------------------------------------------


// MICRO-DESAFIO 2:

const fs = require("fs");

const Mensaje = fs.readFileSync("./mensaje.txt", 'utf-8');

console.log(Mensaje);


