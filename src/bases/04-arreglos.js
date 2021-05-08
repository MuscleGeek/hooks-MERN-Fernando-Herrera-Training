
//arreglos en JS
//const arreglo = new Array(100);

const arreglo = [1,2,3,4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

//nuevo arrreglo mas una nueva posicion
let arreglo2 = [...arreglo, 5];

//nuevo arreglo que multiplica cada item por 2
const arreglo3 =  arreglo.map(function(item) {

  return item * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);