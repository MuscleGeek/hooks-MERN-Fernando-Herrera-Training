//funciones en JS

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
  }
  
  const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
  }
  
  const saludar3 = (nombre) => `Hola, ${nombre}`;
  // console.log('Goku');
  
  console.log(saludar2('Jonathan'));
  console.log(saludar3('Jonathan'));
  
  
  const getUSer = () => ({
      uid: 'ABC123',
      username: 'JohnDoe',
    });
  
  
  const user = getUSer();
  console.log(user);
  
  //Tarea
  //1.Tranformar a una funcion de flecha
  //2. Tiene que retornar un objeto implicito
  //3.Pruebas
  
  /* function GetUsuarioActivo(nombre) {
    return {
       uid: 'ABC567',
       username: 'nombre',
    }
  } */
  
  const GetUsuarioActivo = (nombre) => (
     {
       uid: 'ABC567',
       username: nombre,
    })
  
  
  const usuarioActivo = GetUsuarioActivo('Jonathan');
  console.log(usuarioActivo)