import axios from 'axios';

export const getFixturesData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error;
  }
};
