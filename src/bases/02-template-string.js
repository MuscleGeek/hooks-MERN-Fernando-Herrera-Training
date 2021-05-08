
const nombre =  'Jonathan';
const apellido  = 'Villalobos';

//const nombreCompleto = nombre + '' + apellido;

const nombreCompleto = `Hola Mundo ${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo(nombre){
  return 'Hola Mundo' + nombre;

}

console.log(`Este es un saludo  ${getSaludo(nombre)}`);