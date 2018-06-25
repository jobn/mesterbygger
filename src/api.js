import axios from "axios";

const instance = axios.create({
  baseURL: "https://rebrickable.com/api/v3/",
  timeout: 5000,
  headers: {
    Authorization: `key ${process.env.REACT_APP_REBRICKABLE_TOKEN}`
  }
});

export const fetchThemes = () => instance.get("lego/themes?page_size=1000");
export const fetchAllSets = () => instance.get("lego/sets?page_size=20000");
