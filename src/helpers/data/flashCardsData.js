import axios from 'axios';

const baseUrl = 'https://prept-d007e.firebaseio.com';

const getFlashCards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/flashCards.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const createFlashCard = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/flashCards.json`, object)
    .then((response) => {
      axios.patch(`${baseUrl}/flashCards/${response.data.name}.json`, { firebaseKey: response.data.name }).then((resp) => resolve(resp));
    }).catch((error) => reject(error));
});

export default { getFlashCards, createFlashCard };
