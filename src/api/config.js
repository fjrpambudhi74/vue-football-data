import axios from "axios";

const API_KEY = "647bfda4d3fc48a3b3da19d135c57640";

export const HTTP = axios.create({
  baseURL: `http://api.football-data.org/v2/`,
  headers: {
    "X-Auth-Token": `${API_KEY}`,
  },
});
