// Tipo de dato primitivo - inmutable

let numero = 34;
numero = numero + 10;
console.log(numero);

let esVerdadero= true;
esVerdadero = false;
console.log(esVerdadero);

// Tipo de dato complejo - mutable
let usuario = {nombre: 'pedro', edad: 45}
usuario.edad = 34;
console.log(usuario);

let frutas = ['manzana', 'pera'];
frutas[0] = 'sandia';
console.log(frutas);

function cambiarNombre(objeto){
  objeto.nombre = 'Nombre nuevo';

}

let persona = {nombre: 'Antonio'};
console.log(persona);
cambiarNombre(persona);
console.log(persona);