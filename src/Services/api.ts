import axios from "axios";

export const api = axios.create({
  baseURL: "https://s1m6back.herokuapp.com/",
});
