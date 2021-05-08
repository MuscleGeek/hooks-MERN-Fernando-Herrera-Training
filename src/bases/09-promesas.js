import {getHeroById} from './bases/08-imp-exp';
import heroes from './data/heroes';

/* const promesa = new Promise( (resolve, reject) => {

  setTimeout(() => {
     //TAREA
     //solucion
     const heroes = getHeroById(2);
     resolve();
     console.log(heroes);
  }, 2000);
});

promesa.then((heroes) =>{console.log('Then de la promesa Heroe', heroes)})
.catch(err => {console.warning(err)}); */

//alternative
/* const getHeroesIdAsync = (id) => {
  return  new Promise( (resolve, reject) => {

    setTimeout(() => {
       //TAREA
       //solucion
       const heroes = getHeroById(id);
       resolve();
       console.log(heroes);
    }, 2000);
  });
}

getHeroesIdAsync(4)
  .then(heroe => console.log('Heroe', heroe))
  
 */

  //Tarea usar Catch
  const getHeroesIdAsync = (id) => {
    return  new Promise( (resolve, reject) => {
  
      setTimeout(() => {
         //TAREA
         //solucion
         const hero = getHeroById(id);    
         //console.log(heroes);
        if(hero){                         //si encuentra el id que lo muestre el then
          resolve(hero)
        }else{
          reject('no se pudo encontrar el heroe');  //sino encuentra el id que tire catch
        }         
      }, 2000);
    });
  }
  
  getHeroesIdAsync(1)
    /* .then(heroe => console.log('Heroe', hero))
    .catch(err => {console.warn(err)}) */

    //Tarea acortar - optimizar
    .then(console.log)
    .catch(console.warn)

  