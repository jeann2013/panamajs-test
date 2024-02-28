const getDataFromApi = require('./getDataFromApi');

// Llama a la función getDataFromApi y maneja la promesa resultante
getDataFromApi()
  .then(data => {
    console.log('Datos recibidos:');
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener datos de la API:', error);
  });
