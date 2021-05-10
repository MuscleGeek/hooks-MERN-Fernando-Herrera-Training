const apiKey = oXz4pIcNbFFoxIdwvsfLvTQr3BzYAtdq;

const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request.then(resp => resp.json())
       .then(({data}) => {const {url} = data.images.original //{data} lo que estamos es desestructurando el contenido del api que ontiene data
        //y lo que hacemos es accesar a la urlcomo se aprecia en el console.log de la linea 4
       
        const img = document.createElement('img');  //creamos una etiqueta img
        img.src= url;                               //asignamos la desestructuracion del url (la url que recibimos del api)

        document.body.append(img);                  //adjuntamos la etiqueta de img al body html recibiendo un gif random
})
        .catch(console.warn);