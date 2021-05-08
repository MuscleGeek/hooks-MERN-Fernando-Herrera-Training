const personajes = ['Jonathan', 'John', 'Johnny'];

/* console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); */

///cada "," es una posicion//

//const [p1] = personajes; //llamamos la posicion [0] 'Jonathan'
//const [ ,p2] = personajes; //llamamos la posicion [1] 'John'
const [ , ,p3] = personajes; //llamamos la posicion [2] 'Johnny'

console.log(p3);

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras,numeros);



//Tarea
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre

/* const useState = (valor) => {
  return [valor, () => {console.log('Hola Mundo')}]
}
const arr =  useState('Jonathan');

console.log(nombre);
setNombre(); */

//solucion
const Estado = (valor) => {
  return [valor, () => {console.log('Hola Mundo')}]
}

const [nombre, setNombre] = Estado('Jonathan');
console.log(nombre);
setNombre();