//Creacion de string
const primeraOpcion = 'Comillas simples';
const segundaOpcion = "Comillas dobles";
const terceraOpcion = `template literals`;

//1.- Concatenacion +
const direccion = 'calle 123';
const ciudad = 'Puebla';
const direccionCompleta = direccion + ciudad;
console.log(direccionCompleta);

const direccionCompletaEspacios = direccion + ' ' + ciudad;

console.log(direccionCompletaEspacios);

//2.- Concatenacion Template literals
const nombre = 'juan';
const pais = 'mexico';
const presentacion = `hola ${nombre} de ${pais}`;
console.log(presentacion);

//3.- Concatenacion join()
const primera = 'me gusta';
const segunda =' la pizza';
const tercera = '442';
const todo = [primera, segunda, tercera];
console.log(todo.join('pedro'));

//4.- Concatenacion concat();
const hobbie1 =  'correr';
const hobbie2 = 'estudiar';
const hobbie3 = 'aprender';
const hobbies = 'Mis hobies son: '.concat(hobbie1, ' ', hobbie2,' ',hobbie3);
console.log(hobbies);

//Caracteres de escape
//1.- Escape alternativo
const escapeAlternativo = "I'm software engineer";

//2.- escape Barra Invertida
const escapeBarraInvertida = 'I \'m software engineer';

//3.- escape Template Literals
const escapeComillaInvertida = `I'm software engineer`;

//Escritura de strings largos
/*
Mollit do sint in quis ipsum incididunt cillum. Est cillum et enim nulla deserunt culpa ea mollit exercitation irure. Qui nulla dolor eu velit minim aliqua dolor aliquip in ea commodo.Quis esse incididunt ipsum est veniam consequat aliqua labore occaecat officia eu. In et est Lorem aute elit. Est non consequat qui sint Lorem sunt non quis minim voluptate fugiat irure reprehenderit ex. Laborum aliqua non dolore enim dolore.Qui magna ipsum ullamco eu cillum. Nulla nostrud do ut do pariatur duis aliqua ea do nulla id deserunt. Adipisicing ullamco irure aliqua do Lorem cillum ex. Cupidatat culpa qui officia et Lorem aliquip. Laborum non duis eiusmod irure laboris enim sint exercitation fugiat eu sit nisi aliquip consectetur. Tempor qui fugiat esse Lorem reprehenderit eu elit officia ea reprehenderit amet esse.
*/
const poema = 'Mollit do sint in quis ipsum incididunt cillum.\n'+
              'Mollit do sint in quis ipsum incididunt cillum.\n'+
              'Mollit do sint in quis ipsum incididunt cillum.\n'+
              'Mollit do sint in quis ipsum incididunt cillum.'
console.log(poema);

const poema2 = 'Mollit do sint in quis ipsum incididunt cillum.\n\
Mollit do sint in quis ipsum incididunt cillum.\n\
Mollit do sint in quis ipsum incididunt cillum.\n\
Mollit do sint in quis ipsum incididunt cillum.'
console.log(poema2);

const poema3 = `Mollit do sint in quis ipsum incididunt cillum.
Mollit do sint in quis ipsum incididunt cillum.
Mollit do sint in quis ipsum incididunt cillum.
Mollit do sint in quis ipsum incididunt cillum.`
console.log(poema3);