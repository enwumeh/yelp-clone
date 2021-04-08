import axios from 'axios';

export default axios.create({
  //url for backend server
  baseURL: "http://localhost:4000/api/v1/restaurants",
});
