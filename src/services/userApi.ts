import axios from "axios";

const userApi = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 1000 * 4,
});

export { userApi }