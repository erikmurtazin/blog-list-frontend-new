import axios from 'axios';

const baseUrl = 'http://localhost:3001/';

export const checkUser = async credentials => {
  const resp = await axios.post(`${baseUrl}login`, credentials);
  return resp.data;
};
