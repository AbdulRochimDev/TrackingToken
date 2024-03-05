// libraries/axiosLibrary.js
import axios from 'axios';

async function fetchData(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Terjadi kesalahan pada axiosLibrary:', error.message);
    return null;
  }
}

export default fetchData;