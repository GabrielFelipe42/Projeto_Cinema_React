import axios from "axios";

//URL DA API:
//BASE DA URL: https://api.themoviedb.org/3/
//CHAVE:cc726d755e438ee319efe378b9054dbc

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
