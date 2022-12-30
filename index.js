const axios = require('axios')

const getBreeds = async () => {

  try {
    return await axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error);
  }
}

getBreeds();
