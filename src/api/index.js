import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.amcham.uz/",
  headers: {
    "api-token": "iet378aopRlshw728191",
  },
});
