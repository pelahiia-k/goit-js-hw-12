import axios from 'axios';

const API_KEY = '56223156-16dc111f80fb4ae9334d29acf';
const BASE_URL = 'https://pixabay.com/api/?';

export async function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
