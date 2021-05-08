import heroes, {owners} from '../data/heroes';

console.log(heroes);
console.log(owners);

//FIND
/* const getHeroById = (id) => {

    return heroes.find((heroe) => {              //heroe es el elemento que se va usar para recorrer
      if(heroe.id === id){
        return true;
      }else{
        return false;
      }
    })
}; */

//FIND Alternitiva
export const getHeroById = (id) => {

  return heroes.find(heroe => heroe.id === id);
  //alternativa
  //return true ? heroes.find(heroe => heroe.id === id) : `Personaje ${id} no existe`
};
console.log(getHeroById(2));


//FILTER
export const getHeroesByOwner = (owner) => {
  return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getHeroesByOwner('Marvel'));

