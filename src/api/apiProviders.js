import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export function getProviders(name){
    let url = `${API_URL}/movies/providers/${encodeURI(name)}`;
    return axios.get(url);
}