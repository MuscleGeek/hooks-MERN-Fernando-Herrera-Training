// Desestructuracion
// Asignacion Desestrcuturante

const persona = {
    nombre: 'Jonathan',
    edad: 45,
    clave: 'DiaryUse'
  }
  /* console.log(persona.nombre);
  console.log(persona.edad);
  console.log(persona.clave); */
  
  ///////////////////
  /* const {nombre, clave, edad} = persona; //extraigo el nombre, clave y edad del objeto persona
  
  console.log(nombre);
  console.log(edad);
  console.log(clave);
   */
  
  
  const getPersona = ({clave,nombre, edad, rango = 'Developer'}) => {
  
      //console.log(nombre, edad, rango);
      return {
        nombreClave: clave,
        anios: edad,
        latlng:{
          lat: 14.1232,
          lng: -12.3232,
        }}
  }
  
  const {nombreClave, anios, latlng:{lat,lng}} = getPersona(persona); //desestrucutrando la function 
  //alternativa
  //const {nombreClave, anios, latlng} = getPersona(persona);
  console.log(nombreClave, anios);
  //console.log(latlng);
  console.log(lat,lng);
  
  