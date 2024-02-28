const axios = require('axios');
const getDataFromApi = require('../getDataFromApi');

jest.mock('axios');

test('getDataFromApi devuelve datos válidos', async () => {
  const mockData = { userId: 1, id: 1, title: 'mock title', body: 'mock body' };
  
  axios.get.mockResolvedValue({ data: mockData });

  const data = await getDataFromApi();
  
  expect(data).toEqual(mockData);
});

// test('getDataFromApi devuelve error', async () => {    
//   axios.get.mockRejectedValue(new Error('API call failed'));
//   await expect(getDataFromApi()).rejects.toThrow('Error al obtener datos de la API:');
//   expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
// });
