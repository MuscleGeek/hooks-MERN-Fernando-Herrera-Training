

const persona = {
    nombre: 'Jonathan',
    apellido: 'Villalobos',
    edad: 45,
    direccion: {
      ciudad: 'New York',
      zip: 20201,
      lat: 14.3232,
      lng: 34.9233321
    }
  };
  
  console.table(persona);
  
  //alternativa
  //console.log({persona});
  //console.log([persona:persona]);
  
  //------------------------////
  
  //const persona2 = persona;
  
  //spread operator//
  
  const persona2 = {...persona}
  persona2.nombre = 'Peter';
  
  console.log(persona)
  console.log(persona2)