//Paso por valor Tipos de datos primitivos
let x = 1;
let y = 'hola';
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x,y,z,a,b,c);

a= 12;
b = 'juan';
c = undefined;

// Paso por referencia tipos de datos complejos
let frutas = ['manzana'];
frutas.push('pera');
console.log(frutas);

let panes = ['🍞​','🥐','​🥖'];
let copiaPanes = panes;
panes.push('​🫓','​🥯','​🧇','​🥞​');
console.log(panes, copiaPanes);

let ropa = {pantalon: 'negro', blusa:'azul'}
ropa.calcetin = 'blanco';
console.log(ropa);