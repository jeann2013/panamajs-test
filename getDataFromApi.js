const axios = require('axios');
async function getDataFromApi() {
  try {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const response = await axios.get(apiUrl);    
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener datos de la API:', error);
  }
}
module.exports = getDataFromApi;